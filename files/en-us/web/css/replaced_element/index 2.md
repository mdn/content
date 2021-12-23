---
title: Replaced elements
slug: Web/CSS/Replaced_element
tags:
  - CSS
  - Guide
  - Layout
  - Reference
  - css layout
  - rendering
  - replaced element
---
{{CSSRef}}

In [CSS](/en-US/docs/Web/CSS), a **replaced element** is an element whose representation is outside the scope of CSS; they're external objects whose representation is independent of the CSS formatting model.

Put in simpler terms, they're elements whose contents are not affected by the current document's styles. The position of the replaced element can be affected using CSS, but not the contents of the replaced element itself. Some replaced elements, such as {{HTMLElement("iframe")}} elements, may have stylesheets of their own, but they don't inherit the styles of the parent document.

The only other impact CSS can have on a replaced element is that there are properties which support controlling the positioning of the element's content within its box. See {{anch("Controlling object position within the content box")}} for further information.

## Replaced elements

Typical replaced elements are:

- {{HTMLElement("iframe")}}
- {{HTMLElement("video")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("img")}}

Some elements are treated as replaced elements only in specific cases:

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("applet")}}

HTML spec also says that an {{HTMLElement("input")}} element can be replaced, because {{HTMLElement("input")}} elements of the `"image"` type are replaced elements similar to {{HTMLElement("img")}}. However, other form controls, including other types of {{HTMLElement("input")}} elements, are explicitly listed as non-replaced elements (the spec describes their default platform-specific rendering with the term "Widgets").

Objects inserted using the CSS {{cssxref("content")}} property are _anonymous replaced elements_. They are "anonymous" because they don't exist in the HTML markup.

## Using CSS with replaced elements

CSS handles replaced elements specifically in some cases, like when calculating margins and some `auto` values.

Note that some replaced elements, but not all, have intrinsic dimensions or a defined baseline, which is used by some CSS properties, such as {{cssxref("vertical-align")}}. Only replaced elements can ever have intrinsic dimensions.

### Controlling object position within the content box

Certain CSS properties can be used to specify how the object contained within the replaced element should be positioned within the element's box area. These are defined by the {{SpecName("CSS3 Images")}} and {{SpecName("CSS4 Images")}} specifications:

- {{cssxref("object-fit")}}
  - : Specifies how the replaced element's content object should be fitted to the containing element's box.
- {{cssxref("object-position")}}
  - : Specifies the alignment of the replaced element's content object within the element's box.

## See also

- [HTML Spec](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{CSS_key_concepts()}}
