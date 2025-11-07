---
title: CSS ruby layout
slug: Web/CSS/Guides/Ruby_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-ruby/
sidebar: cssref
---

The **CSS ruby layout** module provides the rendering model and formatting controls related to the display of ruby annotations. Ruby annotations are a form of interlinear annotation, consisting of short runs of text alongside the base text. They are typically used in East Asian documents to indicate pronunciation or define meaning.

## Reference

### Properties

- {{cssxref("ruby-align")}}
- {{cssxref("ruby-position")}}

The CSS ruby layout module also introduces the `ruby-merge` and `ruby-overhang` properties. Currently, no browsers support these features.

### Display values

The CSS ruby layout module adds the following values to the {{cssxref("display")}} property:

- `ruby`
- `ruby-base`
- `ruby-text`
- `ruby-base-container`
- `ruby-text-container`

### Glossary terms

- {{Glossary("Ruby")}}

## Related concepts

- [CSS display](/en-US/docs/Web/CSS/Guides/Display) module
  - {{cssxref("display")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
- [CSS text decoration](/en-US/docs/Web/CSS/Guides/Text_decoration) module
  - {{cssxref("text-emphasis-color")}}
  - {{cssxref("text-emphasis-position")}}
  - {{cssxref("text-emphasis-style")}}
  - {{cssxref("text-emphasis")}} shorthand
- [HTML elements](/en-US/docs/Web/HTML/Reference/Elements)
  - {{HTMLElement("rb")}}
  - {{HTMLElement("rp")}}
  - {{HTMLElement("rt")}}
  - {{HTMLElement("rtc")}}
  - {{HTMLElement("ruby")}}

## Specifications

{{Specifications}}

## See also

- {{cssxref("direction")}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref(":lang()")}}
- HTML [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute
