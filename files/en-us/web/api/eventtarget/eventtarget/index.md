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
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() {
    return this._secret;
  }
}

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret; // === 5
myEventTarget.addEventListener("foo", (e) => {
  myEventTarget._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // === 7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventTarget")}}
