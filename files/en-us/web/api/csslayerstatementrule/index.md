---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
page-type: web-api-interface
browser-compat: api.CSSLayerStatementRule
---

{{APIRef("CSSOM")}}

The **`CSSLayerStatementRule`** represents a {{cssxref("@layer")}} statement rule. It is a statement at-rule, that is a rule that doesn't contain other rules, unlinke {{domxref("CSSLayerBlockRule")}} and merely define one or several layers, providing their name.

This rule allows to declare the ordering layer, explicitly, that is in a apparent way at the beginning of a CSS file: the layer order is defined by the order of first occurence of each layer name. Declaring them with a statement allow the reader to understand the layer order, as well to allow inline and imported layers to be interleaved, which is not possible when using the `CSSLayerBlockRule` syntax.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSRule")}}._

- {{DOMxRef("CSSLayerStatementRule.nameList")}} {{ReadOnlyInline}}
  - An array of strings, that represent the name of each cascade layer by the rule

## Examples

### HTML

```html
<p></p>
```

### CSS

```css
@layer layerName, layerName2;
```

### JavaScript

```js
const item = document.getElementsByTagName("p")[0];
const rules = document.styleSheets[1].cssRules;
// Note that stylesheet #1 is the stylesheet associated with this embedded example,
// while stylesheet #0 is the stylesheet associated with the whole MDN page

const layer = rules[0]; // A CSSLayerStatementRule

item.textContent = `The CSS @layer statement declares the following layers: ${layer.nameList.join(
  ", "
)}.`;
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@layer")}}
-[The `@layer` statement at-rule for named layers](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- {{DOMxRef("CSSLayerBlockRule")}}
