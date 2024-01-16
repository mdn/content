---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
page-type: css-property
status:
  - experimental
browser-compat: css.properties.white-space-collapse
---

{{CSSRef}}{{seecompattable}}

The **`white-space-collapse`** CSS property controls how {{Glossary("whitespace", "white space")}} inside an element is collapsed.

> **Note:** The `white-space-collapse` and {{CSSxRef("text-wrap")}} properties can be declared together using the {{CSSxRef("white-space")}} shorthand property.

## Syntax

```css
/* Keyword values */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* Global values */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

The `white-space-collapse` property is specified as a single keyword chosen from the list of values below.

### Values

- `collapse`
  - : White space sequences are [collapsed](#collapsing_of_white_space).
- `preserve`
  - : White space sequences and segment break characters are preserved.
- `preserve-breaks`
  - : White space sequences are collapsed, while segment break characters are preserved.
- `preserve-spaces`
  - : White space sequences are preserved, while tabs and segment break characters are converted to spaces.
- `break-spaces`
  - : The behavior is identical to `preserve`, except that:
    - Any sequence of preserved white space always takes up space, including at the end of the line.
    - A line-breaking opportunity exists after every preserved white space character, including between white space characters.
    - Preserved spaces take up space and do not hang, thus affecting the box's intrinsic sizes (`min-content` size and `max-content` size).

> **Note:** _Segment break characters_ are characters such as line feeds that cause text to break onto new lines.

## Collapsing of white space

User agents handle white space collapsing as follows:

- Tabs are generally converted to spaces.
- If segment breaks are to be collapsed:
  - Sequences of segment breaks are collapsed down to a single segment break.
  - They are converted to spaces in the case of languages that separate words with spaces (like English), or removed altogether in the case of languages that do not separate words with spaces (like Chinese).
- If spaces are to be collapsed:
  - Spaces or tabs before or after segment breaks are removed.
  - Sequences of spaces are converted, or "collapsed", to a single space.
- When spaces are preserved, sequences of spaces are treated as non-breaking except that they will soft-wrap at the end of each sequence — i.e. the next line will always start with the next non-space character. In the case of the `break-spaces` value however, a soft wrap could potentially occur after each space, so the next line may start with one or more spaces.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior; all whitespace is 
    collapsed          in the          heading     .</h2>

<h2 class="preserve">In this case all whitespace is 
    preserved          in the          heading     .</h2>

<h2 class="preserve-breaks">In this case only the line break is 
    preserved          in the          heading     .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Shorthand for `white-space-collapse` and {{CSSxRef("text-wrap")}}: The {{CSSxRef("white-space")}} property.
- [CSS text module](/en-US/docs/Web/CSS/CSS_text)
