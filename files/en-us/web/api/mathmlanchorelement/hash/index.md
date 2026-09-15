---
title: "MathMLAnchorElement: hash property"
short-title: hash
slug: Web/API/MathMLAnchorElement/hash
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.hash
---

{{APIRef("MathML")}}

The **`hash`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing a `"#"` followed by the fragment identifier of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

See {{domxref("URL.hash")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples">...</a>
</math>
```

you can get the `hash` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.hash; // '#examples'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
