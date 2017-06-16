[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  [![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  [![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/) [![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)  [![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/) [![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/) [![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/) [![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  
 

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# VIZAGO


![vizagoLanding](public/img/landing.png)


This repository contains **Full-Stack** (**MEAN**) project visago. An app that is designed to make accesible to the general public the powerful practical applications of face recognition technology and biometrics. And also to have fun! 

Explore VISAGO here: [vizago](https://vizago.herokuapp.com/#!/)


![analysisExample](public/img/analysis.png)


VISAGO was developed with a **NodeJS** and **ExpressJS** server, **AngularJS** for the client and **MongoDB/Mongoose** for our DataBase.


![vizagoOptions](public/img/options.png)


![compare](public/img/compare.png)


## Installation

In order to install VISAGO you may clone this repository. [NodeJS](https://nodejs.org/), [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/) are required.

To run the server: 
```
XXXXX npm start
```
All dependencies will be installed automatically

You will need a ```.env``` file containing:
```
DB_URI=mongodb://<dbuser>:<dbpassword>@ds035703.mlab.com:xxxxx/xxxxx
CLOUD_NAME=sgarmendia
API_KEY=XXXXXXXXXXXXX
API_SECRET=XXXXXXXXXXXXXXXXXXXXXX
UPLOAD_FOLDER=uploads
```

Please contact me at sgarmendia@gmail.com in order to provide **API_KEY** and **API_SECRET**.

A mongoDB **MLAB** database can be setup by the user here: [MLAB](https://mlab.com/login/)

## API
This application relies on external API services for biometric analysis and data:

* [Face++](https://www.faceplusplus.com/)
* [SkyBiometry](https://skybiometry.com/)


## Lie Detector Disclaimer

![lieDetector](public/img/lie.png=250)

The "lie detector" in this application was programmed mainly as a playful and fun way to enjoy the the biometric resources available. Even though it is based on sound aspects of psycological science, it is not intended as a real detector of lies or potential for lying. It is not valid for, and should not be used in any case for any other purpose than fun exchanges and innocent games. 

## Coding Style

The code has been developed under the [JavaScript Standard Style](http://standardjs.com/)


## Author

[Simon Garmendia](https://github.com/sgarmendia)


## Built With

* [SublimeText](http://https://https:/npmdejs.org/www.sublimetext.com) - Text editor


## Acknowledgments

- [SkylabCoders](https://github.com/SkylabCoders)
- [JuanMa](https://github.com/juanmaguitar)
- [Alex](https://github.com/agandia9) 
- [David]()
- [Angels]()
- [Bea]()

---

Copyright © 2017 SG. Keep coding!