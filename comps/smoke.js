//MUST HAVE - CREATE A TEMPLATE TAG
var template_smoke = document.createElement("template"); //<template> </template> RULE

template_smoke.innerHTML = `
<style>
  .barnContainer,
  .smokeContainer,
  .humanContainer {
    display: flex;
    position: absolute;
    width: 100%;
  }

  .smokeContainer {
    flex-direction: column-reverse;
    width: 50%;
    right: 10%;
    bottom: 0;
    height: 80%;
    justify-content: end;
    align-items: flex-end;
    padding-bottom: 50px;
  }

  .house {
    width: 45%;
  }

  .smoke {
    margin-right: 40%;
    display: none;
  }
  .smoke1 {
    height: 5%;
  }
  .smoke2 {
    height: 15%;
  }
  .smoke3 {
    height: 25%;
  }
  .smoke4Box {
    width: 100%;
    height: 35%;
    align-self: flex-start;
        position: relative;
  }
  .smoke4 {
    height: 100%;
  }

  .humanTrigger {
    display: none;
    background: rgba(0,0,0,.6);
    border-radius: 20px;
    line-height: 2;
    width: 160px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .knife {
    position: absolute;
    top: 50%;
    left: 20%;
    width: 20%;
    transform: rotateY(180deg) rotateZ(30deg) translateY(-50%);
    display: none;
  }
</style>


<div class="smokeContainer">
  <img class="house" src="/img/icon/farm.png" alt="house">
  <img class="smoke smoke1" src="/img/icon/smoke.png" alt="smoke">
  <img class="smoke smoke2" src="/img/icon/smoke.png" alt="smoke">
  <img class="smoke smoke3" src="/img/icon/smoke.png" alt="smoke">

  <div class="smoke4Box">
    <img class="smoke smoke4" src="/img/icon/smoke.png" alt="smoke">
    <p class="humanTrigger">Click to see what will happen</p>
    <img class="knife" src="/img/icon/knife.png" alt="knife">
  </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSmoke extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_smoke.content.cloneNode(true)); //use the template to make a clone

        this.shadowRoot.querySelector(".house").onclick = () => this.exhaustSmoke();

        this.shadowRoot.querySelector(".humanTrigger").onclick = () => {
          // console.log(1);
          this.shadowRoot.querySelector('.humanTrigger').style.cssText= `
            display: none;
          `
          this.shadowRoot.querySelector(".knife").style.cssText= `
            display: block;
          `
          document.querySelector("#human").humanAppear();
        }
    }

    exhaustSmoke() {
      let targetSmoke = this.shadowRoot.querySelectorAll('.smoke');
      let time = 500;
      targetSmoke.forEach(el => {
        setTimeout(() => {
          el.style.cssText= `
            display: block;
          `
        }, time)

        time += 500;
      })

      let trigger = this.shadowRoot.querySelector('.humanTrigger');
      setTimeout(function() {
        trigger.style.cssText= `
          display: block;
        `
        }, 3200);
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-smoke", TheSmoke)
