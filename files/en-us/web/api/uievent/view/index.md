---
title: UIEvent.view
slug: Web/API/UIEvent/view
tags:
  - API
  - DOM
  - NeedsLiveExample
  - Property
  - Read-only
  - Reference
  - UIEvent
browser-compat: api.UIEvent.view
---
{{APIRef("DOM Events")}}

The **`UIEvent.view`** read-only property returns the
{{domxref("WindowProxy")}} object from which the event was generated. In browsers, this
is the {{ domxref("Window") }} object the event happened in.

## Syntax

```js
var view = event.view;
```

- `view` is a reference to an `AbstractView` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
