---
title: "HTMLAnchorElement: password property"
short-title: password
slug: Web/API/HTMLAnchorElement/password
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.password
---

{{ApiRef("HTML DOM")}}

The **`password`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing the password component of the `<a>` element's `href`. If the URL does not have a password, this property contains an empty string, `""`.

This property can be set to change the password of the URL. If the URL has no {{domxref("HTMLAnchorElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The password is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.password")}} for more information.

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
