---
title: Layout and the containing block
slug: Web/CSS/CSS_display/Containing_block
page-type: guide
---

{{CSSRef}}

The size and position of an element are often impacted by its **containing block**. Most often, the containing block is the [content area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) of an element's nearest [block-level](/en-US/docs/Glossary/Block-level_content) ancestor, but this is not always the case. In this article, we examine the factors that determine an element's containing block.

When a user agent (such as your browser) lays out a document, it generates a box for every element. Each box is divided into four areas:

1. Content area
2. Padding area
3. Border area
4. Margin area

![Diagram of the box model](box-model.png)

Many developers believe that the containing block of an element is always the content area of its parent, but that isn't necessarily true. Let's investigate the factors that determine what an element's containing block is.

## Effects of the containing block

Before learning what determines the containing block of an element, it's useful to know why it matters in the first place.

The size and position of an element are often impacted by its containing block. Percentage values that are applied to the {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, and offset properties of an absolutely positioned element (i.e., which has its {{cssxref("position")}} set to `absolute` or `fixed`) are computed from the element's containing block.

## Identifying the containing block

The process for identifying the containing block depends entirely on the value of the element's {{cssxref("position")}} property:

1. If the `position` property is **`static`**, **`relative`**, or **`sticky`**, the containing block is formed by the edge of the _content box_ of the nearest ancestor element that is either **a block container** (such as an inline-block, block, or list-item element) or **establishes a formatting context** (such as a table container, flex container, grid container, or the block container itself).
2. If the `position` property is **`absolute`**, the containing block is formed by the edge of the _padding box_ of the nearest ancestor element that has a `position` value other than `static` (`fixed`, `absolute`, `relative`, or `sticky`).
3. If the `position` property is **`fixed`**, the containing block is established by the {{glossary("viewport")}} (in the case of continuous media) or the page area (in the case of paged media).
4. If the `position` property is **`absolute`** or **`fixed`**, the containing block may also be formed by the edge of the _padding box_ of the nearest ancestor element that has any of the following:

   - A {{cssxref("filter")}}, {{cssxref("backdrop-filter")}}, {{cssxref("transform")}}, or {{cssxref("perspective")}} value other than `none`.
   - A {{cssxref("contain")}} value of `layout`, `paint`, `strict` or `content` (e.g. `contain: paint;`).
   - A {{cssxref("container-type")}} value other than `normal`.
   - A {{cssxref("will-change")}} value containing a property for which a non-initial value would form a containing block (e.g. `filter` or `transform`).
   - A {{cssxref("content-visibility")}} value of `auto`.

> [!NOTE]
> The containing block in which the root element ({{HTMLElement("html")}}) resides is a rectangle called the **initial containing block**. It has the dimensions of the viewport (for continuous media) or the page area (for paged media).

> [!NOTE]
> There are browser inconsistencies with `perspective` and `filter` contributing to containing block formation.

## Calculating percentage values from the containing block

As noted above, when certain properties are given a percentage value, the computed value depends on the element's containing block. The properties that work this way are **box model properties** and **offset properties**:

1. The {{cssxref("height")}}, {{cssxref("top")}}, and {{cssxref("bottom")}} properties compute percentage values from the `height` of the containing block.
2. The {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, and {{cssxref("margin")}} properties compute percentage values from the `width` of the containing block.

> [!NOTE]
> A **block container** (such as an inline-block, block, or list-item element) either contains only inline-level boxes participating in an inline formatting context, or only block-level boxes participating in a block formatting context. An element is a block container only if it contains block-level or inline-level boxes.

## Some examples

The HTML code for all our examples is:

```html
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

Only the CSS is altered in each instance below.

### Example 1

In this example, the paragraph is statically positioned, so its containing block is {{HTMLElement("section")}} because it's the nearest ancestor that is a block container (because of `display: block`).

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  margin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_1','100%','300')}}

### Example 2

In this example, the paragraph's containing block is the {{HTMLElement("body")}} element, because `<section>` is not a block container (because of `display: inline`) and doesn't establish a formatting context.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%; /* == half the body's width */
  height: 200px; /* Note: a percentage would be 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Example_2','100%','300')}}

### Example 3

In this example, the paragraph's containing block is `<section>` because the latter's `position` is `absolute`. The paragraph's percentage values are affected by the `padding` of its containing block, though if the containing block's {{cssxref("box-sizing")}} value were `border-box` this would not be the case.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_3','100%','300')}}

### Example 4

In this example, the paragraph's `position` is `fixed`, so its containing block is the initial containing block (on screens, the viewport). Thus, the paragraph's dimensions change based on the size of the browser window.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%; /* == (50vw - (width of vertical scrollbar)) */
  height: 50%; /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%; /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%; /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
```

{{EmbedLiveSample('Example_4','100%','300')}}

### Example 5

In this example, the paragraph's `position` is `absolute`, so its containing block is `<section>`, which is the nearest ancestor with a {{cssxref("transform")}} property that isn't `none`.

```html hidden
<body>
  <section>
    <p>This is a paragraph!</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  height: 25%; /* == 40px */
  margin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_5','100%','300')}}

## See also

- {{cssxref("all")}} property
- {{cssxref("contain")}} property
- {{cssxref("aspect-ratio")}} property
- {{cssxref("box-sizing")}} property
- {{cssxref("min-content")}} and {{cssxref("max-content")}} size values
- [Learn: sizing items in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
- [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
- [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
- [Block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/en-US/docs/Web/CSS/CSS_cascade/initial_value), [computed](/en-US/docs/Web/CSS/CSS_cascade/computed_value), [used](/en-US/docs/Web/CSS/CSS_cascade/used_value), and [actual](/en-US/docs/Web/CSS/CSS_cascade/actual_value) values
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
- {{glossary("Intrinsic size")}}
