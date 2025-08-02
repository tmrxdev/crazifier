// settings loader thingy a
document.addEventListener('DOMContentLoaded', () => {
  const options = ['fonts', 'colors', 'images', 'videos', 'cats', 'sounds'];
  
  // Check if browser APIs are available
  const browserAPI = window.chrome || window.browser;
  if (!browserAPI) {
    console.error('Browser API not found');
    return;
  }

  // Use storage API with error handling
  browserAPI.storage.local.get(
    options.map(opt => `crazifier_${opt}`),
    (result) => {
      if (browserAPI.runtime.lastError) {
        console.error('Storage error:', browserAPI.runtime.lastError);
        return;
      }
      options.forEach(opt => {
        const saved = result[`crazifier_${opt}`];
        document.getElementById(opt).checked = saved === undefined ? true : saved;
      });
    }
  );

  options.forEach(opt => {
    document.getElementById(opt).addEventListener('change', (e) => {
      browserAPI.storage.local.set({
        [`crazifier_${opt}`]: e.target.checked
      }, () => {
        if (browserAPI.runtime.lastError) {
          console.error('Storage error:', browserAPI.runtime.lastError);
        }
      });
    });
  });

  // let the chaos begin
  document.getElementById('crazifyBtn').addEventListener('click', () => {
    // save super cool settings
    const settings = {};
    options.forEach(opt => {
      settings[`crazifier_${opt}`] = document.getElementById(opt).checked;
    });
    
    browserAPI.storage.local.set(settings, () => {
      if (browserAPI.runtime.lastError) {
        console.error('Storage error:', browserAPI.runtime.lastError);
        return;
      }
      
      browserAPI.tabs.query({active: true, currentWindow: true}, ([tab]) => {
        if (!tab || browserAPI.runtime.lastError) {
          console.error('Tab query error:', browserAPI.runtime.lastError);
          return;
        }
        
        browserAPI.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        }).catch(err => {
          console.error('Script injection error:', err);
        });
      });
    });
  });
});
