//Main AI for Screeps
var queue = require('./queue');
var memoryTest = require('./test');

function followOrders(creep,errorchecking) {
    var identify = require('./identify');
    var work = require('./work');
    
    if (errorchecking){
    console.log(creep+' Following Orders')}    

    if (identify(creep,false) == 'worker') {
        if (errorchecking){console.log(creep+' Identified as Worker');}
        work(creep,errorchecking);
        if (work(creep,false) == -1) {
            creep.say('?Work() error')
        }
    }
}


queue(true);
module.exports.loop = function() {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name]; //every creep gets a nickname
        var errorchecking = false;
        followOrders(creep,errorchecking) //Every nickname follows orders
        }
    }
