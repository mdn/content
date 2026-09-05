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

Events are fundamental to web development and JavaScript programming at large. Events originate from {{domxref("EventTarget")}} objects:

```js
element.addEventListener("click", handler1);
element.addEventListener("click", handler2);
```

When the user clicks on the `element`, the element, controlled by the browser, is responsible for pushing a notification to each of its event listeners, which are `handler1` and `handler2` in this case. The notification is an {{domxref("Event")}} object providing further context and data about the event. The handler then carries out some action in response to the event.

This paradigm is known as _reactive programming_, where actions are carried out passively in response to a trigger. Abstractly, there are four main kinds of reactive programming:

- _Single pull_: The initiator receives a single value. Normal functions implement this: in `const result = action();`, the caller of the `action()` function is the initiator, which pulls a single value `result` from the function.
- _Single push_: The initiator sends a single value, and the receiver waits before it receives that value. [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) implement this: in `promise.then((value) => { ... });`, the promise implementation is the initiator, which calls the callback function exactly once when the promise is settled, sending a single value.
- _Multiple pulls_: The initiator pauses and resumes execution of the data source, eventually receiving multiple values. [Iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) implement this: in `const result1 = iterator.next(); const result2 = iterator.next();`, the caller of the `next()` method is the initiator, which pulls multiple values from the iterator.
- _Multiple pushes_: The initiator sends multiple values, and the receiver pauses execution in between receiving those values. Events implement this: in `element.addEventListener("click", handler);`, the element is the initiator, which calls the `handler` function multiple times as the user clicks on the element, sending multiple event objects.

The problem with the `addEventListener()` model is that there's no neat way to _compose_ event handlers. Each handler is executed in isolation and doesn't inherently have knowledge about the other events in a sequence. For example, if you want to do something specifically for a `mousemove` event that happens after a `mousedown` event, you have to manage any shared state yourself, leading to complex and fragile code.

The Observable API addresses this problem by declaratively creating and manipulating streams of events using methods such as {{domxref("Observable.map()")}} and {{domxref("Observable.filter()"}}. It doesn't fundamentally replace the event-driven model, but rather changes the way you organize your code, much like how promises changed the way asynchronous code is written compared to traditional callbacks.

> [!NOTE]
> The Observable API is not inherently related to the event API. While event handling is a major use case for observables, observables can represent any stream of data, not just events. Because of this, the observable API is actually more like a language primitive than a web-exclusive API, just like {{jsxref("Promise")}} or {{jsxref("Iterator")}}. It is specified by WICG instead of TC39 for historical reasons, like {{domxref("AbortController")}} or [streams](/en-US/docs/Web/API/Streams_API).

In the Observable API, there are two main concepts: the **observable** and the **subscriber**, which are the sender and the receiver of values, respectively. Typically, you are the subscriber who transforms and consumes values from observables using methods on the {{domxref("Observable")}} interface. If you are the implementor of an observable, then you can also manipulate the subscriber's behavior using the {{domxref("Subscriber")}} interface. There are three main ways to obtain observables:

- {{domxref("EventTarget")}} objects are observable: the {{domxref("EventTarget.when()")}} method returns an {{domxref("Observable")}} representing a stream of events fired on the `EventTarget`. You may also have libraries that return observables.
- You can create your own custom observables using the {{domxref("Observable.Observable", "Observable()")}} constructor.
- You can convert objects such as [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

An observable can be transformed using various methods that return new observables, such as {{domxref("Observable.map()")}} and {{domxref("Observable.filter()")}}. Finally, to start receiving values from an observable, you subscribe to it using the {{domxref("Observable.subscribe()")}} method, or aggregate all values using methods like {{domxref("Observable.reduce()")}}. You can also unsubscribe from an observable using an {{domxref("AbortController")}} or certain methods like {{domxref("Observable.takeUntil()")}}. Observables are _lazy_ — they don't start producing values until they have at least one subscriber.

Let's consider a brief example:

```js
document.body
  .when("mousedown")
  .filter((e) => e.target.matches("body"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe((p) => {
    console.log(`${p.x},${p.y}`);
  });
```

In this snippet, the page's {{htmlelement("body")}} element is an {{domxref("EventTarget")}}. We subscribe to the stream of [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) events fired on it using the `when()` method.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} filters the events passed through the pipeline to only events fired on the {{htmlelement("body")}} element (tested using the {{domxref("Element.matches()")}} method) and not its descendants.
- {{domxref("Observable.map()")}} maps the fired `mousedown` event objects to new objects containing the coordinates of the mouse cursor when the event was fired.

Finally, {{domxref("Observable.subscribe()")}} subscribes to the observable, calling the `reportCoords()` function each time a `mousedown` event fires on the `<body>`. This function logs the mouse coordinates to the console.

You may notice that this paradigm is very similar to [iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), where we can also transform with [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/map) and [`filter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/filter) and consume with `next()` and [`toArray()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/toArray). Indeed, both observables and iterators represent streams of data; the key difference, as previously stated, is that iterators are pull-based (the consumer decides when to receive values), while observables are push-based (the producer decides when to send values).

See [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using) for more information on the above concepts.

## Interfaces

- {{domxref("Observable")}} {{Experimental_Inline}}
  - : Represents a stream of values that can be subscribed to.
- {{domxref("Subscriber")}} {{Experimental_Inline}}
  - : Represents a subscription to a stream of observable values, and contains methods to manage the lifecycle of that subscription.

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
