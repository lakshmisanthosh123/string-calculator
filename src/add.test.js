const add = require('./add');  

describe("String Calculator Tests", () => {

  
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });


  test('should return the number itself for a single number string', () => {
    expect(add("1")).toBe(1);
  });


  test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should return the sum of multiple numbers separated by commas', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  
  test('should handle new lines between numbers along with commas', () => {
    expect(add("1\n2,3")).toBe(6);
  });

 
  test('should support custom delimiter specified at the beginning of the string', () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });


  test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });


  test('should throw an error for multiple negative numbers', () => {
    expect(() => add("1,-2,-5,3")).toThrow("Negative numbers not allowed: -2, -5");
  });

});
