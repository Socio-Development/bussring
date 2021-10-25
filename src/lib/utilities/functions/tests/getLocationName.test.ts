import type { IApiData } from '$lib/interfaces'
import getLocationName from '../getLocationName'

test('Is able to retrieve StopPlace name', () => {
  const apiCallData: IApiData = {
    "data": {
      "stopPlace": {
        "name": "Scandic Ishavshotel",
        "id": "NSR:StopPlace:52806",
        "estimatedCalls": [
          {
            "expectedDepartureTime": "2021-10-25T06:30:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          }
        ]
      }
    }
  }
  expect(
    getLocationName(apiCallData)
  ).toBe("Scandic Ishavshotel")
})