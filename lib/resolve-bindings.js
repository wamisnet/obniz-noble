var os = require('os');

module.exports = function() {
  var platform = os.platform();

    return require('./obniz-hci-socket/bindings');
};
