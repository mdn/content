---
title: "Sanitizer: replaceElementWithChildren() method"
short-title: replaceElementWithChildren()
slug: Web/API/Sanitizer/replaceElementWithChildren
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.replaceElementWithChildren
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`replaceElementWithChildren()`** method of the {{domxref("Sanitizer")}} interface sets an element to be replaced by its child HTML elements when the sanitizer is used.
The is primarily used for stripping styles from text.

The specified element, along with its namespace, is added to the list of [`replaceWithChildrenElements`](/en-US/docs/Web/API/SanitizerConfig#replacewithchildrenelements) in this sanitizer's configuration.
The element is removed from the [`elements`](/en-US/docs/Web/API/SanitizerConfig#elements) or [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) lists if present.

## Syntax

```js-nolint
replaceElementWithChildren(element)
```

### Parameters

- `element`
  - : A string indicating the name of the element to be replaced, or an object with the following properties:
    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.

### Returns

None (`undefined`).

## Examples

### Basic usage

This example shows the basic usage of the method, configuring a sanitizer that replaces the `<em>` element in inputs with its child content.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Replace <em> elements with their innerHTML
sanitizer.replaceElementWithChildren("em");
```

### How to strip styles from text

This example shows how `replaceElementWithChildren()` can be used to strip styles from text.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 480px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

#### JavaScript

The code first creates a new `Sanitizer` object that initially allows {{htmlelement("p")}}, {{htmlelement("em")}}, and {{htmlelement("strong")}} elements.
We then call `replaceElementWithChildren()` on the sanitizer specifying that `<strong>` elements should be replaced.

The code defines a string that has `<strong>` elements and uses {{domxref("Element.setHTML()")}} with the sanitizer to inject the string.
The original string, the sanitized HTML from the element, and the sanitizer are logged.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["p", "em", "strong"],
});

// Replace the <strong> element
sanitizer.replaceElementWithChildren("strong");

const unsanitizedString = `<p>This is a with <strong>important</strong> text <em>highlighted</em>.</p>`;
log(`unsanitizedHTMLString:\n ${unsanitizedString}`);

// Create a <div> element
const divElement = document.createElement("div");

divElement.setHTML(unsanitizedString, { sanitizer });
log(`\n\nsanitizedHTML:\n ${divElement.innerHTML}`);

// Log the sanitizer configuration
const sanitizerConfig = sanitizer.get();
log(`\n\nsanitizerConfig:\n ${JSON.stringify(sanitizerConfig, null, 2)}`);
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Results

The original unsanitized HTML string, the sanitized string from the element, and the sanitizer are logged below.
Note that the `<strong>` styling is stripped from the text, but the `<em>` element is not.
Note also that the `<strong>` element was originally in the `elements` list in the configuration, but was removed when it was added to the `replaceWithChildrenElements` list.

{{EmbedLiveSample("How to strip styles from text","100","520px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
