---
title: Using CSS transitions
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
page-type: guide
spec-urls: https://drafts.csswg.org/css-transitions/
---

{{CSSRef}}

**CSS transitions** provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

Animations that involve transitioning between two states are often called _implicit transitions_ as the states in between the start and final states are implicitly defined by the browser.

![A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.](transitionsprinciple.png)

CSS transitions let you decide which properties to animate (by [_listing them explicitly_](/en-US/docs/Web/CSS/transition-property)), when the animation will start (by setting a [_delay_](/en-US/docs/Web/CSS/transition-delay)), how long the transition will last (by setting a [_duration_](/en-US/docs/Web/CSS/transition-duration)), and how the transition will run (by defining an [_easing function_](/en-US/docs/Web/CSS/transition-timing-function), e.g., linearly or quick at the beginning, slow at the end).

## Which CSS properties can be transitioned?

The Web author can define which property has to be animated and in which way. This allows the creation of complex transitions. However, some properties are [not animatable](/en-US/docs/Web/CSS/CSS_animated_properties) as it doesn't make sense to animate them.

> [!NOTE]
> The `auto` value is often a very complex case. The specification recommends not animating from and to `auto`. Some user agents, like those based on Gecko, implement this requirement and others, like those based on WebKit, are less strict. Using animations with `auto` may lead to unpredictable results, depending on the browser and its version, and should be avoided.

## Defining transitions

CSS Transitions are controlled using the shorthand {{cssxref("transition")}} property. This is the best way to configure transitions, as it makes it easier to avoid out of sync parameters, which can be very frustrating to have to spend lots of time debugging in CSS.

You can control the individual components of the transition with the following sub-properties:

- {{cssxref("transition-property")}}
  - : Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.
- {{cssxref("transition-duration")}}
  - : Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time.
- {{cssxref("transition-timing-function")}}
  - : Specifies a function to define how intermediate values for properties are computed. _Easing functions_ determine how intermediate values of the transition are calculated. Most [easing functions](/en-US/docs/Web/CSS/easing-function) can be specified by providing the graph of the corresponding function, as defined by four points defining a cubic bezier. You can also choose easing from [Easing functions cheat sheet](https://easings.net/).
- {{cssxref("transition-delay")}}
  - : Defines how long to wait between the time a property is changed and the transition actually begins.

The `transition` shorthand CSS syntax is written as follows:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Examples

### Basic example

This example performs a four-second font size transition with a two-second delay between the time the user mouses over the element and the beginning of the animation effect:

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

### Multiple animated properties example

```html hidden
<body>
  <p>
    The box below combines transitions for: width, height, background-color,
    rotate. Hover over the box to see these properties animated.
  </p>
  <div class="box">Sample</div>
</body>
```

#### CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: 180deg;
}
```

{{EmbedLiveSample('Multiple_animated_properties_example', 600, 300)}}

### When property value lists are of different lengths

If any property's list of values is shorter than the others, its values are repeated to make them match. For example:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

This is treated as if it were:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Similarly, if any property's value list is longer than that for {{cssxref("transition-property")}}, it's truncated, so if you have the following CSS:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

This gets interpreted as:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Using transitions when highlighting menus

A common use of CSS is to highlight items in a menu as the user hovers the mouse cursor over them. It's easy to use transitions to make the effect even more attractive.

First, we set up the menu using HTML:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Then we build the CSS to implement the look and feel of our menu:

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333;
  color: #fff;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #fff;
  color: #333;
}
```

This CSS establishes the look of the menu, with the background and text colors both changing when the element is in its {{cssxref(":hover")}} and {{cssxref(":focus")}} states:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Transitioning display and content-visibility

This example demonstrates how [`display`](/en-US/docs/Web/CSS/display) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility) can be transitioned. This behavior is useful for creating entry/exit animations where you want to for example remove a container from the DOM with `display: none`, but have it fade out with [`opacity`](/en-US/docs/Web/CSS/opacity) rather than disappearing immediately.

Supporting browsers transition `display` and `content-visibility` with a variation on the [discrete animation type](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). This generally means that properties will flip between two values 50% through animating between the two.

There is an exception, however, which is when animating to/from `display: none` or `content-visibility: hidden`. In this case, the browser will flip between the two values so that the transitioned content is shown for the entire animation duration.

So for example:

- When animating `display` from `none` to `block` (or another visible `display` value), the value will flip to `block` at `0%` of the animation duration so it is visible throughout.
- When animating `display` from `block` (or another visible `display` value) to `none`, the value will flip to `none` at `100%` of the animation duration so it is visible throughout.

