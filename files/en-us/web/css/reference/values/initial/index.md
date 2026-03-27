---
title: initial
slug: Web/CSS/Reference/Values/initial
page-type: css-keyword
browser-compat: css.types.global_keywords.initial
sidebar: cssref
---

The **`initial`** [CSS](/en-US/docs/Web/CSS) keyword applies the [initial (or default) value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) of a property to an element. It can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}. With `all` set to `initial`, all CSS properties can be restored to their respective initial values in one go instead of restoring each one separately.

On [inherited properties](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties), the initial value may be unexpected. You should consider using the {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, or {{cssxref("revert-layer")}} keywords instead.

## Examples

### Basic usage

In this example, we use the `initial` keyword to reset an element's {{cssxref("color")}} and {{cssxref("font-size")}} property values.

#### HTML

```html
<p>
  This text is red and large.
  <em
    >This text is in the initial color (typically black) and initial size
    (typically 16px).</em
  >
  This is red and large again.
</p>
```

#### CSS

We set `color` and `font-size` on the `<p>` element, then set those properties to `initial` on the {{htmlelement("em")}} element to reset them.

```css
p {
  color: red;
  font-size: 2rem;
}

em {
  color: initial;
  font-size: initial;
}
```

#### Result

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

With the `initial` keyword in this example, the `color` and `font-size` values on the `em` element are restored to the initial values for [`color`](/en-US/docs/Web/CSS/Reference/Properties/color#formal_definition) and [`font-size`](/en-US/docs/Web/CSS/Reference/Properties/font-size#formal_definition), respectively.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("inherit")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, and {{cssxref("unset")}} keywords
- {{cssxref("all")}}
- [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
