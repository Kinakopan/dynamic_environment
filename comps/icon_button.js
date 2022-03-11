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
        // this.querySelector("#button").onclick = () => {
        //   document.querySelector()
        // }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)
