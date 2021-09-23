---
title: HTMLFormElement.submit()
slug: Web/API/HTMLFormElement/submit
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLFormElement.submit
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement.submit()`** method submits a given
{{HtmlElement("form")}}.

This method is similar, but not identical to, activating a form's submit
{{HtmlElement("button")}}. When invoking this method directly, however:

- No {{event("submit")}} event is raised. In particular, the form's
  {{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}} event handler is not run.
- [Constraint
  validation](/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) is not triggered.

The {{domxref("HTMLFormElement.requestSubmit()")}} method is identical to activating a
form's submit {{HtmlElement("button")}} and does not have these differences.

If a form control (such as a submit button) has a `name` or `id`
of `submit`, this method will mask the form's submit method.

{{HtmlElement("input")}} with attribute type="submit" will not be submitted with the
form when using **`HTMLFormElement.submit()`**, but it would be
submitted when you do it with original HTML form submit.

## Syntax

```js
HTMLFormElement.submit()
```

## Example

```js
document.forms["myform"].submit();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
