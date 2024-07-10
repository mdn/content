---
title: <easing-function>
slug: Web/CSS/easing-function
page-type: css-type
browser-compat: css.types.easing-function
---

{{CSSRef}}

The **`<easing-function>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a mathematical function that describes the rate at which a value changes.

This transition between two values may be applied in different situations. It may be used to describe how fast values change during animations. This lets you vary the animation's speed over the course of its duration. You can specify an easing function for CSS [transition](/en-US/docs/Web/CSS/transition-timing-function) and [animation](/en-US/docs/Web/CSS/animation-timing-function) properties.

## Syntax

```css
/* linear function and keyword */
/* linear(<point-list>) */
linear(1, -0.5, 0)
linear

/* cubic-bezier function and keywords */
/* cubic-bezier(<x1>, <y1>, <x2>, <y2>) */
cubic-bezier(0.25, 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out

/* steps function and keywords */
/* steps(<number-of-steps>, <direction>) */
steps(4, end)
steps(10, jump-both)
step-start
step-end
```

### Values

- `linear`

  - : Specifies a constant rate of interpolation, with no change in the rate of progress throughout the duration (that is, no acceleration or deceleration). This keyword value is equivalent to both [`cubic-bezier(0, 0, 1, 1)`](#cubic_bézier_easing_function) and [`linear(0, 1)`](#linear_easing_function) functions.

![Graph of "Input progress" to "Output progress" showing a line extending from the origin to (1, 1).](linear.svg)

- `<linear-easing-function>`

  - : Specifies a `linear()` function with one or more comma-separated _linear stops_, each containing up to two optional _stop lengths_, to control the progress of an animation or transition.

    The `linear()` function specifies a `<linear-stop-list>`, a comma-separated list of points along the animation or transition progress. Each point or `<linear-stop>` in the list is specified as a {{cssxref("&lt;number&gt;")}} between `0` and `1`. By default, each stop in the `<linear-stop-list>` is equidistant. To have more control on the progress of the animation or transition, each point can include up to two optional {{cssxref("&lt;percentage&gt;")}} `<linear-stop-length>` values.

    - `<number>`: Represents a point in time along the duration of the animation or transition. The value should be between `0` and `1`, where `0` represents the start of the iteration and `1` represents the end.

    - `<percentage>`: Indicates the position of a linear stop along the duration. It can take up to two values. If one value is specified, it defines the start of the associated linear stop. If two percentage values are specified, they define the length of the stop: the first percentage indicates the starting point and the second percentage indicates the ending point for that segment in the animation or transition. If no `<percentage>` value is specified, which is the default, the stops are spread evenly along the timeline.

- `<cubic-bezier-easing-function>`

  - : Specifies a [Bézier curve](/en-US/docs/Glossary/Bezier_curve) to shape the progress of an animation or a transition. In CSS, Bézier curves are defined by four control points that mathematically describe the curve: a starting point, an ending point, and two control points. The cubic Bézier easing function can be defined in one of these two ways: by creating a custom curve with a four-parameter `cubic-bezier()` function call or by using one of the predefined keyword values, which map to the commonly used Bézier curve parameters. The predefined keyword values include:

    `ease`: This keyword represents the easing function `cubic-bezier(0.25, 0.1, 0.25, 1)`. It indicates that the interpolation starts slowly, accelerates sharply, and then slows gradually towards the end. It is similar to the `ease-in-out` keyword, though it accelerates more sharply at the beginning.

    `ease-in`: This keyword represents the easing function `cubic-bezier(0.42, 0, 1, 1)`. It indicates that the interpolation starts slowly, then progressively speeds up until the end, at which point it stops abruptly.

    `ease-out`: This keyword represents the easing function `cubic-bezier(0, 0, 0.58, 1)`. It indicates that the interpolation starts abruptly and then progressively slows down towards the end.

    `ease-in-out`: This keyword represents the easing function `cubic-bezier(0.42, 0, 0.58, 1)`. It indicates that the interpolation starts slowly, speeds up, and then slows down towards the end. At the beginning, it behaves like the `ease-in` keyword; at the end, it is like the `ease-out` keyword.

    ![Graphs of "Input progress" to "Output progress", of which "ease" shows a curved line quickly rising from the origin to (1, 1); "ease-in" shows a shallow curved line from the origin that straightens out as it approaches (1, 1); "ease-out" shows a straight diagonal line that slightly curves as it gets close to (1, 1); and "ease-in-out" shows a symmetrical, "S"-shaped line curving from the origin to (1, 1).](ease.svg)

    `cubic-bezier()`: This function accepts four {{cssxref("&lt;number&gt;")}} values to shape a curve.

    - {{cssxref("&lt;number&gt;")}}: Specifies the location of [P1 and P2 points](#cubic_bézier_easing_function) on the curve. `<x1>` and `<y1>` are the coordinates for point P1, and `<x2>` and `<y2>` are the coordinates for point P2. `<x1>` and `<x2>` values must be between `0` and `1`, otherwise the function will not work as expected.

- `<step-easing-function>`

  - : Specifies a `steps()` function that divides the animation into a set number of equal-length intervals or "steps", causing the animation to jump from one step to the next rather than transitioning smoothly. This parameter accepts one of the following two keyword values that map to predefined `steps()` functions or a custom `steps()` function:

    `step-start`: This keyword represents the easing function `steps(1, jump-start)` or `steps(1, start)`. It indicates that the interpolation jumps immediately to its final state, where it stays until the end.

    `step-end`: This keyword represents the easing function `steps(1, jump-end)` or `steps(1, end)`. It indicates that the interpolation stays in its initial state until the end, at which point it jumps directly to its final state.

    ![Two graphs of "Input progress" to "Output progress". In the "step-start" graph, an unfilled circle represents the origin point (0,0), with a horizontal line extending from (0, 1) to (1, 1). In the "step-end" graph, a horizontal line extends from the origin to (1, 0), with an unfilled circle at (1,0) and a solid circle at (1, 1).](step.svg)

    `steps()`: This function accepts a positive {{cssxref("&lt;integer&gt;")}} and an optional `<step-position>`.

    - `<integer>`: Represents the number of equidistant intervals or 'steps'. It must be a positive integer greater than `0` unless the second parameter is `jump-none`, in which case, it must be a positive integer greater than `1`.
    - `<step-position>`: Specifies the [timing of the jump](#steps_easing_function) to occur either at the start, at the end, at both start and end, or at neither. The possible keyword values include:

      - `jump-start` denotes that the first jump occurs right at the start, essentially at the `0` point. No time is spent at the `0%` mark.
      - `jump-end` denotes that the last jump occurs right at the end, essentially at the `1` point. No time is spent at the `100%` mark. This is the default value when no `<step-position>` is specified.
      - `jump-none` denotes that no jump occurs either at the beginning or at the end, effectively removing a step during the duration. Instead, the progress holds steady at both the `0%` mark and `100%` marks. The duration of these holds is determined by dividing the total duration by the number of steps (1/n).
      - `jump-both` denotes that jumps occur at both the beginning and the end, essentially occurring at both the `0` and `1`. Effectively, a step is added at both the ends. No time is spent at the `0%` and `100%` marks.
      - `start` is the equivalent of `jump-start`.
      - `end` is the equivalent of `jump-end`.

## Description

There are three types of easing functions:

- [Linear](#linear_easing_function)
- [Cubic Bézier](#cubic_bézier_easing_function)
- [Steps](#steps_easing_function)

### Linear easing function

The `linear()` function creates a piecewise linear easing, allowing the approximation of complex animations and transitions by interpolating linearly between the specified points. The interpolation occurs at a constant rate from beginning to end. A typical use of the `linear()` function is to provide many points to approximate any curve.

For example, the `linear(0, 0.25, 1)` function has linear stops of `0`, `0.25`, and `1` as arguments. The animation or transition starts at point `0`, moves linearly to `0.25`, and then continues linearly to point `1`. Since no `<linear-stop-length>` percentage is specified, the same duration (50%) is used to go from `0` to `0.25` and from `0.25` to `1`.

![Graphs of "Input progress" to "Output progress", of which "linear(0, 0.25, 1)" shows a broken line connecting the origin, (0.5, 0.25), and (1, 1); and "linear(0, 0.25 75%, 1)" shows a broken line connecting the origin, (0.75, 0.25), and (1, 1).](linear_function.svg)

By default, the stops are equidistant. So if there are 5 stops, they will be at 0%, 25%, 50%, 75%, and 100% of the duration. You can use optional `<linear-stop-length>` percentage values to provide finer control, defining the start and/or length of each segment, allowing for a more controlled progression of the transition.

Consider an animation with a duration time of 100 seconds and a change of 100 pixels. Let's look at an example where the easing of the animation is specified: `linear(0, 0.25 75%, 1)`. In this case, the animation progresses to 25 pixels (25% of its total change) in the first 75 seconds (75% of the duration). The last 75 pixels are applied in the remaining 25 seconds of the animation. For the same animation, suppose the easing function is given instead as `linear(0, 0.5 25% 75%, 1)`. Here, the animation reaches 50 pixels (50% of its total change) in 25 seconds (25% of the duration) and remains there for 50 seconds (75% - 25% of the duration). Then the last 50 pixels are applied in the remaining 25 seconds of the duration. Note that `linear(0, 0.5 25% 75%, 1)` is equivalent to `linear(0, 0.5 25%, 0.5 75%, 1)`.

> **Note:** The [`linear`](#linear) keyword is equivalent to the easing function `linear(0, 1)`. While the `linear` keyword is always interpreted as-is, the function `linear(0, 1)` gets interpreted as `linear(0 0%, 1 100%)`.

### Cubic Bézier easing function

The `cubic-bezier()` functional notation defines a cubic [Bézier curve](/en-US/docs/Glossary/Bezier_curve). The easing functions in the cubic-bezier subset of easing functions are often called "smooth" easing functions because they can be used to smooth down the start and end of the {{Glossary("interpolation")}}. They correlate an input progress to an output progress, both expressed as {{cssxref("&lt;number&gt;")}}s. For these values, `0.0` represents the initial state, and `1.0` represents the final state.

![Graph of "Input progress" to "Output progress" showing an "S"-shaped line curving from the origin to (1, 1) with the Bezier control points P1(0.1, 0.6) and P2(0.7, 0.2).](cubic-bezier.svg)

A cubic Bézier curve is defined by four points: P0, P1, P2, and P3. The points P0 and P3 represent the start and the end of the curve. In CSS, these points are fixed as the coordinates progress (the abscissa the input progress, the ordinate the output progress). P0 is `(0, 0)` and represents the initial progress and the initial state. P3 is `(1, 1)` and represents the final progress and the final state.

Not all cubic Bézier curves are suitable as easing functions because not all are [mathematical functions](https://en.wikipedia.org/wiki/Function_%28mathematics%29); i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the `[0, 1]` range.

Cubic Bézier curves with the P1 or P2 ordinate outside the `[0, 1]` range can cause the value to go farther than the final state and then return. In animations, for some properties, such as {{cssxref("left")}} or {{cssxref("right")}}, this creates a kind of "bouncing" effect.

![Graphs of the easing function "cubic-bezier(0.3, 0.2, 0.2, 1.4)", one of which shows the output progress going above 1 starting from a certain input progress, the other shows the output progress reaching and then staying at 1.](cubic-bezier_out_of_range.svg)

However, certain properties will restrict the output if it goes outside an allowable range. For example, a color component greater than `255` or smaller than `0` in {{CSSXref("color_value/rgb", "rgb()")}} will be clipped to the closest allowed value (`255` and `0`, respectively). Some `cubic-bezier()` values exhibit this property.

When you specify an invalid cubic Bézier curve, CSS ignores the whole property.

The keywords `ease`, `ease-in`, `ease-out`, and `ease-in-out` are equivalent to a specific `cubic-bezier()` value.

### Steps easing function

The `steps()` functional notation defines a [step function](https://en.wikipedia.org/wiki/Step_function) that divides the domain of output values in equidistant steps. This subclass of step functions are sometimes also called _staircase functions_.

These are a few examples illustrating the `steps()` function:

```css
steps(2, jump-start) /* Or steps(2, start) */
steps(4, jump-end) /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Graphs of "Input progress" to "Output progress", of which "steps(2, jump-start)" shows horizontal lines extending 0.5 unit from (0, 0.5) and (0.5, 1), respectively, with empty circles at the origin and (0.5, 0.5); "steps(4, jump-end)" shows horizontal lines extending 0.25 unit from (0, 0), (0.25, 0.25), (0.5, 0.5), and (0.75, 0.75), respectively, with unfilled circles at (0.25, 0), (0.5, 0.25), and (0.75, 0.5), and a solid circle at (1, 1); "steps(5, jump-none)" shows horizontal lines extending 0.2 unit from (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75), and (0.8, 1), respectively, with unfilled circles at (0.2, 0), (0.4, 0.25), (0.6, 0.5), and (0.8, 0.75); "steps(3, jump-both)" shows horizontal lines extending 1/3 unit from (0, 0.25), (1/3, 0.5), and (2/3, 0.75),respectively , with a solid circle at (1, 1) and unfilled circles at the origin, (1/3, 0.25), (2/3, 0.5), and (1, 0.75).](jump.svg)

