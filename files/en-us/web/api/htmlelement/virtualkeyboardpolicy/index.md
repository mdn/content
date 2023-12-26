---
title: "HTMLElement: virtualkeyboardpolicy property"
short-title: virtualkeyboardpolicy
slug: Web/API/HTMLElement/virtualkeyboardpolicy
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLElement.virtualkeyboardpolicy
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`virtualkeyboardpolicy`** property of the {{domxref("HTMLElement")}} interface gets and sets a string indicating whether the default handling of the virtualkeyboard by the browser is enabled, if the element is contenteditable (like {{htmlelement("input")}}, {{htmlelement("textarea")}} or the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) set on the element), or is handled via script manually.

It reflects the value of the [`virtualkeyboardpolicy`](/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) HTML global attribute.

## Value

An enumerated value; possible values are:

- `"auto"`:
  - The default handling of the virtualkeyboard by the browser is enabled.
- `"manual"`:
  - The default handling of the virtualkeyboard in a browser is prevented and the virtualkeyboard needs to be handled by the script.
- an empty string (`""`):
  - Equal to `"auto"`.

## Examples

The following example shows change the virtualkeyboard handling behavior via script:

```js
const element = document.querySelector("input");

// change the virtual keyboard of the element to be handled by sciript
element.virtualkeyboardpolicy = "manual";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`virtualkeyboardpolicy`](/en-US/docs/Web/HTML/Global_attributes#virtualkeyboardpolicy) HTML global attribute
