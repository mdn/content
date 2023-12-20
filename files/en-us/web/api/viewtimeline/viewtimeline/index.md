---
title: "ViewTimeline: ViewTimeline() constructor"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.ViewTimeline.ViewTimeline
---

{{APIRef("History API")}}{{SeeCompatTable}}

The **`ViewTimeline()`** constructor creates a new {{domxref("ViewTimeline")}} object instance.

## Syntax

```js-nolint
new ViewTimeline(options)
```

### Parameters

- `options`

  - : An object that can contain the following properties:

    - `subject`
      - : A reference to an {{domxref("Element")}} representing the subject element whose visibility within its nearest ancestor scrollable element (scroller) will drive the progress of the timeline.
    - `axis` {{optional_inline}}

      - : An enumerated value representing the scroll axis that will drive the progress of the timeline. Possible values are:

        - `"block"`: The scrollbar on the block axis of the scroll container, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `"y"`, while for vertical writing modes, it is the same as `"x"`.
        - `"inline"`: The scrollbar on the inline axis of the scroll container, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `"x"`, while for vertical writing modes, this is the same as `"y"`.
        - `"y"`: The scrollbar on the vertical axis of the scroll container.
        - `"x"`: The scrollbar on the horizontal axis of the scroll container.

        If omitted, `axis` defaults to `"block"`.

    - `inset` {{optional_inline}}

      - : A value or array of values representing an adjustment to the position of the scrollport (see {{glossary("Scroll container")}} for more details) in which the subject is deemed to be visible. Possible values are:

        - `"auto"`: The default box position is used.
        - A string: If a string is specified, it can consist of one or two values equal to `auto` or a CSS {{cssxref("length-percentage")}} value. To put it another way, the string should be a valid {{cssxref("view-timeline-inset")}} value.
        - An array of one or two values, which can be `"auto"` or a suitable {{domxref("CSSNumericValue")}} to represent a length or percentage offset (for example `CSS.px()` or `CSS.percent()`. If an array is provided, the first value represents the start inset (which affects the {{domxref("ViewTimeline.endOffset")}} value) and the second value represents the end inset (which affects the {{domxref("ViewTimeline.startOffset")}} value).

        If the array has only one value, it is duplicated.

        If omitted, `inset` defaults to `auto`.

### Return value

A new {{domxref("ViewTimeline")}} object instance.

## Examples

See the main {{domxref("ViewTimeline")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ViewTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
