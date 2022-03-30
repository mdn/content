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

The **`revert-layer`** CSS keyword rolls back the value of a property in a {{cssxref("@layer", "cascade layer")}} to the value of the property in a CSS rule matching the element in a previous cascade layer. The value of the property with this keyword is recalculated as if no rules were specified on the target element in the current cascade layer.

If there is no other cascade layer to revert to for the matching CSS rule, the property value rolls back to the {{cssxref("computed_value", "computed value")}} derived from the current layer. (See this [example](/en-US/docs/Web/CSS/revert-layer#revert_to_inherited_value_in_current_cascade_layer).)

Furthermore, if there is no matching CSS rule in the current layer, the property value for the element rolls back to the style defined in a previous [style origin](/en-US/docs/Glossary/Style_origin).


This keyword can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

## Revert-layer vs revert

The `revert-layer` keyword lets you rollback styles to the ones specified in previous cascade layers. All cascade layers exist in the [author origin](/en-US/docs/Glossary/Style_origin). The {{cssxref("revert")}} keyword, in comparison, lets you remove styles applied in the author origin and roll back to styles in user origin or user-agent origin.

The `revert-layer` keyword is ideally meant for applying on properties inside a layer. However, if the `revert-layer` keyword is set on a property outside a layer, the value of the property will roll back to the default value established by the user agent's stylesheet (or by user styles, if any exist). So in this scenario, the `revert-layer` keyword behaves like the {{cssxref("revert")}} keyword.

## Examples

### Cascade layer behaviour

This is the default behaviour

In the example below, two cascade layers are defined in the CSS, `base` and `special`. By default, rules in the `special` layer will override competing rules in the `base` layer because `special` is listed after `base` in the `@layer` declaration statement.

#### HTML

```html
<p>This example contains a list.</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### Result

{{EmbedLiveSample('Cascade_layer_behaviour')}}

### Revert to value in a previous cascade layer with revert-layer

This is example of revert layer

#### HTML

```html
<p>This example contains a list.</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: red;
  }
  .feature {
    color: revert-layer;
  }
}

@layer base {
  .item {
    color: blue;
  }
  .feature {
    color: green;
  }
}
```

#### Result

{{EmbedLiveSample('Revert to value in a previous cascade layer with revert-layer')}}

The color of items in both lists is derived from the `color` property values in the matching rules in the `special` layer. Specifically, items in 'List One' match the `item` rule and are red, and items in 'List Two' match the more specific `feature` rule and are green. The `feature` rule in the `base` layer is ignored.

Now let's examine how the `revert-layer` keyword changes this default behavior.


Consider the case where `color` is set to `revert-layer` in the `feature` rule in the `special` layer.


The `feature` rule applies to items in 'List Two', which also match the `item` and `list` rules, in that order. Of the three rules, only `feature` and `list` rules are defined in the previous cascade layer `base`.

With `color` set to `revert-layer`, the `color` property value rolls back to the value in the more specific matching `feature` rule in the previous layer `base`, and so the items in 'List Two' are now blue.


Now consider if instead of the `feature` rule, `color` is set to `revert-layer` in the `item` rule in `special` layer.


The `item` rule impacts items in 'List One' most specifically. Items in 'List One' also match the `list` rule. There is no `item` rule in the previous layer `base`, but there is a matching `list` rule.

With `color` set to `revert-layer`, the `color` property value rolls back to the value in the matching `list` rule in the previous layer `base`, and so the items in 'List One' are now rebeccapurple.

### Revert to inherited value in current cascade layer

The example below shows what happens if there is no cascade layer with a matching CSS rule for the target element to revert to. The CSS file in the previous example has been modified slightly to demonstrate this scenario.


The `color` property is set to `revert-layer` in the `item` rule in `special` layer. This rule most specifically impacts items in 'List One'. Items in 'List One' also match `list` rule. However, neither of these matching CSS rules exist in the previous `base` layer, and so there is no cascade layer to roll back to.

Therefore, items in 'List One' fall back to inheriting the `color` property value from the matching `list` rule in the current `special` layer.

### Revert to style in previous origin

If there's no style in a previous cascade layer it goes to origin

This example shows the `revert-layer` keyword behavior when there is no cascade layer to revert to _and_ there is no matching CSS rule in the current layer to inherit the property value.

#### HTML

```html
<p>This example contains a list.</p>

<ul>
  <li class="item feature">Item one</li>
  <li class="item">Item two</li>
  <li class="item">Item three</li>
</ul>
```

#### CSS

```css
@layer base;

@layer base {
  .item {
    color: revert-layer;
  }
}
```

{{EmbedLiveSample('Revert_to_style_in_previous_origin', 0, 280)}}

The style for items in 'List One' in this example rolls back to the defaults in the user-agent origin.

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
