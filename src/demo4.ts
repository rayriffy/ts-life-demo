import { IResponse } from './demo4.interface'

interface IData {
  money: number
  gems: number
}

const res: IResponse<IData> = {
  status: 'success',
  codes: 201,
  response: {
    message: 'much types',
    data: {
      money: 999,
      gems: 5
    }
  }
}
