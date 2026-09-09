---
title: Observable
slug: Web/API/Observable
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Observable
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`Observable`** interface of the [Observable API](/en-US/docs/Web/API/Observable_API) represents a stream of values that can be subscribed to.

`Observable` objects (commonly called **observables**) can be thought of as more powerful event listeners that integrate with {{domxref("EventTarget")}}. They improve event handling code in a similar way to how [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) improved on callbacks, simplifying code by reducing the need for nested blocks.

Observables have several methods that return a new observable, and these methods can be chained together to create a pipeline to precisely control the stream of values as desired.

There are three main ways to obtain observables:

- The {{domxref("EventTarget.when()")}} method returns an {{domxref("Observable")}} representing a stream of events fired on the `EventTarget`. You may also have libraries that return observables.
- You can create your own custom observables using the {{domxref("Observable.Observable", "Observable()")}} constructor.
- You can convert objects such as [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Observable.Observable", "Observable()")}} {{Experimental_Inline}}
  - : Creates a new `Observable` object instance.

## Static methods

- {{domxref("Observable.from_static", "from()")}} {{Experimental_Inline}}
  - : Returns an observable converted from a promise, iterable, or async iterable, or returns an existing observable unchanged.

## Instance methods

- {{domxref("Observable.subscribe", "subscribe()")}} {{Experimental_Inline}}
  - : Subscribes to a value stream, most commonly a stream of events.

### Observable-returning instance methods

- {{domxref("Observable.catch", "catch()")}} {{Experimental_Inline}}
  - : Returns a new observable that replaces an error from the source observable with values from another observable.
- {{domxref("Observable.drop", "drop()")}} {{Experimental_Inline}}
  - : Returns a new observable that skips the given number of values at the start of the source observable.
- {{domxref("Observable.filter", "filter()")}} {{Experimental_Inline}}
  - : Returns a new observable that emits only those values of the source observable for which the provided callback function returns a truthy value.
- {{domxref("Observable.finally", "finally()")}} {{Experimental_Inline}}
  - : Returns a new observable that mirrors the source observable and calls a callback when its subscription ends.
- {{domxref("Observable.flatMap", "flatMap()")}} {{Experimental_Inline}}
  - : Returns a new observable that maps each value of the source observable to an inner observable and emits the inner observables' values sequentially.
- {{domxref("Observable.inspect", "inspect()")}} {{Experimental_Inline}}
  - : Returns a new observable that mirrors the source observable and calls callbacks to inspect its values and subscription lifecycle.
- {{domxref("Observable.map", "map()")}} {{Experimental_Inline}}
  - : Returns a new observable that emits the values of the source observable, each transformed by a mapping function.
- {{domxref("Observable.switchMap", "switchMap()")}} {{Experimental_Inline}}
  - : Returns a new observable that maps each value of the source observable to an inner observable and emits values from only the latest inner observable.
- {{domxref("Observable.take", "take()")}} {{Experimental_Inline}}
  - : Returns a new observable that emits the given number of values from the start of the source observable and then completes.
- {{domxref("Observable.takeUntil", "takeUntil()")}} {{Experimental_Inline}}
  - : Returns a new observable that emits values from the source observable until another observable emits a value or errors.

### Promise-returning instance methods

- {{domxref("Observable.every", "every()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with a boolean indicating whether every value emitted by the source observable satisfies the provided testing function.
- {{domxref("Observable.find", "find()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with the first value emitted by the source observable that satisfies the provided testing function, or {{jsxref("undefined")}} if the source completes without a match.
- {{domxref("Observable.first", "first()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with the first value emitted by the source observable.
- {{domxref("Observable.forEach", "forEach()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with {{jsxref("undefined")}} when the source observable completes, after executing a callback for each emitted value.
- {{domxref("Observable.last", "last()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with the last value emitted by the source observable.
- {{domxref("Observable.reduce", "reduce()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with a single value obtained by combining the source observable's values using a reducer function.
- {{domxref("Observable.some", "some()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with a boolean indicating whether any value emitted by the source observable satisfies the provided testing function.
- {{domxref("Observable.toArray", "toArray()")}} {{Experimental_Inline}}
  - : Returns a promise that fulfills with a new array containing the source observable's values in the order they were emitted.

## Examples

### Obtaining an observable from an EventTarget

This example displays the mouse coordinates in a `<p>` element only when the pointer moves over a `<div>` element. The pipeline filters the body's `mousemove` events by their target and extracts the coordinates. For the page setup, see [Transforming an observable](/en-US/docs/Web/API/Observable_API/Using_observables#transforming_an_observable).

```js
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe((p) => {
    outputElem.textContent = `${p.x},${p.y}`;
  });
```

For more working examples, see [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables).

### Creating a custom observable

This function creates an observable that emits an increasing count at a specified interval. It completes on the interval after the requested number of values has been emitted. The teardown callback clears the interval when the subscription ends, including when all observers unsubscribe. For a button-driven counter using this producer, see [Teardown](/en-US/docs/Web/API/Observable_API/Creating_observables#teardown).

```js
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

For more working examples, see [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
