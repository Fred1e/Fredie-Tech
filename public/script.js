// Handle Signup Form Submission
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      alert(result.message);
      // Optionally redirect user to dashboard
      window.location.href = "account.html";
    } catch (err) {
      console.error(err);
      alert("Signup failed.");
    }
  });
}

// Handle Payment Form Submission
const paymentForm = document.getElementById("paymentForm");
if (paymentForm) {
  paymentForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(paymentForm);
    const data = Object.fromEntries(formData.entries());
    let endpoint = '/api/';
    // Determine endpoint based on selected method
    switch (data.method) {
      case 'mpesa':
        endpoint += 'mpesa-payment';
        break;
      case 'vodacom':
        endpoint += 'vodacom-payment';
        break;
      case 'halotel':
        endpoint += 'halotel-payment';
        break;
      case 'visa':
        endpoint += 'visa-payment';
        break;
      case 'bank':
        endpoint += 'bank-payment';
        break;
      default:
        alert("Invalid payment method selected");
        return;
    }
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Payment processing failed.");
    }
  });
}

// Handle Deployment Form Submission
const deployForm = document.getElementById("deployForm");
if (deployForm) {
  deployForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(deployForm);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      console.error(err);
      alert("Deployment failed.");
    }
  });
}
