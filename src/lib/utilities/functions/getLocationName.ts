import type { IApiData } from '$lib/interfaces'

/**
 * Displays the name of the stop location.
 * 
 * @author Casper Tollefsen <casper.tollefsen@mobit.no>
 * @version 0.0.1
 * @param Object The data object returned from API query
 * @returns The name of the stop location
 * @since 0.0.1
 */
function getLocationName({ data }: IApiData) {
  return data.stopPlace.name
}

export default getLocationName