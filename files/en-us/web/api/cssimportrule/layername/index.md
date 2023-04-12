---
title: "CSSImportRule: layerName property"
short-title: layerName
slug: Web/API/CSSImportRule/layerName
page-type: web-api-instance-property
browser-compat: api.CSSImportRule.layerName
---

{{APIRef("CSSOM")}}

The read-only **`layerName`** property of the {{domxref("CSSImportRule")}} interface returns the name of the cascade layer created by the {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

If the created layer is anonymous, the string is empty (`""`), if no layer has been
created, it is the `null` object.

## Value

A string, that can be empty, or the `null` object.

## Examples

The document's single stylesheet contains three {{cssxref("@import")}} rules. The first declaration imports a stylesheet into a named layer. The second declaration imports a stylesheet into an anonymous layer. The third declaration imports a stylesheet without a layer declaration.

The `layerName` property returns the name of the layer associated with the imported
stylesheet.

```css
@import url("style1.css") layer(layer-1);
@import url("style2.css") layer;
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].layerName); // returns `"layer-1"`
console.log(myRules[1].layerName); // returns `""` (an anonymous layer)
console.log(myRules[2].layerName); // returns `null`
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Learning area : [Cascade layers](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)
- {{cssxref("@import")}} and {{cssxref("@layer")}}
