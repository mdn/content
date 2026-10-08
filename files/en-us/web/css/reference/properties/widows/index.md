---
title: "`widows` CSS property"
short-title: widows
slug: Web/CSS/Reference/Properties/widows
page-type: css-property
browser-compat: css.properties.widows
sidebar: cssref
---

The **`widows`** [CSS](/en-US/docs/Web/CSS) property sets the minimum number of lines in a block container that must be shown at the _top_ of a [page](/en-US/docs/Web/CSS/Guides/Paged_media), region, or [column](/en-US/docs/Web/CSS/Guides/Multicol_layout).

In typography, a _widow_ is the last line of a paragraph that appears alone at the top of a page. (The paragraph is continued from a prior page.)

## Syntax

```css
/* <integer> values */
widows: 2;
widows: 3;

/* Global values */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Values

This property is specified as one `<integer>`:

- {{cssxref("&lt;integer&gt;")}}
  - : The minimum number of lines that can stay by themselves at the top of a new fragment after a fragmentation break. The value must be positive.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Controlling column widows

This example uses a checkbox to switch `widows` between `2` and `1`. With `widows: 2`, at least two lines of a paragraph must appear at the top of a column. With `widows: 1`, the paragraph can be broken anywhere.

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how widows work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
<form>
  <input type="checkbox" id="widows" checked />
  <label for="widows">Apply widows: 2</label>
</form>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  width: 400px;
  height: 160px;
  columns: 3;
  column-fill: auto;
  orphans: 1;
  widows: 1;
}

div:has(~ form input:checked) {
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Result

{{EmbedLiveSample("Controlling_column_widows", "", 280)}}

In Firefox, which does not support `widows`, the behavior in this example is essentially equivalent to `widows: 1`, regardless of the checkbox state. The following screenshot shows the result with `widows: 2` in a supporting browser:

![Three paragraphs in three columns. The second paragraph spans the first and second columns. The third paragraph has two lines at the bottom of the second column and two lines at the top of the third column.](with-widows.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("orphans")}}
- [Paged media](/en-US/docs/Web/CSS/Guides/Paged_media)
