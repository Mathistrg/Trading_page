document.addEventListener('DOMContentLoaded', function () {
  var leverageDiv = document.getElementById('leverageDiv');
  var closeBtn = document.getElementById('closeBtn');
  var confirmBtn = document.getElementById('confirmBtn');
  var timescaleBtn = document.getElementById('timescale');

  timescaleBtn.addEventListener('click', function () {
      leverageDiv.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', function () {
      leverageDiv.classList.add('hidden');
  });

  confirmBtn.addEventListener('click', function () {
      leverageDiv.classList.add('hidden');
      // Ajoutez ici le code pour gérer le clic sur le bouton de confirmation
  });
});
    // Sélectionnez l'élément de plage et la valeur
    var rangeInput = document.getElementById('leverageRange');

    // Ajoutez un écouteur d'événements pour le changement de plage
    rangeInput.addEventListener('input', function() {
        // Mettez à jour la valeur en fonction de la plage
        var updatedValue = rangeInput.value;
        
        // Affichez la nouvelle valeur (vous pouvez faire autre chose avec cette valeur)
        console.log(updatedValue);
    });
    

    const value = document.querySelector("#value");
    const input = document.querySelector("#leverageRange");
    
    // Mettez à jour la valeur initiale avec le format au dixième
    value.textContent = parseFloat(input.value).toFixed(1);
    
    input.addEventListener("input", (event) => {
        // Mettez à jour la valeur avec le format au dixième
        value.textContent = parseFloat(event.target.value).toFixed(1);
    });

    // Attendre que le document soit prêt
    $(document).ready(function(){
        // Sélectionner le champ de texte et le curseur
        var $leverage = $('#leverage1');
        var $leverageRange = $('#leverageRange');

        // Lorsque le champ de texte est modifié
        $leverage.on('input', function(){
            // Arrondir le nombre au dixième
            var roundedValue = parseFloat($(this).val()).toFixed(1);
            
            // Mettre à jour la valeur du curseur
            $leverageRange.val(roundedValue);
        });

        // Lorsque le curseur est déplacé
        $leverageRange.on('input', function(){
            // Arrondir le nombre au dixième
            var roundedValue = parseFloat($(this).val()).toFixed(1);

            // Mettre à jour la valeur du champ de texte
            $leverage.val(roundedValue);
        });
    });


    document.addEventListener("DOMContentLoaded", function () {
        // toggleButton au chargement de la page
        toggleButton(document.querySelector('.toggle-btn'));
      });
      
      function toggleButton(label) {
        label.classList.toggle('active');
      
        // images en niveaux de gris
        var image1 = document.getElementById('image1');
        var image2 = document.getElementById('image2');

        var paireTextSpan = document.getElementById('paireText');
      
        if (label.classList.contains('active')) {
          // Bouton activé, gris à image1
          image1.classList.add('grayscale');
          image2.classList.remove('grayscale');
          paireTextSpan.textContent = 'BTC/GEM';
        } else {
          // Bouton désactivé, gris à image2
          image1.classList.remove('grayscale');
          image2.classList.add('grayscale');
          paireTextSpan.textContent = 'BTC/TSWAP';
        }
      
        // Changer la source de l'image "TSwap" lorsque le toggle est activé
        if (label.classList.contains('active')) {
          tswapImage.src = "/img/GEM.png";
        } else {
          tswapImage.src = "https://res.cloudinary.com/dkfzwchma/image/upload/v1685904581/COIN1_k9wpjp.png";
        }

        var targetPage1 = document.getElementById('page1');
        var targetPage3 = document.getElementById('page3');
      
        if (label.classList.contains('active')) {
          targetPage1.classList.remove('hidden');
          targetPage3.classList.add('hidden');
        } else {
          targetPage1.classList.add('hidden');
          targetPage3.classList.remove('hidden');
          targetPage3.style.display = 'flex';
        }
      
        var gemContent = document.getElementById("popup-bannerGEM");
        var gemContentwidget = document.getElementById("countdownValueGEM-widget");
        var tswapContent = document.getElementById("popup-bannerTSWAP");
        var tswapContentwidget = document.getElementById("countdownValueTSWAP-widget");
        var widgetsettingGEM = document.getElementById("setting-widgetGEM");
        var widgetsettingTSWAP = document.getElementById("setting-widgetTSWAP");
      
        if (tswapContent.style.display === "none") {
          gemContent.style.display = "none";
          gemContentwidget.style.display ="none";
          widgetsettingGEM.style.display ="none";
          widgetsettingTSWAP.style.display ="flex";
          tswapContent.style.display = "flex";
          tswapContentwidget.style.display ="flex";
        } else {
          gemContent.style.display = "flex";
          gemContentwidget.style.display ="flex";
          widgetsettingGEM.style.display="flex";
          widgetsettingTSWAP.style.display="none";
          tswapContent.style.display = "none";
          tswapContentwidget.style.display ="none";
        }
      }


    

    document.addEventListener('DOMContentLoaded', function() {
        var rangeInput = document.getElementById('leverageRange');
        var outputElement = document.getElementById('value');
    
        rangeInput.addEventListener('change', updateRange);
        rangeInput.addEventListener('input', updateRange);
    
        // Set the starting and ending colors (green to red)
        var startColor = [0, 255, 0]; // RGB values for green
        var endColor = [255, 0, 0];   // RGB values for red
    
        // Initial setup
        updateRange();
    
        function updateRange() {
            var rangePercent = Math.round(rangeInput.value * 10) / 10; // Round to the nearest tenth
            outputElement.innerHTML = rangePercent + '<span></span>';
            applyStyles();
        }
    
        function applyStyles() {
            var spanElement = outputElement.querySelector('span');
    
            // Calculate the current color based on the range input
            var currentColor = interpolateColor(startColor, endColor, rangeInput.value / 100);
    
            // Set the background color
            rangeInput.style.backgroundColor = 'rgb(' + currentColor.join(',') + ')';
            spanElement.style.backgroundColor = 'rgb(' + currentColor.join(',') + ')';
        }
    
        // Function to interpolate between two colors
        function interpolateColor(startColor, endColor, progress) {
            return startColor.map((value, index) => Math.round(value + (endColor[index] - value) * progress));
        }
    });


    $(function() {
        var h4rangeElement = $('.h4range');
        var imgElement = $('#h4-container');
    
        // Cacher l'élément au début
        imgElement.css('visibility', 'hidden');
    
        // Ajouter un écouteur d'événements sur le document
        $(document).on('input', '[type="range"]', function() {
            var scaleValue = 1 + ($('[type="range"]').val() / 50); // Modifiez le facteur pour ajuster l'agrandissement
    
            h4rangeElement.css({'transform': 'translateX(-50%) scale(' + scaleValue + ')', 'left': $('[type="range"]').val() + '%'});
    
            // Check if the scale reaches 1.8
            if (scaleValue >= 2.5) {
                // Rendre l'élément visible
                imgElement.css('visibility', 'visible');
            } else {
                // Garder l'élément invisible
                imgElement.css('visibility', 'hidden');
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Appeler la fonction pour initialiser le compte à rebours pour GEM
        initializeCountdown("countdownValueGEM");
      
        // Appeler la fonction pour initialiser le compte à rebours pour TSWAP
        initializeCountdown("countdownValueTSWAP");

        initializeCountdown("countdownValueGEM-widget");
        
        initializeCountdown("countdownValueTSWAP-widget");
      });
      
      function initializeCountdown(countdownId) {
        const endDate = new Date();
        endDate.setSeconds(endDate.getSeconds() + 1);


        function formatNumber(num) {
          return num < 10 ? `0${num}` : num;
        }
      
        function updateCountdown() {
          const now = new Date();
          const timeDifference = endDate - now;
      
          if (timeDifference > 0) {
            const hours = formatNumber(Math.floor(timeDifference / (1000 * 60 * 60)));
            const minutes = formatNumber(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = formatNumber(Math.floor((timeDifference % (1000 * 60)) / 1000));
      
            const countdownDisplay = `${hours} : ${minutes}`;
            document.getElementById(countdownId).textContent = countdownDisplay;
            document.getElementById("setting-widgetGEM").style.backgroundColor= "var(--bs-pink)";
            document.getElementById("setting-widgetTSWAP").style.backgroundColor= "var(--bs-yellow)";
          } else {

            clearInterval(countdownInterval);
            document.getElementById("setting-widgetGEM").style.backgroundColor= "transparent";
            document.getElementById("setting-widgetTSWAP").style.backgroundColor = "transparent";
            document.getElementById("setting-widgetGEM").style.border= "2px solid white";
            document.getElementById("setting-widgetTSWAP").style.border = "2px solid white";

            document.getElementById("popup-bannerGEM").style.display= "none";
            document.getElementById("popup-bannerTSWAP").style.display = "none";
            document.getElementById("setting-to-viewTSWAP").src = "img/view-svgrepo-com.svg";
            document.getElementById("setting-to-viewGEM").src = "img/view-svgrepo-com.svg";
            document.getElementById("setting-to-viewGEM").style.width = "30px";
            document.getElementById("setting-to-viewTSWAP").style.width = "30px";
          }
        }
      
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
      }


    

      document.addEventListener("DOMContentLoaded", function() {
        const popupBannerGEM = document.getElementById("popup-bannerGEM");
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        });
      
        observer.observe(popupBannerGEM);
      });
      

      document.addEventListener("DOMContentLoaded", function() {
        const popupBannerGEM = document.getElementById("popup-bannerGEM");
      
        // Ajouter la classe "active" dès le début pour déclencher l'animation au chargement de la page
        popupBannerGEM.classList.add("active");
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        });
      
        observer.observe(popupBannerGEM);
      });

      $(document).ready(function() {
        $("#close-btn").click(function() {
            // Ajoutez la classe pour le slide down
            $("#popup-bannerGEM").addClass("slide-down");
    
            // Utilisez la fonction one pour exécuter le code une seule fois après la fin de l'animation
            $("#popup-bannerGEM").one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
                // Ajoutez la classe pour la disparition après le slide down
                $("#popup-bannerGEM").addClass("hidden");
    
                // Retirez la classe du slide down pour les utilisations futures
                $("#popup-bannerGEM").removeClass("slide-down");
            });
        });
    });

    $(document).ready(function() {
      $("#close-btn").click(function() {
          // Ajoutez la classe pour le slide down
          $("#popup-bannerTSWAP").addClass("slide-down");
  
          // Utilisez la fonction one pour exécuter le code une seule fois après la fin de l'animation
          $("#popup-bannerTSWAP").one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
              // Ajoutez la classe pour la disparition après le slide down
              $("#popup-bannerTSWAP").addClass("hidden");
  
              // Retirez la classe du slide down pour les utilisations futures
              $("#popup-bannerTSWAP").removeClass("slide-down");
          });
      });
  });

  const notifDuel = document.getElementById('notif-duel');
  const notifFx = document.getElementById('notif-fx');
  const newDiv = document.querySelector('.duel-card');
  
  // Ajout d'un écouteur d'événement pour détecter la fin de l'animation
  notifDuel.addEventListener('animationend', (event) => {
      // Vérifie si l'animation qui vient de se terminer est celle que nous attendons
      if (event.animationName === 'zoomOut') {
          // Une fois que toutes les animations sont terminées, masquer les images
          notifFx.style.display = 'none';
          notifDuel.style.display = 'none';
  
          // Afficher la nouvelle div
          newDiv.style.display = 'flex';
  
          // Ajouter votre logique d'animation pour la nouvelle div ici
          newDiv.classList.add('duel-animation');
      }
  });

  const notifDuel2 = document.getElementById('notif-duel2');
  const notifFx2 = document.getElementById('notif-fx2');
  const newDiv2 = document.querySelector('.duel-card2');
  
  // Ajout d'un écouteur d'événement pour détecter la fin de l'animation
  notifDuel2.addEventListener('animationend', (event) => {
      // Vérifie si l'animation qui vient de se terminer est celle que nous attendons
      if (event.animationName === 'zoomOut') {
          // Une fois que toutes les animations sont terminées, masquer les images
          notifFx2.style.display = 'none';
          notifDuel2.style.display = 'none';
  
          // Afficher la nouvelle div
          newDiv2.style.display = 'flex';
  
          // Ajouter votre logique d'animation pour la nouvelle div ici
          newDiv2.classList.add('duel-animation');
      }
  });
  
  const duelCard = document.getElementById('page1');
  const duelCardVs = document.getElementById('duel-card-vs');
  
  // Ajout d'un écouteur d'événement pour détecter la fin de l'animation de .duel-animation
  duelCard.addEventListener('animationend', (event) => {
      // Vérifie si l'animation qui vient de se terminer est celle que nous attendons
      if (event.animationName === 'duelslidedown') {
          // Une fois que l'animation est terminée, afficher #duel-card-vs
          duelCardVs.style.display = 'block';
      }
  });
  const duelCard2 = document.getElementById('page3');
  const duelCardVs2 = document.getElementById('duel-card-vs2');
  
  // Ajout d'un écouteur d'événement pour détecter la fin de l'animation de .duel-animation
  duelCard2.addEventListener('animationend', (event) => {
      // Vérifie si l'animation qui vient de se terminer est celle que nous attendons
      if (event.animationName === 'duelslidedown') {
          // Une fois que l'animation est terminée, afficher #duel-card-vs
          duelCardVs2.style.display = 'block';
      }
  });

  
  function showNextPage() {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');

    // Masquer la première div et afficher la deuxième div
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
  }
  function showNextPage2() {
    var page3 = document.getElementById('page3');
    var page4 = document.getElementById('page4');

    // Masquer la première div et afficher la deuxième div
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
  }

  document.addEventListener("DOMContentLoaded", function() {
    var duelListItems = document.querySelectorAll("#duel-list li");

    function fadeInItems(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }

    var observer = new IntersectionObserver(fadeInItems, { threshold: 1 });

    duelListItems.forEach(function(item) {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  initReusableButton("close-btn-duel", "page2");
  initReusableButton("accept-duel", "page2");
  initReusableButton("decline-duel", "page2");
  
});

function initReusableButton(buttonId, pageId) {
  var closeBtn = document.getElementById(buttonId);
  var page = document.getElementById(pageId);

  // Fonction pour gérer la fin de l'animation
  function onAnimationEnd() {
    page.removeEventListener("animationend", onAnimationEnd);
    page.classList.add("hidden"); // Ajoutez la classe hidden après l'animation
  }

  closeBtn.addEventListener("click", function() {
    page.classList.add("closing"); // Ajoutez la classe de fermeture
    page.addEventListener("animationend", onAnimationEnd); // Écoutez la fin de l'animation
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initReusableButton("close-btn-duel2", "page4");
  initReusableButton("accept-duel2", "page4");
  initReusableButton("decline-duel2", "page4");
  
});

function initReusableButton(buttonId, pageId) {
  var closeBtn2 = document.getElementById(buttonId);
  var page2 = document.getElementById(pageId);

  // Fonction pour gérer la fin de l'animation
  function onAnimationEnd() {
    page2.removeEventListener("animationend", onAnimationEnd);
    page2.classList.add("hidden"); // Ajoutez la classe hidden après l'animation
  }

  closeBtn2.addEventListener("click", function() {
    page2.classList.add("closing"); // Ajoutez la classe de fermeture
    page2.addEventListener("animationend", onAnimationEnd); // Écoutez la fin de l'animation
  });
}

var settingToViewGEM = document.getElementById("setting-to-viewGEM");
var settingToViewTSWAP = document.getElementById("setting-to-viewTSWAP");

// Ajoutez un écouteur d'événement pour le clic sur l'image GEM
settingToViewGEM.addEventListener("click", function() {
    // Changez la source de l'image GEM
    document.getElementById("setting-to-viewGEM").src = "img/view-svgrepo-com.svg";

    // Affichez la div correspondante en supprimant la classe "hidden"
    document.querySelector(".duel-result-gem").classList.remove("hidden");

    // Cachez la div correspondante en ajoutant la classe "hidden" à l'autre div
    document.querySelector(".duel-result-tswap").classList.add("hidden");
});

// Ajoutez un écouteur d'événement pour le clic sur l'image TSWAP
settingToViewTSWAP.addEventListener("click", function() {
    // Changez la source de l'image TSWAP
    document.getElementById("setting-to-viewTSWAP").src = "img/view-svgrepo-com.svg";

    // Affichez la div correspondante en supprimant la classe "hidden"
    document.querySelector(".duel-result-tswap").classList.remove("hidden");

    // Cachez la div correspondante en ajoutant la classe "hidden" à l'autre div
    document.querySelector(".duel-result-gem").classList.add("hidden");
});

function changeText() {
  var modeTextElement = document.getElementById("modeText");

  // Vérifier le texte actuel et le changer
  if (modeTextElement.innerHTML === "Mode : Blitz") {
      modeTextElement.innerHTML = "<strong class='white-text'>Victoire</strong> : Faire le plus gros gain sur une position. <strong class='white-text'>Devise</strong> : Bitcoin <strong class='white-text'>Délai</strong> : 24h <strong class='white-text'>Capital</strong> : 5000€ <strong class='white-text'>Max Levier</strong> : x20 <strong class='white-text'>Max Positions</strong> : 4";
  } else {
      modeTextElement.innerHTML = "Mode : Blitz";
  }
}

document.getElementById('defaite').addEventListener('click', function () {
  // Retirer la classe 'hidden' des divs 'prime-win' et 'table-win'
  document.getElementById('prime-lose').classList.remove('hidden');
  document.getElementById('table-lose').classList.remove('hidden');
  document.getElementById('perf-lose').classList.remove('hidden');
  document.getElementById('user-lose').classList.remove('hidden');
  
  // Ajouter la classe 'hidden' aux divs 'prime-lose' et 'table-lose'
  document.getElementById('prime-win').classList.add('hidden');
  document.getElementById('table-win').classList.add('hidden');
  document.getElementById('perf-win').classList.add('hidden');
  document.getElementById('user-win').classList.add('hidden');

  document.getElementById('win-text').style.color = 'white';
  document.getElementById('lose-text').style.color = 'black';
  document.getElementById('close-btn-duel3').style.color = 'black';
});

document.getElementById('victoire').addEventListener('click', function () {
  // Retirer la classe 'hidden' des divs 'prime-win' et 'table-win'
  document.getElementById('prime-win').classList.remove('hidden');
  document.getElementById('table-win').classList.remove('hidden');
  document.getElementById('perf-win').classList.remove('hidden');
  document.getElementById('user-win').classList.remove('hidden');
  
  // Ajouter la classe 'hidden' aux divs 'prime-lose' et 'table-lose'
  document.getElementById('prime-lose').classList.add('hidden');
  document.getElementById('table-lose').classList.add('hidden');
  document.getElementById('perf-lose').classList.add('hidden');
  document.getElementById('user-lose').classList.add('hidden');

  document.getElementById('win-text').style.color = 'black';
  document.getElementById('lose-text').style.color = 'white';
  document.getElementById('close-btn-duel3').style.color = 'white';
});

document.getElementById('defaiteT').addEventListener('click', function () {
  // Retirer la classe 'hidden' des divs 'prime-win' et 'table-win'
  document.getElementById('prime-loseT').classList.remove('hidden');
  document.getElementById('table-loseT').classList.remove('hidden');
  document.getElementById('perf-loseT').classList.remove('hidden');
  document.getElementById('user-loseT').classList.remove('hidden');
  
  // Ajouter la classe 'hidden' aux divs 'prime-lose' et 'table-lose'
  document.getElementById('prime-winT').classList.add('hidden');
  document.getElementById('table-winT').classList.add('hidden');
  document.getElementById('perf-winT').classList.add('hidden');
  document.getElementById('user-winT').classList.add('hidden');

  document.getElementById('win-textT').style.color = 'white';
  document.getElementById('lose-textT').style.color = 'black';
  document.getElementById('close-btn-duel3T').style.color = 'black';
});

document.getElementById('victoireT').addEventListener('click', function () {
  // Retirer la classe 'hidden' des divs 'prime-win' et 'table-win'
  document.getElementById('prime-winT').classList.remove('hidden');
  document.getElementById('table-winT').classList.remove('hidden');
  document.getElementById('perf-winT').classList.remove('hidden');
  document.getElementById('user-winT').classList.remove('hidden');
  
  // Ajouter la classe 'hidden' aux divs 'prime-lose' et 'table-lose'
  document.getElementById('prime-loseT').classList.add('hidden');
  document.getElementById('table-loseT').classList.add('hidden');
  document.getElementById('perf-loseT').classList.add('hidden');
  document.getElementById('user-loseT').classList.add('hidden');

  document.getElementById('win-textT').style.color = 'black';
  document.getElementById('lose-textT').style.color = 'white';
  document.getElementById('close-btn-duel3T').style.color = 'white';
});
function fermerDiv() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('resultT').classList.add('hidden');
}

// Événement pour le bouton de basculement
class ElementToggler {
  constructor(toggleButtonSelector, shareButtonSelector, revancheSelector, shareSelector) {
    this.toggleButton = document.querySelector(toggleButtonSelector);
    this.shareButton = document.querySelector(shareButtonSelector);
    this.revancheElement = document.querySelector(revancheSelector);
    this.shareElement = document.querySelector(shareSelector);

    this.toggleButton.addEventListener('click', () => this.toggle());
    this.shareButton.addEventListener('click', () => this.share());
  }

  toggle() {
    this.toggleElement(this.revancheElement);
    this.closeElement(this.shareElement);
  }

  share() {
    this.toggleElement(this.shareElement);
    this.closeElement(this.revancheElement);
  }

  toggleElement(element) {
    element.classList.toggle('hidden');
  }

  closeElement(element) {
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    }
  }
}

// Instanciation de la classe pour les éléments spécifiques
const elementToggler = new ElementToggler('.toggleButton', '.shareButton', '.revanche', '.share');
const elementToggler1 = new ElementToggler('.btn1', '.sbtn1', '.rv1', '.sh1');
const elementToggler2 = new ElementToggler('.btn2', '.sbtn2', '.rv2', '.sh2');
const elementToggler3 = new ElementToggler('.btn3', '.sbtn3', '.rv3', '.sh3');



var buttons = document.querySelectorAll('.copyButton');

// Ajoutez l'événement à chaque bouton
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var linkToCopy = "https://www.example.com"; // Remplacez cela par le lien du site que vous souhaitez copier
    copyToClipboard(linkToCopy);
  });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Lien copié dans le presse-papiers : " + text);
    })
    .catch(err => {
      console.error('Erreur lors de la copie dans le presse-papiers : ', err);
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const levelElement = document.getElementById("level-number");
  const xpElement = document.getElementById("xp");
  const rankImage = document.querySelector(".rank");
  const levelUpText = document.querySelector(".level-up-text");

  let progress = 0;
  let level = 1;
  let xp = 0;
  let lastTimestamp;

  function updateProgressBar(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;

      const deltaTime = timestamp - lastTimestamp;
      const amount = (deltaTime / 700) * 10; 

      progress += spread(amount);
      xp += amount;

      if (progress >= 100) {
          progress = 0;
          level++;
          animateLevelChange();
      }

 
      if (xp >= 100) {
          xp = 0;
      }

      xpElement.textContent = `${Math.round(xp)} / 100XP`;
      xpElement.style.width = `${(xp / 100) * 100}%`;

      progressBar.style.width = `${progress}%`;
      lastTimestamp = timestamp;

      requestAnimationFrame(updateProgressBar);
  }


  requestAnimationFrame(updateProgressBar);


  function spread(value) {
      return Math.pow(value, 1);
  }


  function animateLevelChange() {
    levelElement.classList.add("level-change");

 
    setTimeout(() => {
        levelElement.textContent = `${level}`;
        animateRankImage(); 
        showLevelUpText();
        animateSparklesImage(); 
    }, 100);

  
    setTimeout(() => {
        levelElement.classList.remove("level-change");
    }, 1000);
}

  function animateSparklesImage() {
    const sparklesImage = document.getElementById("sparkles");
    sparklesImage.classList.add("sparkles-animation");

    
    setTimeout(() => {
        sparklesImage.classList.remove("sparkles-animation");
    }, 5000);
  }

  function animateRankImage() {
      rankImage.classList.add("rank-animated");

      
      setTimeout(() => {
          rankImage.classList.remove("rank-animated");
      }, 10);
  }

  function showLevelUpText() {
      levelUpText.textContent = "NIVEAU SUPERIEUR";
      levelUpText.classList.add("show");

     
      setTimeout(() => {
          levelUpText.classList.remove("show");
      }, 5500);
  }
});

