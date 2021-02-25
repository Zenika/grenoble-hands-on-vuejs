import store from "@/store"

describe('store test blackbox', () => {
  it('should initial state', () => {
    expect(store.state).toMatchSnapshot()
  });
  describe('getters', () => {
    it('should return all cities', () => {
      expect(store.getters.getCities).toEqual([
        "GRENOBLE",
        "SINGAPOUR",
        "BORDEAUX",
        "BREST",
        "MONTREAL",
        "LYON",
        "RENNES",
        "NANTES",
        "LILLE",
        "PARIS",
      ])
    });
  });
  describe('actions', () => {
    it('should add new city', async () => {
      expect(store.getters.getCities.length).toBe(10)
      await store.dispatch('createCity', {
        name: 'demo',
        latitude: 42,
        longitude: 38
      })
      expect(store.getters.getCities.length).toBe(11)
      expect(store.getters.getCityPosition('demo')).toEqual([42, 38])
    });
  });
});
