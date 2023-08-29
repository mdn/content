---
title: data-*
slug: Web/SVG/Attribute/data-*
page-type: svg-attribute
browser-compat: svg.attributes.data
---

{{SVGRef}}

The **`data-*`** SVG attributes are called custom data attributes. They let SVG markup and its resulting DOM share information that standard attributes can't, usually for scripting purposes. Their custom data are available via the {{domxref("SVGElement")}} interface of the element the attributes belong to, with the {{domxref("HTMLElement.dataset")}} property.

The `*` can be replaced by any characters allowed in [XML's rules for names](https://www.w3.org/TR/REC-xml/#NT-Name), with the following restrictions:

- Can't start with `xml`.
- No semicolons (`;`, `U+003A`).
- No capital `A` to `Z` letters.

> **Note:** The {{domxref("HTMLElement.dataset")}} property is a {{domxref("DOMStringMap")}} that provides the attribute `data-test-value` via `SVGElement.dataset.testValue`. Hyphen characters (`-`, `U+002D`) are removed and the next letter is capitalized, resulting in the {{Glossary("camelCase")}} format.

You can use this attribute with any SVG element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement")}}
- The {{domxref("HTMLElement.dataset")}} property used to access these attributes from scripts.
- [Using data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
