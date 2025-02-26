---
title: ::selection
slug: Web/CSS/::selection
page-type: css-pseudo-element
browser-compat: css.selectors.selection
---

{{CSSRef}}

The **`::selection`** CSS [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-selection.html", "tabbed-shorter")}}

## Allowable properties

Only certain CSS properties can be used with `::selection`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} and its associated properties
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} and {{CSSxRef("-webkit-text-stroke-width")}}

In particular, {{CSSxRef("background-image")}} is ignored.

## Syntax

```css
::selection {
  /* ... */
}
```

## Accessibility

**Don't override selected text styles for purely aesthetic reasons** — users can customize them to suit their needs. For people experiencing cognitive concerns or who are less technologically literate, unexpected changes to selection styles may hurt their understanding of the functionality.

If overridden, it is important to ensure that the **contrast ratio** between the text and background colors of the selection is high enough that people experiencing low vision conditions can read it.

Color contrast ratio is found by comparing the luminosity of the selected text and the selected text background colors. To meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), text content must have a contrast ratio of **4.5:1**, or 3:1 for larger text such as headings. (WCAG defines large text as between `18.66px` and `24px` and [bold](/en-US/docs/Web/CSS/font-weight), or `24px` or larger.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Examples

### HTML

```html
This text has special styles when you highlight it.
<p>Also try selecting text in this paragraph.</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* Make selected text gold on a red background */
::selection {
  color: gold;
  background-color: red;
}

/* Make selected text in a paragraph white on a blue background */
p::selection {
  color: white;
  background-color: blue;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("pointer-events")}} - control which events are active on the element
