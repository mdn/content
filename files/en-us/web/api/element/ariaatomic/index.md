---
title: Element.ariaAtomic
slug: Web/API/Element/ariaAtomic
tags:
  - API
  - Property
  - Reference
  - ariaAtomic
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaAtomic
---
{{DefaultAPISidebar("DOM")}}

The **`ariaAtomic`** property of the {{domxref("Element")}} interface reflects the value of the `aria-atomic` attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the {{domxref("aria-relevant")}} attribute.

## Syntax

    var ariaAtomic = element.ariaAtomic;
    element.ariaAtomic = ariaAtomic

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"false"`
  - : Assistive technologies will present only the changed node or nodes.
- `"true"`
  - : Assistive technologies will present the entire changed region as a whole, including the author-defined label if one exists.

## Examples

In this example the `aria-atomic` attribute on the element with an ID of `"clock"` is set to "true". Using `ariaAtomic` we update the value to "false".

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

```js
let el = document.getElementById('clock');
console.log(el.ariaAtomic); // true
el.ariaAtomic = "false"
console.log(el.ariaAtomic); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
