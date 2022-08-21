---
title: Using custom elements
slug: Web/Web_Components/Using_custom_elements
tags:
  - Classes
  - Guide
  - HTML
  - Web Components
  - autonomous
  - custom elements
  - customized
---
{{DefaultAPISidebar("Web Components")}}

One of the key features of the Web Components standard is the ability to create custom elements that encapsulate your functionality on an HTML page, rather than having to make do with a long, nested batch of elements that together provide a custom page feature. This article introduces the use of the Custom Elements API.

## High-level view

The controller of custom elements on a web document is the {{domxref("CustomElementRegistry")}} object — this object allows you to register a custom element on the page, return information on what custom elements are registered, etc.

To register a custom element on the page, you use the {{domxref("CustomElementRegistry.define()")}} method. This takes as its arguments:

- A string representing the name you are giving to the element. Note that custom element names [require a dash to be used in them](https://html.spec.whatwg.org/#valid-custom-element-name) (kebab-case); they can't be single words.
- A [class](/en-US/docs/Web/JavaScript/Reference/Classes) object that defines the behavior of the element.
- {{optional_inline}} An options object containing an `extends` property, which specifies the built-in element your element inherits from, if any (only relevant to customized built-in elements; see the definition below).

So for example, we can define a custom [word-count element](https://mdn.github.io/web-components-examples/word-count-web-component/) like this:

```js
customElements.define('word-count', WordCount, { extends: 'p' });
```

The element is called `word-count`, its class object is `WordCount`, and it extends the {{htmlelement("p")}} element.

A custom element's class object is written using the `class` syntax. For example, `WordCount` is structured like so:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here
  }
}
```

This is just a simple example, but there is more you can do here. It is possible to define specific lifecycle callbacks inside the class, which run at specific points in the element's lifecycle. For example, `connectedCallback` is invoked each time the custom element is appended into a document-connected element, while `attributeChangedCallback` is invoked when one of the custom element's attributes is added, removed, or changed.

You'll learn more about these in the [Using the lifecycle callbacks](#using_the_lifecycle_callbacks) section below.

There are two types of custom elements:

- **Autonomous custom elements** are standalone — they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example `<popup-info>`, or `document.createElement("popup-info")`.
- **Customized built-in elements** inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the [`is`](/en-US/docs/Web/HTML/Global_attributes/is) attribute (or property). For example `<p is="word-count">`, or `document.createElement("p", { is: "word-count" })`.

## Working through some simple examples

At this point, let's go through some more simple examples to show you how custom elements are created in more detail.

### Autonomous custom elements

Let's have a look at an example of an autonomous custom element — [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component) (see a [live example](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)). This takes an image icon and a text string, and embeds the icon into the page. When the icon is focused, it displays the text in a pop up information box to provide further in-context information.

To begin with, the JavaScript file defines a class called `PopUpInfo`, which extends the generic {{domxref("HTMLElement")}} class.

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
  }
}
```

The preceding code snippet contains the [`constructor()`](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) definition for the class, which always starts by calling [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) so that the correct prototype chain is established.

Inside the method connectedCallback, we define all the functionality the element will have when the element is connected to the DOM. In this case we attach a shadow root to the custom element, use some DOM manipulation to create the element's internal shadow DOM structure — which is then attached to the shadow root — and finally attach some CSS to the shadow root to style it. We don't use `constructor()` because an element's attributes are unavailable until connected to the DOM.

```js
// Create a shadow root
this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

// Create (nested) span elements
const wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
const icon = wrapper.appendChild(document.createElement('span'));
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
// Insert icon from defined attribute or default icon
const img = icon.appendChild(document.createElement('img'));
img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png';

const info = wrapper.appendChild(document.createElement('span'));
info.setAttribute('class','info');
// Take attribute content and put it inside the info span
info.textContent = this.getAttribute('data-text');

// Create some CSS to apply to the shadow DOM
const style = document.createElement('style');
style.textContent = '.wrapper {' +
// CSS truncated for brevity

// attach the created elements to the shadow DOM
this.shadowRoot.append(style,wrapper);
```

Finally, we register our custom element on the `CustomElementRegistry` using the `define()` method we mentioned earlier — in the parameters we specify the element name, and then the class name that defines its functionality:

```js
customElements.define('popup-info', PopUpInfo);
```

It is now available to use on our page. Over in our HTML, we use it like so:

```html
<popup-info img="img/alt.png" data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

> **Note:** You can see the [full JavaScript source](https://github.com/mdn/web-components-examples/blob/main/popup-info-box-web-component/main.js) code here.

### Internal vs. external styles

In the above example we apply style to the Shadow DOM using a {{htmlelement("style")}} element, but it is perfectly possible to do it by referencing an external stylesheet from a {{htmlelement("link")}} element instead.

For example, take a look at this code from our [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) example (see the [source code](https://github.com/mdn/web-components-examples/blob/main/popup-info-box-external-stylesheet/main.js)):

```js
// Apply external styles to the shadow DOM
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', 'style.css');

