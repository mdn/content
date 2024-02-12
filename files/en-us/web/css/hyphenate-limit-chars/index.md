---
title: hyphenate-limit-chars
slug: Web/CSS/hyphenate-limit-chars
page-type: css-property
browser-compat: css.properties.hyphenate-limit-chars
---

{{CSSRef}}

The **`hyphenate-limit-chars`** [CSS](/en-US/docs/Web/CSS) property specifies the minimum word length to allow hyphenation of words as well as the minimum number of characters before and after the hyphen.

This property provides you with fine-grained control over hyphenation in text. This control enables you to avoid awkward hyphenations and set appropriate hyphenation for different languages, which, in turn, allows for better typography.

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

### Setting hyphenation limits

In this example, we have four boxes each containing the same text. We'll set different values for `hyphenate-limit-chars` to see the effect.

#### HTML

```html
<div class="container">
  <p id="ex1">juxtaposition and acknowledgement</p>
  <p id="ex2">juxtaposition and acknowledgement</p>
  <p id="ex3">juxtaposition and acknowledgement</p>
  <p id="ex4">juxtaposition and acknowledgement</p>
</div>
```

#### CSS

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

p {
  margin: 1rem;
  width: 120px;
  border: 2px dashed #999;
  font-size: 1.5rem;
  hyphens: auto;
}

#ex2 {
  hyphenate-limit-chars: 14;
}

#ex3 {
  hyphenate-limit-chars: 13 9 3;
}

#ex4 {
  hyphenate-limit-chars: 12 7 5;
}
```

#### Result

{{EmbedLiveSample("Setting hyphenation limits", "", 200)}}

In the first example, we don't set `hyphenate-limit-chars`, and the user agent applies its default algorithm.

In the second example, we specify `hyphenate-limit-chars: 14` meaning that words must be at least 14 characters long before they are hyphenated. In the example, "juxtaposition" is no longer hyphenated, since it is only 13 characters long.

In the third example, we specify `hyphenate-limit-chars: 13 9 3`, so each hyphenated word must have at least 9 characters before the hyphen. The effect is that "acknowledgement" is now hyphenated as "acknowledge-ment" rather than "acknowl-edgement".

In the fourth example, we specify `hyphenate-limit-chars: 12 7 5`, so each hyphenated word must have at least 5 characters after the hyphen. The effect is that "juxtaposition" is hyphenated as "juxtapo-sition" rather than "juxtaposi-tion".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("hyphens")}}
- [CSS Text module](/en-US/docs/Web/CSS/CSS_text)
