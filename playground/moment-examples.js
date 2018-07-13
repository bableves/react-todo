var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00 am -> 0

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1531491015;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));
