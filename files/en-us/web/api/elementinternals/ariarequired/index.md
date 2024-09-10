---
title: "ElementInternals: ariaRequired property"
short-title: ariaRequired
slug: Web/API/ElementInternals/ariaRequired
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaRequired
---

{{APIRef("Web Components")}}

The **`ariaRequired`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) attribute, which indicates that user input is required on the element before a form may be submitted.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : Users need to provide input on an element before a form is submitted.
- `"false"`
  - : User input is not necessary to submit the form.

## Examples

In this example the value of `ariaRequired` is set to "true".

```js
this.internals_.ariaRequired = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
