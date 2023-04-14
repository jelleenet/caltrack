/**
 * Makes our timestamps human readable
 * @param time 
 */
export const formatTime = function(time: number): string {
  // @ts-ignore
  // TS incorrectly reports 'timeStyle' as invalid - https://github.com/microsoft/TypeScript/issues/38266
  return new Date(time).toLocaleTimeString(window.navigator.language, { timeStyle: 'short' });
}