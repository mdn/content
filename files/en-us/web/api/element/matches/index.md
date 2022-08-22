---
title: Element.matches()
slug: Web/API/Element/matches
page-type: web-api-instance-method
tags:
  - API
  - CSS Selector
  - DOM
  - Element
  - Method
  - Reference
  - Selector
browser-compat: api.Element.matches
---
{{APIRef("DOM")}}

The **`matches()`** method of the {{domxref("Element")}} interface tests whether the element would be selected by the specified [CSS selector](/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## Syntax

```js
matches(selectors)
```

### Parameters

- `selectors`
  - : A string containing valid [CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) to test the {{domxref("Element")}} against.

### Return value

`true` if the {{domxref("Element")}} matches the `selectors`. Otherwise, `false`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `selectors` cannot be parsed as a CSS selector list.

## Examples

### HTML

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>
```

### JavaScript

```js
const birds = document.querySelectorAll('li');

for (const bird of birds) {
  if (bird.matches('.endangered')) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}
```

This will log "The Philippine eagle is endangered!" to the console, since the element
has indeed a `class` attribute with value `endangered`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS selectors reference](/en-US/docs/Web/CSS/CSS_Selectors)
- Other {{domxref("Element")}} methods that take selectors: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}}, and {{domxref("element.closest()")}}.
