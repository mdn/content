---
title: text-align
slug: Web/CSS/text-align
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-align
---
{{CSSRef}}

The **`text-align`** [CSS](/en-US/docs/Web/CSS) property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like {{cssxref("vertical-align")}} but in the horizontal direction.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## Syntax

```css
/* Keyword values */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Character-based alignment in a table column */
text-align: ".";
text-align: "." center;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

The `text-align` property is specified in one of the following ways:

- Using the keyword values `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, or `match-parent`.
- Using a `<string>` value only, in which case the other value defaults to `right`.
- Using both a keyword value and a [`<string>`](#string) value.

### Values

- `start`
  - : The same as `left` if direction is left-to-right and `right` if direction is right-to-left.
- `end`
  - : The same as `right` if direction is left-to-right and `left` if direction is right-to-left.
- `left`
  - : The inline contents are aligned to the left edge of the line box.
- `right`
  - : The inline contents are aligned to the right edge of the line box.
- `center`
  - : The inline contents are centered within the line box.
- `justify`
  - : The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.
- `justify-all` {{experimental_inline}}
  - : Same as `justify`, but also forces the last line to be justified.
- `match-parent`
  - : Similar to `inherit`, but the values `start` and `end` are calculated according to the parent's {{cssxref("direction")}} and are replaced by the appropriate `left` or `right` value.
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : When applied to a table cell, specifies the alignment character around which the cell's contents will align.

## Accessibility concerns

The inconsistent spacing between words created by justified text can be problematic for people with cognitive concerns such as Dyslexia.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Start alignment

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Start_alignment","100%","100%")}}

### Centered text

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Result

{{EmbedLiveSample("Centered_text","100%","100%")}}

### Example using "justify"

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Result

{{EmbedLiveSample('Example using "justify"',"100%","100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
