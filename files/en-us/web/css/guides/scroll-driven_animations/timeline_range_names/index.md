---
title: Understanding timeline range names
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names
page-type: guide
sidebar: cssref
---

By default, [view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) track elements across the entire viewport. The animation timeline begins when the first pixel of the element's start edge crosses the viewport's end edge, and ends when the element's end edge crosses the viewport's start edge. You can customize this range, limiting the animation timeline to a specific portion of the viewport. For example, you can restrict the view progress timeline to begin only when the subject element has fully entered the viewport.

This guide explains how to modify timeline range names, specifically examining the various timeline range names, their meanings, and how they are used in the {{cssxref("animation-range")}} property and its longhands.

## Viewport progress timelines primer

[CSS animations](/en-US/docs/Web/CSS/Guides/Animations) are created by attaching {{cssxref("@keyframes")}} animations to an element using the {{cssxref("animation-name")}} property (or {{cssxref("animation")}} shorthand). The keyframes define the animation's behavior, while the {{cssxref("animation-timeline")}} determines when and how the element progresses through those keyframes.

With [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines), the animation's timeline, or progress, is driven by user scroll and element visibility.

In [view-progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), keyframe progression is tied to how much of the subject element is visible within the scroller, and its position within the scroller. As the element enters the viewport, the timeline advances. If the user reverses the scrolling, the timeline reverses: as the view progress element comes into or moves out of view, the timeline progresses or reverses, respectively. The animation only occurs when the element is visible within its scrollport. If scrolling stops while the element is in view, the animation pauses.

By default, the view timeline progress starts when the tracked subject's start edge intersects the scrollport at the block or inline end edge and ends when the subject's end edge exits the scrollport at the block or inline start edge.

```html hidden live-sample___initial live-sample___entry_exit live-sample___insets live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
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

```html hidden live-sample___initial live-sample___entry_exit live-sample___insets live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
<fieldset>
  <legend>Select the height of the animated element</legend>

  <label><input name="height" value="50" type="radio" checked /> 50px</label>
  <label><input name="height" value="250" type="radio" /> 250px</label>
  <label><input name="height" value="500" type="radio" /> 500px</label>
</fieldset>
<fieldset class="double">
  <legend>Select the animation range</legend>

  <label><input name="range" value="0" type="radio" checked /> 0% / 100%</label>
  <label><input name="range" value="30" type="radio" />30% / 70%</label>
</fieldset>
```

```css hidden live-sample___initial live-sample___entry_exit live-sample___insets live-sample___inset_cover live-sample___contains live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing
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
```

```css hidden live-sample___initial live-sample___insets live-sample___inset_cover live-sample___contains live-sample___inset_contain
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

{{EmbedLiveSample("initial", "100%", "400")}}

Scroll down. Note how the animation begins just as the top edge of the animated element aligns with the bottom edge of the scroll container and ends, reaching `100%` progress, when the bottom edge aligns with the top edge of the container, no matter how tall the animated element is.

By default, the element animates the entire time whenever any portion of the subject element is visible. This means the **animation attachment range** is the sum of the height of the scroll container and the height of the subject element. For example, if the scroll container is `250px` tall and the animated element is `50px` tall, the vertical animation attachment range will be `300px` tall. If the element is `250px` tall, the range becomes `500px`; if it's `500px` tall, the range becomes `750px`. This behavior is consistent regardless of element size; so we can use scroll view timelines even when we don't know the exact dimensions of our scroll containers or the dimensions of our subjects.

## Setting an animation range

The {{cssxref("animation-range")}} properties define the attachment range for the animation timeline, including the animation attachment range's start and end edges, including insets. The [CSS scroll driven animations module](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) provides properties and values that accept {{cssxref("length-percentage")}} values (such as `30%` or `100px`) and {{cssxref("timeline-range-name")}} keywords that specify the edges those values are relative to.
The scroll container's writing mode and scroll direction determine the scroll container's start and end edges.

### Setting insets using percentages

The {{cssxref("animation-range-start")}} and {{cssxref("animation-range-end")}} properties—which can both be set using the `animation-range` shorthand—define an animation's attachment range, limiting the keyframe's active interval to that specific portion of the range.

