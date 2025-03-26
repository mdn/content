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

- `<number> <number> <number>`
  - : The first value is the minimum word length before words should be hyphenated. The second value is the minimum number of characters before the hyphen. The third value is the minimum number of characters after the hyphen.
- `<number> <number>`
  - : The first value is the minimum word length before words should be hyphenated. The second value is the minimum number of characters before the hyphen. The minimum number of characters after the hyphen will be set equal to the second value.
- `<number>`
  - : The value is the minimum word length before words should be hyphenated. The minimum number of characters before and after the hyphen will be set to `auto`.

If `auto` is set for any of the values, the user agent will choose an appropriate value for the current layout. Unless the user agent can calculate a better value, the following default values will be used:

- Minimum word length to allow hyphenation: 5
- Minimum number of characters before the hyphen: 2
- Minimum number of characters after the hyphen: 2

Note that if a word is too short to meet the given constraints, it will not be hyphenated. For example, given a value like `hyphenate-limit-chars: auto 3 4`, words shorter than 7 characters will never be hyphenated, since it is impossible to have 3 characters before the hyphen and 4 characters after it.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting hyphenation limits

In this example, we have four boxes each containing the same text. For the purpose of comparison, the first box shows the default hyphenation applied by the browser. The next three boxes demonstrate the result of constraining the browser's default behavior using different `hyphenate-limit-chars` values.

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
  hyphenate-limit-chars: 5 9 2;
}

#ex4 {
  hyphenate-limit-chars: 5 2 7;
}
```

#### Result

{{EmbedLiveSample("Setting hyphenation limits", "", 200)}}

In the first box, we don't set `hyphenate-limit-chars`, allowing the browser to apply its default algorithm. By default, the browser uses the values `5 2 2` unless it can find better values.

In the second box, we prevent the browser from hyphenating words unless they are at least 14 characters long by setting `hyphenate-limit-chars: 14`. As a result, "juxtaposition" is not hyphenated in the second box because it is only 13 characters long.

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

In the third box, we constrain the browser to include at least 9 characters before the hyphen by setting `hyphenate-limit-chars: 5 9 2`. The effect is that "acknowledgement" is now hyphenated as "acknowledge-ment" rather than the default version "acknowl-edgement", as shown in the first box.

Note that the browser does not have to include exactly 9 characters before the hyphen: as long as the constraints given in `hyphenate-limit-chars` are satisfied, the browser can break the word in the place it considers best. So in this case, for example, it chooses "acknowledge-ment" rather than the less readable "acknowled-gement".

<!-- cSpell:ignore juxtaposi tion -->

In the fourth box, we make the browser include at least 7 characters after the hyphen by setting
`hyphenate-limit-chars: 5 2 7`. The effect is that "juxtaposition" is hyphenated as "juxta-position" rather than the default "juxtaposi-tion".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("hyphens")}}
- [CSS Text module](/en-US/docs/Web/CSS/CSS_text)
