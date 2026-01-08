---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
page-type: css-property
browser-compat: css.properties.baseline-source
sidebar: cssref
---

The **`baseline-source`** [CSS](/en-US/docs/Web/CSS) property defines which [baseline](/en-US/docs/Web/CSS/Reference/Values/baseline-position) to use when inline-level boxes have multiple possible baselines, such as multi-line [inline blocks](/en-US/docs/Web/CSS/Guides/Display/Block_and_inline_layout) or inline [flex containers](/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#the_flex_container).
The values allow for choosing between aligning to the box's first baseline, last baseline, or letting the browser decide automatically based on the box type.

## Syntax

```css
/* Keyword values */
baseline-source: auto;
baseline-source: first;
baseline-source: last;

/* Global values */
baseline-source: inherit;
baseline-source: initial;
baseline-source: revert;
baseline-source: revert-layer;
baseline-source: unset;
```

### Values

- `auto`
  - : Specifies [`last baseline`](/en-US/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) alignment for inline-block, [`first baseline`](/en-US/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) alignment for everything else.
- `first`
  - : Specifies `first baseline` alignment.
- `last`
  - : Specifies `last baseline` alignment.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Baseline selection in inline flex containers

This example demonstrates using the `baseline-source` property to control the baseline alignment of inline flex containers.

#### HTML

Our HTML includes several {{htmlelement("span")}} elements, which are generic inline containers for phrasing content.
Three of the `<span>` elements contain nested `<span>` children.

```html
<span>Baseline ___</span>

<span class="box first">
  <span>First</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box auto">
  <span>Auto</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box last">
  <span>A</span>
  <span>B</span>
  <span>C</span>
  <span>Last</span>
</span>
```

#### CSS

```css hidden
body {
  font-family: sans-serif;
}

.box {
  border: 2px solid #888 888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

We define all the boxes to be inline flex containers.
We set the `.first` box to use the first baseline, the `.auto` box uses the default baseline (which is `first` for inline flex containers), and the `.last` box uses the last baseline.

```css
.box {
  display: inline-flex;
  flex-direction: column;
}

.first {
  baseline-source: first;
}

.auto {
  baseline-source: auto;
}

.last {
  baseline-source: last;
}
```

#### Result

{{EmbedLiveSample('baseline_selection_in_inline_flex_containers', '100%', 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("vertical-align")}} property
- [CSS box alignment overview](/en-US/docs/Web/CSS/Guides/Box_alignment/Overview)
