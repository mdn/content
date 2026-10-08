---
title: "`orphans` CSS property"
short-title: orphans
slug: Web/CSS/Reference/Properties/orphans
page-type: css-property
browser-compat: css.properties.orphans
sidebar: cssref
---

The **`orphans`** [CSS](/en-US/docs/Web/CSS) property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a [page](/en-US/docs/Web/CSS/Guides/Paged_media), region, or [column](/en-US/docs/Web/CSS/Guides/Multicol_layout).

In typography, an _orphan_ is the first line of a paragraph that appears alone at the bottom of a page. (The paragraph continues on a following page.)

## Syntax

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

### Values

- {{cssxref("&lt;integer&gt;")}}
  - : The minimum number of lines that can stay by themselves at the bottom of a fragment before a fragmentation break. The value must be positive.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Controlling column orphans

This example uses a checkbox to switch `orphans` between `2` and `1`. With `orphans: 2`, at least two lines of a paragraph must appear at the bottom of a column. With `orphans: 1`, the paragraph can be broken anywhere.

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how orphans work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
<form>
  <input type="checkbox" id="orphans" checked />
  <label for="orphans">Apply orphans: 2</label>
</form>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  width: 420px;
  height: 120px;
  columns: 3;
  column-fill: auto;
  orphans: 1;
  widows: 1;
}

div:has(~ form input:checked) {
  orphans: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Result

{{EmbedLiveSample("Controlling_column_orphans", "", 240)}}

In Firefox, which does not support `orphans`, the behavior in this example is essentially equivalent to `orphans: 1`, regardless of the checkbox state. The following screenshot shows the result with `orphans: 2` in a supporting browser:

![Three paragraphs in three columns. The first paragraph occupies the first column. The second paragraph starts in the second column, leaving space below the first paragraph, and continues in the third column. The third paragraph occupies the rest of the third column.](with-orphans.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("widows")}}
- [Paged media](/en-US/docs/Web/CSS/Guides/Paged_media)
