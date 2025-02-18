---
title: "HTMLAnchorElement: host property"
short-title: host
slug: Web/API/HTMLAnchorElement/host
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.host
---

{{ApiRef("HTML DOM")}}

The **`host`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing the host, which is the {{domxref("HTMLAnchorElement.hostname", "hostname")}}, and then, if the {{glossary("port")}} of the URL is nonempty, a `":"`, followed by the {{domxref("HTMLAnchorElement.port", "port")}} of the URL. If the URL does not have a `hostname`, this property contains an empty string, `""`.

See {{domxref("URL.host")}} for more information.

## Value

A string.

## Examples

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";

anchor.href = "https://developer.mozilla.org:443/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org:4097";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
