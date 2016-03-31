```
 ____                _ __  __                                    _   
|  _ \              | |  \/  |                                  | |  
| |_) |_ __ __ _  __| | \  / | __ _ ___  ___  _ __    _ __   ___| |_
|  _ <| '__/ _` |/ _` | |\/| |/ _` / __|/ _ \| '_ \  | '_ \ / _ \ __|
| |_) | | | (_| | (_| | |  | | (_| \__ \ (_) | | | |_| | | |  __/ |_
|____/|_|  \__,_|\__,_|_|  |_|\__,_|___/\___/|_| |_(_)_| |_|\___|\__|
=====================================================================
```

### Source code for my personal webpage, [BradMason.net](http://BradMason.net/).

## Cool Features
* **Views and view components (viewmodels)** are written in [Vue](http://http://vuejs.org). Mainly because I wanted to try a new MVVM framework that was small, fast, and easy to use. I was also itching to tread away from the libraries that I already knew.
* I opted to write my own **router**. A quick glance around the 'net revealed that many routing libraries were complete overkill for this small project, and the few simple routing libraries I did find only served to inspire me to give it a try on my own.
* All JavaScript code (aside from the view components) is written in **Vanilla JavaScript**. jQuery is a large, often unnecessary library that can bring maintenance problems and spaghetti-style coding into a project. While many of its features are nice for larger webapps, I decided for this project to go without it. The few front-end libraries that I do depend on are installed from [Bower](http://bower.io/).
* **Styles** are written in LESS for organization, modularity, and maintainability. They're compiled via a `grunt build` task, which also runs before a normal `grunt`. There's also a `grunt dev` task that watches the LESS files for changes and compiles them on-the-fly during development.
* The server is written in [Express](http://expressjs.com/) using [Node.js](https://nodejs.org/). It's a quick way to serve only the files I need, and since it can easily be wired up to a `grunt` task, the whole install and build process is simple and straight-forward.
* All **animation** is done in the LESS (well, technically the CSS). I chose this method primarily because I believe in separating presentation code from utility code.
* The page was **tested** in every browser I could get my hands on, which includes *Chrome*, *Firefox*, *Safari*, and *Internet Explorer* on *OS X*, *Windows*, *Android*, and *iOS*.
* There is a small easter egg inspired by the [world's most famous cheat code](https://en.wikipedia.org/wiki/Konami_Code).

## Building and developing locally
To build and start the server locally, just make sure you have [Node.js](https://nodejs.org/) installed, then just pull down the project from GitHub and run `npm install`. Once all the dependencies are installed, you can either run `grunt` to start the server, or `grunt dev` if you're doing active development.

## Get In Touch
You can contact me at [BradTMason@gmail.com](mailto:bradtmason@gmail.com) and listen to me rant over at [@deadlybrad42](https://twitter.com/deadlybrad42).
