interface AudioPlayer {
  audioVolume: number
  songDuration: number
  song: string
  details: Details
}

interface Details {
  author: string
  year: number
}

const audioPlayer: AudioPlayer = {
  audioVolume: 100,
  songDuration: 180,
  song: 'La chona',
  details: {
    author: 'Los tucanes de Tijuana',
    year: 1995,
  },
}

const song = 'New Song'

const { audioVolume, songDuration, song: anotherSong, details } = audioPlayer
const { author, year } = details
const { author: anotherauthor, year: anotheryear } = audioPlayer.details

// console.log({ audioVolume, songDuration, song, anotherSong, details })
// console.log({ author, year })

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [p1, p2, p3] = dbz

console.error('Personaje 3', dbz[3] || 'No existe')
console.log({ p1, p2, p3 })

const [, , Trunks = 'Not found'] = ['Goku', 'Vegeta', 'Trunks']
console.error('Personaje 3', Trunks)

export {}
