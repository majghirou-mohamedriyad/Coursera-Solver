// Settings / Options Page Controller
document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInput = document.getElementById('apiKey');
  const saveBtn = document.getElementById('saveBtn');
  const statusDiv = document.getElementById('status');

  function showStatus(text, type = 'info') {
    if (!statusDiv) return;
    statusDiv.textContent = text;
    statusDiv.className = `status ${type}`;
    statusDiv.style.display = 'block';
    setTimeout(() => {
      if (statusDiv.textContent === text) {
        statusDiv.style.display = 'none';
      }
    }, 3500);
  }

  // Load existing key
  chrome.storage.local.get(['groqApiKey'], (data) => {
    if (data.groqApiKey && apiKeyInput) {
      apiKeyInput.value = data.groqApiKey;
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const val = (apiKeyInput ? apiKeyInput.value : '').trim();
      if (!val) {
        showStatus('Please enter an API key.', 'error');
        return;
      }
      chrome.storage.local.set({ groqApiKey: val }, () => {
        showStatus('✓ API key saved successfully!', 'success');
      });
    });
  }
});