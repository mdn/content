---
title: Animatable CSS properties
slug: Web/CSS/CSS_animated_properties
page-type: landing-page
---

{{CSSRef}}

[CSS Animations](/en-US/docs/Web/CSS/CSS_animations) and [Transitions](/en-US/docs/Web/CSS/CSS_transitions) rely on the concept of **animatable** properties, and all CSS properties are animatable unless otherwise specified. Each property's _animation type_ determines how values [combine](https://drafts.csswg.org/css-values/#combining-values) - interpolate, add, or accumulate - for this property. Transitions only involve interpolation, whereas animations may use all three combination methods.

> [!NOTE]
> The animation type for each CSS property is listed in its "Formal definition" table (E.g., {{CSSXref("color", "", "#formal_definition")}}).

> [!NOTE]
> The interpolation method for each CSS data type is described in its "Interpolation" section (E.g., {{CSSXref("&lt;length&gt;", "", "#interpolation")}}).

## Animation types

There are mainly four animation types as defined in the [Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties) specification:

- Not animatable

  - : The property is not animatable. It is not processed when listed in an animation keyframe and is unaffected by transitions.

    > [!NOTE]
    > An animation effect targeting only properties that are not animatable will still exhibit the usual behavior for an animation effect (E.g., firing the {{DOMXref("Element/animationstart_event", "animationstart")}} event).

- Discrete

  - : The property's values are not additive, and interpolation swaps from the start value to the end value at `50%`. Specifically, denoting by `p` the progress value:

    - If `p < 0.5`, then `V_result = V_start`;
    - If `p ≥ 0.5`, then `V_result = V_end`.

- By computed value

  - : Corresponding individual components of the computed values are combined using the indicated procedure for that value type. If the number of components or the types of corresponding components do not match, or if any component value uses discrete animation and the two corresponding values do not match, then the property values combine as discrete.

- Repeatable list

  - : Same as by computed value except that if the two lists have differing numbers of items, they are first repeated to the least common multiple numbers of items. Each item is then combined by computed value. If a pair of values cannot be combined or any component value uses discrete animation, then the property values combine as discrete.

Some properties have specific interpolation behavior not covered by these four types. In this case, refer to the property's "Interpolation" section (E.g., {{CSSXref("visibility", "", "#interpolation")}}).

## Animating custom properties

For custom properties registered using the {{DOMXref("CSS/registerProperty_static", "registerProperty()")}} method, the animation type is by computed value, with the computed value type [determined](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values) by the property's syntax definition.

For unregistered custom properties, the animation type is discrete.

## See also

- [Using CSS Animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Using CSS Transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
