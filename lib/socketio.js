module.exports = function () {
    function create(app, config, tomahawk) {
        config = config || {plugins:{store:{}}};
        var socketio  = require('socket.io'),
            version   = config.version        || '0.0.0',
            logger    = config.logger         || {log:function(){}},
            meta      = config.meta           || {$_id:'socket-io'};

        var io = socketio(tomahawk.server);
        return io;
    }

    return create;
}();