```css live-sample___insets
.animated_element {
  animation-range-start: 30%;
  animation-range-end: 70%;
}
```

```css hidden live-sample___insets live-sample___inset_cover live-sample___inset_contain
main,
i {
  background-image: linear-gradient(
    to top,
    transparent calc(30% - 1px),
    black calc(30% - 1px) calc(30% + 1px),
    transparent calc(30% + 1px) calc(70% - 1px),
    black calc(70% - 1px) calc(70% + 1px),
    transparent calc(70% + 1px)
  );
  background-origin: content-box;
}
```

Here we use `animation-range-start` and `animation-range-end` to inset the animation timeline, defining a subsection of the element's full animation attachment range as the active interval. In this example, the active interval begins `30%` into the default attachment range and ends at `70%` of that same range. Because no `<named-timeline-range>` keyword is included, these values are interpreted relative to the default `cover` animation attachment range.

{{EmbedLiveSample("insets", "100%", "400")}}

For illustrative purposes, horizontal lines were added `30%` from the top and bottom of both the container and the animated element. The percentages are relative to the height of the container and the height of the animated element, not the height of the animation attachment range, which is the sum of the two. Because the full attachment range equals the container height plus the element height, the 30% mark does not occur when the top edge of the animated element aligns with the 30% mark. Instead, it occurs when the top 30% of the element has moved 30% of the way into view.

### Animation range property values

The animation-range properties accept the keyword `normal`, a {{cssxref("timeline-range-name")}}, a {{cssxref("length-percentage")}}, or both a `<timeline-range-name>` and a `<length-percentage>`.

The `<timeline-range-name>` value type accepts six keywords: `cover`, `contain`, `entry`, `exit`, `entry-crossing`, and `exit-crossing`. Each of these represents a predefined named timeline range. A _named timeline range_ is a named segment of an animation timeline. The start of the segment is represented as `0%` progress through the range; the end of the segment is represented as `100%` progress through the range.

## Cover

The animation attachment range in the previous examples all "cover" the entire range. We can set the attachment range to a different named timeline range to have the animation start when 30% of it is 30% of the way through the container and end when 70% of it is 70% of the way through. We could have explicitly set a `<timeline-range-name>` to achieve the same results:

```css
.animated_element {
  animation-range-start: cover 30%;
  animation-range-end: cover 70%;
}
```

The `cover` value represents the full range of the view progress timeline, with `0%` progress representing when the start border edge of the animated element's principal box aligns with the end edge of its view progress visibility range and `100%` representing the point when end border edge of the animated element's principal box aligns with the start edge of its view progress visibility range. This is what we've seen in all the examples thus far, where the height of the animation attachment range was the container plus the animated element.

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
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="540" />
    <rect class="medium end" width="100" height="250" x="120" y="400" />
    <rect class="large end" width="100" height="500" x="230" y="225" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="660" />
    <rect class="medium start" width="100" height="250" x="120" y="600" />
    <rect class="large start" width="100" height="500" x="230" y="525" />
    <rect width="96" height="48" x="122" y="602" fill="url(#g)" />
    <rect width="96" height="198" x="232" y="527" fill="url(#g)" />
    <text y="625" x="5">cover</text>
    <text y="590" x="360">70%</text>
    <line x1="0" x2="350" y1="575" y2="575" />
    <line x1="0" x2="350" y1="675" y2="675" />
    <text y="690" x="360">30%</text>
  </svg>
