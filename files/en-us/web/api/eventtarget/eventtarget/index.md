---
title: "EventTarget: EventTarget() constructor"
short-title: EventTarget()
slug: Web/API/EventTarget/EventTarget
page-type: web-api-constructor
browser-compat: api.EventTarget.EventTarget
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`EventTarget()`** constructor creates a new {{domxref("EventTarget")}} object instance.

> [!NOTE]
> It is fairly rare to explicitly call this constructor. Most of the time, this constructor is used inside the constructor of an object extending the {{domxref("EventTarget")}} interface, using the [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword.

## Syntax

```js-nolint
new EventTarget()
```

### Parameters

None.

### Return value

A new instance of the {{domxref("EventTarget")}} object.

## Examples

### Implementing a counter

This example implements a `Counter` class, with `increment()` and `decrement()` methods. It fires a custom `"valuechange"` event when either of these methods is called.

#### HTML

```html
<button id="dec" aria-label="Decrement">-</button>
<span id="currentValue">0</span>
<button id="inc" aria-label="Increment">+</button>
```

#### JavaScript

```js
class Counter extends EventTarget {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }

  #emitChangeEvent() {
    this.dispatchEvent(new CustomEvent("valuechange", { detail: this.value }));
  }

  increment() {
    this.value++;
    this.#emitChangeEvent();
  }

  decrement() {
    this.value--;
    this.#emitChangeEvent();
  }
}

const initialValue = 0;
const counter = new Counter(initialValue);
document.querySelector("#currentValue").innerText = initialValue;

counter.addEventListener("valuechange", (event) => {
  document.querySelector("#currentValue").innerText = event.detail;
});

document.querySelector("#inc").addEventListener("click", () => {
  counter.increment();
});

document.querySelector("#dec").addEventListener("click", () => {
  counter.decrement();
});
```

#### Result

{{EmbedLiveSample("Implementing a counter")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventTarget")}}
