---
title: "HTMLAreaElement: password property"
short-title: password
slug: Web/API/HTMLAreaElement/password
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.password
---

{{ApiRef("HTML DOM")}}

The **`password`** property of the {{domxref("HTMLAreaElement")}} interface is a string containing the password component of the `<area>` element's `href`. If the URL does not have a password, this property contains an empty string, `""`.

This property can be set to change the password of the URL. If the URL has no {{domxref("HTMLAreaElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The password is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.password")}} for more information.

## Value

A string.

## Examples

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> is in the document
const area = document.getElementByID("myArea");
area.password; // returns 'flabada'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
