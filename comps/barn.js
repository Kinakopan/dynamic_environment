//MUST HAVE - CREATE A TEMPLATE TAG
var template_barn = document.createElement("template"); //<template> </template> RULE

template_barn.innerHTML = `
<style>
  .barnContainer,
  .smokeContainer,
  .humanContainer {
    display: flex;
    position: absolute;
    width: 100%;
  }

  .barnContainer {
    bottom: 50px;
    height: 100%;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: center;
    width: 55%;
    left: 10%;
    z-index: 2;
  }

  .barnBox {
    flex: 1;
    width: 100%;;
    height: 100%;
    align-items: flex-end;
    display: flex;
    transform: translateY(-100%);
  }

  .barn {
    width: 100%;
    height: auto;
  }

  .barnBox1 {
    opacity: 1;
    transform: translateY(0);
  }
</style>


<div class="barnContainer">
    <div class="barnBox barnBox1">
      <img class="barn barn1" src="/img/icon/barn.png" alt="cow">
    </div>
    <div class="barnBox barnBox2">
      <img class="barn barn2" src="/img/icon/barn.png" alt="cow">
    </div>
    <div class="barnBox barnBox3">
      <img class="barn barn3" src="/img/icon/barn.png" alt="cow">
    </div>
    <div class="barnBox barnBox4">
      <img class="barn barn4" src="/img/icon/barn.png" alt="cow">
    </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBarn extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_barn.content.cloneNode(true)); //use the template to make a clone

        this.shadowRoot.querySelector(".barn1").onclick = () => this.barnAppear();
    }

    barnAppear() {

      let targetBarn = this.shadowRoot.querySelectorAll('.barnBox');
      let time = 1000;

      targetBarn.forEach(el => {
        setTimeout(() => {
          el.style.cssText= `
            transform: translateY(0);
          `
        }, time)

        time += 500;
      })
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-barn", TheBarn)
