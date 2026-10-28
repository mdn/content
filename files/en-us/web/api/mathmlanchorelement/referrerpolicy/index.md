---
title: "MathMLAnchorElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/MathMLAnchorElement/referrerPolicy
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.MathMLAnchorElement.referrerPolicy
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`referrerPolicy`** property of the {{domxref("MathMLAnchorElement")}} interface is a string defining how much of the [referrer](/en-US/docs/Web/HTTP/Reference/Headers/Referer) to send when following the link, and under what circumstances.

It reflects the `referrerpolicy` attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

## Value

A string; see the [`<a>` element `referrerpolicy` attribute](/en-US/docs/Web/MathML/Reference/Element/a#referrerpolicy) for the possible values.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" referrerpolicy="no-referrer"
    >...</a
  >
</math>
```

you can get the `referrerPolicy` value of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.referrerPolicy; // "no-referrer"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
