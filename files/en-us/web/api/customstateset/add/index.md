---
title: CustomStateSet.add()
slug: Web/API/CustomStateSet/add
tags:
  - API
  - Method
  - Reference
  - add
  - CustomStateSet
browser-compat: api.CustomStateSet.add
---
{{DefaultAPISidebar("DOM")}}

The **`add`** method of the {{domxref("CustomStateSet")}} interface adds an item to the `CustomStateSet`, after checking that the value is in the correct format.

## Syntax

```js
CustomStateSet.add(value)
```

### Parameters

- `value`
  - : A {{domxref("DOMString")}} which must be a `<dashed-ident>`, with the form `--mystate`.

### Return Value

Undefined.

### Exceptions

- {{domxref("DOMException")}} `SyntaxError`
  - : Thrown if the string is not a `<dashed-ident>`.

## Examples

The following function adds the state `--checked` to a `CustomStateSet`.

```js
set checked(flag) {
  if (flag) {
    this._internals.states.add('--checked');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

