function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = /[\n,]/; 
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(`[${delimiterMatch[1]}]`); 
        numbers = numbers.replace(/^\/\/(.+)\n/, ''); 
      }
    }
  
    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  
   
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
   
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  