---
title: Keyframe Formats
slug: Web/API/Web_Animations_API/Keyframe_Formats
page-type: guide
---

{{DefaultAPISidebar("Web Animations")}}

{{domxref("Element.animate()")}}, {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}, and {{domxref("KeyframeEffect.setKeyframes()")}} all accept objects formatted to represent a set of keyframes. There are several options to this format, which are explained below.

## Syntax

There are two different ways to format keyframes:

1. An `array` of objects (keyframes) consisting of properties and values to iterate over. This is the canonical format returned by the {{domxref("KeyframeEffect.getKeyframes()", "getKeyframes()")}} method.

   ```js
   element.animate(
     [
       {
         // from
         opacity: 0,
         color: "#fff",
       },
       {
         // to
         opacity: 1,
         color: "#000",
       },
     ],
     2000,
   );
   ```

   Offsets for each keyframe can be specified by providing an `offset` value.

   ```js
   element.animate(
     [{ opacity: 1 }, { opacity: 0.1, offset: 0.7 }, { opacity: 0 }],
     2000,
   );
   ```

   > **Note:** `offset` values, if provided, must be between 0.0 and 1.0 (inclusive) and arranged in ascending order.

   It is not necessary to specify an offset for every keyframe. Keyframes without a specified offset will be evenly spaced between adjacent keyframes.

   The easing to apply between keyframes can be specified by providing an `easing` value as illustrated below.

   ```js
   element.animate(
     [
       { opacity: 1, easing: "ease-out" },
       { opacity: 0.1, easing: "ease-in" },
       { opacity: 0 },
     ],
     2000,
   );
   ```

   In this example, the specified easing only applies from the keyframe where it is specified until the next keyframe. Any `easing` value specified on the `options` argument, however, applies across a single iteration of the animation — for the entire duration.

2. An `object` containing key-value pairs consisting of the property to animate and an `array` of values to iterate over.

   ```js
   element.animate(
     {
       opacity: [0, 1], // [ from, to ]
       color: ["#fff", "#000"], // [ from, to ]
     },
     2000,
   );
   ```

   Using this format, the number of elements in each array does not need to be equal. The provided values will be spaced out independently.

   ```js
   element.animate(
     {
       opacity: [0, 1], // offset: 0, 1
       backgroundColor: ["red", "yellow", "green"], // offset: 0, 0.5, 1
     },
     2000,
   );
   ```

   The special keys `offset`, `easing`, and `composite` (described below) may be specified alongside the property values.

   ```js
   element.animate(
     {
       opacity: [0, 0.9, 1],
       offset: [0, 0.8], // Shorthand for [ 0, 0.8, 1 ]
       easing: ["ease-in", "ease-out"],
     },
     2000,
   );
   ```

   After generating a suitable set of keyframes from the property value lists, each supplied offset is applied to the corresponding keyframe. If there are insufficient values, or if the list contains `null` values, the keyframes without specified offsets will be evenly spaced as with the array format described above.

   If there are too few `easing` or `composite` values, the corresponding list will be repeated as needed.

### Implicit to/from keyframes

In newer browser versions, you are able to set a beginning or end state for an animation only (i.e. a single keyframe), and the browser will infer the other end of the animation if it is able to. For example, consider [this simple animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — the Keyframe object looks like so:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

We have only specified the end state of the animation, and the beginning state is implied.

## Attributes

Keyframes may specify property-value pairs for any of the {{cssxref("CSS_animated_properties", "animatable CSS properties")}}. The property names are specified using camel-case so for example {{cssxref("background-color")}} becomes `backgroundColor` and {{cssxref("background-position-x")}} becomes `backgroundPositionX`. Shorthand values such as {{cssxref("margin")}} are also permitted.

Two exceptional CSS properties are:

- {{cssxref("float")}}, which must be written as `cssFloat` since "float" is a reserved word in JavaScript. It's just for reference here, this will have no effect on animation since "float" is not an animatable CSS property.
- {{cssxref("offset")}}, which must be written as `cssOffset` since "offset" represents the keyframe offset as described below.

The following special attributes may also be specified:

- offset
  - : The offset of the keyframe specified as a number between `0.0` and `1.0` inclusive or `null`. This is equivalent to specifying start and end states in percentages in CSS stylesheets using `@keyframes`. If this value is `null` or missing, the keyframe will be evenly spaced between adjacent keyframes.
- easing
  - : The [easing function](/en-US/docs/Web/CSS/easing-function) used from this keyframe until the next keyframe in the series.
- composite
  - : The {{domxref("KeyframeEffect.composite")}} operation used to combine the values specified in this keyframe with the underlying value. This will be `auto` if the composite operation specified on the effect is being used.

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}
- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
- {{domxref("KeyframeEffect.setKeyframes()")}}
