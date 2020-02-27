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
        title: "Hofuoborgarsvaoio, Reykjavik",
        link: "http://157.157.19.131/mjpg/video.mjpg",
        geography: "Hofuoborgarsvaoio, Reykjavik, Iceland",
        coordinates: "64.135480, -21.895410"
    },
    {
        title: "PRINTER",
        link: "http://152.3.225.195:8080/?action=stream",
        geography: "North Carolina, Durham, USA",
        coordinates: "35.996611, -78.899080"
    },
    {
        title: "Lazio, Latina",
        link: "http://79.61.177.207:83/mjpg/video.mjpg",
        geography: "Lazio, Latina, Italy",
        coordinates: "41.466140, 12.904300"
    },
    {
        title: "GOD",
        link: "http://176.35.183.10:1024/mjpg/video.mjpg",
        geography: "England, Leeds, UK",
        coordinates: "51.246770, 0.606820"
    },
    {
        title: "FOR SALE",
        link: "http://63.40.185.220:82/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1582771146",
        geography: "Texas, Houston, USA",
        coordinates: "29.763280, -95.363270"
    },
    {
        title: "Avtonomna Respublika Krym, Simferopol",
        link: "http://91.247.97.211:8084/?action=stream",
        geography: "Avtonomna Respublika Krym City, Simferopol, Ukraine",
        coordinates: "44.957190, 34.110790"
    },
    {
        title: "Bahia, Cachoeira",
        link: "http://187.1.147.77/mjpg/video.mjpg",
        geography: "Bahia, Cachoeira, Brazil",
        coordinates: "-12.618330, -38.955830"
    },
    {
        title: "???",
        link: "http://84.232.147.36:8080/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Cluj, Salciua De Sus, Romania",
        coordinates: "46.400000, 23.416670"
    },
    {
        title: "Seoul-Teukbyeolsi, Seoul",
        link: "http://211.211.61.110:8000/webcapture.jpg?command=snap&channel=1?1582771369",
        geography: "Seoul-Teukbyeolsi, Seoul, Korea",
        coordinates: "37.568260, 126.977830"
    },
    {
        title: "Hamadan, Hamadan",
        link: "http://2.185.149.180/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582771411",
        geography: "Hamadan, Hamadan, Iran",
        coordinates: "34.799220, 48.514560"
    },
    {
        title: "New Jersey, Mount Laurel",
        link: "http://96.91.239.26:1024/mjpg/video.mjpg",
        geography: "New Jersey, Mount Laurel, USA",
        coordinates: "39.947820, -74.911680"
    },
    {
        title: "I LOVE LAZY",
        link: "http://121.7.129.29/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1582772429",
        geography: "Singapore",
        coordinates: "1.289670, 103.850070"
    },
    {
        title: "Tamil Nadu, Chennai",
        link: "http://119.226.50.195/oneshotimage1?0",
        geography: "Tamil Nadu, Chennai, India",
        coordinates: "13.087840, 80.278470"
    },
    {
        title: "North Carolina, Henderson",
        link: "http://66.57.117.166:8000/mjpg/video.mjpg",
        geography: "North Carolina, Henderson, USA",
        coordinates: "36.329590, -78.399160"
    },
    {
        title: "T'Ai-Wan, Zhongxing New Villag",
        link: "http://59.126.33.9/webcapture.jpg?command=snap&channel=1?1582772574",
        geography: "T'Ai-Wan, Zhongxing New Villag, Taiwan",
        coordinates: "23.959080, 120.685160"
    },
    {
        title: "Distrito Federal, Mexico City",
        link: "http://148.247.162.116/cgi-bin/viewer/video.jpg?r=1582772621",
        geography: "Distrito Federal, Mexico City, Mexico",
        coordinates: "19.428470, -99.127660"
    },
    {
        title: "T'Ai-Wan, Yilan",
        link: "http://140.111.180.117:90/GetData.cgi?CH=1",
        geography: "T'Ai-Wan, Yilan, Taiwan",
        coordinates: "24.757000, 121.753000"
    },
    {
        title: "Central Serbia, Belgrade",
        link: "http://91.234.133.122:8080/cam_1.cgi",
        geography: "Central Serbia, Belgrade, Serbia",
        coordinates: "44.804010, 20.465130"
    },
    {
        title: "???",
        link: "http://109.109.80.252/mjpg/video.mjpg",
        geography: "Norway",
        coordinates: "59.912730, 10.746090"
    },
    {
        title: "Mazowieckie, Warsaw",
        link: "http://31.0.162.174/cgi-bin/viewer/video.jpg?r=1582774234",
        geography: "Mazowieckie, Warsaw",
        coordinates: "52.229770, 21.011780"
    },
    {
        title: "New South Wales, Sydney",
        link: "http://123.209.248.124/mjpg/video.mjpg",
        geography: "New South Wales, Sydney",
        coordinates: "-33.867850, 151.207320"
    },
    {
        title: "Iwate, Miyako, Japan",
        link: "http://214.253.118.219.megaegg.ne.jp/-wvhttp-01-/GetOneShot?v=640&frame_count=no_limit",
        geography: "Iwate, Miyako, Japan",
        coordinates: "39.633000, 141.950000"
    },
    {
        title: "Antwerpen, Antwerpen",
        link: "http://81.83.10.9:8001/mjpg/video.mjpg",
        geography: "Antwerpen, Antwerpen, Belgium",
        coordinates: "51.219890, 4.403460"
    },
    {
        title: "University of Maryland - McKeldin Mall",
        link: "http://129.2.16.181/mjpg/video.mjpg",
        geography: "University of Maryland - McKeldin Mall",
        coordinates: "39.266900, -76.848000"
    },
    {
        title: "Ostrobothnia, Vaasa",
        link: "http://comfort-camp.dyndns.org/cgi-bin/faststream.jpg",
        geography: "Ostrobothnia, Vaasa",
        coordinates: "63.096000, 21.615770"
    },
    {
        title: "Ostrobothnia, Vaasa",
        link: "http://81.209.111.165:8081/cam_1.cgi",
        geography: "Ostrobothnia, Vaasa",
        coordinates: "63.096000, 21.615770"
    },
    {
        title: "???",
        link: "http://212.60.62.51:8080/mjpg/video.mjpg",
        geography: "Bern, Biel, Switzerland",
        coordinates: "47.132400, 7.244110"
    },
    {
        title: "Dak Lak, Buon Ma Thuot",
        link: "http://113.161.21.10:8082/video/mjpg.cgi",
        geography: "Dak Lak, Buon Ma Thuot, Vietnam",
        coordinates: "12.666670, 108.050000"
    }
   
]




// LOAD CAMERA INFORMATION

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