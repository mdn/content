---
title: "`rule-break` CSS property"
short-title: rule-break
slug: Web/CSS/Reference/Properties/rule-break
page-type: css-property
status:
  - experimental
browser-compat: css.properties.rule-break
sidebar: cssref
---

{{SeeCompatTable}}

The **`rule-break`** [CSS](/en-US/docs/Web/CSS) property sets the behavior for breaking column and row rules into segments where rows and column gaps intersect, setting {{cssxref("column-rule-break")}} and {{cssxref("row-rule-break")}} to the same value.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
rule-break: none;
```

```css interactive-example-choice
rule-break: normal;
```

```css interactive-example-choice
rule-break: intersection;
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
  column-rule: solid thick purple;
  gap: 10px;
}
#example-element i {
  padding: 5px;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-rule-break")}}
- {{cssxref("row-rule-break")}}

## Syntax

```css
/* Keywords */
rule-break: none;
rule-break: normal;
rule-break: intersection;

/* Global values */
rule-break: inherit;
rule-break: initial;
rule-break: revert;
rule-break: revert-layer;
rule-break: unset;
```

### Values

This property is specified as a single keyword from the following list:

- `none`
  - : There are no breaks where row and column rules intersect; rather, a single continuous decoration is painted from one end of each gap to the other.
- `normal`
  - : In flex and grid containers, behaves as `none`. In multi-col, `column-rule-break` behaves as `intersection` and `row-rule-break` behaves as `none`. This is the default value.
- `intersection`
  - : Rules always break when they intersect a gap, with rule segments starting and ending at container and gap edges.

## Description

The `rule-break` property is used to set the behavior for breaking rules into segments when they cross gaps.

Gap decorations are painted within a gap as one or more gap decoration segments, with segments occurring between any two adjacent items. Depending on the container type, by default, these segments may either end at the edge of a gap, or the column and row rule may extend the entire height and width of the container.

When there is a break in a rule, by default, the segments start and end at the edge of the gaps. If the gap size is `0`, the break may not be visible. The `rule-break` property determines if the break occurs. You can control the size of the break at the end of each segment with the `rule-inset` properties. When there are no breaks, and the line is continuous, `rule-inset` properties only affect the rule at the start and end edges of the container. When there are breaks, the `rule-inset` properties affect the start and end of every rule segment.

Whether a rule is by default composed of a single continuous segment or segments that break when intersecting gaps depends on the container type.

### Grid containers

In grid containers, by default, rule segments continue through visible "cross" intersections. Setting `rule-break: intersection` will force the segments to break where they would otherwise cross.

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
    ><input type="checkbox" /> Set <code>rule-break: intersection</code></label
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
  rule-break: intersection;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid red;
  width: 100%;
}

.grid > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("grid containers", "", "240")}}

Check the checkbox to set the `rule-break` to `intersection`, which makes the continuous rules break at every "cross" intersection.

### Flex containers

In flexbox, when the `flex-direction` is `row` or `row-reverse`, the row rule is continuous, with the column segments starting and ending at the edge of the row gaps. When the `flex-direction` is `column` or `column-reverse`, the column rule is continuous, with the row segments starting and ending at the edge of the column gaps.

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
    ><input type="checkbox" /> Set <code>rule-break: intersection</code></label
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
  rule-break: intersection;
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
  rule: 5px solid red;
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

Note how, depending on the `flex-direction`, the column or row rules are continuous by default. If you set the `rule-break` to `intersection`, those continuous rules break at every intersection.

### Multi-col containers

In multi-col containers, the default `normal` behavior differs between row rules and column rules. Column rule segments start and end when they intersect a row gap, behaving as `column-rule-break: intersection`, while row rules don't break when they intersect a column gap, behaving as `row-rule-break: none`.

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
  <li>Yes. Some are red.</li>
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
  <legend>Set <code>rule-break:</code></legend>
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
  rule: 5px solid red;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  rule-break: intersection;
}
:has([value="none"]:checked) ol {
  rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("multi-col containers", "", "540")}}

Check the radio buttons for each value to see the value's effect.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we use the `rule-break` property to break each rule segment in a grid container so no rules intersect.

#### HTML

We create a list of 50 items. Most of the HTML is hidden for brevity.

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
<ul>
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

We define the unordered list as a 8-column container, creating columns and rows with the {{cssxref("grid-template-columns")}} property and setting {{cssxref("list-style-type")}} to `none` to remove the bullets. We include a {{cssxref("gap")}} of `20px` to provide enough room between the columns and rows to fit our `20px` solid column and row rules. Last, we set the rule segments to break instead of intersect.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-break: intersection;
}
```

The rest of the CSS is hidden for brevity.

```css hidden live-sample___basic
ol {
  place-items: center;
}
li {
  text-align: center;
  aspect-ratio: 1;
  font-family: sans-serif;
  line-height: 50px;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "640")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("rule-inset")}} shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
