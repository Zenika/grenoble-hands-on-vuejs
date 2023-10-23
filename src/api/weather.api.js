export const getCityNextWeekWeather = (long, lat) => {
  return fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`)
    .then(response => response.json())
    .then(response => response.dataseries)
}
export const getCityTodayWeather = (long, lat) => {
  return fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`)
    .then(response => response.json())
    .then(response => response.dataseries)
    .then(dataseries => dataseries[0])
}

export const getCityDetailedWeather = (long, lat) => {
  return fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`)
    .then(response => response.json())
    .then(response => response.dataseries)
}
