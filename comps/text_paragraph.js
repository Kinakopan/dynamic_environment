//MUST HAVE - CREATE A TEMPLATE TAG
var template_paragraph = document.createElement("template"); //<template> </template> RULE

template_paragraph.innerHTML = `
<style>
  #text_paragraph {
    font-family: 'Helvetica Neue',sans-serif;
    display: inline-block;
    width: 100%;
    text-align: left;
  }

  #text_paragraph p {
    display: inline;
    color: #fff;
    font-size: 28px;
  }

  #text_paragraph span {
    display: inline;
    color: #EA5C70;
    font-size: 42px;
    font-weight: bold;
    padding: 0 10px;
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

        // if(this.getAttribute("head_text")){
        //   this.shadowRoot.querySelector("#text_paragraph").innerText = this.getAttribute("head_text");
        // }

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

          // targetP.forEach(el => {
          //   newElement.innerHTML = this.getAttribute("para_p");
          // })
        }

        // if(this.getAttribute("para_p")){
        //   let newElP = document.createElement("p");
        //   this.shadowRoot.querySelector("#text_paragraph").appendChild(newElP);
        //   // let targetP = this.getAttribute("para_p");
        //   newElP.innerHTML = this.getAttribute("para_p");
        // }

        // if(this.getAttribute("para_span")){
        //   let newElSpan = document.createElement("span");
        //   this.shadowRoot.querySelector("#text_paragraph").appendChild(newElSpan);
        //   newElSpan.innerHTML = this.getAttribute("para_span");
        // }

        // document.querySelector(".continueBtn").onclick = () => this.goToNext();
    }

    humanParagraph() {
      document.querySelector(".humanParaBox").style.cssText= `
        display: block;
      `

      document.querySelector(".humanPara").style.cssText= `
        display: block;
        padding-top: 30vh;
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

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-paragraph", TheParagraph)
