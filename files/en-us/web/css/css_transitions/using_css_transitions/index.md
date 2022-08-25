---
title: Using CSS transitions
slug: Web/CSS/CSS_Transitions/Using_CSS_transitions
tags:
  - Advanced
  - CSS
  - CSS Transitions
  - Guide
spec-urls: https://drafts.csswg.org/css-transitions/
---
{{CSSRef}}

**CSS transitions** provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

Animations that involve transitioning between two states are often called _implicit transitions_ as the states in between the start and final states are implicitly defined by the browser.

![A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.](transitionsprinciple.png)

CSS transitions let you decide which properties to animate (by _listing them explicitly_), when the animation will start (by setting a _delay)_, how long the transition will last (by setting a _duration_), and how the transition will run (by defining a _timing function_, e.g. linearly or quick at the beginning, slow at the end).

## Which CSS properties can be transitioned?

The Web author can define which property has to be animated and in which way. This allows the creation of complex transitions. As it doesn't make sense to animate some properties, the [list of animatable properties](/en-US/docs/Web/CSS/CSS_animated_properties) is limited to a finite set.

> **Note:** The set of properties that can be animated is changing as the specification develops.

> **Note:** The `auto` value is often a very complex case. The specification recommends not animating from and to `auto`. Some user agents, like those based on Gecko, implement this requirement and others, like those based on WebKit, are less strict. Using animations with `auto` may lead to unpredictable results, depending on the browser and its version, and should be avoided.

## Defining transitions

CSS Transitions are controlled using the shorthand {{cssxref("transition")}} property. This is the best way to configure transitions, as it makes it easier to avoid out of sync parameters, which can be very frustrating to have to spend lots of time debugging in CSS.

You can control the individual components of the transition with the following sub-properties:

- {{cssxref("transition-property")}}
  - : Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.
- {{cssxref("transition-duration")}}
  - : Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time.
- {{cssxref("transition-timing-function")}}
  - : Specifies a function to define how intermediate values for properties are computed. _Timing functions_ determine how intermediate values of the transition are calculated. Most [timing functions](/en-US/docs/Web/CSS/easing-function) can be specified by providing the graph of the corresponding function, as defined by four points defining a cubic bezier. You can also choose easing from [Easing Functions Cheat Sheet](https://easings.net/).
- {{cssxref("transition-delay")}}
  - : Defines how long to wait between the time a property is changed and the transition actually begins.

The `transition` shorthand CSS syntax is written as follows:

```css
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

## Examples

### Simple example

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
    <p>The box below combines transitions for: width, height, background-color, transform. Hover over the box to see these properties animated.</p>
    <div class="box">Sample</div>
</body>
```

#### CSS Content

```css
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
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

## JavaScript examples

> **Note:** Care should be taken when using a transition immediately after:
>
> - adding the element to the DOM using `.appendChild()`
> - removing an element's `display: none;` property.
>
> This is treated as if the initial state had never occurred and the element was always in its final state. The easy way to overcome this limitation is to apply a `setTimeout()` of a handful of milliseconds before changing the CSS property you intend to transition to.

### Using transitions to make JavaScript functionality smooth

Transitions are a great tool to make things look much smoother without having to do anything to your JavaScript functionality. Take the following example.

```html
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
```

Using JavaScript you can make the effect of moving the ball to a certain position happen:

```js
const f = document.getElementById('foo');
document.addEventListener('click', (ev) => {
  f.style.transform = `translateY(${ev.clientY - 25}px)`;
  f.style.transform += `translateX(${ev.clientX - 25}px)`;
}, false);
```

With CSS you can make it smooth without any extra effort. Add a transition to the element and any change will happen smoothly:

```css
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

{{EmbedGHLiveSample("css-examples/transitions/js-transitions.html", '100%', 500)}}

### Detecting the start and completion of a transition

You can use the {{domxref("HTMLElement/transitionend_event", "transitionend")}} event to detect that an animation has finished running. This is a {{domxref("TransitionEvent")}} object, which has two added properties beyond a typical {{domxref("Event")}} object:

- `propertyName`
  - : A string indicating the name of the CSS property whose transition completed.
- `elapsedTime`
  - : A float indicating the number of seconds the transition had been running at the time the event fired. This value isn't affected by the value of {{cssxref("transition-delay")}}.

As usual, you can use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method to monitor for this event:

```js
el.addEventListener("transitionend", updateTransition, true);
```

You detect the beginning of a transition using {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} (fires before any delay) and {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} (fires after any delay), in the same kind of fashion:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> **Note:** The `transitionend` event doesn't fire if the transition is aborted before the transition is completed because either the element is made {{cssxref("display")}}`: none` or the animating property's value is changed.

## Specifications

{{Specifications}}

## See also

- The {{domxref("TransitionEvent")}} interface and the {{domxref("HTMLElement/transitionend_event", "transitionend")}} event.
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
