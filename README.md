# 🛡️ BEAS - Blockchain Evidence Archive System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=Ethereum&logoColor=white)](https://ethereum.org/)
[![IPFS](https://img.shields.io/badge/IPFS-65C2CB?style=flat&logo=IPFS&logoColor=white)](https://ipfs.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **A secure, immutable, and transparent blockchain-based evidence management system for law enforcement and court officials.**

## 🌟 Overview

BEAS (Blockchain Evidence Archive System) is a revolutionary platform that leverages blockchain technology and IPFS (InterPlanetary File System) to create an immutable, secure, and transparent evidence management system. Designed specifically for law enforcement agencies and court officials, BEAS ensures that evidence remains tamper-proof while providing easy access and verification capabilities.

## ✨ Key Features

### 🔐 **Security & Immutability**
- **Blockchain Storage**: All evidence metadata is stored on the Ethereum blockchain
- **IPFS Integration**: Large files are stored on IPFS for decentralized, permanent storage
- **Cryptographic Hashing**: Each piece of evidence is cryptographically hashed for integrity verification
- **Role-Based Access**: Separate dashboards for Police and Court officials

### 📁 **Evidence Management**
- **Multi-Format Support**: Images, videos, audio files, documents, and more
- **Metadata Tracking**: Comprehensive case information, timestamps, and officer details
- **Search & Filter**: Advanced search capabilities by case number, location, evidence type
- **Real-time Verification**: Instant blockchain verification of evidence authenticity

### 🎨 **Modern User Interface**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Intuitive Navigation**: Clean, professional interface with role-specific dashboards
- **Real-time Updates**: Live status updates and progress indicators
- **Accessibility**: Built with accessibility standards in mind

## 🏗️ Architecture

### **Frontend Technologies**
- **HTML5 & CSS3**: Modern semantic markup with advanced styling
- **JavaScript (ES6+)**: Vanilla JavaScript for optimal performance
- **Web3.js**: Ethereum blockchain integration
- **IPFS HTTP Client**: Decentralized file storage
- **Font Awesome**: Professional iconography

### **Backend Technologies**
- **Ethereum Smart Contracts**: Solidity-based contract for data management
- **IPFS Network**: Decentralized file storage and retrieval
- **MetaMask Integration**: Secure wallet connection and transaction signing

### **Security Features**
- **End-to-End Encryption**: All data is encrypted before storage
- **Immutable Records**: Once stored, evidence cannot be modified or deleted
- **Audit Trail**: Complete transaction history on the blockchain
- **Role-Based Permissions**: Different access levels for different user types

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- MetaMask browser extension
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/aryanpatil97/Blockchain-Evidence-Archive-System.git
   cd Blockchain-Evidence-Archive-System
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   - Copy `public/config.js.example` to `public/config.js`
   - Add your Pinata IPFS API keys
   - Configure your Ethereum network settings

4. **Deploy Smart Contracts**
   ```bash
   truffle migrate --network development
   ```

5. **Start the Application**
   ```bash
   npm start
   ```

### **Configuration**

#### **IPFS Setup (Pinata)**
1. Create an account at [Pinata.cloud](https://pinata.cloud/)
2. Generate API keys from your dashboard
3. Update `public/config.js` with your credentials:
   ```javascript
   var config = {
       PINATA_API_KEY: 'your_api_key_here',
       PINATA_SECRET_API_KEY: 'your_secret_key_here'
   };
   ```

#### **Ethereum Network**
- **Mainnet**: For production use
- **Rinkeby/Goerli**: For testing
- **Local Development**: Using Ganache or Hardhat

## 📖 Usage Guide

### **For Police Officers**

1. **Registration & Login**
   - Connect your MetaMask wallet
   - Register with your full name and "Police" role
   - Access the Police Dashboard

2. **Adding Evidence**
   - Navigate to "Add Evidence" section
   - Fill in case details (ID, case number, location, description)
   - Select evidence type and upload file
   - Submit to blockchain and IPFS

3. **Viewing Evidence**
   - Browse all evidence records
   - Use search and filter options
   - View detailed evidence information
   - Download evidence files

### **For Court Officials**

1. **Registration & Login**
   - Connect your MetaMask wallet
   - Register with your full name and "Court" role
   - Access the Court Dashboard

2. **Verifying Evidence**
   - Enter evidence ID to verify authenticity
   - View complete evidence details
   - Check blockchain verification status
   - Download verified evidence

3. **Browsing Evidence**
   - Search through all evidence records
   - Filter by various criteria
   - Access evidence for court proceedings

## 🔧 Technical Details

### **Smart Contract Functions**

```solidity
// User Management
function registerUser(string memory _name, string memory _role) public
function isUserRegistered(address _userAddress) public view returns (bool)
function getUserRole(address _userAddress) public view returns (string memory)

// Evidence Management
function addEvidence(string memory _evidenceId, string memory _ipfsHash, ...) public
function getEvidence(string memory _evidenceId) public view returns (...)
function getEvidenceCount() public view returns (uint256)
```

### **IPFS Integration**
- Files are uploaded to IPFS using Pinata's API
- IPFS hashes are stored on the blockchain
- Files are retrieved using IPFS gateways
- Supports all major file formats

### **Security Considerations**
- All transactions require MetaMask signature
- Evidence cannot be modified after submission
- Complete audit trail maintained on blockchain
- Role-based access control enforced

## 🌐 Deployment

### **Local Development**
```bash
# Start local blockchain
truffle develop

# Deploy contracts
migrate

# Start web server
npm start
```

### **Production Deployment**
1. Deploy smart contracts to mainnet
2. Update contract addresses in configuration
3. Deploy frontend to web server
4. Configure domain and SSL certificates

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Contributing Guidelines**
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 👥 Contributors

### **Main Contributor**
- **Aryan Patil** - *Project Lead & Full-Stack Developer* - [@aryanpatil97](https://github.com/aryanpatil97)

### **Supporting Contributors**
- **Tanmay Sadanshiv** - *Blockchain Developer*
- **Shreyash Trimbake** - *Frontend Developer*
- **Shivam Naladkar** - *UI/UX Designer*

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠️ Future Roadmap

### **Phase 1 - Current Release**
- ✅ Basic evidence upload and storage
- ✅ Role-based access control
- ✅ Blockchain verification
- ✅ Modern UI/UX

### **Phase 2 - Enhanced Features**
- 🔄 Advanced search and filtering
- 🔄 Evidence chain of custody tracking
- 🔄 Automated evidence validation
- 🔄 Mobile application

### **Phase 3 - Enterprise Features**
- 📋 Multi-organization support
- 📋 Advanced analytics dashboard
- 📋 API for third-party integrations
- 📋 Advanced security features

## 🐛 Known Issues

- File size limitations (currently 50MB per file)
- IPFS gateway dependency for file retrieval
- MetaMask required for all operations

## 📞 Support

For support, email aryanpatil97@gmail.com or create an issue in the repository.

## 🙏 Acknowledgments

- Ethereum Foundation for blockchain infrastructure
- IPFS team for decentralized storage
- Pinata for IPFS pinning services
- MetaMask for wallet integration
- Font Awesome for icons
- All contributors and testers

---

**Built with ❤️ by Aryan Patil and the BEAS Team**

*Revolutionizing evidence management through blockchain technology*