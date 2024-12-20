---
title: Pseudo-elements
slug: Web/CSS/Pseudo-elements
page-type: landing-page
spec-urls:
  - https://drafts.csswg.org/css-pseudo/
  - https://drafts.csswg.org/css-position-4/
  - https://drafts.csswg.org/css-shadow-parts/
  - https://w3c.github.io/webvtt/
---

{{CSSRef}}

A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s).

## Syntax

```css
selector::pseudo-element {
  property: value;
}
```

For example, {{CSSxRef("::first-line")}} can be used to change the font of the first line of a paragraph.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

Double colons (`::`) are used for pseudo-elements. This distinguishes pseudo-elements from [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) that use a single colon (`:`) in their notation.

Pseudo-elements do not exist independently. The element of which a pseudo-element is a part is called its _originating element_. A pseudo-element must appear after all the other components in the [complex](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) or [compound](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) selector. The last element in the selector is the originating element of the pseudo-element. For example, you can select a paragraph's first line using `p::first-line` but not the first-line's children. So `p::first-line > *` is invalid.

A pseudo-element can be selected based on the current state of the originating element. For example, `p:hover::first-line` selects the first line (pseudo-element) of a paragraph when the paragraph itself is being hovered (pseudo-class).

> [!NOTE]
> When a [selector list](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) contains an invalid selector, the entire style block is ignored.

## List of pseudo-elements

Pseudo-elements defined by a set of CSS specifications include the following:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::cue")}} (and {{CSSxRef("::cue", "::cue()")}})

F

- {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}

G

- {{CSSxRef("::grammar-error")}}

H

- {{CSSxRef("::highlight()")}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}}

T

- {{CSSxRef("::target-text")}} {{Experimental_Inline}}

V

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

> [!NOTE]
> Browsers support the single colon syntax only for the original four pseudo-elements: `::before`, `::after`, `::first-line`, and `::first-letter`.

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-element](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
