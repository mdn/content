---
title: "Sanitizer: removeUnsafe() method"
short-title: removeUnsafe()
slug: Web/API/Sanitizer/removeUnsafe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.removeUnsafe
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`removeUnsafe()`** method of the {{domxref("Sanitizer")}} interface configures the sanitizer configuration so that it will remove all elements, attributes, and event handler content attributes that are considered XSS-unsafe by the browser.

The method can be called to make any custom configuration XSS-safe.
Note that if you're using the sanitizer with one of the "safe" HTML setters, such as {{domxref("Element.setHTML()")}} and {{domxref("ShadowRoot.setHTML()")}}, you do not need to call this method to make the sanitizer safe.
When used in these setters the method is called implicitly, without modifying the `Sanitizer` instance that is passed.

## Syntax

```js-nolint
removeUnsafe()
```

### Parameters

None.

### Return value

`true` if the operation removed any elements, attributes, or event handler content attributes that are considered XSS-unsafe, and `false` if no elements or attributes were removed.

## Examples

### Basic usage

The following code shows how `removeUnsafe()` is used.

```js
// Create sanitizer.
const sanitizer = new Sanitizer(/* Some configuration */);

// Make the configuration XSS-safe
sanitizer.removeUnsafe();
```

### Making a sanitizer configuration safe

This example demonstrates how calling `removeUnsafe()` makes the sanitizer configuration XSS-safe.

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
  logElement.textContent += text;
}
```

#### JavaScript

The code first creates a new `Sanitizer` object that allows the safe element {{htmlelement("p")}}, the unsafe elements {{htmlelement("script")}} and {{htmlelement("iframe")}}, and the unsafe `onwebkitanimationend` event handler attribute.

The code then calls `removeUnsafe()` on the sanitizer and logs its configuration.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer that allows
const sanitizer = new Sanitizer({
  elements: ["p", "script"],
  attributes: ["onwebkitanimationend"],
  replaceWithChildrenElements: ["iframe"],
});

// Make the sanitizer safe!
sanitizer.removeUnsafe();

// Log the sanitizer configuration
const sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Results

The resulting configuration is shown below.
Note how the unsafe elements and attributes have been removed from the "allow" lists to the corresponding "remove" lists.
In this case we still have {{htmlelement("p")}} in the allowed elements, so only `<p>` elements in the input will be imported when the sanitizer is used.

{{EmbedLiveSample("Making a sanitizer configuration safe","100","480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
