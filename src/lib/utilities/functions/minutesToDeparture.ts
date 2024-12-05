/**
 * Compares a given date to the current time and returns the difference in minutes.
 * 
 * @author      Casper Tollefsen <casper.tollefsen@mobit.no>
 * @version     1.0.0-alpha.4
 * @param date  The departure Date object
 * @returns     Minutes as an integer
 * @since       0.0.1
 */
function minutesToDeparture(date: Date) {
  const minutes = (date.getTime() - Date.now()) / 60000
  return Math.round(minutes)
}

export default minutesToDeparture