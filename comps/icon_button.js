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
  display: none;
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
        document.querySelector("#button").onclick = () => {
            this.buttonDisappear();
            this.showParagraph();
        }

        document.querySelector("#clicked").onclick = () => this.buttonAppear();
            

    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    buttonDisappear() {
        this.shadowRoot.querySelector("#button").style.cssText = `display: none;`
    }
    
    buttonAppear() {
        this.shadowRoot.querySelector("#button").style.cssText = `display: block;`
    }

    showParagraph() {
        document.querySelector(".box4_3").style.cssText = `
        display: block;
        position: relative;
        z-index: 2;
        margin-left: 50%;
        animation: slide-in 1000ms;
        `;
        document.querySelector("box4_1").style.cssText = `
        display: block;
        
        `
    }
}

//MUST HAVE - define the tag for the custom elements 
customElements.define("the-button", TheButton)
