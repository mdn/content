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

The **`take()`** method of the {{domxref("Observable")}} interface returns a new observable that emits the given number of values from the start of the source observable and then completes.

## Syntax

```js-nolint
take(amount)
```

### Parameters

- `amount`
  - : The number of values to take from the start of the source observable. It should be an unsigned integer.

### Return value

A new {{domxref("Observable")}}. When subscribed to, it emits values from the source observable until `amount` values have been emitted or the source completes, whichever comes first. Once the limit is reached, it completes and unsubscribes from the source.

## Description

Like other observable-returning operators, this method is lazy: calling it creates a new observable without subscribing to the source. Processing starts when the returned observable is subscribed to.

If `amount` is `0`, the returned observable completes immediately when subscribed to, without subscribing to the source. Errors from the source are forwarded until the returned observable completes.

## Examples

### Using take()

This example counts the first five button clicks. On the fifth click, the count is replaced by a completion message, and subsequent clicks are ignored.

```html hidden live-sample___basic-take
<button>Click me</button>
<p>Click count: 0</p>
```

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

{{EmbedLiveSample("basic-take", "100%", "80px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Observable.drop()")}}
- [Using observables](/en-US/docs/Web/API/Observable_API/Using_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