// Attach the created element to the shadow DOM
shadow.appendChild(linkElem);
```

Note that {{htmlelement("link")}} elements do not block paint of the shadow root, so there may be a flash of unstyled content (FOUC) while the stylesheet loads.

Many modern browsers implement an optimization for {{htmlelement("style")}} tags either cloned from a common node or that have identical text, to allow them to share a single backing stylesheet. With this optimization the performance of external and internal styles should be similar.

### Customized built-in elements

Now let's have a look at another customized built in element example — [expanding-list](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) ([see it live also](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). This turns any unordered list into an expanding/collapsing menu.

First of all, we define our element's class, in the same manner as before:

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
  }
}
```

We will not explain the element functionality in any detail here, but you can discover how it works by checking out the source code. The only real difference here is that our element is extending the {{domxref("HTMLUListElement")}} interface, and not {{domxref("HTMLElement")}}. So it has all the characteristics of a {{htmlelement("ul")}} element with the functionality we define built on top, rather than being a standalone element. This is what makes it a customized built-in, rather than an autonomous element.

Next, we register the element using the `define()` method as before, except that this time it also includes an options object that details what element our custom element inherits from:

```js
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```

Using the built-in element in a web document also looks somewhat different:

```html
<ul is="expanding-list">

  ...

</ul>
```

You use a `<ul>` element as normal, but specify the name of the custom element inside the `is` attribute.

> **Note:** Again, you can see the full [JavaScript source code](https://github.com/mdn/web-components-examples/blob/main/expanding-list-web-component/main.js) here.

## Using the lifecycle callbacks

You can define several different callbacks inside a custom element's class definition, which fire at different points in the element's lifecycle:

- `connectedCallback`: Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

  > **Note:** `connectedCallback` may be called once your element is no longer connected, use {{domxref("Node.isConnected")}} to make sure.

- `disconnectedCallback`: Invoked each time the custom element is disconnected from the document's DOM.
- `adoptedCallback`: Invoked each time the custom element is moved to a new document.
- `attributeChangedCallback`: Invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to notice change for is specified in a static get `observedAttributes` method

Let's look at an example of these in use. The code below is taken from the [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) example ([see it running live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)). This is a trivial example that generates a colored square of a fixed size on the page. The custom element looks like this:

```html
<custom-square l="100" c="red"></custom-square>
```

The class constructor is really simple — here we attach a shadow DOM to the element, then attach empty {{htmlelement("div")}} and {{htmlelement("style")}} elements to the shadow root:

```js
const shadow = this.attachShadow({mode: 'open'});

const div = document.createElement('div');
const style = document.createElement('style');
shadow.appendChild(style);
shadow.appendChild(div);
```

The key function in this example is `updateStyle()` — this takes an element, gets its shadow root, finds its `<style>` element, and adds {{cssxref("width")}}, {{cssxref("height")}}, and {{cssxref("background-color")}} to the style.

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}
```

The actual updates are all handled by the life cycle callbacks, which are placed inside the class definition as methods. The `connectedCallback()` runs each time the element is added to the DOM — here we run the `updateStyle()` function to make sure the square is styled as defined in its attributes:

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}
```

The `disconnectedCallback()` and `adoptedCallback()` callbacks log simple messages to the console to inform us when the element is either removed from the DOM, or moved to a different page:

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}
```

The `attributeChangedCallback()` callback is run whenever one of the element's attributes is changed in some way. As you can see from its properties, it is possible to act on attributes individually, looking at their name, and old and new attribute values. In this case however, we are just running the `updateStyle()` function again to make sure that the square's style is updated as per the new values:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

Note that to get the `attributeChangedCallback()` callback to fire when an attribute changes, you have to observe the attributes. This is done by specifying a `static get observedAttributes()` method inside custom element class - this should `return`  an array containing the names of the attributes you want to observe:

```js
static get observedAttributes() { return ['c', 'l']; }
```

This is placed right at the top of the constructor, in our example.

> **Note:** Find the [full JavaScript source](https://github.com/mdn/web-components-examples/blob/main/life-cycle-callbacks/main.js) here.

## Transpilers vs. classes

Please note that classes cannot reliably be transpiled in Babel 6 or TypeScript targeting legacy browsers. You can either use Babel 7 or the [babel-plugin-transform-builtin-classes](https://www.npmjs.com/package/babel-plugin-transform-builtin-classes) for Babel 6, and target ES2015 in TypeScript instead of legacy.

## Libraries

There are several libraries that are built on Web Components with the aim of increasing the level of abstraction when creating custom elements. Some of these libraries are [FASTElement](https://www.fast.design/docs/fast-element/getting-started/), [snuggsi](https://github.com/devpunks/snuggsi), [X-Tag](https://x-tag.github.io/), [Slim.js](https://slimjs.com/), [Lit](https://lit.dev/), [Smart](https://www.htmlelements.com/), [Stencil](https://stenciljs.com), [hyperHTML-Element](https://github.com/WebReflection/hyperHTML-Element), [DataFormsJS](https://www.dataformsjs.com/), and [Custom-Element-Builder](https://tmorin.github.io/ceb/).
