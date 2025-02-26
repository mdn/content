---
title: "HTMLFormElement: submit() method"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.submit
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement.submit()`** method submits a given
{{HtmlElement("form")}}.

This method is similar, but not identical to, activating a form's submit
{{HtmlElement("button")}}. When invoking this method directly, however:

- No {{domxref("HTMLFormElement/submit_event", "submit")}} event is raised. In particular, the form's `onsubmit` event handler is not run.
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation) is not triggered.

The {{domxref("HTMLFormElement.requestSubmit()")}} method is identical to activating a
form's submit {{HtmlElement("button")}} and does not have these differences.

A form control (such as a submit button) with a `name` or `id` of `submit` will mask the form's `submit` method. Trying to call `myForm.submit();` throws an error "submit is not a function" because in this case `submit` refers to the form control which has a `name` or `id` of `submit`.

{{HtmlElement("input")}} with attribute type="submit" will not be submitted with the
form when using **`HTMLFormElement.submit()`**, but it would be
submitted when you do it with original HTML form submit.

## Syntax

```js-nolint
submit()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
document.forms["my-form"].submit();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
