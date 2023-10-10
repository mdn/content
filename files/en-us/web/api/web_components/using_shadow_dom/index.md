---
title: Using shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
page-type: guide
---

{{DefaultAPISidebar("Web Components")}}

An important aspect of custom elements is encapsulation, because a custom element, by definition, is a piece of reusable functionality: it might be dropped into any web page and be expected to work. So it's important that code running in the page should not be able to accidentally break a custom element by modifying its internal implementation. Shadow DOM enables you to attach a DOM tree to an element, and have the internals of this tree hidden from JavaScript and CSS running in the page.

This article covers the basics of using the shadow DOM.

## High-level view

This article assumes you are already familiar with the concept of the [DOM (Document Object Model)](/en-US/docs/Web/API/Document_Object_Model/Introduction) — a tree-like structure of connected nodes that represents the different elements and strings of text appearing in a markup document (usually an HTML document in the case of web documents). As an example, consider the following HTML fragment:

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>DOM example</title>
  </head>
  <body>
    <section>
      <img src="dinosaur.png" alt="A red Tyrannosaurus Rex." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

This fragment produces the following DOM structure (excluding whitespace-only text nodes):

```plain
- HTML
    - HEAD
        - META charset="utf-8"
        - TITLE
            - #text: DOM example
    - BODY
        - SECTION
            - IMG src="dinosaur.png" alt="A red Tyrannosaurus Rex."
            - P
                - #text: Here we will add a link to the
                - A href="https://www.mozilla.org/"
                - #text: Mozilla homepage
```

_Shadow_ DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which you can attach any element, in the same way as the normal DOM.

![SVG version of the diagram showing the interaction of document, shadow root and shadow host.](shadowdom.svg)

There are some bits of shadow DOM terminology to be aware of:

- **Shadow host**: The regular DOM node that the shadow DOM is attached to.
- **Shadow tree**: The DOM tree inside the shadow DOM.
- **Shadow boundary**: the place where the shadow DOM ends, and the regular DOM begins.
- **Shadow root**: The root node of the shadow tree.

You can affect the nodes in the shadow DOM in exactly the same way as non-shadow nodes — for example appending children or setting attributes, styling individual nodes using element.style.foo, or adding style to the entire shadow DOM tree inside a {{htmlelement("style")}} element. The difference is that none of the code inside a shadow DOM can affect anything outside it, allowing for handy encapsulation.

Before shadow DOM was made available to web developers, browsers were already using it to encapsulate the inner structure of an element. Think for example of a {{htmlelement("video")}} element, with the default browser controls exposed. All you see in the DOM is the `<video>` element, but it contains a series of buttons and other controls inside its shadow DOM. The shadow DOM spec enables you to manipulate the shadow DOM of your own custom elements.

## Creating a shadow DOM

The following page contains two elements, a {{htmlelement("div")}} element with an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of `"host"`, and a {{htmlelement("span")}} element containing some text:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

We're going to use the `"host"` element as the shadow host. We call {{domxref("Element.attachShadow()", "attachShadow()")}} on the host to create the shadow DOM, and can then add nodes to the shadow DOM just like we would to the main DOM. In this example we add a single `<span>` element:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

The result looks like this:

{{EmbedLiveSample("Creating a shadow DOM")}}

## Encapsulation from JavaScript

So far this might not look like much. But let's see what happens if code running in the page tries to access elements in the shadow DOM.

This page is just like the last one, except we've added two {{htmlelement("button")}} elements.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reset" type="button">Reset</button>
```

Clicking the "Uppercase span elements" button finds all `<span>` elements in the page and changes their text to uppercase.
Clicking the "Reset" button just reloads the page, so you can try again.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(document.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

If you click "Uppercase span elements", you'll see that {{domxref("Document.querySelectorAll()")}} doesn't find the elements in our shadow DOM: they are effectively hidden from JavaScript in the page:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot and the "mode" option

In the example above, we pass an argument `{ mode: "open" }` to `attachShadow()`. With `mode` set to `"open"`, then JavaScript in the page is able to access the internals of your shadow DOM through the {{domxref("Element.shadowRoot", "shadowRoot")}} property of the shadow host.

In this example, as before, the HTML contains the shadow host, a `<span>` element in the main DOM tree, and two buttons:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reset" type="button">Reset</button>
```

This time the "Uppercase" button uses `shadowRoot` to find the `<span>` elements in the DOM:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

This time, the JavaScript running in the page can access the shadow DOM internals:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

So `{mode: "open"}` gives the page a way to break the encapsulation of your shadow DOM. If you don't want to give the page this ability, pass `{mode: "closed"}` instead, and then `shadowRoot` returns `null`.

However, you should not consider this a strong security mechanism, because there are ways it can be evaded, for example by browser extensions running in the page. It's more of an indication that the page should not access the internals of your shadow DOM tree.

## Encapsulation from CSS

In this version of the page, the HTML is the same as the original:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

In the JavaScript, we create the shadow DOM:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

This time, we'll have some CSS targeting `<span>` elements in the page:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

The page CSS does not affect nodes inside the shadow DOM:

{{EmbedLiveSample("Encapsulation from CSS")}}

## Applying styles inside the shadow DOM

To style page elements in the shadow DOM, we can create a {{htmlelement("style")}} element and attach it to the shadow root. Rules defined in here will be scoped to the shadow DOM tree.

Here, again, is the HTML containing our host and a `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Again, we will add a page style targeting `<span>` elements:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

This time we will create the shadow DOM and add a `<style>` element to it:

```js
const host = document.querySelector("#host");

const shadow = host.attachShadow({ mode: "open" });
const style = document.createElement("style");
style.textContent = `span { color: red; border: 2px dotted black;}`;
shadow.appendChild(style);

const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

{{EmbedLiveSample("Applying styles inside the shadow DOM")}}

So the encapsulation of CSS works both ways: page styles don't affect the shadow DOM tree, and shadow DOM styles don't affect elements outside the shadow DOM.

## Shadow DOM and custom elements

Without the encapsulation provided by shadow DOM, [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) would be impossibly fragile. It would be too easy for a page to accidentally break a custom element's behavior or layout by running some page JavaScript or CSS. As a custom element developer, you'd never know whether the selectors applicable inside your custom element conflicted with those that applied in a page that chose to use your custom element.

Custom elements are implemented as a class which extends either the base {{domxref("HTMLElement")}} or a built-in HTML element such as {{domxref("HTMLParagraphElement")}}. Typically, the custom element itself is a shadow host, and the element creates multiple elements under that root, to provide the internal implementation of the element.

The example below creates a `<filled-circle>` custom element that just renders a circle filled with a solid color.

```js
class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Create a shadow root
    // The custom element itself is the shadow host
    const shadow = this.attachShadow({ mode: "open" });

    // create the internal implementation
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);

    shadow.appendChild(svg);
  }
}

customElements.define("filled-circle", FilledCircle);
```

```html
<filled-circle color="blue"></filled-circle>
```

{{EmbedLiveSample("Shadow DOM and custom elements", 100, 160)}}

For more examples, illustrating different aspects of custom element implementation, see our [guide to custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements).

## See also

- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
