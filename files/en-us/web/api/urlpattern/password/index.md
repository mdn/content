---
title: "URLPattern: password property"
short-title: password
slug: Web/API/URLPattern/password
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.URLPattern.password
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`password`** read-only property of the {{domxref("URLPattern")}} interface is a
string containing the pattern used to match the password part
of a URL. This value may differ from the input to the constructor due to
normalization.

## Value

A string.

## Examples

The below example creates a {{domxref("URLPattern")}} object with
`correct-horse-battery{-staple}?` for the `password` part. This pattern matches
the passwords `correct-horse-battery` and `correct-horse-battery-staple`.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
