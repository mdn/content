---
title: "URL: password property"
short-title: password
slug: Web/API/URL/password
page-type: web-api-instance-property
browser-compat: api.URL.password
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`password`** property of the {{domxref("URL")}} interface is a string containing the password component of the URL. If the URL does not have a password, this property contains an empty string, `""`.

This property can be set to change the password of the URL. If the URL has no {{domxref("URL.host", "host")}} or its scheme is `file:`, then setting this property has no effect.

The password is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

## Value

A string.

## Examples

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password",
);
console.log(url.password); // Logs "flabada"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
