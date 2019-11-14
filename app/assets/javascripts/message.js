$(function() {
  function buildHTML(message){
    let html = `<div class="message">
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
                    ${message.content}
                    </p>
                    <img class="lower-message__image" src="${message.image.url}">
                  </div>
                </div>`
    return html;
  }

  function buildNoImageHTML(message){
    let html = `<div class="message">
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
                    ${message.content}
                    </p>
                  </div>
                </div>`
    return html;
  }
 
  function afterSubmit(){
    $('.new_message')[0].reset();
    $(".input-box__submit").prop('disabled', false);
    let $scrollAuto = $('.messages');
    $scrollAuto.animate({scrollTop: $scrollAuto[0].scrollHeight}, 'slow');
  }

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
      if (message.image.url == null) {
        let html = buildNoIImageHTML(message);
        $(".messages").append(html);
        afterSubmit();
        }
      else{
        let html = buildHTML(message);
        $(".messages").append(html);
        afterSubmit();
        }
    })
    .fail(function(){
      alert("error");
      afterSubmit()
    })
  })
 });