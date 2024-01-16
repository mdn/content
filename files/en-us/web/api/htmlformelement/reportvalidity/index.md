---
title: "HTMLFormElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.reportValidity()`** method returns
`true` if the element's child controls satisfy their validation constraints.
When `false` is returned, cancelable
[`invalid`](/en-US/docs/Web/API/HTMLInputElement/invalid_event) events are fired for
each invalid child and validation problems are reported to the user.

## Syntax

```js-nolint
reportValidity()
```

### Return value

`true` or `false`

## Example

```js
document.forms["myform"].addEventListener(
  "submit",
  () => {
    document.forms["myform"].reportValidity();
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
