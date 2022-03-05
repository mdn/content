---
title: Using CSS counters
slug: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
tags:
  - Advanced
  - CSS
  - CSS Counter Styles
  - Guide
  - Layout
  - Reference
  - Web
spec-urls: https://drafts.csswg.org/css-lists/#auto-numbering
---
{{CSSRef}}

**CSS counters** let you to set a counter for an element and display that counter. For example, it can be used to automatically assign heading numbers in a web page, to renumber an ordered list, or to display the index number of an element that matches a particular selector.

There are two types of counters: normal counters that count up, and reversed counters that count down.

Counters are essentially variables managed by CSS, not only for their own counters, but also for ordered list numbers, which can be increased or decreased by arbitrary values according to CSS rules, and can be used to define multiple named counters, or to manipulate the list-item counters that is standard generated as ordered lists.

Counters can be used by using {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties, and {{cssxref("counter()")}} and {{cssxref("counters()")}} functions as a value of {{cssxref("content")}} property. For reversed counters, the `reversed()` function can also be used as a value of `counter-reset` property.

This article explains the basic usage of counters and the implementation status in each browsers.

## Usage basic counters

To use a counter, you must first initialize it with the {{cssxref("counter-reset")}} property.

### Normal counter

#### HTML

```html
<div>
  <p>(1)</p>
  <p>(2)</p>
  <p>(3)</p>
  <p>(4)</p>
</div>

<div>
  <p>(1)</p>
  <p>(2)</p>
  <p>(3)</p>
</div>
```

In order to understand the behavior of {{cssxref("counter-reset")}}, {{cssxref("counter-set")}} and {{cssxref("counter-increment")}}, let's first try to display the counter value without specifying them. You can use any counter name you like, as long as it is not `initial`, `inherit`, `unset`, `revert` or `none`. In this example, we will use a counter named `num`.

#### CSS

```css
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
0. (1)
0. (2)
0. (3)
0. (4)

0. (1)
0. (2)
0. (3)
```

Next, let's specify {{cssxref("counter-increment")}}.

#### CSS

```css
p { counter-increment: num; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
1. (1)
2. (2)
3. (3)
4. (4)

5. (1)
6. (2)
7. (3)
```

The numbering has jumped over the `div`. Let's specify {{cssxref("counter-reset")}} so that the numbering is independent in `div`.

#### CSS

```css
div { counter-reset: num; }
p { counter-increment: num; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
1. (1)
2. (2)
3. (3)
4. (4)

1. (1)
2. (2)
3. (3)
```

The basic usage of counters is to use a combination of {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}} and {{cssxref("content")}} in this way. Starting from an element that has `counter-reset` specified, a scope is created for that counter name. Make sure to specify `counter-reset` on the element corresponding to the scope where you want the counter serial number to be independent.

You can also change the amount of increment when counting up by specifying the `counter-increment` value.

#### CSS

```css
div { counter-reset: num; }
p { counter-increment: num 3; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
3. (1)
6. (2)
9. (3)
12. (4)

3. (1)
6. (2)
9. (3)
```

In this case, by changing the first value in {{cssxref("counter-set")}}, you can represent a counter that starts at 1 and increases by 3.

#### CSS

```css
div { counter-reset: num; }
p { counter-increment: num 3; }
p:first-child { counter-set: num 1; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
1. (1)
4. (2)
7. (3)
10. (4)

1. (1)
4. (2)
7. (3)
```

### counter() and counters()

For nested HTML, {{cssxref("counter-reset")}} can be used to represent a nested counter.

#### HTML

```html
<ol>
  <li>(1)
    <ol>
      <li>(1-1)</li>
      <li>(1-2)</li>
    </ol>
  </li>
  <li>(2)
    <ol>
      <li>(2-1)</li>
      <li>(2-2)</li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol { counter-reset: num; }
li { counter-increment: num; }
li::marker { content: counter(num) ". "; }
```

Such HTML and CSS will be displayed as follows.

#### Result

```
1. (1)
    1. (1-1)
    2. (1-2)
2. (2)
    1. (2-1)
    2. (2-2)
```

Here, {{cssxref("counters()")}} can be used instead of {{cssxref("counter()")}} to display nested counters. Look at the following example.

