// function changeTimezone(date, ianatz) {

//     // suppose the date is 12:00 UTC
//     var invdate = new Date(date.toLocaleString('en-US', {
//         timeZone: ianatz
//     }));

//     // then invdate will be 07:00 in Toronto
//     // and the diff is 5 hours
//     var diff = date.getTime() - invdate.getTime();

//     // so 12:00 in Toronto is 17:00 UTC
//     return new Date(date.getTime() + diff);

// }

// // E.g.
// var there = new Date();
// // var here = changeTimezone(there, "America/Toronto");

// // console.log(`Here: \nToronto: ${there.toString()}`);
// console.log(there);



// var foo1 = 'foo';
// var foo2 = 'bar';
// var foo3 = 'baz';

// var index = 2;
// console.log(eval('foo'= + index));

let kp = [];
let kp1 = new Array('name', 'age', 'surname');
let kp2 = new Array('2name', '1age', '1surname');
kp.push(kp1);
kp.push(kp2);

console.log(kp);