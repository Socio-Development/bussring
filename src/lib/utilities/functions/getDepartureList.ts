import type {
  IApiData,
  IDeparture
} from '$lib/interfaces'

/**
 * Extracts a list of departures from the data object
 * returned by the API query.
 * 
 * @author Casper Tollefsen <casper.tollefsen@mobit.no>
 * @version 0.0.1
 * @param Object The data object returned from API query
 * @returns [{departureTime, destination, line, transport}]
 * @since 0.0.1
 */
export default function getDepartureList({ data }: IApiData) {
  let departureList: IDeparture[] = []
  data.stopPlace.estimatedCalls.forEach((departure) => {
    departureList.push({
      departureTime: new Date(departure.expectedDepartureTime),
      destination: departure.destinationDisplay.frontText,
      line: departure.serviceJourney.line.publicCode,
      transport: departure.serviceJourney.line.transportMode
    })
  })
  return departureList
}