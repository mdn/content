---
title: Element.ariaRowSpan
slug: Web/API/Element/ariaRowSpan
tags:
  - API
  - Property
  - Reference
  - ariaRowSpan
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaRowSpan
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRowSpan`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

## Syntax

```js
var ariaRowSpan = element.ariaRowSpan;
element.ariaRowSpan = ariaRowSpan
```

### Value

A {{domxref("DOMString")}} which contains an integer.

## Examples

In this example the `aria-rowspan` attribute on the element with an ID of `spanning-heading` is set to "3". Using `ariaRowSpan` we update the value to "2".

```html
<table>
  <tr>
    <th id="spanning-heading" rowspan="3" aria-rowspan="3">Spanning heading</th>
    <th>Heading</th>
  </tr>
  <tr>
    <td>One</td>
  </tr>
  <tr>
    <td>Two</td>
  </tr>
</table>
```

```js
let el = document.getElementById('spanning-heading');
console.log(el.ariaRowSpan);
el.ariaRowSpan = "2";
console.log(el.ariaRowSpan);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role)
