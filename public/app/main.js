console.log("hi");


var watchers = [

    {
        title: "Embry-Riddle Aeronautical",
        link: "http://flightcam1.pr.erau.edu/mjpg/video.mjpg",
        geography: "Prescott, Arizona, USA",
        coordinates: "34.624802,  -112.421997"
    },
    {
        title: "UNTITLED",
        link: "http://158.58.130.148/mjpg/video.mjpg",
        geography: "Krasnodar, Sochi, Russia",
        coordinates: "43.599170, 39.725690"
    },
    {
        title: "Sakurajima",
        link: "http://camera19.city.tarumizu.kagoshima.jp/nphMotionJpeg?resolution=640x480",
        geography: "Tarumizu, Kagoshima, Japan",
        coordinates: "31.580000, 130.670000"
    },
    {
        title: "Wakasa Hyonosen Ski Resort",
        link: "http://125.206.238.163/-wvhttp-01-/GetOneShot?frame_count=no_limit",
        geography: "Wakasa, Tottori, Japan",
        coordinates: "36.000000, 138.000000"
    },
    {
        title: "Trumbull",
        link: "http://32.208.120.218/mjpg/video.mjpg",
        geography: "Trumbull, Connecticut USA",
        coordinates: "41.242870, -73.200670"
    },
    {
        title: "UNTITLED",
        link: "http://114.108.241.172:6002/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "San Juan, Zambales Philippines",
        coordinates: "9.160300, 123.492600"
    },
    {
        title: "WAREHOUSE",
        link: "http://122.52.148.206:50001/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1582769167",
        geography: "Butuan, Philippines",
        coordinates: "8.949170, 125.543610"
    }
]


// load camera

 $( document ).ready(function() {
     
     let choose = Math.floor(Math.random() * watchers.length);
     console.log(choose, watchers[choose]);
     
    // Set it up
     
     let place = watchers[choose];
     
     $(".camera-details .place-title").text(place.title);
     $(".camera img").attr("src", place.link);
     
     $(".camera-details .place-geography").text(place.geography);
     $(".camera-details .place-coordinates").text(place.coordinates);
           
           
});