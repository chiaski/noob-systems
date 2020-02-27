
// sound name: sound file

var sounder = {

    whitenoise: "whitenoise.mp3",
    rain: ["rainy-1.ogg", "rainy-2.flac"],
    car: "car.mp3",
    thunder: "thunder.mp3",
    press: "press.mp3",
    walking: ["walking-1.mp3"],
    hiss: "hiss-1.wav",
    church: "churchbells.mp3",
    crowd: ["people-1.mp3"],
    computer: ["computer-1.mp3", "computer-2.mp3", "computer-3.mp3"],
    
}

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
    },
    {
        title: "Wien, Vienna",
        link: "http://81.223.119.106/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Wien, Vienna, Austria",
        coordinates: "48.208490, 16.372080"
    },
    {
        title: "Soldanesti",
        link: "http://188.237.8.183:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582817990",
        geography: "Soldanesti, Soldanesti, Republic of Moldova",
        coordinates: "47.815280, 28.796670"
    },
    {
        title: "Zurich",
        link: "http://213.3.32.49:9010/mjpg/video.mjpg",
        geography: "Zurich",
        coordinates: "47.366670, 8.550000"
    },
    {
        title: "Haukeliseter Fjellstue",
        link: "http://94.139.67.154:50000/mjpg/video.mjpg",
        geography: "Norway",
        coordinates: "59.912730, 10.746090"
    },
    {
        title: "Arizona, Tucson",
        link: "http://192.33.141.16/mjpg/video.mjpg",
        geography: "Arizona, Tucson, USA",
        coordinates: "32.231312, -110.949840"
    },
    {
        title: "Csongrad, Szeged",
        link: "http://46.35.192.141/mjpg/video.mjpg",
        geography: "Csongrad, Szeged, Hungary",
        coordinates: "46.253000, 20.148240"
    },
    {
        title: "Tochigi, Utsunomiya",
        link: "http://124.44.170.217:8082/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1582818253",
        geography: "Tochigi, Utsunomiya, Japan",
        coordinates: "36.550000, 139.883000"
    },
    {
        title: "Selangor, Petaling Jaya",
        link: "http://183.171.14.104:8082/cgi-bin/viewer/video.jpg?r=1582818308",
        geography: "Selangor, Petaling Jaya, Malaysia",
        coordinates: "3.107260, 101.606710"
    },
    {
        title: "Tel Aviv, Tel Aviv",
        link: "http://82.80.172.78:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582818338",
        geography: "Israel",
        coordinates: "32.080880, 34.780570"
    },
    {
        title: "Ontario, Etobicoke",
        link: "http://174.90.202.82:8082/snap.jpg?JpegSize=M&JpegCam=1&r=1582818363",
        geography: "Ontario, Etobicoke",
        coordinates: "43.621609, -79.509737"
    },
    {
        title: "Illes Balears, Palma",
        link: "http://195.77.167.54/mjpg/video.mjpg",
        geography: "Illes Balears, Palma, Spain",
        coordinates: "39.569390, 2.650240"
    },
    {
        title: "Alabama, Troy",
        link: "http://142.154.137.29/mjpg/video.mjpg",
        geography: "Alabama, Troy",
        coordinates: "31.802648, -85.963972"
    },
    {
        title: "Nevada, Reno",
        link: "http://142.154.137.29/mjpg/video.mjpg",
        geography: "Nevada, Reno",
        coordinates: "39.529630, -119.813800"
    },
    {
        title: "British Columbia, Burnaby",
        link: "http://96.1.54.219:8001/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Canada",
        coordinates: "49.232424, -123.023260"
    },
    {
        title: "Bagmati, Kathmandu",
        link: "http://202.52.234.190:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582818587",
        geography: "Bagmati, Kathmandu",
        coordinates: "27.701690, 85.320600"
    },
    {
        title: "Arbil, Erbil, Iraq",
        link: "http://185.38.214.194/webcapture.jpg?command=snap&channel=1?1582818645",
        geography: "Iraq",
        coordinates: "36.192570, 44.010620"
    },
    {
        title: "Tbilisi, Tbilisi, Georgia",
        link: "http://92.54.211.49:85/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582818675",
        geography: "Tbilisi, Tbilisi",
        coordinates: "41.694110, 44.833680"
    },
    {
        title: "Ar Riyad, Riyadh",
        link: "http://37.99.153.106:83/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Riyadh",
        coordinates: "24.687730, 46.721850"
    },
    {
        title: "Shandong, Liaocheng",
        link: "http://39.70.203.211:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582818787",
        geography: "Liaocheng",
        coordinates: "36.443890, 115.964720"
    },
    {
        title: "Liaoning, Chaoyang",
        link: "http://60.23.164.211:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582818812",
        geography: "Liaoning, Chaoyang",
        coordinates: "40.457420, 123.550630"
    },
    {
        title: "Hebei, Shijiazhuang",
        link: "http://111.61.39.241:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1582818880",
        geography: "Hebei, Shijiazhuang",
        coordinates: "38.041390, 114.478610"
    },
    {
        title: "Nova Scotia, Wolfville",
        link: "http://61.149.161.158:91/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1582818922",
        geography: "Nova Scotia, Wolfville",
        coordinates: "45.083450, -64.365460"
    },
    {
        title: "Quebec, Montreal",
        link: "http://24.157.251.157:8082/mjpg/video.mjpg",
        geography: "Quebec, Montreal",
        coordinates: "45.527258, -73.612361"
    },
    {
        title: "British Columbia, Victoria",
        link: "http://70.66.91.73:84/mjpg/video.mjpg",
        geography: "British Columbia, Victoria",
        coordinates: "48.432940, -123.369300"
    },
    {
        title: "Michigan, Oscoda",
        link: "http://75.133.34.214:60001/mjpg/video.mjpg",
        geography: "USA",
        coordinates: "44.420280, -83.330830"
    },
    {
        title: "Aargau, Fulenbach",
        link: "http://213.221.223.242:82/mjpg/video.mjpg",
        geography: "Switzerland",
        coordinates: "47.274960, 7.833440"
    },
    {
        title: "Guatemala, Guatemala City",
        link: "http://181.174.113.11:90/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Guetemala",
        coordinates: "14.640720, -90.513270"
    },
    {
        title: "British Columbia, Castlegar",
        link: "http://162.245.241.26:8082/mjpg/video.mjpg",
        geography: "British Columbia, Castlegar",
        coordinates: "49.325023, -117.667213"
    },
    {
        title: "Alberta, Calgary",
        link: "http://70.75.97.49:8090/mjpg/video.mjpg",
        geography: "Canada",
        coordinates: "51.05074, -114.075952"
    },
    {
        title: "Seoul-Teukbyeolsi, Seoul",
        link: "http://119.206.74.42:8000/webcapture.jpg?command=snap&channel=1?1582819413",
        geography: "Seoul",
        coordinates: "51.05074, -114.075952"
    },
    {
        title: "Ile-De-France, Jouy-Le-Moutier",
        link: "http://92.154.48.50:8083/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "France",
        coordinates: "49.010680, 2.040280"
    },
    {
        title: "Hlavni Mesto Praha, Prague",
        link: "http://212.47.24.208:83/mjpg/video.mjpg",
        geography: "Czech Republic",
        coordinates: "50.088040, 14.420760"
    },
    {
        title: "England, Lindley",
        link: "http://81.149.56.38:8084/mjpg/video.mjpg",
        geography: "United Kingdom",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "England, London",
        link: "http://81.130.136.82:83/mjpg/video.mjpg",
        geography: "United Kingdom",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Cherkaska Oblast, Zolotonosha",
        link: "http://195.189.249.149:8081/webcapture.jpg?command=snap&channel=1?1582819595",
        geography: "Ukraine",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "England, Leeds",
        link: "http://176.35.183.10:1024/mjpg/video.mjpg",
        geography: "United Kingdom",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "New Jersey, Randolph",
        link: "http://24.45.4.187/mjpg/video.mjpg",
        geography: "USA",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "England, Lostock",
        link: "http://188.66.75.36/mjpg/video.mjpg",
        geography: "United Kingdom",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Salzburg, Salzburg",
        link: "http://89.26.25.221/mjpg/video.mjpg",
        geography: "Austria",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Lombardia, Milan",
        link: "http://213.82.216.229/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Italy",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Canada",
        link: "http://66.51.132.214:8080/?action=stream",
        geography: "Canada",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Missouri, Columbia",
        link: "http://128.206.113.98/mjpg/video.mjpg",
        geography: "Missouri, Columbia",
        coordinates: "38.945570, -92.323860"
    },
    {
        title: "East Kazakhstan, Ust'-Kamenogorsk",
        link: "http://212.154.245.179/jpg/image.jpg?1582819884",
        geography: "East Kazakhstan, Ust'-Kamenogorsk",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Kyiv, Kiev",
        link: "http://77.52.149.60:8080/mjpg/video.mjpg",
        geography: "Kyiv, Kiev",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Colorado, Louisville",
        link: "http://208.139.200.133/mjpg/video.mjpg",
        geography: "USA",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Massachusetts, Cambridge",
        link: "http://216.15.124.90/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
        geography: "Massachusetts, Cambridge",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Veneto, Padova",
        link: "http://185.39.101.26/mjpg/video.mjpg",
        geography: "Veneto, Padova",
        coordinates: "53.650000, -1.816670"
    },
    {
        title: "Basilicata, Melfi",
        link: "http://46.231.37.195:8090/mjpg/video.mjpg",
        geography: "Basilicata, Melfi",
        coordinates: "40.996520, 15.651360"
    },
    {
        title: "Dublin City, Dublin",
        link: "http://93.107.245.52:1024/mjpg/video.mjpg",
        geography: "Dublin City, Dublin",
        coordinates: "53.650000, -1.816670"
    }
   
]

