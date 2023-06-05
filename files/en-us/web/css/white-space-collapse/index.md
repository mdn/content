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

> **Note:** Values of the {{CSSxRef("white-space")}} property can act as shorthand for `white-space-collapse` and {{CSSxRef("text-wrap")}}.

## Syntax

```css
/* Keyword values */
white-space-collapse: collapse;
white-space-collapse: discard;
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
- `discard`
  - : All white space in the element is discarded.
- `preserve`
  - : White space sequences and sgement break characters (characters that cause text to break onto new lines, such as line feeds) are preserved.
- `preserve-breaks`
  - : White space sequences are collapsed, while segment break characters (such as line feeds) are preserved.
- `preserve-spaces`
  - : White space sequences are preserved, while tabs and segment break characters (such as line feeds) are converted to spaces.
- `break-spaces`
  - : The behavior is identical to that of `preserve`, except that:
    - Any sequence of preserved white space always takes up space, including at the end of the line.
    - A line-breaking opportunity exists after every preserved white space character, including between white space characters.
    - Such preserved spaces take up space and do not hang, thus affecting the box's intrinsic sizes (`min-content` size and `max-content` size).

## Collapsing of white space

User agents handle white space collapsing as follows:

- Tabs are generally converted to spaces.
- If segment breaks are to be collapsed:
  - Sequences of segment breaks are collapsed down to a single segment break.
  - They are converted to spaces in the case of languages that separate words with spaces (like English), or removed altogether in the case of languages that do not separate words with spaces (like Chinese).
- If spaces are to be collapsed:
  - Spaces or tabs before or after segment breaks are removed.
  - Sequences of spaces are converted to a single space width.
- When spaces are preserved, sequences of spaces are treated as non-breaking except that they will soft-wrap at the end of each sequence. In the case of the `break-spaces` value, they will soft wrap after each space.

See the [CSS text](/en-US/docs/Web/CSS/CSS_Text) specification [phase I: collapsing and transformation](https://drafts.csswg.org/css-text-4/#white-space-phase-1) section for the spec definition.

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
- [CSS text module](/en-US/docs/Web/CSS/CSS_Text)
