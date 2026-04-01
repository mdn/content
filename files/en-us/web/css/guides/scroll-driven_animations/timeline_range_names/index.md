---
title: Understanding timeline range names
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
page-type: guide
sidebar: cssref
---

By default, [view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) track elements across the entire scrollport. The animation timeline begins when the first pixel of the element's start edge crosses the scrollport's end edge, and ends when the element's end edge crosses the scrollport's start edge. You can change this default animation attachment range. For example, you can restrict the view progress timeline to begin only when the subject element has fully entered the scrollport.

This guide explains how to modify timeline range names, specifically examining the various timeline range names, their meanings, and how they are used.

<!--Limiting the animation timeline to a specific portion of an named animation timeline range is discussed in the [insetting scroll animations guide](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets).-->

## View progress timeline primer

[CSS animations](/en-US/docs/Web/CSS/Guides/Animations) are created by attaching {{cssxref("@keyframes")}} animations to an element using the {{cssxref("animation-name")}} property (or {{cssxref("animation")}} shorthand). The keyframes define the animation's behavior, while the {{cssxref("animation-timeline")}} determines when and how the element progresses through those keyframes.

By default, the animation's timeline is the document's default time-based {{domxref("DocumentTimeline")}}. With [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines), the animation's timeline, or progress, is driven either by user scroll ([scroll progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)) or element visibility ([view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)), instead of the passage of time.

With view progress timelines, keyframe progression is tied to how much of the subject element is visible within the scroller, and its position within the scroller. As the element enters the viewport, the timeline advances. If the user reverses the scrolling, the timeline reverses. In other words, as the element comes into or moves out of view, the timeline progresses or reverses, respectively. The animation only occurs when the subject is visible within its scrollport. If scrolling stops while the element is in view, the animation pauses.

### Default view progress timeline

By default, the [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)'s progression starts when the tracked subject's start edge intersects the scrollport at the end edge and ends when the subject's end edge exits the scrollport at the start edge. These are the subject and scrollport's top and bottom edges when scrolling vertically, and the left and right or right and left edges when scrolling horizontally, depending on the writing mode.

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
<main>
  <article>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Scroll down ⇩</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section class="one animated_element">
      <div>
        <i>Animated Element</i>
        <span></span>
      </div>
    </section>
    <section class="double">
      <div>
        <i id="A" class="animated_element">A</i>
        <i id="B" class="animated_element">B</i>
      </div>
    </section>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Scroll up ⇧</p>
  </article>
</main>
```

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
<fieldset>
  <legend>Select the height of the animated element</legend>

  <label><input name="height" value="50" type="radio" checked /> 50px</label>
  <label><input name="height" value="250" type="radio" /> 250px</label>
  <label><input name="height" value="500" type="radio" /> 500px</label>
</fieldset>
```

```css hidden live-sample___initial live-sample___entry_exit live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
:root {
  --animElHeight: 50px;
  --animElHeightWord: "50px";
}
body:has(input[value="250"]:checked) {
  --animElHeight: 250px;
  --animElHeightWord: "250px";
}
body:has(input[value="500"]:checked) {
  --animElHeight: 500px;
  --animElHeightWord: "500px";
}
main {
  padding: 20px 0 0 20px;
  margin-bottom: 2em;
}
article {
  outline: 3px dashed;
  width: 500px;
  margin: auto;
  overflow: scroll;
  position: relative;
  height: 250px;
  box-sizing: content-box;
}

p {
  padding: 10px;
  margin: 10px;
}

section {
  --clr: yellow;
  --words: "Animation not started";
  position: relative;
  margin: 20px;
  text-align: center;
}
.one,
.double i {
  animation: showAnim step-end 1 forwards;
  animation-timeline: view();
}
i {
  background-color: hsl(from var(--clr) h s calc(l * 1.4));
  display: block;
  height: var(--animElHeight);
  line-height: var(--animElHeight);
}
span {
  background-color: hsl(from var(--clr) h s 90%);
  border: 5px solid hsl(from var(--clr) h s 20%);
  min-width: 250px;
  height: 30px;
  line-height: 30px;
}
span,
i {
  font-family: sans-serif;
  font-size: 1.5rem;
}
span::before {
  content: var(--words);
}
span {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px;
}
i::after {
  content: " ( " var(--animElHeightWord) " )";
}
label {
  padding-right: 2em;
}
legend {
  margin-top: 2em;
}

@keyframes showAnim {
  from {
    --clr: green;
    --words: "Currently animating";
  }
  to {
    --clr: red;
    --words: "Animation complete";
  }
}
body::before {
  display: block;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5rem;
}

@layer no-support {
  @supports not (animation-timeline: view()) {
    body::before {
      content: "Your browser doesn't support view progress scrolling.";
      background-color: wheat;
      display: block;
      text-align: center;
    }
  }
}
```

