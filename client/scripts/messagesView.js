var MessagesView = {

  $chats: $('#chats'),
 
  $username: $('.username'),

  initialize: function() {
  },

  render: function() {
  }, 

  renderMessage: function(message) {
    var currentName = message.username;
    MessagesView.$chats.append("<div class= 'text'>" + message.text + "</div>" + "<div class = 'username'>" + "<button>" + message.username + "</button>" +  "</div>" +  "<div class = 'roomname'>" + message.roomname + "</div>");
  }
};

