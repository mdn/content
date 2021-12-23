---
title: HashChangeEvent.oldURL
slug: Web/API/HashChangeEvent/oldURL
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

## Syntax

```js
let oldEventUrl = event.oldURL;
```

### Value

A {{domxref("DOMString")}}.

## Example

```js
window.addEventListener('hashchange', function(event) {
  console.log('Hash changed from ' + event.oldURL);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
