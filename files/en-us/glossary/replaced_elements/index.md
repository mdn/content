---
title: Replaced elements
slug: Glossary/Replaced_elements
page-type: glossary-definition
sidebar: glossarysidebar
---

In web development, **replaced elements** are HTML elements whose content are replaced by external resources or content defined outside of the document structure, and are not considered in the CSS rendering model. They are external objects whose representation is independent of the CSS formatting model.

The following can be replaced elements:

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

The following are treated as replaced elements only in specific cases:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}} (`image` input types only)

Replaced elements often have an {{glossary("intrinsic size", "intrinsic dimensions")}} and {{glossary("aspect ratio", "intrinsic ratio")}}. For example, the content of an `<img>` element is generally replaced by the image defined by its `src` attribute. That image has an intrinsic width and an intrinsic height specified in absolute units, which determines the aspect ratio.

Form controls are generally non-replaced _widgets_, except for `<input type="image">`, which is replaced with an image. Objects inserted using the CSS {{cssxref("content")}} property are _anonymous replaced elements_. They are "anonymous" because they don't exist in the HTML markup.

## See also

- {{glossary("void element", "Void elements")}}
- {{glossary("Inline-level content")}}
- [Replaced elements in CSS display specification](https://drafts.csswg.org/css-display/#replaced-element)
- [Replaced elements in HTML specification](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)s
