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

**CSS counters** let you set a counter for an element and display that counter. For example, it can be used to automatically assign heading numbers in a web page, to renumber an {{htmlelement("ol","ordered list")}}, or to display the index number of an element that matches a particular selector.

Counters are created by applying {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties, and {{cssxref("counter()")}} and {{cssxref("counters()")}} functions as a value of {{cssxref("content")}} property. For reversed counters, the `reversed()` function can also be used as a value of `counter-reset` property.

Let's look at the actual HTML and CSS descriptions and see how the counter is used.

## Basics: Basic use of counters

Using the counter involves a combination of three steps: initializing the counter, increasing or decreasing the counter, and displaying the counter. Let's look at them one at a time.

### Display a counter

To check the status of the counter, let's try it from the display first.

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

#### CSS

```css
p::before { content: counter(num) ". "; }
```

The {{cssxref("counter()")}} function is used in the {{cssxref("content")}} property. This statement allows the display of a counter with the counter name `num`. The counter name can be any name except `initial`, `inherit`, `unset`, `revert`, or `none`. Here we use `num` as an example.

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

### Increment a counter

Let's increment the `num` counter by 1.

#### CSS

```css
p { counter-increment: num 1; }
p::before { content: counter(num) ". "; }
```

The {{cssxref("counter-increment")}} property specifies the counter name followed by a numerical value. If the number is omitted, it is assumed to be 1. The following statement produces the same result as above.

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

### Initialize a counter

The aforementioned CSS alone would have caused the counter to increase or decrease across each `div`. To prevent this, always initialize the counter with the {{cssxref("counter-reset")}} property at the scope where you want to use the counter.

```css
div { counter-reset: num; }
p { counter-increment: num; }
p::before { content: counter(num) ". "; }
```

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

The basic usage of a counter is to use a combination of the {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}}, and {{cssxref("content")}} properties in this way. Starting from the element with the `counter-reset` specification, a scope is created for that counter name.

### counter() and counters()

The {{cssxref("counters()")}} function of the {{cssxref("content")}} property is useful when HTML is nested as shown below.

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

Let's start with the {{cssxref("counter()")}} function. Such HTML and CSS will look like this.

#### Result

```
1. (1)
    1. (1-1)
    2. (1-2)
2. (2)
    1. (2-1)
    2. (2-2)
```

#### CSS

```css
ol { counter-reset: num; }
li { counter-increment: num; }
li::marker { content: counters(num, "-") ". "; }
```

Next, try using {{cssxref("counters()")}} instead of {{cssxref("counter()")}}. If you apply this CSS, you will see something like this.

#### Result

```
1. (1)
    1-1. (1-1)
    1-2. (1-2)
2. (2)
    2-1. (2-1)
    2-2. (2-2)
```

Specifying {{cssxref("counter-reset")}} for nested HTML automatically creates a hierarchical counter. Use the {{cssxref("counter()")}} function to display only the end of the hierarchy, or the {{cssxref("counters()")}} function to display the hierarchical counter as is, to get the desired result.

## Advanced: Detailed counter behavior

### Count up in increments of 3

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

#### CSS

```css
div { counter-reset: num; }
p { counter-increment: num 3; }
p::before { content: counter(num) ". "; }
```

{{cssxref("counter-increment")}} with 3 as the numeric value. If you apply this CSS, you will see something like this.

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

In this case, by changing the first value with {{cssxref("counter-set")}}, a counter that starts at 1 and increments by 3 can be represented.

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

### Reversed counter

Reversed counter is used to represent countdowns.

Let's look at an example that attempts to express a countdown by changing the values of {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}} for the aforementioned HTML.

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

The countdown is expressed, but if the number of elements differs from scope to scope, the initial value of the numbering will be off. In such cases, the `reversed()` function is useful.

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

The {{cssxref("counter()")}} and {{cssxref("counters()")}} functions accept the following arguments respectively.

- `counter(<counter-name>, <counter-style>)`
- `counters(<counter-name>, <separator>, <counter-style>)`

`<counter-style>` accepts the same values as {{cssxref("list-style-type")}}.

#### HTML

```html
<div>
  <p>(1)</p>
  <p>(2)</p>
  <p>(3)</p>
  <p>(4)</p>
</div>
```

#### CSS

```css
div { counter-reset: num; }
p { counter-increment: num; }
p::before { content: counter(num, lower-roman) ". "; }
```

Let's look at an example with `lower-roman` specified for `<counter-style>`. If you apply this CSS, you will see something like this.

#### Result

```
i. (1)
ii. (2)
iii. (3)
iv. (4)
```

In addition to the prescribed counter style, you can use {{cssxref("@counter-style")}} to create your own display.

### Implicit list-item counter

In an {{htmlelement("ol","ordered list")}}, marker values are numbered, but these marker values can be manipulated as CSS counters. It can be manipulated by setting it against a special counter name `list-item`.

Internally, it behaves as if the following styles are implicitly specified

```css
ol, ul, menu { counter-reset: list-item; }
li { counter-increment: list-item; }
li::marker { content: counter(list-item) ". "; }
```

This allows the marker's numbering to be counted up by a number other than 1, or to display a hierarchical counter.

Note that if `counter-reset: reversed(list-item)` is specified, it behaves as if `li { counter-increment: list-item -1; }` is implicitly specified.

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

