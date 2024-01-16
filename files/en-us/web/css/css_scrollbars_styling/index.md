---
title: CSS scrollbars styling
slug: Web/CSS/CSS_scrollbars_styling
page-type: css-module
browser-compat:
  - css.properties.scrollbar-color
  - css.properties.scrollbar-width
spec-urls: https://drafts.csswg.org/css-scrollbars/
---

{{CSSRef}}

The **CSS scrollbars styling** module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar _track_, which is the background of the scrollbar, and the color of the scrollbar _thumb_, which is the draggable handle of the scrollbar.

## Scrollbar styling in action

This example defines a thin scrollbar with a red thumb and an orange track. To view the thumb, you will need to scroll the text. After the scrollbar is visible, hover over it to see the track.

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

> **Note:** When customizing scrollbars, ensure that the thumb and track have enough contrast with the surrounding background. Also ensure that the scrollbar hit area is large enough for people who use touch input.

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
- {{CSSxRef("scrollbar-gutter")}} CSS property
- {{CSSxRef("scroll-behavior")}} CSS property
- {{cssxref("scroll-margin")}} CSS shorthand property
- {{cssxref("scroll-padding")}} CSS shorthand property
- {{cssxref("scroll-snap-align")}} CSS property
- {{cssxref("scroll-snap-stop")}} CSS property
- {{cssxref("scroll-snap-type")}} CSS property
- {{CSSxRef("::-webkit-scrollbar")}} pseudo-element
- {{glossary("scroll container")}} glossary term
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA role

## Specifications

{{Specifications}}

## See also

- {{cssxref('scroll-timeline')}}, {{cssxref('scroll-timeline-axis')}}, {{cssxref('scroll-timeline-name')}}
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
