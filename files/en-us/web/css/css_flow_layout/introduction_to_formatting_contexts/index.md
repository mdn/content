---
title: Introduction to formatting contexts
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
page-type: guide
---

{{CSSRef}}

This article introduces the concept of formatting contexts, of which there are several types, including block formatting contexts, inline formatting contexts, and flex formatting contexts. The basics of how they behave and how you can make use of these behaviors are also introduced.

Everything on a page is part of a **formatting context**, or an area which has been defined to lay out content in a particular way. A **block formatting context** (BFC) will lay child elements out according to block layout rules, a **flex formatting context** will lay its children out as {{Glossary("flex item", "flex items")}}, etc. Each formatting context has specific rules about how layout behaves when in that context.

## Block formatting contexts

The outermost element in a document that uses block layout rules establishes the first, or **initial block formatting context**. This means that every element inside the `<html>` element's block is laid out according to normal flow following the rules for block and inline layout. Elements participating in a BFC use the rules outlined by the CSS Box Model, which defines how an element's margins, borders, and padding interact with other blocks in the same context.

### Creating a new block formatting context

The {{HTMLElement("html")}} element is not the only element capable of creating a block formatting context. Any block-level element can be made to create a BFC by the application of certain CSS properties.

A new BFC is created in the following situations:

- elements made to float using {{cssxref("float")}}
- [absolutely positioned](/en-US/docs/Web/CSS/position#types_of_positioning) elements
- elements with {{cssxref("display", "display: inline-block", "#inline-block")}}
- table cells or elements with `display: table-cell`, including anonymous table cells created when using the `display: table-*` properties
- table captions or elements with `display: table-caption`
- block elements where `overflow` has a value other than `visible`
- elements with `display: flow-root` or `display: flow-root list-item`
- elements with {{cssxref("contain", "contain: layout", "#layout")}}, `content`, or `strict`
- {{Glossary("flex item", "flex items")}}
- grid items
- [multicol containers](/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
- elements with {{cssxref("column-span")}} set to `all`

This is useful because a new BFC will behave much like the outermost document in that it becomes a mini-layout inside the main layout. A BFC contains everything inside it, {{cssxref("float")}} and {{cssxref("clear")}} only apply to items inside the same formatting context, and margins only collapse between elements in the same formatting context.

### BFC creation examples

Let's have a look at a couple of these in order to see the effect creating a new BFC.

In the example below, we have a floated element inside a `<div>` with a border applied. The content of that `<div>` has floated alongside the floated element. As the content of the float is taller than the content alongside it, the border of the `<div>` now runs through the float. As explained in the [guide to in-flow and out of flow elements](/en-US/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow), the float has been taken out of flow so the background and border of the div only contain the content and not the float.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

Creating a new BFC would contain the float. A typical way to do this in the past has been to set `overflow: auto` or set other values than the initial value of `overflow: visible`.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}

Setting `overflow: auto` created a new BFC containing the float. Our `<div>` now becomes a mini-layout inside our layout. Any child element will be contained inside it.

The problem with using `overflow` to create a new BFC is that the `overflow` property is meant for telling the browser how you wish to deal with overflowing content. There are some occasions in which you will find you get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC. In addition, it is potentially not very readable for a future developer, as it may not be obvious why you used `overflow` for this purpose. If you do this, it would be a good idea to comment the code to explain.

### Explicitly creating a BFC using display: flow-root

Using `display: flow-root` (or `display: flow-root list-item`) on the containing block will create a new BFC without any other potentially problematic side-effects.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

With `display: flow-root` on the {{HTMLElement("div")}}, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.

The name of the `flow-root` keyword refers to the fact that you're creating something that serves, in essence, like a new root element (like {{HTMLElement("html")}} does), given how the new context is created and its flow layout functions.

## Inline formatting contexts

Inline formatting contexts exist inside other formatting contexts and can be thought of as the context of a paragraph. The paragraph creates an inline formatting context inside which such things as {{HTMLElement("strong")}}, {{HTMLElement("a")}}, or {{HTMLElement("span")}} elements are used on text.

The box model does not fully apply to items participating in an inline formatting context. In a horizontal writing mode line, horizontal padding, borders and margin will be applied to the element and push the text away left and right. However, margins above and below the element will not be applied. Vertical padding and borders will be applied but may overlap content above and below as, in the inline formatting context, the line boxes will not be pushed apart by padding and borders.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## Other formatting contexts

This guide covers flow layout and is therefore not referring to other possible formatting contexts. As such, it is useful to understand that creating any kind of formatting context will change the way elements inside that formatting context behave. This behavior is always described in the specification and also here on MDN.

## Summary

In this guide, we have looked in more detail at the block and Inline formatting contexts and the important subject of creating a block formatting context (BFC). In the next guide, we will find out [how normal flow interacts with different writing modes](/en-US/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes).

## See also

- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- [Visual Formatting Model](/en-US/docs/Web/CSS/Visual_formatting_model)
- [CSS Box Model](/en-US/docs/Web/CSS/CSS_box_model)
