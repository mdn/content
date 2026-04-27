---
title: "HTMLOutputElement: HTMLOutputElement() constructor"
short-title: HTMLOutputElement()
slug: Web/API/HTMLOutputElement/HTMLOutputElement
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.HTMLOutputElement.HTMLOutputElement
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`HTMLOutputElement()`** constructor creates a new {{domxref("HTMLOutputElement")}} object.

> [!NOTE]
> Currently only Safari implements this constructor, so using {{domxref("Document.createElement()")}} is recommended for broader compatibility — see the [example below](#creating_an_output_element_programmatically).

## Syntax

```js-nolint
new HTMLOutputElement()
```

### Parameters

None.

### Return value

A new {{domxref("HTMLOutputElement")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown with the message `"Illegal constructor"` in browsers that do not support this constructor.

## Examples

### Creating an output element programmatically

> [!NOTE]
> In practice, you would usually create {{htmlelement("output")}} elements using {{domxref("Document.createElement()")}} instead of this constructor, since `createElement()` is supported across all browsers.

This example creates an {{htmlelement("output")}} element using the `HTMLOutputElement()` constructor and inserts it into a form that adds two numbers together.

```html
<form id="my-form">
  <label>
    Number one
    <input type="number" id="a" value="5" />
  </label>
  +
  <label>
    Number two
    <input type="number" id="b" value="3" />
  </label>
  =
  <span id="output-container"></span>
</form>
<p id="warning" hidden>
  ⚠️ Your browser does not support the
  <code>HTMLOutputElement()</code> constructor.
</p>
```

```css hidden
body {
  font-family: system-ui;
}

input {
  width: 3rem;
  font-size: inherit;
}

p {
  padding: 0.25rem;
  background-color: #fff2cc;
}
```

```js
try {
  new HTMLOutputElement();
} catch {
  document.getElementById("warning").hidden = false;
}

const output = new HTMLOutputElement();
output.id = "result";
output.setAttribute("for", "a b");
document.getElementById("output-container").appendChild(output);

function updateResult() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  output.value = a.valueAsNumber + b.valueAsNumber;
}

document.getElementById("my-form").addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("creating_an_output_element_programmatically", "", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLOutputElement")}}
- {{HTMLElement("output")}}
- {{domxref("Document.createElement()")}}
