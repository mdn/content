---
title: Window.self
slug: Web/API/Window/self
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Property
  - Read-only
  - Reference
  - Window
browser-compat: api.Window.self
---
{{APIRef}}

The **`Window.self`** read-only property returns the window itself, as a {{domxref("WindowProxy")}}. It can be used with dot notation on a `window` object (that is, `window.self`) or standalone (`self`). The advantage of the standalone notation is that a similar notation exists for non-window contexts, such as in {{domxref("Worker", "Web Workers", "", 1)}}. By using `self`, you can refer to the global scope in a way that will work not only in a window context (`self` will resolve to `window.self`) but also in a worker context (`self` will then resolve to {{domxref("WorkerGlobalScope.self")}}).

## Value

A {{domxref("WindowProxy")}} object.

## Examples

Uses of `window.self` like the following could just as well be replaced by `window`.

```js
if (window.parent.frames[0] !== window.self) {
    // this window is not the first frame in the list
}
```

Furthermore, when executing in the active document of a browsing context, `window` is a reference to the current global object and thus all of the following are equivalent:

```js
const w1 = window;
const w2 = self;
const w3 = window.window;
const w4 = window.self;
// w1, w2, w3, w4 all strictly equal, but only w2 will function in workers
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Its `Worker` equivalent, {{domxref("WorkerGlobalScope.self")}}.
