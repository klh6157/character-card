import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/src/meme-maker.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String, attribute: 'My app' },
    image: { type: String},
    shadowColor: {type: Boolean, reflect: true, attribute: 'shadow-color'},
  }

  static styles = css`
:host([shadow-color]) .characterCard{
  box-shadow: 1px 2px 3px 4px rgba(20, 20, 20, 0, 4);
}

.characterCard{
  text-align: center;
  max-width: 400px;
 
}
.wholeCard{
  text-align: center;
  background-color: red;
  max-width: 400px;
  text-align: center;
  font-weight: bold;
  margin-top: 0;
  
}
.center{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h2{
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  
}

p{
  text-align: center;
  font-weight: bold;
  padding: 20px;
  
}
.btn {
  text-align: center;
  margin: 3px;
  padding: 3px 3px;
  
}
.add{
 text-align: center;
  margin: 3px;
  padding: 3px 3px;
}
.delete{
  text-align: center;
  margin: 3px;
  padding: 3px 3px;
}
.color{
  text-align: center;
  margin: 3px;
  padding: 3px 3px;
}
.heading {
  text-align: center;
  margin: 3px;
  padding: 3px 3px;
  
}
.btn:hover{
  background-color: cyan;
}
.add:hover{
  background-color: cyan;
}
.delete:hover{
  background-color: cyan;
}
.color:hover{
  background-color: cyan;
}
.heading:hover{
  background-color: cyan;
}

@media only screen and (max-width: 500px){
  button{
    display: none;
    
  }
}
@media only screen and (max-width: 500px){
  .card{
    width: 25%;
    height: auto;
   
  }
  h2{
    font-size: 50px;
    
  }
  p{
    font-size: 50%;
  }
}
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.image = "https://pm1.narvii.com/5770/c91ff789cb31cff4d78b367fdc4f933ccde1a26d_hq.jpg"
    this.topText = 'Shiro Emiya';
    this.bottomText = 'This guy is dead';
    this.description = 'Details';
  }
  
  render() {
    return html`
    <div class="wholeCard">
      <div class="characterCard">
  <h2>Fate/Stay Night: Unlimited Blade Works</h2> 
  </div>
  <meme-maker image-url="${this.image}" top-text="${this.topText}" bottom-text="${this.bottomText}"></meme-maker>
       <details class="information">
        <summary>${this.description}</summary>
          <div>
            <ul>
              <slot><h3>Shiro Emiya is a servant of the fate and the main character of the anime. The anime is about a holy grail war where masters summons servants to fight in battle. There are usually seven masters per holy grail war that fight in battle. Winning the holy grail war allows the winner to get one wish granted</h3></slot>
            </ul>
          </div>
        </details>
</div>
</div>
    `;
  }
}

customElements.define('my-card', MyCard);