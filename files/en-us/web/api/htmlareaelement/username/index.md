---
title: "HTMLAreaElement: username property"
short-title: username
slug: Web/API/HTMLAreaElement/username
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.username
---

{{ApiRef("HTML DOM")}}

The **`username`** property of the {{domxref("HTMLAreaElement")}} interface is a string containing the username component of the `<area>` element's `href`. If the URL does not have a username, this property contains an empty string, `""`.

This property can be set to change the username of the URL. If the URL has no {{domxref("HTMLAreaElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The username is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.username")}} for more information.

## Value

A string.

## Examples

### Getting the username from an area link

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.username; // returns 'anonymous'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
