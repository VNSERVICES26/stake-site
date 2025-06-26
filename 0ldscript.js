// Contract Configuration
const CONTRACT_ADDRESS = "0xC0a8496a9ef2aE23D56F886a3205bb4822a497d1"; // Replace with your contract address
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercent","type":"uint256"}],"name":"ROIPercentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"inVNST","type":"bool"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RewardRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newVnstPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVntPrice","type":"uint256"}],"name":"TokenPricesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ANTI_SYBLOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_VNT_WITHDRAWAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"annualRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"blacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dailyROIPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directIncomePercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntReward","type":"uint256"},{"internalType":"uint256","name":"usdtReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStats","outputs":[{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"directMembers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWalletBalances","outputs":[{"internalType":"uint256","name":"vnstStakingBalance","type":"uint256"},{"internalType":"uint256","name":"vntRewardBalance","type":"uint256"},{"internalType":"uint256","name":"usdtRewardBalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelReferrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requiredDirectMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"pendingVNT","type":"uint256"},{"internalType":"uint256","name":"pendingUSDT","type":"uint256"},{"internalType":"uint256","name":"claimedVNT","type":"uint256"},{"internalType":"uint256","name":"claimedUSDT","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyROIPercent","type":"uint256"}],"name":"setDailyROIPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_annualRewardRate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"unblacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStats","outputs":[{"internalType":"uint256","name":"totalDirectMembers","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]; // Make sure this matches your contract exactly

// Token Addresses
const TOKEN_ADDRESSES = {
  VNST: "0x5C6cB004b50278c6726c3cBEDd25165c2072C46D",
  VNT: "0xa7e41CB0A41dbFC801408d3B577fCed150c4eeEc",
  USDT: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd"
};

// Standard ERC20 ABI
const ERC20_ABI = [
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"name": "_spender", "type": "address"},
      {"name": "_value", "type": "uint256"}
    ],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "type": "function"
  }
];

// Network Configuration
const NETWORK_CONFIG = {
  56: {
    name: "Binance Smart Chain",
    rpcUrl: "https://bsc-dataseed.binance.org/",
    explorer: "https://bscscan.com"
  },
  97: {
    name: "Binance Smart Chain Testnet",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    explorer: "https://testnet.bscscan.com"
  }
};

// Web3 and Contract Instance
let web3;
let stakingContract;
let userAddress;
let walletConnectProvider;

// Initialize WalletConnect with proper bridge
function initWalletConnect() {
  walletConnectProvider = new WalletConnectProvider.default({
    rpc: {
      56: NETWORK_CONFIG[56].rpcUrl,
      97: NETWORK_CONFIG[97].rpcUrl
    },
    bridge: "https://bridge.walletconnect.org", // Explicit bridge URL
    qrcodeModalOptions: {
      mobileLinks: ["metamask", "trust", "rainbow", "argent", "imtoken", "pillar"]
    }
  });
}

// Initialize Web3
async function initWeb3(providerType) {
  try {
    if (providerType === 'metamask') {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Check and switch to BSC network
        const chainId = await web3.eth.getChainId();
        if (chainId !== 56 && chainId !== 97) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x38' }], // BSC Mainnet
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: '0x38',
                    chainName: 'Binance Smart Chain',
                    nativeCurrency: {
                      name: 'BNB',
                      symbol: 'bnb',
                      decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com']
                  }]
                });
              } catch (addError) {
                console.error("Error adding BSC:", addError);
                throw new Error("Please switch to Binance Smart Chain");
              }
            }
          }
        }
        return true;
      } else {
        throw new Error("Please install MetaMask");
      }
    } else if (providerType === 'walletconnect') {
      await walletConnectProvider.enable();
      web3 = new Web3(walletConnectProvider);
      
      // Verify chainId
      const chainId = await web3.eth.getChainId();
      if (chainId !== 56 && chainId !== 97) {
        throw new Error("Please switch to Binance Smart Chain in your wallet");
      }
      return true;
    }
  } catch (error) {
    console.error("Init error:", error);
    showMessage(`Connection error: ${error.message}`, 'error');
    return false;
  }
}

// Initialize Contract with error handling
function initContract() {
  try {
    stakingContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    console.log("Contract initialized:", stakingContract);
  } catch (error) {
    console.error("Contract init error:", error);
    throw new Error("Failed to initialize contract");
  }
}

// Show Wallet Info
function showWalletInfo(address) {
  const walletInfo = document.getElementById('wallet-info');
  const connectedAddress = document.getElementById('connected-address');
  const referralLink = document.getElementById('referral-link');
  
  if (walletInfo && connectedAddress && referralLink) {
    walletInfo.style.display = 'block';
    connectedAddress.textContent = `${address.substring(0, 6)}...${address.substring(38)}`;
    referralLink.value = `${window.location.origin}?ref=${address}`;
  }
}

