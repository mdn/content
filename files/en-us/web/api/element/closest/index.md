---
title: Element.closest()
slug: Web/API/Element/closest
tags:
  - API
  - CSS Selector
  - DOM
  - Element
  - Method
  - Reference
  - Selector
browser-compat: api.Element.closest
---
{{APIRef('DOM')}}

The **`closest()`** method of the {{domxref("Element")}} interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified [CSS selector](/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## Syntax

```js
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
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById('div-03');

// the closest ancestor with the id of "div-02"
console.log(el.closest('#div-02')); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest('div div')); // <div id="div-03">

// the closest ancestor which is a div and has a parent article
console.log(el.closest("article > div")); // <div id="div-01">

// the closest ancestor which is not a div
console.log(el.closest(":not(div)")); // <article>
```

## Polyfill

For browsers that do not support `Element.closest()`, but carry support for
`element.matches()` (or a prefixed equivalent, meaning IE9+), a polyfill
exists:

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
```

However, if you really do require IE 8 support, then the following polyfill will do the
job very slowly, but eventually. However, it will only support CSS 2.1 selectors in IE
8, and it can cause severe lag spikes in production websites.

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}
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

- [CSS selectors reference](/en-US/docs/Web/CSS/CSS_Selectors)
- Other {{domxref("Element")}} methods that take selectors: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}}, and {{domxref("Element.matches()")}}.