</div>
```

```css hidden live-sample___svg_cover
body div,
body svg {
  margin: -60px 0 -300px;
}
```

{{EmbedLiveSample("svg_cover", "100%", "680")}}

The image demonstrates the animation timeline. Before the element reaches the start of the animation range, either the `0%` view progress or the `30%` view progress mark depending on the `animation-range-start`, the element is shown in yellow. This represents the position of the element when the `from` keyframe is applied. The red represents the location of the animated element relative to the scrollport when the `to` keyframe is applied. This is the position of the animated element when it reaches the end of the animation. The animation occurs when the element is between these areas, represented by the striped areas.

## Contain

The `contain` keyword fully _contains_ the animation within the scrollport, making it so the range starts when the animated element is 100% visible (if it can be fully visible). With `contain`, the start of the animation (`0%`) occurs when the subject element's end edge aligns with the end edge of the scroll container. The end of the animation (`100%`) occurs when the start edge of the subject element reaches the start edge of the scroll container.

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

When the animated element is smaller than the scroll container, the `contain` value ranges from the point where the subject element is first completely contained by the scroll port (`0%`), to the point where it is no longer completely contained by the scroll port (`100%`). If the animated element is the same size as the scroll container in the scroll direction, the animation occurs over `0px`, which is not visible to the user. If the animation is larger than its container, the animated element is never fully visible as it is not "contained" within the viewport, and the animation starts when the start edge reaches the start edge of the scrollport, and ends when the animated element's end edge reaches the end edge of the container. Change the size of the animated element in the demonstration and scroll to see this in action.

In this example, the original height of the animated element is 20% of the height of the viewport, and therefore can be completely contained within it.

If you check the `500px` radio button, the subject will be twice as tall as the viewport. With `contain`, if the subject element is larger than the scrollport, the animation range is from the point where the subject element first completely covers the scroll port, with the `0%` occurring when the start edge reaches the start edge of the container, to the point where it no longer completely covers the scrollport, with the `100%` occurring when the end edge crosses the containers end edge.

If the subject is the same size as the scroll container, which occurs if you select the `250px` size, the animation still occurs, but over `0px`, so is not perceivable to the user.

The animated element has its {{cssxref("animation-fill-mode")}} value set to `forwards`, meaning the property values defined in the @keyframes animation get applied when the `0%` progress is reached, and remain as defined in the `100%` keyframe after the animation concludes. We did this because otherwise the middle-sized `250px` subject, being the same height as the scroll container, would appear to not animate at all. As the `0%` and `100%` occur at the same time, the animation is instantaneous, and is only perceivable because the properties defined in the `100%` keyframe state are maintained after the animation ends.

The `contain` value represents the range during which the principal box is either fully contained by, or fully covers, its view progress visibility range within the scrollport. What the `0%` progress represents depends on whether the animated element is smaller or larger than the scrollport. If the element is smaller than the scrollport in the scroll direction, `0%` occurs when the animated element's end border edge aligns with the end edge of the scrollport and `100%` and `100%` occurs when the animated element's start border edge aligns with the start edge of the scrollport. If the element is larger than the scrollport, the `0%` progress is when the animated element's start border edge reaches the start edge of the viewport and and `100%` is when the end border edge aligns with the end edge. If the animated element is the same size as its container, the animation still happens, but over `0px`.

In the next example, we use the same percentage inset values as we did in our `cover` example, but use the `contain` timeline range name value instead:

```css live-sample___inset_contain
.animated_element {
  animation-range-start: contain 30%;
  animation-range-end: contain 70%;
}
```

```css hidden live-sample___inset_contain
body::before {
  content: "contain 30% contain 70%";
  text-align: right;
}
```

{{EmbedLiveSample("inset_contain", "100%", "400")}}

Again we use the `animation-range-start` and `animation-range-end` properties to inset the animation timeline, defining a subsection of the element's full animation attachment range as the active interval. If the element is smaller than the scrollport in the scroll direction, the `30%` occurs when the point that is 30% from the animated element's end border edge (which is 70% from its start edge) is 30% of the way from the end edge of the scrollport. The `70%` range end occurs when 30% of the element, which is 70% from the end edge, is 70% of the way through that viewport. The positions are different when the animated element is larger than the scrollport. In that case, the `30%` animation start is reached when the point that is 30% from the animated element's start end is 30% of the way from the scrollport's start end. The 70% animation end is when the 70% of the animated element has progressed to 70% of the way from the start edge. When the element is the same size as the scrollport in the scroll direction, the start and end of the range occur at the same point, so the animation occurs, but over `0px`, so is not visible.

```html hidden live-sample___svg_contain
<div>
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
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
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <rect class="small end" width="100" height="50" x="10" y="560" />
    <rect class="medium end" width="100" height="250" x="120" y="500" />
    <rect class="large end" width="100" height="500" x="230" y="325" />
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small start" width="100" height="50" x="10" y="640" />
    <rect class="medium start" width="100" height="250" x="120" y="500" />
    <rect class="large start" width="100" height="500" x="230" y="425" />
    <rect width="100" height="250" x="120" y="500" fill="url(#g)" />
    <rect width="100" height="400" x="230" y="425" fill="url(#g)" />
    <text y="460" x="10">contain</text>
    <text y="590" x="360">70%</text>
    <line x1="0" x2="350" y1="575" y2="575" />
    <line x1="0" x2="350" y1="675" y2="675" />
    <text y="690" x="360">30%</text>
  </svg>
