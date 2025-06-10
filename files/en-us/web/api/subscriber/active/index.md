---
title: "Subscriber: active property"
short-title: active
slug: Web/API/Subscriber/active
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Subscriber.active
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`active`** read-only property of the
{{domxref("Subscriber")}} interface is a boolean value that indicates whether the subscription is active or not.

## Value

A boolean value that returns `true` if the subscription is active, and `false` if not.

A subscription is active once {{domxref("Observable.subscribe", "subscribe()")}} has been called on the associated observable, and is no longer active once the subscription has completed ({{domxref("Subscriber.complete", "complete()")}} is called) or errored ({{domxref("Subscriber.error", "error()")}} is called) or the observable has been [unsubscribed](/en-US/docs/Web/API/Observable_API/Using#unsubscribing).

## Examples

### Demonstrating the value of `active` throughout the lifecycle

This example is a simple app that uses an observable to count from 1 to 10. It includes a start button to start the count, and an abort button that allows the user to abort the count at any point. It also outputs the count and the active state of the observable subscription to the screen.

#### HTML

The markup includes two {{htmlelement("button")}} elements to represent the start and abort buttons, and two {{htmlelement("p")}} elements to output the count and active values to:

```html live-sample___basic-active
<button class="count">Start count</button>
<button class="abort">Abort count</button>
<p class="countOutput">Count not started</p>
<p class="active">Observable subscription active:</p>
```

#### JavaScript

In our script, we first grab references to our two buttons and two paragraphs:

```js live-sample___basic-active
const outputElem = document.querySelector(".countOutput");
const activeStatus = document.querySelector(".active");
const countBtn = document.querySelector(".count");
const abortBtn = document.querySelector(".abort");
```

Next, we create a `controller` variable that will later contain our {{domxref("AbortController")}}:

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

      activeStatus.textContent = `Observable subscription active: ${subscriber.active}`;
      if (!subscriber.active) {
        clearInterval(interval);
      }
    }, 500);
    subscriber.addTeardown(() => {
      countBtn.textContent = "Restart count";
      countBtn.disabled = false;
    });
  });

  controller = new AbortController();

  observable.subscribe(
    {
      next: (value) => {
        if (value > 10) {
          controller.abort();
          outputElem.textContent = "Count complete";
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
- Inside the interval, we also print the `Subscriber.active` value to the active output paragraph. When `Subscriber.active` is no longer true, we clear the interval using {{domxref("Window.clearInterval", "clearInterval()")}} to make sure this interval doesn't interfere with the activity of future intervals.
- Finally, we define a {{domxref("Subscriber.addTeardown()")}} function that sets the start button's text content to "Restart count" and reenables it after the subscription has been completed or aborted, ready for the count to be run again.

Next, we create a new `AbortController` using the {{domxref("AbortController.AbortController", "AbortController()")}} constructor and assign it to the `controller` variable.

In the `Observable.subscribe()` call, we include a `next()` method definition that checks whether the passed `value` is higher than `10`. If so, we update the count output to "Count complete" and abort the subscription via {{domxref("AbortController.abort()")}}; if not, we update the count output to the current `value` and carry on to the next iteration.

We also include a second `subscribe()` argument — an options object containing a `signal` property equal to the {{domxref("AbortController.signal")}} property. This is required to associate the controller with the observable, enabling us to unsubscribe via the `abort()` call.

The last chunk of JavaScript defines two event handler functions:

```js live-sample___basic-active
countBtn.addEventListener("click", init);

abortBtn.addEventListener("click", () => {
  controller.abort();
  outputElem.textContent = "Count aborted";
});
```

- When the start button is clicked, we run the `init()` function to start the count process off.
- When the abort button is clicked, we run `AbortController.abort()` to abort the subscription and update the count output text to explicitly report that the count was aborted manually.

#### Result

The rendered output looks like this:

{{EmbedLiveSample("basic-active", "100%", "120px")}}

Try pressing the start button to begin a count. You can then press the abort button at any time to unsubscribe and stop the count, or wait for the count to finish. Note how the `active` value is `true` while the count is ongoing, but it becomes `false` when the count completes or is aborted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
