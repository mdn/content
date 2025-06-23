---
title: :nth-child()
slug: Web/CSS/:nth-child
page-type: css-pseudo-class
browser-compat: css.selectors.nth-child
---

{{CSSRef}}

The **`:nth-child()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on the indexes of the elements in the child list of their parents. In other words, the `:nth-child()` selector selects child elements according to their position among all the sibling elements within a parent element.

{{InteractiveExample("CSS Demo: :nth-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-child(-n + 3) {
  border: 2px solid orange;
  margin-bottom: 1px;
}

li:nth-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>Track &amp; field champions:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

> [!NOTE]
> In the `element:nth-child()` syntax, the child count includes sibling children of any element type; but it is considered a match only if the element _at that child position_ matches the other components of the selector.

## Syntax

`:nth-child()` takes a single argument that describes a pattern for matching element indices in a list of siblings. Element indices are 1-based.

```css-nolint
:nth-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Keyword values

- `odd`
  - : Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc.
- `even`
  - : Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc.

### Functional notation

- `<An+B>`

  - : Represents elements whose numeric position in a series of siblings matches the pattern `An+B`, for every positive integer or zero value of `n`, where:

    - `A` is an integer step size,
    - `B` is an integer offset,
    - `n` is all nonnegative integers, starting from 0.

    It can be read as the `An+B`-th element of a list. The `A` and `B` must both have {{cssxref("&lt;integer&gt;")}} values.

### The `of <selector>` syntax

By passing a selector argument, we can select the **nth** element that matches that selector. For example, the following selector matches the first three list items which have a `class="important"` set.

```css
:nth-child(-n + 3 of li.important) {
}
```

This is different from moving the selector outside of the function, like:

```css
li.important:nth-child(-n + 3) {
}
```

This selector selects list items if they are among the first three children and match the selector `li.important`.

## Examples

### Example selectors

- `tr:nth-child(odd)` or `tr:nth-child(2n+1)`
  - : Represents the odd rows of an HTML table: 1, 3, 5, etc.
- `tr:nth-child(even)` or `tr:nth-child(2n)`
  - : Represents the even rows of an HTML table: 2, 4, 6, etc.
- `:nth-child(7)`
  - : Represents the seventh element.
- `:nth-child(5n)`
  - : Represents elements **5** \[=5×1], **10** \[=5×2], **15** \[=5×3], **etc.** The first one to be returned as a result of the formula is **0** \[=5x0], resulting in a no-match, since the elements are indexed from 1, whereas `n` starts from 0. This may seem weird at first, but it makes more sense when the `B` part of the formula is `>0`, like in the next example.
- `:nth-child(n+7)`
  - : Represents the seventh and all following elements: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7], **etc.**
- `:nth-child(3n+4)`
  - : Represents elements **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4], **etc.**
- `:nth-child(-n+3)`
  - : Represents the first three elements. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Represents every `<p>` element in a group of siblings. This selects the same elements as a simple `p` selector (although with a higher specificity).
- `p:nth-child(1)` or `p:nth-child(0n+1)`
  - : Represents every `<p>` that is the first element in a group of siblings. This is the same as the {{cssxref(":first-child")}} selector (and has the same specificity).
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Represents the eighth through the fifteenth `<p>` elements of a group of siblings.

### Detailed example

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, WITHOUT an <code>&lt;em&gt;</code> among
  the child elements.