// Connect Wallet with proper error handling
async function connectWallet(providerType) {
  try {
    const isInitialized = await initWeb3(providerType);
    if (!isInitialized) return;

    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
    
    updateWalletConnection(providerType === 'metamask' ? 'MetaMask' : 'WalletConnect');
    showWalletInfo(userAddress);
    
    initContract();
    
    // Load data with error handling
    try {
      await loadHomeData();
      await loadStakingData();
      await loadTeamData();
    } catch (loadError) {
      console.error("Data load error:", loadError);
    }
    
    setupEventListeners();
    checkReferral();
    
  } catch (error) {
    console.error("Wallet connection error:", error);
    showMessage(`Connection failed: ${error.message}`, 'error');
  }
}

// Updated loadHomeData with proper methods
async function loadHomeData() {
  if (!stakingContract || !userAddress) return;

  try {
    // Use methods that exist in your contract
    const totalStaked = await stakingContract.methods.getTVL().call();
    const activeStakes = await stakingContract.methods.getActiveStakesCount().call();

    // Update UI with existing data
    if (document.getElementById('total-staked')) {
      document.getElementById('total-staked').textContent = `${web3.utils.fromWei(totalStaked, 'ether')} VNST`;
    }
    if (document.getElementById('active-stakes')) {
      document.getElementById('active-stakes').textContent = activeStakes;
    }
  } catch (error) {
    console.error("Home data error:", error);
    throw error;
  }
}

// Updated loadStakingData with proper methods
async function loadStakingData() {
  if (!stakingContract || !userAddress) return;

  try {
    const vnstToken = new web3.eth.Contract(ERC20_ABI, TOKEN_ADDRESSES.VNST);
    const balance = await vnstToken.methods.balanceOf(userAddress).call();
    
    const stakeInfo = await stakingContract.methods.stakes(userAddress).call();
    const rewards = await stakingContract.methods.getPendingRewards(userAddress).call();
    
    // Update UI
    if (document.getElementById('wallet-balance')) {
      document.getElementById('wallet-balance').textContent = `${web3.utils.fromWei(balance, 'ether')} VNST`;
    }
    if (document.getElementById('user-staked')) {
      document.getElementById('user-staked').textContent = `${web3.utils.fromWei(stakeInfo.amount, 'ether')} VNST`;
    }
    if (document.getElementById('user-active')) {
      document.getElementById('user-active').textContent = stakeInfo.active ? 'Active' : 'Inactive';
    }
    
    // Update buttons
    if (document.getElementById('stake-btn')) {
      document.getElementById('stake-btn').disabled = stakeInfo.active;
    }
  } catch (error) {
    console.error("Staking data error:", error);
    throw error;
  }
}

// Updated stakeTokens with proper flow
async function stakeTokens() {
  try {
    const amount = document.getElementById('stake-amount').value;
    const referrer = document.getElementById('referrer').value.trim();
    
    if (!amount || isNaN(amount) {
      throw new Error("Invalid amount");
    }
    
    if (!referrer || !web3.utils.isAddress(referrer)) {
      throw new Error("Invalid referrer address");
    }
    
    const amountWei = web3.utils.toWei(amount, 'ether');
    const vnstToken = new web3.eth.Contract(ERC20_ABI, TOKEN_ADDRESSES.VNST);
    
    // Check balance
    const balance = await vnstToken.methods.balanceOf(userAddress).call();
    if (web3.utils.toBN(balance).lt(web3.utils.toBN(amountWei))) {
      throw new Error("Insufficient VNST balance");
    }
    
    // Check allowance
    const allowance = await vnstToken.methods.allowance(userAddress, CONTRACT_ADDRESS).call();
    if (web3.utils.toBN(allowance).lt(web3.utils.toBN(amountWei))) {
      showMessage("Approving VNST...", 'status');
      await vnstToken.methods.approve(CONTRACT_ADDRESS, amountWei)
        .send({ from: userAddress });
    }
    
    showMessage("Staking VNST...", 'status');
    await stakingContract.methods.stake(amountWei, referrer)
      .send({ from: userAddress });
    
    showMessage("Staking successful!", 'success');
    document.getElementById('stake-amount').value = '';
    
    // Refresh data
    await loadStakingData();
    await loadTeamData();
    
  } catch (error) {
    console.error("Staking error:", error);
    showMessage(`Staking failed: ${error.message}`, 'error');
  }
}

// Show message helper
function showMessage(message, type = 'status') {
  const statusDiv = document.getElementById('statusMessages') || document.body;
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.className = `${type}-message`;
  statusDiv.appendChild(messageElement);
  setTimeout(() => messageElement.remove(), 5000);
}

// Initialize when page loads
window.addEventListener('load', () => {
  initWalletConnect();
  setupEventListeners();
  
  // Check if wallet is already connected
  if (window.ethereum && window.ethereum.selectedAddress) {
    connectWallet('metamask');
  }
});
