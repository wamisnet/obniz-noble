let Noble = require('./lib/noble');
let bindings = require('./lib/obniz-hci-socket/bindings');
let nobles = {};

function idFilter(obnizId){
  let str = "" + obnizId;
  return str.split("-").join("");
}

module.exports = (obnizId, params)=>{
    let id = idFilter(obnizId);
    if(!nobles[id]){
      nobles[id]  = new Noble(new bindings(obnizId, params));
    }

    return nobles[id] ;
}
