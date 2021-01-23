import { shallowMount } from "@vue/test-utils";
import LMap from "@/components/LMap.vue";

jest.mock("leaflet", () => ({
  map: jest.fn(() => ({
    setView: jest.fn()
  })),
  tileLayer: jest.fn(() => ({
    addTo: jest.fn()
  })),
  marker: jest.fn(() => ({
    addTo: jest.fn()
  }))
}));
import L from 'leaflet';

describe("LMap.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(LMap, {
      propsData: {
        lat: 0,
        long: 0
      }
    });
  });
  it("should init map", () => {
    expect(wrapper.vm.map).not.toBeNull();
  });
  it("should zoom to level 13", () => {
    expect(wrapper.vm.zoomLevel).toBe(13);
  });
  test("if the template contains only a div", () => {
    expect(wrapper.findAll('div').length).toBe(1)
  });
  test("if the div has id mapId", () => {
    expect(wrapper.find('div').attributes('id')).toBe('mapId')
  });
  describe.skip('map leaflet', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('should register map on "mapId"', () => {
      expect(L.map).toHaveBeenCalledTimes(1);
      expect(L.map).toHaveBeenCalledWith('mapId');
    });
    it('should set zoom and lat/long', () => {
      // TODO
    });

    it('should set tileLayer', () => {
      expect(L.tileLayer).toHaveBeenCalledTimes(1);
      expect(L.tileLayer.mock.calls).toMatchSnapshot();
    });
    it('should add tileLayer to the map', () => {
      // TODO
    });

    it('should set marker', () => {
      expect(L.marker).toHaveBeenCalledTimes(1);
      expect(L.marker).toHaveBeenCalledWith([0, 0]);
    });
  });
});
