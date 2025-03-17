---
title: "ElementInternals: ariaLabelledByElements property"
short-title: ariaLabelledByElements
slug: Web/API/ElementInternals/ariaLabelledByElements
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaLabelledByElements
---

{{APIRef("DOM")}}

The **`ariaLabelledByElements`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) attribute, which identifies the element (or elements) that provide an accessible name for the element it is applied to.

The property is primarily intended to provide a label for elements that don't have a standard method for defining their accessible name.
For example, this might be used to name a generic container element, such as a {{htmlelement("div")}} or {{htmlelement("span")}}, or a grouping of elements, such as an image and a slider to change its opacity.
The property takes precedence over other mechanisms for providing an accessible name for elements, and may therefore also be used to provide a name for elements that would normally get it from their inner content or from an associated element such as a label.

The [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) topic contains additional information about when the property should be set.

## Value

An array of elements that provide the accessible name.

## Examples

### Get the accessible name from other elements

This example shows how `ariaLabelledByElements` can be used to programmatically get a label defined using `aria-labelledby` within the shadow root.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is therefore the concatenation of the inner text of the two referenced elements.

```html
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">Street name</span>
    <input aria-labelledby="label_1 label_2" />
    <span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
  </template>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code below first checks whether the `ariaLabelledByElements` is supported and if not, logs the result and exits.
If the property is supported it first logs the value of the property.
It then iterates through the returned elements, concatenating their inner text, and logs the resulting accessible name of the element.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Get access to the input within shadowRoot
const hostElement = document.getElementById("host");
const shadowRoot = hostElement.shadowRoot;
const inputElement = shadowRoot.querySelector("input");

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in ElementInternals.prototype) {
  ariaLabelText = "";

  // Get and log elements that provide the accessible name
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // Log inner text of elements to get accessible name
  labelElements.forEach((labelElement) => {
    ariaLabelText += labelElement.textContent.trim() + " ";
  });
  log(`Accessible name: ${ariaLabelText.trim()}`);
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
This should show the array of referenced {{domxref("HTMLSpanElement")}} elements, and the resulting accessible name from their inner text.

{{EmbedLiveSample("Get the accessible name from other elements","100%","150px")}}

<!-- Below is test code - shows that ariaLabelledByElements isn't picking up the label that is assigned outside the shadow
Not sure how relevant this is. Asking -->
<!--
### Get the accessible name from other elements2

This example shows how `ariaLabelledByElements` can be used to programmatically get a label defined using `aria-labelledby` within the shadow root.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is therefore the concatenation of the inner text of the two referenced elements.

```html
<span id="label_1">Street name</span>
<div id="host">
  <template shadowrootmode="open">
    <input aria-labelledby="label_1 label_2" />
    <span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
  </template>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code below first checks whether the `ariaLabelledByElements` is supported and if not, logs the result and exits.
If the property is supported it first logs the value of the property.
It then iterates through the returned elements, concatenating their inner text, and logs the resulting accessible name of the element.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Get access to the input within shadowRoot
const hostElement = document.getElementById("host");
const shadowRoot = hostElement.shadowRoot;
const inputElement = shadowRoot.querySelector("input");

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in ElementInternals.prototype) {
  ariaLabelText = "";

  // Get and log elements that provide the accessible name
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // Log inner text of elements to get accessible name
  labelElements.forEach((labelElement) => {
    ariaLabelText += labelElement.textContent.trim() + " ";
  });
  log(`Accessible name: ${ariaLabelText.trim()}`);
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

The log below shows the output of the above code.
This should show the array of referenced {{domxref("HTMLSpanElement")}} elements, and the resulting accessible name from their inner text.

{{EmbedLiveSample("Get the accessible name from other elements2","100%","150px")}}

-->

<!-- NOTE, below here untested/doesn't work yet -->
<!-- ideally also show sprouting only happens when something is in the DOM
Currently doesn't quite work as explainer  -->

<!--
### Assign the accessible name programmatically

This example shows how `ariaLabelledByElements` can be used to programmatically define the label for an element.

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is then the concatenation of the inner text of the two referenced elements.

```html
<span id="label_1">Street name</span>
<input />
<span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");
const label1Element = document.querySelector("#label_1");
const label2Element = document.querySelector("#label_2");

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  inputElement.ariaLabelledByElements = [label1Element, label2Element];

  log(`Labeled elements: ${inputElement.getAttribute("aria-labelledby")}`);

  /*
  ariaLabelText = "";

  // Get and log elements that provide the accessible name
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // Log inner text of elements to get accessible name
  labelElements.forEach((labelElement) => {
    ariaLabelText += labelElement.textContent.trim() + " ";
  });
  log(`Accessible name: ${ariaLabelText.trim()}`);
*/
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

{{EmbedLiveSample("Assign the accessible name programmatically","100%","150px")}}

-->

### Shadow test

This example shows how `ariaLabelledByElements` can be used to programmatically define the label for an element.

<!-- ideally also show sprouting only happens when something is in the DOM
Currently doesn't quite work as explainer  -->

#### HTML

The HTML defines two {{htmlelement("span")}} elements and references their ids in the `aria-labelledby` attribute of an {{htmlelement("input")}}.
The accessible name of the `<input>` is then the concatenation of the inner text of the two referenced elements.

```html
<label id="outside-label">Label outside shadow DOM:</label>

<my-component aria-labelledby="outside-label"></my-component>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```css
my-component {
  display: block;
  border: 1px solid #ccc;
  padding: 10px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  class MyComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <p>This is my component.</p>
        <div id="inner-content" role="region">
          Content inside the shadow DOM.
        </div>
      `;
    }

    connectedCallback() {
      const labelledBy = this.getAttribute("aria-labelledby");
      if (labelledBy) {
        this.shadowRoot
          .querySelector("#inner-content")
          .setAttribute("aria-labelledby", labelledBy);
      }
    }
  }

  customElements.define("my-component", MyComponent);
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Result

{{EmbedLiveSample("Shadow test","100%","150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.ariaLabelledByElements")}}
