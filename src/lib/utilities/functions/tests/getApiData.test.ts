import type { IApiData } from '$lib/interfaces'
import fetch from 'jest-fetch-mock'
import getApiData from '../getApiData'

beforeEach(() => {
  fetch.resetMocks()
})

test('Properly fetch from API', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    "data": {
      "stopPlace": {
        "name": "Scandic Ishavshotel",
        "id": "NSR:StopPlace:52806",
        "estimatedCalls": [
          {
            "expectedDepartureTime": "2021-10-25T12:30:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92S",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T13:30:00+0200",
            "destinationDisplay": {
              "frontText": "Tromsø lufthavn"
            },
            "serviceJourney": {
              "line": {
                "publicCode": "FB92",
                "transportMode": "bus"
              }
            }
          },
          {
            "expectedDepartureTime": "2021-10-25T14:00:00+0200",
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
  }))
  
  const apiCallData: IApiData = await getApiData(52806, 3)

  expect(
    apiCallData.data.stopPlace.id
  ).toBe("NSR:StopPlace:52806")

  expect(
    apiCallData.data.stopPlace.estimatedCalls[0].expectedDepartureTime
  ).toBe("2021-10-25T12:30:00+0200")
})