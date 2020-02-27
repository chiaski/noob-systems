console.log("hi");




// LOAD CAMERA INFORMATION

 $( document ).click(function() {
     
     let choose = Math.floor(Math.random() * watchers.length);
     console.log(choose, watchers[choose]);
     
    // Set it up
     
     let place = watchers[choose];
     
     $(".camera-details .place-title").text(place.title);
     $(".camera img").attr("src", place.link);
     
     $(".camera-details .place-geography").text(place.geography);
     $(".camera-details .place-coordinates").text(place.coordinates);
     
     // Set the sound
     
     var audio = new Audio("../assets/earth/" + sounder["whitenoise"]);
     audio.volume = 0.05;
     audio.loop = true;
     
     audio.play();
           
           
});