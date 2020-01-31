interface IIntercom {
  name: string
  tel: number
}

type NameRemoved = Omit<IIntercom, 'name'>

type AllOptional = Partial<IIntercom>