</div>
```

```css hidden live-sample___svg_contain
body div,
body svg {
  margin: -60px 0 -300px;
}
```

{{EmbedLiveSample("svg_contain", "100%", "500")}}

The animation occurs when the element is between these areas, represented by the white of the container in the `50px` example and by the overlapping orange areas in the `250px` (which is the height of the container) and the `500px` examples.

It may be helpful for some to compare and contrast the `cover` and `contain` values. We can use the shorthand `animation-range` property to declare both the `animation-range-start` and `animation-range-end` have the same `<animation-name-range>` value set at `0%` and `100%` respectively:

```css live-sample___cover_contain
#A {
  animation-range: contain;
}
#B {
  animation-range: cover;
}
```

We can also use the shorthand to declare offsets:

```css
#A {
  animation-range: contain 30% contain 70%;
}
#B {
  animation-range: cover 30% cover 70%;
}
```

```css hidden live-sample___cover_contain
body::before {
  content: "contain vs cover";
}
.double span {
  display: none;
}
#A,
#B {
  width: 140px;
}
body:has([value="30"]:checked) main,
body:has([value="30"]:checked) #A,
body:has([value="30"]:checked) #B {
  background-image: linear-gradient(
    to top,
    transparent calc(30% - 1px),
    black calc(30% - 1px) calc(30% + 1px),
    transparent calc(30% + 1px) calc(70% - 1px),
    black calc(70% - 1px) calc(70% + 1px),
    transparent calc(70% + 1px)
  );
  background-origin: content-box;
}

#A::after {
  content: " ( contain )";
}
#B::after {
  content: " ( cover ) ";
}
body:has([value="30"]:checked) #A {
  animation-range: contain 30% contain 70%;
}
body:has([value="30"]:checked) #B {
  animation-range: cover 30% cover 70%;
}
```

{{EmbedLiveSample("cover_contain", "100%", "450")}}

Select different radio buttons and scroll the scrollport to see the different effects of `cover` versus `contain` on animation timelines with shortened ranges.

## Entry and exit

To make the entire animation happen only when the subject is in the process of entering or exiting the viewport, use the `entry` or `exit` values, respectively. With these two values, the animation attachment range is based on the size of the animated element, not the size of the viewport.

With `entry`, the `0%` progress occurs the moment the animated element enters the viewport, when the subject's start edge crosses the viewport's end edge. Setting `animation-range-start: entry 0%` is the same as setting `animation-range-start: cover 0%`.

If the animated element is smaller than the viewport, the animation attachment range is the size of the element. If the element is larger than the viewport, the animation attachment range is the entire viewport, so the `100%` progress occurs when the start edge of the element reaches the start edge of its scroll container.

Setting `animation-range-end: entry 100%` is equivalent to setting `animation-range-end: contain 0%`. With `entry`, the `100%` occurs when the subject's end edge crosses the end edge of the viewport or, if the animated element is larger than the viewport in the scroll direction, when the animated element's start edge reaches the start edge of the viewport.

The entire animation occurs as the subject comes into view, ending when it becomes completely visible or when it reaches the start edge; whichever occurs first. In other words, with `entry`, the animation attachment range is the size of the animated element, abutting the end edge of the scrollport, with a maximum size being the size of the container.

The `exit` value is the inverse of `entry`.
With `exit`, the attachment range starts when the animated element's start edge crosses the viewport's start edge. Setting `animation-range-start: exit 0%` is equivalent to setting `animation-range-start: contain 100%`. The `100%` progress occurs when the subject's end edge crosses the start edge; setting `animation-range-end: exit 100%` is equivalent to `animation-range-end:  cover 100%`.

With `exit`, the entire animation occurs as the subject exits the viewport, only completing when it is completely out of the viewport. As with `entry`, with `exit`, the animation attachment range is the size of the animated element, but abutting the start edge of the scrollport rather than the end edge, with the maximum size being the size of the container in the scroll direction.

```html hidden live-sample___svg_entry_exit
<div>
  <svg viewBox="-60 -1 530 1252" xmlns="http://www.w3.org/2000/svg">
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
  <svg viewBox="-60 -1 530 1252" xmlns="http://www.w3.org/2000/svg">
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

