# BEAS Installation Guide

This guide will walk you through the complete installation and setup process for the Blockchain Evidence Archive System (BEAS).

## 📋 Prerequisites

Before installing BEAS, ensure you have the following installed:

### **Required Software**
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **MetaMask** browser extension - [Download](https://metamask.io/)
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)

### **Required Accounts**
- **Pinata Account** - [Sign up](https://pinata.cloud/) for IPFS services
- **Ethereum Wallet** - MetaMask or compatible wallet

## 🚀 Installation Steps

### **Step 1: Clone the Repository**

```bash
# Clone the repository
git clone https://github.com/aryanpatil97/Blockchain-Evidence-Archive-System.git

# Navigate to the project directory
cd Blockchain-Evidence-Archive-System
```

### **Step 2: Install Dependencies**

```bash
# Install Node.js dependencies
npm install

# Install Truffle globally (if not already installed)
npm install -g truffle
```

### **Step 3: Configure IPFS (Pinata)**

1. **Create Pinata Account**
   - Go to [Pinata.cloud](https://pinata.cloud/)
   - Sign up for a free account
   - Verify your email address

2. **Generate API Keys**
   - Log in to your Pinata dashboard
   - Navigate to "API Keys" section
   - Click "New Key"
   - Give it a name (e.g., "BEAS Development")
   - Copy the API Key and Secret

3. **Update Configuration**
   ```bash
   # Copy the configuration template
   cp public/config.js.example public/config.js
   
   # Edit the configuration file
   nano public/config.js  # or use your preferred editor
   ```

   Update the configuration with your Pinata credentials:
   ```javascript
   var config = {
       PINATA_API_KEY: 'your_pinata_api_key_here',
       PINATA_SECRET_API_KEY: 'your_pinata_secret_key_here',
       JWT: 'your_jwt_token_here'  // Optional
   };
   ```

### **Step 4: Configure Ethereum Network**

#### **Option A: Local Development (Recommended for Testing)**

1. **Install Ganache**
   ```bash
   npm install -g ganache-cli
   ```

2. **Start Local Blockchain**
   ```bash
   # In a new terminal window
   ganache-cli
   ```

3. **Update Truffle Configuration**
   ```javascript
   // truffle-config.js
   module.exports = {
     networks: {
       development: {
         host: "127.0.0.1",
         port: 8545,
         network_id: "*"
       }
     }
   };
   ```

#### **Option B: Testnet (Rinkeby/Goerli)**

1. **Get Testnet ETH**
   - Use [Rinkeby Faucet](https://faucet.rinkeby.io/)
   - Or [Goerli Faucet](https://goerli-faucet.slock.it/)

2. **Update Truffle Configuration**
   ```javascript
   // truffle-config.js
   module.exports = {
     networks: {
       rinkeby: {
         provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${INFURA_KEY}`),
         network_id: 4,
         gas: 5500000,
         confirmations: 2,
         timeoutBlocks: 200,
         skipDryRun: true
       }
     }
   };
   ```

### **Step 5: Deploy Smart Contracts**

```bash
# Compile contracts
truffle compile

# Deploy to local network
truffle migrate --network development

# Or deploy to testnet
truffle migrate --network rinkeby
```

**Important**: Note the deployed contract address from the migration output.

### **Step 6: Update Contract Address**

Update the contract address in your JavaScript files:

```javascript
// In public/app.js, police-dashboard.js, and court-dashboard.js
const contractAddress = '0xYOUR_DEPLOYED_CONTRACT_ADDRESS';
```

### **Step 7: Start the Application**

```bash
# Start the development server
npm start

# Or if you prefer a different port
PORT=3001 npm start
```

The application will be available at `http://localhost:3000` (or your specified port).

## 🔧 Configuration Details

### **Environment Variables**

Create a `.env` file in the root directory:

```env
# Ethereum Configuration
ETHEREUM_NETWORK=development
CONTRACT_ADDRESS=0xYourContractAddress
INFURA_KEY=your_infura_key

# IPFS Configuration
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_KEY=your_pinata_secret_key

# Application Configuration
PORT=3000
NODE_ENV=development
```

