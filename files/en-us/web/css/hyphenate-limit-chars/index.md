---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
page-type: css-property
browser-compat: css.properties.hyphenate-limit-chars
---

{{CSSRef}}

The **`hyphenate-limit-chars`** [CSS](/en-US/docs/Web/CSS) property specifies the minimum word length to allow hyphenation of words as well as the minimum number of characters before and after the hyphen.

This property provides you with fine-grained control over hyphenation in text. This control enables you to avoid awkward hyphenations and set appropriate hyphenation for different languages, which, in turn, allows for better typography.

In the interactive example above, the default minimum word length setting of `hyphenate-limit-chars` is too large for either of the long words to be hyphenated, and so the output looks untidy. However, by choosing the other value option, the minimum word length limit is reduced. This allows both the long words to be hyphenated, making for a neater layout.

## Syntax

```css
/* Numeric values */
hyphenate-limit-chars: 10 4 4;
hyphenate-limit-chars: 10 4;
hyphenate-limit-chars: 10;

/* Keyword values */
hyphenate-limit-chars: auto auto auto;
hyphenate-limit-chars: auto auto;
hyphenate-limit-chars: auto;

/* Mix of numeric and keyword values */
hyphenate-limit-chars: 10 auto 4;
hyphenate-limit-chars: 10 auto;
hyphenate-limit-chars: auto 3;

/* Global values */
hyphenate-limit-chars: inherit;
hyphenate-limit-chars: initial;
hyphenate-limit-chars: revert;
hyphenate-limit-chars: revert-layer;
hyphenate-limit-chars: unset;
```

The `hyphenate-limit-chars` property takes 1–3 values that can be numeric or `auto`, as explained below.

### Values

- `x y z`
  - : The first value is the minimum word length before words should be hyphenated. The second value is the minimum number of characters before the hyphen. The third value is the minimum number of characters after the hyphen.
- `x y`
  - : The first value is the minimum word length before words should be hyphenated. The second value is the minimum number of characters before the hyphen. The minimum number of characters after the hyphen will be set equal to the second value.
- `x`
  - : The value is the minimum word length before words should be hyphenated. The minimum number of characters before and after the hyphen will be set to `auto`.

If `auto` is set for any of the values, the user agent will choose an appropriate value for the current layout. Unless the user agent can calculate a better value, the following default values will be used:

- Minimum word length to allow hyphenation: 5
- Minimum number of characters before the hyphen: 2
- Minimum number of characters after the hyphen: 2

> **Note:** If a word is shorter than any of the provided values, it will not be hyphenated.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

```css
p {
  hyphens: auto;
  hyphenate-limit-chars: 10 3 4;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("hyphens")}}
- [CSS Text module](/en-US/docs/Web/CSS/CSS_text)