The keywords `step-start` and `step-end` are equivalent to a specific `steps()` value.

## Formal syntax

{{csssyntax}}

## Examples

### Comparing the easing functions

This example provides an easy comparison between the different easing functions using an animation. From the drop-down menu, you can select an easing function – there are a couple of keywords and some `cubic-bezier()` and `steps()` options. After selecting an option, you can start and stop the animation using the provided button.

#### HTML

```html
<div>
  <div></div>
</div>
<ul>
  <li>
    <button class="animation-button">Start animation</button>
  </li>
  <li>
    <label for="easing-select">Choose an easing function:</label>
    <select id="easing-select">
      <option selected>linear</option>
      <option>linear(0, 0.5 50%, 1)</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-bezier(0.1, -0.6, 0.2, 0)</option>
      <option>cubic-bezier(0, 1.1, 0.8, 4)</option>
      <option>steps(5, end)</option>
      <option>steps(3, start)</option>
      <option>steps(4)</option>
    </select>
  </li>
</ul>
```

#### CSS

```css
body > div {
  position: relative;
  height: 100px;
}

div > div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(
    circle at 10px 10px,
    rgb(25 255 255 / 80%),
    rgb(25 255 255 / 40%)
  );
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const startBtn = document.querySelector("button");
const divElem = document.querySelector("div > div");

startBtn.addEventListener("click", () => {
  if (startBtn.textContent === "Start animation") {
    divElem.style.animationName = "move-right";
    startBtn.textContent = "Stop animation";
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = "unset";
    startBtn.textContent = "Start animation";
  }
});

selectElem.addEventListener("change", () => {
  divElem.style.animationTimingFunction = selectElem.value;
});
```

