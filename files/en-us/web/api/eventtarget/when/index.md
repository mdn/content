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

The **`when()`** method of the {{domxref("Observable API", "Observable API", "", "nocode")}} returns an {{domxref("Observable")}} object (**observable**) representing a stream of events fired on the event target it is called on.

To subscribe to the stream of events, you can then call {{domxref("Observable.subscribe", "subscribe()")}} on the resulting observable.

In the background, an event listener is registered to capture the events as they are fired, in the same way as when you call {{domxref("EventTarget.addEventListener()")}}. However, only one listener is added for multiple subscriptions on the same `EventTarget` resulting from a `when()` call, whereas a separate listener is added for each `addEventListener()` call.

## Syntax

```js-nolint
when(type)
when(type, options)
```

### Parameters

- `when`

  - : A string representing the type of event to include in the stream.

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `capture` {{optional_inline}}
      - : A boolean value indicating that events of the specified type will be dispatched to the listener registered in the background before being dispatched to any `EventTarget` beneath it in the DOM tree. If not specified, defaults to `false`.
    - `passive` {{optional_inline}}
      - : A boolean value that, if `true`, indicates that the observer subscription's [`next`](/en-US/docs/Web/API/Observable/subscribe#next) function will never call {{domxref("Event.preventDefault()")}}. If a passive listener calls `preventDefault()`, nothing will happen and a console warning may be generated. If not specified, defaults to `false`. See [Using passive listeners](/en-US/docs/Web/API/EventTarget/addEventListener#using_passive_listeners) for more information on why this is useful.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `when()` usage

This example is a simple click counter app.

#### HTML

The markup contains a {{htmlelement("button")}} element to click, and a {{htmlelement("p")}} element to display the number of clicks.

```html live-sample___basic-when
<button>Click me</button>
<p>Click count: 0</p>
```

### JavaScript

In our script, we first grab references to the button and the paragraph, then initialize a `countValue` variable with a value of `0`. We then define a function to increment `countValue` before writing the updated value to the paragraph. We then call `when()` on the `btn`, passing it a value of `"click"` so the returned observable represents a stream of click events fired on the `btn`.

Finally, we chain a `subscribe()` call onto the `when()` call to subscribe the observable to the event stream, passing it a reference to the `increment()` function so it is called each time the button is clicked:

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

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
