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

The **`matches()`** method of the {{domxref("Element")}} interface tests whether the element would be selected by the specified [selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors).

## Syntax

```js
matches(selectors)
```

### Parameters

- `selectors`
  - : A [selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) string, or an array of [selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) strings.

### Return value

`true` if the {{domxref("Element")}} matches the `selectors` value. Otherwise, `false`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `selectors` is not valid.

## Examples

### HTML

```html
<ul id="birds">
  <li class="amazon">Orange-winged parrot</li>
  <li class="pacific">Philippine eagle</li>
  <li class="europe asia africa">Great white pelican</li>
</ul>
<p></p>
```

### JavaScript

```js
const birds = document.querySelectorAll('li');
const p = document.querySelector('p');
const results = [];

p.append(`Amazon: `);
for (const bird of birds) {
  // the 'matches()' argument can be a string
  if (bird.matches('.amazon')) {
    results.push(`${bird.textContent}`);
  }
}
p.append(`${results.join(', ')}. `);

results.length = 0;
p.append(`Asia and Pacific regions: `);
for (const bird of birds) {
  // the 'matches()' argument can be an array of strings
  if (bird.matches(['.asia', '.pacific'])) {
    results.push(`${bird.textContent}`);
  }
}
p.append(`${results.join(', ')}. `);

```

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS selectors reference](/en-US/docs/Web/CSS/CSS_Selectors)
- Other {{domxref("Element")}} methods that take selectors: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}}, and {{domxref("element.closest()")}}.