document.addEventListener("click", function (event) {
  const yourLevelElement = document.querySelector(".your-level");

 
  if (!yourLevelElement.contains(event.target)) {
     
      yourLevelElement.classList.add("hidden");
  }
});


function changerImage() {
  var choixType = document.getElementById('choixType').value;


  document.getElementById('imageGEM').style.display = 'none';
  document.getElementById('imageTSWAP').style.display = 'none';


  if (choixType === 'GEM') {
      document.getElementById('imageGEM').style.display = 'block';
  } else if (choixType === 'TSWAP') {
      document.getElementById('imageTSWAP').style.display = 'block';
  }
}
function changerContenuBouton() {
  var choixType = document.getElementById('choixType').value;
  var bouton = document.querySelector('#formulaire button');

  if (choixType === 'GEM') {
      bouton.textContent = 'Envoyer GEM';
  } else if (choixType === 'TSWAP') {
      bouton.textContent = 'Envoyer TSWAP';
  }
}

function calculerTotal() {
  var montantAMettre = parseFloat(document.getElementById('montantAMettre').value) || 0;
  var total = montantAMettre * 1;
  var totalFormate = total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('total').innerText = totalFormate + '€';
}

function envoyer() {
  var choixType = document.getElementById('choixType').value;

  alert('Envoi de ' + choixType);
}

