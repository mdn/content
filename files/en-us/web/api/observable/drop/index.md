---
title: "Observable: drop() method"
short-title: drop()
slug: Web/API/Observable/drop
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.drop
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`drop()`** method of the {{domxref("Observable")}} interface specifies a number of values that will be dropped when the resulting observable is reached in the pipeline, after which subsequent values will flow through to rest of the pipeline.

## Syntax

```js-nolint
drop(amount)
```

### Parameters

- `amount`
  - : A number representing the number of values to be dropped from the pipeline.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `drop()` usage

This example is a simple click counter app, which ignores some of the registered clicks due to the usage of a `drop()` observable.

#### HTML

The markup contains a {{htmlelement("button")}} element to click, and a {{htmlelement("p")}} element to display the number of clicks.

```html live-sample___basic-drop
<button>Click me</button>
<p>Click count: 0</p>
```

### JavaScript

In our script, we first grab references to the button and the paragraph, then initialize a `countValue` variable with a value of `0`. We then define a function to increment `countValue` before writing the updated value to the paragraph. We then call `when()` on the `btn`, passing it a value of `"click"` so the returned observable represents a stream of click events fired on the `btn`.

Finally, we chain two more calls onto the `when()` call:

- A `drop()` call, which is passed the value `3` as an argument. When the fired events reach this point in the pipeline, three of them are dropped, after which the others flow through normally.
- A `subscribe()` call to subscribe the observable to the event stream. We pass it a reference to the `increment()` function so it is called each time the button is clicked.

```js live-sample___basic-drop
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn.when("click").drop(3).subscribe(increment);
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-drop", "100%", "80px")}}

Try clicking the button — you should see that the first three clicks are ignored, after which the click count increments as expected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
