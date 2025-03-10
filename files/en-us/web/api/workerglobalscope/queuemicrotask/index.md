---
title: "WorkerGlobalScope: queueMicrotask() method"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
page-type: web-api-instance-method
browser-compat: api.queueMicrotask
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`queueMicrotask()`** method of the {{domxref("WorkerGlobalScope")}} interface
queues a microtask to be executed at a safe time prior to control returning to the
browser's event loop.

The microtask is a short function which will run after
the current task has completed its work and when there is no other code waiting to be
run before control of the execution context is returned to the browser's event loop.

This lets your code run without interfering with any other, potentially higher
priority, code that is pending, but before the browser regains control over the
execution context, potentially depending on work you need to complete. You can learn
more about how to use microtasks and why you might choose to do so in our [microtask guide](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide).

The importance of microtasks comes in its ability to perform tasks asynchronously but
in a specific order. See [Using microtasks in JavaScript with `queueMicrotask()`](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) for more details.

Microtasks are especially useful for libraries and frameworks that need to perform
final cleanup or other just-before-rendering tasks.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameters

- `callback`
  - : A {{jsxref("function")}} to be executed when the browser engine determines it is
    safe to call your code. Enqueued microtasks are executed after all pending tasks have
    completed but before yielding control to the browser's event loop.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
queueMicrotask(() => {
  // function contents here
});
```

Taken from the [queueMicrotask spec](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        this._cache[url] = data;
        this._setData(data);
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.queueMicrotask()")}}
- [Polyfill of `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Using microtasks in JavaScript with queueMicrotask()](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchronous JavaScript](/en-US/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask explainer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) by Jake Archibald
