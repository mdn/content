---
title: "`row-rule-break` CSS property"
short-title: row-rule-break
slug: Web/CSS/Reference/Properties/row-rule-break
page-type: css-property
status:
  - experimental
browser-compat: css.properties.row-rule-break
sidebar: cssref
---

{{SeeCompatTable}}

The **`row-rule-break`** [CSS](/en-US/docs/Web/CSS) property sets the behavior for breaking row rules into segments where row rules intersect column gaps.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-break: none;
```

```css interactive-example-choice
row-rule-break: normal;
```

```css interactive-example-choice
row-rule-break: intersection;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-rule: solid thick orange;
  column-rule: solid thick lavender;
  gap: 15px;
}
#example-element i {
  padding: 5px;
}
```

## Syntax

```css
/* Keywords */
row-rule-break: none;
row-rule-break: normal;
row-rule-break: intersection;

/* Global values */
row-rule-break: inherit;
row-rule-break: initial;
row-rule-break: revert;
row-rule-break: revert-layer;
row-rule-break: unset;
```

### Values

This property is specified as a single keyword from the following list:

- `none`
  - : There are no breaks in row rules when they intersect column gaps; rather, a continuous row rule is painted the whole width of the container, from edge to edge.
- `normal`
  - : In grid and flex containers, behaves as `none`. In multi-col, behaves as `none`. This is the default value.
- `intersection`
  - : Row rules always break when they intersect column gaps, with row rule segments starting and ending at container and gap edges.

## Description

The `row-rule-break` property specifies whether or not to break row rules into segments when they cross column gaps.

Row rules are painted within a row gap as one or more segments, with segments occurring between adjacent grid items in separate rows, between flex items or flex lines, depending on the {{cssxref("flex-direction")}} in flex layouts, or in gaps between adjacent rows of columns in multi-col layouts when {{cssxref("column-height")}} creates multiple rows of columns.

The `row-rule-break` property only determines if the break occurs. By default, the break, or space, between row rule segments is the width of the column gap, as each segments starts and ends at the edge of the gap (or edge of the container). If the gap is `0`, this break may not be visible. The end positions can be controlled with the {{cssxref("row-rule-inset")}} properties.

If `row-rule-break` is set to `none`, there are no breaks, the row rule line is continuous, and any `row-rule-inset` values only affect the row rule on the top and bottom edge of the container. When there are breaks, the `row-rule-inset` properties affect the start and end of every row rule segment.

The `row-rule-break` property, along with the {{cssxref("column-rule-break")}} property, can be set using the {{cssxref("rule-break")}} shorthand.

Whether a row rule is by default composed of a single continuous segment or segments that break when intersecting column gaps depends on the container type.

### Grid containers

In grid containers, by default, row rule segments continue through visible "cross" intersections. Setting `row-rule-break: intersection` will force the segments to break at every column gap, where they would otherwise cross.

```html hidden
<h1>Default rule breaks in grid</h1>
<div class="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<p>
  <label
    ><input type="checkbox" /> Set
    <code>row-rule-break: intersection</code></label
  >
</p>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}

