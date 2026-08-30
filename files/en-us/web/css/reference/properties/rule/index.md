---
title: "`rule` CSS property"
short-title: rule
slug: Web/CSS/Reference/Properties/rule
page-type: css-property
status:
  - experimental
browser-compat: css.properties.rule
sidebar: cssref
---

{{SeeCompatTable}}

The **`rule`** [CSS](/en-US/docs/Web/CSS) [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) property sets the width, style, and color of the line drawn between rows and columns in multi-row grid, flex, and multi-col layouts, setting both the column and row rules to the same values.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
rule: solid;
```

```css interactive-example-choice
rule: dotted medium blue;
```

```css interactive-example-choice
rule:
  dotted medium blue,
  repeat(3, dotted red 2px, double orange 5px);
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px, dotted blue 5px),
  dashed medium magenta;
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px),
  outset goldenrod 5px;
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
  rule: solid thick;
}
#example-element i {
  padding: 5px;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("rule-color")}}
- {{cssxref("rule-style")}}
- {{cssxref("rule-width")}}

## Syntax

```css
/* One value */
rule: dotted;
rule: solid 8px;
rule: solid blue;
rule: thick inset blue;

/* Multiple values */
rule: groove, dashed, solid;
rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px),
  inset 3px yellow;

/* Global values */
rule: inherit;
rule: initial;
rule: revert;
rule: revert-layer;
rule: unset;
```

### Values

The `rule` property accepts a comma-separated list of values, including:

- `<gap-rule>`
  - : Specified as one, two, or three of the values listed below, in any order.
    - `<'line-width'>`
      - : A {{cssxref("&lt;line-width&gt;")}}: a positive {{cssxref("&lt;length&gt;")}} or one of the three keywords, `thin`, `medium`, or `thick`. The default value is `medium`. See {{cssxref("rule-width")}}.
    - `<'line-style'>`
      - : A {{cssxref("&lt;line-style&gt;")}}: one of `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, or `outset`. The default value is `none`. See {{cssxref("rule-style")}}.
    - `<'color'>`
      - : A {{cssxref("&lt;color&gt;")}} value representing the color of the line. The default value is `currentcolor`. See {{cssxref("rule-color")}}.

- `<gap-repeat-rule>`
  - : A {{cssxref("repeat()")}} function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<gap-rule>` values as subsequent arguments. The `<integer>` specifies how many times the list of `<gap-rule>` values should be repeated.

- `<gap-auto-repeat-rule>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<gap-rule>` values as subsequent arguments. The provided list of `<gap-rule>` values is repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value.

## Description

The `rule` property defines the line style of any rule lines drawn in the gaps between rows and columns in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one row or column.

The `rule` is shorthand for {{cssxref("rule-color")}}, {{cssxref("rule-style")}}, and {{cssxref("rule-width")}}. It sets the {{cssxref("row-rule")}} and {{cssxref("column-rule")}} shorthand properties to the same value.

The property value is a comma-separated list of components, which can include `<gap-rule>`, `<gap-repeat-rule>`, and `<gap-auto-repeat-rule>` types. Each `<gap-rule>` defines the width, color, and style of one or more rule lines.

If the property value consists of only one `<gap-rule>`, all the row and column rules will be that style, color, and size. If we declare the following, all row and column rules will be `dashed red 3px`:

```css
rule: dashed red 3px;
```

