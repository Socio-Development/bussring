import type { IAPIQuery, IDeparture } from './types/interfaces'

export function parseAPI({ data }: IAPIQuery) {
  let departureList: IDeparture[] = []
  data.stopPlace.estimatedCalls.forEach((departure) => {
    departureList.push({
      departureTime: new Date(departure.expectedDepartureTime),
      destination: departure.destinationDisplay.frontText,
      line: departure.serviceJourney.line.publicCode
    })
  })
  return departureList
}