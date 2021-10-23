import type { IApiData, IDeparture } from './types/interfaces'

export function getApiData(stopPlaceId: number, resultLimit: number) {
  const query = `{
    stopPlace(id: "NSR:StopPlace:${ stopPlaceId }") {
      name
      id
      estimatedCalls(numberOfDepartures: ${ resultLimit }) {
        expectedDepartureTime
        destinationDisplay {
          frontText
        }
        serviceJourney {
          line {
            publicCode
          }
        }
      }
    }
  }`

  return fetch('https://api.entur.io/journey-planner/v2/graphql', {
    method: 'POST',
    headers: {
        'ET-Client-Name': 'bussring-digital-signage',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(stopPlaceData => stopPlaceData)
}

export function getDepartureList({ data }: IApiData) {
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

export function getLocationName({ data }: IApiData) {
  return data.stopPlace.name
}