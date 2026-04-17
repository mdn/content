---
title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
page-type: css-keyword
browser-compat: css.types.global_keywords.revert-rule
sidebar: cssref
---

The **`revert-rule`** [CSS-wide keyword](/en-US/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) rolls back the cascaded value of a property to the value it would have had if the current [style rule](/en-US/docs/Web/CSS/Syntax#css_rulesets) had not been present. The cascade then determines the value from the remaining declarations — this could be another rule in the same [cascade layer](/en-US/docs/Web/CSS/Reference/At-rules/@layer), a rule in a different layer, a different [style origin](/en-US/docs/Glossary/Style_origin), or a [default value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#defaulting) (`inherited` or `initial`).

When used inside a [CSS animation](/en-US/docs/Web/CSS/CSS_animations) (the animation origin), the `revert-rule` keyword behaves like {{cssxref("revert-layer")}}.

This keyword can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

## Revert-rule vs. revert-layer vs. revert

The `revert-rule`, {{cssxref("revert-layer")}}, and {{cssxref("revert")}} keywords each roll back the cascade, but at different levels of granularity:

- {{cssxref("revert")}} removes all declarations from the current [style origin](/en-US/docs/Glossary/Style_origin), rolling back to the previous origin (for example, from author styles to user-agent styles).
- {{cssxref("revert-layer")}} removes all declarations from the current [cascade layer](/en-US/docs/Web/CSS/Reference/At-rules/@layer), rolling back to the previous layer within the same origin.
- `revert-rule` removes only the declarations from the current style rule. Other rules in the same cascade layer still apply.

This makes `revert-rule` useful for conditionally ignoring specific declarations within a rule while still respecting declarations from other rules in the same layer.

## Examples

### Rolling back to the previous rule

In this example, two rules target the same element. The second rule uses `revert-rule` on the `color` property, which causes the cascade to determine the value as if the `p.special` rule were not present, falling back to the value established by the first rule.

#### HTML

```html
<p class="special">This paragraph has special styling.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Your browser doesn't support the revert-rule keyword yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: blue;
  font-weight: bold;
}

p.special {
  color: revert-rule;
  border: 1px solid currentcolor;
}
```

#### Result

{{EmbedLiveSample('Rolling back to the previous rule', '100%', 120)}}

The paragraph text is blue from the `p` rule because `color: revert-rule` causes the `color` declaration in `p.special` to be ignored. The `font-weight` and `border` declarations are unaffected.

### Reverting from a style attribute

When `revert-rule` is used in a [style attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/style), it causes the cascade to act as if the style attribute were not present. This works because the style attribute is treated as its own style rule.

#### HTML

```html
<p style="color: revert-rule">This text uses the stylesheet color.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Your browser doesn't support the revert-rule keyword yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: green;
}
```

#### Result

{{EmbedLiveSample('Reverting from a style attribute', '100%', 120)}}

The paragraph text is green because `revert-rule` causes the cascade to ignore the style attribute's declaration, and the `p` rule takes effect.

### Chaining multiple `revert-rule` values

If multiple rules use `revert-rule` for the same property, the cascade ignores each of them in turn, continuing back through earlier rules until it finds a concrete value.

#### HTML

```html
<p class="a b">This text is styled by a chain of revert-rule values.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Your browser doesn't support the revert-rule keyword yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: red;
}
p.a {
  color: revert-rule;
}
p.b {
  color: revert-rule;
}
```

#### Result

{{EmbedLiveSample('Chaining multiple revert-rule values', '100%', 120)}}

Both the `p.b` and `p.a` rules are ignored by `revert-rule`. The cascade falls through to the `p` rule, so the text is red.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("all")}}
- [CSS cascading and inheritance](/en-US/docs/Web/CSS/Guides/Cascade) module
