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

The **`inspect()`** method of the {{domxref("Observable")}} interface enables the different [lifecycle stages](/en-US/docs/Web/API/Observable_API/Using#the_observable_lifecycle) of the observable stream to be inspected, to test that it is working as it should, and get diagnostic data.

## Syntax

```js-nolint
inspect(inspector)
```

### Parameters

- `inspector` {{optional_inline}}
  - : An object or a callback function. If the provided `inspector` is an object, it can contain the following properties:

    - `next` {{optional_inline}}
      - : A function that is called whenever the [`Observable.subscribe()` `next()`](/en-US/docs/Web/API/Observable/subscribe#next) function is run, in other words, when a value is sent through the stream.
    - `error` {{optional_inline}}
      - : A function that is called whenever the [`Observable.subscribe()` `error()`](/en-US/docs/Web/API/Observable/subscribe#error) function is run, in other words, when an exception is thrown somewhere in the observable pipeline.
    - `complete` {{optional_inline}}
      - : A function that is called whenever the [`Observable.subscribe()` `complete()`](/en-US/docs/Web/API/Observable/subscribe#complete) function is run, in other words, when the stream has been successfully completed and no more data will be sent.
    - `subscribe` {{optional_inline}}
      - : A function that is called when the observable subscribes to the pipeline, in other words, when the `Observable.subscribe()` call successfully runs.
    - `subscribe` {{optional_inline}}
      - : A function that is called when the observable subscription is [aborted](/en-US/docs/Web/API/Observable_API/Using#unsubscribing_with_an_abortcontroller).

    If the provided `inspector` is a callback function, it is equivalent to the `next` callback in the object version. This is a shortcut for the common case where you just want to provide a `next` function to inspect each value coming through the stream.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `inspect()` example

In this example, we'll show how to use an `inspect()` observable to log data about the subscription to a simple pipeline, illustrating how data can be collected in the background as the pipeline runs. The example itself allows a button to be clicked three times before the subscription completes.

#### HTML

The markup includes a {{htmlelement("button")}} element to be clicked, plus a {{htmlelement("p")}} element to display the number of clicks.

```html live-sample___basic-inspect
<button>Click me</button>
<p>Click count: 0</p>
```

#### JavaScript

In our script, we start off by grabbing references to the button and the paragraph, initializing a `countValue` variable to `0` (which we will use to keep track of the number of clicks), and defining an `increment()` function, which will increment `countValue` and print its current value to the paragraph:

```js live-sample___basic-inspect
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}
```

Now onto the observable pipeline:

```js live-sample___basic-inspect
btn
  .when("click")
  .take(3)
  .inspect({
    subscribe: () => {
      console.log(`Subscription successful`);
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

In the pipeline:

- {{domxref("EventTarget.when()")}} is run on the button to return an observable representing a stream of click events fired on it.
- {{domxref("Observable.take()")}} is run to limit the number of events passing through the pipeline to `3` before the subscription completes.
- `inspect()` is used to log values to the console to output data about the subscription. Inside it, we define callbacks to report when the subscription is successful, the values being passed through the stream and their event types, and when the subscription completes.
- {{domxref("Observable.subscribe()")}} is used to subscribe the observable to the event stream, calling the `increment()` function each time a `click` event fires on the `<button>`, and printing a message to the paragraph saying "No more clicks!" when the subscription completes.

#### Result

The rendered output looks like this:

{{EmbedLiveSample("basic-inspect", "100%", "80px")}}

Open your browser's JavaScript console, and try clicking the button three times. Note how, as well as the clicks and the completion being printed to the paragraph, the `inspect()` observable logs data to the console. The total console output should look like this:

```plain
Subscription successful
Count value before click: 0
Event type: click
Count value before click: 1
Event type: click
Count value before click: 2
Event type: click
Final count value: 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
