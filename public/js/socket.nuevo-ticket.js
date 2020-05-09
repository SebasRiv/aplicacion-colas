
//Comando para establecer la comunicación

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Desconectado al servidor');

});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function () {
    
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        
        label.text(siguienteTicket);

    });
});

$(window).on('beforeunload', function(){
    socket.close();
});