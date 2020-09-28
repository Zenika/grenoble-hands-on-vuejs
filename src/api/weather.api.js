export default {
  getCityWeather(long, lat) {
    return fetch(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`).then(response => response.json())
  }
}
