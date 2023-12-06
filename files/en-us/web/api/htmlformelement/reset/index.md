---
title: "HTMLFormElement: reset() method"
short-title: reset()
slug: Web/API/HTMLFormElement/reset
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.reset
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.reset()`** method restores a form
element's default values. This method does the same thing as clicking the form's
[`<input type="reset">`](/en-US/docs/Web/HTML/Element/input/reset) control.

If a form control (such as a reset button) has a name or id of _reset_ it will
mask the form's reset method. It does not reset other attributes in the input, such as
`disabled`.

Note that if {{domxref("Element.setAttribute", "setAttribute()")}} is called to set
the value of a particular attribute, a subsequent call to `reset()` won't
reset the attribute to its default value, but instead will keep the attribute at
whatever value the {{domxref("Element.setAttribute", "setAttribute()")}} call set it to.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
document.getElementById("myform").reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
