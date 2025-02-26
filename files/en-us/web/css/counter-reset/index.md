---
title: counter-reset
slug: Web/CSS/counter-reset
page-type: css-property
browser-compat: css.properties.counter-reset
---

{{CSSRef}}

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property creates named [CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) and initializes them to a specific value. It supports creating counters that count up from one to the number of elements, as well as those that count down from the number of elements to one.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

## Syntax

```css
/* Create a counter with initial default value 0 */
counter-reset: my-counter;

/* Create a counter and initialize as "-3" */
counter-reset: my-counter -3;

/* Create a reversed counter with initial default value */
counter-reset: reversed(my-counter);

/* Create a reversed counter and initialize as "-1" */
counter-reset: reversed(my-counter) -1;

/* Create reversed and regular counters at the same time */
counter-reset: reversed(pages) 10 items 1 reversed(sections) 4;

/* Remove all counter-reset declarations in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Values

The `counter-reset` property accepts a list of one or more space-separated counter names or the keyword `none`. For counter names, regular counters use the format `<counter-name>`, and reversed counters use `reversed(<counter-name>)`, where `<counter-name>` is a {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} or `list-item` for the built-in {{HTMLElement("ol")}} counter. Optionally, each counter name can be followed by an `<integer>` to set its initial value.

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Specifies the counter name to create and initialize using the {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} format. The `reversed()` functional notation can be used to mark the counter reversed.
- {{cssxref("&lt;integer&gt;")}}
  - : The initial value to set on the newly created counter.
    Defaults to `0` if not specified.
- `none`
  - : Specifies that no counter initialization should occur.
    This value is useful for overriding `counter-reset` values in less specific rules.

## Description

The `counter-reset` property can create both regular and, in browsers that support it, reversed counters. You can create multiple regular and reversed counters, each separated by a space. Counters can be a standalone name or a space-separated name-value pair.

> [!WARNING]
> There is [a difference between `counter-reset` and `counter-set` properties](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters#difference_between_counter-set_and_counter-reset). After creating a counter using `counter-reset`, you can adjust its value by using the {{cssxref("counter-set")}} property. This is counterintuitive because, despite its name, the `counter-reset` property is used for creating and initializing counters, while the `counter-set` property is used for resetting the value of an existing counter.

Setting `counter-increment: none` on a selector with greater specificity overrides the creation of the named counter set on selectors with lower specificity.

### Default initial values

The default initial values of both regular and reversed counters make it easy to implement the two most common numbering patterns: counting up from one to the number of elements and counting down from the number of elements to one, respectively. By including a counter value for a named counter, your counter can count up or down, starting at an integer value.

Regular counters default to `0` if no reset value is provided. By default, regular counters increment by one, which can be adjusted with the {{cssxref("counter-increment")}} property.

```css
h1 {
  /* Create the counters "chapter" and "page" and set to initial default value.
     Create the counter "section" and set to "4". */
  counter-reset: chapter section 4 page;
}
```

### Reversed counters

When creating reversed counters without a value, the counter will start with the value equal to the number of elements in the set, counting down so the last element in the set is `1`. By default, reverse counters decrement by one; this can also be changed with the `counter-increment` property.

```css
h1 {
  /* Create reversed counters "chapter" and "section".
      Set "chapter" as the number of elements and "section" as "10".
      Create the counter "pages" with the initial default value. */
  counter-reset: reversed(chapter) reversed(section) 10 pages;
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

Using `counter-reset`, we set the implicit `list-item` counter to start counting at `3` for every `ol`. Then, the first item would be numbered 4, second would be numbered 5, etc., similar to the effect of writing [`<ol start="4">`](/en-US/docs/Web/HTML/Element/ol#start) in HTML.

### Using a reverse counter

In the following example, we've declared a reversed counter named 'priority'. The counter is being used to number five tasks.

```html
<ul class="stack">
  <li>Task A</li>
  <li>Task B</li>
  <li>Task C</li>
  <li>Task D</li>
  <li>Task E</li>
</ul>
```

```css hidden
@supports not (counter-reset: reversed(priority)) {
  .stack {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support the reversed counters yet.";
  }
}
```

```css
li::before {
  content: counter(priority) ". ";
  counter-increment: priority -1;
}

.stack {
  counter-reset: reversed(priority);
  list-style: none;
}
```

{{EmbedLiveSample("Using a reverse counter", 140, 150)}}

In the output, the items are numbered in reversed order from 5 to 1. Notice in the code we haven't specified the counter's initial value. The browser automatically calculates the initial value at layout-time using the counter increment value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) guide
- {{cssxref("counter-increment")}} property
- {{cssxref("counter-set")}} property
- {{cssxref("@counter-style")}} at-rule
- {{cssxref("counter", "counter()")}} and {{cssxref("counters", "counters()")}} functions
- {{cssxref("content")}} property
- {{cssxref("::marker")}} pseudo-class
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
