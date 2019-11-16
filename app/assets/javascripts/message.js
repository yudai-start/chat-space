$(function() {

  // メッセージ投稿機能（非同期通信）の追加用HTML
  function buildHTML(message){
    
    var contentHtml = message.content ? message.content : '';
    var imageHtml = message.image.url ? message.image.url : '';

    let html = `<div class="message" data-id = ${message.id}>
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                    ${contentHtml}
                    </p>
                    <img class="lower-message__image" src=${imageHtml}></img>
                  </div>
                </div>`
    return html;
  }

  function autoScroll(){
    let $scrollAuto = $('.messages');
    $scrollAuto.animate({scrollTop: $scrollAuto[0].scrollHeight}, 'slow');
  }

  function SubmitRecovery(){
    $('.new_message')[0].reset();
    $(".input-box__submit").prop('disabled', false);
  }

  // メッセージ投稿機能（非同期通信）
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(message){
        let html = buildHTML(message);
        $(".messages").append(html);
        SubmitRecovery();
        autoScroll();
     })
    .fail(function(){
      alert("error");
      SubmitRecovery()
    })
  })

  // 自動更新機能
  let reloadMessages = function() {
    let last_message_id = $('.message:last').data('id')  // 表示されているうちで、最新のメッセージのidを変数に代入   
    let group_page_url = location.href.replace( /messages/g , "" ) 
    let url = group_page_url +  "api/messages" 
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0){
      var insertHTML = "";
        messages.forEach(function(message){
        insertHTML = buildHTML(message);
        $(".messages").append(insertHTML);
        })
        autoScroll();
      }
    })
    .fail(function() {
      alert('自動更新ができません');
    });
  };

  // 自動更新をメッセージ投稿画面でのみに限定
  let cuurrent_page = location.href
  if (/groups/.test(cuurrent_page) && /messages/.test(cuurrent_page)){
    setInterval(reloadMessages,7000)
  }

 });