// utils.js

const generateRegistrationNumber = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
  
    let registrationNumber = '';
  
    // Add 3 random letters
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      registrationNumber += letters[randomIndex];
    }
  
    // Add 3 random numbers
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      registrationNumber += numbers[randomIndex];
    }
  
    return registrationNumber;
  };
  
  export { generateRegistrationNumber };
  