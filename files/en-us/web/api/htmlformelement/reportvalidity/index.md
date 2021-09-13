---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
tags:
  - HTML
  - HTMLFormElement
  - Method
  - Reference
browser-compat: api.HTMLFormElement.reportValidity
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement.reportValidity()`** method returns
`true` if the element's child controls satisfy their validation constraints.
When `false` is returned, cancelable
[`invalid`](/en-US/docs/Web/API/HTMLInputElement/invalid_event) events are fired for
each invalid child and validation problems are reported to the user.

## Syntax

```js
HTMLFormElement.reportValidity()
```

### Return value

`true` or `false`

## Example

```js
document.forms['myform'].addEventListener('submit', function() {
  document.forms['myform'].reportValidity();
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
