---
title: Creating custom observables
slug: Web/API/Observable_API/Creating_observables
page-type: guide
---

{{DefaultAPISidebar("Observable API")}}

The [Observable API](/en-US/docs/Web/API/Observable_API) lets you create custom streams of values using the {{domxref("Observable.Observable", "Observable()")}} constructor. This guide explains how to produce values, complete a stream, and clean up resources when a subscription ends.

Before proceeding, read [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables) to familiarize yourself with subscribing to and consuming observable streams.

## Creating an observable

Like Promises, observables are created with a callback. The callback's job is to do work and push data to its subscribers. This callback isn't called immediately: it's called when the first observer subscribes, either by `subscribe()`, by one of the [aggregation methods](/en-US/docs/Web/API/Observable_API/Using_observables#aggregating_values), or by subscribing to a downstream observable created by a [transformation method](/en-US/docs/Web/API/Observable_API/Using_observables#transforming_an_observable). It receives a {{domxref("Subscriber")}} object. You can call methods on this object to dispatch data to all observers subscribed to the observable. Additional observers share the same underlying subscription until it completes, errors, or all observers unsubscribe. After that, the callback is called again when the next observer subscribes.

- `next(value)`: Sends a value to each observer's `next` callback. This can be called any number of times while the subscription is active.
- `complete()`: Ends the subscription successfully and calls each observer's `complete` callback without arguments.
- `error(error)`: Ends the subscription with an error and passes the error to each observer's `error` callback. If an observer has no `error` callback, the error is reported to the global object.

With a subscription set up, the producer can send any number of values by calling `subscriber.next()`, optionally followed by a call to `subscriber.complete()` or `subscriber.error()` to signal that the stream of data is finished.

There's another `addTeardown()` method; we'll look at that in the [Teardown](#teardown) section.

In this example, we will print the numbers 1 to 10 to the page, then print a message to say that the count is complete. We won't show the HTML because it just includes a single `<p>` element to display the count, and a {{htmlelement("button")}} to start the count.

```html hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
<button>Start count</button>
<p></p>
```

In the JavaScript, we use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every `timerInterval` milliseconds. If the value has exceeded the specified number of iterations, we call the `Subscriber.complete()` method to complete the subscription. If not, we call `Subscriber.next()` to send the current value of `i` to the observers. At the end of the interval callback, `i` is incremented by 1.

```js live-sample___basic-constructor-example
function makeTimer(timerInterval, iterations = Infinity) {
  return new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === iterations + 1) {
        subscriber.complete();
        clearInterval(interval);
      } else {
        subscriber.next(i);
      }
      i++;
    }, timerInterval);
  });
}
```

> [!NOTE]
> This function is not production-ready at this point! Read on to [Teardown](#teardown) to see why.

Next, we define an `init()` function inside which we subscribe to the observable by calling `Observable.subscribe()`. The object passed to `subscribe()` defines the observer's callbacks: `next` prints the value received from the producer to the `<p>` element, and `complete` displays a completion message.

```js hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

```js live-sample___basic-constructor-example
function init() {
  makeTimer(500, 10).subscribe({
    next(value) {
      outputElem.textContent = value;
    },
    complete() {
      outputElem.textContent = "Count complete; click to restart.";
    },
  });
}
```

Finally, the `init()` function is called in response to the [`click`](/en-US/docs/Web/API/Element/click_event) event on the `<button>`, using `when()` and `subscribe()`.

```js live-sample___basic-constructor-example
btn.when("click").subscribe(init);
```

The rendered output looks like this:

{{EmbedLiveSample("basic-constructor-example", "100%", "80px")}}

Click the button. Every 500 milliseconds, the value of `i` is printed to the page and then incremented by 1. On the next interval after printing `10`, the subscription completes and the paragraph displays "Count complete; click to restart."

> [!NOTE]
> The producer calls methods on the `Subscriber` object to send notifications; the consumer defines the corresponding callbacks in the object passed to `subscribe()`. As you'll see in the next section, cleanup is also registered by the producer, using `Subscriber.addTeardown()` inside the constructor callback.

## Teardown

The [previous example](#creating_an_observable) is not production-ready because subscribing to each new `makeTimer()` observable creates a new interval. If the user clicks the `<button>` multiple times, multiple intervals will be created, all trying to update the same `<p>` element. To fix this, we need to unsubscribe from the previous observable and clear its interval before starting a new count. First, we'll use an `AbortController` to unsubscribe when the user clicks the button again.

```js live-sample___basic-teardown-example
let controller;

function init() {
  controller?.abort();
  controller = new AbortController();
  makeTimer(500, 10).subscribe(
    {
      next(value) {
        outputElem.textContent = value;
      },
      complete() {
        outputElem.textContent = "Count complete; click to restart.";
      },
    },
    { signal: controller.signal },
  );
}

btn.when("click").subscribe(init);
```

The problem with this is that while the `makeTimer()` observable is stopped, the interval created inside it is not cleared until it reaches `11`. This is fine for our example because the interval will eventually clear itself, but in a real-world scenario this could lead to memory leaks and unexpected behavior. To fix this, we need to make sure that `clearInterval` is deterministically called when the observable becomes inactive, not just when it reaches the termination point. We do this by adding a _teardown_ to the observable. The teardown logic is passed as a callback to {{domxref("Subscriber.addTeardown()")}}.

```js live-sample___basic-teardown-example
function makeTimer(timerInterval, iterations = Infinity) {
  return new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === iterations + 1) {
        subscriber.complete();
      } else {
        subscriber.next(i);
      }
      i++;
    }, timerInterval);
    subscriber.addTeardown(() => {
      clearInterval(interval);
    });
  });
}
```

The callback registered with `addTeardown()` runs when `Subscriber.complete()` or `Subscriber.error()` closes the subscription, before the observers' completion or error callbacks. It also runs when all observers unsubscribe.

In this case, the teardown callback clears the interval via {{domxref("Window.clearInterval()")}}, so it stops running as soon as the subscription ends.

The example now renders like so:

{{EmbedLiveSample("basic-teardown-example", "100%", "80px")}}

Press the `<button>` while the count is running; the count will stop immediately and restart from `1`.

## Producing values synchronously

An observable does not have to wait for an event or asynchronous operation. The constructor callback runs synchronously when a subscription starts, and `subscriber.next()` invokes observers' callbacks synchronously. A subscription can therefore receive values and complete before `subscribe()` returns:

```js
const numbers = new Observable((subscriber) => {
  for (let value = 1; value <= 10; value++) {
    if (!subscriber.active) {
      return;
    }
    subscriber.next(value);
  }
  subscriber.complete();
});

