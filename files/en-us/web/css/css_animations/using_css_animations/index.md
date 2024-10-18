---
title: Using CSS animations
slug: Web/CSS/CSS_animations/Using_CSS_animations
page-type: guide
---

{{CSSRef}}

**CSS animations** make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components: a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints.

There are three key advantages to CSS animations over traditional script-driven animation techniques:

1. They're easy to use for simple animations; you can create them without even having to know JavaScript.
2. The animations run well, even under moderate system load. Simple animations can often perform poorly in JavaScript. The rendering engine can use frame-skipping and other techniques to keep the performance as smooth as possible.
3. Letting the browser control the animation sequence lets the browser optimize performance and efficiency by, for example, reducing the update frequency of animations running in tabs that aren't currently visible.

## Configuring an animation

To create a CSS animation sequence, you style the element you want to animate with the {{cssxref("animation")}} property or its sub-properties. This lets you configure the timing, duration, and other details of how the animation sequence should progress. This does **not** configure the actual appearance of the animation, which is done using the {{cssxref("@keyframes")}} at-rule as described in the [Defining animation sequence using keyframes](#defining_an_animation_sequence_using_keyframes) section below.

The sub-properties of the {{cssxref("animation")}} property are:

- {{cssxref("animation-composition")}}
  - : Specifies the {{Glossary("composite operation")}} to use when multiple animations affect the same property simultaneously. This property is not part of the `animation` shorthand property.
- {{cssxref("animation-delay")}}
  - : Specifies the delay between an element loading and the start of an animation sequence and whether the animation should start immediately from its beginning or partway through the animation.
- {{cssxref("animation-direction")}}
  - : Specifies whether an animation's first iteration should be forward or backward and whether subsequent iterations should alternate direction on each run through the sequence or reset to the start point and repeat.
- {{cssxref("animation-duration")}}
  - : Specifies the length of time in which an animation completes one cycle.
- {{cssxref("animation-fill-mode")}}
  - : Specifies how an animation applies styles to its target before and after it runs.
    > [!NOTE]
    > In the case of animation [forwards](/en-US/docs/Web/CSS/animation-fill-mode#forwards) fill mode, animated properties behave as if included in a set [`will-change`](/en-US/docs/Web/CSS/will-change) property value. If a new stacking context was created during the animation, the target element retains the stacking context after the animation has finished.
- {{cssxref("animation-iteration-count")}}
  - : Specifies the number of times an animation should repeat.
- {{cssxref("animation-name")}}
  - : Specifies the name of the {{cssxref("@keyframes")}} at-rule describing an animation's keyframes.
- {{cssxref("animation-play-state")}}
  - : Specifies whether to pause or play an animation sequence.
- {{cssxref("animation-timeline")}}
  - : Specifies the timeline that is used to control the progress of a CSS animation.
- {{cssxref("animation-timing-function")}}
  - : Specifies how an animation transitions through keyframes by establishing acceleration curves.

## Defining an animation sequence using keyframes

After you've configured the animation's timing, you need to define the appearance of the animation. This is done by establishing one or more keyframes using the {{cssxref("@keyframes")}} at-rule. Each keyframe describes how the animated element should render at a given time during the animation sequence.

Since the timing of the animation is defined in the CSS style that configures the animation, keyframes use a {{cssxref("percentage")}} to indicate the time during the animation sequence at which they take place. 0% indicates the first moment of the animation sequence, while 100% indicates the final state of the animation. Because these two times are so important, they have special aliases: `from` and `to`. Both are optional. If `from`/`0%` or `to`/`100%` is not specified, the browser starts or finishes the animation using the computed values of all attributes.

You can optionally include additional keyframes that describe intermediate steps between the start and end of the animation.

## Using the animation shorthand

The {{cssxref("animation")}} shorthand is useful for saving space. As an example, some of the rules we've been using through this article:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...could be replaced by using the `animation` shorthand.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

To learn more about the sequence in which different animation property values can be specified using the `animation` shorthand, see the {{cssxref("animation")}} reference page.

## Setting multiple animation property values

The CSS animation longhand properties can accept multiple values, separated by commas. This feature can be used when you want to apply multiple animations in a single rule and set different durations, iteration counts, etc., for each of the animations. Let's look at some quick examples to explain the different permutations.

In this first example, there are three duration and three iteration count values. So each animation is assigned a value of duration and iteration count with the same position as the animation name. The `fadeInOut` animation is assigned a duration of `2.5s` and an iteration count of `2`, and the `bounce` animation is assigned a duration of `1s` and an iteration count of `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

In this second example, three animation names are set, but there's only one duration and iteration count. In this case, all three animations are given the same duration and iteration count.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

In this third example, three animations are specified, but only two durations and iteration counts. In such cases where there are not enough values in the list to assign a separate one to each animation, the value assignment cycles from the first to the last item in the available list and then cycles back to the first item. So, `fadeInOut` gets a duration of `2.5s`, and `moveLeft300px` gets a duration of `5s`, which is the last value in the list of duration values. The duration value assignment now resets to the first value; `bounce`, therefore, gets a duration of `2.5s`. The iteration count values (and any other property values you specify) will be assigned in the same way.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

If the mismatch in the number of animations and animation property values is inverted, say there are five `animation-duration` values for three `animation-name` values, then the extra or unused animation property values, in this case, two `animation-duration` values, don't apply to any animation and are ignored.

## Examples

> [!NOTE]
> Some older browsers (pre-2017) may need prefixes; the live examples you can click to see in your browser include the `-webkit` prefixed syntax.

### Making text slide across the browser window

This basic example styles a {{HTMLElement("p")}} element using the {{cssxref("translate")}} and {{cssxref("scale")}} transition properties so that the text slides in from off the right edge of the browser window.

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

In this example, the style for the {{HTMLElement("p")}} element specifies that the animation should take 3 seconds to execute from start to finish, using the {{cssxref("animation-duration")}} property and that the name of the {{ cssxref("@keyframes")}} at-rule defining the keyframes for the animation sequence is `slide-in`.

In this case, we have just two keyframes. The first occurs at `0%` (using the alias `from`). Here, we configure the {{cssxref("translate")}} property of the element to be at `150vw` (that is, beyond the far right edge of the containing element), and the {{cssxref("scale")}} of the element to be 200% (or two times its default inline size), causing the paragraph to be twice as wide as its `<body>` containing block. This causes the first frame of the animation to have the header drawn off the right edge of the browser window.

The second keyframe occurs at `100%` (using the alias `to`). The {{cssxref("translate")}} property is set to `0%` and the {{cssxref("scale")}} of the element is set to `1`, which is `100%`. This causes the header to finish its animation in its default state, flush against the left edge of the content area.

```html
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

> [!NOTE]
> Reload page to see the animation.

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### Adding another keyframe animation

Let's add another keyframe to the previous example's animation. Let's say we want Alice's name to turn pink and grow and then shrink back to its original size and color as it moves from right to left. While we could change the {{cssxref("font-size")}}, changing any properties that impact the box model negatively impacts performance. Instead, we wrap her name in a {{htmlelement("span")}} and then scale and assign a color to that separately. That requires adding a second animation impacting only the `<span>`:

```css
@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

The full code now looks like this:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}
p span {
  display: inline-block;
  animation-duration: 3s;
  animation-name: grow-shrink;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

We've added a {{htmlelement("span")}} around "Alice":

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

This tells the browser the name should be normal for the first and last 25% of the animation, but turn pink while being scaled up and back again in the middle. We set the spans's {{cssxref("display")}} property to `inline-block` as the `transform` properties do not affect non-replaced {{glossary("inline-level content")}}.

> [!NOTE]
> Reload page to see the animation.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Repeating the animation

To make the animation repeat itself, use the {{cssxref("animation-iteration-count")}} property to indicate how many times to repeat the animation. In this case, let's use `infinite` to have the animation repeat indefinitely:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("Repeating_the_animation","100%","250")}}

### Making the animation move back and forth

That made it repeat, but it's very odd having it jump back to the start each time it begins animating. What we really want is for it to move back and forth across the screen. That's easily accomplished by setting {{cssxref("animation-direction")}} to `alternate`:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("Making_the_animation_move_back_and_forth","100%","250")}}

### Using animation events

You can get additional control over animations — as well as useful information about them — by making use of animation events. These events, represented by the {{domxref("AnimationEvent")}} object, can be used to detect when animations start, finish, and begin a new iteration. Each event includes the time at which it occurred as well as the name of the animation that triggered the event.

We'll modify the sliding text example to output some information about each animation event when it occurs, so we can get a look at how they work.

We've included the same keyframe animation as the previous example. This animation will last 3 seconds, be called "slide-in", repeat 3 times, and travel in an alternate direction each time. In the {{cssxref("@keyframes")}}, the scale and translation are manipulated along the x-axis to make the element slide across the screen.

```css
.slide-in {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

#### Adding the animation event listeners

We'll use JavaScript code to listen for all three possible animation events. This code configures our event listeners; we call it when the document is first loaded in order to set things up.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

This is pretty standard code; you can get details on how it works in the documentation for {{domxref("eventTarget.addEventListener()")}}. The last thing this code does is set the `class` on the element we'll be animating to "slide-in"; we do this to start the animation.

Why? Because the `animationstart` event fires as soon as the animation starts, and in our case, that happens before our code runs. So we'll start the animation ourselves by setting the class of the element to the style that gets animated after the fact.

#### Receiving the events

The events get delivered to the `listener()` function, which is shown below.

```js
function listener(event) {
  const l = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `New loop started at time ${event.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

This code, too, is very simple. It looks at the {{domxref("event.type")}} to determine which kind of animation event occurred, then adds an appropriate note to the {{HTMLElement("ul")}} (unordered list) we're using to log these events.

The output, when all is said and done, looks something like this:

- Started: elapsed time is 0
- New loop started at time 3.01200008392334
- New loop started at time 6.00600004196167
- Ended: elapsed time is 9.234000205993652

Note that the times are very close to, but not exactly, those expected given the timing established when the animation was configured. Note also that after the final iteration of the animation, the `animationiteration` event isn't sent; instead, the `animationend` event is sent.

Just for the sake of completeness, here's the HTML that displays the page content, including the list into which the script inserts information about the received events:

```html
<h1 id="watch-me">Watch me move</h1>
<p>
  This example shows how to use CSS animations to make <code>H1</code>
  elements move across the page.
</p>
<p>
  In addition, we output some text each time an animation event fires, so you
  can see them in action.
</p>
<ul id="output"></ul>
```

And here's the live output.

> [!NOTE]
> Reload page to see the animation.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animating display and content-visibility

This example demonstrates how [`display`](/en-US/docs/Web/CSS/display) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility) can be animated. This behavior is useful for creating entry/exit animations where you want to for example remove a container from the DOM with `display: none`, but have it fade out smoothly with [`opacity`](/en-US/docs/Web/CSS/opacity) rather than disappearing immediately.

Supporting browsers animate `display` and `content-visibility` with a variation on the [discrete animation type](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). This generally means that properties will flip between two values 50% of the way through animating between the two.

There is an exception, however, which is when animating to/from `display: none` or `content-visibility: hidden` to a visible value. In this case, the browser will flip between the two values so that the animated content is shown for the entire animation duration.

So for example:

- When animating `display` from `none` to `block` (or another visible `display` value), the value will flip to `block` at `0%` of the animation duration so it is visible throughout.
- When animating `display` from `block` (or another visible `display` value) to `none`, the value will flip to `none` at `100%` of the animation duration so it is visible throughout.

#### HTML

The HTML contains two {{htmlelement("p")}} elements with a {{htmlelement("div")}} in between that we will animate from `display` `none` to `block`.

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that animates between
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
  opacity: 0;
  display: none;
}

/* Animation classes */

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
  animation: fade-out 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
```

Note the inclusion of the `display` property in the keyframe animations.

#### JavaScript

Finally, we include a bit of JavaScript to set up event listeners to trigger the animations. Specifically, we add the `fade-in` class to the `<div>` when we want it to appear, and `fade-out` when we want it to disappear.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}
```

#### Result

The code renders as follows:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## See also

- {{domxref("AnimationEvent", "AnimationEvent")}}
- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Using the Web Animations API](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
