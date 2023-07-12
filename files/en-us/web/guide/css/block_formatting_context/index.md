---
title: Block formatting context
slug: Web/Guide/CSS/Block_formatting_context
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
- {{ cssxref("display") }}`: flow-root`.
- Elements with {{ cssxref("contain") }}`: layout`, `content`, or `paint`.
- Flex items (direct children of the element with {{ cssxref("display") }}`: flex` or `inline-flex`) if they are neither [flex](/en-US/docs/Glossary/Flex_Container) nor [grid](/en-US/docs/Glossary/Grid_Container) nor [table](/en-US/docs/Web/CSS/CSS_Table) containers themselves.
- Grid items (direct children of the element with {{ cssxref("display") }}`: grid` or `inline-grid`) if they are neither [flex](/en-US/docs/Glossary/Flex_Container) nor [grid](/en-US/docs/Glossary/Grid_Container) nor [table](/en-US/docs/Web/CSS/CSS_Table) containers themselves.
- Multicol containers (elements where {{ cssxref("column-count") }} or {{ cssxref("column-width") }} isn't `auto`, including elements with `column-count: 1`).
- {{ cssxref("column-span") }}`: all` should always create a new formatting context, even when the `column-span: all` element isn't contained by a multicol container ([Spec change](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51), [Chrome bug](https://crbug.com/709362)).

Formatting contexts affect layout, but typically, we create a new block formatting context for the positioning and clearing floats rather than changing the layout, because an element that establishes a new block formatting context will:

- contain internal floats.
- exclude external floats.
- suppress [margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

> **Note:** A Flex/Grid container({{ cssxref("display") }}: flex/grid/inline-flex/inline-grid) establishes a new Flex/Grid formatting context, which is similar to block formatting context except layout. There's no floating children available inside a flex/grid container, but exclude external floats and suppress margin collapsing still works.

## Examples

### Contain internal floats

Make float content and alongside content the same height.

Let's have a look at a couple of these in order to see the effect creating a new BFC.

In the following example, we have a floated element inside a `<div>` with a `border` applied. The content of that `<div>` has floated alongside the floated element. As the content of the float is taller than the content alongside it, the border of the `<div>` now runs through the float. As explained in the [guide to in-flow and out of flow elements](/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow), the float has been taken out of flow so the `background` and `border` of the `<div>` only contain the content and not the float.

**using `overflow: auto`**

Setting `overflow: auto` or set other values than the initial value of `overflow: visible` created a new BFC containing the float. Our `<div>` now becomes a mini-layout inside our layout. Any child element will be contained inside it.

The problem with using `overflow` to create a new BFC is that the `overflow` property is meant for telling the browser how you want to deal with overflowing content. There are some occasions in which you will find you get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC. In addition, it is potentially not readable for a future developer, as it might not be obvious why you used `overflow` for this purpose. If you use `overflow`, it is a good idea to comment the code to explain.

**using `display: flow-root`**

A newer value of `display` lets us create a new BFC without any other potentially problematic side-effects. Using `display: flow-root` on the containing block creates a new BFC .

With `display: flow-root;` on the `<div>`, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.

The value name of `flow-root` makes sense when you understand you are creating something that acts like the `root` element (`<html>` element in browser) in terms of how it creates a new context for the flow layout inside it.

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
  background-color: rgb(224, 206, 247);
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
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Contain_internal_floats", 200, 480)}}

### Exclude external floats

In the following example, we are using `display:flow-root` and floats to implement double columns layout. We are able to do this because an element in the normal flow that establishes a new BFC does not overlap the margin box of any floats in the same block formatting context as the element itself.

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
  background-color: rgb(224, 206, 247);
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
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Exclude_external_floats", 200, 330)}}

Rather than inline-blocks with width:\<percentage>, in this case we don't have to specify the width of the right div.

Note that flexbox is a more efficient way to implement multi-column layout in modern CSS.

### Prevent margin collapsing

You can create a new BFC to avoid [margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) between two neighbor elements.

#### Margin collapsing example

In this example we have two adjacent {{HTMLElement("div")}} elements, which each have a vertical margin of `10px`. Because of margin collapsing, the vertical gap between them is 10 pixels, not the 20 we might expect.

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

In this example we wrap the second `<div>` in an outer one, to create a new BFC and prevent margin collapsing.

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

- {{ cssxref("float") }}, {{ cssxref("clear") }}
- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/At-rule)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
