---
title: ':has()'
slug: Web/CSS/:has
page-type: css-pseudo-class
tags:
  - ':has'
  - CSS
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.has
---

{{CSSRef}}

The functional **`:has()`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element if any of the [relative selectors](/en-US/docs/Web/CSS/CSS_Selectors#relative_selector) that are passed as an argument match at least one element when anchored against this element. This pseudo-class presents a way of selecting a parent element or a previous sibling element with respect to a reference element by taking a [forgiving relative selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_relative_selector_list) as an argument.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) { margin-bottom: 0; }
```

## Syntax

```
:has( <forgiving-relative-selector-list> )
```

> **Note:** The `:has()` pseudo-class cannot be nested within another `:has()`. Also, pseudo-elements are not valid selectors within `:has()`. This is because many pseudo-elements exist conditionally based on the styling of their ancestors and allowing these to be queried by `:has()` can introduce cyclic querying.

## Examples

### With the sibling combinator

The `:has()` rule in the following example adjusts the spacing after `H1` headings if they are immediately followed by an `H2` heading.

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
</section>
```

#### CSS

```css hidden
section {
    display: flex;
    align-items: start;
    justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1, h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1.0em;
  color: rgb(150, 149, 149);
}
```

```css
h1, h2 {
  margin: 0 0 1.0rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### Result

{{EmbedLiveSample('With_the_sibling_combinator', 600, 150)}}

This example shows two similar texts side-by-side for comparison – the left one with an `H1` heading followed by a paragraph and the right one with an `H1` heading followed by an `H2` heading and then a paragraph. In the example on the right, `:has()` helps to select the `H1` element that is immediately followed by (indicated by [`+`](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)) an `H2` element and the CSS rule reduces the spacing after such an `H1` element. Without the `:has()` pseudo-class, you cannot select the preceding sibling or parent element.

### With the :is() pseudo-class

This example builds on the previous example to show how to select multiple elements with `:has()`.
#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <h3>8:00 am</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
</section>
```

#### CSS

```css hidden
section {
    display: flex;
    align-items: start;
    justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1.0em;
  color: rgb(150, 149, 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1, h2, h3 {
  margin: 0 0 1.0rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### Result

{{EmbedLiveSample('With_the_:is()_pseudo-class', 600, 170)}}

Here, the first [`:is()`](/en-US/docs/Web/CSS/:is) pseudo-class is used to select any of the heading elements in the list. The second `:is()` pseudo-class is used to pass a selector list as an argument to `:has()`. The `:has()` pseudo-class helps to select any `H1`, `H2`, or `H3` element that is immediately followed by (indicated by [`+`](/en-US/docs/Web/CSS/Adjacent_sibling_combinator)) an `H2`, `H3`, or `H4` element and the CSS rule reduces the spacing after such `H1`, `H2`, or `H3` elements.

### With the :not() pseudo-class

The form in this example contains three `<fieldset>` groups. The first two are indicated as mandatory and are styled pink when no option is selected. In addition, when no option is selected in the first two `<fieldset>` groups, an asterisk displays after the question. The `:has()` pseudo-class is used here to style the form elements based on the state of the child or sibling elements.

#### HTML

```html
<form>
  <p>Fill out our questionnaire:</p>
  <fieldset class="required">
    <legend>Which activity are you interested in?</legend>
    <input type="radio" name="activity" id="activity1">
    <label for="activity1">Running</label> 
    <input type="radio" name="activity" id="activity2">
    <label for="activity2">Rock climbing</label>
    <input type="radio" name="activity" id="activity3">
    <label for="activity3">Swimming</label>
  </fieldset>
  
  <fieldset class="required">
    <legend>What days work for you?</legend>
    <input type="checkbox" id="day1">
    <label for="day1">Monday</label> 
    <input type="checkbox" id="day2">
    <label for="day2">Wednesday</label>
    <input type="checkbox" id="day3">
    <label for="day3">Friday</label>
  </fieldset>
  
  <fieldset>
    <legend>Join our newsletter</legend>
    <input type="radio" name="newsletter" id="newsweekly">
    <label for="newsweekly">Weekly</label> 
    <input type="radio" name="newsletter" id="newsmonthly">
    <label for="newsmonthly">Monthly</label> 
  </fieldset>
</form>
```

#### CSS

```css hidden
form { 
    border: 4px solid white;
    width: max-content;
    font-family: sans-serif;
    margin-left: 2em;
  }

legend {
    background: #7B0D1E;
    color: #fff;
    padding: 3px 6px;
    background: white;
    color: black;
    font-weight: bold;
}
```

```css

fieldset:has(+ fieldset) {
  margin-bottom: 1em;
}

fieldset.required:not(:has(input:checked)) {
  background: pink;
}

fieldset.required:not(:has(input:checked)) legend::after {
  content: " ✳︎";
  color: red;
}
```

#### Result

{{EmbedLiveSample('With_the_:not()_pseudo-class', 600, 300)}}

- The first `:has()` pseudo-class selects any `<fieldset>` element adjacent to another `<fieldset>` element and applies a bottom spacing to the preceding `<fieldset>` element. This selects the first and second `<fieldset>` elements, and the spacing is applied after them.

- The second `:has()` pseudo-class in combination with the [`:not()`](/en-US/docs/Web/CSS/:not) pseudo-class selects any `<fieldset>` element with the `required` class containing an input radio or checkbox that hasn't been toggled to an [on state](/en-US/docs/Web/CSS/:checked). This selects the first and second `<fieldset>` elements, and applies the pink background to the `<fieldset>` elements.

- The third `:has()` pseudo-class selects the same elements as the second `:has()` pseudo-class, but in this case the `<legend>` element is styled to add the asterisk after the question.

- After you select an option in the first two groups, the `:has()` selection no longer applies and the initial formatting and asterisk are removed.

Be careful about the order of `:has()` and [`:not()`](/en-US/docs/Web/CSS/:not) pseudo-classes because swapping the order does not select the same elements. For example, in the following rule, a [selector list](/en-US/docs/Web/CSS/Selector_list) is passed as an argument to `:has()`. The `:has()` and `:not()` pseudo-classes here will select only those `<section>` elements that don’t contain any heading elements.

```css
section:not(:has(h1, h2, h3, h4, h5, h6)) {...}
```

However, if you swap the order of the two pseudo-classes as shown below:

```css
section:has(:not(h1, h2, h3, h4, h5, h6)) {...}
```

The `:not()` pseudo-class will select any element that’s not a heading element, such as `<p>`, `<a>`, or `<button>` and pass that as an argument to `:has()`, which in turn, will select any `<section>` element that contains those other non-heading elements. This might eventually end up selecting even those `<section>` elements that do have a heading element along with other non-heading elements.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`:is()`](/en-US/docs/Web/CSS/:is), [`:not()`](/en-US/docs/Web/CSS/:not)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors)
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- For more inspiring ideas, see [Using :has() as a CSS parent selector and much more](https://webkit.org/blog/13096/css-has-pseudo-class/#using-has-with-the-child-combinator).
