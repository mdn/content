---
title: Observable
slug: Web/API/Observable
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Observable
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`Observable`** interface of the {{domxref("Observable API", "Observable API", "", "nocode")}} represents a stream of values that can be subscribed to.

`Observable` objects (commonly called **observables**) can be thought of as more powerful event listeners that integrate with {{domxref("EventTarget")}}. They improve event handling code in a similar way to how [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) improved on callbacks, simplifying code by reducing the need for nested blocks.

Observables have several methods that return a new observable, and these methods can be chained together to create a pipeline to precisely control the stream of events as desired.

The two main ways to create an observable are as follows:

- The {{domxref("EventTarget.when()")}} method, which returns an observable representing a stream of {{domxref("Event")}}s that will be fired on the `EventTarget`.
- The {{domxref("Observable.Observable", "Observable()")}} constructor, which returns an observable representing a custom stream of values that can be subscribed to as needed. These values can be `Event` objects, or any other kind of value.

> [!NOTE]
> You can also convert objects such as [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Observable.Observable", "Observable()")}} {{Experimental_Inline}}
  - : Creates a new `Observable` object instance.

## Static methods

- {{domxref("Observable.from_static", "from()")}} {{Experimental_Inline}}
  - : Returns a new observable constructed from the value passed into the method as an argument.

## Instance methods

- {{domxref("Observable.subscribe", "subscribe()")}} {{Experimental_Inline}}
  - : Subscribes to a value stream, most commonly a stream of events.

### Observable-returning instance methods

- {{domxref("Observable.catch", "catch()")}} {{Experimental_Inline}}
  - : Fires an error callback if the previous pipeline stages throw an exception.
- {{domxref("Observable.drop", "drop()")}} {{Experimental_Inline}}
  - : Specifies a number of values that will be dropped when the resulting observable is reached in the pipeline, after which subsequent values will flow through to rest of the pipeline.
- {{domxref("Observable.filter", "filter()")}} {{Experimental_Inline}}
  - : Filters each value passed through the stream based on a condition. Those that don't fulfill the condition are ignored.
- {{domxref("Observable.finally", "finally()")}} {{Experimental_Inline}}
  - : Fires a callback after the observable stream completes — either successfully, or by throwing an exception.
- {{domxref("Observable.flatMap", "flatMap()")}} {{Experimental_Inline}}
  - : Creates an inner observable stream that is returned and becomes part of the outer observable stream, enabling the chaining of multiple event types.
- {{domxref("Observable.inspect", "inspect()")}} {{Experimental_Inline}}
  - : Enables the different lifecycle stages of the observable stream to be inspected.
- {{domxref("Observable.map", "map()")}} {{Experimental_Inline}}
  - : Maps each value passed through the observable stream to a new structure.
- {{domxref("Observable.switchMap", "switchMap()")}} {{Experimental_Inline}}
  - : ?
- {{domxref("Observable.take", "take()")}} {{Experimental_Inline}}
  - : Specifies a maximum number of values that can be passed through the resulting observable, after which the stream is completed and no more data is sent.
- {{domxref("Observable.takeUntil", "takeUntil()")}} {{Experimental_Inline}}
  - : Specifies an event on which the resulting observable will unsubscribe from the event stream.

### Promise-returning instance methods

- {{domxref("Observable.every", "every()")}} {{Experimental_Inline}}
  - : Returns a boolean indicating whether every value passed through the observable stream passed a specified test.
- {{domxref("Observable.find", "find()")}} {{Experimental_Inline}}
  - : Returns the first value passed through the observable stream that passes a specified test, or {{jsxref("undefined")}} if no values pass.
- {{domxref("Observable.first", "first()")}} {{Experimental_Inline}}
  - : Returns the first value passed through the observable stream.
- {{domxref("Observable.forEach", "forEach()")}} {{Experimental_Inline}}
  - : Performs a specified operation on every value passed through the observable stream.
- {{domxref("Observable.last", "last()")}} {{Experimental_Inline}}
  - : Returns the last value passed through the observable stream.
- {{domxref("Observable.reduce", "reduce()")}} {{Experimental_Inline}}
  - : Returns an accumulated value calculated by running a reducer function on every value passed through the observable stream.
- {{domxref("Observable.some", "some()")}} {{Experimental_Inline}}
  - : Returns a boolean indicating whether any value passed through the observable stream passed a specified test.
- {{domxref("Observable.toArray", "toArray()")}} {{Experimental_Inline}}
  - : Returns an array containing every value passed through the observable stream.

## Examples

For complete working examples, see [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using).

### Creating an observable using `when()`

In this snippet we specify the [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) event inside the {{domxref("EventTarget.when()")}} method on the page's {{htmlelement("body")}} element. This returns an observable representing a stream of `mousedown` events fired on the `<body>` element.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the events passed through the pipeline to only events fired on the {{htmlelement("body")}} element (tested using the {{domxref("Element.matches()")}} method) and not its descendents.
- {{domxref("Observable.map()")}} is used to map the fired `mousedown` event objects to new objects containing the coordinates of the mouse cursor when the event was fired.
- {{domxref("Observable.subscribe()")}} is used to subscribe the observable to the event stream, calling the `reportCoords()` function each time a `mousedown` event fires on the `<body>`. This function logs the mouse coordinates to the console.

```js
document.body
  .when("mousedown")
  .filter((e) => e.target.matches("body"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe({ next: reportCoords });

function reportCoords(e) {
  console.log(`${e.x},${e.y}`);
}
```

### Creating an observable using `new Observable()`

In the below snippet, we first use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every 500 milliseconds. If the value has reached `11`, we call the {{domxref("Subscriber.complete()")}} method to complete the subscription. If not, we call {{domxref("Subscriber.next()")}} to move to the next iteration of the pipeline. At the end of the interval, `i` is incremented by 1.

We also define a {{domxref("Subscriber.addTeardown()")}} callback to clear the interval (via {{domxref("Window.clearInterval()")}}) once the subscription is completed. This is important to avoid errors and memory leaks.

We then subscribe to the observable by calling {{domxref("Observable.subscribe()")}}. Inside the `subscribe()` method's argument, we define the {{domxref("Subscriber")}} object's methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the console (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the console.

```js
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

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Count complete");
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
