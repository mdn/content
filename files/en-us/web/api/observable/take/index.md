---
title: "Observable: take() method"
short-title: take()
slug: Web/API/Observable/take
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.take
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`take()`** method of the {{domxref("Observable")}} interface specifies a maximum number of values that can be passed through the resulting observable, after which the stream is completed and no more data is sent.

## Syntax

```js-nolint
take(amount)
```

### Parameters

- `amount`
  - : A number representing the maximum number of values that will be passed through this observable.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `take()` usage

This example is a simple click counter app, which only counts a certain number of clicks due to the usage of a `take()` observable.

#### HTML

The markup contains a {{htmlelement("button")}} element to click, and a {{htmlelement("p")}} element to display the number of clicks.

```html live-sample___basic-take
<button>Click me</button>
<p>Click count: 0</p>
```

### JavaScript

In our script, we first grab references to the button and the paragraph, then initialize a `countValue` variable with a value of `0`. We then define a function to increment `countValue` before writing the updated value to the paragraph. We then call `when()` on the `btn`, passing it a value of `"click"` so the returned observable represents a stream of click events fired on the `btn`.

Finally, we chain two more calls onto the `when()` call:

- A `take()` call, which is passed the value `5` as an argument. Only five events pass through this point in the pipeline, after which the stream is completed.
- A `subscribe()` call to subscribe the observable to the event stream. We pass it an object containing a `next` callback equal to the `increment()` function so it is called the first five times time the button is clicked, and a `complete` function that prints `Count finished!` to the paragraph once the stream is finished.

```js live-sample___basic-take
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn
  .when("click")
  .take(5)
  .subscribe({
    next: increment,
    complete: () => {
      para.textContent = `Count finished!`;
    },
  });
```

#### Result

The rendered result is as follows:

{{EmbedLiveSample("basic-take", "100%", "80px")}}

Try clicking the button — you should see the click count increment on the first five clicks only, after which the `Count finished!` message is printed to the paragraph. This shows that the stream is completed once the value limit imposed by the `take()` observable is reached.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
