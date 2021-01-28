import {routes} from "@/router";

jest.mock('@/views/Home.vue', () => 'HomeMockComponent')
jest.mock('@/views/City.vue', () => 'CityMockComponent')
jest.mock('@/views/CreateCity.vue', () => 'CreateCityMockComponent')

describe('Router', () => {
  it('should have 2 routes', () => {
    expect(routes.length).toBe(3)
  });
  it('should match to snapshot', () => {
    expect(routes).toMatchSnapshot()
  });
});
