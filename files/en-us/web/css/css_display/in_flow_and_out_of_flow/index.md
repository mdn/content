---
title: In flow and out of flow
slug: Web/CSS/CSS_display/In_flow_and_out_of_flow
page-type: guide
---

{{CSSRef}}

The [previous guide](/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) explained block and inline layout in normal flow. All elements that are in flow will be laid out using this method.

## Example of elements in flow

The following example contains a heading, a paragraph, a list, and a final paragraph that contains a `strong` element. The heading and paragraphs are block level, the `strong` element inline. The list, which is displayed using flexbox to arrange the items into a row, is also participating in block and inline layout - the container has an outside `display` type of `block`.

```html live-sample___in-flow
<div class="box">
  <h1>A heading</h1>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
  <p>
    Their names were <strong>Stephen and Joseph Montgolfier</strong>, they were
    papermakers by trade, and were noted as possessing thoughtful minds and a
    deep interest in all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___in-flow
body {
  font: 1.2em sans-serif;
}
.box > * {
  border: 1px solid green;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
}
```

{{EmbedLiveSample("in-flow", "", "300px")}}

All of the elements are considered "in flow"; they appear on the page in the order that they are in the source.

## Taking an item out of flow

All elements are in-flow apart from:

- floated items
- items with `position: absolute` (including `position: fixed` which acts in the same way)
- the root element (`html`)

Out-of-flow items create a new [Block Formatting Context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC), and therefore, everything inside them can be seen as a mini layout, separate from the rest of the page. The root element, therefore, is out of flow, as the container for everything in our document, and establishes the Block Formatting Context for the document.

### Floated items

In this example, there is a `div` and then two paragraphs. A background color has been added to the paragraphs, and the `div` is floated left. The `div` is now out of flow.

As a float it is first laid out according to where it would be in normal flow, then taken out of flow and moved to the left as far as possible.

```html live-sample___float
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}
p {
  background-color: #ccc;
}

.float {
  float: left;
  font-weight: bold;
  width: 200px;
  border: 2px dotted black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "260px")}}

You can see the background color of the following paragraph running underneath, it is only the line boxes of that paragraph that have been shortened to cause the effect of wrapping content around the float. The box of our paragraph is still displaying according to the rules of normal flow. This is why, to make space around a floated item, you must add a margin to the item, in order to push the line boxes away from it. You cannot apply anything to the following in-flow content to achieve that.

### Absolute positioning

Giving an item `position: absolute` or `position: fixed` removes it from flow, and any space that it would have taken up is removed. In the next example I have three paragraph elements, the second element has `position: absolute`, with offset values of `top: 30px` and `right: 30px`. It has been removed from document flow.

```html live-sample___abspos
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
  <p class="abspos">
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___abspos
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}
p {
  border: 2px solid green;
}

.abspos {
  position: absolute;
  background-color: green;
  color: #fff;
  top: 30px;
  right: 30px;
  width: 400px;
}
```

{{EmbedLiveSample("abspos", "", "240px")}}

Using `position: fixed` also removes the item from flow, however the offsets are based on the viewport rather than the containing block.

When taking an item out of flow with positioning, you will need to manage the possibility of content overlapping. Out of flow essentially means that the other elements on your page no longer know that element exists so will not respond to it.

### Relative positioning and flow

If you give an item relative positioning with `position: relative`, it remains in flow. However, you are then able to use the offset values to push it around. The space that it would have been placed in normal flow is reserved however, as you can see in the example below.

```html live-sample___relative
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
  <p class="relative">
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___relative
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}
p {
  border: 2px solid green;
}

.relative {
  position: relative;
  background-color: green;
  color: #fff;
  bottom: 50px;
  left: 50px;
  width: 400px;
}
```

{{EmbedLiveSample("relative", "", "360px")}}

When you do anything to remove or shift an item from where it would be placed in normal flow, you can expect to need to do some managing of the content and the content around it to prevent overlaps. Whether that involves clearing floats, or ensuring that an element with `position: absolute` does not sit on top of some other content. For this reason methods which remove elements from being in-flow should be used with understanding of the effect that they have.

## Summary

In this guide, we have explained how to take an element out of flow to achieve some very specific types of positioning. In the next guide we will look at a related issue, that of creating a [Block Formatting Context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context), in [Introduction to formatting contexts](/en-US/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts).

## See also

- [Learn: Positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)
