//MUST HAVE - CREATE A TEMPLATE TAG
var template_title = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_title.innerHTML = `
<style>
#title {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 3px 3px 2px #00000050;
  text-transform: capitalize;
  color: #B9E3FA;
}
</style>

<div
id="title"
></div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTitle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_title.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#title").innerHTML = this.getAttribute('head_text');
        this.shadowRoot.querySelector("#title").style.color = this.getAttribute('text_color');
        this.shadowRoot.querySelector("#title").onclick = () => {
          this.shadowRoot.querySelector("#title").style.fontSize = this.getAttribute('text_size'); // it should change automatically after few seconds
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-title", TheTitle)