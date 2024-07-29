// script.js
document.getElementById('loginButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        document.getElementById('accountInfo').innerText = `Connected Account: ${account}`;
  
        // Send the account address to the backend
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ address: account })
        });
  
        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error("MetaMask login failed:", error);
      }
    } else {
      console.log("MetaMask is not installed. Please install MetaMask and try again.");
    }
  });
  