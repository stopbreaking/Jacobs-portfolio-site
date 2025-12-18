(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&c(e)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <div class="header">
    <section class="hidden">
    <h1>Projects by Jacob</h1>
    </section>
    </div>
    <div class="scrolling-wrapper">
        <div class="container noselect">
        <section class="c-hidden d1">
        <a href = "https://stopbreaking.github.io/jacobs-marching-squares/">
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
            <a href = "https://stopbreaking.github.io/cant-stop/">
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
`;const d=new IntersectionObserver(i=>{i.forEach(r=>{console.log(r),r.isIntersecting?r.target.classList.add("show"):r.target.classList.remove("show")})}),v=new IntersectionObserver(i=>{i.forEach(r=>{console.log(r),r.isIntersecting?r.target.classList.add("c-show"):r.target.classList.remove("c-show")})}),l=new IntersectionObserver(i=>{i.forEach(r=>{console.log(r),r.isIntersecting?r.target.classList.add("c-show-alt"):r.target.classList.remove("c-show-alt")})}),o=document.querySelectorAll(".hidden");o.forEach(i=>d.observe(i));const n=document.querySelectorAll(".c-hidden");n.forEach(i=>v.observe(i));const g=document.querySelectorAll(".c-hidden-alt");g.forEach(i=>l.observe(i));const k=require("chrome-remote-interface");setTimeout(()=>{k(async i=>{const{Network:r,Page:a,Runtime:c}=i,s=new Set;r.requestWillBeSent(({requestId:t,request:e})=>{e.url.indexOf("ct2/results/rpc")!=-1&&(console.log(`REQ [${t}] ${e.method} ${e.url} 
`),s.add(t))}),r.loadingFinished(async({requestId:t})=>{if(s.has(t)){const{body:e,base64Encoded:h}=await r.getResponseBody({requestId:t});console.log(`RES [${t}] body: ${e} 
`)}});try{await Promise.all([r.enable(),a.enable()]),await a.navigate({url:"https://clinicaltrials.gov/ct2/results?cond=Parents&term=&cntry1=&state1=&Search=Search&recrs=a#wrapper"}),await a.loadEventFired(),await c.evaluate({expression:"document.querySelector('.paginate_button.next').click()"})}catch(t){console.error(t)}}).on("error",i=>{console.error(i)})},1e3);
