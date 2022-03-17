//MUST HAVE - CREATE A TEMPLATE TAG
var template_paragraph = document.createElement("template"); //<template> </template> RULE

template_paragraph.innerHTML = `
<style>
  #text_paragraph {
    font-family: 'Helvetica Neue',sans-serif;
    display: inline-block;
    width: 100%;
    text-align: center;
  }

  #text_paragraph p {
    color: #fff;
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
  }

  #text_paragraph span {
    display: inline-block;
    color: #EA5C70;
    font-size: 32px;
    font-weight: bold;
    padding-right: 10px;
  }

  #text_paragraph p + span {
    padding-left: 10px;
  }

</style>

<div id="text_paragraph">
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

        if(this.getAttribute("para_p1", "para_p2", "para_span1", "para_span2")){
          let newElSpan1 = document.createElement("span");
          this.shadowRoot.querySelector("#text_paragraph").appendChild(newElSpan1);
          newElSpan1.innerHTML = this.getAttribute("para_span1");

          let newElP1 = document.createElement("p");
          this.shadowRoot.querySelector("#text_paragraph").appendChild(newElP1);
          newElP1.innerHTML = this.getAttribute("para_p1");

          let newElSpan2 = document.createElement("span");
          this.shadowRoot.querySelector("#text_paragraph").appendChild(newElSpan2);
          newElSpan2.innerHTML = this.getAttribute("para_span2");

          let newElP2 = document.createElement("p");
          this.shadowRoot.querySelector("#text_paragraph").appendChild(newElP2);
          newElP2.innerHTML = this.getAttribute("para_p2");
        }
    }

    humanParagraph() {
      document.querySelector(".humanParaBox").style.cssText= `
        display: block;
      `

      document.querySelector(".humanPara").style.cssText= `
        display: block;
        padding-top: 30vh 20px 0;
      `

      document.querySelector(".continueBtn").style.cssText=`
        display: block;
        background: #000;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 15px;
        margin: 30px auto 0;
      `
    }

    goToNext() {
      document.querySelector(".humanParaBox").style.cssText = `
        display: none;
      `
      document.querySelector("#human").humanDisappear();
      document.querySelector("#smoke").smokeDisappear();
    }

    // paraColorChange(){
    //   const element = document.querySelector('.parashow2_1');
    //   element.innerHTML = element.innerHTML.replace('20%', '<span style="color: red;">20%</span>');
    // }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-paragraph", TheParagraph)
