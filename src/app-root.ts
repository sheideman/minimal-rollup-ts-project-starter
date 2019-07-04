// LitElement and html are the basic required imports
import {  html, css} from 'lit-element';
import {BaseView}  from './base-view';
// Create a class definition for your component and extend the LitElement base class
export class AppRoot extends BaseView {
    static get properties() {
        return {

          title:{type:String}
        };
      }

constructor(){
  super();
 this.lazyImportModules();
}

async lazyImportModules(){
  const Flickity = await import('flickity').then((m) => m.default);
const JSCalendar = await import('vanilla-js-calendar').then((m) => m.default);
 console.log(JSCalendar, Flickity);

}
  // The render callback renders your element's template. This should be a pure function,
  // it should always return the same template given the same properties. It should not perform
  // any side effects such as setting properties or manipulating the DOM. See the updated
  // or first-updated examples if you need side effects.
  render() {

    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html`
      <div>${this.title}</div>
    `;
  }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('app-root', AppRoot);