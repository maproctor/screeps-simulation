function identify(creep,errorchecking) {
    var WORKcount = creep.getActiveBodyparts(WORK);
    var MOVEcount = creep.getActiveBodyparts(MOVE);
    var CARRYcount = creep.getActiveBodyparts(CARRY);

    if (errorchecking == true)
    {console.log('Identifying '+creep.body.length+' Parts')
    console.log(WORKcount+' Work parts '+MOVEcount+' Move parts '+CARRYcount+' Carry parts')}

if (WORKcount > 0 && CARRYcount > 0)
return 'worker';
}

module.exports = identify;