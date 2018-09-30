var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $room: $('#roomy'),

  initialize: function() {
    RoomsView.$room.on('submit', RoomsView.handleSubmit);
  },

  handleSubmit: function() {
    //initialize again iwth a didfferent room
  },

  renderRoom: function() {
    RoomsView.$select.append("<option>" + $('#roomy').val() + "</option>");
  }

};

$( '#rooms button' ).click(function() {
  RoomsView.renderRoom(); 
});

