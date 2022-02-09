---
title: 'AbortSignal: abort event'
slug: Web/API/AbortSignal/abort_event
tags:
  - API
  - Event
  - Reference
browser-compat: api.AbortSignal.abort_event
---
{{APIRef("DOM")}}

The **`abort`** event of the {{domxref("AbortSignal")}} is fired when the associated request is aborted, i.e. using {{domxref("AbortController.abort()")}}.


## Examples

In the following snippets, we create a new `AbortController` object, and get its {{domxref("AbortSignal")}} (available using the `signal` property). Later on we check whether or not the signal has been aborted using an event handler property, 

You can detect the `abort` event using an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
var controller = new AbortController();
var signal = controller.signal;

signal.addEventListener('abort', () => { console.log('Request aborted'); });
```

Or use the [`onabort`](/en-US/docs/Web/API/AbortSignal/onabort) event handler property:

```js
var controller = new AbortController();
var signal = controller.signal;

signal.onabort = () => { console.log('Request aborted'); };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
