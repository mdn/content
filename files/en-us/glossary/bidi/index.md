---
title: BiDi
slug: Glossary/BiDi
page-type: glossary-definition
---

{{GlossarySidebar}}

**BiDi** (BiDirectional) describes a document that contains both right-to-left (RTL) and left-to-right (LTR) text.

User Interfaces should display BiDi content correctly, but many fail. An example is the Hebrew translation of the name Sarah: שרה, spelled (from right-to-left) sin (ש), resh (ר), heh (ה). Many programs would display the letters in the opposite order.

It is possible to flip the left-to-right display order to a right-to-left display order, but doing this sacrifices the ability to display BiDi scripts correctly — at least one is always incorrectly displayed. With bidirectional script support, it is possible to mix characters from different scripts on the same page, regardless of writing direction.

The Unicode standard provides foundations for complete BiDi support, with detailed rules as to how mixtures of left-to-right and right-to-left scripts are to be encoded and displayed.

## See also

- Related glossary terms:
  - {{glossary("Unicode")}}
- [Bi-directional text](https://en.wikipedia.org/wiki/Bi-directional_text) on Wikipedia
- [UAX#9: Unicode Bi-directional Algorithm](https://www.unicode.org/reports/tr9)
