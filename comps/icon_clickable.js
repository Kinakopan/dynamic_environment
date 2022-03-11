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
  width: 100px;
  height: 100px;
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
  -webkit-animation:spin 10s linear infinite;
  -moz-animation:spin 10s linear infinite;
  animation:spin 10s linear infinite;
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

#blackBg {
  position: absolute;
  left: -60%;
  right: 0;
  top: -200%;
  background-color: black;
  opacity: 40%;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  display: none;
}
</style>

<div id="clickableBox">
  <img src="./img/icon/cow.png"  alt="" max-width="100%" max-height="100%">
  <div id="blackBg"></div>
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
        this.shadowRoot.querySelector("#clickableBox").onclick = () => this.startAnimation();
        

        if(this.getAttribute("icon_image")){
          this.shadowRoot.querySelector("#clickableBox > img").src = this.getAttribute("icon_image");
        }

        if(this.getAttribute("icon_alt")){
          this.shadowRoot.querySelector("#clickableBox > img").alt = this.getAttribute("icon_alt");
        }

        if(this.getAttribute("icon_margin")){
          this.shadowRoot.querySelector("#clickableBox").style.margin = this.getAttribute("icon_margin");
        }

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    startAnimation() {
      this.shadowRoot.querySelector("#blackBg").style.cssText = `display: block;`
    }

    finishAnimation() {
      this.shadowRoot.querySelector("#blackBG").style.cssText = `display: none;`
    }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clickable", TheClickable)