In this example, for nested {{htmlelement("ol","ordered list")}} HTML, the {{cssxref("content")}} property for `li::marker` is replaced with {{cssxref("counters()")}} instead of {{cssxref("counter()")}}. You can display a hierarchical counter simply by rewriting it.

#### Result

```
1. (1)
    1-1. (1-1)
    1-2. (1-2)
2. (2)
    2-1. (2-1)
    2-2. (2-2)
```

### Hierarchical counter to flat HTML

You may want to perform hierarchical numbering on flat HTML. See the following example.

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

To make this happen, multiple counters must be combined to represent a pseudo-hierarchical counter.

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

{{cssxref("counter-set")}} is used to set the counters of `num2` and `num3`, which were incremented under the first `h1`, back to 0 when the second `h1` appears, for example.

Note that {{cssxref("counter-reset")}} was previously used in this case, but the specification of `counter-reset` was changed with the introduction of the {{cssxref("counter-set")}} property, so now Some browsers do not produce the expected results unless `counter-set` is used. See [Side effects of strict scope](#side_effects_of_strict_scope) for more information.

However, some browsers may not support {{cssxref("counter-set")}}. For browsers that do not support `counter-set`, you have to use {{cssxref("counter-reset")}} to set the counter for lower-level headings to be set back to 0.

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

#### Actual Result

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

/* CSS counter */
table { counter-reset: count; }
tbody tr { counter-increment: count; }
tbody td:nth-of-type(1)::before { content: counter(count); color: red; }
```

#### Actual Result

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

#### Actual Result

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

#### Actual Result

{{EmbedLiveSample("reverse_list-item_order", "100%", 250)}}

## Notes on CSS counters

### Relationship between ordered list numbering and CSS counters

Previously, {{htmlelement("ol","ordered list")}} counting was implemented independently of CSS counters, but with the introduction of {{cssxref("counter-set")}}, the CSS counter specification was changed and ordered list counting is now implemented in the same way as CSS counters. Only browsers that follow this revised specification can manipulate the [Implicit list-item counter](#implicit_list-item_counter).

### Numbering for invalid HTML

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

Although we will use CSS counters here for clarity, the CSS specification assumes that the default list-item numbering will have the same result.

The {{htmlelement("ol")}} element appears directly below the `<ol>` element. This is invalid HTML, but previously the HTML and CSS above would have rendered it as follows.

#### Result

```
1. (1)
2. (2)
    3. (2-1)
2. (3)
3. (4)
```

Invalid HTML exists for various reasons and cannot be ignored (the DOM generated by `document.execCommand('indent')` also creates the same situation as incorrect HTML). In order to make this numbering the same as for valid HTML, the behavior of {{cssxref("counter-reset")}} was changed by implementing "strict scope" in some newer browsers. Browsers that implement strict scope now display the following.

#### Result

```
1. (1)
2. (2)
    1. (2-1)
3. (3)
4. (4)
```

### Side effects of strict scope

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

If you want to do hierarchical numbering for flat HTML, the above CSS could be used to achieve this.

#### Result

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

Here, for browsers that implement strict scope, using {{cssxref("counter-reset")}} instead of {{cssxref("counter-set")}} would result in the following display.

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

Note that before {{cssxref("counter-set")}} was introduced, this case was implemented using {{cssxref("counter-reset")}}. Firefox 82 and later, which implement strict scoping, are affected by this issue.

### Implicit `counter-reset: list-item` non-applicability

In [Implicit list-item counter](#implicit_list-item_counter), we explained that the following CSS is implicitly applied

```css
ol, ul, menu { counter-reset: list-item; }
li { counter-increment: list-item; }
li::marker { content: counter(list-item) ". "; }

/* If counter-reset: reversed(list-item) is specified */
li { counter-increment: list-item -1; }
```

The CSS specification states that if you override the {{cssxref("counter-increment")}} property (for your own CSS counter description), it will behave as if `counter-increment: list-item` is applied internally.

On the other hand, there is no such arrangement for the {{cssxref("counter-reset")}} property. Traditionally, it behaved as if `counter-reset` was implicitly applied even if it was overridden (with a description for its own CSS counter), but some browsers do not implicitly apply `counter-reset: list-item`, and therefore the default numbering for `li::marker` may be broken.

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

For browsers that do not implicitly apply {{cssxref("counter-reset")}} to `list-item`, the following will be displayed.

#### Result

```
1. (1)
    2. (1-1)
    3. (1-2)
4. (2)
    5. (2-1)
    6. (2-2)
```

#### Expected Result

Essentially, the expected display results are as follows.

```
1. (1)
    1. (1-1)
    2. (1-2)
2. (2)
    1. (2-1)
    2. (2-2)
```

To maintain the expected display results, you must explicitly include {{cssxref("counter-reset")}} for `list-item`.

#### CSS

```css
/* Instead of none */
ol { counter-reset: list-item; }

/* If you want to use your own CSS counter and list-item together */
ol { counter-reset: num list-item; }
```

Firefox 68 and later, which do not apply implicit `counter-reset: list-item`, are affected by this issue.

## Specifications

{{Specifications}}

## See also

- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter()")}} and {{cssxref("counters()")}} functions
- {{cssxref("@counter-style")}}
