//MUST HAVE - CREATE A TEMPLATE TAG
var template_clickable = document.createElement("template"); //<template> </template> RULE

template_clickable.innerHTML = `
<style>
#clickableBox {
    background: #c4c4c470;
    cursor: pointer;
    position: relative;
    padding: 20px;
}

#clickableBox,
#clickableBox::after {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
}

#clickableBox::after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  outline: 5px dashed #ffe600;
  outline-offset: 5px;
  animation: rotate 5s linear 2s infinite alternate;
  -webkit-animation:spin 4s linear infinite;
  -moz-animation:spin 4s linear infinite;
  animation:spin 4s linear infinite;
}
@-moz-keyframes spin {
    100% { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
    }
}

#clickableBox img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}
</style>

<div id="clickableBox">
  <img src="./img/icon/cow.png"  alt="" max-width="100%" max-height="100%">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheClickable extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_clickable.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("icon_image")){
          this.shadowRoot.querySelector("#clickableBox > img").src = this.getAttribute("icon_image");
        }

        if(this.getAttribute("icon_image")){
          this.shadowRoot.querySelector("#clickableBox > img").alt = this.getAttribute("icon_alt");
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clickable", TheClickable)
