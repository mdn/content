---
title: Sanitizer
slug: Web/API/Sanitizer
page-type: web-api-interface
browser-compat: api.Sanitizer
---

{{APIRef("HTML Sanitizer API")}}

The **`Sanitizer`** interface of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) defines a configuration object that specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an {{domxref("Element")}} or {{domxref("ShadowRoot")}}, or when parsing an HTML string into a {{domxref("Document")}}.

## Constructors

- {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}}
  - : Creates and returns a `Sanitizer` object, optionally with custom sanitization behavior defined in a {{domxref('SanitizerConfig')}}.

## Instance methods

- {{domxref('Sanitizer.allowElement()')}}
  - : Sets an element as allowed by the sanitizer, optionally with an array of attributes that are allowed or disallowed.
- {{domxref('Sanitizer.get()')}}
  - : Returns the current `Sanitizer` configuration as a {{domxref('SanitizerConfig')}} dictionary instance.
- {{domxref('Sanitizer.removeElement()')}}
  - : Sets an element to be removed by the sanitizer.
- {{domxref('Sanitizer.removeUnsafe()')}}
  - : Updates the sanitizer configuration so that it will remove any XSS-unsafe HTML.
- {{domxref('Sanitizer.replaceElementWithChildren()')}}
  - : Sets an element to be replaced by its child HTML elements.
- {{domxref('Sanitizer.allowAttribute()')}}
  - : Sets an attribute as allowed on any element.
- {{domxref('Sanitizer.removeAttribute()')}}
  - : Sets an attribute to be removed from any element.
- {{domxref('Sanitizer.setComments()')}}
  - : Sets whether comments will be allowed or removed by the sanitizer.
- {{domxref('Sanitizer.setDataAttributes()')}}
  - : Sets whether data attributes on elements will be allowed or removed by the sanitizer.

## Description

A `Sanitizer` is a reusable configuration object that specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an {{domxref("Element")}} or {{domxref("ShadowRoot")}}, or when parsing an HTML string into a {{domxref("Document")}}.
It can be used with the following [sanitization methods](/en-US/docs/Web/API/HTML_Sanitizer_API#sanitization_methods):

- Safe methods: {{domxref("Element.setHTML()")}}, {{domxref("ShadowRoot.setHTML()")}}, and [`Document.parseHTML()`](/en-US/docs/Web/API/Document/parseHTML_static).
- Unsafe methods: {{domxref("Element.setHTMLUnsafe()")}}, {{domxref("ShadowRoot.setHTMLUnsafe()")}}, and [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static).

A `Sanitizer` instance can be constructed from a {{domxref("SanitizerConfig")}}, and is effectively a wrapper around that object. A `Sanitizer` and a `SanitizerConfig` can be used with the same methods, but if you're using the same configuration multiple times, it's expected to be more efficient to use a `Sanitizer` and modify it when you need to.
If no `SanitizerConfig` is passed to the constructor, the sanitizer is created with the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration), which removes XSS-unsafe elements and attributes, along with other elements and attributes that can potentially be used in other attacks, such as clickjacking and spoofing.

Note that any `Sanitizer` can be made XSS-safe by calling {{domxref("Sanitizer.removeUnsafe()")}}, but other potentially dangerous elements and attributes — which are removed by the default configuration — may still be present.

### Using `Sanitizer` with the sanitization methods

The default `Sanitizer` configuration is automatically used if no `Sanitizer` is passed to {{domxref("Element.setHTML")}} or the other safe sanitization methods.
This is a reasonable default as it restricts the attack surface while still allowing the majority of use cases.

If a custom sanitizer is passed to these methods, any XSS-unsafe elements and attributes allowed by the sanitizer would also be removed.
Note that although this removes the same elements as {{domxref("Sanitizer.removeUnsafe()")}}, the passed `Sanitizer` is not actually changed by the operation: it would be "unsafe" if used in an unsafe method.

The unsafe sanitization methods perform no sanitization by default.
However, as noted, you can call {{domxref("Sanitizer.removeUnsafe()")}} to remove any XSS-unsafe elements (if you want to use the default configuration, you should use the safe methods).

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
The resulting sanitizer configuration is a [remove configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#remove_configurations) with empty arrays.

```js
const sanitizer = new Sanitizer({});
console.log(sanitizer.get());
/*
{
  "comments": true,
  "removeAttributes": [],
  "removeElements": []
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
