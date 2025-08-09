---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
page-type: css-property
browser-compat: css.properties.white-space-collapse
sidebar: cssref
---

The **`white-space-collapse`** [CSS](/en-US/docs/Web/CSS) property controls how {{Glossary("whitespace", "white space")}} inside an element is collapsed.

> [!NOTE]
> The `white-space-collapse` and {{CSSxRef("text-wrap-mode")}} properties can be declared together using the {{CSSxRef("white-space")}} shorthand property.

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
  - : White space sequences are [collapsed](/en-US/docs/Web/CSS/CSS_text/Whitespace#collapsing_and_transformation).
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
    - Preserved spaces take up space and do not hang, thus affecting the box's intrinsic sizes ({{cssxref("min-content")}} size and {{cssxref("max-content")}} size).

> [!NOTE]
> _Segment break characters_ are characters such as line feeds that cause text to break onto new lines.

> [!NOTE]
> The [CSS text](/en-US/docs/Web/CSS/CSS_text) module defines a `discard` value for the `white-space-collapse` property to discard all white space in the element, however, this is not supported in any browsers.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior;
  all   whitespace   is   collapsed
  in    the          heading       .</h2>

<h2 class="preserve">In this case
  all   whitespace   is   preserved
  in    the          heading       .</h2>

<h2 class="preserve-breaks">In this case only
  the   line breaks  are  preserved
  in    the          heading       .</h2>

<h2 class="preserve-spaces">In this case only
  the   spaces       are  preserved
  in    the          heading       .</h2>
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

.preserve-spaces {
  white-space-collapse: preserve-spaces;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
  border-bottom: 1px dotted #ccc;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Shorthand for `white-space-collapse` and {{CSSxRef("text-wrap-mode")}}: The {{CSSxRef("white-space")}} property.
- [CSS text module](/en-US/docs/Web/CSS/CSS_text)
- [Handling whitespace in CSS](/en-US/docs/Web/CSS/CSS_text/Whitespace)