When transitioning these properties [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) needs to be set on the transitions. This effectively enables `display`/`content-visibility` transitions.

When transitioning `display`, [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) is needed to provide a set of starting values for properties set on an element that you want to transition from when the element receives its first style update. This is needed to avoid unexpected behavior. By default, CSS transitions are not triggered on elements' first style updates when they first appear in the DOM, which includes when `display` changes from `none` to another state. `content-visibility` animations do not need starting values specified in a `@starting-style` block. This is because `content-visibility` doesn't hide an element from the DOM like `display` does: it just skips rendering the element's content.

#### HTML

The HTML contains two {{htmlelement("p")}} elements with a {{htmlelement("div")}} in between that we will animate from `display` `none` to `block`.

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that transitions between
  <code>display: none; opacity: 0</code> and
  <code>display: block; opacity: 1</code>. Neat, huh?
</div>

<p>
  This is another paragraph to show that <code>display: none;</code> is being
  applied and removed on the above <code>&lt;div&gt; </code>. If only its
  <code>opacity</code> was being changed, it would always take up the space in
  the DOM.
</p>
```

#### CSS

```css
html {
  height: 100vh;
}

div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  display: none;
  opacity: 0;
  transition:
    opacity 1s,
    display 1s allow-discrete;
  /* Equivalent to
  transition: all 1s allow-discrete; */
}

.showing {
  opacity: 1;
  display: block;
}

@starting-style {
  .showing {
    opacity: 0;
  }
}
```

Note the `@starting-style` block used to specify the starting style for the transition, and the inclusion of the `display` property in the transitions list, with `allow-discrete` set on it.

#### JavaScript

Finally, we include a bit of JavaScript to set up event listeners to trigger the transition (via the `showing` class).

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  divElem.classList.toggle("showing");
}
```

#### Result

The code renders as follows:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript examples

> [!NOTE]
> Care should be taken when using a transition immediately after:
>
> - adding the element to the DOM using `.appendChild()`
> - removing an element's `display: none;` property.
>
> This is treated as if the initial state had never occurred and the element was always in its final state. The easy way to overcome this limitation is to apply a `setTimeout()` of a handful of milliseconds before changing the CSS property you intend to transition to.

### Using transitions to make JavaScript functionality smooth

Transitions are a great tool to make things look much smoother without having to do anything to your JavaScript functionality. Take the following example.

```html live-sample___js-transitions
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>

<script>
  // Make the ball move to a certain position:
  const f = document.getElementById("foo");
  document.addEventListener(
    "click",
    (ev) => {
      f.style.transform = `translateY(${ev.clientY - 25}px)`;
      f.style.transform += `translateX(${ev.clientX - 25}px)`;
    },
    false,
  );
</script>
```

With CSS, you can smooth the styles applied through JavaScript. Add a transition to the element and any change will happen smoothly:

```css hidden live-sample___js-transitions
body {
  background-color: #fff;
  color: #333;
  font:
    1.2em / 1.5 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 0;
  margin: 0;
}

p {
  margin-top: 3em;
}

main {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  height: 400px;
  border: 1px solid #ccc;
  padding: 20px;
}
```

```css live-sample___js-transitions
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedLiveSample("js-transitions", "", "400px")}}

### Detecting the start and completion of a transition

You can use the {{domxref("Element/transitionend_event", "transitionend")}} event to detect that an animation has finished running. This is a {{domxref("TransitionEvent")}} object, which has two added properties beyond a typical {{domxref("Event")}} object:

- `propertyName`
  - : A string indicating the name of the CSS property whose transition completed.
- `elapsedTime`
  - : A float indicating the number of seconds the transition had been running at the time the event fired. This value isn't affected by the value of {{cssxref("transition-delay")}}.

As usual, you can use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method to monitor for this event:

```js
el.addEventListener("transitionend", updateTransition, true);
```

You detect the beginning of a transition using {{domxref("Element/transitionrun_event", "transitionrun")}} (fires before any delay) and {{domxref("Element/transitionstart_event", "transitionstart")}} (fires after any delay), in the same kind of fashion:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> The `transitionend` event doesn't fire if the transition is aborted before the transition is completed because either the element is made {{cssxref("display", "display: none")}} or the animating property's value is changed.

## Specifications

{{Specifications}}

## See also

- The {{domxref("TransitionEvent")}} interface and the {{domxref("Element/transitionend_event", "transitionend")}} event
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
