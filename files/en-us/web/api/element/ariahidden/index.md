---
title: Element.ariaHidden
slug: Web/API/Element/ariaHidden
tags:
  - API
  - Property
  - Reference
  - ariaHidden
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaHidden
---
{{DefaultAPISidebar("DOM")}}

The **`ariaHidden`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)) attribute, which indicates whether the element is exposed to an accessibility API.

## Syntax

```js
var ariaHidden = element.ariaHidden;
element.ariaHidden = ariaHidden
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"true"`
  - : The element is hidden from the accessibility API.
- `"false"`
  - : The element is exposed to the accessibility API as if it were rendered.
- `undefined`
  - : The element's hidden state is determined by the user agent based on whether it is rendered.

## Examples

In this example the [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) attribute on the element with an ID of `hidden` is set to "true". Using `ariaHidden` we update the value to "false".

```html
<div id="hidden" aria-hidden="true">Some things are better left unsaid.</div>
```

```js
let el = document.getElementById('hidden');
console.log(el.ariaHidden); // true
el.ariaHidden = "false"
console.log(el.ariaHidden); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
