---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
page-type: css-property
browser-compat: css.properties.baseline-source
sidebar: cssref
---

The **`baseline-source`** [CSS](/en-US/docs/Web/CSS) property defines which [baseline](/en-US/docs/Web/CSS/Reference/Values/baseline-position) to use when inline-level boxes have multiple possible baselines, such as multi-line inline blocks or inline flex containers.
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

The `baseline-source` property is specified as one of the keywords listed below.

### Values

- `auto`
  Specifies [last-baseline](/en-US/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) alignment for inline-block, [first-baseline](/en-US/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) alignment for everything else.
- `first`
  Specifies first-baseline alignment.
- `last`
  Specifies last-baseline alignment.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Baseline selection in inline flex containers

In the following example, the inline flex container on the left uses the `first` baseline, `auto` uses the default baseline (`first` for inline flex containers), and the one on the right uses the `last` baseline.

#### HTML

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
  display: inline-flex;
  flex-direction: column;
  border: 2px solid #888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

```css
.first {
  baseline-source: first;
}

.last {
  baseline-source: last;
}

.auto {
  baseline-source: auto;
}
```

#### Result

{{EmbedLiveSample('baseline_selection_in_inline_flex_containers', '100%', 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`vertical-align`](/en-US/docs/Web/CSS/Reference/Properties/vertical-align) property
- [CSS box alignment](/en-US/docs/Web/CSS/Guides/Box_alignment/Overview)
