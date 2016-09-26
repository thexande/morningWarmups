'use strict'
const schedule = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]
class hiCal {
  constructor(schedule) {
    this.schedule = schedule
    this.consecutiveSchedule = []
    this.consecutiveSchedule = this.arrangeMeetings(this.schedule)
  }
  arrangeMeetings(schedule) {
    return schedule.sort((a, b) => a.startTime - b.startTime)
  }
  condenseMeetingTimes(){
    return this.consecutiveSchedule.reduce((p, c, i, arr) => {

      console.log("p here")
      console.log(p)
      console.log("c here")
      console.log(c)

        if(p.c.endTime >= c.startTime){
          console.log("overlap")
          p.done.push({start: p.c.startTime, end: c.endTime})
        } else {
          // p.done.push( c)
        }
      p.c = c
      return p

      
    }, {c: {}, done: []})
  }
}

let myClass = new hiCal(schedule)
console.log(myClass.consecutiveSchedule)
console.log(myClass.condenseMeetingTimes())

