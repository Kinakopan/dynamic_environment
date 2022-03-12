//MUST HAVE - CREATE A TEMPLATE TAG
var template_points = document.createElement("template"); //<template> </template> RULE

template_points.innerHTML = `
<style>
  #iconBox {
    background: #E5E5E5;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    box-shadow: 0px 8px 6px 0px #b9b9b9;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
  }
  #iconBox > img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
  }
</style>

<div id="iconBox">
  <img src="./img/icon/cow.png"  alt="" max-width="100%" max-height="100%">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ThePoints extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_points.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("icon_image")){
          this.shadowRoot.querySelector("#iconBox > img").src = this.getAttribute("icon_image");
        }


        if(this.getAttribute("icon_alt")){
          this.shadowRoot.querySelector("#iconBox > img").alt = this.getAttribute("icon_alt");
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-points", ThePoints)