#### CSS

```css
ol { counter-reset: num; }
li { counter-increment: num; }
li::marker { content: counters(num, "-") ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
1. (1)
    1-1. (1-1)
    1-2. (1-2)
2. (2)
    2-1. (2-1)
    2-2. (2-2)
```

If you want to change the markers in the ordered list to nested counters, etc., please refer to the [Implicit list-item counter](#implicit_list-item_counter) described below.

### Reversed counter

Reversed counter is used to represent a countdown.

#### HTML

```html
<div>
  <p>(1)</p>
  <p>(2)</p>
  <p>(3)</p>
  <p>(4)</p>
</div>

<div>
  <p>(1)</p>
  <p>(2)</p>
  <p>(3)</p>
</div>
```

First, let's look at an example that attempts to represent a countdown by simply changing the values of {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}}.

#### CSS

```css
div { counter-reset: num 5; }
p { counter-increment: num -1; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
4. (1)
3. (2)
2. (3)
1. (4)

4. (1)
3. (2)
2. (3)
```

The countdown is represented, but if the number of elements in each scope is different, the initial value of the numbering will be shifted. The `reversed()` function is useful in such cases.

#### CSS

```css
div { counter-reset: reversed(num); }
p { counter-increment: num -1; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
4. (1)
3. (2)
2. (3)
1. (4)

3. (1)
2. (2)
1. (3)
```

You can also change the amount of decrement during the countdown by specifying a numerical value for {{cssxref("counter-increment")}}, just as you would for a normal counter. by changing the last value by {{cssxref("counter-set")}}, a reversed counter of counter that starts at 1 and increases by 3 can be expressed.

#### CSS

```css
div { counter-reset: reversed(num); }
p { counter-increment: num -3; }
p:last-child { counter-set: num 1; }
p::before { content: counter(num) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
10. (1)
7. (2)
4. (3)
1. (4)

7. (1)
4. (2)
1. (3)
```

### Changing counter style

{{cssxref("counter()")}} and {{cssxref("counters()")}} functions accept the arguments are follows:

- `counter(<counter-name>, <counter-style>)`
- `counters(<counter-name>, <string>, <counter-style>)`

`<counter-style>` accepts the same value as {{cssxref("list-style-type")}}.

#### HTML

```html
<div>
  <p>(1)</p>
  <p>(2)</p>
  <p>(3)</p>
  <p>(4)</p>
</div>
```

Let's look at an example where `lower-roman` is specified for `<counter-style>`.

#### CSS

```css
div { counter-reset: num; }
p { counter-increment: num; }
p::before { content: counter(num, lower-roman) ". "; }
```

If you apply this CSS, you will see something like this.

#### Result

```
i. (1)
ii. (2)
iii. (3)
iv. (4)
```

In addition to the prescribed counter styles, you can use {{cssxref("@counter-style")}} to create your own display.

## Detailed behavior of CSS counters

### Nested counters and scope

One difference between {{cssxref("counter-reset")}} and {{cssxref("counter-set")}} is that `counter-reset` generates nested counters. See the following example.

#### HTML

```html
<ol>
  <li>(1)
    <ol>
      <li>(1-1)</li>
      <li>(1-2)</li>
    </ol>
  </li>
  <li>(2)
    <ol>
      <li>(2-1)</li>
      <li>(2-2)</li>
    </ol>
  </li>
</ol>
```

#### CSS

```
ol { counter-reset: num; }
li { counter-increment: num; }
li::marker { content: counters(num, "-") ". "; }
```

Such HTML and CSS will be displayed as follows.

#### Result

```
1. (1)
    1-1. (1-1)
    1-2. (1-2)
2. (2)
    2-1. (2-1)
    2-2. (2-2)
```

In this way, counters may nest counters with the same name. When a new counter is instantiated on an element, the new counter is created nested within the existing counter if it inherits the same name from its parent. The reason you see `1-2`. followed by `2`. instead of `1-3`. in the above display is that the counters are scoped on a nested basis. {{cssxref("counter-reset")}} can create nested counters, so the above code will produce the expected nested counting results.

In the above example, if `ol { counter-reset: num; }` were written as `ol { counter-set: num; }`, it would display as follows.

#### Result

```
1. (1)
    1. (1-1)
    2. (1-2)
3. (2)
    1. (2-1)
    2. (2-2)
```

### Flat counters

You may want to perform nested numbering for flat HTML elements. See the following example.

#### HTML

```html
<h1>(1)</h1>
<h2>(1-1)</h2>
<h2>(1-2)</h2>
<h3>(1-2-1)</h3>
<h1>(2)</h1>
<h2>(2-1)</h2>
<h2>(2-2)</h2>
<h3>(2-2-1)</h3>
```

Suppose we want to display the following for this HTML.

#### Expected Result

```
1. (1)
1-1. (1-1)
1-2. (1-2)
1-2-1. (1-2-1)
2. (2)
2-1. (2-1)
2-2. (2-2)
2-2-1. (2-2-1)
```

To make this happen, CSS must be written in combination with {{cssxref("counter-set")}} as follows.

#### CSS

```css
body { counter-reset: num1 num2 num3; }
h1 { counter-increment: num1; counter-set: num2 num3; }
h2 { counter-increment: num2; counter-set: num3; }
h3 { counter-increment: num3; }
h1::before { content: counter(num1) ". "; }
h2::before { content: counter(num1) "-" counter(num2) ". "; }
h3::before { content: counter(num1) "-" counter(num2) "-" counter(num3) ". "; }
```

Previously, writing {{cssxref("counter-set")}} as {{cssxref("counter-reset")}} would produce the expected result. However, this behavior was changed for the convenience of implementing the remedy for invalid HTML described below. Starting with Firefox 68, writing `counter-reset` for the above `counter-set` will display the following.

#### Result

```
1. (1)
1-1. (1-1)
1-2. (1-2)
1-2-1. (1-2-1)
2. (2)
2-3. (2-1)
2-4. (2-2)
2-4-2. (2-2-1)
```

### Counters for invalid HTML

According to the CSS specification, the numbering of list-item markers for ordered lists is calculated by a CSS counter. For simplicity, we will use our own counter here, but the default list-item marker should have the same result. See the following example.

#### HTML

```html
<ol>
  <li>(1)</li>
  <li>(2)</li>
  <ol>
    <li>(2-1)</li>
  </ol>
  <li>(3)</li>
  <li>(4)</li>
</ol>
```

#### CSS

```css
ol { counter-reset: num; }
li { counter-increment: num; }
li::marker { content: counter(num); }
```

The ol element appears directly below the ol element. This is invalid HTML, but previously the HTML and CSS above would have displayed the following.

#### Result

```
1. (1)
2. (2)
    3. (2-1)
2. (3)
3. (4)
```

Invalid HTML exists for a variety of reasons and cannot be ignored (and, by golly, the DOM generated by `document.execCommand('indent')` creates the same situation as invalid HTML). In order to make this numbering the same as for valid HTML (where the nested ol element is a child of the preceding li element), the behavior of {{cssxref("counter-reset")}} has been changed since Firefox 82, and now it looks like this.

#### Result

```
1. (1)
2. (2)
    1. (2-1)
3. (3)
4. (4)
```

As described in [Implicit list-item counters](#implicit_list-item_counter) below, if the {{cssxref("content")}} property for li::marker is rewritten using {{cssxref("counter()")}} instead of {{cssxref("counters()")}}, the marker of a nested li element, even in invalid HTML, will look like this It will be displayed as a nested counter.

#### Result

```
1. (1)
2. (2)
    2-1. (2-1)
3. (3)
4. (4)
```

### Implicit list-item counter

In an ordered list, marker values are numbered, but these marker values can be manipulated as counters.

Internally, it behaves as if `ol, ul, menu { counter-reset: list-item; }`, `li { counter-increment: list-item; }` and `li::marker { content: counter(list-item) ". "; }` is specified. This allows the marker's number to be counted up by a number other than 1, or to display nested numbers.

Note that if `counter-reset: reversed(list-item)` is specified, it behaves as if li `{ counter-increment: list-item -1; }` is implicitly specified.

#### HTML

```html
<ol>
  <li>(1)
    <ol>
      <li>(1-1)</li>
      <li>(1-2)</li>
    </ol>
  </li>
  <li>(2)
    <ol>
      <li>(2-1)</li>
      <li>(2-2)</li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
li::marker { content: counters(list-item, "-") ". "; }
```

In this example, for a simple HTML, the {{cssxref("content")}} property for `li::marker` can be rewritten using {{cssxref("counters()")}} instead of {{cssxref("counter()")}} to display the nested numbering.

#### Result

```
1. (1)
    1-1. (1-1)
    1-2. (1-2)
2. (2)
    2-1. (2-1)
    2-2. (2-2)
```

Note that the CSS specification states that even if the {{cssxref("counter-increment")}} property is overridden (with a description for a unique counter), it is assumed that `counter-increment: list-item` is applied internally. On the other hand, there is no such arrangement for the {{cssxref("counter-reset")}} property. Previously, it behaved as if `counter-increment: list-item` was implicitly applied even if it was overridden (by a description for a custom counter), but starting with Firefox 68, `counter-increment: list-item` is no longer implicitly applied, and `li::marker` is broken (because `counter-reset: list-item` is no longer specified) as follows.

#### Result

```
1. (1)
    2. (1-1)
    3. (1-2)
4. (2)
    5. (2-1)
    6. (2-2)
```

If you want to use your own counter and the default marker numbering at the same time, you can use your own counter without breaking the marker numbering by specifying an implicit `list-item` name like `counter-reset: my-counter list-item`.

## Examples

### Show chapters

#### HTML

```html
<div>
  <h1>Down the Rabbit-Hole</h1>
  <h1>Pool of Tears</h1>
  <h1>A Caucus-race and a Long Tale</h1>
</div>
```

#### CSS

```css
div { counter-reset: section; }
h1 { counter-increment: section; }
h1::before { content: "Section " counter(section) ": "; }
h1 { font-size: 1em; }
```

#### Result

{{EmbedLiveSample("show_chapters", "100%", 200)}}

### Counting rendered elements

#### HTML

```html
<div>
  <input id="item-1" type="checkbox" checked /><label for="item-1">item-1</label>
  <input id="item-2" type="checkbox" checked /><label for="item-2">item-2</label>
  <input id="item-3" type="checkbox" checked /><label for="item-3">item-3</label>
  <input id="item-4" type="checkbox" checked /><label for="item-4">item-4</label>
  <input id="item-5" type="checkbox" checked /><label for="item-5">item-5</label>
  <table>
    <thead>
      <tr><th>count</th><th>index</th><th>value</th></tr>
    </thead>
    <tbody>
      <tr class="item-1"><td></td><td>1</td><td>Down the Rabbit-Hole</td></tr>
      <tr class="item-2"><td></td><td>2</td><td>Pool of Tears</td></tr>
      <tr class="item-3"><td></td><td>3</td><td>A Caucus-race and a Long Tale</td></tr>
      <tr class="item-4"><td></td><td>4</td><td>The Rabbit sends in a Little Bill</td></tr>
      <tr class="item-5"><td></td><td>5</td><td>Advice from a Caterpillar</td></tr>
    </tbody>
  </table>
</div>
```

#### CSS

```css
/* table border */
table { margin: 20px; border-collapse: collapse; }
th, td { padding: 4px 8px; border: 1px solid #999; text-align: center; }

/* filtering by input[type="checkbox"] */
tbody tr { display: none; }
#item-1:checked ~ table .item-1 { display: table-row; }
#item-2:checked ~ table .item-2 { display: table-row; }
#item-3:checked ~ table .item-3 { display: table-row; }
#item-4:checked ~ table .item-4 { display: table-row; }
#item-5:checked ~ table .item-5 { display: table-row; }

/* CSS counters */
table { counter-reset: count; }
tbody tr { counter-increment: count; }
tbody td:nth-of-type(1)::before { content: counter(count); color: red; }
```

#### Result

{{EmbedLiveSample("counting_rendered_elements", "100%", 300)}}

### Display links with empty content

#### HTML

```html
<p>See <a href="https://www.mozilla.org/"></a></p>
<p>If you want to know more about us, please refer to <a href="https://developer.mozilla.org/en-US/docs/MDN/About">About MDN Web Docs</a></p>
<p>See also <a href="https://developer.mozilla.org/"></a></p>
```

#### CSS

```css
:root { counter-reset: link; }
a[href] { counter-increment: link; }
a[href]:empty::before { content: "[" counter(link) "]"; }
```

#### Result

{{EmbedLiveSample("display_links_with_empty_content", "100%", 200)}}

### Reverse list-item order

#### HTML

```html
<ol>
  <li>(1)
    <ol>
      <li>(1-1)</li>
      <li>(1-2)</li>
    </ol>
  </li>
  <li>(2)
    <ol>
      <li>(2-1)</li>
      <li>(2-2)</li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol { counter-reset: reversed(list-item); }
```

### Result

{{EmbedLiveSample("reverse_list-item_order", "100%", 250)}}

## Browser implementation

### CSS counter scope/inheritance is compatible with HTML ordinals

This is about whether or not the numbering of list-item markers in an ordered list matches the numbering by the CSS counter. In the past, [Counters for invalid HTML](#counters_for_invalid_html) did not match the list-item marker and the CSS counter. See the following example.

#### HTML

```html
<div>
  <ol>
    <li>(1)</li>
    <li>(2)</li>
    <ol>
      <li>(2-1)</li>
    </ol>
    <li>(3)</li>
    <li>(4)</li>
  </ol>
</div>

<div>
  <h1>(1)</h1>
  <h2>(1-1)</h2>
  <h2>(1-2)</h2>
  <h3>(1-2-1)</h3>
  <h1>(2)</h1>
  <h2>(2-1)</h2>
  <h2>(2-2)</h2>
  <h3>(2-2-1)</h3>
</div>
```

#### CSS

```css
ol { counter-reset: list-item num; }
li { counter-increment: num; }
li::before { content: counter(num) ". "; }
li::before { color: red; }

div { counter-reset: num1 num2 num3; }
h1 { counter-increment: num1; counter-reset: num2 num3; }
h2 { counter-increment: num2; counter-reset: num3; }
h3 { counter-increment: num3; }
h1::before { content: counter(num1) ". "; }
h2::before { content: counter(num1) "-" counter(num2) ". "; }
h3::before { content: counter(num1) "-" counter(num2) "-" counter(num3) ". "; }
h1, h2, h3 { margin: 0 0 0 20px; font-size: 1em; font-weight: normal; }
```

Such HTML and CSS would display as follows The CSS in the second example above uses {{cssxref("counter-reset")}} instead of {{cssxref("counter-set")}}.

#### Result

{{EmbedLiveSample("css_counter_scopeinheritance_is_compatible_with_html_ordinals", "100%", 400)}}

The result of displaying an ordered list, the numbering by default marker and the numbering by CSS counter `::before` pseudo-element did not match in the past. In Firefox 82, the specification has been changed to make the scope of {{cssxref("counter-reset")}} strict so that they match.

As a side effect of this, we could conventionally use only `counter-reset` to represent nested counters against flat HTML, but the strict scope of `counter-reset` made the numbering in the second example unnatural.

See also [Flat counters](#flat_counters) for more details.

### Does not apply implicit counter-reset: list-item

It is about whether or not it behaves as if `counter-reset: list-item` is not implicitly applied if you override {{cssxref("counter-reset")}} property value with a description for your own counter. See the following example.

#### HTML

```html
<ol>
  <li>(1)
    <ol>
      <li>(1-1)</li>
      <li>(1-2)</li>
    </ol>
  </li>
  <li>(2)
    <ol>
      <li>(2-1)</li>
      <li>(2-2)</li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol { counter-reset: none; }
```

#### Result

{{EmbedLiveSample("does_not_apply_implicit_counter", "100%", 250)}}

Firefox 68 introduces {{cssxref("counter-set")}} and revamps the internal implementation of CSS counters, among other things, and obsoleted the implicit application of {{cssxref("counter-reset")}}. As a result, if the `counter-reset` property is specified, the ordered list numbering will be broken unless the `list-item` property value is explicitly specified. Previously, `counter-reset: list-item` behaved as if it were implicitly applied.

See also [Implicit list-item counter](#implicit_list-item_counter) for more details.

## Specifications

{{Specifications}}

## See also

- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter()")}}
- {{cssxref("counters()")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter-set")}}