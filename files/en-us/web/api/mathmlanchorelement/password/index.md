---
title: "MathMLAnchorElement: password property"
short-title: password
slug: Web/API/MathMLAnchorElement/password
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.password
---

{{APIRef("MathML")}}

The **`password`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing the password component of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`. If the URL does not have a password, this property contains an empty string, `""`.

This property can be set to change the password of the URL. If the URL has no {{domxref("MathMLAnchorElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The password is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.password")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://foo:bar@example.com#examples"> ... </a>
</math>
```

you can get the `password` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.password; // returns 'bar'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
