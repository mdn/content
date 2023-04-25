---
title: CSS Scrollbar Styling module
slug: Web/CSS/CSS_Scrollbars
page-type: css-module
spec-urls: https://w3c.github.io/csswg-drafts/css-scrollbars/
browser-compat:
  - css.properties.scrollbar-width
  - css.properties.scrollbar-color
---

{{CSSRef}}

The **CSS scrollbars styling** module defines properties to influence the visual styling of scrollbars, including controls for their color and width. It standardizes the obsolete scrollbar color properties introduced in 2000 by Windows IE 5.5.

### Scrollbar styling in action

In this example, we have chosen to use a thin scrollbar with a green track and purple thumb.

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
```

### HTML

```html
<p class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</p>
```

### Result

{{EmbedLiveSample("Scrollbar styling in action")}}

## Reference

### CSS properties

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Related concepts

- {{CSSxRef("overflow-block")}} CSS property
- {{CSSxRef("overflow-inline")}} CSS property
- {{CSSxRef("overflow-x")}} CSS property
- {{CSSxRef("overflow-y")}} CSS property
- {{CSSxRef("overflow")}} CSS shorthand property
- {{CSSxRef("overflow-clip-margin")}} CSS property
- {{CSSxRef("scroll-behavior")}} CSS property
- {{CSSxRef("scrollbar-gutter")}} CSS property
- {{CSSxRef("::-webkit-scrollbar")}} pseudo-element

## Accessibility concerns

When you customize scrollbars, consider they have enough contrast and that their hit area is large enough for people who use touch input.

- [Baseline Rules for Scrollbar Usability | Adrian Roselli](https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS overflow module](/en-US/docs/Learn/CSS/CSS_overflow)
- {{Experimental_Inline}} The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, to create animations tied to the scroll offset of a {{glossary("scroll container")}}.
