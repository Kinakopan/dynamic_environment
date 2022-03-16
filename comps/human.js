//MUST HAVE - CREATE A TEMPLATE TAG
var template_human = document.createElement("template"); //<template> </template> RULE

template_human.innerHTML = `
<style>
  .barnContainer,
  .smokeContainer,
  .humanContainer {
    display: flex;
    position: absolute;
    width: 100%;
  }

  .humanContainer {
    flex-direction: column;
    width: 20%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    justify-content: flex-start;
    margin-left: 5%;
    top: 15%;
    opacity: 0;
  }

  .human {
    width: 50%;
    height: auto;
    transform: translateX(-50%);
    opacity: 0;
  }
  .human {
    transform: translateX(-50%);
  }
  .human2 {
    transform: rotate(260deg);
  }
  .human3 {
    transform: rotateX(180deg) rotateZ(130deg);
  }
  .human4 {
    transform: rotateX(180deg) rotateZ(90deg);
  }
  .human5 {
    transform: rotateX(180deg) rotateZ(180deg);
  }
</style>


<div class="humanContainer">
  <img class="human human1" src="/img/icon/human.png" alt="blooding human">
  <img class="human human2" src="/img/icon/human.png" alt="blooding human">
  <img class="human human3" src="/img/icon/human.png" alt="blooding human">
  <img class="human human4" src="/img/icon/human.png" alt="blooding human">
  <img class="human human5" src="/img/icon/human.png" alt="blooding human">
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHuman extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_human.content.cloneNode(true)); //use the template to make a clone
    }

    humanAppear() {
      document.querySelector("#human").style.cssText= `
        opacity: 1;
      `
      this.shadowRoot.querySelector(".humanContainer").style.cssText= `
        opacity: 1;
      `
      let target = this.shadowRoot.querySelectorAll('.human');
      let time = 500;

      target.forEach(el => {
        setTimeout(() => {
          el.style.cssText= `
            opacity: 1;
          `
        }, time)

        time += 500;
      })

      setTimeout(myStartAnime, time);

      function myStartAnime() {
        document.querySelector(".humanPara").humanParagraph();
      }
    }

    humanDisappear() {

      let target = this.shadowRoot.querySelectorAll('.human');
      target.forEach(el => {
        el.style.cssText= `
          opacity: 0;
        `
      })
      this.shadowRoot.querySelector(".humanContainer").style.cssText= `
        opacity: 0;
      `
      document.querySelector("#human").style.cssText= `
        opacity: 0;
      `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-human", TheHuman)
