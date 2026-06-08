---
title: "HTMLTemplateElement: shadowRootSlotAssignment property"
short-title: shadowRootSlotAssignment
slug: Web/API/HTMLTemplateElement/shadowRootSlotAssignment
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLTemplateElement.shadowRootSlotAssignment
---

{{APIRef("Web Components")}}{{SeeCompatTable}}

The **`shadowRootSlotAssignment`** property of the {{domxref("HTMLTemplateElement")}} interface indicates whether the element has been configured to use [named or unnamed slot assignment](/en-US/docs/Web/API/Web_components/Using_templates_and_slots#named_and_manual_slot_assignment).

This property can be used to [detect support for the declarative attribute](#feature_detection_for_shadowrootslotassignment) on the {{htmlelement("template")}} element.

The property can't be read to determine the slot assignment method of a shadow root.
This is because a `<template>` element declaration results in the creation of either an `HTMLTemplateElement` or a `ShadowRoot`.
If a shadow root is created, then the `HTMLTemplateElement` does not, so you can't use it to check the slot assignment.
If a `HTMLTemplateElement` is created then it isn't a shadow root, and it can't easily be changed into one - so the value is irrelevant

If defined, it reflects the value of the [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) attribute of the associated {{htmlelement("template")}} element.

## Value

A string that reflects the value of the [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.
Possible values are `"named"` and `"manual"`.

## Examples

### Feature detection for `shadowrootslotassignment`

If you're declaratively creating shadow roots that rely on unnamed slot assignment, using {{htmlelement("template")}} elements, you can use the existence of this property on the `HTMLTemplateElement` to feature check for support.
This works because the property was added as the same time as unnamed assignment using the `"manual"` value.

```js
const isShadowRootSlotAssignmentSupported = Object.hasOwn(
  HTMLTemplateElement.prototype,
  "shadowRootSlotAssignment",
);
```

The value of `isShadowRootSlotAssignmentSupported` could then be used to fallback to attaching the shadow root with {{domxref("Element.attachShadow()")}}, or to inform the user of what browser versions they need to use.

Note that if you're using named slot assignment there is no need to feature check for `shadowrootslotassignment`, because named assignment is supported by default.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) attribute of the `<template>` element
- [`ShadowRoot.slotAssignment`](/en-US/docs/Web/API/ShadowRoot/slotAssignment)
