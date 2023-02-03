---
title: CSSLayerBlockRule.name
slug: Web/API/CSSLayerBlockRule/name
page-type: web-api-instance-property
browser-compat: api.CSSLayerBlockRule.name
---

{{APIRef("CSSOM")}}

The read-only **`name`** property of the {{domxref("CSSLayerBlockRule")}} interface represents the name of the associated cascade layer.

## Value

A string containing the name of the layer, or `""` if the layer is anonymous.

## Examples

### HTML

```html
<output></output> <output></output>
```

### CSS

```css
output {
  display: block;
}

@layer special {
  div {
    color: rebeccapurple;
  }
}

@layer {
  div {
    color: black;
  }
}
```

### JavaScript

```js
const item1 = document.getElementsByTagName("output")[0];
const item2 = document.getElementsByTagName("output")[1];
const rules = document.styleSheets[1].cssRules;
const layer = rules[0]; // A CSSLayerBlockRule
const anonymous = rules[1]; // An anonymous CSSLayerBlockRule

item1.textContent = `The first CSSLayerBlockRule defines the "${layer.name}" layer.`;
item2.textContent = `A second CSSLayerBlockRule defines a layer with the following name: "${anonymous.name}".`;
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The statement declaration of an {{cssxref("@layer")}} is represented by a {{domxref("CSSLayerStatementRule")}}.
