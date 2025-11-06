---
title: CSS nesting and specificity
short-title: Nesting and specificity
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
page-type: guide
sidebar: cssref
---

The [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity) of the `&` nesting selector is calculated using the largest specificity in the associated selector list. This is identical to how specificity is calculated when using the {{cssxref(':is',':is()')}} function.

```html
<b class="foo">
  <i>Blue text</i>
</b>
```

## `&` nesting syntax

```css-nolint
#a, b {
  & i {
    color: blue;
  }
}

.foo i {
  color: red;
}
```

## `:is()` syntax

```css
:is(#a, b) {
  & i {
    color: blue;
  }
}

.foo i {
  color: red;
}
```

In this example, the id selector (`#a`) has a specificity of [`1-0-0`](/en-US/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories), while the type selector (`b`) has a specificity of `0-0-1`. The [`&` nesting selector](/en-US/docs/Web/CSS/Reference/Selectors/Nesting_selector) and `:is()` pseudo-class both take a specificity of `1-0-0`, even though the `#a` id selector is never used.

The `.foo` class selector has a specificity of `0-1-0`. This makes the total specificity `1-0-1` for `& i` and `0-1-1` for `.foo i`, meaning that `color: blue;` wins out.

## See also

- [CSS nesting](/en-US/docs/Web/CSS/CSS_nesting) module
- [`&` nesting selector](/en-US/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Using CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Nesting at-rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
