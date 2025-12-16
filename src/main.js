//import '../public/style.css'


document.querySelector('#app').innerHTML = `
  <div>
    <div class="header">
    <section class="hidden">
    <h1>Projects by Jacob</h1>
    </section>
    </div>
    <div class="scrolling-wrapper">
        <div class="container noselect">
        <section class="c-hidden d1">
        <a href = "./public/sp-marching-squares.html">
            <div class="canvas">
                <div class="tracker tr-1"></div>
                <div class="tracker tr-2"></div>
                <div class="tracker tr-3"></div>
                <div class="tracker tr-4"></div>
                <div class="tracker tr-5"></div>
                <div class="tracker tr-6"></div>
                <div class="tracker tr-7"></div>
                <div class="tracker tr-8"></div>
                <div class="tracker tr-9"></div>
                <div class="tracker tr-10"></div>
                <div class="tracker tr-11"></div>
                <div class="tracker tr-12"></div>
                <div class="tracker tr-13"></div>
                <div class="tracker tr-14"></div>
                <div class="tracker tr-15"></div>
                <div class="tracker tr-16"></div>
                <div class="tracker tr-17"></div>
                <div class="tracker tr-18"></div>
                <div class="tracker tr-19"></div>
                <div class="tracker tr-20"></div>
                <div class="tracker tr-21"></div>
                <div class="tracker tr-22"></div>
                <div class="tracker tr-23"></div>
                <div class="tracker tr-24"></div>
                <div class="tracker tr-25"></div>
                <div id="card">
                    <div id="box">
                        <img src='./gamelogo3y.PNG' class="card-img" alt="gameLogo1">    
                        <h2>Marching Squares</h2>
                    </div>
                    <div id="extra-card-logos">
                        <img src = './logos/unity-logo-extrawhite.png' alt="unityLogo" width="64px">
                    </div>
                    <div id="extra-card-ms"> 
                         <subtitle> Implementation of a well-known <br> algorithm in unity </subtitle>
                    </div>
                </div>
            </div>
        </a>
        </section>
        </div>
        <div class="container noselect">
        <section class="c-hidden d2">
            <a href = "../public/sp-cantstop.html">
            <div class="canvas">
                <div class="tracker tr-1"></div>
                <div class="tracker tr-2"></div>
                <div class="tracker tr-3"></div>
                <div class="tracker tr-4"></div>
                <div class="tracker tr-5"></div>
                <div class="tracker tr-6"></div>
                <div class="tracker tr-7"></div>
                <div class="tracker tr-8"></div>
                <div class="tracker tr-9"></div>
                <div class="tracker tr-10"></div>
                <div class="tracker tr-11"></div>
                <div class="tracker tr-12"></div>
                <div class="tracker tr-13"></div>
                <div class="tracker tr-14"></div>
                <div class="tracker tr-15"></div>
                <div class="tracker tr-16"></div>
                <div class="tracker tr-17"></div>
                <div class="tracker tr-18"></div>
                <div class="tracker tr-19"></div>
                <div class="tracker tr-20"></div>
                <div class="tracker tr-21"></div>
                <div class="tracker tr-22"></div>
                <div class="tracker tr-23"></div>
                <div class="tracker tr-24"></div>
                <div class="tracker tr-25"></div>
                    <div id="card">
                        <div id="box">
                            <img src='./coppertest2.png' class="card-img-no-width" alt="gameLogo2" width="100%">
                            <h2>I Can't Stop!</h2>
                        </div>
                        <div id="extra-card-logos">
                            <img src = './logos/gamemaker-logo.png' alt="gmLogo" width="64px">
                        </div>
                        <div id="extra-card"> 
                         <subtitle> Made in 3 days <br> for a game jam. </subtitle>
                        </div>
                    </div>
                </div>
            </a>
            </section>
        </div>
        <div class="container noselect">
         <section class="c-hidden d3">
         <a href = "https://github.com/stopbreaking/RPG-TESTX">
            <div class="canvas">
                <div class="tracker tr-1"></div>
                <div class="tracker tr-2"></div>
                <div class="tracker tr-3"></div>
                <div class="tracker tr-4"></div>
                <div class="tracker tr-5"></div>
                <div class="tracker tr-6"></div>
                <div class="tracker tr-7"></div>
                <div class="tracker tr-8"></div>
                <div class="tracker tr-9"></div>
                <div class="tracker tr-10"></div>
                <div class="tracker tr-11"></div>
                <div class="tracker tr-12"></div>
                <div class="tracker tr-13"></div>
                <div class="tracker tr-14"></div>
                <div class="tracker tr-15"></div>
                <div class="tracker tr-16"></div>
                <div class="tracker tr-17"></div>
                <div class="tracker tr-18"></div>
                <div class="tracker tr-19"></div>
                <div class="tracker tr-20"></div>
                <div class="tracker tr-21"></div>
                <div class="tracker tr-22"></div>
                <div class="tracker tr-23"></div>
                <div class="tracker tr-24"></div>
                <div class="tracker tr-25"></div>
                <div id="card">
                    <div id="box">
                        <img src="./f.PNG" class="card-img" alt="gamelogo1">
                        <h2>Rpg Test</h2>
                    </div>
                    <div id="extra-card-rpg"> 
                         <subtitle> Made over many months <br> as a learning experience. </subtitle>
                    </div>
                    <div id="extra-card-logos">
                            <img src = './logos/gamemaker-logo.png' alt="gmLogo" width="64px">
                    </div>
                </div>
            </div>
            </a>
            </section>
        </div>
    </div>
  </div>
`
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('c-show');
        } else {
            entry.target.classList.remove('c-show');
        }
    })
})

const cardObserverAlt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('c-show-alt');
        } else {
            entry.target.classList.remove('c-show-alt');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenCards = document.querySelectorAll('.c-hidden');
hiddenCards.forEach((el) => cardObserver.observe(el));

const hiddenCardsAlt = document.querySelectorAll('.c-hidden-alt');
hiddenCardsAlt.forEach((el) => cardObserverAlt.observe(el));

const CDP = require('chrome-remote-interface');

setTimeout(() => {
    CDP(async (client) => {
        const {Network, Page, Runtime} = client;

        const requests = new Set(); // <---------- HERE

        Network.requestWillBeSent(({requestId, request}) => {
            if(request.url.indexOf("ct2/results/rpc") != -1){
                console.log(`REQ [${requestId}] ${request.method} ${request.url} \n`);

                requests.add(requestId); // <---------- HERE

            }
        });
        Network.loadingFinished(async ({requestId}) => {

            if (requests.has(requestId)) { // <---------- HERE

                const {body, base64Encoded} = await Network.getResponseBody({requestId});
                console.log(`RES [${requestId}] body: ${body} \n`);
            }
        });
        try {
            await Promise.all([Network.enable(), Page.enable()]);
            await Page.navigate({url: 'https://clinicaltrials.gov/ct2/results?cond=Parents&term=&cntry1=&state1=&Search=Search&recrs=a#wrapper'});
            await Page.loadEventFired();
            await Runtime.evaluate({
                expression: `document.querySelector('.paginate_button.next').click()`
            });
        } catch (err) {
            console.error(err);
        }
    }).on('error', (err) => {
        console.error(err);
    });
}, 1000);