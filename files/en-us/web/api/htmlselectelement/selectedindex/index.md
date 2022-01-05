---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
tags:
  - API
  - HTML DOM
  - HTML forms
  - HTMLSelectElement
  - Property
  - Reference
browser-compat: api.HTMLSelectElement.selectedIndex
---
{{APIRef("HTML DOM")}}

The **`HTMLSelectElement.selectedIndex`** is a
`long` that reflects the index of the first or last selected
{{HTMLElement("option")}} element, depending on the value of `multiple`. The
value `-1` indicates that no element is selected.

## Syntax

```js
var index = selectElem.selectedIndex;
selectElem.selectedIndex = index;
```

## Example

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
var selectElem = document.getElementById('select')
var pElem = document.getElementById('p')

// When a new <option> is selected
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.innerHTML = 'selectedIndex: ' + index;
})
```

{{EmbedLiveSample("Example", "200px", "80px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
