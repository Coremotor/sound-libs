import pz from 'pizzicato'

const timeRange = document.querySelector('#reverb-time')
const decayRange = document.querySelector('#reverb-decay')
const mixRange = document.querySelector('#reverb-mix')

const options = {
    time: timeRange.valueAsNumber,
    decay: decayRange.valueAsNumber,
    mix: mixRange.valueAsNumber,
    reverse: false,
}

export const reverb = new pz.Effects.Reverb(options);

timeRange.addEventListener('input', (event) => {
    reverb.time = event.target.valueAsNumber;
}, false);

decayRange.addEventListener('input', (event) => {
    reverb.decay = event.target.valueAsNumber;
}, false);

mixRange.addEventListener('input', (event) => {
    reverb.mix = event.target.valueAsNumber;
}, false);
