import {toFahrenheit} from "@/utils/converter";

describe('converter', () => {
  it('should properly convert Celsius to Fahrenheit', () => {
    expect(toFahrenheit(0)).toBe(32);
    expect(toFahrenheit(-10)).toBe(14);
    expect(toFahrenheit(10)).toBe(50);
  });
  // https://snowcamp2020.sched.com/event/XoOj/tests-de-proprietes-ecrivez-moins-de-tests-trouvez-plus-de-bugs
  test('if toFahrenheit is isomorphe ?', () => {
    expect(toFahrenheit(0)).toBe(toFahrenheit(0));
  });
});
