---
title: ::search-text
slug: Web/CSS/Reference/Selectors/::search-text
page-type: css-pseudo-element
browser-compat: css.selectors.search-text
sidebar: cssref
---

The **`::search-text`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) applies styles to search results identified by the user agent's "Find" or "Find in page" text search feature.

{{InteractiveExample("CSS Demo: ::search-text", "tabbed-shorter")}}

```css interactive-example
p::search-text {
  color: crimson;
  background-color: wheat;
}
```

```html interactive-example
<p>
  Using your browser's "Find in page" functionality, find a word or phrase that
  appears in this sentence, and note how, in supporting browsers, each result is
  highlighted using the specified custom styles.
</p>
```

## Syntax

```css
::search-text {
  /* ... */
}
```

## Description

Most browsers include some kind of in-page text search functionality, usually labelled "Find" or "Find in page". The `::search-text` pseudo-element, one of the [highlight pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements), allows you to apply a [limited set of styles](#allowable_properties) to the text results highlighted by the browser search functionality.

Not all browsers and browser versions highlight search results using in-page highlights that are stylable with CSS. In such cases, `::search-text` may be unimplemented or just ignored.

Using `::search-text` as a selector on its own will style browser search results appearing _anywhere_ on a page. If you want to only style browser search results appearing inside certain elements, you can combine `::search-text` with other selectors, for example `section::search-text`.

Additionally, `::search-text` can be combined with the {{cssxref(":current")}} [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) to provide specific styles to the currently-focused search result, for example:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

### Inheritance model

The `::search-text` pseudo-element follows a special inheritance model common to all highlight pseudo-elements. For more details on how this inheritance works, see the [Highlight pseudo-elements inheritance](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance) section.

### Allowable properties

Only certain CSS properties can be used with `::search-text`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- The {{CSSxRef("text-decoration")}} shorthand and associated longhand properties:
  - {{CSSxRef("text-decoration-line")}}, the `grammar-error`, `spelling-error`, `line-through`, `none`, and `underline` values only.
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-decoration-style")}}
  - {{CSSxRef("text-decoration-thickness")}}
  - {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-shadow")}}

## Accessibility

**Override text search result styles sparingly**, especially when doing so for purely aesthetic reasons. For people experiencing cognitive concerns or who are less technologically literate, unexpected changes to these styles may hurt their understanding of the functionality.

A primary use case of `::search-text` is to increase color contrast compared the default browser styling. When customizing text search result foreground and background colors, it is important to ensure that the **contrast ratio** between them is high enough that people can read it.

Color contrast ratio is found by comparing the luminosity of the selected text and the selected text background colors. To meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), text content must have a contrast ratio of **4.5:1**, or 3:1 for larger text such as headings. (WCAG defines large text as between `18.66px` and `24px` and [bold](/en-US/docs/Web/CSS/Reference/Properties/font-weight), or `24px` or larger.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Examples

### Creating custom text search result styles

This example shows how to use `::search-text` and `:current` to create custom styles for your browser's "Find in page" search results.

### HTML

The HTML consists of a basic paragraph of text. We won't show the HTML source, both for brevity, and so that it is easier to navigate the search results in the rendered example.

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

### CSS

In our CSS, we start by styling the `::search-text` pseudo-element. We give it custom {{cssxref("background-color")}}, {{cssxref("color")}}, {{cssxref("text-decoration")}}, and {{cssxref("text-shadow")}} styles.

```css hidden live-sample___custom-search-results
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: 90%;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-style: double;
  text-decoration-thickness: 1px;
  text-shadow: 1px 1px 1px black;
}
```

Finally, we style the currently-focused search result via `::search-text:current`, providing it with a different `background-color` so that it is distinguishable from the rest of the results.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
}
```

### Result

The example renders as follows:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Try using the in-page search to find a word that appears multiple times in the example text, such as "aliquam" or "amet". Move between the previous and next results to check out the `:current` styling.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":current")}}
- [Highlight pseudo-elements](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements)
- [CSS pseudo-elements](/en-US/docs/Web/CSS/Guides/Pseudo-elements) module
