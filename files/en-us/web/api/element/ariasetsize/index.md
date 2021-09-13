---
title: Element.ariaSetSize
slug: Web/API/Element/ariaSetSize
tags:
  - API
  - Property
  - Reference
  - ariaSetSize
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaSetSize
---
{{DefaultAPISidebar("DOM")}}

The **`ariaSetSize`** property of the {{domxref("Element")}} interface reflects the value of the `aria-setsize` attribute, which defines the number of items in the current set of listitems or treeitems.

## Syntax

    var ariaSetSize = element.ariaSetSize;
    element.ariaSetSize = ariaSetSize

### Value

A {{domxref("DOMString")}} containing an integer.

## Examples

In this example the `aria-setsize` attribute on the element with an ID of `tab-id` is set to "3", to inform a device that there are currently 3 tabs in the group. Using `ariaSetSize` we update the value to "4".

```html
<button role="tab" aria-selected="true" aria-setsize="3" aria-controls="tabpanel-id" id="tab-id">Tab label</button>
```

```js
let el = document.getElementById('tab-id');
console.log(el.ariaSetSize); // 3
el.ariaSetSize = "4";
console.log(el.ariaSetSize); // 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: tab role](/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