### **MetaMask Configuration**

1. **Install MetaMask**
   - Add the MetaMask extension to your browser
   - Create a new wallet or import existing

2. **Add Network (for local development)**
   - Network Name: `Localhost 8545`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `1337`
   - Currency Symbol: `ETH`

3. **Import Account (for local development)**
   - Use one of the accounts from Ganache
   - Copy the private key from Ganache
   - Import account in MetaMask

## 🧪 Testing the Installation

### **Step 1: Verify Smart Contract Deployment**

```bash
# Check if contracts are deployed
truffle console --network development

# In the console, run:
> EvidenceManagement.deployed().then(instance => console.log(instance.address))
```

### **Step 2: Test Web Application**

1. **Open Browser**
   - Navigate to `http://localhost:3000`
   - Ensure MetaMask is connected

2. **Test Registration**
   - Click "Register" tab
   - Connect MetaMask
   - Fill in your details
   - Select role (Police or Court)
   - Click "Register"

3. **Test Login**
   - Click "Login" tab
   - Connect MetaMask
   - Click "Login"

4. **Test Evidence Upload (Police)**
   - Access Police Dashboard
   - Try uploading a test file
   - Verify it appears in the evidence list

5. **Test Evidence Verification (Court)**
   - Access Court Dashboard
   - Enter an evidence ID
   - Verify the evidence details

## 🐛 Troubleshooting

### **Common Issues**

#### **MetaMask Connection Issues**
```bash
# Error: MetaMask not detected
# Solution: Ensure MetaMask is installed and unlocked
```

#### **Contract Deployment Fails**
```bash
# Error: Insufficient funds
# Solution: Ensure you have enough ETH in your account

# Error: Network not found
# Solution: Check your truffle-config.js network settings
```

#### **IPFS Upload Fails**
```bash
# Error: Pinata API key invalid
# Solution: Verify your API keys in config.js

# Error: File too large
# Solution: Check file size limits (currently 50MB)
```

#### **File Preview Not Working**
```bash
# Error: Cannot load preview
# Solution: Check IPFS gateway URL in the code
# Ensure Pinata gateway is accessible
```

### **Debug Mode**

Enable debug mode for detailed logging:

```javascript
// In your browser console
localStorage.setItem('debug', 'true');
```

### **Reset Application**

If you need to reset the application:

```bash
# Clear browser storage
# In browser console:
localStorage.clear();
sessionStorage.clear();

# Reset contracts
truffle migrate --reset --network development
```

## 📚 Additional Resources

### **Documentation**
- [Truffle Documentation](https://www.trufflesuite.com/docs)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [IPFS Documentation](https://docs.ipfs.io/)
- [Pinata Documentation](https://pinata.cloud/documentation)

### **Support**
- Create an issue on GitHub
- Email: aryanpatil97@gmail.com
- Check the FAQ section in README.md

## 🔒 Security Considerations

### **Development Environment**
- Never commit API keys to version control
- Use testnet for development
- Keep private keys secure

### **Production Environment**
- Use environment variables for sensitive data
- Deploy to mainnet only when ready
- Implement proper access controls
- Regular security audits

## ✅ Verification Checklist

After installation, verify the following:

- [ ] Node.js and npm are installed
- [ ] All dependencies are installed
- [ ] Pinata API keys are configured
- [ ] Smart contracts are deployed
- [ ] Contract address is updated
- [ ] MetaMask is connected
- [ ] Application starts without errors
- [ ] User registration works
- [ ] Evidence upload works
- [ ] Evidence verification works

## 🎉 Next Steps

Once installation is complete:

1. **Read the User Guide** - Learn how to use BEAS effectively
2. **Explore the Features** - Try all the available features
3. **Join the Community** - Connect with other users and developers
4. **Contribute** - Help improve BEAS by contributing code or documentation

---

**Need Help?** If you encounter any issues during installation, please create an issue on GitHub or contact us at aryanpatil97@gmail.com.