:has(:checked) .grid {
  row-rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

By default, there are no row rule breaks. Check the checkbox to set `row-rule-break` to `intersection`, which makes the continuous rules break at every "cross" intersection. By default, the break between segments is the width of the {{cssxref("column-gap")}}.

### Flex containers

In flexbox, when the `flex-direction` is `row` or `row-reverse` in horizontal writing modes, the row rule is continuous, with the column segments starting and ending at the at the edge of the row gaps. When the `flex-direction` is `column` or `column-reverse`, the column rule is continuous, with the row segments starting and ending at the at the edge of the column gaps.

```html hidden
<h1>Default rule breaks in flexbox</h1>
<article>
  <section>
    <h2>flex-direction: row</h2>
    <div class="flexbox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  <section>
    <h2>flex-direction: column</h2>
    <div class="flexbox column">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</article>
<p>
  <label
    ><input type="checkbox" /> Set
    <code>row-rule-break: intersection</code></label
  >
</p>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}

:has(:checked) .flexbox {
  row-rule-break: intersection;
}
article {
  display: flex;
  gap: 5vw;
  rule: 1px solid black;
  width: 100vw;
}
section {
  flex-basis: 45vw;
}
.flexbox {
  display: flex;
  flex-flow: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}
.column {
  flex-flow: column balance;
  gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
```

{{EmbedLiveSample("Flex containers", "", "300")}}

In horizontal writing modes, when set to `row` or `row-reverse`, the row rule is continuous by default, where as with `column` or `column-reverse`, the row rule breaks at every column gap. Setting the `row-rule-break` to `intersection` only impacts the row rules in the `row` and `row-reverse` scenarios.

### Multi-col containers

In multi-col containers, the default `normal` behavior behaves the same as `none`.

```html hidden
<h1>Default rule breaks in multi-col</h1>
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
  <li>Yes. Some are blue.</li>
  <li>And some are blue.</li>
  <li>Some are old.</li>
  <li>And some are new.</li>
  <li>Some are sad.</li>
  <li>And some are glad.</li>
  <li>And some are very, very bad.</li>
  <li>Why are they</li>
  <li>Sad and glad and bad?</li>
  <li>I do not know.</li>
  <li>Go ask your dad.</li>
</ol>
<fieldset>
  <legend>Set <code>row-rule-break:</code></legend>
  <label
    ><input type="radio" name="break" value="none" /> <code>none</code></label
  >
  <label
    ><input type="radio" name="break" value="normal" checked />
    <code>normal</code></label
  >
  <label
    ><input type="radio" name="break" value="intersection" />
    <code>intersection</code></label
  >
</fieldset>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}
ol {
  columns: 3 / 4em;
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  row-rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  row-rule-break: intersection;
}
:has([value="none"]:checked) ol {
  row-rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

If you select `intersection`, the row rule will break into segments whenever it reaches a column gap, with each segment starting and ending at the edge of the gap. The start and end positions can be changed with the `row-rule-inset` properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we use the `row-rule-break` property to break each rule segment in a grid container so row rule segments are created between column gaps. Changing the `column-gap` property will change the size of the segments.

#### HTML

We create a list of 50 items and a slider to change the column gap width. Most of the HTML is hidden for brevity.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>49</li>
  <li>50</li>
</ul>
```

```html hidden live-sample___basic
<p>
  <label
    >Change the width of the column gap.
    <input type="range" min="0" max="32" value="16" id="gap"
  /></label>
  <output id="o"></output>
</p>
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  <li>32</li>
  <li>33</li>
  <li>34</li>
  <li>35</li>
  <li>36</li>
  <li>37</li>
  <li>38</li>
  <li>39</li>
  <li>40</li>
  <li>41</li>
  <li>42</li>
  <li>43</li>
  <li>44</li>
  <li>45</li>
  <li>46</li>
  <li>47</li>
  <li>48</li>
  <li>49</li>
  <li>50</li>
</ul>
```

#### CSS

We define the unordered list as a 8-column container, creating columns and rows with the {{cssxref("grid-template-columns")}} property and setting {{cssxref("list-style-type")}} to `none` to remove the bullets. We include a {{cssxref("gap")}} of `20px` to provide enough room between the columns and rows to fit our `20px` solid column and row rules. Last, we set the row rules to break into segments at every intersection.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;

  row-rule-break: intersection;
}
```

The rest of the CSS is hidden for brevity.

```css hidden live-sample___basic
ol {
  place-items: center;
  width: 95vw;
}
li {
  text-align: center;
  font-family: sans-serif;
  line-height: 50px;
}
```

```js hidden live-sample___basic
const gap = document.getElementById("gap");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

gap.addEventListener("input", () => {
  output.innerText = ul.style.columnGap = `${gap.value}px`;
});
```

#### Result

{{EmbedLiveSample("Basic", "", "600")}}

Make the column gaps wider and note how the breaks between row segments grow. Bring the column gap width down to `0px`, and notice how the row decoration appears continuous. It isn't! The `0px` gap between segments may not be visible, but the segments still start and end at the gap, so any offsets set with `row-rule-inset` properties will still be applied.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} shorthand
- {{cssxref("rule-inset")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
