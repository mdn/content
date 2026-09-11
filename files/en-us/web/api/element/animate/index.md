---
title: "Element: animate() method"
short-title: animate()
slug: Web/API/Element/animate
page-type: web-api-instance-method
browser-compat: api.Element.animate
---

{{APIRef("Web Animations")}}

The {{domxref("Element")}} interface's **`animate()`** method
is a shortcut method which creates a new {{domxref("Animation")}}, applies it to the
element, then plays the animation. It returns the created {{domxref("Animation")}}
object instance.

> [!NOTE]
> Elements can have multiple animations applied to them. You can get a list of the
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
      - : Specifies the end of an animation's attachment range along its timeline, i.e., where along the timeline an animation will end. The JavaScript equivalent of the CSS {{cssxref("animation-range-end")}} property. `rangeEnd` can take several different value types, as follows:
        - A string that can be `normal` (meaning no change to the animation's attachment range), a CSS {{cssxref("length-percentage")}} representing an offset, a `<timeline-range-name>`, or a `<timeline-range-name>` with a `<length-percentage>` following it. For example: `"normal"`, `"entry"`, or `"cover 100%"`.

          See {{cssxref("animation-range")}} for a detailed description of the available values. Also check out the [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), which shows exactly what the different values mean in an easy visual format.

        - An object containing `rangeName` (a string) and `offset` (a {{domxref("CSSNumericValue")}}) properties representing a `<timeline-range-name>` and `<length-percentage>`, as described in the previous bullet. For example: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - A {{domxref("CSSNumericValue")}} representing an offset, for example: `CSS.percent("100")`.

    - `rangeStart` {{optional_inline}}
      - : Specifies the start of an animation's attachment range along its timeline, i.e., where along the timeline an animation will start. The JavaScript equivalent of the CSS {{cssxref("animation-range-start")}} property. `rangeStart` can take the same value types as `rangeEnd`.
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

In the demo [Down the Rabbit Hole (with the Web Animation API)](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#moving_it_to_javascript), we use the convenient
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

The browser can infer the start or end state of an animation by using the current state. By default, if a single keyframe is provided, it's treated as the end state, and the start state is inferred from the element's current computed style. However, you can specify the `offset` to indicate where the provided keyframe should be placed in the animation timeline.

```html hidden
<div>
  <img
    id="logo"
    src="/shared-assets/images/examples/firefox-logo.svg"
    alt="Firefox logo" />
</div>
<button id="run">Animate - use current as start</button>
<button id="run2">Animate - use current as end</button>
<button id="run3">Animate - use current as both ends</button>
```

```css hidden
div {
  width: 100%;
}

#logo {
  width: 200px;
  height: 200px;
}
```

```js
const logo = document.getElementById("logo");
document.getElementById("run").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)" }, 1000);
});
document.getElementById("run2").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
});
document.getElementById("run3").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
});
```

We specified a single frame in the timeline, and the start and/or end states can be filled in to create a complete animation.

{{EmbedLiveSample("Implicit to/from keyframes", "", 300)}}

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
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
