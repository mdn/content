---
title: Sanitizer
slug: Web/API/Sanitizer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Sanitizer
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`Sanitizer`** interface of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) defines a configuration object that specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an {{domxref("Element")}} or {{domxref("ShadowRoot")}}, or when parsing an HTML string into a {{domxref("Document")}}.

A `Sanitizer` instance is effectively a wrapper around a {{domxref("SanitizerConfig")}}, and can be passed as a configuration alternative in the same [sanitization methods](/en-US/docs/Web/API/HTML_Sanitizer_API#sanitization_methods):

- {{domxref("Element/setHTML","setHTML()")}} or {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("Element")}}.
- {{domxref("ShadowRoot/setHTML","setHTML()")}} or {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("ShadowRoot")}}.
- [`Document.parseHTML()`](/en-US/docs/Web/API/Document/parseHTML_static) or [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static) static methods.

Note that `Sanitizer` is expected to be more efficient to reuse and modify when needed.

## Constructors

- {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} {{experimental_inline}}
  - : Creates and returns a `Sanitizer` object, optionally with custom sanitization behavior defined in a {{domxref('SanitizerConfig')}}.

## Instance methods

- {{domxref('Sanitizer.allowElement()')}} {{experimental_inline}}
  - : Sets an element as allowed by the sanitizer, optionally with an array of attributes that are allowed or disallowed.
- {{domxref('Sanitizer.get()')}} {{experimental_inline}}
  - : Returns the current `Sanitizer` configuration as an {{domxref('SanitizerConfig')}} dictionary instance.
- {{domxref('Sanitizer.removeElement()')}} {{experimental_inline}}
  - : Sets an element to be removed by the sanitizer.
- {{domxref('Sanitizer.removeUnsafe()')}} {{experimental_inline}}
  - : Updates the sanitizer configuration so that it will remove any XSS-unsafe HTML.
- {{domxref('Sanitizer.replaceElementWithChildren()')}} {{experimental_inline}}
  - : Sets an element to be replaced by its child HTML elements.
- {{domxref('Sanitizer.allowAttribute()')}} {{experimental_inline}}
  - : Sets an attribute as allowed on any element.
- {{domxref('Sanitizer.removeAttribute()')}} {{experimental_inline}}
  - : Sets an attribute to be removed from any element.
- {{domxref('Sanitizer.setComments()')}} {{experimental_inline}}
  - : Sets whether comments will be allowed or removed by the sanitizer.
- {{domxref('Sanitizer.setDataAttributes()')}} {{experimental_inline}}
  - : Sets whether data attributes on elements will be allowed or removed by the sanitizer.

## Examples

For more examples see the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and the individual methods.
Below we show a few examples of how you might create different sanitizer configurations.

### Creating a default sanitizer

The default sanitizer is constructed as shown below.

```js
const sanitizer = new Sanitizer();
```

The XSS-safe [sanitization methods](/en-US/docs/Web/API/HTML_Sanitizer_API#sanitization_methods) create the same sanitizer automatically if no options are passed.

### Creating an empty sanitizer

To create an empty sanitizer, pass an empty object to the constructor.
The resulting sanitizer configuration is shown below.

```js
const sanitizer = new Sanitizer({});
/*
{
  "attributes": [],
  "comments": true,
  "dataAttributes": true,
  "elements": [],
  "removeAttributes": [],
  "removeElements": [],
  "replaceWithChildrenElements": []
}
*/
```

### Creating an "allow" sanitizer

This example shows how you might create an "allow sanitizer": a sanitizer that allows only a subset of attributes and elements.

The code first uses the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor to create a `Sanitizer`, specifying a {{domxref("SanitizerConfig")}} that allows the element `<div>`, `<p>` and `<script>`.

The example then uses `allowElement()` to further allow `<span>` elements, `allowAttribute()` to allow the `id` attribute on any element, and `replaceElementWithChildren()` method to set that any `<b>` elements should be replaced by their inner content (this is a kind of "allow" in that you are explicitly specifying some entities to keep).
Lastly we specify that comments should be retained.

```js
const sanitizer = new Sanitizer({ elements: ["div", "p", "script"] });
sanitizer.allowElement("span");
sanitizer.allowAttribute("id");
sanitizer.replaceElementWithChildren("b");
sanitizer.setComments(true);
```

### Creating a "remove" sanitizer

This example shows how you might create a "remove sanitizer", specifying items to remove from the input.

The code first uses the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor to create a `Sanitizer`, specifying a {{domxref("SanitizerConfig")}} that removes the element `<span>` and `<script>`.
We then use `removeElement()` to add `<h6>` to the array of elements to be removed, and `removeAttribute()` to remove `lang` from the attributes list. We also remove comments.

```js
const sanitizer = new Sanitizer({ removeElements: ["span", "script"] });
sanitizer.removeElement("h6");
sanitizer.removeAttribute("lang");
sanitizer.setComments(false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
