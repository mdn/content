---
title: Subscriber
slug: Web/API/Subscriber
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Subscriber
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`Subscriber`** interface of the {{domxref("Observable API", "Observable API", "", "nocode")}} represents a subscription to a stream of observable values, and contains methods to manage the [lifecycle](/en-US/docs/Web/API/Observable_API/Using#the_observable_lifecycle) of that subscription.

An observable's `Subscriber` object is passed in as an arguement to the callback function specified as the argument of an observable's constructor when it is first created. Observables created using {{domxref("EventTarget.when()")}} have their subscriber callbacks created implicitly by the browser, whereas custom observables created directly using the {{domxref("Observable.Observable", "Observable()")}} constructor have their subscriber callbacks defined explicitly by the developer.

The subscriber callback defines _when_ the `Subscriber` lifecycle callbacks are invoked, or to put it another way, the conditions under which stages of the lifecycle occur. The actual functionality of the `Subscriber` lifecycle callbacks is defined when {{domxref("Observable.subscribe", "subscribe()")}} is invoked on the observable, with the exception of {{domxref("Subscriber.addTeardown", "addTeardown()")}}, which is defined inside the subscriber callback itself.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("Subscriber.active", "active")}} {{Experimental_Inline}}
  - : A boolean value that indicates whether the subscription is active or not.
- {{domxref("Subscriber.active", "active")}} {{Experimental_Inline}}
  - : An {{domxref("AbortSignal")}} object instance, which allows the subscription to be aborted via the associated {{domxref("AbortController")}}.

## Instance methods

- {{domxref("Subscriber.addTeardown", "addTeardown()")}} {{Experimental_Inline}}
  - : Runs automatically after the subscription completes or is unsubscribed.
- {{domxref("Subscriber.complete", "complete()")}} {{Experimental_Inline}}
  - : Runs to complete the subscription.
- {{domxref("Subscriber.error", "error()")}} {{Experimental_Inline}}
  - : Runs when an exception is thrown somewhere in the observable pipeline.
- {{domxref("Subscriber.next", "next()")}} {{Experimental_Inline}}
  - : Runs whenever a value is sent through the stream, to handle it.

## Examples

For additional examples, see [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using).

### Basic `Observable()` example

In this example, we will print the numbers 1 to 10 to the page, then print a message to say that the count is complete and run teardown code.

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
  const observable = new Observable((subscriber) => {
    let i = 1;
    setInterval(() => {
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

- We use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every 500 milliseconds. If the value has reached `11`, we call the {{domxref("Subscriber.complete", "complete()")}} method to complete the subscription. If not, we call {{domxref("Subscriber.next", "next()")}} to move to the next iteration of the pipeline.
- At the end of the interval, `i` is incremented by 1.
- We also register a teardown callback using {{domxref("Subscriber.addTeardown", "addTeardown()")}}, which changes the text on the `<button>` to "Restart count" if it doesn't already say that — this is more suitable if the count has already been run.
- Finally, we subscribe to the observable by calling {{domxref("Observable.subscribe()")}}. Inside the `subscribe()` method's argument, we define the functionality of the `Subscriber` object's `next()` and `complete()` methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the `<p>` element (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the `<p>` element.

#### Result

The example renders like so:

{{EmbedLiveSample("basic-observer", "100%", "80px")}}

Press the `<button>`. Every 500 milliseconds, the value of `i` is printed to the page and then incremented by 1, until the value reaches `11`. At that point, "Count complete" is printed to the page and subscription stops.

The `<button>`s text then changes to "Restart count" once the count is finished, because of the `addTeardown()` code running after the subscription completes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
