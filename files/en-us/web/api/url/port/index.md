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
contain an explicit port number, it will be set to `''`.

{{AvailableInWorkers}}

## Syntax

```js
const portNumber = url.port
url.port = newPortNumber
```

### Value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL('https://mydomain.com:80/svn/Repos/');
console.log(url.port); // Logs '80'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
