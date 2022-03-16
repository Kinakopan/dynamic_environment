//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<style>

 #button {
  background: #ffe600;
  border-radius: 5px;
  width: 70px;
  height: 20px;
  border: none;
  font-size: 0.8em;
  color: #2D436A;
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 0;
  float: right;
  z-index: 2;
  position: relative;
 }


</style>

<button id="button" type="button">
</button>

`;


//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#button").innerHTML = this.getAttribute('button_text')
        document.querySelector(".clickable").onclick = () => {
            this.buttonAppear();
            this.showParagraph();
        }

         document.querySelector(".specialButton").onclick = () => {
            this.buttonDisappear();
            this.disableParagraph();
            document.querySelector(".contentsWrap").style.cssText = `background: transparent;`;
            }


    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    buttonDisappear() {
        this.shadowRoot.querySelector("#button").style.cssText = `opacity: 0;`
    }

    buttonAppear() {
        this.shadowRoot.querySelector("#button").style.cssText = `opacity: 100;`
    }

    showParagraph() {

        document.querySelector(".first").style.cssText = `
        opacity: 100;
        position: relative;
        z-index: 2;
        animation: slide-in 1000ms;

        `;
        document.querySelector(".second").style.cssText = `
        opacity: 100;
        text-align: right;
        `;
        document.querySelector(".last").style.cssText = `
        opacity: 100;
        `
    }

    disableParagraph() {
        document.querySelector(".afterClick").style.cssText = `
        opacity: 0;
        `
        document.querySelector("the-paragraph").style.cssText = `
        opacity: 0;
        `
        document.querySelector("#section4 > div.first.afterClick > img").style.cssText = `
        opacity: 0;
        `
        document.querySelector("#section4 > div.first.afterClick > .fish1").style.cssText = `
        opacity: 0;
        `
        document.querySelector("#section4 > div.first.afterClick > .fish2").style.cssText = `
        opacity: 0;
        `
        document.querySelector(".para4_2").style.cssText = `
        opacity: 0;
        `
    }
}
//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)
