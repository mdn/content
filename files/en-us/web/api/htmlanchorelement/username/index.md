---
title: "HTMLAnchorElement: username property"
short-title: username
slug: Web/API/HTMLAnchorElement/username
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.username
---

{{ApiRef("HTML DOM")}}

The **`username`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing the username component of the `<a>` element's `href`. If the URL does not have a username, this property contains an empty string, `""`.

This property can be set to change the username of the URL. If the URL has no {{domxref("HTMLAnchorElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The username is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.username")}} for more information.

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
