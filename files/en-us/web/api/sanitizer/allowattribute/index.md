---
title: "Sanitizer: allowAttribute() method"
short-title: allowAttribute()
slug: Web/API/Sanitizer/allowAttribute
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.allowAttribute
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`allowAttribute()`** method of the {{domxref("Sanitizer")}} interface sets an attribute to be allowed on all elements when the sanitizer is used.

Note that to allow/disallow attributes only on specific elements use {{domxref('Sanitizer.allowElement()')}}.

## Syntax

```js-nolint
allowAttribute(attribute)
```

### Parameters

- `attribute`
  - : A string indicating the name of the attribute to be allowed globally on elements, or an object with the following properties:
    - `name`
      - : A string containing the name of the attribute.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the attribute, which defaults to `null`.

### Return value

`true` if the operation changed the configuration to allow the attribute, and `false` if the configuration already allowed the attribute.

Note that `false` might be returned if the internal configuration:

- defines an [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes) array and the attribute is already present (it does not need to be added again)
- instead defines the [`removeAttributes`](/en-US/docs/Web/API/SanitizerConfig#removeattributes) array and the specified attribute is not present (and is hence already allowed)
- [`dataAttributes`](/en-US/docs/Web/API/SanitizerConfig#dataattributes) is set `true`, but a `data-*` attribute is passed.

## Examples

### How to allow specific attributes on elements

This example shows how `allowAttribute()` is used to specify that an attribute is allowed on elements.

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

The code first creates a new `Sanitizer` object that initially allows no attributes.
We then call `allowAttribute()` with the attributes `title` and `mathcolor`.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create an allow sanitizer
const sanitizer = new Sanitizer({
  attributes: [],
});

// Allow the "title" attribute
sanitizer.allowAttribute("title");
// Allow the "mathcolor" attribute
sanitizer.allowAttribute("mathcolor");

// Log the sanitizer configuration
let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Results

The final configuration is logged below.
Note how both attributes are now added to the [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes_2) list (other attributes will not be allowed on elements when the sanitizer is used).

{{EmbedLiveSample("How to allow specific attributes on elements","100","480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