function changeButton(buttonId) {
  var sendButton = document.getElementById('send');
  var getButton = document.getElementById('get');
  var purchaseButton = document.getElementById('purchase');
  var retireButton = document.getElementById('retire');
  var exchangeButton = document.getElementById('exchange');

  if (buttonId === 'send') {
      sendButton.classList.add('active');
      getButton.classList.remove('active');
      sendButton.classList.remove('inactive');
      getButton.classList.add('inactive');
  } else if (buttonId === 'get') {
      getButton.classList.add('active');
      sendButton.classList.remove('active');
      getButton.classList.remove('inactive');
      sendButton.classList.add('inactive');
  }
  if (buttonId === 'purchase') {
    purchaseButton.classList.add('active');
    retireButton.classList.remove('active');
    exchangeButton.classList.remove('active');

    purchaseButton.classList.remove('inactive');
    retireButton.classList.add('inactive');
    exchangeButton.classList.add('inactive');
  } else if (buttonId === 'retire') {
    purchaseButton.classList.remove('active');
    retireButton.classList.add('active');
    exchangeButton.classList.remove('active');

    purchaseButton.classList.add('inactive');
    retireButton.classList.remove('inactive');
    exchangeButton.classList.add('inactive');
  } else if (buttonId === 'exchange') {
    purchaseButton.classList.remove('active');
    retireButton.classList.remove('active');
    exchangeButton.classList.add('active');

    purchaseButton.classList.add('inactive');
    retireButton.classList.add('inactive');
    exchangeButton.classList.remove('inactive');
  }
}

