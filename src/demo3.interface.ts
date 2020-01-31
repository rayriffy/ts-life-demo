type MediaType = 'ANIME' | 'MANGA'

export enum MediaFormat {
  TV, TV_SHORT, MANGA, NOVEL
}

export interface IMedia {
  id: number
  type: MediaType
  format: MediaFormat
  title: {
    romaji: string
    english: string
    native: string
  }
  isAdult?: boolean
}
