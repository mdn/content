---
title: GlobalEventHandlers.onabort
slug: Web/API/GlobalEventHandlers/onabort
page-type: web-api-instance-property
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - NeedsContent
  - NeedsHelp
  - NeedsUpdate
  - Property
  - Reference
  - Window
browser-compat: api.GlobalEventHandlers.onabort
---
{{ApiRef("HTML DOM")}}

The **`onabort`** property of the {{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for processing `abort` events.

Currently, only the {{domxref("HTMLAudioElement")}} and {{domxref("HTMLVideoElement")}} interfaces (which inherit the {{domxref("HTMLMediaElement")}} interface) fire the {{domxref("HTMLMediaElement/abort_event", "abort")}} event.

> **Note:** Previously the `abort` event was fired on `Window`, but has since been removed from the standard (see [HTML issue #3525](https://github.com/whatwg/html/issues/3525)).

## Syntax

```js
element.onabort = functionRef;
```

### Value

`functionRef` is a function name or a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function).

## Example

```js
element.onabort = function() {
  alert('Load aborted.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
