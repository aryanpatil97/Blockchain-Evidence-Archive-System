# ⚡ BEAS Quick Start Guide

A condensed reference guide for running BEAS. For detailed instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md).

## 🚀 Quick Setup (Already Configured)

If you've already set everything up before and just need to run it:

### 1. Start Ganache
```bash
# GUI Version: Just open Ganache and click "Quickstart"
# OR CLI Version:
ganache-cli -p 7545
```

### 2. Start the Application
```bash
cd ~/Desktop/Blockchain-Evidence-Archive-System
npm start
```

### 3. Open Browser
```
http://localhost:3000
```

### 4. Connect MetaMask
- Make sure MetaMask is connected to "Ganache Local" network
- Make sure you have an account imported from Ganache

---

## 📝 First Time Setup (Step-by-Step)

### Prerequisites Check
```bash
node --version   # Should be v14+
npm --version    # Should be v6+
git --version     # Should be installed
```

### Install Dependencies
```bash
cd ~/Desktop/Blockchain-Evidence-Archive-System
npm install
npm install -g truffle http-server
```

### Setup MetaMask
1. Install MetaMask extension
2. Create new wallet (save recovery phrase!)
3. Add network:
   - Network Name: `Ganache Local`
   - RPC URL: `http://127.0.0.1:7545`
   - Chain ID: `1337`
   - Currency Symbol: `ETH`
4. Import account from Ganache (copy private key)

### Setup Pinata
1. Create account at [pinata.cloud](https://pinata.cloud/)
2. Get API keys from dashboard
3. Update `public/config.js` with your keys

### Deploy Contracts
```bash
# Make sure Ganache is running first!
truffle compile
truffle migrate --network development
```

**Copy the contract address from output!**

### Update Contract Address
Edit these files and replace the contract address:
- `public/app.js` (line ~7)
- `public/police-dashboard.js` (line ~9)
- `public/court-dashboard.js` (line ~8)

### Run Application
```bash
npm start
# Open http://localhost:3000
```

---

## 🔧 Common Commands

```bash
# Install dependencies
npm install

# Compile contracts
truffle compile

# Deploy contracts
truffle migrate --network development

# Reset and redeploy (if needed)
truffle migrate --reset --network development

# Start web server
npm start

# Start on different port
PORT=3001 npm start

# Open Truffle console (to interact with contracts)
truffle console --network development
```

---

## 🐛 Quick Troubleshooting

### Port 3000 in use?
```bash
# Kill process (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Use different port
PORT=3001 npm start
```

### MetaMask not connecting?
- Check network is "Ganache Local"
- Verify Ganache is running
- Refresh browser page

### Contracts not deploying?
- Make sure Ganache is running
- Check you're on development network
- Verify account has ETH

### Can't upload to IPFS?
- Check `public/config.js` has correct Pinata keys
- Verify keys are active in Pinata dashboard
- Check file size (max 50MB)

---

## ✅ Verification Checklist

Before running, verify:

- [ ] Ganache is running
- [ ] MetaMask connected to Ganache Local
- [ ] Contracts deployed (`truffle migrate`)
- [ ] Contract address updated in code
- [ ] Pinata keys in `config.js`
- [ ] Server started (`npm start`)

---

## 📍 Important Files to Edit

1. **`public/config.js`** - Pinata API keys
2. **`public/app.js`** - Contract address (line ~7)
3. **`public/police-dashboard.js`** - Contract address (line ~9)
4. **`public/court-dashboard.js`** - Contract address (line ~8)

---

## 🔗 Useful Links

- [Ganache Download](https://trufflesuite.com/ganache/)
- [MetaMask Download](https://metamask.io/download/)
- [Pinata Dashboard](https://pinata.cloud/)
- [Truffle Docs](https://trufflesuite.com/docs/)

---

## 💡 Pro Tips

1. **Keep Ganache running** while using the app
2. **Use Ganache GUI** for easier account management
3. **Save your contract address** somewhere safe after deployment
4. **Check browser console** (F12) if something doesn't work
5. **Use different accounts** for Police and Court roles for testing

---

*For detailed instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)*
