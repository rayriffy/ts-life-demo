export interface IResponse<T = string> {
  status: 'success' | 'failed'
  codes: 201 | 401 | 405 | 701
  response: {
    message: string
    data: T
  }
} 