```css hidden live-sample___initial live-sample___inset_cover live-sample___contains live-sample___inset_contain
.double {
  display: none;
}
```

```css hidden live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing live-sample___entry_exit
.one {
  display: none;
}
.double div {
  display: flex;
  gap: 10px;
}
```

In the following example, try scrolling down. Note how the animation begins just as the top edge of the animated element aligns with the bottom edge of the scroll container and ends, reaching `100%` progress, when the bottom edge aligns with the top edge of the container, no matter how tall the animated element is.

{{EmbedLiveSample("initial", "100%", "400")}}

The scroll container's writing mode and scroll direction determine the scroll container's start and end edges.

## The animation attachment range

By default, the element is animated the entire time any portion of the subject element is visible. This means the default **animation attachment range** is the sum of the height of the scroll container and the height of the subject element, with that extra height being at the scroll end edge.

In the previous example, the scroll container is `250px` tall, and the animated element is `50px` tall by default, which means the vertical animation attachment range is `300px` tall. When the subject is set to `250px`, the range becomes `500px`; when the element is set to `500px`, the animation attachment range size grows to `750px`.

The [CSS scroll driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module provides mechanisms for defining different animation attachment ranges. The {{cssxref("animation-range-start")}} and {{cssxref("animation-range-end")}} properties, which can both be set using the {{cssxref("animation-range")}} shorthand, define the attachment range for the animation range's start edge and the end edge, along with any insets from either edge, respectively.

The animation-range properties accept the keyword `normal`, a {{cssxref("timeline-range-name")}}, a {{cssxref("length-percentage")}}, or both a `<timeline-range-name>` and the `<length-percentage>`. In this guide, we are covering the values for the `<timeline-range-name>` component of the value only.

<!--The length-percentage values, such as `20%` or `100px`, inset the animation timeline from the named animation attachment ranges, by the set amount, with the value defaulting to `0`. This is covered in xxx.-->

## Timeline range names

The `<timeline-range-name>` value type accepts six keywords: `cover`, `contain`, `entry`, `exit`, `entry-crossing`, and `exit-crossing`. Each of these represents a predefined _named timeline range_. A named timeline range is a named segment of an animation timeline. These keywords allow the developer to set the animation attachment range base that offsets are relative to. The start of the segment is represented as `0%` progress through the range; the end of the segment is represented as `100%` progress through the range. Where these points are depends on the named range used.

### Cover

The animation attachment range in the previous examples all "cover" the entire range. This range represents the full range of the view progress timeline. `0%` progress represents the point at which the start border edge of the subject aligns with the end edge of the scrollport, and `100%` progress represents the point where the subject's end border edge reaches the start edge of the scrollport. As we've seen, the size of the `cover` range is the sum of subject and scrollport dimensions in the scroll direction. In all the examples thus far, the height of the animation attachment range is the height of the container plus the height of the animated element.

The `cover` named timeline range is the default range. We could have explicitly set the `<timeline-range-name>` to achieve the same results:

```css
.animated_element {
  animation-range-start: cover;
  animation-range-end: cover;
}
```

```html hidden live-sample___svg_cover
<div>
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="625" x="5">cover</text>
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_cover", "100%", "720")}}

The image demonstrates the animation timeline. The location of the element when it reaches the start of the animation attachment range's `0%` mark is shown as a yellow block. This represents the element position when the `from` keyframe is applied. The red block represents the location of the subject element relative to the scrollport when the `to` keyframe is applied. This is the position of the animated element when it reaches the end of the animation.

Depending on the size of the subject element and the chosen timeline range, the start and end positions may overlap. Areas of overlap (as seen in subsequent diagrams) will be represented by striped red and yellow areas.

### Contain

The `contain` named timeline range fully _contains_ the animation within the scrollport — the range starts when the animated element is 100% visible and ends when it ceases to be fully visible, if it can be fully visible.

The `contain` value represents the range during which the principal box is either fully contained by or fully covers its view progress visibility range within the scrollport, depending on whether the subject element is smaller (can be fully contained by) or larger than the scrollport.

- If the element is smaller than the scrollport in the scroll direction, `0%` occurs when the animated element's end border edge aligns with the end edge of the scrollport, and `100%` occurs when the animated element's start border edge aligns with the start edge of the scrollport. In other words, the `contain` value ranges from the point where the subject element is first completely contained by the scroll port (`0%`), to the point where it is no longer completely contained by the scroll port (`100%`).

- If the element is larger than the scrollport, the `0%` progress is when the animated element's start border edge reaches the start edge of the scrollport, and `100%` is when the end border edge aligns with the end edge. In other words, if the animation is larger than its container, the animated element is never fully visible as it is not "contained" within the scrollport. The animation starts when the start edge reaches the start edge of the scrollport, and ends when the animated element's end edge reaches the end edge of the container.

- If the animated element is the same size as its container, the animation still happens, but over `0px`, which is not visible to the user.

```css live-sample___contains
.animated_element {
  animation-range: contain;
}
```

```css hidden live-sample___contains
body::before {
  content: "Contain";
}
```

{{EmbedLiveSample("contains", "100%", "400")}}

In this example, the original height of the animated element is 20% of the height of the scrollport, and therefore can be completely contained within it. As a result, as explained earlier, the animation should start as soon as the element starts to enter the scrollport, and finish as soon as it begins to leave the scrollport.

If you check the `500px` radio button, the subject becomes twice as tall as the scrollport. The animation range begins when the subject element first completely covers the scroll port, with the `0%` occurring when the start edge reaches the start edge of the container. It ends when the element no longer completely covers the scrollport, with the `100%` occurring when the end edge crosses the container's end edge.

When the subject is the same size as the scroll container, as occurs when `250px` is selected, the animation still occurs, but over `0px`. As the `0%` and `100%` occur at the same time, the animation is instantaneous. The difference in styling is only perceivable because the properties defined in the `100%` keyframe state are applied after the animation ends. This is because the {{cssxref("animation-fill-mode")}} property is set to `forwards`. Otherwise, the middle-sized `250px` subject, being the same height as the scroll container, would appear not to animate at all.

```html hidden live-sample___svg_contain
<div>
  <svg viewBox="-1 -1 462 1000" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="500" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="500" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="700" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="250" />
    <rect width="100" height="250" x="120" y="500" fill="url(#g)" />
    <rect width="100" height="250" x="230" y="500" fill="url(#g)" />
    <text y="460" x="10">contain</text>
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

```css hidden live-sample___svg_contain
body div,
body svg {
  margin: -60px 0 -300px;
}
```

{{EmbedLiveSample("svg_contain", "100%", "450")}}

The animation occurs when the element is within the areas represented by the white of the container in the `50px` example and by the red/yellow areas in the `250px` and `500px` examples.

It may be helpful for some to compare and contrast the `cover` and `contain` values. We can use the shorthand `animation-range` property to set the `animation-range-start` and `animation-range-end` properties to the same `<animation-name-range>` value:

```css live-sample___cover_contain
#A {
  animation-range: contain;
}
#B {
  animation-range: cover;
}
```

```css hidden live-sample___cover_contain
body::before {
  content: "contain vs cover";
}
#A,
#B {
  width: 140px;
}
#A::after {
  content: " ( contain )";
}
#B::after {
  content: " ( cover ) ";
}
```

{{EmbedLiveSample("cover_contain", "100%", "420")}}

Select different radio buttons and scroll the scrollport to compare the effects of the `cover` and `contain` values on animation timelines.

Let's look at the other `<timeline-range-name>` keyword values!

### Entry and exit

To make the entire animation happen only when the subject is in the process of entering or exiting the scrollport, use the `entry` or `exit` values, respectively. With these two values, the animation attachment range is based on the size of the animated element, not the size of the scrollport.

#### Entry

With `entry`, `0%` progress occurs the moment the animated element starts to enter the scrollport, when the subject's start edge crosses the scrollport's end edge.

The entire animation occurs as the subject comes into view, ending when it becomes completely visible or when it reaches the start edge; whichever occurs first. If the animated element is smaller than the scrollport, the animation attachment range is the size of the subject.

{{EmbedLiveSample("svg_entry_only", "100%", "500")}}

The position at `0%` progress is shown in yellow. The position at `100%` progress is displayed in red. When the animated element is larger than the scrollport, these two positions overlap, which is denoted by a striped background.

With `entry`, the animation attachment range is either the size of the animated element or the size of the container, whichever is smaller. If the subject is larger than the scrollport, the animation attachment range is the entire scrollport. With `entry`, the `100%` occurs when the subject's end edge crosses the end edge of the scrollport or, if the animated element is larger than the scrollport in the scroll direction, when the animated element's start edge reaches the start edge of the scrollport.

Setting `animation-range-start: entry` is the same as setting `animation-range-start: cover`.
Setting `animation-range-end: entry` is equivalent to setting `animation-range-end: contain`.

```html hidden live-sample___svg_entry_only
<div>
  <svg viewBox="-60 400 530 980" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="700" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="500" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="120" y="750" />
    <rect class="large start" width="100" height="500" x="230" y="750" />
    <rect width="100" height="250" x="230" y="750" fill="url(#g)" />
    <text y="460" x="10">entry</text>
    <text y="520" x="360">100%</text>
    <text y="690" x="-50">100%</text>
    <line x1="130" x2="350" y1="500" y2="500" />
    <line x1="-10" x2="120" y1="700" y2="700" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

#### Exit

The `exit` value is the inverse of `entry`.
With `exit`, the attachment range starts when the animated element's start edge crosses the scrollport's start edge.

```html hidden live-sample___svg_exit_only
<div>
  <svg viewBox="-60 -1 530 800" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="120" y="250" />
    <rect class="large end" width="100" height="500" x="230" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="501" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="250" />
    <rect width="100" height="250" x="230" y="250" fill="url(#g)" />
    <text y="600" x="10">exit</text>
    <text y="520" x="370">100%</text>
    <line x1="-5" x2="365" y1="500" y2="500" />
    <line x1="-10" x2="140" y1="550" y2="550" />
    <line x1="110" x2="360" y1="750" y2="750" />
    <text y="760" x="370">0%</text>
    <text y="560" x="-60">0%</text>
  </svg>
</div>
```

```css hidden live-sample___svg_entry_only live-sample___svg_exit_only
:root body div {
  margin: 0 0 -140px 0;
}
```

{{EmbedLiveSample("svg_exit_only", "100%", "460")}}

The `0%` progress occurs when the subject's start edge reaches the scrollport's start edge.
The `100%` progress occurs when the subject's end edge crosses the start edge.
Setting `animation-range-start: exit 0%` is equivalent to setting `animation-range-start: contain 100%`.
Setting `animation-range-end: exit 100%` is equivalent to `animation-range-end: cover 100%`.

#### Comparing entry and exit

It may help to take a look at `entry` and `exit` side-by-side to understand the effect the size of the subject has on the animation attachment range: with these two values, the animation attachment range is never larger than the container.

```css live-sample___entry_exit
#A {
  animation-range: entry;
}
#B {
  animation-range: exit;
}
```

```css hidden live-sample___entry_exit
body::before {
  content: "Entry and exit";
}
#A,
#B {
  width: 140px;
}
#A::after {
  content: " ( entry )";
}
#B::after {
  content: " ( exit ) ";
}
```

Scroll the viewbox to see the range of the `entry` and `exit` values, then change the size of the subjects using the radio buttons and scroll again.

{{EmbedLiveSample("entry_exit", "100%", "400")}}

When the subjects are small enough to be fully contained within the scrollport, the animation attachment timeline is at the start (`entry`) or end (`exit`) of the scrollport and the size of the attachment range is limited to the size of the animated element in the scroll direction.

With `entry` and `exit`, the animation range is contained to the size of the scrollport, while the element is not.

If the subject element is the size of the scrollport or larger:

- In the case of `entry`, the animation ends when the element fully covers the scrollport in the scroll direction.
- In the case of `exit`, the animation doesn't begin until, the element fully covers the scrollport in the scroll direction.

This may not be the effect you want. If you want an entry animation to keep running until the entire element has finished entering the start edge of the scrollport, or if you want an exit animation to start as soon as the element starts to exit the end edge of the scrollport, you need to use `entry-crossing` and `exit-crossing`.

### Entry- and exit-crossing

If the subject element is smaller than the scrollport, and you want the full animation to occur as it enters or exits the scrollport, you can happily use [`entry`](#entry) or [`exit`](#exit), respectively.

When the subject is larger than the scrollport, the animation doesn't run the full course of the element entering or exiting the scrollport. The `entry` value sets the `100%` progress to be when the element's start edge reaches the start-edge of the scrollport, before the element has fully entered the scrollport. With `exit`, the `0%` progress occurs when the element's end-edge reaches the scroll container's end edge, when part of the subject has already exited the scrollport. With both these values, the animation attachment range is smaller than the subject. If this isn't the effect you want, the `*-crossing` values may be the solution you seek.

#### Entry-crossing

The `entry-crossing` value represents the range during which the animated element crosses the end edge of the scrollport, with `0%` progress occurring when the element's start edge aligns with the end edge the scrollport and `100%` progress occurring when the element's end edge reaches the end edge of the scrollport, meaning it has finished fully scrolling into the scrollport.

{{EmbedLiveSample("svg_entry-crossing", "100%", "600")}}

It may be helpful to compare the two values in a live example.

```css live-sample___entry_crossing
#A {
  animation-range: entry;
}
#B {
  animation-range: entry-crossing;
}
```

```css hidden live-sample___entry_crossing
body::before {
  content: "entry vs. entry-crossing";
}
#A::after {
  content: " ( entry )";
}
#B::after {
  content: " ( entry-crossing ) ";
}
```

Select the the different height values, then scroll to compare `entry` with `entry-crossing` for each size.

{{EmbedLiveSample("entry_crossing", "100%", "400")}}

Note how the effects are similar, except for when the `500px` is selected and the animated element is taller than the container.
The `entry-crossing` range produces the same results as `entry` when the element is equal to or smaller than the scrollport, but when the element is larger than the scrollport, the `100%` occurs later, occurring only when the end edge has entered the view port.
The animation attachment range is the size of the subject, and not clamped to the size of the scrollport.

```html hidden live-sample___svg_entry-crossing
<div>
  <svg viewBox="-60 -1 530 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="700" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="500" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="120" y="750" />
    <rect class="large start" width="100" height="500" x="230" y="750" />
    <rect class="orange" width="100" height="250" x="230" y="750" fill="url(#g)" />
    <text y="460" x="10">entry</text>
    <text y="520" x="360">100%</text>
    <text y="690" x="-50">100%</text>
    <line x1="130" x2="350" y1="500" y2="500" />
    <line x1="-10" x2="120" y1="700" y2="700" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>

  <svg viewBox="-60 -1 530 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="700" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="250" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="120" y="750" />
    <rect class="large start" width="100" height="500" x="230" y="750" />
    <text y="200" x="0">entry-crossing</text>
    <text y="260" x="330">100%</text>
    <text y="490" x="80">100%</text>
    <text y="690" x="-50">100%</text>
    <line x1="225" x2="345" y1="250" y2="250" />
    <line x1n h0" x2="230" y1="500" y2="500" />
    <line x1="-10" x2="120" y1="700" y2="700" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

