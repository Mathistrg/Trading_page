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
      
        if (label.classList.contains('active')) {
          // Bouton activé, gris à image1
          image1.classList.add('grayscale');
          image2.classList.remove('grayscale');
        } else {
          // Bouton désactivé, gris à image2
          image1.classList.remove('grayscale');
          image2.classList.add('grayscale');
        }
      
        // Changer la source de l'image "TSwap" lorsque le toggle est activé
        if (label.classList.contains('active')) {
          tswapImage.src = "/img/GEM.png";
        } else {
          tswapImage.src = "https://res.cloudinary.com/dkfzwchma/image/upload/v1685904581/COIN1_k9wpjp.png";
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
        endDate.setHours(endDate.getHours() + 24);


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