function changeWidget(widgetId) {
  var targetWidget = document.getElementById(widgetId);
  var coinElement = document.getElementById('coin');
  var gemElement = document.getElementById('gem');

  var widgets = document.querySelectorAll('.widget');
  widgets.forEach(function (widget) {
      widget.classList.remove('active');
  });


  targetWidget.classList.add('active');

 
  var widget2B = document.getElementById('widget2B');
  if (widget2B.classList.contains('active')) {
      coinElement.style.display = 'block';  
  } else {
      coinElement.style.display = 'none'; 
  }


  var widget2C = document.getElementById('widget2C');
  if (widget2C.classList.contains('active')) {
      gemElement.style.display = 'block';  
  } else {
      gemElement.style.display = 'none';
  }
}


function changeImage() {
  var choiceType = document.getElementById('choiceType').value;


  document.getElementById('imageGEM-buy').style.display = 'none';
  document.getElementById('imageTSWAP-buy').style.display = 'none';


  if (choiceType === 'GEM') {
      document.getElementById('imageGEM-buy').style.display = 'block';
  } else if (choiceType === 'TSWAP') {
      document.getElementById('imageTSWAP-buy').style.display = 'block';
  }
}

function changerContenuButton() {
  var choiceType = document.getElementById('choiceType').value;
  var button = document.querySelector('#formulaire #buy');

  if (choiceType === 'GEM') {
      button.textContent = 'Acheter GEM';
  } else if (choiceType === 'TSWAP') {
      button.textContent = 'Acheter TSWAP';
  }
}

function calculateTotal() {
  var montantAMettre = parseFloat(document.getElementById('montantAMettre-buy').value) || 0;
  var total = montantAMettre * 1; 
  var totalFormatted = total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('total-buy').innerText = totalFormatted + '€';
}

function acheter() {
  var choiceType = document.getElementById('choiceType').value;

  alert('Achat de ' + choiceType);
}
