// import * as Tone from 'tone'
import './styles.css'
import pz from 'pizzicato'
// import audio from './files/audio.mp3'
import audio from './files/vocal.mp3'
import {delay} from './scripts/delay.js'
import {reverb} from './scripts/reverb.js'
import {convolver} from './scripts/convolver.js'

const buttonStart = document.querySelector('#btn-start')
const buttonStop = document.querySelector('#btn-stop')
const buttonPause = document.querySelector('#btn-pause')
const delayCheckbox = document.querySelector('#delay-checkbox')
const reverbCheckbox = document.querySelector('#reverb-checkbox')
const convolverCheckbox = document.querySelector('#convolver-checkbox')

export const sound = new pz.Sound({
    source: 'file',
    options:{ path: audio, loop:true }
}, () => onSoundLoaded(sound))

const onSoundLoaded = (sound) => {
    delayCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            sound.addEffect(delay)
        }
        if (!e.target.checked) {
            sound.removeEffect(delay)
        }
    })

    reverbCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            sound.addEffect(reverb)
        }
        if (!e.target.checked) {
            sound.removeEffect(reverb)
        }
    })

    convolverCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            sound.addEffect(convolver)
        }
        if (!e.target.checked) {
            sound.removeEffect(convolver)
        }
    })

    buttonStart.addEventListener('click', () => {
        buttonStart.classList.add('start')
        buttonPause.classList.remove('pause')
        buttonStop.classList.remove('stop')
        sound.play()
    })
    buttonStop.addEventListener('click', () => {
        buttonStop.classList.add('stop')
        buttonStart.classList.remove('start')
        buttonPause.classList.remove('pause')
        sound.stop()
    })
    buttonPause.addEventListener('click', () => {
        buttonPause.classList.add('pause')
        buttonStart.classList.remove('start')
        buttonStop.classList.remove('stop')

        sound.pause()
    })
}

// const body = document.querySelector('body')
// const audioTag = document.createElement("audio");
// audioTag.setAttribute('controls', 'true')
// audioTag.setAttribute('src', audio)
//
// body.append(audioTag)