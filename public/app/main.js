
// LOAD CAMERA INFORMATION


var start = false;

var socket = io();

$(function () {
    socket.on('connectCounter', function(update){
                $(".camera-viewers").text("Now watching: " + update + " viewers");

        if(update >= 3){
            playFile(chooseSound("rain"));
        }

        if(update >= 4){
            console.log("...");
        }

    })

    socket.on("magic", function(what){
        magicPlay(what);
    });
    
});
        


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
            playSound("thunder", 0.3, 0);
            break;
            
    }
    
}


function playSound(sound, vol, loop){
    
    console.log("trying to play", sound);
    
    let src = "../assets/earth/" + sounder[sound];
    
    console.log(src);
    
    let audio = new Pizzicato.Sound(src, function(){
        
        if(!vol){
        audio.volume = 0.1;
    } else{
        audio.volume = vol;
    }
        if(loop == false){
            audio.loop = false;
        } else{
            audio.loop = true;
        }
        
        var distortion = new Pizzicato.Effects.Distortion({
    gain: 0.4
});

        audio.addEffect(distortion);
        
        audio.play();
    });
    
    //let audio = new Audio("../assets/earth/" + sounder[sound]);
    
    /**/
    
}

function playFile(sound, vol){
    
    console.log("trying to play", sound);
    
    let audio = new Audio("../assets/earth/" + sound);
    
    if(!vol){
        audio.volume = 0.3;
    } else{
        audio.volume = vol;
    }
    
    audio.loop = true;
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