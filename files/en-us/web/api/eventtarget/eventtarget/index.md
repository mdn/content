---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
tags:
  - API
  - Constructor
  - DOM
  - DOM Events
  - EventTarget
browser-compat: api.EventTarget.EventTarget
---
{{APIRef("DOM Events")}}

The **`EventTarget()`** constructor creates a new
{{domxref("EventTarget")}} object instance.

## Syntax

```js
var myEventTarget = new EventTarget();
```

### Parameters

None.

### Return value

An instance of the {{domxref("EventTarget")}} object.

## Examples

```js
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventTarget")}}
