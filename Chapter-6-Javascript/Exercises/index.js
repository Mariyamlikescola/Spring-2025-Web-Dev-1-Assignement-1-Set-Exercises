
  // Simple calculator function
function calculateTotal() {
    const cost = parseFloat(document.getElementById('cost').value);
    const liters = parseFloat(document.getElementById('liters').value);
    const total = (cost * liters).toFixed(2);
    document.getElementById('total').textContent = `Total: $${total}`;
  }