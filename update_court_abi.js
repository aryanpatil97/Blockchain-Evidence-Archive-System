const fs = require('fs');

// Read the new ABI
const newABI = JSON.parse(fs.readFileSync('contract_abi.json', 'utf8'));

// Read the court-dashboard.js file
let content = fs.readFileSync('public/court-dashboard.js', 'utf8');

// Find the start and end of the CONTRACT_ABI array
const abiStart = content.indexOf('const CONTRACT_ABI = [');
const abiEnd = content.indexOf('];', abiStart) + 2;

if (abiStart === -1 || abiEnd === -1) {
    console.log('Could not find CONTRACT_ABI in court-dashboard.js');
    process.exit(1);
}

// Replace the ABI array
const beforeABI = content.substring(0, abiStart);
const afterABI = content.substring(abiEnd);
const newContent = beforeABI + 'const CONTRACT_ABI = ' + JSON.stringify(newABI, null, 2) + ';' + afterABI;

// Write back to file
fs.writeFileSync('public/court-dashboard.js', newContent);
console.log('Updated court-dashboard.js successfully');



