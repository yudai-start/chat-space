json.content @message.content
json.created_at @message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
json.user_name @message.user.name
json.image @message.image
json.id @message.id