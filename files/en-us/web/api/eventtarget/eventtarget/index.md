---
title: "EventTarget: EventTarget() constructor"
short-title: EventTarget()
slug: Web/API/EventTarget/EventTarget
page-type: web-api-constructor
browser-compat: api.EventTarget.EventTarget
---

{{APIRef("DOM")}}

The **`EventTarget()`** constructor creates a new {{domxref("EventTarget")}} object instance.

> **Note:** It is fairly rare to explicitly call this constructor. Most of the time, this constructor is used inside the constructor of an object extending the {{domxref("EventTarget")}} interface, using the [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword.

## Syntax

```js-nolint
new EventTarget()
```

### Parameters

None.

### Return value

A new instance of the {{domxref("EventTarget")}} object.

## Examples

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

const counter = new Counter(100);

counter.addEventListener("valuechange", (event) => {
  console.log("The new value is:", event.detail);
});

target.increment()
// => The new value is: 101

target.decrement()
// => The new value is: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventTarget")}}
