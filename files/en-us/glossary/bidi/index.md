---
title: BiDi
slug: Glossary/BiDi
page-type: glossary-definition
---

{{GlossarySidebar}}

**BiDi** (BiDirectional) denotes the characteristic a document has, signifying that both right-to-left (RTL) and left-to-right (LTR) text orientations occurred in one document.

User Interfaces should design to display BiDi content correctly, but many failed in this. An example is the RTL Hebrew name Sarah: שרה, spelled sin (ש) on the right, resh (ר) in the middle, and heh (ה) on the left, which, many programs would display the Hebrew word in the opposite order.

It is possible to simply flip the left-to-right display order to a right-to-left display order, but doing this sacrifices the ability to correctly display left-to-right scripts. With bidirectional script support, it is possible to mix characters from different scripts on the same page, regardless of writing direction.

The Unicode standard provides foundations for complete BiDi support, with detailed rules as to how mixtures of left-to-right and right-to-left scripts are to be encoded and displayed.

## See also

- {{glossary("Unicode")}}
- [Bi-directional text](https://en.wikipedia.org/wiki/Bi-directional_text) on Wikipedia
- [UAX#9: Unicode Bi-directional Algorithm](https://www.unicode.org/reports/tr9/#Resolving_Weak_Types)
