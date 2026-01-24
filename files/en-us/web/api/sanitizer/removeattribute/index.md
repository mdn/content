---
title: "Sanitizer: removeAttribute() method"
short-title: removeAttribute()
slug: Web/API/Sanitizer/removeAttribute
page-type: web-api-instance-method
browser-compat: api.Sanitizer.removeAttribute
---

{{APIRef("HTML Sanitizer API")}}

The **`removeAttribute()`** method of the {{domxref("Sanitizer")}} interface sets an attribute to be removed from all elements when the sanitizer is used.

The method can be used with either an [allow configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#allow_configurations) or a [remove configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#remove_configurations).
If used with a remove configuration, the specified attribute is added to the `removeAttributes` array.
If used with an allow configuration, the attribute is removed from the `attributes` array (if present).

Note that to allow/disallow attributes only on specific elements use {{domxref('Sanitizer.allowElement()')}}.

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

### Return value

`true` if the operation changed the configuration to disallow the attribute, and `false` if the attribute was already disallowed.

Note that `false` might be returned if the internal configuration:

- defines a [`removeAttributes`](/en-US/docs/Web/API/SanitizerConfig#removeattributes) array that already contains the specified attribute (and is hence already filtered)
- instead defines a [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes) array that already omits the attribute (and is hence already disallowed)

## Examples

### How to disallow specific attributes

This example shows how `removeAttribute()` is used to specify that an attribute is should be removed from elements.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
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

The code first creates a new `Sanitizer` object that initially specifies no attributes or elements.
We then call `removeAttribute()` with the attributes `title` and `mathcolor`.

```js hidden
if ("Sanitizer" in window) {
```

```js
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
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Results

The final configuration is logged below.
Note how both attributes are now added to the [`removeAttributes`](/en-US/docs/Web/API/SanitizerConfig#removeattributes_2) list (these attributes will removed if present on elements when the sanitizer is used).

{{EmbedLiveSample("How to disallow specific attributes","100","360px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
