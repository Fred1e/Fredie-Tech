// mpesa.js
const axios = require('axios');

async function getMpesaAccessToken() {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  try {
    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      { headers: { 'Authorization': `Basic ${credentials}` } }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error generating M-PESA access token:', error.response?.data || error);
    throw error;
  }
}

async function initiateMpesaPayment(amount, phoneNumber, accountReference, transactionDesc) {
  const accessToken = await getMpesaAccessToken();
  const businessShortCode = process.env.MPESA_BUSINESS_SHORT_CODE;
  const passkey = process.env.MPESA_PASSKEY;
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const password = Buffer.from(businessShortCode + passkey + timestamp).toString('base64');

  const requestBody = {
    BusinessShortCode: businessShortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: businessShortCode,
    PhoneNumber: phoneNumber,
    CallBackURL: process.env.MPESA_CALLBACK_URL,
    AccountReference: accountReference,
    TransactionDesc: transactionDesc
  };

  try {
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      requestBody,
      { headers: { 'Authorization': `Bearer ${accessToken}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Error initiating M-PESA payment:', error.response?.data || error);
    throw error;
  }
}

module.exports = {
  initiateMpesaPayment
};
