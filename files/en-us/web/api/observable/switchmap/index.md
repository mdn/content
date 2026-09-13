---
title: "Observable: switchMap() method"
short-title: switchMap()
slug: Web/API/Observable/switchMap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.switchMap
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`switchMap()`** method of the {{domxref("Observable")}} interface returns a new observable that maps each value of the source observable to an inner observable and emits values from only the latest inner observable.

## Syntax

```js-nolint
switchMap(mapper)
```

### Parameters

- `mapper`
  - : A function to execute for each value emitted by the source observable. It must return a value that can be converted to an observable by {{domxref("Observable.from_static", "Observable.from()")}}: an {{domxref("Observable")}}, a {{jsxref("Promise")}}, an iterable object, or an async iterable object. The function is called with the following arguments:
    - `value`
      - : The current value being processed.
    - `index`
      - : The index of the current value being processed, starting from `0`.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it calls `mapper` for each source value, converts the return value to an observable, and emits that inner observable's values. It unsubscribes from the current inner observable before calling `mapper` for a new source value. The returned observable completes after the source and the last inner observable have completed.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

Only values from the latest inner observable are forwarded. To process all source values sequentially, waiting for each inner observable to complete, use {{domxref("Observable.flatMap", "flatMap()")}} instead.

If `mapper` throws an exception or its return value cannot be converted to an observable, the returned observable errors. Errors from the source or the active inner observable are also forwarded. In each case, the returned observable unsubscribes from its source and any active inner observable.

Unsubscribing from an inner observable does not necessarily cancel its underlying work. For example, when the mapper returns a promise from `fetch()`, switching to a new inner observable does not abort the request. See [Canceling asynchronous work](/en-US/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work) for a custom observable that supports cancellation.

## Examples

### Toggling a stream

In this example, each button click starts or stops a counter. The custom observable emits a value every 500 milliseconds and registers a teardown callback to clear the interval when its subscription ends.

```html hidden live-sample___toggle-stream
<button>Start count</button>
<p>Count not started</p>
```

```js live-sample___toggle-stream
const btn = document.querySelector("button");
const output = document.querySelector("p");

const counter = new Observable((subscriber) => {
  let n = 1;
  const interval = setInterval(() => subscriber.next(n++), 500);
  subscriber.addTeardown(() => clearInterval(interval));
});

btn
  .when("click")
  .switchMap((event, index) => {
    const start = index % 2 === 0;
    btn.textContent = start ? "Stop count" : "Start count";
    return start ? counter : [];
  })
  .subscribe((value) => {
    output.textContent = value;
  });
```

Switching to an empty array unsubscribes from the counter and clears its interval. The button's click subscription stays active, so the next click starts a new count from `1`.

{{EmbedLiveSample("toggle-stream", "100%", "100px")}}

### Eager lookahead search

This example fetches search suggestions as the user types into a search input. It assumes that `/search-items` returns a JSON array of results and that `updateLookahead()` displays those results.

```js
const textbox = document.querySelector('input[type="search"]');

textbox
  .when("input")
  .map(() => textbox.value.trim())
  .filter((query) => query.length > 3)
  .switchMap((query) =>
    fetch(`/search-items?q=${encodeURIComponent(query)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Search failed: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        return [];
      }),
  )
  .subscribe(updateLookahead);
```

Each query longer than three characters starts a request. `switchMap()` converts the returned promise to an observable and unsubscribes from the previous inner observable. If an earlier request finishes after a newer qualifying query has been entered, its results are ignored. Unsubscribing does not abort the underlying `fetch()` request itself.

The promise's `catch()` handler returns an empty results array on failure, so the outer subscription continues listening for input after a failed search.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
