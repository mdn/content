---
title: "CustomStateSet: add() method"
short-title: add()
slug: Web/API/CustomStateSet/add
page-type: web-api-instance-method
browser-compat: api.CustomStateSet.add
---

{{APIRef("Web Components")}}

The **`add`** method of the {{domxref("CustomStateSet")}} interface adds value representing a custom state to the `CustomStateSet`.

Custom elements with a specific state can be selected using the [`:state()`](/en-US/docs/Web/CSS/:state) pseudo-class, specifying the desired state as an argument.

## Syntax

```js-nolint
add(value)
```

### Parameters

- `value`
  - : A string that represents the custom state.

### Return value

Undefined.

## Examples

The following function adds the state `checked` to a `CustomStateSet`.

```js
class MyCustomElement extends HTMLElement {
  set checked(flag) {
    if (flag) {
      this._internals.states.add("checked");
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
