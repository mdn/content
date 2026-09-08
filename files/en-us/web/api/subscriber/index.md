---
title: Subscriber
slug: Web/API/Subscriber
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Subscriber
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`Subscriber`** interface of the [Observable API](/en-US/docs/Web/API/Observable_API) represents a subscription to a stream of observable values, and contains methods to manage the [lifecycle](/en-US/docs/Web/API/Observable_API/Creating_observables#creating_an_observable) of that subscription.

A `Subscriber` object is passed to the callback supplied to the {{domxref("Observable.Observable", "Observable()")}} constructor when the first observer subscribes. Additional observers share this `Subscriber` while it is active. After the subscription completes, errors, or all observers unsubscribe, the next subscription invokes the callback with a new `Subscriber`. You cannot construct a `Subscriber` directly.

The producer calls `Subscriber.next()`, `Subscriber.error()`, and `Subscriber.complete()` to send values and notifications to observers. The observers define how to handle these notifications through the corresponding callbacks passed to {{domxref("Observable.subscribe()")}}. The producer can also register cleanup callbacks with {{domxref("Subscriber.addTeardown()")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("Subscriber.active", "active")}} {{Experimental_Inline}}
  - : A boolean value that indicates whether the subscription is active or not.
- {{domxref("Subscriber.signal", "signal")}} {{Experimental_Inline}}
  - : An internally created {{domxref("AbortSignal")}} that is aborted when the subscription completes, errors, or all observers unsubscribe.

## Instance methods

- {{domxref("Subscriber.addTeardown", "addTeardown()")}} {{Experimental_Inline}}
  - : Registers a callback to clean up resources when the subscription ends.
- {{domxref("Subscriber.complete", "complete()")}} {{Experimental_Inline}}
  - : Closes the subscription and notifies observers that the stream has completed successfully.
- {{domxref("Subscriber.error", "error()")}} {{Experimental_Inline}}
  - : Closes the subscription and notifies observers of an error.
- {{domxref("Subscriber.next", "next()")}} {{Experimental_Inline}}
  - : Sends a value to the observers of the subscription.

## Examples

For additional examples, see [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables).

### Basic `Observable()` example

In this example, we print the numbers 1 to 10 to the page. When the producer completes the subscription, the teardown callback clears the interval, and then the observer's `complete` callback displays a completion message.

#### HTML

The markup includes a single `<p>` element to display the count, and a {{htmlelement("button")}} to start the count.

```html live-sample___basic-observer
<button>Start count</button>
<p></p>
```

#### JavaScript

In the JavaScript, we first grab a reference to the `<p>` and `<button>` elements, then register an event listener on the `<button>` so that the count will start when it is clicked:

```js live-sample___basic-observer
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.disabled = true;
  const observable = new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === 11) {
        subscriber.complete();
      } else {
        subscriber.next(i);
      }
      i++;
    }, 500);
    subscriber.addTeardown(() => {
      if (btn.textContent === "Start count") {
        btn.textContent = "Restart count";
      }
      clearInterval(interval);
      btn.disabled = false;
    });
  });

  observable.subscribe({
    next: (value) => {
      outputElem.textContent = value;
    },
    complete: () => {
      outputElem.textContent = "Count complete";
    },
  });
});
```

Inside the `click` event handler function:

- We disable the button so that another click cannot start an overlapping count. We then use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every 500 milliseconds. If the value has reached `11`, we call the {{domxref("Subscriber.complete", "complete()")}} method to complete the subscription. If not, we call {{domxref("Subscriber.next", "next()")}} to send the current count to the observer.
- At the end of the interval, `i` is incremented by 1.
- We also register a teardown callback using {{domxref("Subscriber.addTeardown", "addTeardown()")}}. Inside it, we change the text on the `<button>` to "Restart count" if it doesn't already say that — this is more suitable if the count has already been run. And more importantly, we clear the interval (via {{domxref("Window.clearInterval()")}}) when the subscription ends and re-enable the button for the next count.
- Finally, we subscribe to the observable by calling {{domxref("Observable.subscribe()")}}. Inside the `subscribe()` method's argument, we define the observer callbacks invoked by the `Subscriber` methods in the previous block — the `next()` callback prints the value passed to it to the `<p>` element (`i`, in the code above that calls it), and the `complete()` callback prints "Count complete" to the `<p>` element.

#### Result

The example renders like so:

{{EmbedLiveSample("basic-observer", "100%", "80px")}}

Press the button. Every 500 milliseconds, the current count is printed to the page. After displaying `10`, the next interval callback completes the subscription and displays "Count complete".

The teardown callback changes the button text to "Restart count" and re-enables it before the observer's `complete()` callback runs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
