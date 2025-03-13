---
title: "URL: hostname property"
short-title: hostname
slug: Web/API/URL/hostname
page-type: web-api-instance-property
browser-compat: api.URL.hostname
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`hostname`** property of the {{domxref("URL")}} interface is a string containing either the {{glossary("domain name")}} or {{glossary("IP address")}} of the URL. If the URL does not have a hostname, this property contains an empty string, `""`. IPv4 and IPv6 addresses are normalized, such as stripping leading zeros, and domain names are converted to [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name).

This property can be set to change the hostname of the URL. If the URL's scheme is not [hierarchical](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (which the URL standard calls "[special schemes](https://url.spec.whatwg.org/#special-scheme)"), then it has no concept of a host and setting this property has no effect.

The hostname is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'

url.hostname = "你好.com";
console.log(url.hostname); // Logs: 'xn--6qq79v.com'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
