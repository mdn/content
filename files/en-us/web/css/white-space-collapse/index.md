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

> **Note:** Newer values of the {{CSSxRef("white-space")}} property can act as shorthand for `white-space-collapse` and {{CSSxRef("text-wrap")}}.

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
  - : Sequences of white space are [collapsed](#collapsing_of_white_space).
- `discard`
  - : All white space in the element is removed.
- `preserve`
  - : Sequences of white space and line break characters (such as line feeds) are preserved.
- `preserve-breaks`
  - : Sequences of white space are collapsed, while line break characters (such as line feeds) are preserved.
- `preserve-spaces`
  - : Sequences of white space are preserved, while tabs and line break characters (such as line feeds) are converted to spaces.
- `break-spaces`
  - : The behavior is identical to that of `preserve`, except that:
    - Any sequence of preserved white space always takes up space, including at the end of the line.
    - A line-breaking opportunity exists after every preserved white space character, including between white space characters.
    - Such preserved spaces take up space and do not hang, thus affecting the box's intrinsic sizes (`min-content` size and `max-content` size).

## Collapsing of white space

The [CSS text](/en-US/docs/Web/CSS/CSS_Text) specification contains a [phase I: collapsing and transformation](https://drafts.csswg.org/css-text-4/#white-space-phase-1) section that precisely defines what "white space is collapsed" means, including an example with an illustration. Usually, it means reducing sequences of multiple white-space characters down to a single space character — though in some cases, it means reducing them to no character (the empty string).

Also see [Segment Break Transformation Rules](https://drafts.csswg.org/css-text-4/#line-break-transform) for information on how white space collapsing is handled in CSS.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

```html
<h2 class="collapse">The default behavior; all the whitespace is 
    collapsed          in the          heading     .</h2>

<h2 class="preserve">In this case all the whitespace is 
    preserved          in the          heading     .</h2>

<h2 class="preserve-breaks">In this case only the line break is 
    preserved          in the          heading     .</h2>
```

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
  font-size: 2rem;
  font-family: sans-serif;
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