```css hidden hidden live-sample___svg_entry-crossing
:root body div {
  margin: -70px 0 -100px;
}
```

#### Exit-crossing

The `exit-crossing` value represents the range during which the animated element crosses the start edge of the scrollport, with `0%` progress occurring when the element's start edge aligns with the start edge the scrollport and `100%` progress occurring when the element's end edge reaches the start edge of the scrollport.

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

With `exit-crossing`, the animation starts as soon as the subject covers the scrollport (with `exit`, the animation doesn't start until the end edge of the subject enters into view). In both cases, the animation continues until the subject fully exits the scrollport's start edge.

```css live-sample___exit_crossing
#A {
  animation-range: exit;
}
#B {
  animation-range: exit-crossing;
}
```

```css hidden live-sample___exit_crossing
body::before {
  content: "exit vs. exit-crossing";
}
#A::after {
  content: " ( exit )";
}
#B::after {
  content: " ( exit-crossing ) ";
}
```

The `exit-crossing` produces the same results as `exit` when the element is equal to or smaller than the scrollport, but when the element is larger than the scrollport, the `0%` occurs earlier, occurring as soon as the element's start edge reaches the scrollport's start edge, rather than waiting until the element's end edge enters the scrollport.

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Like with `entry-crossing`, the animation attachment range is the size of the subject, and not clamped to the size of the scrollport.

```html hidden live-sample___svg_exit_crossing
<div>
  <svg viewBox="-60 -1 530 1052" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="120" y="250" />
    <rect class="large end" width="100" height="500" x="230" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="501" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="250" />
    <rect width="100" height="250" x="230" y="250" fill="url(#g)" />
    <text y="800" x="-10">exit</text>
    <text y="520" x="370">100%</text>
    <line x1="-5" x2="365" y1="500" y2="500" />
    <line x1="-10" x2="140" y1="550" y2="550" />
    <line x1="110" x2="360" y1="750" y2="750" />
    <text y="760" x="370">0%</text>
    <text y="560" x="-60">0%</text>
  </svg>
  <svg viewBox="-60 -1 530 1052" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="120" y="250" />
    <rect class="large end" width="100" height="500" x="230" y="0" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="501" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="500" />
    <text y="800" x="-10">exit-crossing</text>
    <text y="520" x="370">100%</text>
    <line x1="-5" x2="365" y1="500" y2="500" />
    <line x1="-10" x2="140" y1="550" y2="550" />
    <line x1="110" x2="360" y1="750" y2="750" />
    <text y="760" x="370">0%</text>
    <text y="560" x="-60">0%</text>
  </svg>
</div>
```

```css hidden hidden live-sample___svg_exit_crossing
:root body div {
  margin-bottom: -300px;
}
```

```html hidden live-sample___svg_exit_crossing live-sample___svg_entry_only live-sample___svg_exit_only live-sample___svg_contain live-sample___svg_cover live-sample___svg_entry-crossing
<svg id="gradient">
  <defs>
    <linearGradient
      id="g"
      x1="0"
      y1="0"
      x2="20"
      y2="20"
      spreadMethod="repeat"
      gradientUnits="userSpaceOnUse">
      <stop offset="50%" stop-color="red" />
      <stop offset="50%" stop-color="yellow" />
    </linearGradient>
  </defs>
</svg>
```

```css hidden live-sample___svg_exit_crossing live-sample___svg_entry_only live-sample___svg_exit_only live-sample___svg_contain live-sample___svg_cover live-sample___svg_entry-crossing
body::before {
  display: block;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5rem;
}
div {
  display: flex;
  gap: 20px;
}
svg {
  width: 260px;
}
#gradient {
  height: 1px;
  position: absolute;
  width: 1px;
}
rect {
  stroke: black;
  stroke-width: 3;
}
.start {
  fill: yellow;
}
.end {
  fill: red;
}
.container {
  fill: none;
}
text {
  font: 40px monospace;
  fill: black;
}
line {
  stroke: black;
  stroke-width: 8;
  stroke-dasharray: 10;
}
```

<!--
### Other progress values

In this guide, we have mentioned `0%` and `100%` progress points. The animation-range values aren't limited to these to progress points. You can inset any of the named animation ranges by a set amount or a percentage of the full animation attachment range. This is discussed in the [insets]() guide. -->

## See also

- {{cssxref("timeline-range-name")}} data type
- [Keyframe selectors](/en-US/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
