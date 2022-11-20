        window.onload = fadeIn; 
  
        function fadeIn() { 
            var fade = document.getElementById("body"); 
            var opacity = 0; 
            var intervalID = setInterval(function() { 
  
                if (opacity < 1) { 
                    opacity = opacity + 1 
                    fade.style.opacity = opacity; 
                } else { 
                    clearInterval(intervalID); 
                } 
            }, 100); 
        } 
		
        function myFunction() {
            location.reload();
        }