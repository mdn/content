---
title: "`rule-color` CSS property"
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
page-type: css-property
browser-compat: css.properties.rule-color
sidebar: cssref
---

The **`rule-color`** [CSS](/en-US/docs/Web/CSS) property defines the colors of the lines drawn between columns and rows in multi-column grid, flex, and multi-col layouts.

{{InteractiveExample("CSS Demo: rule-color")}}

```css interactive-example-choice
rule-color: purple;
```

```css interactive-example-choice
rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
rule-color: purple, repeat(auto, orange, yellow);
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

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}

## Syntax

```css
/* Single <color> value */
rule-color: purple;
rule-color: rgb(192 56 78);
rule-color: transparent;
rule-color: hsl(0 100% 50% / 60%);

/* Multiple values */
rule-color: purple, magenta;
rule-color: repeat(3, purple), repeat(3, transparent);
rule-color: repeat(3, purple), repeat(3, yellow, blue);
rule-color: purple, repeat(auto, transparent), purple;
rule-color: purple, repeat(auto, blue, yellow), purple;
rule-color: repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* Global values */
rule-color: inherit;
rule-color: initial;
rule-color: revert;
rule-color: revert-layer;
rule-color: unset;
```

### Values

The `rule-color` property accepts a comma-separated list of values, including:

- `<line-color>`
  - : A {{cssxref("&lt;color&gt;")}} representing the color of the line.

- `<repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with an {{cssxref("&lt;integer&gt;")}} of `1` or more as the first argument and one or more `<color>` values as subsequent arguments. The `<integer>` specifies how many times the `<color>` values should be repeated.

- `<auto-repeat-line-color>`
  - : A {{cssxref("repeat()")}} function, with `auto` as the first argument and one or more `<color>` values as subsequent arguments. The provided `<color>` values are repeated as many times as needed to fill in values for any rules that are not explicitly specified by other components of the property value.

## Description