</h3>
<p>Children 1, 3, 5, and 7 are selected.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 5, and 7 are selected.<br />
  3 is used in the counting because it is a child, but it isn't selected because
  it isn't a <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 4, 6, and 8 are selected.<br />
  3 isn't used in the counting or selected because it is an
  <code>&lt;em&gt;</code>, not a <code>&lt;span&gt;</code>, and
  <code>nth-of-type</code> only selects children of that type. The
  <code>&lt;em&gt;</code> is completely skipped over and ignored.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid tomato;
  display: inline-block;
  margin-bottom: 3px;
}
```

```css
.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: tomato;
}
```

#### Result

{{EmbedLiveSample('Detailed_example', 550, 550)}}

### Using 'of &lt;selector&gt;'

In this example there is an unordered list of names, some of them have been marked as **noted** using `class="noted"`. These have been highlighted with a thick bottom border.

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

In the following CSS we are targeting the **even** list items that are marked with `class="noted"`.

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Result

Items with `class="noted"` have a thick bottom border and items 3, 10 and 17 have a solid background as they are the _even_ list items with `class="noted"`.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

### of selector syntax vs selector nth-child

In this example, there are two unordered lists of names. The first list shows the effect of `li:nth-child(-n + 3 of .noted)` and the second list shows the effect of `li.noted:nth-child(-n + 3)`.

#### HTML

```html
<ul class="one">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
<ul class="two">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

```css
ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Result

The first case applies a style to the first three list items with `class="noted"` whether or not they are the first three items in the list.

The second case applies a style to the items with `class="noted"` if they are within the first 3 items in the list.

{{EmbedLiveSample('of_selector_syntax_vs_selector_nth-child', 550, 150)}}

### Using of selector to fix striped tables

A common practice for tables is to use _zebra-stripes_ which alternates between light and dark background colors for rows, making tables easier to read and more accessible. If a row is hidden, the stripes will appear merged and alter the desired effect. In this example, you can see two tables with a `hidden` row. The second table handles hidden rows using `of :not([hidden])`.

#### HTML

```html-nolint
<table class="broken">
  <thead>
    <tr><th>Name</th><th>Age</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexico</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Morocco</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brazil</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>Name</th><th>Age</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>Mexico</td></tr>
    <tr><td>Adilah</td><td>27</td><td>Morocco</td></tr>
    <tr><td>Vieno</td><td>55</td><td>Finland</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>Brazil</td></tr>
  </tbody>
</table>
```

#### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
td {
  padding: 0.125rem 0.5rem;
}
```

```css
.broken > tbody > tr:nth-child(even) {
  background-color: silver;
}
```

```css
.fixed > tbody > tr:nth-child(even of :not([hidden])) {
  background-color: silver;
}
```

#### Result

In the first table this is just using `:nth-child(even)` the third row has the `hidden` attribute applied to it. So in this instance the 3rd row is not visible and the 2nd & 4th rows are counted as even, which technically they are but visually they are not.

In the second table the _of syntax_ is used to target only the `tr`s that are **not** hidden using `:nth-child(even of :not([hidden]))`.

{{EmbedLiveSample('Using_of_selector_to_fix_striped_tables', 550, 180)}}

### Styling a table column

To style a table column, you can't set the style on the {{HTMLElement("col")}} element as table cells are not children of it (as you can with the row element, {{HTMLElement("tr")}}). Pseudo-classes like `:nth-child()` are handy to select the column cells.

In this example, we set different styles for each of the column.

#### HTML

```html-nolint
<table>
<caption>Student roster</caption>
<colgroup>
  <col/>
  <col/>
  <col/>
</colgroup>
  <thead>
    <tr><th>Name</th><th>Age</th><th>Country</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>Madagascar</td></tr>
    <tr><td>Yuki</td><td>48</td><td>Japan</td></tr>
  </tbody>
</table>

```

#### CSS

```css
td {
  padding: 0.125rem 0.5rem;
  height: 3rem;
  border: 1px solid black;
}

tr :nth-child(1) {
  text-align: left;
  vertical-align: bottom;
  background-color: silver;
}

tbody tr :nth-child(2) {
  text-align: center;
  vertical-align: middle;
}

tbody tr :nth-child(3) {
  text-align: right;
  vertical-align: top;
  background-color: tomato;
}
```

#### Result

{{EmbedLiveSample('Styling_a_table_column', 100, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":has", ":has()") }}: pseudo-class for selecting parent element
- [Tree-structural pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
