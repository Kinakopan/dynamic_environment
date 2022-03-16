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

#contentsWrap {
  z-index: 1;
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
        
        let trigger = this.getAttribute("trigger");
        let buttonDoc = document.querySelector(`#${trigger}`);
 
        this.shadowRoot.querySelector("#clickableBox").onclick = () => { 
          this.startAnimation()
          buttonDoc.buttonAppear();
          buttonDoc.showParagraph();
        };

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
      paperWasteAnimationCallback(){
      const paper = this.shadowRoot.querySelector("#clickableBox");
      let bin = document.getElementById("recycle-bin");
      let binRect = bin.getBoundingClientRect();

      console.log(binRect.left, binRect.right);
      let destX = (binRect.left+binRect.right)/2;
      let destY = (binRect.top+binRect.bottom)/36;
      let timer = null;
      let x = 0,y = 0;
      clearInterval(timer);
      timer = setInterval(frame,1);
      function frame() {
        if (x+100 >= destX) {
          clearInterval(timer);
        } else {
          x++;
          y = destY/(destX*destX)*x*x;
          paper.style.top = y + 'px';
          paper.style.left = x + 'px';
        }
      }
    }



    //To-do - CREATE THE FUNCTIONALITIES HERE!
    startAnimation() {
      document.querySelector(".contentsWrap").style.cssText = `background: rgba(0,0,0,0.8);`
    }

    finishAnimation() {
      document.querySelector(".contentsWrap").style.cssText = `background: transparent;`
    }

    imgShow2_1(){
      // var popup = document.getElementById("points2_1");
      // popup.classList.toggle("show");

      // var test = document.getElementById("points2_1");
      // test.classList.toggle("clicked");


      // let nextHidden = document.querySelector('div.box2_1 > the-points[class=hidden]');
      // if(nextHidden)  {
      //   nextHidden.classList.remove('hidden');
      //   setTimeout(imgShow2_1, 500);
      // }

      let interval = setInterval(() => {
        let nextHidden = document.querySelector('div.box2_1 > the-points[class=hidden]');
        if(nextHidden) {
          nextHidden.classList.remove('hidden')
        } else 
          clearInterval(interval);
      }, 800);
    }


 
    imgShow2_2(){
      // var popup = document.getElementById("points2_2");
      // popup.classList.toggle("show");
      let interval = setInterval(() => {
        let nextHidden = document.querySelector('div.box2_2 > the-points[class=hidden]');
        if(nextHidden) {
          nextHidden.classList.remove('hidden')
        } else 
          clearInterval(interval);
      }, 800);
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clickable", TheClickable)
