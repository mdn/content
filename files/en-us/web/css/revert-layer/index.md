---
title: revert-layer
slug: Web/CSS/revert-layer
tags:
  - CSS
  - CSS Value
  - Keyword
  - Reference
  - revert-layer
browser-compat: css.types.global_keywords.revert-layer
---
{{CSSRef}}

The **`revert-layer`** CSS keyword rolls back the value of a property in a {{cssxref("@layer", "cascade layer")}} to the value of the property in a previous cascade layer or a previous [style origin](/en-US/docs/Glossary/Style_origin). It can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

## Revert-layer vs revert

The `revert-layer` keyword lets you rollback values to the ones specified in previous cascade layers, which exist within the author origin. The {{cssxref("revert")}} keyword, in comparison, lets you remove values applied in the author origin and roll back to user or user agent styles.

The `revert-layer` keyword is ideally meant for applying on properties inside a layer. However, if the `revert-layer` keyword is set on a property outside a layer, the value of the property will roll back to the default value established by the user agent's stylesheet (or by user styles, if any exist). So in this scenario, the `revert-layer` keyword behaves like the {{cssxref("revert")}} keyword.

## Example

### Revert to value in a previous cascade layer

In the example below, two cascade layers are defined - `base` and `special`. Rules for the `color` property are defined in both the layers. Ordinarily, rules in the `special` layer will override competing rules in the `base` layer because of the order of the layers in the `@layer` declaration statement. However, when the `revert-layer` keyword is applied to the competing rule in the `special` layer, the property value rolls back to it's definition in the `base` layer.

#### HTML

```html
<div class="item">
  <p>This text is green because <code>color</code> is set to <code>revert-layer</code> in the <code>special</code> layer. So the <code>color</code> property rolls back one layer and gets it's value from the <code>base</code> layer.</p>
  <p>The styles for <code>border</code> and <code>font-size</code> come from the <code>base</code> layer.
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: green;
    border: 3px solid blue;
    font-size: 1.3em;
  }
}
```

{{EmbedLiveSample('Revert_to_value_in_a_previous_cascade_layer')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use the {{cssxref("initial")}} keyword to set a property to its initial value.
- Use the {{cssxref("inherit")}} keyword to make an element's property the same as its parent.
- Use the {{cssxref("revert")}} keyword to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use the {{cssxref("unset")}} keyword to set a property to its inherited value if it inherits or to its initial value if not.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
