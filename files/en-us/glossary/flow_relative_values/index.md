---
title: Flow relative values
slug: Glossary/Flow_relative_values
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS, **flow relative values** are directional keyword values relative to an element's block and inline axes. These values include `block-start`, `block-end`, `inline-start`, `inline-end`, `start`, and `end`.

In CSS, {{glossary("physical properties")}} define positions based on physical directions and reference specific sides of an element.

CSS {{glossary("logical properties")}} on the other hand define styles based on the document's writing mode and direction rather than the physical dimensions of the viewport. Logical properties are relative to the content flow and use directional keywords relative to the block and inline axes.

## Block direction

The **block axis** refers to the axis that defines the stacking order of elements in a block layout. It's essentially the direction along which blocks of content — like paragraphs ({{htmlelement("p")}}), headings, and divs ({{htmlelement("div")}}) — are laid out on a webpage. This is also known as the **block direction**. In left-to-right and right-to-left languages, the block direction is the vertical direction of the content flow, going from top to bottom.

The **block-start** and **block-end** directions represent the _start edge_ and _end edge_ of content along the block axis, or the "from" and "to" directions, respectively, with `block-start` being the equivalent of `top` and `block-end` being the equivalent of `bottom` in horizontal writing modes.

## Inline direction

The **inline axis** is perpendicular to the block axis. The inline axis represents the direction along which inline content like text flows within a block. This is also known as the **inline direction**. In left-to-right writing modes, like English, the inline direction is horizontal, left-to-right. In right-to-left languages, like Arabic and Hebrew, the inline direction is horizontal, right-to-left.

**Inline-start** and **inline-end** represent the _start edge_ and _end edge_ of content along the inline axis, respectively, with the values and properties `inline-start` and `inline-end` being the equivalent of `left` and `right` properties and values in horizontal writing modes. Whether they are equivalent to `right` or `left` depends on the writing direction. For example, `inline-start` is equivalent to `left` in left-to-right languages and `right` in right-to-left languages.

## Start and end

A CSS property's effects can be either one-dimensional or two-dimensional. For example, {{cssxref("text-align")}} concerns the inline direction of text only, so is one-dimensional. When contextually constrained to one dimension, the flow-relative keywords are abbreviated to just `start` or `end`.

## See also

- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
