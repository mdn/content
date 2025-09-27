---
title: "Subscriber: signal property"
short-title: signal
slug: Web/API/Subscriber/signal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Subscriber.signal
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`signal`** read-only property of the
{{domxref("Subscriber")}} interface is a reference to the {{domxref("AbortSignal")}} object instance set in the subscribing {{domxref("Observable.subscribe()")}} call.

This is useful when you want to handle an aborted subscription from inside the subscribe callback function defined when the observer is created (via the {{domxref("Observable.Observable", "Observable()")}} constructor).

## Value

An {{domxref("AbortSignal")}}.

## Examples

### Handling an aborted subscription

This example is a simple app that uses an observable to count from 1 to 5, and aborts the subscription when 5 is reached. It includes a start button to start the count, and outputs the count value to the screen.

#### HTML

The markup includes a {{htmlelement("button")}} element to represent the start button, and a {{htmlelement("p")}} element to output the count values to:

```html live-sample___basic-active
<button class="count">Start count</button>
<p class="countOutput">Count not started</p>
```

#### JavaScript

In our script, we first grab references to our button and paragraph:

```js live-sample___basic-active
const outputElem = document.querySelector(".countOutput");
const countBtn = document.querySelector(".count");
```

Next, we create a `controller` variable that will later contain an {{domxref("AbortController")}}:

```js live-sample___basic-active
let controller;
```

Now we define an `init()` function, which will be called when our count is started and control the whole process:

```js live-sample___basic-active
function init() {
  const observable = new Observable((subscriber) => {
    countBtn.textContent = "Counting...";
    countBtn.disabled = true;
    let i = 1;
    const interval = setInterval(() => {
      subscriber.next(i);
      i++;
    }, 500);

    subscriber.signal.addEventListener("abort", () => {
      countBtn.textContent = "Restart count";
      outputElem.textContent = "Count complete";
      countBtn.disabled = false;
      clearInterval(interval);
    });
  });

  controller = new AbortController();

  observable.subscribe(
    {
      next: (value) => {
        if (value > 5) {
          controller.abort();
        } else {
          outputElem.textContent = value;
        }
      },
    },
    {
      signal: controller.signal,
    },
  );
}
```

In this function, we first create a new observable using the {{domxref("Observable.Observable", "Observable()")}} constructor, so that a new observable is created every time the count is started. In here, we:

- Set the start button's text content to "Counting..." and disable it so that multiple observables can't be created at once.
- Initialize an `i` variable to the value `1` then start a {{domxref("Window.setInterval", "setInterval()")}} running every 500 milliseconds. Inside the interval, we call {{domxref("Subscriber.next()")}}, passing it the current value of `i`, then iterate `i` by `1`.
- Finally, we specify an `abort` event listener on the subscriber's `signal` property, so that when the subscription is aborted, we clean up the app ready for the next count. We set the start button's text to "Restart count", the output text to "Restart count", and re-enable the start button. We also we clear the current interval using {{domxref("Window.clearInterval", "clearInterval()")}} to make sure it doesn't interfere with the activity of future intervals or cause memory leaks.

Next, we create a new `AbortController` using the {{domxref("AbortController.AbortController", "AbortController()")}} constructor and assign it to the `controller` variable.

In the `Observable.subscribe()` call, we include a `next()` method definition that checks whether the passed `value` is higher than `5`. If so, we abort the subscription via {{domxref("AbortController.abort()")}}; if not, we update the count output to the current `value` and carry on to the next iteration.

We also include a second `subscribe()` argument — an options object containing a `signal` property equal to the {{domxref("AbortController.signal")}} property. This is required to associate the controller with the observable, enabling us to unsubscribe via the `abort()` call.

The last line of JavaScript defines an event handler function on the start button so that, when it is clicked, we run the `init()` function to start the count process off:

```js live-sample___basic-active
countBtn.addEventListener("click", init);
```

#### Result

The rendered output looks like this:

{{EmbedLiveSample("basic-active", "100%", "90px")}}

Try pressing the start button to begin a count. After a count of 5, the count is completed via an `abort()` call, and the app is reset via the abort event handler in the subscriber callback.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
