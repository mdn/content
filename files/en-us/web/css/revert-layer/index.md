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

The **`revert-layer`** CSS keyword rolls back the value of a property in a {{cssxref("@layer", "cascade layer")}} to the value of the property in the matching CSS rule in a previous cascade layer. The value of the property with this keyword is recalculated as if no rules were specified in the current cascade layer on the target element.

If there is no other cascade layer to revert to for the matching CSS rule, the property value rolls back to the {{cssxref("computed_value", "computed value")}} derived from the current layer. (See this [example](/en-US/docs/Web/CSS/revert-layer#revert_to_inherited_value_in_current_cascade_layer).)

Furthermore, if there is no matching CSS rule in the current layer, the property value for the element rolls back to the style defined in a previous [style origin](/en-US/docs/Glossary/Style_origin).


This keyword can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

## Revert-layer vs revert

The `revert-layer` keyword lets you rollback styles to the ones specified in previous cascade layers. All cascade layers exist in the [author origin](/en-US/docs/Glossary/Style_origin). The {{cssxref("revert")}} keyword, in comparison, lets you remove styles applied in the author origin and roll back to user or user agent styles.

The `revert-layer` keyword is ideally meant for applying on properties inside a layer. However, if the `revert-layer` keyword is set on a property outside a layer, the value of the property will roll back to the default value established by the user agent's stylesheet (or by user styles, if any exist). So in this scenario, the `revert-layer` keyword behaves like the {{cssxref("revert")}} keyword.

## Examples

### Revert to value in a previous cascade layer

In the example below, two cascade layers are defined in the CSS, `base` and `special`. By default, rules in the `special` layer will override competing rules in the `base` layer because `special` is listed after `base` in the `@layer` declaration statement.

Let's examine how the `revert-layer` keyword changes the default behavior.

#### HTML

```html
<div class="primary">
  <p>Introduction</p>
  <p class="item">This text is green because <code>color</code> is set to <code>revert-layer</code> in the <code>special</code> layer. So the <code>color</code> property rolls back to the matching CSS rule in the previous layer and gets it's value from the <code>base</code> layer.</p>
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .primary {
    color: red;
  }
  .item {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: green;
  }
}
```
#### Result

{{EmbedLiveSample('Revert_to_value_in_a_previous_cascade_layer')}}

The first `p` element gets its red color as an inherited style from its parent `div` element. This is the default behavior, where the style is coming from the `special` layer.

The second `p` element gets its green color from the `base` layer. This paragraph is styled by the `item` class selector in the `special` layer, in which the `color` property is set to `revert-layer`. This keyword rolls back the `color` property value to the matching CSS rule of `item` class selector in the previous layer `base`.

### Revert to inherited value in current cascade layer

Building on the previous example, the example below shows what happens if there is no cascade layer to revert to for the matching CSS rule. An additional `p` element has been added inside the `div` element.

#### HTML

```html
<div class="primary">
  <p>Introduction</p>
  <p class="item">This text is green because <code>color</code> is set to <code>revert-layer</code> in the <code>special</code> layer. So the <code>color</code> property rolls back to the matching CSS rule in the previous layer and gets it's value from the <code>base</code> layer.</p>
  <p class="additional">This is some additional text.</p>
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .primary {
    color: red;
  }
  .item {
    color: revert-layer;
  }
  .additional {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: green;
  }
}
```
#### Result

{{EmbedLiveSample('Revert_to_inherited_value_current_cascade_layer')}}

The previous [example](en-US/docs/Web/CSS/revert-layer#revert_to_value_in_a_previous_cascade_layer) explained how the first and second `p` elements get their respective colors.

The third `p` element here gets its red color as an inherited style from its parent `div` element, as specified in the  `special` layer. This paragraph is styled by the `additional` class selector in the `special` layer, in which the `color` property is set to `revert-layer`. There is no matching CSS rule for this element in the previous layer `base`, so there is no cascade layer to roll back to. Therefore, this element falls back to inheriting the style from the current layer `special`. Had there been no matching CSS rule in the current layer, the style would have defaulted to the user-agent origin (or user origin if available).

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
