//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<style>

 .button {
  background: #ffe600;
  border-radius: 5px;
  width: 5em;
  height: 1.8em;
  border: none;
  font-size: 1.2em;
  color: #2D436A;
  font-weight: bold;
  letter-spacing: 2px;
  opacity: 0;
  float: right;
  z-index: 500;
  position: relative;
 } 


</style>

<button class="button" type="button">
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
        this.shadowRoot.querySelector(".button").innerHTML = this.getAttribute('button_text');


        let trigger = this.getAttribute("trigger");
        let buttonDoc = document.querySelector(`#${trigger}`);
        


     this.shadowRoot.querySelector(".button").onclick = () => {
        buttonDoc.disappearParagraph();
        this.buttonDisappear();
     }


        //-----First try-----//
        // document.querySelector(".clickable").onclick = () => this.getAttribute('section')

        // if(this.getAttribute('section') === '2') {
        //     this.buttonAppear();
        //     this.showParagraph();
        // }

        //----second try----//
        // let liArray = document.querySelectorAll(".clickable");
        // console.log(liArray)

        // let aButton = document.querySelector(`#trigger`)
        
        // console.log(`ID: ${this.id}`);
        // let buttonDoc = document.querySelector(`#${this.id}`);

        // this.buttonAppear()
        // buttonDoc.onclick = () => { this.buttonAppear() };
        // console.log(buttonDoc)

        
        // this.addEventListener("click", () => {console.log("hi")})
        // console.log(this)
        // this.onclick = (trigger) => console.log(`clicked ${trigger}`);
        // liArray[i].onclick = () => {
        //     console.log(this.id)
        //     this.buttonAppear();
        //     this.showParagraph();
        // }
        
        // for ( var i =0; i < liArray.length; i++) {
        //     liArray[i].onclick = () => {
        //         console.log(this.id)
        //         this.buttonAppear();
        //         this.showParagraph();
        //     }
        // }


     
        // document.querySelector(".clickable_earth").onclick = () => {
        //     this.buttonAppear();
        //     this.showParagraph();
        // }
        // document.querySelector(".clickable_airplane").onclick = () => {
        //     this.buttonAppear();
        //     this.showParagraph();
        // }
        // document.querySelector(".clickable_waste").onclick = () => {
        //     this.buttonAppear();
        //     this.showParagraph();
        // }
        // document.querySelector(".clickable_bear").onclick = () => {
        //     this.buttonAppear();
        //     this.showParagraph();
        // }

        // ------for the button------

        // let buttonAttr = document.querySelectorAll("the-button").getAttribute("class");
        
        // if(buttonAttr = "button1")

        // document.querySelector(".button1").onclick = () => {
        //     this.buttonDisappear();
        //     this.disableParagraph();
        //     document.querySelector(".contentsWrap").style.cssText = `background: transparent;`;
        // }

        // document.querySelector(".button2").onclick = () => {
        //     this.buttonDisappear();
        //     this.disableParagraph();
        //     document.querySelector(".contentsWrap").style.cssText = `background: transparent;`;
        // } 

        // document.querySelector(".button3").onclick = () => {
        //     this.buttonDisappear();
        //     this.disableParagraph();
        //     document.querySelector(".contentsWrap").style.cssText = `background: transparent;`;
        // } 

        // document.querySelector(".button4").onclick = () => {
        //     this.buttonDisappear();
        //     this.disableParagraph();
        //     document.querySelector(".contentsWrap").style.cssText = `background: transparent;`;
        // }
            

    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    buttonDisappear() {
        this.shadowRoot.querySelector(".button").style.cssText = `opacity: 0;`
    }
    
    buttonAppear() {
        this.shadowRoot.querySelector(".button").style.cssText = `opacity: 1;`
    }

    showParagraph() {

        document.querySelector(".first").style.cssText = `
        opacity: 1;
        position: relative;
        z-index: 3;
        animation: fade-out 1000ms;

        `;

        document.querySelector(".second").style.cssText = `
        z-index: 100;
        animation: slide-in 1000ms;
        animation-delay: 1000ms;
        animation-fill-mode: backwards;
        opacity: 1;
        z-index: 3;
        `;

        document.querySelector(".last").style.cssText = `
        z-index: 3;
        animation: slide-in 1000ms;
        animation-delay: 2000ms;
        animation-fill-mode: backwards;
        opacity: 1;
        
        `;

    }

    disappearParagraph() {
        document.querySelector(".last").style.cssText = `opacity: 0;`
        document.querySelector(".second").style.cssText = `opacity: 0;`
        document.querySelector(".first").style.cssText = `opacity: 0;`
        document.querySelector(".contentsWrap").classList.remove("contentsWrap_bg");
    }
}
//MUST HAVE - define the tag for the custom elements 
customElements.define("the-button", TheButton)

