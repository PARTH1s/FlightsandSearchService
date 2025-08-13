/**
 * Compares two datetime strings and returns true if the first is later than the second.
 * Both times are treated as UTC.
 * 
 * @param {string} timeString1 - The first datetime string
 * @param {string} timeString2 - The second datetime string
 * @returns {boolean} - True if timeString1 > timeString2
 */
function compareTime(timeString1, timeString2) {
  const datetime1 = new Date(timeString1 + 'Z'); // Ensure UTC
  const datetime2 = new Date(timeString2 + 'Z');
  return datetime1.getTime() > datetime2.getTime();
}

module.exports = { compareTime };
