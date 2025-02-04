---
title: Leading
slug: Glossary/Leading
page-type: glossary-definition
---

{{GlossarySidebar}}

In typography, **leading** is an amount of space included above and below text to provide spacing between lines. Historically, in physical typesetting, pieces of actual [lead](https://en.wikipedia.org/wiki/Lead) were used to implement this spacing, which is where the name comes from.

In CSS, typographic leading is the difference between the content height and the line-height, generally set by the {{cssxref("line-height")}} property. Leading set via `line-height` provides spacing between lines, which can be negative. The space is distributed equally above and below the text, which is refered to as **half-leading**.

The height of text-only content is relative to the height of the font. In digital font files, the height contains all characters, including capital letters, ascenders, descenders, etc. Different fonts have different base line-heights, meaning that lines of text with the same `font-size` will produce line boxes of differing heights, affecting the appearance of spacing between lines. This can be controlled with the {{cssxref("text-box")}} properties, which enable trimming off extra spacing above and below text.

The space at the block-start and block-end edge of a line is referred to as over and under leading, respectively.

The area of a font above the cap baseline is referred to as the _over edge_. The area below the {{glossary("/Baseline/Typography", "alphabetic baseline")}} is referred to as the _under edge_.

## See also

- {{cssxref("line-height")}}
- {{cssxref("text-box")}}
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
- [Leading](https://en.wikipedia.org/wiki/Leading) on Wikipedia
- [The Thing With Lead­ing in CSS](https://matthiasott.com/notes/the-thing-with-leading-in-css) on matthiasott.com (2022)
