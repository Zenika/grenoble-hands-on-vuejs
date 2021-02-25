import {inFahrenheit} from "@/utils/converter";

describe('converter test unit', () => {
  it('should give right temperature', () => {
    expect(inFahrenheit(0)).toBe(32)
    expect(inFahrenheit(-10)).toBe(14)
    expect(inFahrenheit(10)).toBe(50)
  });
  it('should be isomorphe ?', () => {
    expect(inFahrenheit(42)).toBe(inFahrenheit(42))
  });
});
