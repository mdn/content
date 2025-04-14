---
title: CSS pseudo-elements
slug: Web/CSS/CSS_pseudo-elements
page-type: css-module
spec-urls: https://drafts.csswg.org/css-pseudo/
---

{{CSSRef}}

The **CSS pseudo-element** module defines abstract elements that are not directly present in the document tree. These abstract elements, called pseudo-elements, represent portions of the render tree that can be selected and styled. Pseudo-elements are used to create abstractions about the document tree beyond those provided by the document tree.

Pseudo-elements are prefixed with a double colon (`::`). You add pseudo-elements to selectors (as in `p::first-line`) to target and style these faux elements.

Pseudo-elements enable targeting entities not included in HTML and sections of content that cannot be targeted otherwise without adding extra markup. Consider the placeholder of an {{HTMLelement("input")}} element. This is an abstract element and not a distinct node in the document tree. You can select this placeholder by using the {{CSSXref("::placeholder")}} pseudo-element. As another example, the {{CSSXref("::selection")}} pseudo-element matches the content currently highlighted by a user, allowing you to style what is matched as the user interacts with the content and changes the selection. Similarly, the {{CSSXref("::first-line")}} pseudo-element targets the first line of an element, updating automatically if the character count of the first line changes, without having to query the element's line length.

## Description

### Highlight pseudo-elements inheritance

Highlight pseudo-elements, such as {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, and {{CSSxref("::grammar-error")}}, follow a consistent inheritance model that differs from regular element inheritance.

When you apply styles to highlight pseudo-elements, they inherit from both:

1. Their parent elements (following normal inheritance)
2. The highlight pseudo-elements of their parent elements (following highlight inheritance)

This means that if you style both a parent element's highlight pseudo-element and a child element's highlight pseudo-element, the child's highlighted text will combine properties from both sources.

#### Custom Properties Behavior

CSS custom properties (variables) in highlight pseudo-elements inherit from their originating element (the element they're being applied to), not through the highlight inheritance chain. For example:

```css
:root {
  --selection-color: lightgreen;
}

::selection {
  color: var(--selection-color);
}

.blue {
  --selection-color: blue;
}
```

#### Universal Selector Considerations

When using the universal selector with highlight pseudo-elements, it prevents highlight inheritance. For example:

```css
/* This prevents highlight inheritance */
*::selection {
  color: lightgreen;
}

/* Prefer this to allow inheritance */
:root::selection {
  color: lightgreen;
}
```

#### Example

Let's look at an example to demonstrate how highlight pseudo-elements inherit styles from their parent elements.

First, we have some HTML that includes two nested {{htmlelement("div")}} elements. Some of the included text content is contained directly inside the parent `<div>`, and some is nested inside the child `<div>`.

```html
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Next we include some CSS, which selects the parent and child `<div>` elements separately and gives them different {{cssxref("color")}} values, and selects the parent and child's selected text ({{cssxref("::selection")}}), giving each a different {{cssxref("background-color")}} as well as setting a different text `color` on the parent selection.

```css
/* Style for the parent element */
.parent {
  color: blue;
}

/* Style for the parent's selected text */
.parent::selection {
  background-color: yellow;
  color: red;
}

/* Style for the child element */
.child {
  color: green;
}

/* Style for the child's selected text */
.child::selection {
  background-color: orange;
}
```

The example renders as follows:

{{EmbedLiveSample("Example", "100%", "150")}}

Try selecting the text in both the parent and child elements. Notice that:

1. When you select the parent text, it uses the yellow background and red text color defined in `.parent::selection`.
2. When you select the child text, it uses:
   - The orange background from `.child::selection`.
   - The red text color inherited from the parent's `::selection` pseudo-element.

This demonstrates how the child's highlight pseudo-element inherits from both its parent element and the parent's highlight pseudo-element.

> [!NOTE]
> The exact appearance of selected text may vary slightly between browsers. For detailed information about browser support and implementation details, see the [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) documentation.

## Reference

### Selectors

- {{CSSXref("::after")}}
- {{CSSXref("::before")}}
- {{CSSXref("::file-selector-button")}}
- {{CSSXref("::first-letter")}}
- {{CSSXref("::first-line")}}
- {{CSSXref("::grammar-error")}}
- {{CSSXref("::highlight()")}}
- {{CSSXref("::marker")}}
- {{CSSXref("::placeholder")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}

The specification also defines the `::details-content` and `::search-text` pseudo-elements and the `::postfix` and `::prefix` sub-pseudo elements. These are not yet supported by any browser. The {{CSSXref("::highlight()")}} pseudo-element is included within this module, but most details are provided in the [CSS custom highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API).

### Interfaces

- {{DOMxRef("CSSPseudoElement")}} interface
  - {{DOMxRef("CSSPseudoElement.element")}} property
  - {{DOMxRef("CSSPseudoElement.type")}} property

### Terms

- {{Glossary("Pseudo-element")}} glossary term

## Guides

- [CSS pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)

  - : Alphabetical list of pseudo-elements defined by all the CSS specifications and WebVTT.

- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

  - : Part of CSS building blocks section on selectors. This article defines what a pseudo-element is and how it can be combined with pseudo-classes and be used for generating content with `::before` and `::after` pseudo-elements.

- [How to create fancy boxes using pseudo-elements](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)

  - : Example of styling generated content using `::before` and `::after` pseudo-elements for visual effects.

## Related concepts

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) cues:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module

  - {{CSSXref("::part")}}

- [CSS view transitions](/en-US/docs/Web/CSS/CSS_view_transitions) module

  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)

  - [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors)
  - [Combinators](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
  - [Class selectors](/en-US/docs/Web/CSS/Class_selectors)
  - [ID selectors](/en-US/docs/Web/CSS/ID_selectors)
  - [Type selectors](/en-US/docs/Web/CSS/Type_selectors)
  - [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
  - [Universal selectors](/en-US/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/en-US/docs/Web/HTML/Element/input#placeholder) attribute of the `<input>` element
- [`:placeholder-shown`](/en-US/docs/Web/CSS/:placeholder-shown) selector

- [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}} property
  - {{cssxref("quotes")}} property

- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)

- {{DOMXref("AnimationEvent.pseudoElement")}} property
- {{DOMXref("KeyframeEffect.pseudoElement")}} property
- {{DOMXref("TransitionEvent.pseudoElement")}} property

## Specifications

{{Specifications}}

## See also

- [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS shadow-parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module
- [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content) module
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
- [CSS custom highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API)
- [Inheritance changes for CSS selection styling](https://developer.chrome.com/blog/selection-styling) - Detailed explanation of the highlight pseudo-elements inheritance model changes in Chrome 134
