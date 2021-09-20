---
title: Element.ariaLevel
slug: Web/API/Element/ariaLevel
tags:
  - API
  - Property
  - Reference
  - ariaLevel
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaLevel
---
{{DefaultAPISidebar("DOM")}}

The **`ariaLevel`** property of the {{domxref("Element")}} interface reflects the value of the `aria-level` attribute, which defines the hierarchical level of an element within a structure.

> **Note:** Where possible use an HTML {{htmlelement("h1")}} or other correct heading level as these have built in semantics and do not require ARIA attributes.

## Syntax

    var ariaLevel = element.ariaLevel;
    element.ariaLevel = ariaLevel

### Value

A {{domxref("DOMString")}} containing an integer.

## Examples

In this example the `aria-level` attribute on the element with an ID of `main-heading` is set to "1". Using `ariaLevel` we update the value to "2".

```html
<div role="heading" id="main-heading" aria-level="1">This is a main page heading</div>
```

```js
let el = document.getElementById('main-heading');
console.log(el.ariaLevel); // "1"
el.ariaLevel = "2"
console.log(el.ariaLevel); // "2"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: heading role](/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role)
