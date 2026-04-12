---
title: "URL: host property"
short-title: host
slug: Web/API/URL/host
page-type: web-api-instance-property
browser-compat: api.URL.host
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`host`** property of the {{domxref("URL")}} interface is a string containing the host, which is the {{domxref("URL.hostname", "hostname")}}, and then, if the {{glossary("port")}} of the URL is nonempty, a `":"`, followed by the {{domxref("URL.port", "port")}} of the URL. If the URL does not have a `hostname`, this property contains an empty string, `""`.

This property can be set to change both the hostname and the port of the URL. If the URL's scheme is not [hierarchical](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (which the URL standard calls "[special schemes](https://url.spec.whatwg.org/#special-scheme)"), then it has no concept of a host and setting this property has no effect.

> [!NOTE]
> If the given value for the `host` setter lacks a `port`, the URL's `port` will not change. This can be unexpected as the `host` getter does return a URL-port string, so one might have assumed the setter to always "reset" both.

## Value

A string.

## Examples

```js
let url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

url = new URL("https://developer.mozilla.org:4097/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
