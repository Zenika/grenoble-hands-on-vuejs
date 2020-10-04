export default {
  getCityNextWeekWeather(long, lat) {
    return fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`)
      .then(response => response.json())
      .then(response => response.dataseries)
  },
  getCityTodayWeather(long, lat) {
    return fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`)
      .then(response => response.json())
      .then(response => response.dataseries)
      .then(dataseries => dataseries[0])
      // date: 20201004
      // temp2m: {max: 31, min: 26}
      // max: 31
      // min: 26
      // weather: "ishower"
      // wind10m_max: 3
  }
}