```css hidden live-sample___svg_entry_exit
:root body div {
  margin: 0 0 -140px 0;
}
```

{{EmbedLiveSample("svg_entry_exit", "100%", "650")}}

The position at `0%` progress is shown in yellow. The position at `100%` progress is displayed in red. In the case, where the animated element is larger than the viewport, these two positions overlap, which is denoted by a striped background.

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
.double span {
  display: none;
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
body:has([value="30"]:checked) #A {
  animation-range: entry 30% entry 70%;
}
body:has([value="30"]:checked) #B {
  animation-range: exit 30% exit 70%;
}
body:has([value="30"]:checked) i {
  background-image: linear-gradient(
    to top,
    transparent calc(30% - 0.5px),
    black calc(30% - 0.5px) calc(30% + 0.5px),
    transparent calc(30% + 0.5px) calc(70% - 0.5px),
    black calc(70% - 0.5px) calc(70% + 0.5px),
    transparent calc(70% + 0.5px)
  );
  background-origin: content-box;
}
article {
  background-image:
    linear-gradient(
      to top,
      transparent calc(var(--animElHeight) - 0.5px),
      black calc(var(--animElHeight) - 0.5px) calc(var(--animElHeight) + 0.5px),
      transparent calc(var(--animElHeight) + 0.5px)
    ),
    linear-gradient(
      to bottom,
      transparent calc(var(--animElHeight) - 0.5px),
      black calc(var(--animElHeight) - 0.5px) calc(var(--animElHeight) + 0.5px),
      transparent calc(var(--animElHeight) + 0.5px)
    );
  background-origin: content-box;
}
body:has([value="30"]:checked) article {
  background-image:
    linear-gradient(
      to top,
      transparent calc(30% - 0.5px),
      black calc(30% - 0.5px) calc(30% + 0.5px),
      transparent calc(30% + 0.5px) calc(70% - 0.5px),
      black calc(70% - 0.5px) calc(70% + 0.5px),
      transparent calc(70% + 0.5px)
    ),
    linear-gradient(
      to bottom,
      transparent calc(calc(min(100%, var(--animElHeight)) * 0.3) - 0.5px),
      #33f calc(calc(min(100%, var(--animElHeight)) * 0.3) - 0.5px)
        calc(calc(min(100%, var(--animElHeight)) * 0.3) + 0.5px),
      transparent calc(calc(min(100%, var(--animElHeight)) * 0.3) + 0.5px)
        calc(calc(min(100%, var(--animElHeight)) * 0.7) - 0.5px),
      #f33 calc(calc(min(100%, var(--animElHeight)) * 0.7) - 0.5px)
        calc(calc(min(100%, var(--animElHeight)) * 0.7) + 0.5px),
      transparent calc(calc(min(100%, var(--animElHeight)) * 0.7) + 0.5px)
        calc(min(100%, var(--animElHeight)) - 1px),
      black calc(min(100%, var(--animElHeight)) - 1px)
        calc(min(100%, var(--animElHeight)) + 1px),
      transparent calc(min(100%, var(--animElHeight)) + 1px)
    ),
    linear-gradient(
      to top,
      transparent calc(calc(min(100%, var(--animElHeight)) * 0.3) - 0.5px),
      #33f calc(calc(min(100%, var(--animElHeight)) * 0.3) - 0.5px)
        calc(calc(min(100%, var(--animElHeight)) * 0.3) + 0.5px),
      transparent calc(calc(min(100%, var(--animElHeight)) * 0.3) + 0.5px)
        calc(calc(min(100%, var(--animElHeight)) * 0.7) - 0.5px),
      #f33 calc(calc(min(100%, var(--animElHeight)) * 0.7) - 0.5px)
        calc(calc(min(100%, var(--animElHeight)) * 0.7) + 0.5px),
      transparent calc(calc(min(100%, var(--animElHeight)) * 0.7) + 0.5px)
        calc(min(100%, var(--animElHeight)) - 1px),
      black calc(min(100%, var(--animElHeight)) - 1px)
        calc(min(100%, var(--animElHeight)) + 1px),
      transparent calc(min(100%, var(--animElHeight)) + 1px)
    );
  background-origin: content-box;
}
```

Scroll the viewbox to see the range of the `entry` and `exit` values.

{{EmbedLiveSample("entry_exit", "100%", "500")}}

When the subjects are small enough to be fully contained within the viewport, the animation attachment timeline is at the start (`entry`) or end (`exit`) of the scrollport and the size of the attachment range is limited to the size of the animated element in the scroll direction. The percent offset, if any, is relative to the subject's size, not the viewport size.

If the animated element is the size of the viewport or larger, the animation doesn't begin until the element fully covers the scrollport in the scroll direction. If your animated element is larger than the scrollport, you may prefer to use `entry-crossing` and `exit-crossing`.

## Entry- and exit-crossing

If the animated element is smaller than the scrollport, and you want the full animation to occur fully, from beginning to end, as it enters or as it exits the scrollport, use `entry` or `exit`, respectively. If your animated element is larger than the viewport, the animation range is contained in the scrollport, while the element is not. The `entry` value sets the `100%` progress to be when the element's start edge reaches the start-edge of the scrollport, and `exit` only reaches the `0%` that is when the element's end-edge reaches the scroll container's end edge; when the animated element has already partially scrolled past the scrollport's start edge.

### Entry-crossing

The `entry-crossing` value represents the range during which the animated element crosses the end edge of the viewport, with `0%` progress occurring when the element's start edge aligns with the end edge the viewport and `100%` progress occurring when the element's end edge reaches the end edge of the viewport, meaning it has finished fully scrolling into the viewport.

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
fieldset.double {
  display: none;
}
```

