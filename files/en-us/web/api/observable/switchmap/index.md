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

The **`switchMap()`** method of the {{domxref("Observable")}} interface allows you to execute an action represented by an inner observable whenever a source emits and, if the previous inner subscription has not completed, unsubscribes from it.

## Syntax

```js-nolint
switchMap(mapper)
```

### Parameters

- `mapper`
  - : A callback function that transforms each value passed through the observable. It must return an object that can be converted to an observable by {{domxref("Observable.from_static", "Observable.from()")}}: an {{domxref("Observable")}}, a {{jsxref("Promise")}}, an iterable object, or an async iterable object. The callback is passed two arguments:
    - `value`
      - : The current value being mapped.
    - `index`
      - : A number representing the value's position in the stream. The first position has a value of `0`, in the same manner as an array.

### Return value

An {{domxref("Observable")}}.

## Examples

### Toggling a stream

In this example, each button click starts or stops a counter. The custom observable emits a value every 500 milliseconds and registers a teardown callback to clear the interval when its subscription ends.

```html live-sample___toggle-stream
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

The mapper alternates between returning `counter` and an empty array. `switchMap()` converts the empty array to an observable that completes without emitting any values. Switching to it unsubscribes from `counter`, running its teardown callback and stopping the interval. The outer click subscription remains active, so the next click starts a new count from `1`.

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

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
