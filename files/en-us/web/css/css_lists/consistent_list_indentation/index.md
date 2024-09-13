---
title: Consistent list indentation
slug: Web/CSS/CSS_lists/Consistent_list_indentation
page-type: guide
---

{{CSSRef}}

One of the most common style changes made to lists is a change in the indentation distance—that is, how far the list items are pushed over to the right. This article will help you understand indenting list items so that list item markers are visible.

To understand why this is the case, and more importantly how to avoid the problem altogether, it's necessary to examine the details of list construction.

## Making a List

### The stand-alone list item

First, we consider the pure list item, not nested in a list of items. When using the HTML {{htmlelement("li")}} element, the browser sets the {{cssxref("display")}} value to `list-item`. Whether list items not nested in a list are provided a marker (otherwise known as a "bullet") depends on the browser. We can remove that bullet with {{cssxref("list-style-type", "list-style-type: none")}}.

```css
li {
  border: 1px dashed red;
}
li:nth-of-type(n + 4) {
  list-style-type: none;
}
```

```css hidden
li {
  width: 15em;
}
```

```html hidden
<p>Default bullets depend on the browser:</p>
<li>A list item</li>
<li>A list item</li>
<li>A list item</li>
<p>These list items have their bullets removed:</p>
<li>A list item</li>
<li>A list item</li>
<li>A list item</li>
```

{{EmbedLiveSample("The stand-alone list item", "100%", 200)}}

That dotted red border represents the outer edges of the content area of each list item. At this point, the list items have no padding or borders.

### List items nested in a list

Now we wrap these in a parent element; in this case, we'll wrap them in an unordered list (i.e., `<ul>`). According to the CSS box model, the list items' boxes must be displayed within the parent element's content area.

```css
ul {
  border: 1px dashed blue;
}
li {
  border: 1px dashed red;
  list-style-type: none;
}
```

```css hidden
body {
  width: 15em;
}
```

```html hidden
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
```

{{EmbedLiveSample("List items nested in a list", "100%", 150)}}

The dotted blue border shows us the edges of the `<ul>` element's content area. That parent comes with both margin and padding. Browsers set the following default styles on unordered lists:

```css
ul {
  /* user-agent styles */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
```

### Default bullet position

Now we put the list item markers back in. Since this is an unordered list, the list items inherit `list-style-type: disc;` browser styles, which are filled-circle "bullets," from their `<ul>` parent.

```css
li {
  border: 1px dashed red;
}
ul {
  border: 1px dotted blue;
}
ul:last-of-type {
  list-style-position: inside;
}
```

```css hidden
ul {
  width: 15em;
}
```

```html hidden
<p>These default to <code>list-style-position: outside</code>.</p>
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
<p>These have <code>list-style-position: inside</code> set.</p>
<ul>
  <li>A list item</li>
  <li>A list item</li>
  <li>A list item</li>
</ul>
```

{{EmbedLiveSample("Inheriting `list-style-type`", "100%", 220)}}

Visually, the markers are _outside_ the content area of the `<ul>`, but that's not the important part here. What's key is that the markers are placed outside the "principal box" of the `<li>` elements, not the `<ul>`. They're sort of like appendages to the list items, hanging outside the content-area of the `<li>` but still attached to the `<li>`.

This is why, in every modern browser, markers are placed outside any border set for an `<li>` element when the value of {{cssxref("list-style-position")}} defaults to or is explicitly set to `outside`. When we changed it to `inside`, the markers were brought inside the `<li>`'s content, as though they're an inline box placed at the very beginning of the `<li>`.

## Default indentation

As noted above, all browsers provide the `<ul>` parent both margin and padding. While user agents CSS differ somewhat, they all include:

```css
ul,
ol {
  /* user-agent styles */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
ol {
  list-style-type: decimal;
}
li {
  display: list-item;
  text-align: match-parent;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
}
```

All browsers set {{cssxref("padding-inline-start")}} to 40 pixels for the `<ul>` element by default. In left-to-right languages, like English, this is the left _padding_. Any padding set in the author style sheets (that's your stylesheet) takes precedence.

If you want to be explicit, set the following in your style sheets to ensure, unless otherwise overridden, the list items in the main content area of your document, contained in the {{htmlelement("main")}} section, are properly indented:

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

And always nest your `<li>` elements in a `<ul>` or `<ol>`.
