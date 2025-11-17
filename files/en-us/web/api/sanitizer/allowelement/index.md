---
title: "Sanitizer: allowElement() method"
short-title: allowElement()
slug: Web/API/Sanitizer/allowElement
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.allowElement
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`allowElement()`** method of the {{domxref("Sanitizer")}} interface sets that the specified element is allowed in the output when the sanitizer is used.

The element can be specified with arrays of attributes that are allowed or disallowed on elements of that type.
If you need both per-element add-attribute and remove-attribute lists, they must be added in a single call to this method (since if done in two calls, the second call will replace the element definition added in the first call).

## Syntax

```js-nolint
allowElement(element)
```

### Parameters

- `element`
  - : A string indicating the name of the allowed element, or an object with the following properties:
    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : An array indicating the attributes to allow on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as an object with the following properties:
        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

    - `removeAttributes` {{optional_inline}}
      - : An array indicating the attributes to remove on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as an object with the following properties:
        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

### Return value

`true` if the operation changed the configuration to allow the element, and `false` if the configuration already allowed the element.

Note that `false` might be returned if the internal configuration:

- defines an [`elements`](/en-US/docs/Web/API/SanitizerConfig#elements) array array and the element is already present (it does not need to be added again)
- instead defines the [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) array and the specified element is not present (and is hence already not filtered)

## Examples

### How to allow elements

This example shows how `allowElement()` is used to add an element to the sanitizer's [`elements` configuration](/en-US/docs/Web/API/SanitizerConfig#elements) (the list of allowed elements).

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
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

The code first creates a new `Sanitizer` object that initially allows {{htmlelement("div")}} and {{htmlelement("script")}} elements.
It then calls `allowElement()` to add a {{htmlelement("p")}} element specified as a string parameter, and then again to add a {{htmlelement("span")}} element specified as an object.
We then get and log the configuration.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: ["div", "script"],
});

// Allow <p> specifying a string
sanitizer.allowElement("p");

// Allow <span> specifying an object
sanitizer.allowElement({ name: "span" });

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
This includes the original elements (`<div>` and `<script>`) and the two added with `allowElement()` (`<p>` and `<span>`).

{{EmbedLiveSample("How to allow elements","100","480px")}}

### Allowing elements that are already allowed or removed

This example shows the effect of using `allowElement()` to add elements that are already allowed, or that are in the configuration as "to be removed".

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
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

The code first creates a new `Sanitizer` object that initially allows {{htmlelement("div")}} elements (removing attributes other than `id`) and also replaced {{htmlelement("span")}} elements with any child elements.

It then calls `allowElement()`, firstly to add a {{htmlelement("div")}} element that removes `style` attributes.
Since the `<div>` element is already allowed, it is removed from the [`elements` configuration](/en-US/docs/Web/API/SanitizerConfig#elements) and the `<div>` element definition is appended.

A {{htmlelement("span")}} element is then added to the allow list, which removes it from the [`replaceWithChildrenElements` configuration list](/en-US/docs/Web/API/SanitizerConfig#replacewithchildrenelements).

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create sanitizer using SanitizerConfig
const sanitizer = new Sanitizer({
  elements: [{ name: "div", attributes: [{ name: "id" }] }],
  replaceWithChildrenElements: ["span"],
});

// Allow <div> elements.
// Allow id elements but strip their style attributes
sanitizer.allowElement({
  name: "div",
  removeAttributes: ["style"],
});

// Allow <span> elements
sanitizer.allowElement("span");

let sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Results

The final configuration is logged, and is shown below.
From the log we can see that the original filter for the `<div>` element has been removed and the new definition appended to the `elements` list.
Adding the `<span>` element to the `elements` list has removed it from the `replaceWithChildrenElements` list.

{{EmbedLiveSample("Allowing elements that are already allowed or removed","100","480px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
