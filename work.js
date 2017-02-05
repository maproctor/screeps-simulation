//Takes a selected creep and causes him to work
var inRange = require('./inrange');

function work(creep,errorchecking){
    //if (errorchecking) {console.log('Work() function activated');}

    var e = creep.carry.energy;
    if (e == 0) {var empty = true;}
    if (e > 0 && e < 50) {var notFull = true;}
    if (e == 50) {var full = true;}

var stuffInCreepRange = inRange(creep,errorchecking);
var source = creep.room.find(FIND_SOURCES)[0];
var spawn = Game.spawns.Spawn1;
var controller = creep.room.controller

function prioritizeEnergy() {
    if (spawn.energy==300){
        return controller;}
    else return spawn
    }

//if empty and source is in range
if (empty && stuffInCreepRange.indexOf('source')> -1) {
        creep.harvest(source)
        if (errorchecking) {console.log(creep+' Activating Harvest Source')}
        return 0;
    }
//if empty and no source is in range
if (empty && stuffInCreepRange.indexOf('source') == -1) {
        creep.moveTo(source)
        if (errorchecking) {console.log(creep+' Activating Move to Source')}
        return 1;
    }
    
//if not full and in range of source
if (notFull && stuffInCreepRange.indexOf('source')> -1) {
        if (errorchecking) {console.log(creep+' Harvesting source')}
        creep.harvest(source);
        return 2;  
    }
//if not full, in range of spawn, and spawn is full
//this could be split based on how much energy the creep is carrying (more or less takes different endpoints)
if (notFull && stuffInCreepRange.indexOf('spawn')>-1 && spawn.energy == 300) {
    if (errorchecking) {console.log(creep+' Going Back to Source')}
    creep.moveTo(source);
    return 3;
}
//if not full, in range of spawn, and spawn is not full(rare case due to changes between tasks)
if (notFull && stuffInCreepRange.indexOf('spawn')>-1 && spawn.energy < 300) {
    if (errorchecking) {console.log(creep+' Going Back to Source')}
    creep.transfer(spawn, RESOURCE_ENERGY);
    return 3;
    }  
//if not full but in range of controller
if (notFull && stuffInCreepRange.indexOf('controller')>-1){
    if (errorchecking) {console.log(creep+' Going Back to Source')}
    creep.upgradeController(controller);
    return 4;
    }
//if not full and nothing is in range
if (notFull && stuffInCreepRange.length < 1) {
    if (errorchecking) {console.log(creep+' Going Back to Source')}
    creep.moveTo(source);
    return 5;
    }

//if full 
if (full) {
    if (errorchecking) {console.log(creep+' Prioritizing')}
    creep.moveTo(prioritizeEnergy());
    creep.transfer(spawn, RESOURCE_ENERGY);
    creep.upgradeController(controller);
    return 6;
    }
//throw an exception
else return -1
}

//End!

module.exports = work;