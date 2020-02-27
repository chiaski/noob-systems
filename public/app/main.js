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
    },
    {
        title: "Greene St",
        link: "http://madisoncam.viewnetcam.com/nphMotionJpeg?Resolution=640x480&Quality=Clarity",
        geography: "Greene St, Jersey City New Jersey, USA",
        coordinates: "40.676000, -73.962900"
    },
    {
        title: "Overijssel, Enschede",
        link: "http://87.249.112.189/mjpg/video.mjpg",
        geography: "Overijssel, Enschede, Netherlands",
        coordinates: "52.218330, 6.895830"
    },
    {
        title: "Dark Horse Observatory - South",
        link: "http://dho-south.viewnetcam.com:50000/nphMotionJpeg?resolution=640x480",
        geography: "Phoenixville, Pennsylvania, USA",
        coordinates: "40.124599, -75.538498"
    },
    {
        title: "White Mountain Country Club",
        link: "http://wmccpinetop.axiscam.net/mjpg/video.mjpg",
        geography: "Pinetop, Arizona, USA",
        coordinates: "34.640900 / -110.112600"
    },
    {
        title: "CBS 47 on E McKinley Ave",
        link: "http://205.157.152.230/mjpg/video.mjpg",
        geography: "Fresno, California, USA",
        coordinates: "36.769500, -119.795100"
    },
    {
        title: "Dark Horse Observatory - South",
        link: "http://dho-south.viewnetcam.com:50000/nphMotionJpeg?resolution=640x480",
        geography: "Phoenixville, Pennsylvania, USA",
        coordinates: "40.124599, -75.538498"
    },
    {
        title: "Colorado, Colorado Springs",
        link: "http://162.245.149.145/mjpg/video.mjpg",
        geography: "Colorado, Colorado Springs, USA",
        coordinates: "38.791779, -104.826480"
    },
    {
        title: "Marche, Corinaldo",
        link: "http://185.76.57.45/mjpg/video.mjpg",
        geography: "Corinaldo, Marche, Italy",
        coordinates: "43.649860, 13.048160"
    },
    {
        title: "Colorado, Colorado Springs",
        link: "http://162.245.149.145/mjpg/video.mjpg",
        geography: "Colorado, Colorado Springs, USA",
        coordinates: "38.791779, -104.826480"
    },
    {
        title: "Colorado, Colorado Springs",
        link: "http://162.245.149.145/mjpg/video.mjpg",
        geography: "Colorado, Colorado Springs, USA",
        coordinates: "38.791779, -104.826480"
    },
    {
        title: "Colorado, Colorado Springs",
        link: "http://162.245.149.145/mjpg/video.mjpg",
        geography: "Colorado, Colorado Springs, USA",
        coordinates: "38.791779, -104.826480"
    },
    {
        title: "Colorado, Colorado Springs",
        link: "http://162.245.149.145/mjpg/video.mjpg",
        geography: "Colorado, Colorado Springs, USA",
        coordinates: "38.791779, -104.826480"
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