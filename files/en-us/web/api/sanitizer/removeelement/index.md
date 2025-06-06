---
title: "Sanitizer: removeElement() method"
short-title: removeElement()
slug: Web/API/Sanitizer/removeElement
page-type: web-api-instance-method
browser-compat: api.Sanitizer.removeElement
---

{{APIRef("HTML Sanitizer API")}}

The **`removeElement()`** method of the {{domxref("Sanitizer")}} interface sets an element to be disallowed — removed from input when the sanitizer is used.

The specified element is added to the list of [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) in this sanitizer's configuration.
The element is removed from the [`elements`](/en-US/docs/Web/API/SanitizerConfig#elements) or [`replaceWithChildrenElements`](/en-US/docs/Web/API/SanitizerConfig#replacewithchildrenelements) lists if present.

## Syntax

```js-nolint
removeElement(element)
```

### Parameters

- `element`

  - : A string indicating the name of the element to be disallowed, or an object with the following properties:

    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.

### Returns

None (`undefined`).

## Examples

### How to disallow elements

This example shows how `removeElement()` is used to specify an element to be "disallowed".

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 420px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

The code first creates a new `Sanitizer` object that initially allows {{htmlelement("div")}} and {{htmlelement("script")}} elements, and that replaces {{htmlelement("span")}} elements with their child elements.

The code then calls `removeElement()` to add {{htmlelement("p")}}, `<script>` and `<span>` elements to the [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) list in the configuration.
Note that adding `<script>` and `<span>` removes the elements from their original lists.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
  replaceWithChildrenElements: ["span"],
});

// Disallow the <p> element
sanitizer.removeElement("p");

// Disallow the <script> element
sanitizer.removeElement("script");
// Disallow the <span> element
sanitizer.removeElement("span");

// Log the sanitizer configuration
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

> [!NOTE]
> This configuration is provided for demonstration only.
> Sanitizer configurations should include either just the allowed elements ([`elements`](/en-US/docs/Web/API/SanitizerConfig#elements)) or just the disallowed elements ([`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements)), but not both.
> In this case only the `<div>` element is allowed and all other elements will be removed from the input: so the removed elements have no effect.

#### Results

The final configuration is logged below.

{{EmbedLiveSample("How to disallow elements","100","480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
