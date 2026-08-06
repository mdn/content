---
title: "`rule-overlap` CSS property"
short-title: rule
slug: Web/CSS/Reference/Properties/rule-overlap
page-type: css-property
status:
  - experimental
browser-compat: css.properties.rule-overlap
sidebar: cssref
---

{{SeeCompatTable}}

The **`rule-overlap`** [CSS](/en-US/docs/Web/CSS) property sets the paint order for overlapping gap decorations, defining whether the column rule or row rule is painted on top when the two intersect.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
rule-overlap: row-over-column;
```

```css interactive-example-choice
rule-overlap: column-over-row;
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
}
#example-element i {
  padding: 5px;
}
```

## Syntax

```css
/* Keywords */
rule-overlap: row-over-column;
rule-overlap: column-over-row;

/* Global values */
rule-overlap: inherit;
rule-overlap: initial;
rule-overlap: revert;
rule-overlap: revert-layer;
rule-overlap: unset;
```

### Values

This property is specified as a single keyword from the following list:

- `row-over-column`
  - : Row rules are painted above column rules. This is the default value.
- `column-over-row`
  - : Column rules are painted above row rules.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example, we use the `rule-overlap` property to define the column rules to be painted on top of the row rules.

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
<p>
  <label><input type="checkbox"> set to <code>rule-overlap: row-over-column;</label>
</p>
```

#### CSS

We define the unordered list as a 10-column container, creating columns and rows with the {{cssxref("grid-template-columns")}} property and setting {{cssxref("list-style-type")}} to `none` to remove the bullets. We include a {{cssxref("gap")}} of `20px` to provide enough room between the columns and rows to fit our `20px` solid column and row rules.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-overlap: column-over-row;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
:has(:checked) ul {
  rule-overlap: row-over-column;
}
```

#### Result

{{EmbedLiveSample("Basic", "", "600")}}

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
- {{cssxref("rule-visibility-items")}}
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module
