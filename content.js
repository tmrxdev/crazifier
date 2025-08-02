(async () => {
  // do storage stuff
  const options = await new Promise(resolve => {
    chrome.storage.local.get([
      "crazifier_fonts",
      "crazifier_colors",
      "crazifier_images",
      "crazifier_videos",
      "crazifier_sounds",
      "crazifier_cats"
    ], resolve);
  });

  const fonts = ['Comic Sans MS','Papyrus','Courier New','Impact','Arial Black','Brush Script MT','Cursive','Fantasy','Monospace'];
  
  // do random wikipedia imagz
  const imgs = [
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/50/Llanfairpwllgwyngyll_railway_station_%2818%29.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/8/83/Mona_Lisa_%28copy,_Hermitage%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/NYCS-bull-trans-F.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8f/Rotating_earth_(large).gif',
    'https://upload.wikimedia.org/wikipedia/commons/1/1c/FMA_Transparent_Icon.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
  ];

  // let myinstants do the work
  const sounds = [
    'https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3',
    'https://www.myinstants.com/media/sounds/among-us-role-reveal.mp3',
    'https://www.myinstants.com/media/sounds/baby-laugh-sound-effect.mp3',
    'https://www.myinstants.com/media/sounds/run-vine-sound-effect.mp3',
    'https://www.myinstants.com/media/sounds/what-da-dog-doin.mp3',
    'https://www.myinstants.com/media/sounds/deja-vu.mp3',
    'https://www.myinstants.com/media/sounds/cat-meow-meme.mp3',
    'https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3',
    'https://www.myinstants.com/media/sounds/bruh.mp3',
    'https://www.myinstants.com/media/sounds/oh-no-our-table-its-broken.mp3',
    'https://www.myinstants.com/media/sounds/rick-roll.mp3',
    'https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3',
    'https://www.myinstants.com/media/sounds/directed-by-robert-b_voI9Pu7.mp3',
    'https://www.myinstants.com/media/sounds/windows_error.mp3',
    'https://www.myinstants.com/media/sounds/discord-notification.mp3',
    'https://www.myinstants.com/media/sounds/minecraft-steve-oof.mp3',
    'https://www.myinstants.com/media/sounds/nope.mp3',
    'https://www.myinstants.com/media/sounds/mission-failed-well-get-em-next-time.mp3',
    'https://www.myinstants.com/media/sounds/sheesh_lE4LPds.mp3',
    'https://www.myinstants.com/media/sounds/vine-boom.mp3',
    'https://www.myinstants.com/media/sounds/samsung-notification.mp3',
    'https://www.myinstants.com/media/sounds/bing-chilling.mp3',
    'https://www.myinstants.com/media/sounds/hello-there_zsJBGE5.mp3',
    'https://www.myinstants.com/media/sounds/sad_violin.swf.mp3',
    'https://www.myinstants.com/media/sounds/goofy-yell.mp3',
    'https://www.myinstants.com/media/sounds/metal-pipe-falling-sound.mp3',
    'https://www.myinstants.com/media/sounds/tf_nemesis.mp3',
    'https://www.myinstants.com/media/sounds/wow-meme.mp3'
  ];

  // flooting cats
  const catGifs = [
    'https://media.tenor.com/k_UsDt9xfWIAAAAM/i-will-eat-you-cat.gif',
    'https://i.pinimg.com/736x/b2/60/94/b26094970505bcd59c2e5fe8b6f41cf0.jpg',
    'https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp',
    'https://www.meowbox.com/cdn/shop/articles/Screen_Shot_2024-03-15_at_10.53.41_AM.png?v=1710525250',
    'https://i.redd.it/k5v48axtppqc1.jpeg'
  ];

  const rand = arr => arr[Math.floor(Math.random() * arr.length)];

  // check if element is so cool it should be skipped
  const shouldSkipElement = (el) => {
    const tag = el.tagName.toLowerCase();
    return tag === 'script' || tag === 'style' || tag === 'meta' || tag === 'link' || 
           tag === 'head' || tag === 'html' || tag === 'body' || 
           el.classList.contains('flying-cat');
  };

  // Function to replace stoopid images (broken images)
  const handleBrokenImage = (img) => {
    if (!img.classList.contains('flying-cat')) {
      img.src = rand(imgs);
      img.onerror = () => handleBrokenImage(img);
    }
  };

  if (options.crazifier_fonts) {
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, button, input, textarea').forEach(el => {
      if (!shouldSkipElement(el)) {
        el.style.fontFamily = rand(fonts);
      }
    });
  }

  if (options.crazifier_colors) {
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, button, input, textarea').forEach(el => {
      if (!shouldSkipElement(el)) {
        el.style.color = `hsl(${Math.random()*360},80%,40%)`;
        const computedStyle = window.getComputedStyle(el);
        if (computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
            computedStyle.backgroundColor !== 'transparent') {
          el.style.backgroundColor = `hsl(${Math.random()*360},80%,90%)`;
        }
      }
    });
  }

  if (options.crazifier_images) {
    // Function to replace all stoopid images
    const replaceImagesRecursively = (element) => {
      // Replace stoopid background images via style attributeaa
      if (element.style && element.style.backgroundImage) {
        element.style.backgroundImage = `url(${rand(imgs)})`;
      }

      // Replace stoopid images
      element.querySelectorAll('img').forEach(img => {
        if (!img.classList.contains('flying-cat')) {
          img.removeAttribute('srcset');
          img.src = rand(imgs);
          img.onerror = () => handleBrokenImage(img);
        }
      });

      // Replaces stoopid source elements
      element.querySelectorAll('source').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcset');
        el.setAttribute('srcset', rand(imgs));
      });

      // Replace stoopid SVGs
      element.querySelectorAll('svg,use').forEach(el => {
        if (!shouldSkipElement(el.parentElement)) {
          el.outerHTML = `<img src="${rand(imgs)}" style="width:100%;height:auto;" onerror="this.src='${rand(imgs)}';"/>`;
        }
      });

      // Handle stoopid iframes
      element.querySelectorAll('iframe').forEach(iframe => {
        try {
          replaceImagesRecursively(iframe.contentDocument.body);
        } catch (e) {}
      });
    };

    // Replace stoopid images in the main document
    replaceImagesRecursively(document.body);

    // Replace stoopid CSS background images
    [...document.styleSheets].forEach(sheet => {
      try {
        [...sheet.cssRules].forEach(rule => {
          if (rule.style && rule.style.backgroundImage && 
              !rule.selectorText?.includes('flying-cat')) {
            rule.style.backgroundImage = `url(${rand(imgs)})`;
          }
        });
      } catch (e) {}
    });

    // Monitor stoopid DOM changes for new images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            replaceImagesRecursively(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (options.crazifier_videos) {
    document.querySelectorAll('video').forEach(el => {
      el.src = "";
      el.poster = rand(imgs);
    });
  }

  if (options.crazifier_cats) {
    // Create  stoopid container for flying cats
    const catContainer = document.createElement('div');
    catContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(catContainer);
    
    // Add flying cats with random animations
    for (let i = 0; i < 5; i++) {
      const cat = document.createElement('img');
      cat.src = rand(catGifs);
      cat.className = 'flying-cat';
      cat.style.cssText = `
        position: absolute;
        width: 150px;
        height: auto;
        transform: scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg);
        animation: fly${i} ${5 + Math.random() * 5}s linear infinite;
      `;

      // Create random flight path animation
      const keyframes = `
        @keyframes fly${i} {
          0% { left: -150px; top: ${Math.random() * 100}vh; transform: rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()}); }
          50% { left: 50vw; top: ${Math.random() * 100}vh; transform: rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()}); }
          100% { left: 100vw; top: ${Math.random() * 100}vh; transform: rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()}); }
        }
      `;
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      catContainer.appendChild(cat);
      cat.onerror = () => cat.src = rand(catGifs);
    }
  }

  if (options.crazifier_sounds) {
    // Keep track of currently playing sounds
    const activeSounds = new Set();
    const MAX_SIMULTANEOUS_SOUNDS = 3;

    // Create a pool of pre-loaded audio elements
    const audioPool = sounds.map(url => {
      const audio = new Audio(url);
      audio.volume = 0.3;
      return audio;
    });

    const playRandomSound = () => {
      if (activeSounds.size >= MAX_SIMULTANEOUS_SOUNDS) return;

      const availableAudios = audioPool.filter(audio => !activeSounds.has(audio));
      if (availableAudios.length === 0) return;

      const audio = rand(availableAudios);
      activeSounds.add(audio);

      audio.play().catch(e => {
        console.log('Error playing sound:', e);
        activeSounds.delete(audio);
      });

      audio.onended = () => {
        activeSounds.delete(audio);
        // Schedule next sound with a small delay
        setTimeout(playRandomSound, 200);
      };
    };

    // Start multiple sound streams
    for (let i = 0; i < MAX_SIMULTANEOUS_SOUNDS; i++) {
      setTimeout(() => playRandomSound(), i * 500);
    }

    // Periodically try to add more sounds if we're under the limit
    setInterval(() => {
      if (activeSounds.size < MAX_SIMULTANEOUS_SOUNDS) {
        playRandomSound();
      }
    }, 1000);
  }
})();
