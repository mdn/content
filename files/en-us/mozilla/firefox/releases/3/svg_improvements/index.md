---
title: SVG improvements in Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
page-type: guide
sidebar: firefox
---

Firefox 3 offers improved [Scalable Vector Graphics](/en-US/docs/Web/SVG) (SVG) support over prior versions of Firefox. While these features are documented elsewhere, this article serves as a convenient list so you can easily determine which features were added in Firefox 3.

- The [`foreignObject`](/en-US/docs/Web/SVG/Reference/Element/foreignObject) element is now supported ([Firefox bug 326966](https://bugzil.la/326966)).
- [`pattern`](/en-US/docs/Web/SVG/Reference/Element/pattern) element is now supported.
- [`mask`](/en-US/docs/Web/SVG/Reference/Element/mask) element is now supported.
- Support for all SVG 1.1 [filters](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects) has been added:
  - `filter`
  - `feDistantLight`
  - `fePointLight`
  - `feSpotLight`
  - `feBlend`
  - `feColorMatrix`
  - `feConvolveMatrix`
  - `feComponentTransfer`, `feFuncR`, `feFuncG`, `feFuncB`, `feFuncA`
  - `feComposite`
  - `feConvolveMatrix`
  - `feDiffuseLighting`
  - `feDisplacementMap`
  - `feDistantLight`
  - `feFlood`
  - `feGaussianBlur`
  - `feImage`
  - `feMerge`, `feMergeNode`
  - `feMorphology`
  - `feOffset`
  - `fePointLight`
  - `feSpecularLighting`
  - `feTurbulence`
  - `feTile`

- `<a>` element handling in SVG has had several bugs fixed; see [Firefox bug 267664](https://bugzil.la/267664), [WebKit bug 268135](https://bugzil.la/268135), [WebKit bug 316248](https://bugzil.la/316248), [WebKit bug 317270](https://bugzil.la/317270) and [WebKit bug 320724](https://bugzil.la/320724).
- The SVG DOM methods `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()`, and `getCharNumAtPosition()` have been implemented.
- The [`xml:space`](/en-US/docs/Web/SVG/Reference/Attribute/xml:space) attribute is now supported.
- Fallback `fill`/`stroke` are now supported.
- `em` and `ex` units are now supported for indicating lengths ([Firefox bug 305859](https://bugzil.la/305859)).

## See also

- [SVG](/en-US/docs/Web/SVG)
- [Firefox 3 for developers](/en-US/docs/Mozilla/Firefox/Releases/3)
