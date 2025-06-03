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

The **Observable API** provides a mechanism for handling an asynchronous stream of events in an efficient, ergonomic fashion. A pipeline is declared through which the events will flow, providing control over event modification and actions such as subscribing to event streams and unsubscribing from them.

## Concepts and usage

{{domxref("Observable")}} objects (commonly called **observables**) represent a stream of events that can be observed and manipulated. The two main ways to create an observable are as follows:

- The {{domxref("EventTarget.when()")}} method, which returns an observable representing a stream of {{domxref("Event")}}s that will be fired on the `EventTarget`.
- The {{domxref("Observable.Observable", "Observable()")}} constructor, which returns an observable representing a custom stream of values that can be subscribed to as needed. These values can be `Event` objects, or any other kind of value.

> [!NOTE]
> You can also convert objects such as [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

Observables can be thought of as more powerful event listeners that integrate with {{domxref("EventTarget")}}. They improve event handling code in a similar way to how promises improved on callbacks, simplifying code by reducing the need for nested blocks.

Observables have several methods that return a new observable, and these methods can be chained together to create a pipeline.

Events passing through the pipeline can be modified at each stage; the final stage is to subscribe to the event stream produced by the `EventTarget`, specifying a function that will be called each time the event is fired.

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

In this snippet we specify the [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) event inside the `when()` method on the page's {{htmlelement("body")}} element, which returns a observable representing a stream of `mousedown` events fired on the `<body>` element.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the events passed through the pipeline to only events fired on the {{htmlelement("body")}} element (tested using the {{domxref("Element.matches()")}} method) and not its descendents.
- {{domxref("Observable.map()")}} is used to map the fired `mousedown` event objects to new objects containing the coordinates of the mouse cursor when the event was fired.
- {{domxref("Observable.subscribe()")}} is used to subscribe the observable to the event stream, calling the `reportCoords()` function each time a `mousedown` event fires on the `<body>`. This function logs the mouse coordinates to the console.

Observables, like Promises, get an initializing callback upon construction which controls what values the observable emits. For developer-created custom observables (created using the `Observable()` constructor) you pass this callback in manually, whereas for platform-returned ones (created using `EventTarget.when()`), the platform constructs the Observable with an internal callback that runs when you subscribe the observable to the event stream using `subscribe()`.

The initializing callback's argument is a `Subscriber` object, which has methods available on it that are called at different points in the observable lifecycle — for example to continue on to the {{domxref("Subscriber.next", "next()")}} event, or to {{domxref("Subscriber.complete", "complete()")}} the pipeline.

You can also unsubscribe from an observable — signaling that you want it to stop producing values — using the {{domxref("Observable.takeUntil()")}} method or an {{domxref("AbortController")}}.

See [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using) for more information on the above concepts.

## Interfaces

- {{domxref("Observable")}} {{Experimental_Inline}}
  - : Represents a stream of events that can be subscribed to.
- {{domxref("Subscriber")}} {{Experimental_Inline}}
  - : Represents an observer subscription, and contains methods to manage that subscription.

## Extensions to other interfaces

- {{domxref("EventTarget.when()")}} {{Experimental_Inline}}
  - : Returns an observable representing a stream of events that will be fired on the `EventTarget`.

## Examples

See [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using) for complete examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
