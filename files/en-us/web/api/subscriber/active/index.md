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

The **`active`** read-only property of the {{domxref("Subscriber")}} interface indicates whether the subscription can still send values to observers.

## Value

A boolean that is `true` while the subscription is active and `false` after it ends.

A subscriber becomes inactive when {{domxref("Subscriber.complete()")}} or {{domxref("Subscriber.error()")}} is called, or when all observers [unsubscribe](/en-US/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable). Unsubscribing one observer does not make the subscriber inactive if other observers remain. The value is already `false` when teardown callbacks and the observers' `complete` or `error` callbacks run.

If an already aborted signal is passed to {{domxref("Observable.subscribe()")}} when starting a new subscription, the producer callback receives an inactive `Subscriber`.

## Examples

### Demonstrating the value of `active` throughout the lifecycle

This example counts from 1 to 10 and displays whether the subscription is active. The start button is disabled while the count runs. The abort button lets the user stop the count early.

```html live-sample___basic-active
<button class="count">Start count</button>
<button class="abort" disabled>Abort count</button>
<p class="countOutput">Count not started</p>
<p class="active">Observable subscription active: false</p>
```

In the producer callback, we display the initial `active` value and start an interval. After sending the numbers 1 to 10, we call `complete()`. The teardown callback clears the interval and displays the updated `active` value. It runs both when the count completes and when the user aborts it.

```js live-sample___basic-active
const outputElem = document.querySelector(".countOutput");
const activeStatus = document.querySelector(".active");
const countBtn = document.querySelector(".count");
const abortBtn = document.querySelector(".abort");
let controller;

function init() {
  controller = new AbortController();

  const observable = new Observable((subscriber) => {
    countBtn.textContent = "Counting...";
    countBtn.disabled = true;
    abortBtn.disabled = false;
    activeStatus.textContent = `Observable subscription active: ${subscriber.active}`;

    let i = 1;
    const interval = setInterval(() => {
      if (i > 10) {
        subscriber.complete();
      } else {
        subscriber.next(i++);
      }
    }, 500);

    subscriber.addTeardown(() => {
      clearInterval(interval);
      activeStatus.textContent = `Observable subscription active: ${subscriber.active}`;
      countBtn.textContent = "Restart count";
      countBtn.disabled = false;
      abortBtn.disabled = true;
    });
  });

  observable.subscribe(
    {
      next: (value) => {
        outputElem.textContent = value;
      },
      complete: () => {
        outputElem.textContent = "Count complete";
      },
    },
    { signal: controller.signal },
  );
}

countBtn.addEventListener("click", init);
abortBtn.addEventListener("click", () => {
  controller.abort();
  outputElem.textContent = "Count aborted";
});
```

The signal passed to `subscribe()` lets the abort button unsubscribe the observer. Aborting does not invoke the observer's `complete` callback, so the abort button's handler sets the output to "Count aborted" itself.

#### Result

{{EmbedLiveSample("basic-active", "100%", "120px")}}

Press the start button to begin a count. The `active` value becomes `true` when the subscription starts and `false` when it completes or is aborted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
