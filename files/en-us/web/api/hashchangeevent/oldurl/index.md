---
title: HashChangeEvent.oldURL
slug: Web/API/HashChangeEvent/oldURL
page-type: web-api-instance-property
tags:
  - API
  - HashChangeEvent
  - Property
  - Reference
  - Web API
browser-compat: api.HashChangeEvent.oldURL
---
{{APIRef("HTML DOM")}}

The **`oldURL`** read-only property of the
{{domxref("HashChangeEvent")}} interface returns the previous URL from which the window
was navigated.

## Value

A string.

## Examples

```js
window.addEventListener('hashchange', (event) => {
  console.log(`Hash changed from ${event.oldURL}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
