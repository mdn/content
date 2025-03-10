---
title: "HTMLAnchorElement: hostname property"
short-title: hostname
slug: Web/API/HTMLAnchorElement/hostname
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.hostname
---

{{ApiRef("HTML DOM")}}

The **`hostname`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing either the {{glossary("domain name")}} or {{glossary("IP address")}} of the `<a>` element's `href`. If the URL does not have a hostname, this property contains an empty string, `""`. IPv4 and IPv6 addresses are normalized, such as stripping leading zeros, and domain names are converted to [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name).

See {{domxref("URL.hostname")}} for more information.

## Value

A string.

## Examples

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.hostname; // returns 'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
