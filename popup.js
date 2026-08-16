// Coursera Automation - Fast & Clean Popup Controller (Unlocked)
document.addEventListener('DOMContentLoaded', () => {
  // UI Elements
  const licenseScreen = document.getElementById('license-screen');
  const mainUi = document.getElementById('main-ui');
  const tierBadgeInner = document.getElementById('tier-badge-inner');
  const starRepoBtn = document.getElementById('starRepoBtn');

  // Action Buttons
  const solveQuizBtn = document.getElementById('solveQuizBtn');
  const solveAllBtn = document.getElementById('solveAllBtn');
  const skipVideosBtn = document.getElementById('skipVideosBtn');
  const skipReadingsBtn = document.getElementById('skipReadingsBtn');
  const skipDiscussionBtn = document.getElementById('skipDiscussionBtn');
  const skipPluginsBtn = document.getElementById('skipPluginsBtn');
  const shareableLinkBtn = document.getElementById('shareableLinkBtn');

  // Settings & LLM Provider Elements
  const llmProviderSelect = document.getElementById('llmProvider');
  const geminiModelContainer = document.getElementById('geminiModelContainer');
  const geminiModelSelect = document.getElementById('geminiModel');
  const speedModeSelect = document.getElementById('speedMode');
  const apiKeyLabel = document.getElementById('apiKeyLabel');
  const apiKeyInput = document.getElementById('apiKey');
  const saveKeyBtn = document.getElementById('saveKey');
  const apiStatus = document.getElementById('apiStatus');
  const getKeyLink = document.getElementById('getKeyLink');
  const logoutBtn = document.getElementById('logoutBtn');

  // Permanently unlock UI
  if (licenseScreen) licenseScreen.style.display = 'none';
  if (mainUi) mainUi.style.display = 'block';

  if (tierBadgeInner) {
    tierBadgeInner.textContent = 'PRO UNLOCKED';
    tierBadgeInner.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(99,102,241,0.2))';
    tierBadgeInner.style.border = '1px solid rgba(16,185,129,0.4)';
    tierBadgeInner.style.color = '#34d399';
  }

  // Show status feedback helper
  function showStatus(message, type = 'info', timeoutMs = 5000) {
    if (!apiStatus) return;
    apiStatus.className = `status ${type}`;
    apiStatus.textContent = message;
    apiStatus.style.display = 'block';
    if (timeoutMs > 0) {
      setTimeout(() => {
        if (apiStatus.textContent === message) {
          apiStatus.style.display = 'none';
        }
      }, timeoutMs);
    }
  }

  const keyIconSvg = '<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><path d="M21 2l-2 2m-1.5 1.5L14 9l-1.5-1.5-3 3 1.5 1.5L9 14l-1.5-1.5L3 17a3 3 0 1 0 4.24 4.24l4.5-4.5 1.5 1.5 3-3-1.5-1.5 3.5-3.5 1.5 1.5 2-2-1.5-1.5L21 2z"/></svg>';

  // Update LLM UI depending on provider (groq vs gemini)
  function updateProviderUI(provider, keys = {}) {
    if (provider === 'gemini') {
      if (geminiModelContainer) geminiModelContainer.style.display = 'block';
      if (apiKeyLabel) apiKeyLabel.innerHTML = `${keyIconSvg} Clé API Gemini`;
      if (apiKeyInput) {
        apiKeyInput.placeholder = 'Entrez votre clé API Gemini (AIza...)';
        apiKeyInput.value = keys.geminiApiKey || '';
      }
      if (getKeyLink) {
        getKeyLink.href = 'https://aistudio.google.com/api-keys';
        getKeyLink.innerHTML = `${keyIconSvg} Obtenir une clé Gemini gratuite &rarr; aistudio.google.com`;
      }
    } else {
      if (geminiModelContainer) geminiModelContainer.style.display = 'none';
      if (apiKeyLabel) apiKeyLabel.innerHTML = `${keyIconSvg} Clé API Groq (Recommandé)`;
      if (apiKeyInput) {
        apiKeyInput.placeholder = 'Entrez votre clé API Groq (gsk_...)';
        apiKeyInput.value = keys.groqApiKey || '';
      }
      if (getKeyLink) {
        getKeyLink.href = 'https://console.groq.com/keys';
        getKeyLink.innerHTML = `${keyIconSvg} Obtenir une clé Groq gratuite &rarr; console.groq.com`;
      }
    }
  }

  // Load Saved Settings from Chrome Storage
  chrome.storage.local.get(['llmProvider', 'groqApiKey', 'geminiApiKey', 'geminiModel', 'speedMode'], (data) => {
    const provider = data.llmProvider || 'groq';
    if (llmProviderSelect) llmProviderSelect.value = provider;
    if (geminiModelSelect && data.geminiModel) {
      geminiModelSelect.value = data.geminiModel;
    }
    if (speedModeSelect && data.speedMode) {
      speedModeSelect.value = data.speedMode;
    }
    updateProviderUI(provider, data);
  });

  // Handle Provider Change
  if (llmProviderSelect) {
    llmProviderSelect.addEventListener('change', () => {
      const selected = llmProviderSelect.value;
      chrome.storage.local.set({ llmProvider: selected });
      chrome.storage.local.get(['groqApiKey', 'geminiApiKey'], (data) => {
        updateProviderUI(selected, data);
      });
    });
  }

  // Handle Gemini Model Change
  if (geminiModelSelect) {
    geminiModelSelect.addEventListener('change', () => {
      chrome.storage.local.set({ geminiModel: geminiModelSelect.value });
    });
  }

  // Handle Speed Mode Change
  if (speedModeSelect) {
    speedModeSelect.addEventListener('change', () => {
      const mode = speedModeSelect.value;
      chrome.storage.local.set({ speedMode: mode });
      showStatus('Vitesse : ' + (mode === 'human' ? 'Simulation humaine (1-3s)' : mode === 'slow' ? 'Lent & régulier (3-6s)' : 'Instantané'), 'success', 2500);
    });
  }

  // Save API Key
  if (saveKeyBtn) {
    saveKeyBtn.addEventListener('click', () => {
      const keyVal = (apiKeyInput ? apiKeyInput.value : '').trim();
      const currentProvider = llmProviderSelect ? llmProviderSelect.value : 'groq';

      if (!keyVal) {
        showStatus('Veuillez entrer une clé API.', 'error');
        return;
      }

      if (currentProvider === 'groq') {
        chrome.storage.local.set({ groqApiKey: keyVal }, () => {
          showStatus('Clé Groq enregistrée avec succès.', 'success');
        });
      } else {
        chrome.storage.local.set({ geminiApiKey: keyVal }, () => {
          showStatus('Clé Gemini enregistrée avec succès.', 'success');
        });
      }
    });
  }

  // Helper to send message to active Coursera tab
  function sendTabMessage(payload, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || !tabs[0] || !tabs[0].id) {
        showStatus('Aucun onglet Coursera actif détecté.', 'error');
        return;
      }

      const activeTab = tabs[0];
      if (!activeTab.url || !activeTab.url.includes('coursera.org')) {
        showStatus('Veuillez vous positionner sur la page du cours ou quiz Coursera.', 'error');
        return;
      }

      chrome.tabs.sendMessage(activeTab.id, payload, (response) => {
        if (chrome.runtime.lastError) {
          // Attempt to inject content script if not injected
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            files: ['content.js']
          }, () => {
            if (chrome.runtime.lastError) {
              showStatus('Veuillez rafraîchir la page Coursera (F5) et réessayer.', 'error');
            } else {
              // Retry sending message after injection
              setTimeout(() => {
                chrome.tabs.sendMessage(activeTab.id, payload, (retryRes) => {
                  if (chrome.runtime.lastError) {
                    showStatus('Veuillez rafraîchir la page Coursera (F5).', 'error');
                  } else if (callback) {
                    callback(retryRes);
                  }
                });
              }, 300);
            }
          });
        } else if (callback) {
          callback(response);
        }
      });
    });
  }

  // Solve This Quiz
  if (solveQuizBtn) {
    solveQuizBtn.addEventListener('click', () => {
      chrome.storage.local.get(['llmProvider', 'groqApiKey', 'geminiApiKey', 'geminiModel', 'speedMode'], (data) => {
        const provider = data.llmProvider || 'groq';
        const apiKey = (provider === 'gemini' ? data.geminiApiKey : data.groqApiKey) || (apiKeyInput ? apiKeyInput.value.trim() : '');
        const model = data.geminiModel || 'gemini-2.5-flash';

        if (!apiKey || !apiKey.trim()) {
          showStatus('Veuillez d\'abord entrer et cliquer sur "Save" pour votre clé API ci-dessous.', 'error', 6000);
          if (apiKeyInput) apiKeyInput.focus();
          return;
        }

        showStatus('Résolution du quiz actuel en cours sur Coursera...', 'info');

        sendTabMessage(
          {
            type: 'TRIGGER_SOLVE_ALL',
            provider: provider,
            apiKey: apiKey.trim(),
            model: model,
            speedMode: data.speedMode || 'human'
          },
          () => {
            showStatus('Quiz actuel en cours de résolution.', 'success');
            setTimeout(() => window.close(), 1500);
          }
        );
      });
    });
  }

  // Solve All Quizzes (Pipeline mode across all quizzes)
  if (solveAllBtn) {
    solveAllBtn.addEventListener('click', () => {
      chrome.storage.local.get(['llmProvider', 'groqApiKey', 'geminiApiKey', 'geminiModel', 'speedMode'], (data) => {
        const provider = data.llmProvider || 'groq';
        const apiKey = (provider === 'gemini' ? data.geminiApiKey : data.groqApiKey) || (apiKeyInput ? apiKeyInput.value.trim() : '');
        const model = data.geminiModel || 'gemini-2.5-flash';

        if (!apiKey || !apiKey.trim()) {
          showStatus('Veuillez d\'abord entrer et cliquer sur "Save" pour votre clé API ci-dessous.', 'error', 6000);
          if (apiKeyInput) apiKeyInput.focus();
          return;
        }

        showStatus('Lancement de la résolution de tous les quiz du cours...', 'info');

        sendTabMessage(
          {
            type: 'TRIGGER_START',
            provider: provider,
            apiKey: apiKey.trim(),
            model: model,
            speedMode: data.speedMode || 'human'
          },
          () => {
            showStatus('Tous les quiz sont en cours de résolution.', 'success');
            setTimeout(() => window.close(), 1500);
          }
        );
      });
    });
  }

  // Skip Videos
  if (skipVideosBtn) {
    skipVideosBtn.addEventListener('click', () => {
      showStatus('Validation des vidéos en cours...', 'info');
      sendTabMessage({ type: 'TRIGGER_SKIP_VIDEOS' }, () => {
        showStatus('Traitement des vidéos lancé.', 'success');
        setTimeout(() => window.close(), 1200);
      });
    });
  }

  // Skip Readings
  if (skipReadingsBtn) {
    skipReadingsBtn.addEventListener('click', () => {
      showStatus('Validation des lectures en cours...', 'info');
      sendTabMessage({ type: 'TRIGGER_SKIP_READINGS' }, () => {
        showStatus('Traitement des lectures lancé.', 'success');
        setTimeout(() => window.close(), 1200);
      });
    });
  }

  // Skip Discussions
  if (skipDiscussionBtn) {
    skipDiscussionBtn.addEventListener('click', () => {
      showStatus('Validation des forums en cours...', 'info');
      sendTabMessage({ type: 'TRIGGER_SKIP_DISCUSSIONS' }, () => {
        showStatus('Traitement des forums lancé.', 'success');
        setTimeout(() => window.close(), 1200);
      });
    });
  }

  // Skip Plugins / Labs
  if (skipPluginsBtn) {
    skipPluginsBtn.addEventListener('click', () => {
      showStatus('Validation des plugins/labs en cours...', 'info');
      sendTabMessage({ type: 'TRIGGER_SKIP_PLUGINS' }, () => {
        showStatus('Traitement des plugins lancé.', 'success');
        setTimeout(() => window.close(), 1200);
      });
    });
  }

  // Shareable Link for Peer Assignments
  if (shareableLinkBtn) {
    shareableLinkBtn.addEventListener('click', () => {
      sendTabMessage(
        { type: 'GET_SHAREABLE_LINK' },
        (response) => {
          if (response && response.link) {
            navigator.clipboard.writeText(response.link).then(() => {
              showStatus('Lien de partage copié dans le presse-papier.', 'success');
            });
          } else {
            showStatus('Impossible d\'obtenir le lien. Assurez-vous d\'être sur la page d\'un devoir entre pairs.', 'error');
          }
        }
      );
    });
  }

  // Star repo button
  if (starRepoBtn) {
    starRepoBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://github.com/majghirou-mohamedriyad/Coursera-Solver' });
    });
  }

  // Logout / Reset button
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Voulez-vous effacer vos clés API enregistrées ?')) {
        chrome.storage.local.remove(['groqApiKey', 'geminiApiKey'], () => {
          if (apiKeyInput) apiKeyInput.value = '';
          showStatus('Clés API effacées.', 'info');
        });
      }
    });
  }
});
