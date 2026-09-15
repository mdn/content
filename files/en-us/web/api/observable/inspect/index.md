---
title: "Observable: inspect() method"
short-title: inspect()
slug: Web/API/Observable/inspect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.inspect
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`inspect()`** method of the {{domxref("Observable")}} interface returns a new observable that mirrors the source observable and calls callbacks to inspect its values and subscription lifecycle.

## Syntax

```js-nolint
inspect()
inspect(inspector)
```

### Parameters

- `inspector` {{optional_inline}}
  - : An object containing any of the following callback functions:
    - `next` {{optional_inline}}
      - : A function called with each source value before it is forwarded to observers.
    - `error` {{optional_inline}}
      - : A function called with the source's error before it is forwarded to observers.
    - `complete` {{optional_inline}}
      - : A function called without arguments when the source completes, before completion is forwarded to observers.
    - `subscribe` {{optional_inline}}
      - : A function called without arguments when the returned observable's subscription starts, before it subscribes to the source.
    - `abort` {{optional_inline}}
      - : A function called with the abort reason when all observers unsubscribe from the returned observable. It is not called when the source completes or errors.

    Alternatively, `inspector` can be a function, which is equivalent to passing an object with that function as its `next` callback. All callback return values are ignored.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it emits the source observable's values and forwards its completion or error, calling the corresponding inspector callbacks before forwarding each notification.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

If a `subscribe`, `next`, `error`, or `complete` callback throws an exception, the returned observable errors with that exception. A thrown exception from `subscribe` prevents subscription to the source. An exception thrown by `abort` is reported to the global object.

The callbacks run synchronously. Returned promises are not awaited, and their rejections are not handled by `inspect()`.

## Examples

### Using inspect()

This example counts the first three button clicks. The `inspect()` callbacks log the subscription's start, each event before the count is updated, and the final count when the subscription completes.

```html hidden live-sample___basic-inspect
<button>Click me</button>
<p>Click count: 0</p>
```

```js live-sample___basic-inspect
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn
  .when("click")
  .take(3)
  .inspect({
    subscribe: () => {
      console.log(`Subscription started`);
    },
    next: (e) => {
      console.log(`Count value before click: ${countValue}`);
      console.log(`Event type: ${e.type}`);
    },
    complete: () => {
      console.log(`Final count value: ${countValue}`);
    },
  })
  .subscribe({
    next: increment,
    complete: () => {
      para.textContent = `No more clicks!`;
    },
  });
```

Open the browser's console and click the button three times to see the logged notifications.

{{EmbedLiveSample("basic-inspect", "100%", "80px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
