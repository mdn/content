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

Double colons (`::`) are used for pseudo-elements. This distinguishes pseudo-elements from [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) that use a single colon (`:`) in their notation. Note, browsers support single colon syntax for the original four pseudo-elements: `::before`, `::after`, `::first-line`, and `::first-letter`.

Pseudo-elements do not exist independently. The element of which a pseudo-element is a part is called its _originating element_. A pseudo-element must appear after all the other components in the [complex](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) or [compound](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) selector. The last element in the selector is the originating element of the pseudo-element. For example, you can select a paragraph's first line using `p::first-line` but not the first-line's children. So `p::first-line > *` is invalid.

A pseudo-element can be selected based on the current state of the originating element. For example, `p:hover::first-line` selects the first line (pseudo-element) of a paragraph when the paragraph itself is being hovered (pseudo-class).

> [!NOTE]
> When a [selector list](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) contains an invalid selector, the entire style block is ignored.

## Typographic pseudo-elements

- {{CSSxRef("::first-line")}}
  - : The first line-box of the originating element.
- {{CSSxRef("::first-letter")}}
  - : The first letter, number, or symbol character on the first line of its originating element.
- {{CSSxRef("::cue")}}
  - : The [WebVTT](/en-US/docs/Web/API/WebVTT_API) cues within a selected element.
    This can be used to [style captions and other cues](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in media with VTT tracks.
    The [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module also defines the `::postfix` and `::prefix` sub-pseudo elements. These are not yet supported by any browser.

## Highlight pseudo-elements

Selects document sections based on content and document status, enabling those areas to be styled differently to indicate that status to the user.

- {{CSSxRef("::selection")}}
  - : The portion of a document that has been selected.
- {{CSSxRef("::target-text")}}
  - : The document's target element. The target element is identified using the URL's fragment identifier.
- {{CSSxRef("::spelling-error")}}
  - : A portion of text that the browser thinks is misspelled.
- {{CSSxRef("::grammar-error")}}
  - : A portion of text that the browser thinks is grammatically incorrect.
- {{CSSxRef("::highlight()")}}
  - : The elements in the [highlight registry](/en-US/docs/Web/API/CSS/highlights_static). It is used to create custom highlights.

## Tree-Abiding pseudo-elements

These pseudo-elements behave like regular elements, fitting seamlessly within the box model. They act as a child element that can be styled directly within the originating element hierarchy.

- {{CSSxRef("::before")}}
  - : Creates a pseudo-element that is the first child of the selected element.
- {{CSSxRef("::after")}}
  - : Creates a pseudo-element that is the last child of the selected element.
- {{CSSxRef("::marker")}}
  - : The automatically generated marker box of a list item.
- {{CSSxRef("::placeholder")}}
  - : The placeholder text in an input field.
- {{CSSxRef("::backdrop")}}
  - : The backdrop of the originating element rendered in the [top layer](/en-US/docs/Glossary/Top_layer).

## Element-backed pseudo-elements

These pseudo-elements are real elements that are not otherwise selectable.

- {{CSSxRef("::details-content")}}
  - : The expandable/collapsible contents of a {{HTMLElement("details")}} element.
- {{CSSxRef("::file-selector-button")}}
  - : The button of an {{HTMLElement("input") }} of [`type="file"`](/en-US/docs/Web/HTML/Element/input/file).
- {{CSSxRef("::part", "::part()")}}
  - : Any element within a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) that has a matching [`part`](/en-US/docs/Web/HTML/Global_attributes/part) attribute.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Any element placed into a slot inside an HTML template.

## Alphabetical index

Pseudo-elements defined by a set of CSS specifications include the following:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::cue")}} (and {{CSSxRef("::cue", "::cue()")}})

D

- {{CSSxRef("::details-content")}}

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

- {{CSSxRef("::target-text")}}

V

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-element](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
