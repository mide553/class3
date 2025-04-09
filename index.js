const { generateStrongPassword, isStrongPassword } = require('@if23b040/password-utilities');

const password = generateStrongPassword(12);
console.log('Generated Password:', password);

const isStrong = isStrongPassword(password);
console.log('Is the password strong?', isStrong);