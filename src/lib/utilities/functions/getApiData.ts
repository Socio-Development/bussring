/**
 * Uses its built-in query to fetch data from the Entur API.
 * 
 * @author Casper Tollefsen <casper.tollefsen@mobit.no>
 * @version 0.0.1
 * @param stopPlaceId The NSR:StopPlace:<ID>
 * @param resultLimit The number of departures to fetch
 * @returns An object containing all data fetched from the API
 * @since 0.0.1
 */
async function getApiData(stopPlaceId: number, resultLimit?: number) {
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
            transportMode
          }
        }
      }
    }
  }`

  const getData = () => fetch('https://api.entur.io/journey-planner/v2/graphql', {
    method: 'POST',
    headers: {
      'ET-Client-Name': 'bussring-digital_signage',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query }),
  })
    .then(res => res.json())
    .then(stopPlaceData => {
      return stopPlaceData
    })
  
  return getData()
}

export default getApiData