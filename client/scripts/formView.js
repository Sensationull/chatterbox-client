var FormView = {

  $form: $('form'),

  createMessage: function(text, username, roomname) {
    this.text = text;
    this.username = username;
    this.roomname = roomname; 
  },

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //var ourMessage = new FormView.createMessage();
    //Parse.create(ourMessage);
    var ourMessage = {
      text: $('#message').val(),
      username: App.username,
      roomname: 'lobby'
    };
    Parse.create(ourMessage);
    //event.preventDefault();
    console.log(event);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};