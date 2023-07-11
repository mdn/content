---
title: "Element: animate() method"
short-title: animate()
slug: Web/API/Element/animate
page-type: web-api-instance-method
browser-compat: api.Element.animate
---

{{APIRef('Web Animations')}}

The {{domxref("Element")}} interface's **`animate()`** method
is a shortcut method which creates a new {{domxref("Animation")}}, applies it to the
element, then plays the animation. It returns the created {{domxref("Animation")}}
object instance.

> **Note:** Elements can have multiple animations applied to them. You can get a list of the
> animations that affect an element by calling {{domxref("Element.getAnimations()")}}.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameters

- `keyframes`
  - : Either an array of keyframe objects, **or** a keyframe object whose
    properties are arrays of values to iterate over. See [Keyframe Formats](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) for more details.
- `options`

  - : Either an **integer representing the animation's duration** (in
    milliseconds), **or** an Object containing one or more timing properties described in the [`KeyframeEffect()` options parameter](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) and/or the following options:

    - `id` {{optional_inline}}
      - : A property unique to `animate()`: A string with which to reference the animation.
    - `rangeEnd` {{optional_inline}}

      - : Specifies the end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will end. The JavaScript equivalent of the CSS {{cssxref("animation-range-end")}} property. `rangeEnd` can take several different value types, as follows:

        - A string that can be `normal` (meaning no change to the animation's attachment range), a CSS {{cssxref("length-percentage")}} representing an offset, a `<timeline-range-name>`, or a `<timeline-range-name>` with a `<length-percentage>` following it. For example:

          ```
          "normal"
          "entry"
          "cover 100%"
          ```

          See [`animation-range`](/en-US/docs/Web/CSS/animation-range) for a detailed description of the available values. Also check out the [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), which shows exactly what the different values mean in an easy visual format.

        - An object containing `rangeName` (a string) and `offset` (a {{domxref("CSSNumericValue")}}) properties representing a `<timeline-range-name>` and `<length-percentage>`, as described in the previous bullet. For example:

          ```js
          {
            rangeName: 'entry',
            offset: CSS.percent('100'),
          }
          ```

        - A {{domxref("CSSNumericValue")}} representing an offset, for example:

          ```js
          CSS.percent("100");
          ```

    - `rangeStart` {{optional_inline}}
      - : Specifies the start of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start. The JavaScript equivalent of the CSS {{cssxref("animation-range-start")}} property. `rangeStart` can take the same value types as `rangeEnd`.
    - `timeline` {{optional_inline}}
      - : A property unique to `animate()`: The {{domxref("AnimationTimeline")}} to associate with the animation. Defaults to {{domxref("Document.timeline")}}. The JavaScript equivalent of the CSS {{cssxref("animation-timeline")}} property.

### Return value

Returns an {{domxref("Animation")}}.

## Examples

### Rotating and scaling

In this example we use the `animate()` method to rotate and scale an element.

#### HTML

```html
<div class="newspaper">Spinning newspaper<br />causes dizziness</div>
```

#### CSS

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.newspaper {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}
```

#### JavaScript

```js
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
```

#### Result

{{EmbedLiveSample("Rotating and scaling")}}

### Down the Rabbit Hole demo

In the demo [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010), we use the convenient
`animate()` method to immediately create and play an animation on the
`#tunnel` element to make it flow upwards, infinitely. Notice the array of
objects passed as keyframes and also the timing options block.

```js
document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  },
);
```

### Implicit to/from keyframes

In newer browser versions, you are able to set a beginning or end state for an
animation only (i.e. a single keyframe), and the browser will infer the other end of the
animation if it is able to. For example, consider [this simple animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — the Keyframe object looks like so:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

We have only specified the end state of the animation, and the beginning state is
implied.

### timeline, rangeStart, and rangeEnd

Typical usage of the `timeline`, `rangeStart`, and `rangeEnd` properties might look like this:

```js
const img = document.querySelector("img");

const timeline = new ViewTimeline({
  subject: img,
  axis: "block",
});

img.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    duration: 1,
    timeline,
    rangeStart: "cover 0%",
    rangeEnd: "cover 100%",
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Animation")}}
- {{domxref("Element.getAnimations()")}}
- {{cssxref("animation-range-end")}}, {{cssxref("animation-range-start")}}, {{cssxref("animation-timeline")}}
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
