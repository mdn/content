---
title: "MathMLAnchorElement: username property"
short-title: username
slug: Web/API/MathMLAnchorElement/username
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.username
---

{{APIRef("MathML")}}

The **`username`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing the username component of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`. If the URL does not have a username, this property contains an empty string, `""`.

This property can be set to change the username of the URL. If the URL has no {{domxref("MathMLAnchorElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The username is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.username")}} for more information.

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

you can get the `username` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.username; // returns 'foo'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
