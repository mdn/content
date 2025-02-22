---
title: "HTMLAreaElement: host property"
short-title: host
slug: Web/API/HTMLAreaElement/host
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.host
---

{{ApiRef("HTML DOM")}}

The **`host`** property of the {{domxref("HTMLAreaElement")}} interface is a string containing the host, which is the {{domxref("HTMLAreaElement.hostname", "hostname")}}, and then, if the {{glossary("port")}} of the URL is nonempty, a `":"`, followed by the {{domxref("HTMLAreaElement.port", "port")}} of the URL. If the URL does not have a `hostname`, this property contains an empty string, `""`.

See {{domxref("URL.host")}} for more information.

## Value

A string.

## Examples

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";
// The port number is not included because 443 is the scheme's default port

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
