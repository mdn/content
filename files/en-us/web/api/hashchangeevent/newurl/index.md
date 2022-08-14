---
title: HashChangeEvent.newURL
slug: Web/API/HashChangeEvent/newURL
page-type: web-api-instance-property
tags:
  - API
  - HashChangeEvent
  - Property
  - Reference
  - Web API
browser-compat: api.HashChangeEvent.newURL
---
{{APIRef("HTML DOM")}}

The **`newURL`** read-only property of the
{{domxref("HashChangeEvent")}} interface returns the new URL to which the window is
navigating.

## Value

A string.

## Examples

```js
window.addEventListener('hashchange', (event) => {
  console.log(`Hash changed to ${event.newURL}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
