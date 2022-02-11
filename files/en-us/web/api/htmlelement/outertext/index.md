---
title: HTMLElement.outerText
slug: Web/API/HTMLElement/outerText
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
browser-compat: api.HTMLElement.outerText
---
{{APIRef("DOM")}}

The **`outerText`** property of the {{domxref("HTMLElement")}} interface returns the same value as {{domxref("HTMLElement.innerText")}}.
When used as a setter it replaces the whole current node with the given text (this differs from `innerText`, which replaces the content _inside_ the current node).

See {{domxref("HTMLElement.innerText")}} for more information and examples showing how both properties are used as getters.

## Value

A {{domxref("DOMString")}} representing the rendered text content of an element and its descendants.

If the element itself is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (for example, is detached from the document or is hidden from view), the returned value is the same as the {{domxref("Node.textContent")}} property.

When used as a setter it replaces the current node with the given text, converting any line breaks into {{HTMLElement("br")}} elements.

## Example

This example highlights the fundamental difference between `outerText` and `innerText` when used as setters.

Consider a page that contains the following HTML:
```html
<div>
  <p>Original content</p>
</div>
```

The JavaScript `p.outerText = "Whole element replaced"` replaces the whole selected `p` element, changing the HTML to:

```html
<div>
   Whole element replaced
</div>
```

Whereas the JavaScript `p.innerText = "Element content replaced"` changes the content inside the selected `p` element:

```html
<div>
  <p>Element content replaced</p>
</div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.outerHTML")}}
