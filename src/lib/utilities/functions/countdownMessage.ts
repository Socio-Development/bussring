import minutesToDeparture from './minutesToDeparture'

/**
 * Generates a string containing the time until departure.
 * 
 * @author      Casper Tollefsen <casper.tollefsen@mobit.no>
 * @version     1.0.0-alpha.4
 * @param time  The departure Date object
 * @returns     Departure time as a string
 * @since       0.0.1
 */
  function countdownMessage(time: Date) {
  const minutes = minutesToDeparture(time)

  // Display "Leaving soon" notification
  if (minutes < 6) {
    return 'Under 5 min'
  }
  // Exclude hours
  if (minutes < 60) {
    return minutes + ' min'
  }
  // Exclude days
  if (minutes < 1440) {
    const hours = Math.floor(minutes / 60)
    return hours + ' t ' + (minutes % 60) + ' min'
  }
  return '24+ t'
}

export default countdownMessage