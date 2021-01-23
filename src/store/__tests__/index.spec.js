import store, {initialState} from "@/store";

describe('Store', () => {
  it('should match to initialState', () => {
    expect(initialState).toMatchSnapshot()
    expect(store.state).toEqual(initialState)
  });

  it('should contains 3 getters', () => {
    expect(Object.keys(store.getters).length).toBe(3)
  });
  describe('getMapPosition getter', () => {
    it('should return latLongMap', () => {
      expect(store.getters["getMapPosition"]).toEqual(initialState.latLongMap)
    });
  });
  describe('getCityPosition getter', () => {
    it('should be a function that take cityName', () => {
      expect(store.getters["getCityPosition"]).toBeInstanceOf(Function)
    });
    it('should return position of a city', () => {
      expect(store.getters["getCityPosition"]('GRENOBLE')).toEqual([45.183916, 5.703630])
    });
  });
  describe('getCities getter', () => {
    it('should return an array', () => {
      expect(store.getters["getCities"]).toBeInstanceOf(Array)
    });
    it('should return an array with length 10', () => {
      expect(store.getters["getCities"].length).toBe(10)
    });
  });
});
