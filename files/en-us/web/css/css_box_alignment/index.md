---
title: CSS box alignment
slug: Web/CSS/CSS_box_alignment
page-type: css-module
spec-urls: https://drafts.csswg.org/css-align/
---

{{CSSRef}}

The **CSS box alignment** module specifies CSS features relating to the alignment of boxes within their containers. It defines the alignment of the various CSS box layout models including block layout, table layout, flexible box layout (flexbox), and grid layout, creating a consistent alignment method across all of CSS.

The module details alignment terminology, enabling alignment properties to be used in multiple layout modules, rather than limited to a particular layout method.

Alignment is linked to writing modes in that when we align an item we do not consider whether we are aligning it to the physical dimensions of top, right, bottom, and left. Instead, we describe alignment in terms of the start and end of the particular dimension we are working with. This ensures that alignment works in the same way whichever writing mode the document has.

The alignment of text and inline-level content is defined in [CSS text module](/en-US/docs/Web/CSS/CSS_text) and [CSS inline module](/en-US/docs/Web/CSS/CSS_inline_layout), respectively.

## Reference

### CSS Properties

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}

### Data types

- {{cssxref("baseline-position")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("overflow-position")}}
- {{cssxref("self-position")}}

### Terms and definitions

- {{Glossary("Alignment container")}}
- {{Glossary("Alignment subject")}}
- [Baseline alignment](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment#baseline_alignment)
- [Distributed alignment](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment#distributed_alignment)
- {{Glossary("Fallback alignment")}}
- [Positional alignment](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment#positional_alignment)

## Guides

- [Box alignment overview](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment)

  - : Overview of the general concepts found in the CSS box alignment module.

- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)

  - : How box alignment works in the context of flexbox.

- [Box alignment in CSS grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : How box alignment works in the context of grid layout.

- [Box alignment in multiple-column layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)

  - : How box alignment works in the context of multi-column layout.

- [Box alignment for block, absolutely positioned and table layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

  - : How box alignment works in the context of block layout, including floated, positioned, and table elements.

## Related concepts

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("scroll-snap-align")}}
- SVG {{SVGAttr("dominant-baseline")}} attribute
- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}

## Specifications

{{Specifications}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
