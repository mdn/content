---
title: Block formatting context
slug: Web/CSS/CSS_display/Block_formatting_context
page-type: guide
spec-urls: https://drafts.csswg.org/css-display/#block-formatting-context
---

{{CSSRef}}

A **block formatting context** (BFC) is a part of a visual CSS rendering of a web page. It's the region in which the layout of block boxes occurs and in which floats interact with other elements.

A block formatting context is created by at least one of the following:

- The root element of the document (`<html>`).
- Floats (elements where {{ cssxref("float") }} isn't `none`).
- Absolutely positioned elements (elements where {{ cssxref("position") }} is `absolute` or `fixed`).
- Inline-blocks (elements with {{ cssxref("display") }}`: inline-block`).
- Table cells (elements with {{ cssxref("display") }}`: table-cell`, which is the default for HTML table cells).
- Table captions (elements with {{ cssxref("display") }}`: table-caption`, which is the default for HTML table captions).
- Anonymous table cells implicitly created by the elements with {{ cssxref("display") }}`: table`, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (which is the default for HTML tables, table rows, table bodies, table headers, and table footers, respectively), or `inline-table`.
- Block elements where {{ cssxref("overflow") }} has a value other than `visible` and `clip`.
- Elements with {{ cssxref("display") }}`: flow-root`.
- {{htmlelement("button")}} elements and button {{htmlelement("input")}} types defaulting to `display: flow-root`.
- Elements with {{ cssxref("contain") }}`: layout`, `content`, or `paint`.
- Flex items (direct children of the element with {{ cssxref("display") }}`: flex` or `inline-flex`) if they are neither [flex](/en-US/docs/Glossary/Flex_Container) nor [grid](/en-US/docs/Glossary/Grid_Container) nor [table](/en-US/docs/Web/CSS/CSS_table) containers themselves.
- Grid items (direct children of the element with {{ cssxref("display") }}`: grid` or `inline-grid`) if they are neither [flex](/en-US/docs/Glossary/Flex_Container) nor [grid](/en-US/docs/Glossary/Grid_Container) nor [table](/en-US/docs/Web/CSS/CSS_table) containers themselves.
- Multicol containers (elements where {{ cssxref("column-count") }} or {{ cssxref("column-width") }} isn't `auto`, including elements with `column-count: 1`).
- {{ cssxref("column-span") }}`: all`, even when the `column-span: all` element isn't contained by a multicol container.

Formatting contexts affect layout because an element that establishes a new block formatting context will:

- contain internal floats.
- exclude external floats.
- suppress [margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).

Flex and grid containers, defined by setting an element's ({{ cssxref("display") }} to `flex`, `grid`, `inline-flex`, or `inline-grid`, establishes a new flex or grid formatting context. These are similar to block formatting context except there are no floating children available inside a flex or grid container, but these formatting contexts do exclude external floats and suppress margin collapsing.

## Examples

Let's have a look at a couple of these in order to see the effect creating a new BFC.

### Contain internal floats

In the following example, we have float content that is the same height as the content alongside it. We have a floated element inside a `<div>` with a `border` applied. The content of that `<div>` has floated alongside the floated element. As the content of the float is taller than the content alongside it, the border of the `<div>` now runs through the float. As explained in the [guide to in-flow and out of flow elements](/en-US/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow), the float has been taken out of flow so the `background` and `border` of the `<div>` only contain the content and not the float.

**using `overflow: auto`**

Setting `overflow: auto` or set other values than the initial value of `overflow: visible` created a new BFC containing the float. Our `<div>` now becomes a mini-layout inside our layout. Any child element will be contained inside it.

The problem with using `overflow` to create a new BFC is that the `overflow` property is meant for telling the browser how you want to deal with overflowing content. There are some occasions in which you will find you get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC. In addition, it is potentially not readable for a future developer, as it might not be obvious why you used `overflow` for this purpose. If you use `overflow`, it is a good idea to comment the code to explain.

**using `display: flow-root`**

The `display: flow-root` value lets us create a new BFC without any other potentially problematic side-effects. Using `display: flow-root` on the containing block creates a new BFC .

With `display: flow-root;` on the `<div>`, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.

The value name of `flow-root` makes sense when you understand you are creating something that acts like the `root` element (`<html>` element in browser) in terms of how it creates a new context for the flow layout inside it.

This is the default rendering for {{htmlelement("button")}} elements and button {{htmlelement("input")}} types meaning button's create a new BFC as long as their `display` value isn't set to a value that doesn't automatically create a new BFC.

#### HTML

```html
<section>
  <div class="box">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the container.</p>
  </div>
</section>
<section>
  <div class="box" style="overflow:auto">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>overflow:auto</code> container.</p>
  </div>
</section>
<section>
  <div class="box" style="display:flow-root">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>display:flow-root</code> container.</p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Contain_internal_floats", 200, 480)}}

### Exclude external floats

In the following example, we are using `display:flow-root` and floats, creating two side-by-side boxes demonstrating that an element in the normal flow establishes a new BFC and does not overlap the margin box of any floats in the same block formatting context as the element itself.

#### HTML

```html
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box"><p>Normal</p></div>
</section>
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box" style="display:flow-root">
    <p><code>display:flow-root</code></p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  overflow: hidden; /* required by resize:both */
  resize: both;
  margin-right: 25px;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 75%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Exclude_external_floats", 200, 330)}}

### Prevent margin collapsing

You can create a new BFC to avoid [margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) between two neighbor elements.

#### Margin collapsing example

In this example we have two adjacent {{HTMLElement("div")}} elements, which each have a vertical margin of `10px`. Because of margin collapsing, the vertical gap between them is `10px`, not the `20px` we might expect.

```html
<div class="blue"></div>
<div class="red"></div>
```

```css
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}
```

{{EmbedLiveSample("Margin collapsing example", 120, 170)}}

#### Preventing margin collapsing

In this example, we wrap the second `<div>` in an outer `<div>`, and create a new BFC by using `overflow: hidden` on the outer `<div>`. This new BFC prevents the margins of the nested `<div>` from collapsing with those of the outer `<div>`.

```html
<div class="blue"></div>
<div class="outer">
  <div class="red"></div>
</div>
```

```css
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.outer {
  overflow: hidden;
  background: transparent;
}
```

{{EmbedLiveSample("Preventing margin collapsing", 120, 170)}}

## Specifications

{{Specifications}}

## See also

- [CSS syntax](/en-US/docs/Web/CSS/Syntax)
- [Specificity](/en-US/docs/Web/CSS/Specificity)
- [Inheritance](/en-US/docs/Web/CSS/Inheritance)
- [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
- [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
- [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/en-US/docs/Web/CSS/initial_value), [computed](/en-US/docs/Web/CSS/computed_value), [used values](/en-US/docs/Web/CSS/used_value), and [actual](/en-US/docs/Web/CSS/actual_value) values
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
