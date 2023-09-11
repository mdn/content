---
title: "Element: ariaMultiLine property"
short-title: ariaMultiLine
slug: Web/API/Element/ariaMultiLine
page-type: web-api-instance-property
browser-compat: api.Element.ariaMultiLine
---

{{DefaultAPISidebar("DOM")}}

The **`ariaMultiLine`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) attribute, which indicates whether a text box accepts multiple lines of input or only a single line.

> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="text"` or a {{htmlelement("textarea")}} as these have built in semantics and do not require ARIA attributes.

## Value

A string with one of the following values:

- `"true"`
  - : This is a multi-line text box.
- `"false"`
  - : This is a single-line text box.

## Examples

In this example the `aria-multiline` attribute on the element with an ID of `txtBoxInput` is set to "true" indicating that this box allows for multiple lines of input. Using `ariaMultiLine` we update the value to "false".

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
console.log(el.ariaMultiLine); // "true"
el.ariaMultiLine = "false";
console.log(el.ariaMultiLine); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
