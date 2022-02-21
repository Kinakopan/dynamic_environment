//MUST HAVE - CREATE A TEMPLATE TAG
var template_paragraph = document.createElement("template"); //<template> </template> RULE

template_paragraph.innerHTML = `
<style>
  #text_paragraph {
    color: #fff;
    display: inline-block;
    width: 200px;
    font-size: 20px;
    padding: 10px 15px;
  }

  #text_paragraph > span {
    color: #EA5C70;
    fontSize: 28px
  }
</style>

<div id="text_paragraph">
  Lorem Ipsum
  <span>80%</span>
  Description
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheParagraph extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_paragraph.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("head_text")){
          this.shadowRoot.querySelector("#text_paragraph").innerText = this.getAttribute("head_text");
        }

        if(this.getAttribute("head_text")){
          this.shadowRoot.querySelector("#text_paragraph").style.color = this.getAttribute("text_color");
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-paragraph", TheParagraph)
