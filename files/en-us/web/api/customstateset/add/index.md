---
title: CustomStateSet.add()
slug: Web/API/CustomStateSet/add
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - add
  - CustomStateSet
  - Experimental
browser-compat: api.CustomStateSet.add
---
{{APIRef("DOM")}}{{SeeCompatTable}}

The **`add`** method of the {{domxref("CustomStateSet")}} interface adds an item to the `CustomStateSet`, after checking that the value is in the correct format.

## Syntax

```js
add(value)
```

### Parameters

- `value`
  - : A string which must be a `<dashed-ident>`, with the form `--mystate`.

### Return value

Undefined.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the string is not a `<dashed-ident>`.

## Examples

The following function adds the state `--checked` to a `CustomStateSet`.

```js
class MyCustomElement extends HTMLElement {
  set checked(flag) {
    if (flag) {
      this._internals.states.add('--checked');
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
