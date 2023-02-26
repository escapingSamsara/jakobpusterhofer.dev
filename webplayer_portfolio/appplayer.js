// MUSIC PLAYER VARIABLES -------------------------------------------------
const $ = document

// PLAYER AND IMG CONTROLS
const image = $.getElementById('cover')

const title = $.getElementById('title')

const artist = $.getElementById('artist')

const music = $.querySelector('audio')

const currentTimeEl = $.getElementById('current-time')

const durationEl = $.getElementById('duration')

const progress = $.getElementById('progress')

const progressContainer = $.getElementById('progress-container')

const prevBtn = $.getElementById('prev')

const playBtn = $.getElementById('play')

const nextBtn = $.getElementById('next')

const vinylCircle = $.getElementById('circle-vinyl')

// VOLUME CONTROL
const volumeIcon = $.querySelector('#volume-icon')
const currentVolume = $.querySelector('#volume')

const background = $.getElementById('background')

/*
SONG LIST AND DIRECT DOWNLOAD LINKS FROM GOOGLE DRIVE
https://docs.google.com/uc?export=download&id=1wYOcHMj_yXvzYlQpnwjKmJyXUruLG1vx   *lost tape
https://docs.google.com/uc?export=download&id=1VzdT39aCBXB0rFUmRSC8IOxulQ9rRWxj   *through the forest
https://docs.google.com/uc?export=download&id=1KPUhIKUTZbgtqlqar95-Hkh8ew-Tlpwl   *float
https://docs.google.com/uc?export=download&id=17h8mMXdi6tsgT2TAS9XfvbX6eLOnUfPa   *vanilla ice cream
https://docs.google.com/uc?export=download&id=1bI2bCYoF7r5W9mS_UzbYXazGw8RclmFi   *today is a gift
https://docs.google.com/uc?export=download&id=1_zuMc6KCqCrN7o8cvUU1I-NT58U1ra0Q   *the message
https://docs.google.com/uc?export=download&id=1aEJ2GpUv2Ge10NOLlK8ow9u0bxLe2iyJ   *tulip


IMAGES FOR SONGS WITH DIRECT DOWNLOAD LINK FROM GOOGLE DRIVE
https://docs.google.com/uc?export=download&id=1J1BIg_tfi7EHnb9yZssSTECN5kZ2Ph-H  *lost tape
https://docs.google.com/uc?export=download&id=11XRdNATAeM-QKTiNbNqhb25Cdsey2KZX  *vanilla ice cream
https://docs.google.com/uc?export=download&id=1fOl0nk2axCXig9STCnsCh_utJCG8lt8r   *through the forest
https://docs.google.com/uc?export=download&id=1FDxXqUxkwt-HWk1uEo0Vt8l82zs3H3z2  *today is a gift
https://docs.google.com/uc?export=download&id=14vrB6AKaF6sNx7zT4kNoKboVAAQfC541  *the message
https://docs.google.com/uc?export=download&id=14mKEEEw-OJH4tCtXU6zM__eX-ZnBuD4h   *float
https://docs.google.com/uc?export=download&id=1mpyFj7rlv47GLzIoHVcH0R14MSn4dzn2  *tulip
*/

//SONG ARRAY (PLAYER SONG LIST)

const songs = [
  {
    path: '../webplayer_portfolio/audioFiles/tulip_audio.mp3',
    // path: 'https://docs.google.com/uc?export=download&id=1aEJ2GpUv2Ge10NOLlK8ow9u0bxLe2iyJ',
    musicName: 'tulip',
    artist: 'escapingSamsara',
    cover: '../webplayer_portfolio/img/song-img/compressedSongImg/tulip.png',
    // cover: 'https://docs.google.com/uc?export=download&id=1mpyFj7rlv47GLzIoHVcH0R14MSn4dzn2',
  },
  {
    path: '../webplayer_portfolio/audioFiles/float_mastered_v1.mp3',
    // path: 'https://docs.google.com/uc?export=download&id=1TReKakpjZiUB3CcZtLV9IZ58fxwc1d7b',
    musicName: 'float',
    artist: 'escapingSamsara',
    cover: '../webplayer_portfolio/img/song-img/compressedSongImg/float.jpg',
    // cover: 'https://docs.google.com/uc?export=download&id=14mKEEEw-OJH4tCtXU6zM__eX-ZnBuD4h',
  },
  {
    path: '../webplayer_portfolio/audioFiles/todayisagift_audio.mp3',
    // path: 'https://docs.google.com/uc?export=download&id=1bI2bCYoF7r5W9mS_UzbYXazGw8RclmFi',
    musicName: 'today is a gift',
    artist: 'escapingSamsara',
    cover:
      '../webplayer_portfolio/img/song-img/compressedSongImg/todayisagift2.png',
    // cover: 'https://docs.google.com/uc?export=download&id=1FDxXqUxkwt-HWk1uEo0Vt8l82zs3H3z2',
  },
  {
    path: '../webplayer_portfolio/audioFiles/themessage_audio.mp3',
    // path: 'https://docs.google.com/uc?export=download&id=1_zuMc6KCqCrN7o8cvUU1I-NT58U1ra0Q ',
    musicName: 'the message',
    artist: 'escapingSamsara',
    cover:
      '../webplayer_portfolio/img/song-img/compressedSongImg/themessage.png',
    // cover: 'https://docs.google.com/uc?export=download&id=14vrB6AKaF6sNx7zT4kNoKboVAAQfC541',
  },
  {
    path: '../webplayer_portfolio/audioFiles/vanillaicecream_audio.mp3',
    // path: 'https://docs.google.com/uc?export=download&id=17h8mMXdi6tsgT2TAS9XfvbX6eLOnUfPa',
    musicName: 'vanilla icecream',
    artist: 'escapingSamsara',
    cover:
      '../webplayer_portfolio/img/song-img/compressedSongImg/vanillaicecream.png',
    // cover: 'https://docs.google.com/uc?export=download&id=11XRdNATAeM-QKTiNbNqhb25Cdsey2KZX',
  },

  // {
  //   path: './webplayer_portfolio/audioFiles/losttape_audio.mp3',
  //   musicName: 'lost tape',
  //   artist: 'cloudbloom',
  //   cover: './webplayer_portfolio/song-img/compressedSongImg/losttape_dalle22.png',
  // },
  // {
  //   path: './webplayer_portfolio/audioFiles/throughtheforest_audio',
  //   musicName: 'through the forest',
  //   artist: 'escapingSamsara',
  //   cover: './webplayer_portfolio/song-img/compressedSongImg/throughtheforest.jpeg',
  // },
]
//----------------------------------------
//----------------------------------------

