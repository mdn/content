---
title: revert-layer
slug: Web/CSS/revert-layer
page-type: css-keyword
status:
  - experimental
browser-compat: css.types.global_keywords.revert-layer
---

{{CSSRef}}{{SeeCompatTable}}

The **`revert-layer`** [CSS-wide keyword](/en-US/docs/Web/CSS/CSS_Types#css-wide_keywords) rolls back the value of a property in a {{cssxref("@layer", "cascade layer")}} to the value of the property in a CSS rule matching the element in a previous cascade layer. The value of a property with this keyword is recalculated as if no rules were specified on the target element in the current cascade layer.

If there is no other cascade layer to revert to for the matching CSS rule, the property value rolls back to the {{cssxref("computed_value", "computed value")}} derived from the current layer. Furthermore, if there is no matching CSS rule in the current layer, the property value for the element rolls back to the style defined in a previous [style origin](/en-US/docs/Glossary/Style_origin).

This keyword can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

## Revert-layer vs. revert

The `revert-layer` keyword lets you rollback styles to those specified in previous cascade layers within the [author origin](/en-US/docs/Glossary/Style_origin). The {{cssxref("revert")}} keyword, in comparison, lets you roll back styles applied in the author origin to those specified in the user origin or user-agent origin.

The `revert-layer` keyword is ideally meant to be applied to properties within a cascade layer. However, if applied to properties outside a cascade layer, it rolls back property values to any values set by presentational hints (such as `width` and `height` attributes or the `<s>` element in HTML), defaulting to the values established by the user agent's stylesheet or user styles. Unlike the `revert` keyword, which considers presentational hints as part of the author origin and reverts them as well, the `revert-layer` keyword ignores presentational hints outside the cascade layer, so it does not revert them.

## Examples

### Default cascade layer behavior

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

{{EmbedLiveSample('Default_cascade_layer_behavior')}}

All the `<li>` elements match the `item` rule in the `special` layer and are red. This is the default cascade layer behavior, where rules in the `special` layer take precedence over rules in the `base` layer.

### Revert to style in previous cascade layer

Let's examine how the `revert-layer` keyword changes the default cascade layer behavior. For this example, the `special` layer contains an additional `feature` rule targeting the first `<li>` element. The `color` property in this rule is set to `revert-layer`.

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

{{EmbedLiveSample('Revert_to_style_in_previous_cascade_layer')}}

With `color` set to `revert-layer`, the `color` property value rolls back to the value in the matching `feature` rule in the previous layer `base`, and so 'Item one' is now green.

### Revert to style in previous origin

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
@layer base {
  .item {
    color: revert-layer;
  }
}
```

#### Result

{{EmbedLiveSample('Revert_to_style_in_previous_origin')}}

The style for all `<li>` elements rolls back to the defaults in the user-agent origin.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
