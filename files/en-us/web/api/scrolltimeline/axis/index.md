---
title: "ScrollTimeline: axis property"
short-title: axis
slug: Web/API/ScrollTimeline/axis
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScrollTimeline.axis
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`axis`** read-only property of the
{{domxref("ScrollTimeline")}} interface returns an enumerated value representing the scroll axis that is driving the progress of the timeline.

## Value

An enumerated value. Possible values are:

- `"block"`
  - : The scrollbar on the block axis of the scroll container, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `"y"`, while for vertical writing modes, it is the same as `"x"`.
- `"inline"`
  - : The scrollbar on the inline axis of the scroll container, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `"x"`, while for vertical writing modes, this is the same as `"y"`.
- `"y"`
  - : The scrollbar on the vertical axis of the scroll container.
- `"x"`
  - : The scrollbar on the horizontal axis of the scroll container.

## Examples

See the main {{domxref("ScrollTimeline")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
