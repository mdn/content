---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - recipe:css-property
browser-compat: css.properties.hanging-punctuation
---
{{CSSRef}}

The **`hanging-punctuation`** [CSS](/en-US/docs/Web/CSS) property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.

```css
/* Keyword values */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Two keywords */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Three keywords */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* Global values */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: revert;
hanging-punctuation: revert-layer;
hanging-punctuation: unset;
```

## Syntax

The `hanging-punctuation` property may be specified with one, two, or three space-separated values.

- **One-value** syntax uses any one of the keyword values in the list below.
- **Two-value** syntax uses one of the following:

  - `first` together with any one of `last`, `allow-end`, or `force-end`
  - `last` together with any one of `first`, `allow-end`, or `force-end`

- **Three-value** syntax uses one of the following:

  - `first`, `allow-end`, and `last`
  - `first`, `force-end`, and `last`

### Values

- `none`
  - : No character hangs.
- `first`
  - : An opening bracket or quote at the start of the first formatted line of an element hangs.
- `last`
  - : A closing bracket or quote at the end of the last formatted line of an element hangs.
- `force-end`
  - : A stop or comma at the end of a line hangs.
- `allow-end`
  - : A stop or comma at the end of a line hangs if it does not otherwise fit prior to justification.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting opening and closing quotes to hang

#### HTML

```html
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim nunc mauris, et sollicitudin est scelerisque sed. Praesent laoreet tortor massa, sit amet vulputate nulla pharetra ut."</p>
```

#### CSS

```css
p {
  hanging-punctuation: first last;
  margin: .5rem;
}
```

#### Result

{{EmbedLiveSample("Setting_opening_and_closing_quotes_to_hang")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('text-indent')}}
- [CSS Tricks: Hanging punctuation](https://css-tricks.com/almanac/properties/h/hanging-punctuation/)
