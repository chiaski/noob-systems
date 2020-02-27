
// LOAD CAMERA INFORMATION


var start = false;

var socket = io();
socket.on('connectCounter', function(update){
            $(".camera-viewers").text("Now watching: " + update + " viewers");
        })
        


 $( document ).click(function() {
     
     if(start) return;
     start = true;
     
     console.log("earth online.")
     
     let choose = Math.floor(Math.random() * watchers.length);
     
    // Set it up
     
     let place = watchers[choose];
     
     $(".camera-details .place-title").text(place.title);
     $(".camera img").attr("src", place.link);
     
     $(".camera-details .place-geography").text(place.geography);
     $(".camera-details .place-coordinates").text(place.coordinates);
     
     // Set the sound
     
     
     playSound("whitenoise", 0.03);
     
     console.log("multiple rains ", sounder["rain"])
     
           
           
});

function playSound(sound, vol){
    
    let audio = new Audio("../assets/earth/" + sounder[sound]);
    
    if(!vol){
        audio.volume = 0.1;
    } else{
        audio.volume = vol;
    }
    
    audio.loop = true;
    audio.play();
    
}

function chooseSound(sound){
    
    let choose = Math.floor(Math.random() * sound.length);
    
    return sound[choose];
    
}