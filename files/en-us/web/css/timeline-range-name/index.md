---
title: <timeline-range-name>
slug: Web/CSS/timeline-range-name
page-type: css-type
browser-compat: css.types.timeline-range-name
spec-urls: https://drafts.csswg.org/scroll-animations/#typedef-timeline-range-name
sidebar: cssref
---

The **`<timeline-range-name>`** {{glossary("enumerated")}} data type is a CSS identifier representing one of the predefined named timeline ranges inside a [view progress timeline](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines).

The `<timeline-range-name>` keyword values are used in the following longhand and shorthand properties:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} shorthand

## Syntax

Valid `<timeline-range-name>` values:

- `cover`
  - : Represents the full range of a view progress timeline, from the point where the subject element's start border edge first starts to enter the scroll port's view progress visibility range (0% progress) to the point where the end border edge has completely left it (100% progress).

- `contain`
  - : Represents the range of a view progress timeline where the subject element is fully contained by, or fully contains, the view progress visibility range within the [scrollport](/en-US/docs/Glossary/Scroll_container#scrollport)
    - If the subject element is smaller than the scrollport, it ranges from the point where the subject element is first completely contained by the scroll port (0% progress), to the point where it is no longer completely contained by the scroll port (100% progress).
    - If the subject element is larger than the scrollport, it ranges from the point where the subject element first completely covers the scroll port (0% progress), to the point where it no longer completely covers the scroll port (100% progress).

- `entry`
  - : Represents the range of a view progress timeline from the point where the subject element first starts to enter the scroll port, to the point where it has completely entered the scroll port. `0%` is equivalent to `0%` of the `cover` range. `100%` is equivalent to `0%` of the `contain` range.

- `exit`
  - : Represents the range of a view progress timeline from the point where the subject element first starts to exit the scroll port, to the point where it has completely exited the scroll port. `0%` is equivalent to `0%` of the `contain` range. `100%` is equivalent to `0%` of the `cover` range.

- `entry-crossing`
  - : Represents the range during which the principal box crosses the end border edge, from the latest position at which the start border edge of the element's principal box coincides with the end edge of its view progress visibility range (0% progress) to the earliest position at which the end border edge of the element's principal box coincides with the end edge of its view progress visibility range (100% progress).

- `exit-crossing`
  - : Represents the range of a view progress timeline where the principal box crosses the start border edge, from the latest position at which the start border edge of the element's principal box coincides with the start edge of its view progress visibility range (0% progress) to the earliest position at which the end border edge of the element's principal box coincides with the start edge of its view progress visibility range (100% progress).

## Formal syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) module
