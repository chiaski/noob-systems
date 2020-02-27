
// LOAD CAMERA INFORMATION


var start = false;

var socket = io();

var soundStates = [];

$(function () {
    socket.on('connectCounter', function(update){
                $(".camera-viewers").text("Now watching: " + update + " viewers");

        if(update == 1){
            
            $("h1").text("OPEN CAMERA");
        }
        
        if(update >= 3){
            playFile(chooseSound("computer"), .2, 1);
            $('div[data-overlay="scanline"]').css("opacity", "0.25");
        }
        if(update >= 4){
            $("h1").text("the world is not a quiet place");
        }
        
        if(update >= 7){
            playFile(chooseSound("walking"), .25);
            $("h1").text("rarely are we alone");
            
            $('div[data-overlay="scanline"]').css("opacity", "0.6");
            
            $('div[data-overlay="leak"]').css("opacity", "0.6");
        }

        if(update >= 9){
           playFile(chooseSound("crowd"), 0.1, 0);
            $("h1").text("rarely are we alone");
            
            playFile(chooseSound("computer"), .4, 0, 1);
        }
        
        if(update >= 12){
            playSound("whitenoise", 0.02);
            playFile(chooseSound("nature"), 0.2, 0);
            $("h1").text("all of us follow");
            $('div[data-overlay="scanline"]').css("opacity", "0.9");
            
            $('div[data-overlay="leak"]').css("opacity", "1");
            $('div[data-overlay="lights"]').css("opacity", "0.4");
        }
        
        if(update >= 15){
            playSound("whitenoise", 0.04);
            playFile(chooseSound("nature"), 0.2, 0);
            $("h1").text("all of us follow");
        }
        
        
        if(update >= 20){
            
            $('div[data-overlay="lights"]').css("opacity", "0.7");
        }
        
    })

    socket.on("magic", function(what){
        magicPlay(what);
    });
    
});
        


 $( document ).click(function() {
     
     $("#warning").fadeOut("slow");
     
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
     
     
     playSound("whitenoise", 0.005);
     //playFile(chooseSound("rain"), 0.03);       
           
});

// sound layers

function magic(what){
    socket.emit("magic", what);
}


function magicPlay(what){
    
    switch(what){
            
        case "1":
            playSound("press", 0.3, 0);
            break;
            
        case "2":
            yourVoice();
            break;
            
        case "3":
            playSound("thunder", 0.3, 0, 1);
            break;
            
        case "4":
            playSound("church", 0.5, 0, 1);
            break;
            
        case "5":
            playSound("piano", 0.4, 0, 1);
            break;
            
        case "6":
            playSound("door", 0.7, 0, 1);
            break;
            
        case "7":
            playSound("honk", 0.7, 0, 1);
            
            break;
    }
    
}


function playSound(sound, vol, loop, repeat){

    if(!repeat && soundStates.includes(sound)) return;
    
    console.log("trying to play", sound);
    
    let src = "../assets/earth/" + sounder[sound];
    
    console.log(src);
    
    let audio = new Pizzicato.Sound(src, function(){
        
        audio.volume = vol;
        
        if(loop == false){
            audio.loop = false;
        } else{
            audio.loop = true;
        }
        
        var distortion = new Pizzicato.Effects.Distortion({
    gain: 0.4
});

        audio.addEffect(distortion);
        soundStates.push(sound);
        audio.play();
    });
    
}

function playFile(sound, vol, loop, repeat){
    
    if(!repeat && soundStates.includes(sound)) return;
    
    console.log("trying to play", sound);
    
    let audio = new Audio("../assets/earth/" + sound);
    
    audio.volume = vol;
    
    
    if(loop == false){
        audio.loop = false;
    } else{
        audio.loop = true;
    }
        
    soundStates.push(sound);
    audio.play();
    
}

function yourVoice(effect){
    
    var distortion = new Pizzicato.Effects.Distortion({
    feedback: 0.6,
    gain: 0.4
    });
    
    var voice = new Pizzicato.Sound({
    source: 'input',
    options: { volume: 0.8 }
    }, function() {
        voice.addEffect(distortion);
        voice.play();
    });
    
}

function chooseSound(sound){
    
    let choose = Math.floor(Math.random() * sounder[sound].length);
    
    return sounder[sound][choose];
    
}