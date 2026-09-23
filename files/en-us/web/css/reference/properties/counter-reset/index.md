---
title: "`counter-reset` CSS property"
short-title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
page-type: css-property
browser-compat: css.properties.counter-reset
sidebar: cssref
---

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property creates named [CSS counters](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters) and initializes them to a specific value, optionally setting the counter as reversed.

{{InteractiveExample("CSS Demo: counter-reset")}}

```css interactive-example-choice
counter-reset: none;
```

```css interactive-example-choice
counter-reset: chapter-count 0;
```

```css interactive-example-choice
counter-reset: chapter-count;
```

```css interactive-example-choice
counter-reset: chapter-count 5;
```

```css interactive-example-choice
counter-reset: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Alice's Adventures in Wonderland</h1>
    <h2>Down the Rabbit-Hole</h2>
    <h2 id="example-element">The Pool of Tears</h2>
    <h2>A Caucus-Race and a Long Tale</h2>
    <h2>The Rabbit Sends in a Little Bill</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: chapter-count;
}

#example-element {
  background-color: lightblue;
  color: black;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counters(chapter-count, ".") ": ";
}
```

## Syntax

```css
/* Keyword value */
counter-reset: none;

/* Regular counters with default initial values */
counter-reset: my-counter;
counter-reset: another-counter;

/* Regular counters with an initial value */
counter-reset: my-counter -3;
counter-reset: another-counter 15;

/* Reversed counters */
counter-reset: reversed(my-counter);
counter-reset: reversed(my-counter) 3;
counter-reset: reversed(another-counter) 15;

/* Multiple counters */
counter-reset: my-counter -3 another-counter 15;
counter-reset: reversed(pages) items 1 reversed(sections) 4;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Values

This property is specified as a space-separated list of counter or reversed counter names, each optionally followed by an `<integer>`, or the keyword `none`:

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Specifies the counter name to create and initialize. The `reversed()` functional notation can be used to create a reversed counter.
- {{cssxref("&lt;integer&gt;")}}
  - : Specifies the initial value to set on the newly created counter.
    If not specified, defaults to `0` for regular counters; there is no initial value for reversed counters.
- `none`
  - : Specifies that no counters are created.

## Description

The `counter-reset` property can be used to create and initialize named [counters](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters) or reversed counters to number elements in ascending or descending order.

The `none` value can be used to override a `counter-reset` declaration in a rule with lower specificity.

> [!WARNING]
> There is [a difference between `counter-reset` and `counter-set` properties](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters#difference_between_counter-set_and_counter-reset). After creating a counter using `counter-reset`, you can adjust its value by using the {{cssxref("counter-set")}} property. This is counterintuitive because, despite its name, the `counter-reset` property is used for creating and initializing counters, while the `counter-set` property is used for resetting the value of an existing counter.

Separate multiple counter names or name-value pairs with spaces. For counter names, regular counters use the format `<counter-name>` and reversed counters use the format `reversed(<counter-name>)`, where `<counter-name>` is a {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} or `list-item` for the built-in {{HTMLElement("ol")}} counter.

### Default initial values

Declaring regular and reversed counters without including an integer enables you to implement the two most common numbering patterns: counting up from `1` to the number of elements and counting down from the number of elements to `1`, with increments or decrements of `1`. By specifying an initial value for a named counter, you can change its starting value. The increment or decrement can be adjusted by using the {{cssxref("counter-increment")}} property.

The following example creates three counters. The `chapter` and `page` counters are set to the initial default value of `0`, while `section` is set to `4`:

```css
h1 {
  counter-reset: chapter section 4 page;
}
```

Reversed counters created without an `<integer>` count down so the last element in the set is `-1`. To count down the elements so that the last element is set to `1`, set the `counter-increment` on that named counter to `-1`.

The following example creates two reversed counters, `chapter` and `section`, and a regular counter, `pages`. The `section` counter starts at `10`, and `pages` uses the default initial value of `0`. The initial value of the `chapter` counter is calculated automatically. The counter is decremented by `1` each time an `<h1>` is encountered, so its value is `1` on the last `<h1>`.

```css
h1 {
  counter-reset: reversed(chapter) reversed(section) 10 pages;
  counter-increment: chapter -1;
}
```

### Built-in `list-item` counter

Ordered lists ({{HTMLElement("ol")}}) come with built-in `list-item` counters that control their numbering. These counters automatically increase or decrease by one with each list item. The `counter-reset` property can be used to reset the `list-item` counters. Like with other counters, you can override the default increment value for `list-item` counters by using the {{cssxref("counter-increment")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Overriding the `list-item` counter

In this example, the `counter-reset` property is used to set a starting value for an implicit `list-item` counter.

#### HTML

We include an ordered list ({{htmlelement("ol")}}) containing five list items ({{htmlelement("li")}}).

```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
</ol>
```

#### CSS

Using `counter-reset`, we set the implicit `list-item` counter to start at a value other than the default `1`:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Result

{{EmbedLiveSample("Overriding the list-item counter", 140, 200)}}

The first item is numbered `4`. This is similar to the effect of writing [`<ol start="4">`](/en-US/docs/Web/HTML/Reference/Elements/ol#start) in HTML.

### Using a reverse counter

In this example, the `reversed()` function is used to create a reversed counter named `priority` that numbers five tasks.

#### HTML

We include an unordered list ({{htmlelement("ul")}}) containing five list items ({{htmlelement("li")}}).

```html
<ul class="stack">
  <li>Task A</li>
  <li>Task B</li>
  <li>Task C</li>
  <li>Task D</li>
  <li>Task E</li>
</ul>
```

#### CSS

We create a reversed counter named `priority` on the `<ul>` and remove the default bullets. We decrement the counter by `1` on each `<li>`. We then use generated content to display the counter value before each list item's content.

```css
.stack {
  counter-reset: reversed(priority);
  list-style: none;
}
li {
  counter-increment: priority -1;
}
li::before {
  content: counter(priority) ". ";
}
```

```css hidden
@supports not (counter-reset: reversed(priority)) {
  body::before {
    content: "Your browser doesn't support the reversed() function.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

{{EmbedLiveSample("Using a reverse counter", 140, 150)}}

The items are numbered in reverse order from `5` to `1`. Notice that we haven't specified the counter's initial value. The browser automatically calculates the initial value at layout time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters) guide
- {{cssxref("counter-increment")}} property
- {{cssxref("counter-set")}} property
- {{cssxref("@counter-style")}} at-rule
- {{cssxref("counter()")}} and {{cssxref("counters()")}} functions
- {{cssxref("content")}} property
- {{cssxref("::marker")}} pseudo-class
- [CSS lists and counters](/en-US/docs/Web/CSS/Guides/Lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/Guides/Counter_styles) module
