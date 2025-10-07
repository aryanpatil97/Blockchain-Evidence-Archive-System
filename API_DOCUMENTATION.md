# BEAS API Documentation

This document provides comprehensive API documentation for the Blockchain Evidence Archive System (BEAS).

## 📋 Table of Contents

- [Overview](#overview)
- [Smart Contract API](#smart-contract-api)
- [IPFS Integration](#ipfs-integration)
- [Frontend API](#frontend-api)
- [Error Handling](#error-handling)
- [Examples](#examples)

## 🌐 Overview

BEAS consists of three main API layers:

1. **Smart Contract API** - Ethereum blockchain interactions
2. **IPFS API** - Decentralized file storage
3. **Frontend API** - JavaScript application interface

## 🔗 Smart Contract API

### **Contract Address**
```
0x173c37D09C04F630473C138FE476caDF74e53E4b
```

### **Contract ABI**

```javascript
const CONTRACT_ABI = [
  // Events
  {
    "anonymous": false,
    "inputs": [
      {"indexed": false, "internalType": "string", "name": "evidenceId", "type": "string"},
      {"indexed": false, "internalType": "address", "name": "accessedBy", "type": "address"},
      {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"}
    ],
    "name": "EvidenceAccessed",
    "type": "event"
  },
  // ... (full ABI available in contract files)
];
```

### **User Management Functions**

#### **registerUser**
Register a new user in the system.

```javascript
await contract.methods.registerUser(name, role).send({ from: userAddress });
```

**Parameters:**
- `name` (string): User's full name
- `role` (string): User role ("Police" or "Court")

**Returns:** Transaction receipt

**Events Emitted:**
- `UserRegistered(address userAddress, string role, string name)`

#### **isUserRegistered**
Check if a user is registered.

```javascript
const isRegistered = await contract.methods.isUserRegistered(userAddress).call();
```

**Parameters:**
- `userAddress` (address): User's Ethereum address

**Returns:** boolean

#### **getUserRole**
Get user's role.

```javascript
const role = await contract.methods.getUserRole(userAddress).call();
```

**Parameters:**
- `userAddress` (address): User's Ethereum address

**Returns:** string ("Police" or "Court")

#### **getUserName**
Get user's name.

```javascript
const name = await contract.methods.getUserName(userAddress).call();
```

**Parameters:**
- `userAddress` (address): User's Ethereum address

**Returns:** string

### **Evidence Management Functions**

#### **addEvidence**
Add new evidence to the blockchain.

```javascript
await contract.methods.addEvidence(
  evidenceId,
  ipfsHash,
  caseNumber,
  location,
  crimeDescription,
  evidenceType
).send({ from: userAddress });
```

**Parameters:**
- `evidenceId` (string): Unique evidence identifier
- `ipfsHash` (string): IPFS hash of the evidence file
- `caseNumber` (string): Associated case number
- `location` (string): Where evidence was collected
- `crimeDescription` (string): Description of the crime
- `evidenceType` (string): Type of evidence

**Returns:** Transaction receipt

**Events Emitted:**
- `EvidenceAdded(string evidenceId, string ipfsHash, string officerName, uint256 timestamp)`

#### **getEvidence**
Retrieve evidence details.

```javascript
const evidence = await contract.methods.getEvidence(evidenceId).call();
```

**Parameters:**
- `evidenceId` (string): Evidence identifier

**Returns:** Object containing:
```javascript
{
  ipfsHash: string,
  caseNumber: string,
  location: string,
  crimeDescription: string,
  evidenceType: string,
  officerName: string,
  timestamp: number
}
```

#### **getEvidenceCount**
Get total number of evidence records.

```javascript
const count = await contract.methods.getEvidenceCount().call();
```

**Returns:** number

#### **evidenceIds**
Get evidence ID by index.

```javascript
const evidenceId = await contract.methods.evidenceIds(index).call();
```

**Parameters:**
- `index` (number): Index of evidence in the array

**Returns:** string

## 📁 IPFS Integration

### **Upload File to IPFS**

```javascript
async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
    method: 'POST',
    headers: {
      'pinata_api_key': PINATA_API_KEY,
      'pinata_secret_api_key': PINATA_SECRET_API_KEY
    },
    body: formData
  });
  
  const data = await response.json();
  return data.IpfsHash;
}
```

### **Retrieve File from IPFS**

```javascript
function getIPFSFile(ipfsHash) {
  return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
}
```

### **Supported File Types**

- **Images**: JPG, PNG, GIF, WebP
- **Videos**: MP4, MOV, AVI
- **Audio**: MP3, WAV, AAC
- **Documents**: PDF, DOC, DOCX, TXT

### **File Size Limits**

- **Maximum file size**: 50MB
- **Recommended size**: < 10MB for optimal performance

## 🎨 Frontend API

### **Web3 Initialization**

```javascript
// Initialize Web3
async function initializeWeb3() {
  if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    userAccount = accounts[0];
    contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
  }
}
```

### **User Authentication**

```javascript
// Login user
async function login() {
  const isRegistered = await contract.methods.registeredUsers(userAccount).call();
  if (isRegistered) {
    const role = await contract.methods.userRoles(userAccount).call();
    const name = await contract.methods.userNames(userAccount).call();
    
    const userData = { address: userAccount, name, role };
    localStorage.setItem('blockchainEvidenceUser', JSON.stringify(userData));
    
    redirectToDashboard(role);
  }
}

// Register user
async function register(name, role) {
  await contract.methods.registerUser(name, role).send({ from: userAccount });
  
  const userData = { address: userAccount, name, role };
  localStorage.setItem('blockchainEvidenceUser', JSON.stringify(userData));
  
  redirectToDashboard(role);
}
```

### **Evidence Management**

```javascript
// Upload evidence
async function uploadEvidence(evidenceData) {
  // Upload file to IPFS
  const ipfsHash = await uploadToIPFS(evidenceData.file);
  
  // Add to blockchain
  await contract.methods.addEvidence(
    evidenceData.id,
    ipfsHash,
    evidenceData.caseNumber,
    evidenceData.location,
    evidenceData.description,
    evidenceData.type
  ).send({ from: userAccount });
}

// Get all evidence
async function getAllEvidence() {
  const count = await contract.methods.getEvidenceCount().call();
  const evidenceList = [];
  
  for (let i = 0; i < count; i++) {
    const evidenceId = await contract.methods.evidenceIds(i).call();
    const evidence = await contract.methods.getEvidence(evidenceId).call();
    evidenceList.push({ id: evidenceId, ...evidence });
  }
  
  return evidenceList;
}
```

### **Search and Filter**

```javascript
// Search evidence
function searchEvidence(evidenceList, searchTerm) {
  return evidenceList.filter(evidence => 
    evidence.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evidence.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evidence.crimeDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Filter by type
function filterByType(evidenceList, type) {
  return evidenceList.filter(evidence => evidence.evidenceType === type);
}
```

## ⚠️ Error Handling

### **Common Error Types**

#### **Web3 Errors**
```javascript
try {
  await contract.methods.someFunction().send({ from: userAccount });
} catch (error) {
  if (error.code === 4001) {
    // User rejected transaction
    console.error('Transaction rejected by user');
  } else if (error.code === -32603) {
    // Internal JSON-RPC error
    console.error('Internal error:', error.message);
  }
}
```

#### **IPFS Errors**
```javascript
try {
  const ipfsHash = await uploadToIPFS(file);
} catch (error) {
  if (error.message.includes('File too large')) {
    console.error('File size exceeds limit');
  } else if (error.message.includes('Invalid API key')) {
    console.error('Invalid Pinata API credentials');
  }
}
```

#### **Contract Errors**
```javascript
try {
  await contract.methods.addEvidence(...).send({ from: userAccount });
} catch (error) {
  if (error.message.includes('Evidence already exists')) {
    console.error('Evidence ID already exists');
  } else if (error.message.includes('User not registered')) {
    console.error('User must be registered first');
  }
}
```

### **Error Response Format**

```javascript
{
  success: false,
  error: {
    code: 'ERROR_CODE',
    message: 'Human readable error message',
    details: 'Additional error details'
  }
}
```

## 📝 Examples

### **Complete Evidence Upload Flow**

```javascript
async function completeEvidenceUpload(formData) {
  try {
    // 1. Validate input
    if (!formData.evidenceId || !formData.file) {
      throw new Error('Missing required fields');
    }
    
    // 2. Upload to IPFS
    showMessage('Uploading to IPFS...', 'warning');
    const ipfsHash = await uploadToIPFS(formData.file);
    
    // 3. Add to blockchain
    showMessage('Adding to blockchain...', 'warning');
    await contract.methods.addEvidence(
      formData.evidenceId,
      ipfsHash,
      formData.caseNumber,
      formData.location,
      formData.crimeDescription,
      formData.evidenceType
    ).send({ from: userAccount });
    
    // 4. Success
    showMessage('Evidence added successfully!', 'success');
    
  } catch (error) {
    console.error('Upload failed:', error);
    showMessage('Upload failed: ' + error.message, 'error');
  }
}
```

### **Evidence Verification Flow**

```javascript
async function verifyEvidence(evidenceId) {
  try {
    // 1. Get evidence from blockchain
    const evidence = await contract.methods.getEvidence(evidenceId).call();
    
    // 2. Verify evidence exists
    if (!evidence.exists) {
      throw new Error('Evidence not found');
    }
    
    // 3. Display evidence details
    displayEvidenceDetails(evidence);
    
    // 4. Load preview
    await loadEvidencePreview(evidence.ipfsHash, evidence.evidenceType);
    
  } catch (error) {
    console.error('Verification failed:', error);
    showMessage('Verification failed: ' + error.message, 'error');
  }
}
```

### **User Registration Flow**

```javascript
async function registerUser(name, role) {
  try {
    // 1. Check if already registered
    const isRegistered = await contract.methods.isUserRegistered(userAccount).call();
    if (isRegistered) {
      throw new Error('User already registered');
    }
    
    // 2. Register user
    await contract.methods.registerUser(name, role).send({ from: userAccount });
    
    // 3. Save user data
    const userData = { address: userAccount, name, role };
    localStorage.setItem('blockchainEvidenceUser', JSON.stringify(userData));
    
    // 4. Redirect to dashboard
    redirectToDashboard(role);
    
  } catch (error) {
    console.error('Registration failed:', error);
    showMessage('Registration failed: ' + error.message, 'error');
  }
}
```

## 🔧 Configuration

### **Environment Variables**

```javascript
// Required configuration
const config = {
  PINATA_API_KEY: 'your_pinata_api_key',
  PINATA_SECRET_API_KEY: 'your_pinata_secret_key',
  CONTRACT_ADDRESS: '0x173c37D09C04F630473C138FE476caDF74e53E4b',
  NETWORK_ID: 4, // Rinkeby testnet
  GAS_LIMIT: 500000
};
```

### **Network Configuration**

```javascript
// Truffle configuration
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${INFURA_KEY}`),
      network_id: 4,
      gas: 5500000
    }
  }
};
```

## 📊 Rate Limits

### **IPFS (Pinata)**
- **Free Tier**: 1GB storage, 1000 pins
- **Paid Tiers**: Higher limits available

### **Ethereum Network**
- **Gas Limits**: Varies by network
- **Transaction Fees**: Based on network congestion

## 🔒 Security Considerations

### **API Key Security**
- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Rotate keys regularly

### **Transaction Security**
- Always verify transaction details before signing
- Use appropriate gas limits
- Implement proper error handling

### **File Security**
- Validate file types and sizes
- Scan files for malware
- Implement access controls

---

**Need Help?** For API support, create an issue on GitHub or contact aryanpatil97@gmail.com.
