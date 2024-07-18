---
title: "HTMLElement: virtualKeyboardPolicy property"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLElement.virtualKeyboardPolicy
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`virtualKeyboardPolicy`** property of the {{domxref("HTMLElement")}} interface gets and sets a string indicating the on-screen virtual keyboard behavior on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available, if the element's content is editable (for example, it is an {{htmlelement("input")}} or {{htmlelement("textarea")}} element, or an element with the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set).

It reflects the value of the [`virtualkeyboardpolicy`](/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) HTML global attribute.

## Value

An enumerated value; possible values are:

- `"auto"` or an empty string (`""`)
  - : The browser automatically shows the virtual keyboard when the user taps or focuses the element.
- `"manual"`
  - : The browser does not automatically show the virtual keyboard: showing/hiding the virtual keyboard is handled manually by the script.

## Examples

The following example shows how to control the on-screen virtual keyboard behavior via script:

```js
const element = document.querySelector("input");

// the on-screen virtual keyboard behavior will be controlled by script manually
element.virtualKeyboardPolicy = "manual";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`virtualkeyboardpolicy`](/en-US/docs/Web/HTML/Global_attributes#virtualkeyboardpolicy) HTML global attribute
