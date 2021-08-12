---
title: initial
slug: Web/CSS/initial
tags:
  - CSS
  - CSS Cascade
  - CSS Value
  - Default state
  - Initial state
  - Keyword
  - Layout
  - Reference
  - initial
browser-compat: css.types.global_keywords.initial
---
{{CSSRef}}

The **`initial`** CSS keyword applies the [initial (or default) value](/en-US/docs/Web/CSS/initial_value) of a property to an element. It can be applied to any CSS property. This includes the CSS shorthand {{cssxref("all")}}, with which `initial` can be used to restore all CSS properties to their initial state.

On [inherited properties](/en-US/docs/Web/CSS/inheritance#Inherited_properties), the initial value may be unexpected. You should consider using the {{cssxref("inherit")}}, {{cssxref("unset")}}, or {{cssxref("revert")}} keywords instead.

## Examples

### Using initial to reset color for an element

#### HTML

```html
<p>
  <span>This text is red.</span>
  <em>This text is in the initial color (typically black).</em>
  <span>This is red again.</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

#### Result

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use {{cssxref("unset")}} to set a property to its inherited value if it inherits, or to its initial value if not.
- Use {{cssxref("revert")}} to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use {{cssxref("inherit")}} to make an element's property the same as its parent.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
