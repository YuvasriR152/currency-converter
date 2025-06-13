import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const rates = {
    USD: { INR: 83.3, EUR: 0.92 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.09, INR: 89.6 },
  };

  const convert = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
    } else {
      const rate = rates[fromCurrency][toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  return (
    <div className='app-container'>
      <h2>Currency Converter</h2>
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='INR'>INR</option>
          <option value='EUR'>EUR</option>
        </select>

        <span style={{ margin: '0 10px' }}>to</span>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='tocurr'>
          <option value='USD'>USD</option>
          <option value='INR'>INR</option>
          <option value='EUR'>EUR</option>
        </select>
      </div>

      <button className='btn' onClick={convert}>Convert</button>

      {convertedAmount && (
        <p>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
