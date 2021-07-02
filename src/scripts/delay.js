import pz from 'pizzicato'

const feedbackRange = document.querySelector('#feedback')
const timeRange = document.querySelector('#time')
const mixRange = document.querySelector('#mix')

const options = {
    feedback: feedbackRange.valueAsNumber,
    time: timeRange.valueAsNumber,
    mix: mixRange.valueAsNumber,
}

export const delay = new pz.Effects.Delay(options);

feedbackRange.addEventListener('input', (event) => {
    delay.feedback = event.target.valueAsNumber;
}, false);

timeRange.addEventListener('input', (event) => {
    delay.time = event.target.valueAsNumber;
}, false);

mixRange.addEventListener('input', (event) => {
    delay.mix = event.target.valueAsNumber;
}, false);

