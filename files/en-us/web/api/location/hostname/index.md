---
title: "Location: hostname property"
short-title: hostname
slug: Web/API/Location/hostname
page-type: web-api-instance-property
browser-compat: api.Location.hostname
---

{{ApiRef("URL API")}}

The **`hostname`** property of the {{domxref("Location")}} interface is a string containing either the {{glossary("domain name")}} or {{glossary("IP address")}} of the location URL. If the URL does not have a hostname, this property contains an empty string, `""`. IPv4 and IPv6 addresses are normalized, such as stripping leading zeros, and domain names are converted to [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name).

See {{domxref("URL.hostname")}} for more information.

## Value

A string.

## Examples

```js
console.log(window.location.hostname);
// developer.mozilla.org

const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/";
console.log(anchor.hostname === "developer.mozilla.org");
// The port number is not included in hostname
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
