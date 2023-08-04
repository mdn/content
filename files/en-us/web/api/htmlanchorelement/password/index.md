---
title: "HTMLAnchorElement: password property"
short-title: password
slug: Web/API/HTMLAnchorElement/password
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.password
---

{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.password`** property is a
string containing the password specified before the domain name.

If it is set without first setting the
[`username`](/en-US/docs/Web/API/HTMLAnchorElement/username)
property, it silently fails.

## Value

A string.

## Examples

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> is in the document
const anchor = document.getElementByID("myAnchor");
anchor.password; // returns 'flabada'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
