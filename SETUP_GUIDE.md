# 🚀 BEAS Complete Setup Guide - From Scratch

This guide will walk you through setting up and running the Blockchain Evidence Archive System (BEAS) from scratch, even if you've forgotten everything about the project.

## 📋 Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Installing Required Software](#2-installing-required-software)
3. [Setting Up MetaMask from Scratch](#3-setting-up-metamask-from-scratch)
4. [Setting Up Ganache (Local Blockchain)](#4-setting-up-ganache-local-blockchain)
5. [Configuring MetaMask with Ganache](#5-configuring-metamask-with-ganache)
6. [Setting Up Pinata (IPFS)](#6-setting-up-pinata-ipfs)
7. [Project Setup](#7-project-setup)
8. [Configuring the Project](#8-configuring-the-project)
9. [Deploying Smart Contracts](#9-deploying-smart-contracts)
10. [Running the Application](#10-running-the-application)
11. [Testing the Application](#11-testing-the-application)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Prerequisites

Before starting, make sure you have:

- **A computer** (Windows, macOS, or Linux)
- **Internet connection**
- **Administrator/sudo access** (for installations)
- **About 30-60 minutes** for complete setup

---

## 2. Installing Required Software

### Step 2.1: Install Node.js and npm

Node.js is required to run JavaScript on your computer. npm comes with Node.js.

**For Windows/macOS:**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS version** (Long Term Support)
3. Run the installer and follow the instructions
4. Make sure to check "Add to PATH" during installation

**For Linux (Ubuntu/Debian):**
```bash
# Update package list
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm -y
```

**Verify Installation:**
Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers. **Required versions:**
- Node.js: v14.0.0 or higher
- npm: v6.0.0 or higher

**Expected Output:**
```
v16.20.0  (or similar)
8.19.4    (or similar)
```

### Step 2.2: Install Git (if not already installed)

**For Windows:**
- Download from [https://git-scm.com/download/win](https://git-scm.com/download/win)

**For macOS:**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Git
brew install git
```

**For Linux:**
```bash
sudo apt install git -y
```

**Verify Installation:**
```bash
git --version
```

---

## 3. Setting Up MetaMask from Scratch

MetaMask is a browser extension that acts as your Ethereum wallet. Since you've reset it, we'll set it up fresh.

### Step 3.1: Install MetaMask Extension

1. **For Chrome/Edge/Brave:**
   - Go to [https://metamask.io/download/](https://metamask.io/download/)
   - Click "Download for Chrome" (or your browser)
   - Click "Add to Chrome" → "Add Extension"

2. **For Firefox:**
   - Go to [https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
   - Click "Add to Firefox"

### Step 3.2: Create a New Wallet

1. **Open MetaMask** from your browser extensions
2. Click **"Get Started"**
3. Click **"Create a Wallet"**
4. **Read and accept** the terms of service
5. **Create a password** (remember this!)
   - Use a strong password
   - You'll need this every time you unlock MetaMask
6. **Watch the security video** (optional but recommended)
7. **Reveal your Secret Recovery Phrase**
   - **IMPORTANT:** Write down these 12 words in order
   - Store them in a safe place
   - **Never share this with anyone!**
8. **Confirm your Secret Recovery Phrase** by selecting the words in order

### Step 3.3: Save Your Account Information

1. After setup, you'll see your **Account Address** (starts with `0x...`)
2. **Copy this address** - you'll need it later
3. **Store it somewhere safe** (Notes app, text file, etc.)

**Your MetaMask is now ready!** 🎉

---

## 4. Setting Up Ganache (Local Blockchain)

Ganache creates a local Ethereum blockchain for testing. This is faster and free (no real ETH needed).

### Step 4.1: Install Ganache

**Option A: GUI Version (Recommended for beginners)**

1. Go to [https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/)
2. Download **Ganache** (the desktop app)
3. Install and open it
4. Click **"New Workspace"** or **"Quickstart"**
5. **Quickstart** creates a blockchain with 10 accounts automatically

**Option B: CLI Version (Command Line)**

```bash
# Install globally using npm
npm install -g ganache-cli
```

### Step 4.2: Start Ganache

**If using GUI:**
- Just click **"Quickstart"** or **"New Workspace"**
- The blockchain will start automatically
- **Note the RPC Server address:** `http://127.0.0.1:7545` (default)

**If using CLI:**
```bash
# Start Ganache on port 7545
ganache-cli -p 7545
```

**Keep Ganache running!** Don't close it. You'll need it running while using the application.

### Step 4.3: Get Test Account from Ganache

**In Ganache GUI:**
- You'll see a list of accounts with addresses and private keys
- **Click on the key icon** next to any account to reveal its private key
- **Copy both the address and private key** for later

**Expected Account Info:**
```
Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
Private Key: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
```

**Important:** These are for LOCAL TESTING ONLY. Never use these on mainnet!

---

## 5. Configuring MetaMask with Ganache

Now we'll connect MetaMask to your local Ganache blockchain.

### Step 5.1: Add Ganache Network to MetaMask

1. **Open MetaMask** in your browser
2. Click on the **network dropdown** (usually shows "Ethereum Mainnet")
3. Click **"Add Network"** → **"Add a network manually"**
4. Fill in the following details:

```
Network Name: Ganache Local
New RPC URL: http://127.0.0.1:7545
Chain ID: 1337
Currency Symbol: ETH
Block Explorer URL: (leave empty)
```

5. Click **"Save"**
6. You should now see "Ganache Local" in your network dropdown

### Step 5.2: Import Ganache Account to MetaMask

1. In MetaMask, click the **account icon** (circle with your avatar)
2. Click **"Import Account"**
3. In Ganache, **copy the private key** of any account
4. **Paste it into MetaMask** (select "Private Key" option)
5. Click **"Import"**

**You now have a test account with 100 ETH (test ETH) in MetaMask!**

### Step 5.3: Verify Connection

1. In MetaMask, select **"Ganache Local"** network
2. You should see your account with **100 ETH**
3. Copy your account address from MetaMask

**Congratulations! MetaMask is now connected to your local blockchain.** ✅

---

## 6. Setting Up Pinata (IPFS)

Pinata provides IPFS (InterPlanetary File System) services for storing files.

### Step 6.1: Create Pinata Account

1. Go to [https://pinata.cloud/](https://pinata.cloud/)
2. Click **"Sign Up"** (top right)
3. Fill in your details:
   - Email address
   - Password
   - Confirm password
4. Click **"Create Account"**
5. **Verify your email** (check your inbox)

### Step 6.2: Get API Keys

1. After logging in, click on your **profile icon** (top right)
2. Click **"API Keys"**
3. Click **"New Key"**
4. Fill in:
   - **Key Name:** `BEAS Development`
   - **Admin Pin/Unpin:** ✅ (check this)
   - **Pin Policies:** Leave default
5. Click **"Create Key"**
6. **IMPORTANT:** You'll see your keys only once!
   - **Copy the API Key** (starts with something like `63ada470b3eb5f8ffb7e`)
   - **Copy the Secret API Key** (longer string)
   - **Save these somewhere safe!** (Text file, notes app, password manager)

**Your Pinata setup is complete!** ✅

---

## 7. Project Setup

Now let's set up the project on your computer.

### Step 7.1: Navigate to Project Directory

Open your terminal/command prompt and navigate to your project:

```bash
# Change to your Desktop
cd ~/Desktop  # macOS/Linux
# OR
cd C:\Users\YourUsername\Desktop  # Windows

# Navigate to project folder
cd Blockchain-Evidence-Archive-System
```

**Verify you're in the right place:**
```bash
# List files (should see package.json, contracts/, public/, etc.)
ls  # macOS/Linux
# OR
dir  # Windows
```

### Step 7.2: Install Project Dependencies

Install all required packages:

```bash
npm install
```

**This will take a few minutes.** You'll see progress output.

**Expected output:**
```
npm WARN deprecated ...
added 234 packages, and audited 235 packages in 45s
```

### Step 7.3: Install Additional Required Packages

```bash
# Install Truffle globally (if not already installed)
npm install -g truffle

# Install http-server globally (if not already installed)
npm install -g http-server
```

**Verify installations:**
```bash
truffle version
http-server --version
```

---

## 8. Configuring the Project

### Step 8.1: Configure Pinata API Keys

1. **Navigate to the public folder:**
```bash
cd public
```

2. **Open config.js in a text editor:**
```bash
# On macOS/Linux
nano config.js
# OR
code config.js  # If you have VS Code
# OR use any text editor

# On Windows
notepad config.js
# OR use any text editor
```

3. **Replace the placeholder values** with your actual Pinata keys:

```javascript
var config = {
    // Replace with your actual Pinata API keys
    PINATA_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE',
    PINATA_SECRET_API_KEY: 'YOUR_ACTUAL_SECRET_KEY_HERE',
    
    // JWT is optional, you can leave it as is
    JWT: 'YOUR_JWT_TOKEN_HERE'
};
```

**Example:**
```javascript
var config = {
    PINATA_API_KEY: '63ada470b3eb5f8ffb7e',
    PINATA_SECRET_API_KEY: '4c6fec035652a857d08290f61e48374df0e08cd36a24dc655c1830665cc58b10',
    JWT: 'YOUR_JWT_TOKEN_HERE'
};
```

4. **Save the file**

### Step 8.2: Verify Ganache is Running

**Make sure Ganache is still running!**

- **If using GUI:** Keep the Ganache window open
- **If using CLI:** Keep the terminal window open with Ganache running

**Verify Ganache is accessible:**
```bash
# Test if Ganache is running (should show accounts)
curl http://127.0.0.1:7545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}'
```

---

## 9. Deploying Smart Contracts

This step uploads your smart contracts to the local blockchain.

### Step 9.1: Compile Smart Contracts

First, compile the contracts:

```bash
# Make sure you're in the project root directory
cd ~/Desktop/Blockchain-Evidence-Archive-System  # Adjust path as needed

# Compile contracts
truffle compile
```

**Expected output:**
```
Compiling your contracts...
===========================
✓ Compiling ./contracts/EvidenceManagement.sol
✓ Compiling ./contracts/Migrations.sol
✓ Compilation warnings encountered:

Compiled successfully using:
   - solc: 0.8.13+commit.abaa5c0e.Emscripten.clang
```

**Check that build files were created:**
```bash
ls build/contracts/  # macOS/Linux
# OR
dir build\contracts  # Windows
```

You should see `.json` files like `EvidenceManagement.json`, `Migrations.json`

### Step 9.2: Deploy Smart Contracts

Deploy to your local Ganache blockchain:

```bash
truffle migrate --network development
```

**Expected output:**
```
Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)
...
> Deploying 'Migrations'
...
> Deploying 'EvidenceManagement'
   > transaction hash:    0x...
   > Blocks: 0            Seconds: 0
   > contract address:    0x173c37D09C04F630473C138FE476caDF74e53E4b
   > account:             0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
   > gas used:            1234567
   > gas price:           20 gwei
   > value sent:           0 ETH
   > total cost:           0.02469134 ETH
...
✓ Saving migration artifacts...
```

**⚠️ IMPORTANT: Copy the contract address!**

You'll see something like:
```
> contract address:    0x173c37D09C04F630473C138FE476caDF74e53E4b
```

**Copy this address!** You'll need it in the next step.

### Step 9.3: Update Contract Address in Code

You need to update the contract address in your JavaScript files.

**Find and replace the contract address in these files:**
- `public/app.js`
- `public/police-dashboard.js`
- `public/court-dashboard.js`

**Method 1: Using Terminal (macOS/Linux):**

```bash
# Replace OLD_ADDRESS with the address you got from deployment
# Replace NEW_ADDRESS with your actual deployed contract address

# Update app.js
sed -i '' 's/0x173c37D09C04F630473C138FE476caDF74e53E4b/YOUR_NEW_ADDRESS_HERE/g' public/app.js

# Update police-dashboard.js
sed -i '' 's/0x173c37D09C04F630473C138FE476caDF74e53E4b/YOUR_NEW_ADDRESS_HERE/g' public/police-dashboard.js

# Update court-dashboard.js
sed -i '' 's/0x173c37D09C04F630473C138FE476caDF74e53E4b/YOUR_NEW_ADDRESS_HERE/g' public/court-dashboard.js
```

**Method 2: Manual Edit (Recommended for beginners):**

1. Open `public/app.js` in a text editor
2. Find this line (around line 7):
```javascript
const contractAddress = '0x173c37D09C04F630473C138FE476caDF74e53E4b';
```
3. Replace the address with your deployed contract address:
```javascript
const contractAddress = '0xYOUR_DEPLOYED_CONTRACT_ADDRESS_HERE';
```
4. Save the file
5. Repeat for:
   - `public/police-dashboard.js` (around line 9)
   - `public/court-dashboard.js` (around line 8)

**Example:**
```javascript
// Before
const contractAddress = '0x173c37D09C04F630473C138FE476caDF74e53E4b';

// After (with your actual address)
const contractAddress = '0xAbCdEf1234567890AbCdEf1234567890AbCdEf12';
```

---

## 10. Running the Application

Now let's start the web application!

### Step 10.1: Start the Web Server

**Make sure you're in the project root directory:**

```bash
cd ~/Desktop/Blockchain-Evidence-Archive-System  # Adjust path as needed
```

**Start the server:**

```bash
npm start
```

**Expected output:**
```
Starting up http-server, serving public
Available on:
  http://127.0.0.1:3000
  http://192.168.1.100:3000
Hit CTRL-C to stop the server
```

**🎉 The server is now running!**

### Step 10.2: Open the Application

1. **Open your web browser** (Chrome, Firefox, Edge, etc.)
2. **Navigate to:**
```
http://localhost:3000
```
or
```
http://127.0.0.1:3000
```

3. **You should see the BEAS login page!**

**Keep the terminal window open!** The server needs to keep running.

---

## 11. Testing the Application

Now let's test the complete workflow!

### Step 11.1: Test User Registration

1. **In the browser** (on the BEAS page):
   - Click the **"Register"** tab
   
2. **Connect MetaMask:**
   - Click **"Connect with MetaMask"**
   - MetaMask popup will appear
   - Click **"Next"** → **"Connect"**
   - You should see your account address appear

3. **Fill in registration form:**
   - **Full Name:** `Test Officer` (or any name)
   - **Role:** Select **"Police"** (or "Court")
   
4. **Register:**
   - Click **"Register"**
   - MetaMask will ask you to confirm the transaction
   - Click **"Confirm"**
   - Wait for confirmation (should take a few seconds)

5. **Success!** You should be redirected to the dashboard

### Step 11.2: Test Evidence Upload (Police Dashboard)

If you registered as **Police**:

1. **You should be on the Police Dashboard**
2. **Fill in the evidence form:**
   - **Evidence ID:** `EVD-001` (or any unique ID)
   - **Case Number:** `CASE-2024-001`
   - **Location:** `123 Main Street, City`
   - **Crime Description:** `Test evidence upload`
   - **Evidence Type:** Select **"Image"** (or any type)
   - **Upload Evidence File:** Select a test file (image, document, etc.)

3. **Upload:**
   - Click **"Upload Evidence"**
   - MetaMask will ask for confirmation (for blockchain transaction)
   - Confirm the transaction
   - Wait for upload (this may take a minute)

4. **Success!** You should see a success message

### Step 11.3: Test Evidence Verification (Court Dashboard)

1. **Logout** from the current dashboard
2. **Register a new account** with **"Court"** role
3. **Navigate to "Browse Evidence"**
4. **You should see the evidence you uploaded**
5. **Click "Verify"** on any evidence
6. **View the evidence details**

### Step 11.4: Test View Evidence (Police)

1. **As Police user**, go to **"View Evidence"**
2. **You should see all uploaded evidence**
3. **Try searching** by case number
4. **Try filtering** by evidence type
5. **Click "View Details"** on any evidence

---

## 12. Troubleshooting

### Problem: "npm: command not found"

**Solution:**
- Node.js is not installed or not in PATH
- Reinstall Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### Problem: "MetaMask not detected"

**Solution:**
- Make sure MetaMask extension is installed
- Refresh the browser page
- Make sure MetaMask is unlocked

### Problem: "Transaction failed" or "Insufficient funds"

**Solution:**
- Make sure you're connected to "Ganache Local" network
- Make sure Ganache is running
- Check that your account has ETH (should show 100 ETH in MetaMask)
- Try using a different account from Ganache

### Problem: "Cannot connect to Ganache"

**Solution:**
- Make sure Ganache is running
- Check the port number (should be 7545)
- In MetaMask, verify network settings:
  - RPC URL: `http://127.0.0.1:7545`
  - Chain ID: `1337`

### Problem: "IPFS upload failed"

**Solution:**
- Check your Pinata API keys in `public/config.js`
- Make sure they're correct (no extra spaces)
- Verify your Pinata account is active
- Check file size (max 50MB)

### Problem: "Contract not found" or "Contract address error"

**Solution:**
- Make sure you deployed the contracts (`truffle migrate`)
- Copy the correct contract address from deployment output
- Update all three files: `app.js`, `police-dashboard.js`, `court-dashboard.js`
- Make sure the address starts with `0x` and is 42 characters long

### Problem: "Cannot load evidence preview"

**Solution:**
- Check browser console for errors (F12 → Console)
- Verify IPFS hash is correct
- Check Pinata gateway is accessible
- Try refreshing the page

### Problem: Server won't start (port 3000 already in use)

**Solution:**
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# OR use a different port
PORT=3001 npm start
```

### Problem: "Module not found" errors

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json  # macOS/Linux
# OR
rmdir /s node_modules  # Windows (be careful!)

npm install
```

### Problem: Truffle commands not working

**Solution:**
```bash
# Reinstall Truffle globally
npm install -g truffle

# Verify installation
truffle version
```

---

## ✅ Quick Reference Checklist

Use this checklist to verify everything is set up:

- [ ] Node.js and npm installed (`node --version`, `npm --version`)
- [ ] Git installed (`git --version`)
- [ ] MetaMask extension installed
- [ ] MetaMask wallet created
- [ ] Ganache installed and running
- [ ] MetaMask connected to Ganache network
- [ ] Ganache account imported to MetaMask
- [ ] Pinata account created
- [ ] Pinata API keys obtained
- [ ] Project dependencies installed (`npm install`)
- [ ] `config.js` updated with Pinata keys
- [ ] Smart contracts compiled (`truffle compile`)
- [ ] Smart contracts deployed (`truffle migrate`)
- [ ] Contract address updated in code files
- [ ] Web server started (`npm start`)
- [ ] Application accessible at `http://localhost:3000`

---

## 🎯 Quick Start Commands Summary

Here are all the commands you'll need, in order:

```bash
# 1. Navigate to project
cd ~/Desktop/Blockchain-Evidence-Archive-System

# 2. Install dependencies
npm install

# 3. Install global packages
npm install -g truffle http-server

# 4. Start Ganache (in a separate terminal)
ganache-cli -p 7545
# OR use Ganache GUI

# 5. Configure config.js with Pinata keys
# (Edit manually with text editor)

# 6. Compile contracts
truffle compile

# 7. Deploy contracts
truffle migrate --network development

# 8. Update contract address in app.js, police-dashboard.js, court-dashboard.js
# (Edit manually with text editor)

# 9. Start server
npm start

# 10. Open browser to http://localhost:3000
```

---

## 📞 Need Help?

If you encounter any issues:

1. **Check the Troubleshooting section** above
2. **Check browser console** (F12 → Console) for errors
3. **Check terminal output** for error messages
4. **Verify all steps** in the Quick Reference Checklist
5. **Create an issue** on GitHub with error details

---

## 🎉 Congratulations!

You've successfully set up and run BEAS from scratch! The application should now be fully functional with:

- ✅ Local blockchain running (Ganache)
- ✅ MetaMask connected
- ✅ Smart contracts deployed
- ✅ IPFS configured (Pinata)
- ✅ Web application running
- ✅ Full functionality available

**Enjoy using BEAS!** 🚀

---

*Last updated: 2025*
*Project: Blockchain Evidence Archive System (BEAS)*
*Created by: Aryan Patil*
