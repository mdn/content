---
title: ":defined"
slug: Web/CSS/:defined
page-type: css-pseudo-class
browser-compat: css.selectors.defined
---

{{CSSRef}}

The **`:defined`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any element that has been defined. This includes any standard element built into the browser and custom elements that have been successfully defined (i.e. with the {{domxref("CustomElementRegistry.define()")}} method).

```css
/* Selects any defined element */
:defined {
  font-style: italic;
}

/* Selects any instance of a specific custom element */
simple-custom:defined {
  display: block;
}
```

## Syntax

```css
:defined {
  /* ... */
}
```

## Examples

### Hiding elements until they are defined

In this demo, we define a basic custom element named `<custom-element>` and we use `:not(:defined)` and `:defined` selectors to style the element before and after it is defined. This is useful if you have a complex custom element that takes a while to load into the page — you might want to hide instances of the element until the definition is complete so that you don't end up with flashes of ugly unstyled elements on the page.

```html
<custom-element>
  <p>
    Loaded content: Lorem ipsum tel sed tellus eiusmod tellus. Aenean. Semper
    dolor sit nisi. Elit porttitor nisi sit vivamus.
  </p>
</custom-element>

<button id="btn">define the <code>&lt;custom-element&gt;</code></button>
```

The above HTML code uses the custom element but the element hasn't been defined yet.

```css hidden
custom-element {
  display: block;
  border: 5px dashed grey;
  border-radius: 1rem;
  height: 100px;
  width: 400px;
  padding: 1rem;
  position: relative;
  user-select: none;
}

code {
  background: #ccc;
}

#btn {
  margin-top: 1rem;
  cursor: pointer;
}
```

In the following code, we use `custom-element:not(:defined)` selector to select the element while it is not defined and use `custom-element:defined` selector to select the element after is defined. In the following CSS, we switch from grey to black color after the custom element is defined.

```css
custom-element:not(:defined) {
  border-color: grey;
  color: grey;
}

custom-element:defined {
  background-color: wheat;
  border-color: black;
  color: black;
}

/* show loading message */
custom-element:not(:defined)::before {
  content: "Loading...";
  position: absolute;
  inset: 0 0 0 0;
  align-content: center;
  text-align: center;
  font-size: 2rem;
  background-color: white;
  border-radius: 1rem;
}

/* remove the loading message */
custom-element:defined::before {
  content: "";
}
```

We have also used the [`::before`](/en-US/docs/Web/CSS/::before) pseudo-element to show the overlay loading message till the element is defined.

The following JavaScript has been used to define the custom element. In such a small demo the script executes instantly and it is not possible to see before definition styling. So instead of defining the custom element in a normal flow, we define the custom element with a click of the button.

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  customElements.define("custom-element", class extends HTMLElement {});
  btn.remove();
});
```

{{EmbedLiveSample("Hiding elements until they are defined", "100%", "230")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/API/Web_components)
