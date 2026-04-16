---
title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
page-type: css-keyword
browser-compat: css.types.global_keywords.revert-rule
sidebar: cssref
---

The **`revert-rule`** [CSS-wide keyword](/en-US/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords) rolls back the value of a property as if the current [style rule](/en-US/docs/Web/CSS/Syntax#css_rulesets) had not been present at all. The cascade then determines the value from the remaining declarations — this could be another rule in the same [cascade layer](/en-US/docs/Web/CSS/Reference/At-rules/@layer), a rule in a different layer, a different [style origin](/en-US/docs/Glossary/Style_origin), or a [defaulted value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#defaulting) (inherited or initial).

The `revert-rule` keyword behaves like {{cssxref("revert-layer")}} in the animation origin.

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

{{EmbedLiveSample('Rolling_back_to_the_previous_rule', '100%', 120)}}

The paragraph text is blue (from the `p` rule), because the `color: revert-rule` declaration in the `p.special` rule causes it to be ignored for the `color` property. The `font-weight: bold` and `border` declarations are unaffected.

### Reverting from a style attribute

When `revert-rule` is used in a [style attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/style), it causes the cascade to act as if the style attribute were not present, since the style attribute is treated as its own style rule.

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

{{EmbedLiveSample('Reverting_from_a_style_attribute', '100%', 120)}}

The paragraph displays in green because `revert-rule` removes the style attribute's declaration from the cascade, and the `p { color: green; }` rule takes effect.

### A chain of revert-rule

The `revert-rule` keyword removes the current rule from the cascade entirely. If the resulting winning rule also uses `revert-rule`, that rule is likewise removed, continuing back through earlier rules.

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
  color: green;
}
p.b {
  color: revert-rule;
}
```

#### Result

{{EmbedLiveSample('A_chain_of_revert-rule', '100%', 120)}}

The `p.b` rule is removed from the cascade by `revert-rule`. Among the remaining rules, `p.a` wins over `p` due to higher [specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity), so the text is green.

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
