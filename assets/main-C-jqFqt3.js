import"./style-DQtbbKxf.js";const e="/Jacobs-portfolio-site/cantstop.html";document.querySelector("#app").innerHTML=`
  <div>
    <div class="header">
    <section class="hidden">
    <h1>Projects by Jacob Scarborough</h1>
    </section>
    </div>
    <div class="scrolling-wrapper">
    <div class="container noselect">
        <section class="c-hidden d2">
            <a href = "${e}">
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
                            <h2>I Can't Stop!<br>(2025)</h2>
                        </div>
                        <div id="extra-card-logos">
                            <img src = './logos/gamemaker-logo.png' alt="gmLogo" width="64px">
                        </div>
                        <div id="extra-card"> 
                         <subtitle> Platformer made in <br> 3 days for a game jam. </subtitle>
                        </div>
                    </div>
                </div>
            </a>
            </section>
        </div>    
    <div class="container noselect">
        <section class="c-hidden d1">
        <a href = "https://spoonsa.itch.io/super-lapislazuland">
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
                        <img src='./LLLicon.png' class="card-img" alt="gameLogo1">    
                        <h2>Super LapizLazuLand<br>(2026)</h2>
                    </div>
                    <div id="extra-card-logos">
                            <img src='./logos/gamemaker-logo.png' alt="gmLogo" width="64px">
                        </div>
                    <div id="extra-card-ms"> 
                         <subtitle> Content-expansion mod for the <br> GIMMIKO Demo. Made over 4 months. </subtitle>
                    </div>
                </div>
            </div>
        </a>
        </section>
        </div>
        <div class="container noselect">
         <section class="c-hidden d3">
         <a href = "https://spoonsa.itch.io/goblin-village">
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
                        <img src="./groggit-icon.png" class="card-img" alt="gamelogo1">
                        <h2>Groggit's Legacy<br>(2026)</h2>
                    </div>
                    <div id="extra-card-rpg"> 
                         <subtitle>10 day game-jam featuring a village<br>simulation and upgrade system.</subtitle>
                    </div>
                    <div id="extra-card-logos">
                            <img src = './logos/godot-logo.png' alt="gmLogo" width="64px">
                    </div>
                </div>
            </div>
            </a>
            </section>
        </div>
    </div>
  </div>
`;const v=new IntersectionObserver(s=>{s.forEach(r=>{console.log(r),r.isIntersecting?r.target.classList.add("show"):r.target.classList.remove("show")})}),l=new IntersectionObserver(s=>{s.forEach(r=>{console.log(r),r.isIntersecting?r.target.classList.add("c-show"):r.target.classList.remove("c-show")})}),o=new IntersectionObserver(s=>{s.forEach(r=>{console.log(r),r.isIntersecting?r.target.classList.add("c-show-alt"):r.target.classList.remove("c-show-alt")})}),n=document.querySelectorAll(".hidden");n.forEach(s=>v.observe(s));const k=document.querySelectorAll(".c-hidden");k.forEach(s=>l.observe(s));const g=document.querySelectorAll(".c-hidden-alt");g.forEach(s=>o.observe(s));const h=require("chrome-remote-interface");setTimeout(()=>{h(async s=>{const{Network:r,Page:t,Runtime:d}=s,c=new Set;r.requestWillBeSent(({requestId:a,request:i})=>{i.url.indexOf("ct2/results/rpc")!=-1&&(console.log(`REQ [${a}] ${i.method} ${i.url} 
`),c.add(a))}),r.loadingFinished(async({requestId:a})=>{if(c.has(a)){const{body:i,base64Encoded:m}=await r.getResponseBody({requestId:a});console.log(`RES [${a}] body: ${i} 
`)}});try{await Promise.all([r.enable(),t.enable()]),await t.navigate({url:"https://clinicaltrials.gov/ct2/results?cond=Parents&term=&cntry1=&state1=&Search=Search&recrs=a#wrapper"}),await t.loadEventFired(),await d.evaluate({expression:"document.querySelector('.paginate_button.next').click()"})}catch(a){console.error(a)}}).on("error",s=>{console.error(s)})},1e3);
