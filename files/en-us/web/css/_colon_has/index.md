---
title: :has()
slug: Web/CSS/:has
page-type: css-pseudo-class
browser-compat: css.selectors.has
sidebar: cssref
---

The functional **`:has()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element if any of the [relative selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) that are passed as an argument match at least one element when anchored against this element. This pseudo-class presents a way of selecting a parent element or a previous sibling element with respect to a reference element by taking a [relative selector list](/en-US/docs/Web/CSS/Selector_list#relative_selector_list) as an argument.

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

The `:has()` pseudo-class takes on the [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity) of the most specific selector in its arguments the same way as {{CSSxRef(":is", ":is()")}} and {{CSSxRef(":not", ":not()")}} do.

## Syntax

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

If the `:has()` pseudo-class itself is not supported in a browser, the entire selector block will fail unless `:has()` is in a forgiving selector list, such as in [`:is()`](/en-US/docs/Web/CSS/:is) and [`:where()`](/en-US/docs/Web/CSS/:where).

The `:has()` pseudo-class cannot be nested within another `:has()`.

Pseudo-elements are also not valid selectors within `:has()` and pseudo-elements are not valid anchors for `:has()`. This is because many pseudo-elements exist conditionally based on the styling of their ancestors and allowing these to be queried by `:has()` can introduce cyclic querying.

## Examples

### Selecting a parent element

You may be looking for a "parent [combinator](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)", which allows you to go up the DOM tree and select the parent of a specific element. The `:has()` pseudo-class does that by using `parent:has(child)` (for any parent) or `parent:has(> child)` (for direct parent). This example shows how to style a `<section>` element when it contains a child with the `featured` class.

```html
<section>
  <article class="featured">Featured content</article>
  <article>Regular content</article>
</section>
<section>
  <article>Regular content</article>
</section>
```

```css
section:has(.featured) {
  border: 2px solid blue;
}
```

### Result

{{EmbedLiveSample('Selecting a parent element', , 200)}}

### With the sibling combinator

The `:has()` style declaration in the following example adjusts the spacing after `<h1>` headings if they are immediately followed by an `<h2>` heading.

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
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

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}
```

