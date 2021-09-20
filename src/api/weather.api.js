const fetchAPI = (query) => fetch(process.env.VUE_APP_API_URL + '?' + query);

export default {
  getCityNextWeekWeather(long, lat) {
    return fetchAPI(`lon=${ long }&lat=${ lat }&product=civillight&output=json`)
      .then(response => response.json())
      .then(response => response.dataseries);
  },
  getCityDetailedWeather(long, lat) {
    return fetchAPI(`lon=${ long }&lat=${ lat }&product=civil&output=json`)
      .then(response => response.json())
      .then(response => response.dataseries);
  },
  getCityTodayWeather(long, lat) {
    return fetchAPI(`lon=${ long }&lat=${ lat }&product=civillight&output=json`)
      .then(response => response.json())
      .then(response => response.dataseries)
      .then(dataseries => dataseries[0]);
  }
};
