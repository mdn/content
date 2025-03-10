---
title: "HTMLElement: outerText property"
short-title: outerText
slug: Web/API/HTMLElement/outerText
page-type: web-api-instance-property
browser-compat: api.HTMLElement.outerText
---

{{APIRef("DOM")}}

The **`outerText`** property of the {{domxref("HTMLElement")}} interface returns the same value as {{domxref("HTMLElement.innerText")}}.
When used as a setter it replaces the whole current node with the given text (this differs from `innerText`, which replaces the content _inside_ the current node).

See {{domxref("HTMLElement.innerText")}} for more information and examples showing how both properties are used as getters.

## Value

A string representing the rendered text content of an element and its descendants.

If the element itself is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (for example, is detached from the document or is hidden from view), the returned value is the same as the {{domxref("Node.textContent")}} property.

When used as a setter it replaces the current node with the given text, converting any line breaks into {{HTMLElement("br")}} elements.

## Examples

This example highlights the fundamental difference between `outerText` and `innerText` when used as setters (they are the same when used by getters).

> [!NOTE]
> The example is a modified version of [What is the difference between innerText and outerText?](https://stackoverflow.com/questions/18481382/what-is-the-difference-between-innertext-and-outertext/18481435#18481435) (Stack overflow) by [codingintrigue](https://stackoverflow.com/users/571194/codingintrigue), is licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

Consider a page that contains the following HTML:

```html
<div>
  <p>Original content</p>
</div>
```

`outerText` replaces the whole selected element, so the JavaScript `p.outerText = "Whole element replaced"` replaces the whole selected `p` element:

```html
<div>Whole element replaced</div>
```

By contrast, `p.innerText = "Content inside element replaced"` replaces the content _inside_ the selected `p` element:

```html
<div>
  <p>Content inside element replaced</p>
</div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.outerHTML")}}
