---
title: data-*
slug: Web/MathML/Reference/Global_attributes/data-*
page-type: mathml-attribute
browser-compat: mathml.global_attributes.data_attributes
sidebar: mathmlref
---

The **`data-*`** MathML attributes are called custom data attributes. They let MathML markup and its resulting DOM share information that standard attributes can't, usually for scripting purposes. Their custom data are available via the {{domxref("MathMLElement")}} interface of the element the attributes belong to, with the {{domxref("MathMLElement.dataset")}} property.

The `*` can be replaced by any characters allowed in [XML's rules for names](https://www.w3.org/TR/xml/#NT-Name), with the following restrictions:

- Can't start with `xml`.
- No semicolons (`;`, `U+003A`).
- No capital `A` to `Z` letters.

> [!NOTE]
> The {{domxref("MathMLElement.dataset")}} property is a {{domxref("DOMStringMap")}} that provides the attribute `data-test-value` via `MathMLElement.dataset.testValue`. Hyphen characters (`-`, `U+002D`) are removed and the next letter is capitalized, resulting in the {{Glossary("camel_case", "camel case")}} format.

You can use this attribute with any MathML element.

## Example

```html
<math>
  <msup data-formula="euler" data-value="-1">
    <mi>e</mi>
    <mi>iπ</mi>
  </msup>
  <mo>+</mo>
  <mn>1</mn>
  <mo>=</mo>
  <mn>0</mn>
</math>
```

```js
const msupElement = document.querySelector("msup");
console.log(msupElement.dataset.formula); // "euler"
console.log(msupElement.dataset.value); // "-1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MathMLElement")}}
- The {{domxref("MathMLElement.dataset")}} property used to access these attributes from scripts.
- [Using data attributes](/en-US/docs/Web/HTML/How_to/Use_data_attributes)
