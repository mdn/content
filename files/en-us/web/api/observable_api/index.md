---
title: Observable API
slug: Web/API/Observable_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Observable
spec-urls: https://wicg.github.io/observable
---

{{SeeCompatTable}}{{DefaultAPISidebar("Observable API")}}

The **Observable API** ("observables") provides a mechanism for handling an asynchronous stream of events in an efficient, ergonomic fashion. A pipeline is declared through which the events will flow, providing control over event modification and actions such as subscribing event targets to (and unsubscribing them from) the event stream.

Observables can be thought of as more powerful event listeners that integrate with {{domxref("EventTarget")}}. They are also said to improve on event handling code in a similar way to how promises improve on callbacks, simplifying code and reducing the need for nested blocks.

## Concepts and usage

The use of observables centers around {{domxref("Observable")}} objects, which represent a stream of events that can be observed and manipulated. The two main ways to create an `Observable` instance are as follows:

- The {{domxref("EventTarget.when()")}} method, which returns an {{domxref("Observable")}} object instance representing a stream of events that will be fired on the `EventTarget`.
- The {{domxref("Observable.Observable", "Observable()")}} constructor, which returns an {{domxref("Observable")}} object instance representing a custom stream of events that can be subscribed to as needed.

`Observable` instances have several methods that return a reference to the same `Observable`, and these methods can be chained together to create a pipeline.

Events passing through the pipeline can be modified at each stage; the final stage is to subscribe the event target to the event stream, specifying a function that will be called each time the event is fired.

Let's consider a brief example:

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

In this snippet we specify the [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) event inside the `when()` method on the page's {{htmlelement("body")}} element, which returns a `Observable` object representing a stream of `mousedown` events. We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the elements on which the event will be fired, to only the {{htmlelement("body")}} element (tested using the {{domxref("Element.matches()")}} method) and not its descendents.
- {{domxref("Observable.map()")}} is used to modify the fired `mousedown` event objects, setting them equal to the coordinates of the mouse cursor when the event was fired.
- {{domxref("Observable.subscribe()")}} is used to subscribe the `<body>` element to the event stream, calling the `reportCoords()` function each time a `mousedown` event fires on the `<body>`. This function logs the mouse coordinates to the console.

When an observable is created, it has a callback passed into it that is invoked synchronously when `subscribe()` is called on it; this sets up a new **subscription** to the observable. The callback's argument is a `Subscriber` object, which has methods available on it that are called at different points in the observable lifecycle — for example to continue on to the {{domxref("Subscriber.next", "next()")}} event, or to {{domxref("Subscriber.complete", "complete()")}} the pipeline.

If you are creating a custom observable using the `Observable()` constructor, the lifecycle methods are explicitly defined. However, when {{domxref("EventTarget.when()")}} is used to create an observable, this same mechanism is used implicitly in the background.

> [!NOTE]
> You can also convert objects such as [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

You can also unsubscribe from an observable using the {{domxref("Observable.takeUntil()")}} method, or an {{domxref("AbortController")}}.

See [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using) for more information on the above concepts.

## Interfaces

- {{domxref("Observable")}} {{Experimental_Inline}}
  - : Represents a stream of events that can be subscribed to.
- {{domxref("Subscriber")}} {{Experimental_Inline}}
  - : Represents an observer subscription, and contains methods to manage that subscription.

## Extensions to other interfaces

- {{domxref("EventTarget.when()")}} {{Experimental_Inline}}
  - : Returns an {{domxref("Observable")}} object instance representing a stream of events that will be fired on the `EventTarget`.

## Examples

See [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using) for complete examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
