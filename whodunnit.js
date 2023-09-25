// ep.1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//     };
// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//     }
// const verdict = declareMurderer();
//     console.log(verdict);
// terminal will print 'the murderer is miss scarlet'

// ep.2
// const murderer = 'Professor Plum';
// // const changeMurderer = function() {
// //     murderer = 'Mrs. Peacock';
// // }
// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }
// // changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// an error because murderer is a const so cannot be reassigned

// ep.3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// // First Verdict: The murderer is Mrs. Peacock, and Second Verdict: Professor Plum

// ep.4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// // suspects will be: miss S, Prof P, Col. M. BUT sus.3 will be Mrs. P

// ep.5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };
// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }
// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// // The weapon is Revolver

// ep.6
// let murderer = 'Colonel Mustard';
// const changeMurderer = function() {
//     murderer = 'Mr. Green';
// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }
// plotTwist();
// }
// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// the murderer will be mrs white

// ep.7
// let murderer = 'Professor Plum';
// const changeMurderer = function() {
//     murderer = 'Mr. Green';
//     const plotTwist = function() {
//         let murderer = 'Colonel Mustard';
//         const unexpectedOutcome = function() {
//             murderer = 'Miss Scarlet';
//         }
//     unexpectedOutcome();
//     }
//     plotTwist();
// }
// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// I found this one tricky... 
// I get that it won't be M, because the let limits that reassignation to within that function
// and I guess it can't be S either because that just reassigns the let-murderer in the above function?
// which, in turn, leaves the original let-murderer unaffected? after it has already been reassigned to G

// ep.8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };
// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }
//     const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//             scenario.weapon = 'Candle Stick';
//         }
//     }
//     unexpectedOutcome('Colonel Mustard');
//     }
//     plotTwist('Dining Room');
// }
// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// weapon will be candlestick

// ep.9
let murderer = 'Professor Plum';
if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}
const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}
const verdict = declareMurderer();
console.log(verdict);
// it will be prof plum because the switch to mrs peacock is a let, so limited to that if statement