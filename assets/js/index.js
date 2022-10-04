const audioLightRain = new Audio('./assets/audios/light-rain.mp3')
const audioHeavyRain = new Audio('./assets/audios/heavy-rain.mp3')
const audioWinter = new Audio('./assets/audios/winter-wind.mp3')
const audioJungle = new Audio('./assets/audios/deep-jungle.mp3')
const audioForest = new Audio('./assets/audios/forest.mp3')
const audioOcean = new Audio('./assets/audios/ocean.mp3')
const audioCity = new Audio('./assets/audios/city.mp3')
const audioBusyPlace = new Audio('./assets/audios/busy-place.mp3')

function stopAll() {
  audioLightRain.pause()
  audioHeavyRain.pause()
  audioWinter.pause()
  audioJungle.pause()
  audioForest.pause()
  audioOcean.pause()
  audioCity.pause()
  audioBusyPlace.pause()
}

function lightRain() {
  stopAll()
  audioLightRain.play()
}

function heavyRain() {
  stopAll()
  audioHeavyRain.play()
}

function winter() {
  stopAll()
  audioWinter.play()
}

function jungle() {
  stopAll()
  audioJungle.play()
}

function forest() {
  stopAll()
  audioForest.play()
}

function ocean() {
  stopAll()
  audioOcean.play()
}

function city() {
  stopAll()
  audioCity.play()
}

function busyPlace() {
  stopAll()
  audioBusyPlace.play()
}






