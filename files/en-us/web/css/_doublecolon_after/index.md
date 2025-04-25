---
title: ::after
slug: Web/CSS/::after
page-type: css-pseudo-element
browser-compat: css.selectors.after
---

{{CSSRef}}

In CSS, **`::after`** creates a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) that is the last child of the selected element. It is often used to add cosmetic content to an element with the {{CSSxRef("content")}} property. It is inline by default.

{{InteractiveExample("CSS Demo: ::after", "tabbed-standard")}}

```css interactive-example
a::after {
  content: " (" attr(href) ")";
}

.dead-link {
  text-decoration: line-through;
}

.dead-link::after {
  content: url("/shared-assets/images/examples/warning.svg");
  display: inline-block;
  width: 12px;
  height: 12px;
}
```

```html interactive-example
<p>
  The sailfish is named for its sail-like dorsal fin and is widely considered
  the fastest fish in the ocean.
  <a href="https://en.wikipedia.org/wiki/Sailfish"
    >You can read more about it here</a
  >.
</p>

<p>
  The red lionfish is a predatory scorpionfish that lives on coral reefs of the
  Indo-Pacific Ocean and more recently in the western Atlantic.
  <a href="" class="dead-link">You can read more about it here</a>.
</p>
```

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

## Description

The `::after` pseudo-element is an inline box generated as an immediate child of the element it is associated with, or the "originating element". It is often used to add cosmetic content to an element via the {{CSSxRef("content")}} property, such as icons, quote marks, or other decoration.

`::after` pseudo-elements can't be applied to _{{ glossary("replaced elements")}}_ such as {{htmlelement("img")}}, whose contents are determined by external resources and not affected by the current document's styles.

An `::after` pseudo-element with a {{cssxref("display")}} value of `list-item` behaves like a list item, and can therefore generate a {{cssxref("::marker")}} pseudo-element just like an {{htmlelement("li")}} element.

If the [`content`](/en-US/docs/Web/CSS/content) property is not specified, has an invalid value, or has `normal` or `none` as a value, then the `::after` pseudo-element is not rendered. It behaves as if `display: none` is set.

> [!NOTE]
> The [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) specification introduced the double-colon notation `::after` to distinguish [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) from [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements). Browsers also accept single-colon notation `:after`, introduced in CSS2.

## Accessibility

Using an `::after` pseudo-element to add content is discouraged, as it is not reliably accessible to screen readers.

## Examples

### Basic usage

Let's create two classes: one for boring paragraphs and one for exciting ones. We can use these classes to add pseudo-elements to the end of paragraphs.

#### HTML

```html
<p class="boring-text">Here is some plain old boring text.</p>
<p>Here is some normal text that is neither boring nor exciting.</p>
<p class="exciting-text">Contributing to MDN is easy and fun.</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- EXCITING!";
  color: darkgreen;
  font-weight: bolder;
}

.boring-text::after {
  content: " <- BORING";
  color: darkviolet;
  font-weight: bolder;
}
```

#### Result

{{EmbedLiveSample('Basic_usage', 500, 150)}}

### Decorative example

We can style text or images in the {{CSSxRef("content")}} property almost any way we want.

#### HTML

```html
<span class="ribbon">Look at the orange box after this text. </span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "This is a fancy orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Result

{{EmbedLiveSample('Decorative_example', 450, 20)}}

### Tooltips

This example uses `::after`, in conjunction with the [`attr()`](/en-US/docs/Web/CSS/attr) CSS expression and a `data-description` [custom data attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*), to create tooltips. No JavaScript is required!

We can also support keyboard users with this technique, by adding a `tabindex` of `0` to make each `span` keyboard focusable, and using a CSS `:focus` selector. This shows how flexible `::before` and `::after` can be, though for the most accessible experience a semantic disclosure widget created in some other way (such as with [details and summary](/en-US/docs/Web/HTML/Reference/Elements/details) elements) is likely to be more appropriate.

#### HTML

```html
<p>
  Here we have some
  <span tabindex="0" data-description="collection of words and punctuation">
    text
  </span>
  with a few
  <span tabindex="0" data-description="small popups that appear when hovering">
    tooltips</span
  >.
</p>
```

#### CSS

```css
span[data-description] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-description]:hover::after,
span[data-description]:focus::after {
  content: attr(data-description);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Result

{{EmbedLiveSample('Tooltips', 450, 120)}}

### `::after::marker` nested pseudo-elements

The `::after::marker` [nested pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements#nesting_pseudo-elements) selects the list {{CSSxRef("::marker")}} of an `::after` pseudo-element that is itself a list item, that is, it has its {{CSSxRef("display")}} property set to `list-item`.

In this demo, we generate extra list items before and after a list navigation menu using `::before` and `::after` (setting them to `display: list-item` so they behave like list items). We then use `ul::before::marker` and `ul::after::marker` to give their list markers a different color.

#### HTML

```html
<ul>
  <li><a href="#">Introduction</a></li>
  <li><a href="#">Getting started</a></li>
  <li><a href="#">Understanding the basics</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Start";
}

ul::after {
  content: "End";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Result

{{EmbedLiveSample('`::after::marker` nested pseudo-elements', 450, 200)}}

While the list bullets of the three navigation items are generated because they are `<li>` elements, "Start" and "End" have been inserted via pseudo-elements and `::marker` is used to style their bullets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
