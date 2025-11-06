---
title: CSS writing modes
slug: Web/CSS/CSS_writing_modes
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-writing-modes/
  - https://drafts.csswg.org/css-writing-modes-3/
sidebar: cssref
---

The **CSS writing modes** module defines support for various international writing modes and their combinations, including left-to-right and right-to-left text ordering as well as horizontal and vertical orientations.

A _writing mode_ in CSS is determined by the {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}} properties defined in this module. It is defined primarily in terms of its inline base direction and block flow direction.

Some horizontal languages are left-to-right, including Latin and Indic scripts. Other horizontal languages are written right-to-left, including Hebrew and Arabic scripts. Sometimes text needs to be bidirectional, such as when mixing left-to-right and right-to-left scripts. Some languages can be written with a vertical orientation, for example, Chinese, Japanese, and Korean (CJK) scripts.

The CSS writing module addresses the orientations of all writing modes. Other modules, such as the [CSS ruby layout](/en-US/docs/Web/CSS) module, provide rendering models and formatting controls related to the display text annotations.

## Reference

### Properties

- {{cssxref("direction")}}
- {{cssxref("glyph-orientation-vertical")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("writing-mode")}}

### Glossary and terms

- {{glossary("/Baseline/Typography", "Baseline")}}
- {{Glossary("Internationalization")}}
- {{glossary("Localization")}}
- {{glossary("Leading")}}

## Guides

- [Creating vertical form controls](/en-US/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
  - : The article explains how to use the CSS {{cssxref("writing-mode")}} and {{cssxref("direction")}} properties to create and configure vertical form controls.
- [Introduction to writing mode systems](/en-US/docs/Web/CSS/CSS_writing_modes/Writing_mode_systems)
  - : A brief overview of writing mode systems and their directionalities.

## Related concepts

[CSS text](/en-US/docs/Web/CSS/CSS_text) module

- {{cssxref("hanging-punctuation")}}
- {{cssxref("hyphens")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("line-break")}}
- {{cssxref("overflow-wrap")}}
- {{cssxref("text-align")}}
- {{cssxref("text-align-last")}}
- {{cssxref("text-indent")}}
- {{cssxref("text-justify")}}
- {{cssxref("word-break")}}
- {{cssxref("word-spacing")}}

[CSS inline layout](/en-US/docs/Web/CSS/Guides/Inline_layout) module

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("line-height")}}
- {{cssxref("text-box-edge")}}
- {{cssxref("text-box-trim")}}
- {{cssxref("text-box")}} shorthand
- {{cssxref("text-edge")}}

[CSS logical properties and values](/en-US/docs/Web/CSS/Guides/Logical_properties_and_values) module

- {{glossary("Flow relative values")}}
- {{glossary("Inset properties")}}
- {{glossary("Logical properties")}}
- {{glossary("Physical properties")}}

[CSS display](/en-US/docs/Web/CSS/Guides/Display) module

- {{cssxref("display")}}

- {{CSSxRef("&lt;display-internal&gt;")}}
- [Visual formatting model](/en-US/docs/Web/CSS/Guides/Display/Visual_formatting_model)

[CSS generated content](/en-US/docs/Web/CSS/Guides/Generated_content)

- {{CSSxRef("quotes")}}

[SVG](/en-US/docs/Web/SVG)

- {{SVGAttr("glyph-orientation-horizontal")}} {{deprecated_inline}}
- {{SVGAttr("glyph-orientation-vertical")}} {{deprecated_inline}}
- {{SVGAttr("writing-mode")}}

[HTML](/en-US/docs/Web/HTML)

- {{htmlelement("bdo")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("q")}}
- {{htmlelement("ruby")}}
- {{htmlelement("sub")}}
- {{htmlelement("sup")}}
- [`dir`](/en-US/docs/Web/HTML/Reference/Global_attributes/dir) attribute
- [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute

[JavaScript](/en-US/docs/Web/JavaScript)

- [Internationalization guide](/en-US/docs/Web/JavaScript/Guide/Internationalization)
- [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) object

## Specifications

{{Specifications}}

## See also

- [CSS fonts](/en-US/docs/Web/CSS/Guides/Fonts) module
- [CSS ruby layout](/en-US/docs/Web/CSS/CSS_ruby_layout) module
- [CSS text decoration](/en-US/docs/Web/CSS/CSS_text_decoration) module
- [CSS counter styles](/en-US/docs/Web/CSS/Guides/Counter_styles) module
- [CSS lists](/en-US/docs/Web/CSS/Guides/Lists) module
- [CSS containment](/en-US/docs/Web/CSS/Guides/Containment) module: {{CSSxRef("contain-intrinsic-block-size")}} and {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module: {{CSSxRef("overflow-block")}} and {{CSSxRef("overflow-inline")}}
- [CSS overscroll behavior](/en-US/docs/Web/CSS/Guides/Overscroll_behavior) module: {{CSSxRef("overscroll-behavior-block")}} and {{CSSxRef("overscroll-behavior-inline")}}
