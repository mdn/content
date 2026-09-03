---
title: "AnimationTimeline: duration property"
short-title: duration
slug: Web/API/AnimationTimeline/duration
page-type: web-api-instance-property
browser-compat: api.AnimationTimeline.duration
---

{{ APIRef("Web Animations") }}

The **`duration`** read-only property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("AnimationTimeline")}} interface returns the maximum value for this timeline or `null`.

Note that the derived interfaces {{domxref("ViewTimeline")}} and {{domxref("ScrollTimeline")}} always return a duration of 100%, while {{domxref("DocumentTimeline")}} has no duration, and returns `null`.

## Value

A number representing the timeline's duration (the maximum value for this timeline) or `null`.

## Examples

### View timeline duration

The {{domxref("ViewTimeline")}} always returns a duration of 100% as a {{domxref("CSSUnitValue")}}.

```js
const subject = document.querySelector(".subject");
const timeline = new ViewTimeline({
  subject,
  axis: "block",
});

timeline.duration; // CSSUnitValue { value: 100, unit: "percent" }
```

### Scroll timeline duration

The {{domxref("ScrollTimeline")}} always returns a duration of 100% as a {{domxref("CSSUnitValue")}}.

```js
const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

timeline.duration; // CSSUnitValue { value: 100, unit: "percent" }
```

### Document timeline duration

The {{domxref("DocumentTimeline")}} has no duration.

```js
document.timeline.duration; // null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}} inherits this property
- {{domxref("ScrollTimeline")}} inherits this property
- {{domxref("ViewTimeline")}} inherits this property
