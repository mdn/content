---
title: "Element: closest() method"
short-title: closest()
slug: Web/API/Element/closest
page-type: web-api-instance-method
browser-compat: api.Element.closest
---

{{APIRef('DOM')}}

The **`closest()`** method of the {{domxref("Element")}} interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified [CSS selector](/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## Syntax

```js-nolint
closest(selectors)
```

### Parameters

- `selectors`
  - : A string of valid [CSS selector](/en-US/docs/Learn/CSS/Building_blocks/Selectors) to match the {{domxref("Element")}} and its ancestors against.

### Return value

The closest ancestor {{domxref("Element")}} or itself, which matches the `selectors`. If there are no such element, `null`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the `selectors` is not a valid CSS selector.

## Examples

### HTML

```html
<article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById("div-03");

// the closest ancestor with the id of "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest("div div")); // <div id="div-03">

// the closest ancestor which is a div and has a parent article
console.log(el.closest("article > div")); // <div id="div-01">

// the closest ancestor which is not a div
console.log(el.closest(":not(div)")); // <article>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

- In Edge 15-18 `document.createElement(tagName).closest(tagName)` will
  return `null` if the element is not first connected (directly or
  indirectly) to the context object, for example the {{domxref("Document")}} object in
  the case of the normal DOM.

## See also

- [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors) module
- Other {{domxref("Element")}} methods that take selectors: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}}, and {{domxref("Element.matches()")}}.
