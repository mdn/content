---
title: Element.ariaMultiSelectable
slug: Web/API/Element/ariaMultiSelectable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaMultiSelectable
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaMultiSelectable
---
{{DefaultAPISidebar("DOM")}}

The **`ariaMultiSelectable`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) attribute, which indicates that the user may select more than one item from the current selectable descendants.

> **Note:** Where possible use an HTML {{htmlelement("select")}} element as this has built in semantics and does not require ARIA attributes.

## Value

A string with one of the following values:

- `"true"`
  - : More than one item may be selected at a time.
- `"false"`
  - : Only one item may be selected.

## Examples

In this example the `aria-multiselectable` attribute on the element with an ID of `listbox1` is set to "true" indicating that this input accepts multiple selected items. Using `ariaMultiSelectable` we update the value to "false".

```html
<div role="listbox" tabindex="0" id="listbox1"
  aria-multiselectable="true" aria-labelledby="listbox1label" aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">Green</div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div<
</div>
```

```js
let el = document.getElementById('listbox1');
console.log(el.ariaMultiSelectable); // "true"
el.ariaMultiSelectable = "false"
console.log(el.ariaMultiSelectable); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: listbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
