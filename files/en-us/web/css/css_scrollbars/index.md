---
title: CSS scrollbars styling
slug: Web/CSS/CSS_Scrollbars
page-type: css-module
spec-urls: https://w3c.github.io/csswg-drafts/css-scrollbars/
---

{{CSSRef}}

The **CSS scrollbars styling** module defines properties to influence the visual styling of scrollbars, including controls for their color and width. It standardizes the obsolete scrollbar color properties introduced in 2000 by Windows IE 5.5.

## Scrollbar styling in action

In this example, we have chosen to use a thin scrollbar with an orange track and red thumb.

```css hidden
.poem {
  width: 300px;
  height: 100px;
  border: 1px solid;
}
```

```css
.poem {
  overflow: scroll;
  scrollbar-color: red orange;
  scrollbar-width: thin;
}
```

```html hidden
<blockquote class="poem">
  <h3>A Small Needful Fact</h3>
  <pre>
Is that Eric Garner worked
for some time for the Parks and Rec.
Horticultural Department, which means,
perhaps, that with his very large hands,
perhaps, in all likelihood,
he put gently into the earth
some plants which, most likely,
some of them, in all likelihood,
continue to grow, continue
to do what such plants do, like house
and feed small and necessary creatures,
like being pleasant to touch and smell,
like converting sunlight
into food, like making it easier
for us to breathe.
</pre
  >
  <p>
    - <a href="https://onbeing.org/poetry/a-small-needful-fact/">Ross Gay</a>
  </p>
</blockquote>
```

{{EmbedLiveSample("Scrollbar_styling_in_action")}}

In some browsers you will need to scroll the poem to view the scroll thumbs and hover over the scrollbars to see the track.

> **Note:** When customizing scrollbars, ensure they have enough contrast and that their hit area is large enough for people who use touch input. See [Baseline Rules for Scrollbar Usability | Adrian Roselli](https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html).

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
- {{cssxref("scroll-margin")}} CSS shorthand property
- {{cssxref("scroll-padding")}} CSS shorthand property
- {{cssxref("scroll-snap-align")}} CSS property
- {{cssxref("scroll-snap-stop")}} CSS property
- {{cssxref("scroll-snap-type")}} CSS property
- {{CSSxRef("::-webkit-scrollbar")}} pseudo-element
- {{glossary("scroll container")}} glossary term
- {{Glossary("scrollport")}} glossary term
- ARIA [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) role

## Specifications

{{Specifications}}

## See also

- [CSS overflow module](/en-US/docs/web/CSS/CSS_overflow)
- [CSS scroll snap module](/en-US/docs/web/CSS/CSS_Scroll_Snap)
- [`@media (forced-colors: active)`](/en-US/docs/Web/CSS/@media/forced-colors) sets {{cssxref("scrollbar-color")}} to 'auto'
- {{Experimental_Inline}} The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, to create animations tied to the scroll offset of a {{glossary("scroll container")}}.
