---
title: Using shadow DOM
slug: Web/Web_Components/Using_shadow_DOM
tags:
  - API
  - DOM
  - Guide
  - Web Components
  - shadow dom
---
{{DefaultAPISidebar("Web Components")}}

An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean. The Shadow DOM API is a key part of this, providing a way to attach a hidden separated DOM to an element. This article covers the basics of using the Shadow DOM.

## High-level view

This article assumes you are already familiar with the concept of the [DOM (Document Object Model)](/en-US/docs/Web/API/Document_Object_Model/Introduction) — a tree-like structure of connected nodes that represents the different elements and strings of text appearing in a markup document (usually an HTML document in the case of web documents). As an example, consider the following HTML fragment:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

This fragment produces the following DOM structure:

![DOM Tree with elements and text nodes, content of non empty text nodes, including element's attribute names and contents ](dom-screenshot.png)

_Shadow_ DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which you can attach any element, in the same way as the normal DOM.

![SVG version of the diagram showing the interaction of document, shadow root and shadow host.](shadowdom.svg)

There are some bits of shadow DOM terminology to be aware of:

- **Shadow host**: The regular DOM node that the shadow DOM is attached to.
- **Shadow tree**: The DOM tree inside the shadow DOM.
- **Shadow boundary**: the place where the shadow DOM ends, and the regular DOM begins.
- **Shadow root**: The root node of the shadow tree.

You can affect the nodes in the shadow DOM in exactly the same way as non-shadow nodes — for example appending children or setting attributes, styling individual nodes using element.style.foo, or adding style to the entire shadow DOM tree inside a {{htmlelement("style")}} element. The difference is that none of the code inside a shadow DOM can affect anything outside it, allowing for handy encapsulation.

Note that the shadow DOM is not a new thing by any means — browsers have used it for a long time to encapsulate the inner structure of an element. Think for example of a {{htmlelement("video")}} element, with the default browser controls exposed. All you see in the DOM is the `<video>` element, but it contains a series of buttons and other controls inside its shadow DOM. The shadow DOM spec has made it so that you are allowed to actually manipulate the shadow DOM of your own custom elements.

## Basic usage

You can attach a shadow root to any element using the {{domxref("Element.attachShadow()")}} method. This takes as its parameter an options object that contains one option — `mode` — with a value of `open` or `closed`:

```js
const shadowOpen = elementRef.attachShadow({mode: 'open'});
const shadowClosed = elementRef.attachShadow({mode: 'closed'});
```

`open` means that you can access the shadow DOM using JavaScript written in the main page context, for example using the {{domxref("Element.shadowRoot")}} property:

```js
const myShadowDom = myCustomElem.shadowRoot;
```

If you attach a shadow root to a custom element with `mode: closed` set, you won't be able to access the shadow DOM from the outside — `myCustomElem.shadowRoot` returns `null`. This is the case with built in elements that contain shadow DOMs, such as `<video>`.

> **Note:** As [this blog post shows](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af), it is actually fairly easy to work around closed shadow DOMs, and the hassle to completely hide them is often more than it's worth.

If you are attaching a shadow DOM to a custom element as part of its constructor (by far the most useful application of the shadow DOM), you would use something like this:

```js
const shadow = this.attachShadow({mode: 'open'});
```

When you've attached a shadow DOM to an element, manipulating it is a matter of just using the same DOM APIs as you use for the regular DOM manipulation:

```js
const para = document.createElement('p');
shadow.appendChild(para);
// etc.
```

## Working through a simple example

Now let's walk through a simple example to demonstrate the shadow DOM in action inside a custom element — [`<popup-info>`](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component) (see a [live example](https://mdn.github.io/web-components-examples/popup-info-box-web-component/) also). This takes an image icon and a text string, and embeds the icon into the page. When the icon is focused, it displays the text in a pop up information box to provide further in-context information. To begin with, in our JavaScript file we define a class called `PopUpInfo`, which extends `HTMLElement`:

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
  }
}
```

Inside the class definition we define the element's constructor, which defines all the functionality the element will have when an instance of it is instantiated.

### Creating the shadow root

We first attach a shadow root to the custom element:

```js
// Create a shadow root
const shadow = this.attachShadow({mode: 'open'});
```

### Creating the shadow DOM structure

Next, we use some DOM manipulation to create the element's internal shadow DOM structure:

```js
// Create spans
const wrapper = document.createElement('span');
wrapper.setAttribute('class', 'wrapper');
const icon = document.createElement('span');
icon.setAttribute('class', 'icon');
icon.setAttribute('tabindex', 0);
const info = document.createElement('span');
info.setAttribute('class', 'info');

// Take attribute content and put it inside the info span
const text = this.getAttribute('data-text');
info.textContent = text;

// Insert icon
const img = document.createElement('img');
img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png';
icon.appendChild(img);
```

### Styling the shadow DOM

After that we create a {{htmlelement("style")}} element and populate it with some CSS to style it:

```js
// Create some CSS to apply to the shadow DOM
let style = document.createElement('style');

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
}

img {
  width: 1.2rem;
}

.icon:hover + .info, .icon:focus + .info {
  opacity: 1;
}`;
```

### Attaching the shadow DOM to the shadow root

The final step is to attach all the created elements to the shadow root:

```js
// attach the created elements to the shadow DOM
shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

### Using our custom element

Once the class is defined, using the element is as simple as defining it, and putting it on the page, as explained in [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements):

```js
// Define the new element
customElements.define('popup-info', PopUpInfo);
```

```html
<popup-info img="img/alt.png" data-text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card.">
```

### Internal versus external styles

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

## See also

- [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Using templates and slots](/en-US/docs/Web/Web_Components/Using_templates_and_slots)