console.log("Before subscribing");
numbers.take(3).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
});
console.log("After subscribing");

// Before subscribing
// 1
// 2
// 3
// Complete
// After subscribing
```

After receiving three values, `take(3)` completes its output and unsubscribes from `numbers`. With no observers remaining, the producer's {{domxref("Subscriber.active", "active")}} property becomes `false`. Checking it before each iteration stops the producer from doing unnecessary work. This check also handles a subscription started with an already aborted signal.

Calling `subscriber.complete()` or `subscriber.error()` does not stop the producer's JavaScript execution. Use `return`, `break`, or an `active` check to stop producing values when appropriate. Likewise, cancellation that must interrupt synchronous production needs to be available before `subscribe()` is called, for example through an `AbortSignal` supplied in its options.

## Canceling asynchronous work

When a consumer unsubscribes, the producer is responsible for stopping work that is no longer needed. For APIs that accept an {{domxref("AbortSignal")}}, such as {{domxref("Window.fetch", "fetch()")}}, you can pass {{domxref("Subscriber.signal", "subscriber.signal")}} directly. This signal is aborted when the shared subscription ends, including when all observers unsubscribe.

The following function creates an observable that fetches JSON, emits the parsed data, and completes. The request starts when the observable is subscribed to:

```js
function fetchJSON(url) {
  return new Observable((subscriber) => {
    fetch(url, { signal: subscriber.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        subscriber.next(data);
        subscriber.complete();
      })
      .catch((error) => {
        if (subscriber.active) {
          subscriber.error(error);
        }
      });
  });
}
```

If the subscription ends while the request or response body is pending, aborting `subscriber.signal` cancels that work and causes the fetch or body-reading promise to reject. The rejection handler checks `subscriber.active` before forwarding the error: calling `subscriber.error()` after cancellation would report the error to the global object. While the subscription is active, request and JSON-parsing failures are forwarded to its observers.

The constructor callback itself is not `async`. Its return value is ignored, so returning a promise would not make the observable wait for it or automatically forward its rejection. Instead, this example explicitly calls `next()`, `complete()`, and `error()` from the promise handlers.

We can use `fetchJSON()` in a search pipeline like the one in [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables#working_with_inner_observables). Suppose the page contains a search input and a results element:

```js
const searchInput = document.querySelector("input[type='search']");
const results = document.querySelector("#results");

searchInput
  .when("input")
  .map(() => searchInput.value)
  .switchMap((query) =>
    fetchJSON(`/search?q=${encodeURIComponent(query)}`).catch((error) => {
      results.textContent = error.message;
      return [];
    }),
  )
  .subscribe((data) => {
    results.textContent = JSON.stringify(data);
  });
```

Each new input event makes `switchMap()` unsubscribe from the previous inner observable. Because that request has no other observers, its `subscriber.signal` is aborted, canceling the pending request. This both prevents obsolete results from being displayed and stops the underlying work. The inner `catch()` handles request failures without ending the input subscription, so the user can try another search.

## Example: observing element size

Custom observables can wrap APIs that deliver notifications through callbacks. In this example, we wrap a {{domxref("ResizeObserver")}} to create a stream of an element's dimensions. Resizing an element does not fire a `resize` event on that element, so we cannot obtain this stream using `when()`.

### HTML and CSS

The markup contains a resizable panel and a paragraph to display its dimensions. The {{cssxref("resize")}} property lets the user resize the panel by dragging its corner.

```html live-sample___resize-example
<div id="panel">Drag my corner to resize me.</div>
<p id="dimensions"></p>
```

```css live-sample___resize-example
#panel {
  width: 200px;
  height: 100px;
  min-width: 100px;
  max-width: 90%;
  min-height: 50px;
  max-height: 200px;
  overflow: auto;
  resize: both;
  border: 1px solid;
}
```

### JavaScript

Inside the custom observable's callback, we create a `ResizeObserver` and start observing the panel. Each notification passes the panel's content rectangle to {{domxref("Subscriber.next()")}}. We also register a teardown callback to disconnect the `ResizeObserver` when the subscription ends.

```js live-sample___resize-example
const panel = document.getElementById("panel");
const dimensions = document.getElementById("dimensions");

const sizes = new Observable((subscriber) => {
  const observer = new ResizeObserver(([entry]) => {
    subscriber.next(entry.contentRect);
  });
  observer.observe(panel);
  subscriber.addTeardown(() => observer.disconnect());
});

sizes.subscribe(({ width, height }) => {
  dimensions.textContent = `Content size: ${Math.round(width)} × ${Math.round(height)} pixels`;
});
```

Subscribing starts the `ResizeObserver`, which reports the initial size and subsequent size changes. The subscription callback displays these dimensions outside the panel so updating the output does not affect the observed element's size.

### Result

{{EmbedLiveSample("resize-example", "100%", "280px")}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
