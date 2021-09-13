---
title: PageTransitionEvent.persisted
slug: Web/API/PageTransitionEvent/persisted
tags:
  - API
  - PageTransitionEvent
  - Property
  - Reference
  - Web API
browser-compat: api.PageTransitionEvent.persisted
---
{{APIRef("HTML DOM")}}

The **`persisted`** read-only property indicates if a webpage is loading from a cache.

## Syntax

```js
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    console.log('Page was loaded from cache.');
  }
});
```

### Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
