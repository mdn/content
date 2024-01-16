---
title: CSS nesting and specificity
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
page-type: guide
---

{{CSSRef}}

The {{cssxref('specificity')}} of the `&` nesting selector is calculated using the largest specificity in the associated selector list. This is identical to how specificity is calculated when using the {{cssxref(':is',':is()')}} function.

```html
<b class="foo">
  <c>Blue text</c>
</b>
```

## `&` nesting syntax

```css-nolint
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

## `:is()` syntax

```css
:is(#a, b) {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

In this example, the id selector (`#a`) has a specificity of [`1-0-0`](/en-US/docs/Web/CSS/Specificity#selector_weight_categories), while the type selector (`b`) has a specificity of `0-0-1`. The [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector) and `:is()` pseudo-class both take a specificity of `1-0-0`, even though the `#a` id selector is never used.

The `.foo` class selector has a specificity of `0-1-0`. This makes the total specificity `1-0-1` for `& c` and `0-1-1` for `.foo c`, meaning that `color: blue;` wins out.

## See Also

- [CSS nesting](/en-US/docs/Web/CSS/CSS_nesting) module
- [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector)
- [Using CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Nesting at-rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
