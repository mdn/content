---
title: "Sanitizer: removeAttribute() method"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
page-type: web-api-instance-method
browser-compat: api.Sanitizer.removeAttribute
---

{{APIRef("HTML Sanitizer API")}}

The **`removeAttribute()`** method of the {{domxref("Sanitizer")}} interface sets an attribute to be disallowed on all elements.

The specified attribute is added to the list of [`removeAttributes`](/en-US/docs/Web/API/SanitizerConfig#removeattributes_2) in this sanitizer's configuration.
The attribute is removed from the [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes_2) list if present.

Note that to allow/disallow attributes only on specific elements use {{domxref('Sanitizer.allowElement()')}}.

<!-- Check which overrides - global or local setting -->

## Syntax

```js-nolint
removeAttribute(attribute)
```

### Parameters

- `attribute`

  - : A string indicating the name of the attribute to be disallowed globally on elements, or an object with the following properties:

    - `name`
      - : A string containing the name of the attribute.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the attribute, which defaults to `null`.

### Returns

`undefined`.

## Examples

### How to disallow specific attributes

This example shows how `removeAttribute()` is used to specify that an attribute is should be removed from elements.

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

If the `Sanitizer` interface is supported, the code creates a new `Sanitizer` object that initially specifies no attributes or elements. <!-- what happens with empty sanitizer? -->
We then call `removeAttribute()` with the attributes `title` and `mathcolor`.

```js
if ("Sanitizer" in window) {
  // Create sanitizer that allows
  const sanitizer = new Sanitizer({
    removeAttributes: [],
  });

  // Remove the title attribute
  sanitizer.removeAttribute("title");
  // Remove the mathcolor attribute
  sanitizer.removeAttribute("mathcolor");

  // Log the sanitizer configuration
  let sanitizerConfig = sanitizer.get();
  log(JSON.stringify(sanitizerConfig, null, 2));
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The final configuration is logged below.
Note how both attributes are now added to the [`removeAttributes`](2/en-US/docs/Web/API/SanitizerConfig#removeattributes_2) list (these attributes will removed if present on elements when the sanitizer is used).

{{EmbedLiveSample("How to disallow specific attributes","100","480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
