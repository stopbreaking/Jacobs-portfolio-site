import '../public/style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import gameLogo1 from '/f.PNG'
import gameLogo2 from '/ss_cantstop1.png'


document.querySelector('#app2').innerHTML = `
  <div id="embeddedGame">
    <embed type="text/html" src="/I-cant-stop/index.html" width="100%" height="768px">
  </div>
  <div id="projectBlurb"> 
    <h1>I Can't Stop!</h1>
    <p> 
    A videogame. From a programming perspective, a straightforward project where the biggest engineering challenge was managing states for the playercharacter and boss.
    Motivated after seeing the simplicity of IWBTG custom levels.
    </p>
  </div>
`
