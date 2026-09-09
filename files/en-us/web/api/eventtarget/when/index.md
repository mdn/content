---
title: "EventTarget: when() method"
short-title: when()
slug: Web/API/EventTarget/when
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EventTarget.when
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`when()`** method of the {{domxref("EventTarget")}} interface returns an {{domxref("Observable")}} object representing a stream of events fired on the event target it is called on.

To subscribe to the stream of events, you can then call {{domxref("Observable.subscribe", "subscribe()")}} on the resulting observable.

The returned observable uses an event listener in the background, as with {{domxref("EventTarget.addEventListener()")}}. This listener's creation, sharing among observers, and removal follow the same lifecycle as the {{domxref("Subscriber")}} object for a custom observable.

> [!NOTE]
> This shared-subscription behavior may change. A [proposal to give each observer its own `Subscriber`](https://github.com/WICG/observable/issues/217) would make each subscription start a separate execution instead of reusing an active subscription.

## Syntax

```js-nolint
when(type)
when(type, options)
```

### Parameters

- `type`
  - : A case-sensitive string representing the [event type](/en-US/docs/Web/API/Document_Object_Model/Events) to listen for.
- `options` {{optional_inline}}
  - : An object that specifies characteristics about the event listener. The available options are:
    - `capture` {{optional_inline}}
      - : A boolean value indicating that events of the specified type will be dispatched to the listener registered in the background before being dispatched to any `EventTarget` beneath it in the DOM tree. If not specified, defaults to `false`.
    - `passive` {{optional_inline}}
      - : A boolean value that, if `true`, indicates that callbacks processing the events will never call {{domxref("Event.preventDefault", "preventDefault()")}}. If a passive listener calls `preventDefault()`, nothing will happen and a console warning may be generated.

        If this option is not specified, it defaults to the same value as for `addEventListener()`. See [Using passive listeners](/en-US/docs/Web/API/EventTarget/addEventListener#using_passive_listeners) to learn more.

### Return value

An {{domxref("Observable")}}.

## Examples

### Using when()

This example is a simple click counter app.

#### HTML

The markup contains a {{htmlelement("button")}} element to click, and a {{htmlelement("p")}} element to display the number of clicks.

```html live-sample___basic-when
<button>Click me</button>
<p>Click count: 0</p>
```

#### JavaScript

We call `when("click")` on the `btn`, which obtains an observable for the `click` event stream. We then chain a `subscribe()` call onto the observable to subscribe the `increment()` function to the observable, so it is called each time the button is clicked.

> [!NOTE]
> For this particular example, `.when("click").subscribe(increment)` and `.addEventListener("click", increment)` are almost exactly equivalent. However, using `when()` allows you to compose event streams using observables. The [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables) guide has more examples.

```js live-sample___basic-when
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn.when("click").subscribe(increment);
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-when", "100%", "80px")}}

Try clicking the button to see the click count increment.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- {{domxref("EventTarget.addEventListener()")}}
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
