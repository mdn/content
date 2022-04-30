---
title: URL.port
slug: Web/API/URL/port
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
  - port
browser-compat: api.URL.port
---
{{ApiRef("URL API")}}

The **`port`** property of the {{domxref("URL")}} interface is
a {{domxref("USVString")}} containing the port number of the URL. If the URL does not
contain an explicit port number, or if the explicit port number is the default port number for the given scheme,
`port` will be set to `''`.

{{AvailableInWorkers}}

## Value

A {{domxref("USVString")}}.

## Examples

```js
const url1 = new URL('https://mydomain.com:4043/svn/Repos/');
console.log(url1.port); // Logs '4043'

const url2 = new URL('https://mydomain.com/svn/Repos/');
console.log(url2.port); // Logs '' as it the default port is used

const url3 = new URL('https://mydomain.com:443/svn/Repos/');
console.log(url3.port); // Logs '' as 443 is the default port.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
