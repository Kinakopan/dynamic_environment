//MUST HAVE - CREATE A TEMPLATE TAG
var template_scroll = document.createElement("template"); //<template> </template> RULE

template_scroll.innerHTML = `
<style>
  #scrollBox {
    width: 29.5px;
    height: 40px;
    position: absolute;
    margin-top: calc(100vh - 250px);
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
  .topArrow,
  .btmArrow {
      width: 100%;
      border-radius: 50%;
      background: #fff;
      position: absolute;
  }
  .btmArrow {
    top: 15px;
  }

  .topArrow::before,
  .topArrow::after,
  .btmArrow::before,
  .btmArrow::after {
    content: '';
    position: absolute;
    border-radius: 5px;
    height: 0px;
    width: 19px;
    top: 15px;
    border-top: solid 3px #fff;
    border-bottom: solid 2px #fff;
  }
  .topArrow::before,
  .btmArrow::before {
      transform: rotate(45deg);
      left: 0;
  }
  .topArrow::after,
  .btmArrow::after {
      transform: rotate(-45deg);
      right: 0;
  }
  .topArrow::before,
  .btmArrow::before {
    box-shadow: 1px 2px 2px 0px #b9b9b9;
  }
  .topArrow::after,
  .btmArrow::after {
    box-shadow: -1px 2px 2px 0px #b9b9b9;
  }
</style>

<div id="scrollBox">
  <span class="topArrow"></span>
  <span class="btmArrow"></span>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheScroll extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scroll.content.cloneNode(true)); //use the template to make a clone

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
customElements.define("the-scroll", TheScroll)
