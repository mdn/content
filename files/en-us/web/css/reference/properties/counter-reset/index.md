---
title: "`counter-reset` CSS property"
short-title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
page-type: css-property
browser-compat: css.properties.counter-reset
sidebar: cssref
---

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property creates named [CSS counters](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters) and initializes them to a specific value, optionally marking the counter as reversed.

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
/* Keyword */
counter-reset: none;

/* Single counter */
counter-reset: my-counter;
counter-reset: another-counter;

/* Initialize counter */
counter-reset: my-counter -3;
counter-reset: another-counter 15;

/* Reversed counter */
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

This property is specified as a space-separated list of names or name-value pairs, or the keyword `none`.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Specifies the counter name to create and initialized. The `reversed()` functional notation can be used to mark the counter reversed.
- {{cssxref("&lt;integer&gt;")}}
  - : The initial value to set on the newly created counter.
    Defaults to `0` if not specified, or to the number of elements in the case of `reversed()`.
- `none`
  - : Specifies that no counter initialization should occur.

## Description

The `counter-reset` property can be used to create and initialize named [counters](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters), optionally marking the counter as a reversed counter. It can be used to create counters that count up from one to the number of elements, as well as those that count down from the number of elements to one.

The `none` value specifies that no counter initialization should occur. It can be used to override the creation of the named counter declared within a selector block with lower specificity.

> [!WARNING]
> There is [a difference between `counter-reset` and `counter-set` properties](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters#difference_between_counter-set_and_counter-reset). After creating a counter using `counter-reset`, you can adjust its value by using the {{cssxref("counter-set")}} property. This is counterintuitive because, despite its name, the `counter-reset` property is used for creating and initializing counters, while the `counter-set` property is used for resetting the value of an existing counter.

Multiple counters can be created by separated each with a space. Counters can be a standalone name or a space-separated name-value pair. The `counter-reset` property accepts a list of one or more space-separated counter names or the keyword `none`. For counter names, regular counters use the format `<counter-name>`, and reversed counters use `reversed(<counter-name>)`, where `<counter-name>` is a {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} or `list-item` for the built-in {{HTMLElement("ol")}} counter. Optionally, each counter name can be followed by an `<integer>` to set its initial value.

### Default initial values

The default initial values of both regular and reversed counters enable implementing the two most common numbering patterns: counting up from one to the number of elements and counting down from the number of elements to one, incrementing or decrementing by one, respectively. By including a counter value for a named counter, your counter can count up or down, starting at that integer value. The increment can be adjusted with the {{cssxref("counter-increment")}} property.

This example creates three counters. The `chapter` and `page` counters are set to the initial default value of `0`, while the `section` is set to `4`:

```css
h1 {
  counter-reset: chapter section 4 page;
}
```

Reversed counters created without an `<integer>` start with the value equal to the number of elements in the set, counting down so the last element in the set is `1`.

This example creates three counters: two reversed counters, `chapter` and `section`, and a regular counter named `pages`. The `chapter` counter is initialized as the number of elements, `section` as `10`, and `pages` as `0`, the initial default value.

```css
h1 {
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
```

### Built-in `list-item` counter

Ordered lists ({{HTMLElement("ol")}}) come with built-in `list-item` counters that control their numbering. These counters automatically increase or decrease by one with each list item. The `counter-reset` property can be used to reset the `list-item` counters. Like with other counters, you can override the default increment value for `list-item` counters by using the {{cssxref("counter-increment")}} property.

### Stuff

The property creates a counter with the name provided and initializes the value of the counter. By default, the counter value is set to `0`.
counter-reset: my-counter;

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

{{EmbedLiveSample("Overriding the list-item counter", 140, 300)}}

The first item is numbered 4. This is similar to the effect of writing [`<ol start="4">`](/en-US/docs/Web/HTML/Reference/Elements/ol#start) in HTML.

### Using a reverse counter

In this example, the `reversed()` function is used to created a reversed counter named 'priority' used to number five tasks.

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

We create a reversed counter named `priority` on the `<ul>`, and remove the default bullets. We set the counter to decrement on every `<li>`. We than add generated content to print the counter before the content in every `<li>`.

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

{{EmbedLiveSample("Using a reverse counter", 140, 150)}}

The items are numbered in reversed order from 5 to 1. Notice in the code we haven't specified the counter's initial value. The browser automatically calculates the initial value at layout-time using the counter increment value.

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
