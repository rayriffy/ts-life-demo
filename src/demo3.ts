import { IMedia, MediaFormat } from './demo3.interface'

const animes: IMedia[] = [
  {
    id: 104461,
    type: 'ANIME',
    format: MediaFormat.TV_SHORT,
    title: {
      romaji: 'Heya Camp△',
      english: 'ROOM CAMP',
      native: 'へやキャン△'
    }
  },
  {
    id: 104325,
    type: "ANIME",
    format: MediaFormat.TV_SHORT,
    title: {
      romaji: 'Nande Koko ni Sensei ga!?',
      english: 'Why the Hell are You Here, Teacher!?',
      native: 'なんでここに先生が!?'
    },
    isAdult: false
  }
]
