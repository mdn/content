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

### Attribute inheritance

The shadow tree and {{ HTMLElement("slot") }} elements inherit the [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) and [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attributes from their shadow host.

## Creating a shadow DOM

### Imperatively with JavaScript

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

{{EmbedLiveSample("Imperatively with JavaScript")}}

### Declaratively with HTML

Creating a shadow DOM via JavaScript API might be a good option for client-side rendered applications. For other applications, a server-side rendered UI might have better performance and, therefore, a better user experience. In such cases, you can use the {{htmlelement("template")}} element to declaratively define the shadow DOM. The key to this behavior is the {{glossary("enumerated")}} `shadowrootmode` attribute, which can be set to either `open` or `closed`, the same values as the `mode` option of {{domxref("Element.attachShadow()", "attachShadow()")}} method.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> By default, contents of `<template>` are not displayed. In this case, because the `shadowrootmode="open"` was included, the shadow root is rendered. In supporting browsers, the visible contents within that shadow root are displayed.

After the browser parses the HTML, it replaces {{htmlelement("template")}} element with its content wrapped in a [shadow root](/en-US/docs/Glossary/Shadow_tree) that's attached to the parent element, the `<div id="host">` in our example. The resulting DOM tree looks like this (there's no `<template>` element in the DOM tree):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Note that in addition to the `shadowrootmode`, you can use `<template>` attributes such as `shadowrootclonable` and `shadowrootdelegatesfocus` to specify other properties of the generated shadow root.

## Encapsulation from JavaScript

So far this might not look like much. But let's see what happens if code running in the page tries to access elements in the shadow DOM.

This page is just like the last one, except we've added two {{htmlelement("button")}} elements.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Clicking the "Uppercase span elements" button finds all `<span>` elements in the page and changes their text to uppercase.
Clicking the "Reload" button just reloads the page, so you can try again.

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

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

If you click "Uppercase span elements", you'll see that {{domxref("Document.querySelectorAll()")}} doesn't find the elements in our shadow DOM: they are effectively hidden from JavaScript in the page:

{{EmbedLiveSample("Encapsulation from JavaScript")}}

## Element.shadowRoot and the "mode" option

In the example above, we pass an argument `{ mode: "open" }` to `attachShadow()`. With `mode` set to `"open"`, the JavaScript in the page is able to access the internals of your shadow DOM through the {{domxref("Element.shadowRoot", "shadowRoot")}} property of the shadow host.

In this example, as before, the HTML contains the shadow host, a `<span>` element in the main DOM tree, and two buttons:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
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

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

This time, the JavaScript running in the page can access the shadow DOM internals:

{{EmbedLiveSample("Element.shadowRoot and the \"mode\" option")}}

The `{mode: "open"}` argument gives the page a way to break the encapsulation of your shadow DOM. If you don't want to give the page this ability, pass `{mode: "closed"}` instead, and then `shadowRoot` returns `null`.

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

In this section we'll look at two different ways to apply styles inside a shadow DOM tree:

- [_Programmatically_](#constructable_stylesheets), by constructing a {{domxref("CSSStyleSheet")}} object and attaching it to the shadow root.
- [_Declaratively_](#adding_style_elements_in_template_declarations), by adding a {{htmlelement("style")}} element in a {{htmlelement("template")}} element's declaration.

In both cases, the styles defined in the shadow DOM tree are scoped to that tree, so just as page styles don't affect elements in the shadow DOM, shadow DOM styles don't affect elements in the rest of the page.

### Constructable stylesheets

To style page elements in the shadow DOM with constructable stylesheets, we can:

1. Create an empty {{domxref("CSSStyleSheet")}} object
2. Set its content using {{domxref("CSSStyleSheet.replace()")}} or {{domxref("CSSStyleSheet.replaceSync()")}}
3. Add it to the shadow root by assigning it to {{domxref("ShadowRoot.adoptedStyleSheets")}}

Rules defined in the `CSSStyleSheet` will be scoped to the shadow DOM tree, as well as any other DOM trees to which we have assigned it.

Here, again, is the HTML containing our host and a `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

This time we will create the shadow DOM and assign a `CSSStyleSheet` object to it:

```js
const sheet = new CSSStyleSheet();
sheet.replaceSync("span { color: red; border: 2px dotted black;}");

const host = document.querySelector("#host");

const shadow = host.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [sheet];

const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

The styles defined in the shadow DOM tree are not applied in the rest of the page:

{{EmbedLiveSample("Constructable stylesheets")}}

### Adding `<style>` elements in `<template>` declarations

An alternative to constructing `CSSStyleSheet` objects is to include a {{htmlelement("style")}} element inside the {{htmlelement("template")}} element used to define a web component.

In this case the HTML includes the `<template>` declaration

```html
<template id="my-element">
  <style>
    span {
      color: red;
      border: 2px dotted black;
    }
  </style>
  <span>I'm in the shadow DOM</span>
</template>

<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

In the JavaScript, we will create the shadow DOM and add the content of the `<template>` to it:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

Again, the styles defined in the `<template>` are applied only within the shadow DOM tree, and not in the rest of the page:

{{EmbedLiveSample("adding_style_elements_in_template_declarations")}}

### Choosing between programmatic and declarative options

Which of these options to use is dependent on your application and personal preference.

Creating a `CSSStyleSheet` and assigning it to the shadow root using `adoptedStyleSheets` allows you to create a single stylesheet and share it among many DOM trees. For example, a component library could create a single stylesheet and then share it among all the custom elements belonging to that library. The browser will parse that stylesheet once. Also, you can make dynamic changes to the stylesheet and have them propagate to all components that use the sheet.

The approach of attaching a `<style>` element is great if you want to be declarative, have few styles, and don't need to share styles across different components.

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
- {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{HTMLelement("template")}}
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module
- {{CSSXref("::part")}}
