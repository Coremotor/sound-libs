import pz from 'pizzicato'
import {sound} from '../index'
import BlockInside from '../files/IMreverbs/BlockInside.wav'
import BottleHall from '../files/IMreverbs/BottleHall.wav'
import CementBlocks1 from '../files/IMreverbs/CementBlocks1.wav'
import CementBlocks2 from '../files/IMreverbs/CementBlocks2.wav'
import ChateaudeLogneOutside from '../files/IMreverbs/ChateaudeLogneOutside.wav'
import ConicLongEchoHall from '../files/IMreverbs/ConicLongEchoHall.wav'
import DeepSpace from '../files/IMreverbs/DeepSpace.wav'
import DerlonSanctuary from '../files/IMreverbs/DerlonSanctuary.wav'
import DirectCabinetN1 from '../files/IMreverbs/DirectCabinetN1.wav'
import DirectCabinetN2 from '../files/IMreverbs/DirectCabinetN2.wav'
import DirectCabinetN3 from '../files/IMreverbs/DirectCabinetN3.wav'
import DirectCabinetN4 from '../files/IMreverbs/DirectCabinetN4.wav'
import FiveColumns from '../files/IMreverbs/FiveColumns.wav'
import FiveColumnsLong from '../files/IMreverbs/FiveColumnsLong.wav'
import French18thCenturySalon from '../files/IMreverbs/French18thCenturySalon.wav'
import GoingHome from '../files/IMreverbs/GoingHome.wav'
import Greek7EchoHall from '../files/IMreverbs/Greek7EchoHall.wav'
import HighlyDampedLargeRoom from '../files/IMreverbs/HighlyDampedLargeRoom.wav'
import InTheSilo from '../files/IMreverbs/InTheSilo.wav'
import InTheSiloRevised from '../files/IMreverbs/InTheSiloRevised.wav'
import LargeBottleHall from '../files/IMreverbs/LargeBottleHall.wav'
import LargeLongEchoHall from '../files/IMreverbs/LargeLongEchoHall.wav'
import LargeWideEchoHall from '../files/IMreverbs/LargeWideEchoHall.wav'
import MasonicLodge from '../files/IMreverbs/MasonicLodge.wav'
import Musikvereinsaal from '../files/IMreverbs/Musikvereinsaal.wav'
import NarrowBumpySpace from '../files/IMreverbs/NarrowBumpySpace.wav'
import NiceDrumRoom from '../files/IMreverbs/NiceDrumRoom.wav'
import OnaStar from '../files/IMreverbs/OnaStar.wav'
import ParkingGarage from '../files/IMreverbs/ParkingGarage.wav'
import Rays from '../files/IMreverbs/Rays.wav'
import RightGlassTriangle from '../files/IMreverbs/RightGlassTriangle.wav'
import RubyRoom from '../files/IMreverbs/RubyRoom.wav'
import ScalaMilanOperaHall from '../files/IMreverbs/ScalaMilanOperaHall.wav'
import SmallDrumRoom from '../files/IMreverbs/SmallDrumRoom.wav'
import SmallPrehistoricCave from '../files/IMreverbs/SmallPrehistoricCave.wav'
import StNicolaesChurch from '../files/IMreverbs/StNicolaesChurch.wav'
import TrigRoom from '../files/IMreverbs/TrigRoom.wav'
import VocalDuo from '../files/IMreverbs/VocalDuo.wav'

const files = new Map()
files.set('BlockInside', BlockInside)
files.set('BottleHall', BottleHall)
files.set('CementBlocks1', CementBlocks1)
files.set('CementBlocks2', CementBlocks2)
files.set('ChateaudeLogneOutside', ChateaudeLogneOutside)
files.set('ConicLongEchoHall', ConicLongEchoHall)
files.set('DeepSpace', DeepSpace)
files.set('DerlonSanctuary', DerlonSanctuary)
files.set('DirectCabinetN1', DirectCabinetN1)
files.set('DirectCabinetN2', DirectCabinetN2)
files.set('DirectCabinetN3', DirectCabinetN3)
files.set('DirectCabinetN4', DirectCabinetN4)
files.set('FiveColumns', FiveColumns)
files.set('FiveColumnsLong', FiveColumnsLong)
files.set('French18thCenturySalon', French18thCenturySalon)
files.set('GoingHome', GoingHome)
files.set('Greek7EchoHall', Greek7EchoHall)
files.set('HighlyDampedLargeRoom', HighlyDampedLargeRoom)
files.set('InTheSilo', InTheSilo)
files.set('InTheSiloRevised', InTheSiloRevised)
files.set('LargeBottleHall', LargeBottleHall)
files.set('LargeLongEchoHall', LargeLongEchoHall)
files.set('LargeWideEchoHall', LargeWideEchoHall)
files.set('MasonicLodge', MasonicLodge)
files.set('Musikvereinsaal', Musikvereinsaal)
files.set('NarrowBumpySpace', NarrowBumpySpace)
files.set('NiceDrumRoom', NiceDrumRoom)
files.set('OnaStar', OnaStar)
files.set('ParkingGarage', ParkingGarage)
files.set('Rays', Rays)
files.set('RightGlassTriangle', RightGlassTriangle)
files.set('RubyRoom', RubyRoom)
files.set('ScalaMilanOperaHall', ScalaMilanOperaHall)
files.set('SmallDrumRoom', SmallDrumRoom)
files.set('SmallPrehistoricCave', SmallPrehistoricCave)
files.set('StNicolaesChurch', StNicolaesChurch)
files.set('TrigRoom', TrigRoom)
files.set('VocalDuo', VocalDuo)

const mixRange = document.querySelector('#convolver-mix')
const selectConvolver = document.querySelector('#convolver-select')

const options = {
    impulse: BlockInside,
    mix: mixRange.valueAsNumber,
}

const changeImpulse = (impulse) => {
    sound.removeEffect(convolver)
    convolver = new pz.Effects.Convolver({
        impulse: files.get(impulse),
        mix: mixRange.valueAsNumber,
    })
    sound.addEffect(convolver)
}

export let convolver = new pz.Effects.Convolver(options, () => {
});

mixRange.addEventListener('input', (event) => {
    convolver.mix = event.target.valueAsNumber;
}, false);

selectConvolver.addEventListener('change', (event) => {
    changeImpulse(event.target.value)
}, false);

