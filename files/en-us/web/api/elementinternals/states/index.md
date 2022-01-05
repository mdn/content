---
title: ElementInternals.states
slug: Web/API/ElementInternals/states
tags:
  - API
  - Property
  - Reference
  - states
  - ElementInternals
browser-compat: api.ElementInternals.states
---
{{DefaultAPISidebar("DOM")}}

The **`states`** read-only property of the {{domxref("ElementInternals")}} interface returns a {{domxref("CustomStateSet")}} representing the possible states of the custom element.

## Syntax

```js
let states = ElementInternals.states;
```

### Value

A {{domxref("CustomStateSet")}} which is a {{jsxref("Set")}} of strings.

## Examples

The following function adds and removes the state `--checked` to a `CustomStateSet`, then prints to the console `true` or `false` as the custom checkbox is checked or unchecked.

```js
set checked(flag) {
  if (flag) {
    this._internals.states.add('--checked');
  } else {
    this._internals.states.delete('--checked');
  }

  console.log(this._internals.states.has('--checked'));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
