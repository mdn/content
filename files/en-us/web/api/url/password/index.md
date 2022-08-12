---
title: URL.password
slug: Web/API/URL/password
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - URL
  - URL API
  - password
browser-compat: api.URL.password
---
{{ApiRef("URL API")}}

The **`password`** property of the {{domxref("URL")}} interface
is a string containing the password specified before the domain name.

If it is set without first setting the {{domxref("URL.username", "username")}}
property, it silently fails.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password');
console.log(url.password) // Logs "flabada"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
