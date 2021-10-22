export interface IDeparture {
  expectedDepartureTime: Date
  destinationDisplay: {
    frontText: string
  }
  serviceJourney: {
    line: {
      publicCode: string
    }
  }
}

export interface IStopPlace {
  name: string
  id: string
  estimatedCalls: IDeparture[]
}

export interface ITableData {
  headings: string[],
  body: IDeparture[]
}