{{EmbedLiveSample("entry_crossing", "100%", "400")}}

Note how the effects are similar, except for when the `500px` is selected and the animated element is taller than the container. With `entry`, when the animated element is larger than the viewport, the `100%` progress occurs when the element first fully spans the viewport.

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

{{EmbedLiveSample("svg_entry-crossing", "100%", "600")}}

The `entry-crossing` produces the same results as `entry` when the element is equal to or smaller than the viewport, but when the element is larger than the viewport, the `100%` occurs later, occurring only when the end edge has entered the view port. The yellow represents the position of the element when it reaches `0%` progress. The red represents the position at `100%` progress. The striped area indicates an overlap in these positions.

### Exit-crossing

The `exit-crossing` value represents the range during which the animated element crosses the start edge of the viewport, with `0%` progress occurring when the element's start edge aligns with the start edge the viewport and `100%` progress occurring when the element's end edge reaches the start edge of the viewport, meaning it starts animating as soon as it covers the viewport, and continues animating until it fully exits the viewport's start edge.

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
fieldset.double {
  display: none;
}
```

{{EmbedLiveSample("exit_crossing", "100%", "400")}}

Like when we compared `entry` with `entry-crossing`, the effects are similar, except for when the `500px` is selected, which makes the animated element taller than the container. With `exit`, when the animated element is larger than the viewport, the `0%` progress only occurs when the element's end edge crosses the end edge of the viewport. The `exit-crossing` produces the same results as `exit` when the element is equal to or smaller than the viewport, but when the element is larger than the viewport, the `0%` occurs earlier, occurring as soon as the element's start edge reaches the viewport's start edge, rather than waiting until the element's end edge enters the viewport.

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
    <rect cln h"small start" width="100" height="50" x="10" y="501" />
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

{{EmbedLiveSample("svg_exit_crossing", "100%", "540")}}

```html hidden live-sample___svg_exit_crossing live-sample___svg_entry_exit live-sample___svg_contain live-sample___svg_cover live-sample___svg_entry-crossing
<svg>
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

```css hidden live-sample___svg_exit_crossing live-sample___svg_entry_exit live-sample___svg_contain live-sample___svg_cover live-sample___svg_entry-crossing
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

## See also

- {{cssxref("timeline-range-name")}} data type
- [Keyframe selectors](/en-US/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
