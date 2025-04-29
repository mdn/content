---
title: "HTMLInputElement: placeholder property"
short-title: placeholder
slug: Web/API/HTMLInputElement/placeholder
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.placeholder
---

{{ APIRef("HTML DOM") }}

The **`placeholder`** property of the {{DOMxRef("HTMLInputElement")}} interface represents a hint to the user of what can be entered in the control. It reflects the {{htmlelement("input")}} element's [`placeholder`](/en-US/docs/Web/HTML/Reference/Elements/input#placeholder) attribute.

## Value

A string.

## Examples

### Getting and setting the placeholder attribute

This example shows how you can get and set the placeholder using both the attribute and its reflected property.

#### HTML

The HTML defines an {{htmlelement("input")}} element where the [`placeholder`](/en-US/docs/Web/HTML/Reference/Attributes/placeholder) attribute has been set with the text "Original placeholder".
We also define two {{htmlelement("button")}} elements for replacing the `placeholder` attribute.

```html
<input placeholder="Original placeholder" />
<button id="attr">Set attribute</button>
<button id="prop">Set property</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 120px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

First we define a logging function that gets the value of placeholder attribute using {{domxref("Element.getAttribute()")}} and the placeholder property using {{domxref("HTMLInputElement.placeholder")}}.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
function logPlaceholder() {
  const inputElement = document.querySelector("input");
  log(
    `attr: "${inputElement.getAttribute(
      "placeholder",
    )}", prop: "${inputElement.placeholder}"`,
  );
}
```

We then define two event listeners for the buttons, which set the placeholder using {{domxref("Element.setAttribute()")}} and {{domxref("HTMLInputElement.placeholder")}}, respectively.
In both cases the attribute and property are then logged.

```js
logPlaceholder();

const setAttributeButton = document.querySelector("#attr");
const setPropertyButton = document.querySelector("#prop");
const inputElement = document.querySelector("input");

// Set placeholder attribute on button click
setAttributeButton.addEventListener("click", () => {
  inputElement.setAttribute("placeholder", "Set from attribute");
  logPlaceholder();
});

// Set placeholder property on button click
setPropertyButton.addEventListener("click", () => {
  inputElement.placeholder = "Set from property";
  logPlaceholder();
});
```

#### Result

The log below shows the output of the above code.
Note that the value can be set using either the attribute or the property, and the result read via either approach is the same.
The example doesn't do anything with text entered into the `<input>`.

{{EmbedLiveSample("Getting and setting reflected attributes","100%","200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{cssxref("::placeholder")}} pseudo-element
- {{CSSXref(":placeholder-shown")}} pseudo-class
