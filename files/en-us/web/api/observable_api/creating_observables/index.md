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

- `next()`: Dispatches data to the `next()` method of all observers. This can be called any number of times.
- `complete()`: Dispatches data to the `complete()` method of all observers. Called when the stream has been successfully completed and no more data will be sent.
- `error()`: Dispatches data to the `error()` method of all observers. Called when the stream has been completed with an error.

With a subscription set up, the observable can signal any number of events to the `Subscriber` via the `next()` callback, optionally followed by a single call to the `complete()` or `error()` callback, signaling that the stream of data is finished.

There's another `addTeardown()` method; we'll look at that in the [Teardown](#teardown) section.

In this example, we will print the numbers 1 to 10 to the page, then print a message to say that the count is complete. We won't show the HTML because it just includes a single `<p>` element to display the count, and a {{htmlelement("button")}} to start the count.

```html hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
<button>Start count</button>
<p></p>
```

In the JavaScript, we use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every `timerInterval` milliseconds. If the value has reached the specified number of iterations, we call the `Subscriber.complete()` method to complete the subscription. If not, we call `Subscriber.next()` to move to the next iteration of the pipeline. At the end of the interval, `i` is incremented by 1.

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

Next, we define an `init()` function inside which we subscribe to the observable by calling `Observable.subscribe()`. Inside the `subscribe()` method's argument, we define the {{domxref("Subscriber")}} object's methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the `<p>` element (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the `<p>`.

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

Finally, the `init` function is called in response to the [`click`](/en-US/docs/Web/API/Element/click_event) event on the `<button>`. This can be done with `addEventListener()`, but here we use `when()` just to drive the point home.

```js live-sample___basic-constructor-example
btn.when("click").subscribe(init);
```

The rendered output looks like this:

{{EmbedLiveSample("basic-constructor-example", "100%", "80px")}}

Click the button. Every 500 milliseconds, the value of `i` is printed to the page and then incremented by 1, until the value reaches `11`. At that point, "Count complete" is logged to the console and subscription stops.

> [!NOTE]
> The first three lifecycle methods can be specified inside the object passed into the `subscribe()` method during subscription. However, as you'll see in the next section, `addTeardown()` is called directly on the `Subscriber` object inside the constructor callback.

## Teardown

The [previous example](#creating_an_observable) is not production-ready because every `makeTimer()` call creates a new interval. If the user clicks the `<button>` multiple times, multiple intervals will be created, all trying to update the same `<p>` element. To fix this, we need to abort the observable when the user clicks the button again, so that only one interval is active at any time. We'll use an `AbortController` for this, although `takeUntil()` could also be used.

```js live-sample___basic-teardown-example
function init() {
  const controller = new AbortController();
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
  btn
    .when("click")
    .take(1) // Only take the next click
    .subscribe(() => {
      controller.abort();
    });
}

btn.when("click").subscribe(init);
```

> [!NOTE]
> This example also demonstrates how you can use `take(1)` to emulate the `{ once: true }` behavior from `addEventListener()`.

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

The `addTeardown()` function is invoked immediately after the `Subscriber.complete()` or `Subscriber.error()` function is invoked to signal the completion of the subscription. It is also invoked when the subscriber is aborted.

In this case, we use it check whether the `<button>` text is "Start count"; if so, we change it to "Restart count" so that it makes more sense after the count has already run. More importantly, however, we use the teardown function to clear the interval (via {{domxref("Window.clearInterval()")}}) once the subscription is completed. This is important to avoid errors and memory leaks.

The example now renders like so:

{{EmbedLiveSample("basic-teardown-example", "100%", "80px")}}

Press the `<button>` while the count is running; the count will stop immediately and restart from `1`.

## Observing element size

Custom observables can also wrap APIs that deliver notifications through callbacks. In this example, we wrap a {{domxref("ResizeObserver")}} to create a stream of an element's dimensions. Element size changes do not fire events, so we cannot obtain this stream using `when()`.

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