let isLoading = false

// MUTE VOLUME
function muteSound() {
  music.volume = 0
  currentVolume.value = 0
  volumeIcon.classList.replace('fa-volume-up', 'fa-volume-off')
}

// UNMUTE VOLUME
function unmuteSound() {
  music.volume = 0.5
  currentVolume.value = 80
  volumeIcon.classList.replace('fa-volume-off', 'fa-volume-up')
}

//MUTE/UNMUTE TOGGLE
function muteToggle() {
  if (music.volume > 0) {
    muteSound()
  } else {
    unmuteSound()
  }
}

// CHANGE VOLUME
function changeVolume() {
  music.volume = currentVolume.value / 100
}

// PLAY SONG
function playSong() {
  isLoading = true
  playBtn.classList.replace('fa-play', 'fa-pause')
  playBtn.setAttribute('title', 'Pause')
  music.play()
}

// PAUSE SONG
function pauseSong() {
  isLoading = false
  playBtn.classList.replace('fa-pause', 'fa-play')
  playBtn.setAttribute('title', 'Play')
  music.pause()
}

//PLAY/PAUSE TOGGLE
function playToggle() {
  if (isLoading) {
    image.classList.remove('play')
    pauseSong()
  } else {
    image.classList.add('play')
    playSong()
  }
}

// LOAD SONG
function loadSongs(song) {
  title.innerHTML = song.musicName
  artist.innerHTML = song.artist
  music.src = song.path
  changeCover(song.cover)
}

// CHANGE COVER
function changeCover(cover) {
  image.classList.remove('active')
  setTimeout(function () {
    image.src = cover
  }, 500)

  setTimeout(function () {
    image.classList.add('active')
  }, 500)
  background.src = cover
}

let songIndex = 0

// PREV SONG
function prevSong() {
  songIndex--
  if (songIndex < 0) {
    songIndex = 2
  }
  loadSongs(songs[songIndex])
  playSong()
}

// NEXT SONG
function nextSong() {
  songIndex++
  if (songIndex > songs.length - 1) {
    songIndex = 0
  }
  loadSongs(songs[songIndex])
  playSong()
}

loadSongs(songs[songIndex])

// PROGRESS
function updateProgressBar() {
  if (isLoading) {
    const duration = music.duration
    let currentTime = music.currentTime
    let progressPercent = (currentTime / duration) * 100
    progress.style.width = progressPercent + '%'
    const durationMinutes = Math.floor(duration / 60)
    let durationSeconds = Math.floor(duration % 60)
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds
    }
    if (durationSeconds) {
      durationEl.innerHTML = durationMinutes + ':' + durationSeconds
    }
    const currentMinutes = Math.floor(currentTime / 60)
    let currentSeconds = Math.floor(currentTime % 60)
    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds
    }
    currentTimeEl.innerHTML = currentMinutes + ':' + currentSeconds
  }
}

function setProgressBar(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = music.duration
  music.currentTime = (clickX / width) * duration
}

// ALL EVENT LISTENERS
playBtn.addEventListener('click', playToggle)
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
music.addEventListener('ended', nextSong)
music.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', setProgressBar)
volumeIcon.addEventListener('click', muteToggle)
currentVolume.addEventListener('change', changeVolume)

//--------------------------------------------------------