#### Result

{{EmbedLiveSample("comparing_the_easing_functions", "100%", 200)}}

### Using the cubic-bezier() function

These cubic Bézier curves are valid for use in CSS:

```css example-good
/* The canonical Bézier curve with four <number> in the [0,1] range */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Using <integer> is valid because any <integer> is also a <number>. */
cubic-bezier(0, 0, 1, 1)

/* Negative values for ordinates are valid, leading to bouncing effects. */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Values greater than 1.0 for ordinates are also valid. */
cubic-bezier(0, 1.1, 0.8, 4)
```

These cubic Bézier curves definitions are invalid:

```css example-bad
/* Though the animated output type may be a color,
   Bézier curves work with numerical ratios. */
cubic-bezier(0.1, red, 1.0, green)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* The two points must be defined, there is no default value. */
cubic-bezier(0.3, 2.1)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Using the steps() function

These easing functions are valid:

```css example-good
/* There are 5 treads, the last one happens
   right before the end of the animation. */
steps(5, end)

/* A two-step staircase, the first one happening
   at the start of the animation. */
steps(2, start)

/* The second parameter is optional. */
steps(2)
```

> **Note:** If the animation contains multiple stops, then the steps specified in the `steps()` function will apply to each section. Therefore, an animation with three segments and `steps(2)` will contain 6 steps in total, 2 per segment.

These easing functions are invalid:

```css example-bad
/* The first parameter must be an <integer> and
   cannot be a real value, even if it is equal to one. */
steps(2.0, jump-end)

/* The amount of steps must be non-negative. */
steps(-3, start)

/* There must be at least one step. */
steps(0, jump-none)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS animations](/en-US/docs/Web/CSS/CSS_animations)
- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions)
- [cubic-bezier](https://cubic-bezier.com/)
- [`linear()` easing generator](https://linear-easing-generator.netlify.app/)