The `rule-color` property defines the colors of any lines drawn in the gaps between columns and rows in [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers with more than one column or row. It is a shorthand property that sets both the {{cssxref("row-rule-color")}} {{cssxref("column-rule-color")}} properties to the same value.

The value is a comma-separated list of components, which can include `<line-color>`, `<repeat-line-color>`, and `<auto-repeat-line-color>` types.
The `rule-color`, along with the {{cssxref("rule-width")}} and {{cssxref("rule-style")}} properties, can be set using the {{cssxref("rule")}} shothand.

### Line colors

A `<line-color>` can be declared as any valid CSS {{cssxref("&lt;color&gt;")}} value. If the property value consists of only one `<color>`, all the rule lines will be that color. For example, if we declare the following, the lines in the gutters between columns and rows will all be blue:

```css
rule-color: blue;
```

When more than one `<line-color>` is declared, they will be applied to lines painted in the column and row gutters in the order specified. If there are more rules than `<line-color>` values, the list of colors is repeated until every column-rule has a color. If we declare the following, for example, every odd rule will be red, and every even rule will be yellow.

```css
rule-color: red, yellow;
```

### Repeated line colors

The `repeat()` function, with an integer of `1` or greater as the first argument, can be used to repeat a valid list of CSS {{cssxref("&lt;color&gt;")}} values passed as subsequent arguments the specified number of times. This allows the color values to be repeated as many times as you need without having to list them individually. The following declarations are equivalent:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

This creates a list of seven colors. If the number of colors in the `rule-color` value's color list exceeds the number of gaps between columns and rows, the excess color values are ignored. If there are fewer colors than gutters, the list of values is repeated until every rule has an associated color. For example, if the container has three columns and 18 rows, the rule in the first column gutter will be blue and the second yellow, with the sequence repeating for the row rules, with the first, eighth, and fifteenth row rules being blue.

### Auto-repeating line colors

The `repeat()` function also accepts `auto` as the first argument instead of a positive integer. With `auto` as the first argument, the `<color>` values passed as subsequent arguments will be repeated as many times as needed to fill in values for any column and row rules that are not explicitly specified by other components of the property value.

```css
rule-color: blue, repeat(auto, yellow), red;
```

In this case, the first column and row rules will be blue, the last will be red, and all others will be yellow. As long as there are at least two rules in either direction, the first rule will always be blue and the last will always be red. All the other rules will be yellow, which means if there are only 2 or 3 columns and rows, there will be no yellow lines.

The `auto` keyword within the `repeat()` function creates an auto-repeater that fills in values for the rule line colors that would not otherwise receive values from other parts of the list, preventing the list from being cycled. A `rule-color` value can include, at most, one `repeat(auto, <color>)`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, we define a single `<color>` for the lines drawn between the columns and rows of items in a grid container.

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
  <li>4</li>
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
  <li>47<n l
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

We define the unordered list to be a 10-column container, creating columns and rows with the {{cssxref("grid-template-columns and rows")}} property. We include a {{cssxref("gap")}} of `5px` to provide enough room between the columns and rows to fit our `3px` dashed rule, and remove the bullets with {{cssxref("list-style-type")}} set to `none`.

We include a {{cssxref("gap")}} of `5px` to provide enough room between the items to fit our medium dashed rule that we set to `#22BB22`, a green {{cssxref("hex color")}} value:

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-width: medium;

  rule-color: #22bb22;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "600")}}

### Multiple color values

This example demonstrates declaring more than one color, and how the values are repeated when there are fewer values in the list of colors than gutters between columns and rows.

Using the same HTML and CSS as in the previous example, we include three comma-separated colors as the `rule-color` value:

```css hidden live-sample___multiple
@layer no-support {
  @supports not (rule-color: red, blue) {
    body::before {
      content: "Your browser doesn't support multiple values for the rule-color property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css live-sample___multiple
ul {
  rule-color: blue, yellow, red;
}
```

#### Result

{{EmbedLiveSample("Multiple", "", "600")}}

There are nine column gutters and six row gutters, but only three colors in our color list, so the list gets repeated, with the first, fourth, and seventh lines being blue.

### Using the `repeat()` function

This example demonstrates using the `repeat()` function within the `rule-color` property value and how this function can help prevent complex values from becoming unwieldy.

#### CSS

To demonstrate how values can become complicated and the utility of the `repeat()` function, we declare two custom properties, which we use in four {{cssxref("color-mix()")}} color function declarations to create blue, redish, tealish, and yellow colors. The redish and greenish `color-mix()` colors are within a `repeat()` function, set to repeat 3 times.

We also added a border around each grid item so you can see how the line is rule in the middle of the gutter between the columns and rows.

```css live-sample___repeat
ul {
  --base: yellow;
  --mixin: blue;

  rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(
      3,
      color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin)),
      color-mix(in lch increasing hue, var(--base) 58%, var(--mixin))
    ),
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin));
}
```

#### Result

{{EmbedLiveSample("repeat", "", "600")}}

The grid has 10 columns and 7 rows, creating 9 column and 6 row gutters. The `repeat()` function repeats our two mixed color three times, creating a color list with eight colors in all. While there is a lot of CSS to create the four colors, at least we didn't have to write out all eight `color-mix()` functions. Since there are as more column than list colors, the colors are repeated for the columns gutters. As there are fewer row gutters than colors, the last two colors in the list are not used.

### Using `auto` within `repeat()`

This example demonstrates using `auto`, instead of an integer, within the `repeat()` function.

We use the same HTML and CSS as in the previous examples, but override the `rule-color` value. Here, we use `repeat(auto, <color>)` to set all the lines to be almost transparent black (`#0003`), except the first and last, which we set to a solid `black`.

```css live-sample___auto
ul {
  rule-color: black, repeat(auto, #0003), black;
}
```

#### Result

{{EmbedLiveSample("auto", "", "600")}}

Even though there are more column than row rule lines, the `<auto-repeat-line-color>` enabled the creation of this symmetric effect.

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (rule-color: repeat(3, red)) {
    body::before {
      content: "Your browser doesn't support `repeat()` functions within a rule-color property value";
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

- The {{cssxref("&lt;color&gt;")}} data type
- {{cssxref("rule-width")}}
- {{cssxref("rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("rule")}} shorthand
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
