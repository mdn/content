---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.virtualkeyboardpolicy
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

The **`virtualkeyboardpolicy`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute. When specified on an element that the element's content is editable (for example, it is an {{htmlelement("input")}} or {{htmlelement("textarea")}} element, or an element with the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set), it controls the on-screen virtual keyboard behavior on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available.

The attribute must take one of the following values:

- `auto` or an _empty string_, which automatically shows the virtual keyboard when the element is focused or tapped.
- `manual`, which decouples focus and tap on the element from the virtual keyboard's state.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}
- {{domxref("VirtualKeyboard_API", "The VirtualKeyboard API", "", "nocode")}}
