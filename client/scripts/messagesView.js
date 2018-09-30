var MessagesView = {

  $chats: $('#chats'),
 
  $username: $('.username'),

  initialize: function() {
  },

  render: function() {
  }, 

  renderMessage: function(message) {
    var $mes = MessageView.render(message);
    MessagesView.$chats.append($mes);
    //MessagesView.$chats.append("<div class= 'text'>" + message.text + "</div>" + "<div class = 'username'>" + "<button>" + message.username + "</button>" +  "</div>" +  "<div class = 'roomname'>" + message.roomname + "</div>");
  }
};

