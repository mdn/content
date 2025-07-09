---
title: "Observable: subscribe() method"
short-title: subscribe()
slug: Web/API/Observable/subscribe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.subscribe
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`subscribe()`** method of the
{{domxref("Observable")}} interface subscribes to a value stream, most commonly a stream of events.

If you subscribe to an observable created using {{domxref("EventTarget.when()")}}, the values will be {{domxref("Event")}} objects. However, if you subscribe to a custom observable created using the {{domxref("Observable.Observable", "Observable()")}} constructor, the values will be whatever values are defined inside it.

## Syntax

```js-nolint
subscribe(observer)
subscribe(observer, options)
```

### Parameters

- `observer` {{optional_inline}}
  - : An object or a callback function. If the provided `observer` is an object, it can contain the following properties:
    - `next` {{optional_inline}}
      - : A callback function that is called whenever a value is sent through the stream. In the case of a `when()` observable, this is the callback function that is run whenever an event is fired — the observable equivalent of a traditional event handler function. This can be called any number of times.
    - `error` {{optional_inline}}
      - : A function that is called when an exception is thrown somewhere in the observable pipeline.
    - `complete` {{optional_inline}}
      - : A callback function that is called when the stream has been successfully completed and no more data will be sent. This occurs when no more values are available to be sent, or the [observable is unsubscibed from the stream](/en-US/docs/Web/API/Observable_API/Using#unsubscribing).

    If the provided `observer` is a callback function, it is equivalent to the `next` callback in the object version. This is a shortcut for the common case where you just want to provide a `next` function to handle each value coming through the stream.

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the subscription to be aborted via the associated {{domxref("AbortController")}}. See [Unsubscribing with an `AbortController`](/en-US/docs/Web/API/Observable_API/Using#unsubscribing_with_an_abortcontroller) for more details.

### Return value

None (`undefined`).

## Examples

### Basic `subscribe()` usage

This example is a simple counter app, with buttons to increment and decrement the value displayed on the screen.

#### HTML

The markup contains two {{htmlelement("button")}} elements to increment and decrement the value, and a {{htmlelement("p")}} element is display the current value.

```html live-sample___basic-subscribe
<button id="up">+</button>
<p aria-label="Current value">0</p>
<button id="down">-</button>
```

```css hidden live-sample___basic-subscribe
html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  margin: 0 auto;
}

h1,
p {
  text-align: center;
}

button {
  font-size: 3rem;
  width: 3rem;
}

p {
  font-size: 5rem;
}
```

### JavaScript

In our script, we first grab references to the buttons and the paragraph, then initialize a `countValue` variable with a value of `0`. We then define two functions to increment and decrement `countValue` before writing the updated value to the paragraph.

```js live-sample___basic-subscribe
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const para = document.querySelector("p");

let countValue = 0;

function incrementCounter() {
  countValue++;
  para.textContent = countValue;
}

function decrementCounter() {
  countValue--;
  para.textContent = countValue;
}
```

Finally, we call {{domxref("EventTarget.when()")}} on the `upBtn` and `downBtn`, passing it a value of `"click"` in each case, so the returned observables represent streams of click events fired on the `upBtn` and `downBtn`, respectively. We then chain `subscribe()` calls onto each `when()` call, to subscribe each observable to the event stream:

- The first `subscribe()` call is passed `incrementCounter()` as a callback, so it will be run whenever `upBtn` is clicked.
- The second `subscribe()` call is passed `decrementCounter()` as a callback, so it will be run whenever `downBtn` is clicked.

```js live-sample___basic-subscribe
upBtn.when("click").subscribe(incrementCounter);
downBtn.when("click").subscribe(decrementCounter);
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-subscribe", "100%", "150px")}}

Try clicking the buttons to see the counter increment and decrement.

### Defining subscribe functionality inside an `Observable()`

In this example, we will print the numbers 1 to 10 to the page, then print a message to say that the count is complete.

#### HTML

In the HTML because we include a single `<p>` element to display the count, and a `<button>` to start the count:

```html live-sample___basic-constructor-example
<button>Start count</button>
<p></p>
```

#### JavaScript

In the JavaScript, we first grab a reference to the `<p>` and `<button>` elements, then use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every 500 milliseconds. If the value has reached `11`, we call the {{domxref("Subscriber.complete()")}} method to complete the subscription. If not, we call {{domxref("Subscriber.next()")}} to move to the next iteration of the pipeline. At the end of the interval, `i` is incremented by 1.

We also define a {{domxref("Subscriber.addTeardown()")}} callback to clear the interval (via {{domxref("Window.clearInterval()")}}) once the subscription is completed. This is important to avoid errors and memory leaks.

```js live-sample___basic-constructor-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");

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
  subscriber.addTeardown(() => clearInterval(interval));
});
```

Next, we define an `init()` function inside which we subscribe to the observable by calling `subscribe()`. Inside the `subscribe()` method's argument, we define the {{domxref("Subscriber")}} object's methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the `<p>` element (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the `<p>`.

```js live-sample___basic-constructor-example
function init() {
  observable.subscribe({
    next: (value) => {
      outputElem.textContent = value;
    },
    complete: () => {
      outputElem.textContent = "Count complete";
    },
  });
}
```

Finally, we call `when()` on the `<button>`, passing it a value of `"click"`, then subscribe the observable to the resulting event stream, passing a reference to the `init` function into `subscribe()`. This means that `init()` will be called and the subscription will happen when the `<button>` is clicked.

```js live-sample___basic-constructor-example
btn.when("click").subscribe(init);
```

#### Result

The rendered output looks like this:

{{EmbedLiveSample("basic-constructor-example", "100%", "80px")}}

Click the button. Every 500 milliseconds, the value of `i` is printed to the page and then incremented by 1, until the value reaches `11`. At that point, "Count complete" is logged to the console and subscription stops.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
