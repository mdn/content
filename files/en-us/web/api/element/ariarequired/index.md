---
title: "Element: ariaRequired property"
short-title: ariaRequired
slug: Web/API/Element/ariaRequired
page-type: web-api-instance-property
browser-compat: api.Element.ariaRequired
---

{{DefaultAPISidebar("DOM")}}

The **`ariaRequired`** property of the {{domxref("Element")}} interface reflects the value of the `aria-required` attribute, which indicates that user input is required on the element before a form may be submitted.

> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="text"` or a {{htmlelement("textarea")}} as these have built in semantics and do not require ARIA attributes.

## Value

A string with one of the following values:

- `"true"`
  - : Users need to provide input on an element before a form is submitted.
- `"false"`
  - : User input is not necessary to submit the form.

## Examples

In this example the `aria-required` attribute on the element with an ID of `txtBoxInput` is set to "true" indicating that this input must be completed. Using `ariaRequired` we update the value to "false".

```html
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaRequired); // "true"
el.ariaRequired = "false";
console.log(el.ariaRequired); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
