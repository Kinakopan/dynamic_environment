//MUST HAVE - CREATE A TEMPLATE TAG
var template_top = document.createElement("template"); //<template> </template> RULE

template_top.innerHTML = `
<style>
  .arrowBox {
    width: 40px;
    height: 40px;
    background: #59556E;
    border: solid 4px #ffe500;
    border-radius: 50%;
    bottom: 50px;
    right: 20px;
    position: fixed;
    cursor: pointer;
  }
  .arrowBox::after {
    content: '';
    width: 19px;
    position: absolute;
    top: calc(100% + 10px);
    box-shadow: 11px -2px 4px 1px #b9b9b9;
  }

  .arrow {
    border-radius: 50%;
    background: #fff;
    position: absolute;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .arrow::before,
  .arrow::after {
      content: '';
      position: absolute;
      height: 0px;
      width: 18px;
      top: 15px;
      border-radius: 5px;
      border-top: solid 3px #59556E;
      border-bottom: solid 2px #59556E;
  }

  .arrow::before {
      transform: rotate(-45deg);
      left: 3.5px;
  }

  .arrow::after {
      transform: rotate(45deg);
      right: 3.5px;
  }
</style>

<div id="icon_top">
    <div class="arrowBox">
        <div class="arrow"></div>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheTop extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_top.content.cloneNode(true)); //use the template to make a clone

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-top", TheTop)
