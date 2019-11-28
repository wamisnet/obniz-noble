var Noble = require('./lib/noble');
var bindings = require('./lib/obniz-hci-socket/bindings');

module.exports = (obnizId, params)=>{
  return new Noble(new bindings(obnizId, params));
}