```css
h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### Result

{{EmbedLiveSample('With_the_sibling_combinator', 600, 150)}}

This example shows two similar texts side-by-side for comparison – the left one with an `H1` heading followed by a paragraph and the right one with an `H1` heading followed by an `H2` heading and then a paragraph. In the example on the right, `:has()` helps to select the `H1` element that is immediately followed by an `H2` element (indicated by the next-sibling combinator [`+`](/en-US/docs/Web/CSS/Next-sibling_combinator)) and the CSS rule reduces the spacing after such an `H1` element. Without the `:has()` pseudo-class, you cannot use CSS selectors to select a preceding sibling of a different type or a parent element.

### With the :is() pseudo-class

This example builds on the previous example to show how to select multiple elements with `:has()`.

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <h3>8:00 am</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
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
  font-size: 1em;
  color: rgb(150 149 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1,
h2,
h3 {
  margin: 0 0 1rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### Result

{{EmbedLiveSample('With_the_:is()_pseudo-class', 600, 170)}}

Here, the first [`:is()`](/en-US/docs/Web/CSS/:is) pseudo-class is used to select any of the heading elements in the list. The second `:is()` pseudo-class is used to pass a list of next-sibling selectors as an argument to `:has()`. The `:has()` pseudo-class helps to select any `H1`, `H2`, or `H3` element that is immediately followed by (indicated by [`+`](/en-US/docs/Web/CSS/Next-sibling_combinator)) an `H2`, `H3`, or `H4` element and the CSS rule reduces the spacing after such `H1`, `H2`, or `H3` elements.

This selector could have also been written as:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Logical operations

The `:has()` relational selector can be used to check if one of the multiple features is true or if all the features are true.

By using comma-separated values inside the `:has()` relational selector, you are checking to see if any of the parameters exist. `x:has(a, b)` will style `x` if descendant `a` OR `b` exists.

By chaining together multiple `:has()` relational selectors together, you are checking to see if all of the parameters exist. `x:has(a):has(b)` will style `x` if descendant `a` AND `b` exist.

```css
body:has(video, audio) {
  /* styles to apply if the content contains audio OR video */
}
body:has(video):has(audio) {
  /* styles to apply if the content contains both audio AND video */
}
```

## Analogy between :has() and regular expressions

Interestingly, we can relate some CSS `:has()` constructs with the [lookahead assertion](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) in regular expressions because they both allow you to select elements (or strings in regular expressions) based on a condition without actually selecting the condition matching the element (or string) itself.

### Positive lookahead (?=pattern)

In the regular expression `abc(?=xyz)`, the string `abc` is matched only if it is immediately followed by the string `xyz`. As it is a lookahead operation, the `xyz` is not included in the match.

The analogous construct in CSS would be `.abc:has(+ .xyz)`: it selects the element `.abc` only if there is a next sibling `.xyz`. The part `:has(+ .xyz)` acts as a lookahead operation because the element `.abc` is selected and not the element `.xyz`.

### Negative lookahead (?!pattern)

Similarly, for the negative lookahead case, in the regular expression `abc(?!xyz)`, the string `abc` is matched only if it is _not_ followed by `xyz`. The analogous CSS construct `.abc:has(+ :not(.xyz))` doesn't select the element `.abc` if the next element is `.xyz`.

## Performance considerations

Certain uses of the `:has()` pseudo-class can significantly impact page performance, particularly during dynamic updates (DOM mutations). Browser engines must re-evaluate `:has()` selectors when the DOM changes, and complex or poorly constrained selectors can lead to expensive computations.

### Avoid broad anchoring

The anchor selector (the `A` in `A:has(B)`) should not be an element that has too many children, like `body`, `:root`, or `*`. Anchoring `:has()` to very general selectors can degrade performance because any DOM change within the entire subtree of a broadly selected element requires the browser to re-check the `:has()` condition.

```css example-bad
/* Avoid anchoring :has() to broad elements */
body:has(.sidebar) {
  /* styles */
}
:root:has(.content) {
  /* styles */
}
*:has(.item) {
  /* styles */
}
```

Instead, anchor `:has()` to specific elements like `.container` or `.gallery` to reduce the scope and improve performance.

```css example-good
/* Use specific containers to limit scope */
.container:has(.sidebar-expanded) {
  /* styles */
}
.content-wrapper:has(> article[data-priority="high"]) {
  /* styles */
}
.gallery:has(> img[data-loaded="false"]) {
  /* styles */
}
```

### Minimize subtree traversals

The inner selector (the `B` in `A:has(B)`) should use combinators like `>` or `+` to limit traversal. When the selector inside `:has()` is not tightly constrained, the browser might need to traverse the entire subtree of the anchor element on every DOM mutation to check if the condition still holds.

In this example, any change within `.ancestor` requires checking all descendants for `.foo`:

```css example-bad
/* May trigger full subtree traversal */
.ancestor:has(.foo) {
  /* styles */
}
```

Using child or sibling combinators limits the scope of the inner selector, reducing the performance cost of DOM mutations. In this example, the browser only needs to check direct children or a specific sibling's descendants:

```css example-good
/* More constrained - limits traversal */
.ancestor:has(> .foo) {
  /* direct child */
}
.ancestor:has(+ .sibling .foo) {
  /* descendant of adjacent sibling */
}
```

Certain inner selectors can force the browser to traverse up the ancestor chain for every DOM mutation, looking for potential anchors that might need updating. This happens when the structure implies a need to check ancestors of the mutated element.

In this example, any DOM change requires checking if the changed element is any element (`*`) that is a direct child of `.foo`, and if its parent (or further ancestors) is `.ancestor`.

```css example-bad
/* Might trigger ancestor traversal */
.ancestor:has(.foo > *) {
  /* styles */
}
```

Constraining the inner selector with specific classes or direct child combinators (e.g., `.specific-child` in the next snippet) reduces expensive ancestor traversals by limiting the browser's check to a well-defined element, improving performance.

```css example-good
/* Constrain the inner selector to avoid ancestor traversals */
.ancestor:has(.foo > .specific-child) {
  /* styles */
}
```

> [!NOTE]
> These performance characteristics may improve as browsers optimize `:has()` implementations, but the fundamental constraints remain: `:has()` needs to traverse a whole subtree, so you need to minimize the subtree's size. In a selector like `A:has(B)`, make sure your `A` does not have too many children, and make sure your `B` is tightly constrained to avoid unnecessary traversal.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`:is()`](/en-US/docs/Web/CSS/:is), [`:where()`](/en-US/docs/Web/CSS/:where), [`:not()`](/en-US/docs/Web/CSS/:not)
- [CSS selectors and combinators](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS selector structure](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [CSS selector module](/en-US/docs/Web/CSS/CSS_selectors)
- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
