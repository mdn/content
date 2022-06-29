---
title: orphans
slug: Web/CSS/orphans
tags:
  - CSS
  - CSS Fragmentation
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.orphans
---
{{CSSRef}}

The **`orphans`** [CSS](/en-US/docs/Web/CSS) property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a [page](/en-US/docs/Web/CSS/Paged_Media), region, or [column](/en-US/docs/Web/CSS/CSS_Columns).

```css
/* <integer> values */
orphans: 2;
orphans: 3;

/* Global values */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

In typography, an _orphan_ is the first line of a paragraph that appears alone at the bottom of a page. (The paragraph continues on a following page.)

## Syntax

### Values

- {{cssxref("&lt;integer&gt;")}}
  - : The minimum number of lines that can stay by themselves at the bottom of a fragment before a fragmentation break. The value must be positive.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a minimum orphan size of three lines

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>This is the second paragraph containing some more text than the first one. It is used to demonstrate how orphans work.</p>
  <p>This is the third paragraph. It has a little bit more text than the first one.</p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Result

{{EmbedLiveSample("Setting_a_minimum_orphan_size_of_three_lines", 380, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("widows")}}
- [Paged media](/en-US/docs/Web/CSS/Paged_Media)
