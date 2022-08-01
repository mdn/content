---
title: SVGStyleElement.disabled
slug: Web/API/SVGStyleElement/disabled
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SVG
  - SVG DOM
  - Experimental
browser-compat: api.SVGStyleElement.disabled
---
{{APIRef("SVG")}} {{SeeCompatTable}}

The **`SVGStyleElement.disabled`** property can be used to get and set whether the stylesheet is disabled (`true`) or not (`false`).

## Value

Returns `true` if the stylesheet is disabled, or there is no associated stylesheet; otherwise `false`.

The property can be used to enable or disable an associated stylesheet.
Setting the property `true` when there is no associated stylesheet has no effect.

## Examples

### SVG

```html
<button>Disable</button>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="50" cy="50" r="25" />
</svg>

```


### JavaScript


```js
const svg = document.getElementsByTagName("svg")[0];
const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
const node = document.createTextNode('circle { fill: red; }');

svg.appendChild(style);
style.disabled=true;  //Won't work!
style.appendChild(node);
```




```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
   style.disabled = !style.disabled;
   const buttonText = style.disabled ? 'Enable' : 'Disable';
   button.innerText = buttonText;
   });
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
