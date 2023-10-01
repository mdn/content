---
title: "HTMLAnchorElement: username property"
short-title: username
slug: Web/API/HTMLAnchorElement/username
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.username
---

{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.username`** property is a
string containing the username specified before the domain name.

## Value

A string.

## Examples

### Getting the username from an anchor link

```js
// An <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.username; // returns 'anonymous'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
