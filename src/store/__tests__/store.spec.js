import VuexStore from '../index'

describe('store test', () => {
  let store
  beforeEach(() => {
    store = VuexStore
  });
  it('initial state', () => {
    expect(store.state).toMatchSnapshot()
  });
  describe('getters', () => {
    it('should give all cities', () => {
      expect(store.getters.getCities.length).toBe(10)
    });
  });
  describe('actions', () => {
    it('should add new city', async () => {
      expect(store.getters.getCities.length).toBe(10)
      await store.dispatch('createCity', {
        name: 'test',
        latitude: 42,
        longitude: 54
      })
      expect(store.getters.getCities.length).toBe(11)
      expect(store.getters.getCityPosition("test")).toEqual([42, 54])
    });
  });
});
