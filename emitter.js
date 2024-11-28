
const EventEmitter = require('events');

console.log(EventEmitter);

class School extends EventEmitter{
    startPeriod(){
        //console.log('Class Started');

        setTimeout(()=>{
            this.emit('bellring',{
                period:'first',
                text:'period ended'
            });
        }, 3000);

    }
}

module.exports = School;