When more than one `<gap-rule>` is declared, they will be applied to rules in the order specified. If there are more gutters between rows and columns than `<gap-rule>` values, the list of values is repeated until every row and column rule has a gap line. If we declare the following, for example, every odd rule will be `dashed red 3px`, and every even rule will be `dotted blue 5px`, in both directions.

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### Repeated line styles

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS [`<gap-rule>`](#gap-rule) values passed as subsequent arguments the specified number of times. This allows the same `<gap-rule>` to be repeated a set number of times without repeating the same CSS multiple times. The following declarations are equivalent:

```css
rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

This creates a list of seven rules. If the number of styles in the `rule` value's style list exceeds the number of gaps between rows and columns, the excess style values are ignored. If the container on which this is applied has three rows and columns, the rule in the first gutter will be `solid red 5px` and the second `outset blue 10px`, in both directions.

If there are more gutters than styles, the list of styles is repeated. If the container has 8, 15, 22, or 29 rows or columns, this sequence of styles will be repeated in that direction one, two, three, or four times, respectively, with the last rule being `inset green 1px`.

### Auto-repeating line styles

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the [`<gap-rule>`](#gap-rule) values passed as subsequent arguments will be repeated as many times as needed to fill in values for any row and column rules that are not explicitly specified by other components of the property value.

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

In this case, the first and last row and column rules will be `solid red 5px`, and all others will alternate between `dotted green 1px` and `dashed blue 1px`. It doesn't matter if the container has 3, 6, 11, 16, or 21 rows and columns; the first and last gutters will always have a thick solid red line painted between them (unless {{cssxref("rule-visibility-items")}} leads to no line being drawn), and all the other row and column rules will be thin, dotted green or dashed blue lines. If there are only 2 or 3 rows and columns, there will be no dotted or dashed lines.

The `auto` keyword within the `repeat()` function creates an auto-repeater that fills in values for row and column rules that would not otherwise receive values from other parts of the list, preventing the list from being cycled. At most, only one `repeat(auto, <gap-rule>)` can be present in a `rule` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single rule for the lines drawn in the gutters between grid items.

#### HTML

We create a list of 75 items. Most of the HTML is hidden for brevity.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
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
  <li>51</li>
  <li>52</li>
  <li>53</li>
  <li>54</li>
  <li>55</li>
  <li>56</li>
  <li>57</li>
  <li>58</li>
  <li>59</li>
  <li>60</li>
  <li>61</li>
  <li>62</li>
  <li>63</li>
  <li>64</li>
  <li>65</li>
  <li>66</li>
  <li>67</li>
  <li>68</li>
  <li>69</li>
  <li>70</li>
  <li>71</li>
  <li>72</li>
  <li>73</li>
  <li>74</li>
  <li>75</li>
</ul>
```

#### CSS

We define the unordered list as a 10-column container, creating columns and rows with the {{cssxref("grid-template-columns")}} property and setting {{cssxref("list-style-type")}} to `none` to remove the bullets. We include a {{cssxref("gap")}} of `5px` to provide enough room between the columns and rows to fit our `dashed 3px magenta` rule.

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;

  rule: dashed 3px magenta;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "600")}}

### Multiple gap-rules and default values

This example demonstrates using multiple, comma-separated values. It also demonstrates the default values for the width, color, and style of `medium`, `currentcolor` and `none`, respectively.

Using the same HTML and CSS as in the previous example, we include four comma-separated `<gap-rule>` values as the `rule` value, omitting the `<line-width>` in the first `<gap-rule>`, the `<color>` in the second, and the `<line-style>` from the third, with the fourth including all three components:

```css live-sample___repeat
ul {
  rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "600")}}

The red line is `3px` wide, the dotted line is the same color as the text, and there is no `5px`-wide blue line, as the style of the third `<gap-rule>` defaults to `none`, so no line is painted. As there are fewer rule styles than gutters, the list of rules is repeated until all rule lines are styled.

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `rule` property value. We use the same HTML and CSS as in the previous examples, overriding the `rule` value with a comma-separated list of three components: two `<gap-rule>` values and a `<gap-repeat-rule>` that sets a list of two `<gap-rule>` values to repeat 3 times.

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "600")}}

The grid has ten columns and eight rows, so nine column gutters and seven row gutters. The `repeat()` function repeats two style values three times, creating a list of eight style values. As there are fewer row gutters than values, the last value is not used in the row direction. As there are more column gutters than values, the list repeats in the column direction.

### Using `auto` within `repeat()`

This example demonstrates using the `auto` argument instead of an integer in the `repeat()` function.

Using `repeat(auto, <gap-rule>)`, we set all row and column rules to `1px dotted` (with the color defaulting to the current color), except the first and last rules, which we set to `3px solid red`.

```css live-sample___auto
ul {
  rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "600")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule: thin, thick) {
    body::before {
      content: "Your browser doesn't support the rule property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("rule-color")}}
- {{cssxref("rule-width")}}
- {{cssxref("rule-style")}}
- {{cssxref("column-rule")}} shorthand
- {{cssxref("row-rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
