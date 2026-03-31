---
title: Understanding timeline insets
slug: Web/CSS/Guides/Scroll-driven_animations/Timeline_insets
page-type: guide
sidebar: cssref
---

By default, [view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) track elements across the entire [animation attachment range](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#the_animation_attachment_range). The `0%` progress point is at the start of the range, while the `100%` progress point is at the end. The animation attachment range can be changed by setting a [timeline range name](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/timeline_range_names), and the location of the `0%` and `100%` progress points along the range can be adjusted by setting length or percentage-based inset values.

The various timeline range names, their meanings, and how they are used are discussed in the [timeline range name guide](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/timeline_range_name). This guide explains limiting the animation timeline to a specific portion of the animation timeline range, effectively _insetting_ the animation timeline, using length or percentage values.

## Animation timelines: a primer

[CSS animations](/en-US/docs/Web/CSS/Guides/Animations) are created by defining named {{cssxref("@keyframes")}} animations, which define an animation's behavior, and then attaching the keyframe animation to an element using the animation's name.

The element's animation timeline, defined by the {{cssxref("animation-timeline")}} property, determines how and when the element progresses through those keyframes. By default, the timeline is time-based, using the document's default time-based {{domxref("DocumentTimeline")}}.

The [CSS scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module defines scroll-based and view-based timelines, which are methods of animating property values along a scroll-based timeline rather than the default time-based document timeline.

### View progress timelines

With [view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), the animation's timeline, or progress, is driven by element visibility instead of the passage of time, with keyframe progression tied to the subject element position and visibility within the scroll container. The animation advances and reverses as the element advances or reverses through the scrollport. The animation only occurs when at least part of the element is visible within its scrollport, pausing when scrolling pauses.

```css live-sample___svg_view
.animated_element {
  animation-name: nameOfAnimation;
  animation-timeline: view();
}
```

Setting an {{cssxref("animation-name")}} applies the animation to the selected element. The {{cssxref("animation-iteration-count")}} defaults to `1`. The {{cssxref("animation-direction")}} defaults to `normal`. See the [Using CSS animations guide](/en-US/docs/Web/CSS/Guides/Animations/Using) to learn more.

> [!NOTE]
> The `animation-timeline` property should always come after any `animation` shorthand declarations. While the shorthand property can not be used to set the `animation-timeline` property, it does reset the timeline to the default time-based document timeline.

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing
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

```html hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___entry_crossing live-sample___exit_crossing live-sample___exit_length_negative
<fieldset>
  <legend>Select the height of the animated element</legend>

  <label><input name="height" value="50" type="radio" checked /> 50px</label>
  <label><input name="height" value="250" type="radio" /> 250px</label>
  <label><input name="height" value="500" type="radio" /> 500px</label>
</fieldset>
<fieldset class="double">
  <legend>Select the animation range</legend>

  <label><input name="range" value="20" type="radio" checked />20% / 60%</label>
  <label><input name="range" value="0" type="radio" /> 0% / 100%</label>
</fieldset>
```

```css hidden live-sample___initial live-sample___entry_exit live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing
:root {
  --animElHeight: 50px;
  --animElHeightWord: "50px";
  --barColor: black;
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
i,
.animated_element {
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

```css hidden live-sample___initial live-sample___inset_percent live-sample___inset_length live-sample___inset_cover live-sample___inset_contain
.double {
  display: none;
}
```

```css hidden live-sample___cover_contain live-sample___exit_length_negative live-sample___entry_crossing live-sample___exit_crossing live-sample___entry_exit
.one {
  display: none;
}
.double div {
  display: flex;
  gap: 10px;
}
```

In every example, the {{glossary("scroll container")}} is `250px` tall. As you scroll up, the animation progresses. As you scroll down, the animation reverses.

{{EmbedLiveSample("initial", "100%", "400")}}

In this example, note how any time any part of the subject element is visible in the scrollport, the animation is occurring. By default, view progress animations begin just as the top edge of the subject element aligns with the bottom edge of the scroll container and end, reaching `100%` progress, when the end edge aligns with the start edge of the container, no matter the size of the subject element. By default, the animation is applied when any part of the the subject is visible within the scrollport.

### Animation attachment ranges

When no animation range properties are defined, the animation is applied the entire time any portion of the subject element is visible, meaning the default **animation attachment range** is the sum of the height of the scroll container and the height of the subject element, with that extra height being at the scroll end edge.

By default, the `0%` progression in a [view timeline progress](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) occurs when the subject element's start edge intersects the scrollport at the end edge, reaching `100%` progress when the subject's end edge exits via the scrollport's start edge. These are the subject and scrollport's top and bottom edges when scrolling vertically, and the left and right or right and left edges when scrolling horizontally, depending on the writing mode.

In our example, as the scroll container is `250px` tall, and the subject is either `50px`, `250px`, or `500px` tall, the vertical animation attachment range is `300px`, `500px`, or `750px`, depending on which radio button is selected.

Whether the range is `300px`, `500px`, or `750px` tall, the animation's `0%` progress mark is when the top edge of the subject aligns with the bottom of the scrollport and the `100%` progress is when the bottom edge of the subject aligns with the scrollport's top edge.

We can visualize the position of the subject at the `0%` and `100%` progress points for the three subject sizes:

```html hidden live-sample___svg_view
<div>
  <svg viewBox="-1 -1 462 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="520" x="360">100%</text>
    <line x1="0" x2="350" y1="500" y2="500" />
    <line x1="0" x2="350" y1="750" y2="750" />
    <text y="760" x="360">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_view", "100%", "720")}}

The yellow subject elements represents the position of the element when the `from` keyframe is applied, which is the animation range's `0%` progress mark. The red represents the location of the animated element relative to the scrollport when the `to` keyframe is applied, which is the end of the animation, or the `100%` progress mark. The grey represents the scrollport.

By default, the element animates while it is "in view", but this default definition of "in view" may not fit your needs. Fortunately, animation range properties enable us to control which edges define the ends of the edges of the animation attachment range and then the start and end of that range by a {{cssxref("length")}} or a {{cssxref("percentage")}} relative to named or default timeline range.

### Animation range properties

The {{cssxref("animation-range")}} properties enable setting a named timeline range and then insetting animations from the animation attachment ranges using {{cssxref("length-percentage")}} inset values, such as `20%` or `100px`.

The {{cssxref("animation-range-start")}} and {{cssxref("animation-range-end")}} properties, which can both be set using the `animation-range` shorthand, define an animation's attachment range, limiting the keyframe's active interval to that specific portion of the range.

These properties specify the start and end of the animations's attachment range, shifting the start time and/or end of the animation, where the `0%` and `100%` keyframes occur when the {{cssxref("animation-iteration-count")}} is set or defaults to `1`. Both the start and end offsets are from the start of the attachment range.

Setting an inset is similar to setting the {{cssxref("animation-delay")}} on time-based {{domxref("DocumentTimeline")}} animations. Just like the `animation-delay` property can delay the animation start until `500ms` after the animation is otherwise applied, the `animation-range-start` property can be used to delay a view progress timeline animation until `50px` of the subject is in view. The `animation-range-end` property can similarly end the animation early. We also have the `animation-range` shorthand property, which can both move the `from` animation progress point to a scroll position occurring after the default `0%` progress point and the `to` animation progress point to a scroll position occurring before the default `100%` progress point.

See the [timeline range name guide](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/timeline_range_name) to learn about the different named timeline ranges. The focus of this guide is insetting the start and end of the animation attachment range using {{cssxref("length-percentage")}} inset values.

## Setting insets using lengths

The `animation-range-start` and `animation-range-end` properties each accept a named animation range, a {{cssxref("length-percentage")}} offset value, or both. Any length or percentage offset is measured from the _start_ of the animation attachment range.

When a {{cssxref("length")}} is set, the offset is fairly intuitive.
Here we use the `animation-range-start` and `animation-range-end` properties to inset the animation timeline. In this way, we define a subsection of the element's full animation attachment range as the active interval, set the distance from the start of the animation attachment range.

```css live-sample___inset_length
.animated_element {
  animation-range-start: 1em;
  animation-range-end: 125px;
}
```

This defines the start and end of the animation as being `1em` and `125px` from the start of the animation attachment range, respectively. In this case, the start of the animation attachment range is the block end edge of the container.

```css hidden live-sample___inset_length
:root {
  --start: 1em;
  --end: 125px;
}

main {
  background-image: linear-gradient(
    to top,
    transparent calc(var(--start) - 1px),
    #ccc calc(var(--start) - 1px) calc(var(--start) + 1px),
    transparent calc(var(--start) + 1px) calc(var(--end) - 1px),
    #ccc calc(var(--end) - 1px) calc(var(--end) + 1px),
    transparent calc(var(--end) + 1px)
  );
}
```

{{EmbedLiveSample("inset_length", "100%", "400")}}

We've added lines `1em` and `125px` from the block end edge of the scroll container. The animation starts when the block start edge of the subject element reaches the `1em` line and ends when it reaches the `125px` line.

In this case, as the animation attachment range is the same for both properties, the location of the insets was fairly straightforward.

## Lengths and ranges

The offset distance is always from the start of the associated animation range. If you set the following, the animation will start `50px` from the start of the `normal` range and end `100px` from the start of the `entry` range:

```css live-sample___different_length
.animated_element {
  animation-range-start: 50px;
  animation-range-end: entry 100px;
}
```

```html hidden live-sample___different_length live-sample___exit_length live-sample___exit_percent live-sample___center
<main>
  <article>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Scroll down ⇩</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <section class="triple">
      <div>
        <i id="A" class="animated_element">50px</i>
        <i id="B" class="animated_element">250px</i>
        <i id="C" class="animated_element">500px</i>
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

{{EmbedLiveSample("different_length", "100%", "310")}}

As the start edge of both the `normal` and `entry` ranges is the container's end edge, the animation begins when the subject start edge is `50px` from the bottom of the scrollport and ends, reaching `100%` progress, when the subject start edge is `50px` from the bottom of the scrollport, irrespective of the subject size. While the size of the `entry` range is different for the three different subject size, in this case the size of the underlying range didn't matter.

### Length offsets with varying ranges

The size of range matters when the range doesn't start at the element's end edge, as is the case with `exit` and `exit-crossing`, or if the offset is a percentage value. This fact, and the fact that you can mix and match animation range names, make view progress timeline offsets a bit more complicated to understand than non-offsetted [timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).

For example, when setting `exit` as the timeline range name, the subject size matters as it determines the location of the range's end edge.

```css live-sample___exit_length
.animated_element {
  animation-range-start: entry 50px;
  animation-range-end: exit 75px;
}
```

The offset position is relative to the start of the declaration's animation range. With `animation-range-start` set to `entry 50px`, the animation's `0%` progress occurs `50px` from the container's end edge (denoted by the blue line) for all three subject sizes; this is the same as in the previous example.

```css hidden live-sample___exit_length
article {
  background-image: linear-gradient(
    to top,
    transparent 49.5px,
    blue 49.5px 50.5px,
    transparent 50.5px 74.5px,
    red 74.5px 75.5px,
    transparent 75.5px
  );
}
.animated_element {
  align-self: flex-end;
}
```

```css hidden live-sample___different_length live-sample___exit_length live-sample___exit_percent live-sample___center
@layer setup {
  #A {
    height: 50px;
  }
  #B {
    height: 250px;
  }
  #C {
    height: 500px;
  }
  div {
    display: flex;
    gap: 1em;
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
    background-image: linear-gradient(
      to top,
      transparent 49.5px,
      #666 49.5px 50.5px,
      transparent 50.5px 99.5px,
      #666 99.5px 100.5px,
      transparent 100.5px
    );
    background-origin: content-box;
  }

  p {
    padding: 10px;
    margin: 10px;
  }

  .animated_element {
    --clr: yellow;
    background-color: hsl(from var(--clr) h s calc(l * 1.4));
    display: block;
    animation: showAnim step-end 1 forwards;
    animation-timeline: view();
    flex: 1 0 auto;
  }

  i {
    font-family: sans-serif;
    font-size: 1.5rem;
  }

  @keyframes showAnim {
    from {
      --clr: green;
    }
    to {
      --clr: red;
    }
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
}
```

{{EmbedLiveSample("exit_length", "100%", "310")}}

The `animation-range-end` is where things get interesting. We've set the end of the range to be `75px` from the start edge of the `exit` range. The `exit` attachment range is the opposite of `entry`. With `exit`, the range being the size of the subject, up to the size of the scrollport, with the `0%` progress occurring when the animated element's start edge crosses the scrollport's start edge and the `100%` progress occurring when the subject's end edge crosses the scrollport's start edge.

### Beyond the scrollport edges

Offsets that are larger than the subject create `animations-range-start` or `animation-range-end` points that occur when no part of the subject is visible.

When the subject is `50px` tall, the `exit` range is `50px`. The point `75px` from the start of the `exit` range past the start edge of the scrollport. The animation only ends when the subject's start edge is `75px` past the scrollport's start edge and the end edge is `25px` past.

With our `250px` tall container, when the subject is `250px` or `500px` tall, the `exit` range is the size of the container, with the start being the scroll container's end edge. With a `75px` offset, the end of the animation occurs when the end edge of the subject is `75px` from the end edge of the scroll container (denoted with a red line).

The animation ends, meaning animation continues to the `to` keyframe and the {{domxref("Element/animationend_event", "animationend")}} event occurs, even if the animation range end is outside of the scrollport, as long as there is room to scroll to that point. Had we set `animation-range-end: exit 250px`, the animation would have ended when the end edge of the medium and tall subjects exited the scrollport at the container's start edge. The small subject's animation may not end as there may not be `450px` worth of content after the subject in our example for the user to scroll until the animation end is reached.

### Negative lengths

Negative lengths are valid. A negative offset on the `animation-range-start` makes the range longer while a negative offset on the `animation-range-end` makes the range shorter.

Let's compare the negative insets compared to the `0` values:

```css live-sample___exit_length_negative
#A {
  animation-range-start: contain -25px;
  animation-range-end: exit -25px;
}
#B {
  animation-range-start: contain 0;
  animation-range-end: exit 0;
}
```

{{EmbedLiveSample("exit_length_negative", "100%", "380")}}

The first animation range is offset by `25px` toward the container end edge.

```css hidden live-sample___exit_length_negative
fieldset.double {
  display: none;
}
#A::after {
  content: " (-25px)";
}
#B::after {
  content: " (0)";
}
```

## Setting insets using percentages

Like length values, percentage values define offsets from the _start_ of the animation attachment range. The percentage offsets are relative to the timeline range dimension, not relative to the scrollport. For this reason, percentage values are not as intuitive as length values for most people.

Here use `animation-range-start` and `animation-range-end` to inset the animation timeline. While we are using the same properties, we set `<percentage>` values instead of `<length>` values:

```css live-sample___inset_percent
.animated_element {
  animation-range-start: 20%;
  animation-range-end: 60%;
}
```

```css hidden live-sample___inset_percent live-sample___inset_cover
i {
  background-image: linear-gradient(
    to bottom,
    transparent calc(20% - 1px),
    #333 calc(20% - 1px) calc(20% + 1px),
    transparent calc(20% + 1px) calc(60% - 1px),
    #333 calc(60% - 1px) calc(60% + 1px),
    transparent calc(60% + 1px)
  );
}
main {
  background-image: linear-gradient(
    to top,
    transparent calc(20% - 1px),
    #ccc calc(20% - 1px) calc(20% + 1px),
    transparent calc(20% + 1px) calc(60% - 1px),
    #ccc calc(60% - 1px) calc(60% + 1px),
    transparent calc(60% + 1px)
  );
  background-origin: content-box;
}
article {
  --total: calc(var(--animElHeight) + 250px);
  background-image:
    linear-gradient(
      to top,
      transparent 0 calc(var(--total) * 0.2 - 1px),
      green calc(var(--total) * 0.2 - 1px) calc((var(--total) * 0.2) + 1px),
      transparent calc(var(--total) * 0.2 + 1px)
    ),
    linear-gradient(
      to top,
      transparent 0 calc(var(--total) * 0.6 - 1px),
      red calc(var(--total) * 0.6 - 1px) calc((var(--total) * 0.6) + 1px),
      transparent calc(var(--total) * 0.6 + 1px)
    );
}
```

This defines the active interval to begin `20%` into the default attachment range and end `60%` through that same range. The default `normal` animation attachment range, which behaves as [`cover`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#cover), is the height of the scroll container plus the height of the subject element, meaning the range will differ based on which radio button is selected.

{{EmbedLiveSample("inset_percent", "100%", "400")}}

For illustrative purposes, there are grey lines crossing the container at the 20% and 60% points of the scrollport's height, measured from from the bottom of the scrollport. As the `animation-range-*` percentages are relative to the timeline range, not the scrollport, these lines only show how the percentages **don't** align. Based on the height of our subjects, the `20%` mark is either `60px`, `100px`, or `150px` from the end edge of the scrollport (marked with a red line), and the `60%` mark is `180px`, `300px`, or `450px` from the same point (marked with a green line).

The animation starts when the block-start edge reaches the green `20%` line and ends when the start block edge meets the `60%` line. Only when the element is `50px` tall is the top of the subject still in the scrollport when the end of the animation is reached; there are no red lines when `250px` or `500px` are selected.

We've added grey horizontal lines `20%` and `60%` from the _bottom_ of the container to demonstrate their lack of reference; reinforcing that the animation attachment range on which the offsets are based is not the container.

The following image demonstrates where the subject elements are located when the animation starts (the `0%` keyframe) and ends (the `100% keyframe`).
This image includes the insets from the animation timeline in the previous demonstration and the timeline without insets for comparison.

```html hidden live-sample___svg_insets2
<div>
  <svg viewBox="-1 -1 482 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline with insets</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="571" />
    <rect class="medium end" width="100" height="250" x="120" y="450" />
    <rect class="large end" width="100" height="500" x="230" y="300" />
    <rect class="small start" width="100" height="50" x="10" y="689" />
    <rect class="medium start" width="100" height="250" x="120" y="649" />
    <rect class="large start" width="100" height="500" x="230" y="600" />
    <rect width="96" height="48" x="122" y="602" fill="url(#g)" />
    <rect width="96" height="198" x="232" y="527" fill="url(#g)" />
    <text y="610" x="385">60%</text>
    <line x1="0" x2="385" y1="600" y2="600" />
    <line x1="0" x2="385" y1="700" y2="700" />
    <text y="710" x="385">20%</text>
  </svg>
  <svg viewBox="-1 -1 482 1252" xmlns="http://www.w3.org/2000/svg">
    <title>Default view progress timeline</title>
    <rect class="container" width="350" height="250" x="0" y="500" />
    <rect class="small end" width="100" height="50" x="10" y="450" />
    <rect class="medium end" width="100" height="250" x="125" y="250" />
    <rect class="large end" width="100" height="500" x="240" y="0" />
    <rect class="small start" width="100" height="50" x="10" y="750" />
    <rect class="medium start" width="100" height="250" x="125" y="750" />
    <rect class="large start" width="100" height="500" x="240" y="750" />
    <text y="520" x="385">100%</text>
    <line x1="0" x2="385" y1="500" y2="500" />
    <line x1="0" x2="385" y1="750" y2="750" />
    <text y="760" x="390">0%</text>
  </svg>
</div>
```

{{EmbedLiveSample("svg_insets2", "100%", "710")}}

As before, the yellow represents the position of the element when the `from` keyframe is applied, the red represents the location when the `to` keyframe is applied, and the grey represents the scrollport. The striped areas are where the red and yellow element representations overlap. For illustrative purposes, we've added dashed black horizontal lines `20%` and `60%` way through the scrollport, starting from the bottom.

The animation only begins when the element reaches the 20% mark along the animation attachment range. This point is that is `60px`, `100px`, or `150px` from the bottom edge of the scroll port, depending on the the size of the element, is the animation's `0%` progress point. The location of the subject element at this point, representing the position of the element when the `from` or `0%` keyframe is applied, is shown in yellow.

The red represents the location of the animated element relative to the scrollport when the `to` or `100%` keyframe is applied, which is the end of the animation. This point is either `180px`, `300px`, or `450px` from the bottom edge of the scrollport, depending on the subject size. The animation occurs when the element is between the `to` and the `from` positions; between the positions along the animation attachment range defined.

You may have noticed something interesting about the dashed horizontal lines: when the animation starts, the line that is 20% from the end edge of the viewport is 20% from the _top_ of the subject element and the line that is 60% from the end edge of the viewport is 60% from the _top_ of the subject element when the animation ends.

### Subject size matters

As we've seen, the size of the subject can make a difference. For some named ranges, the size of the attachment range is based on the subject size.

The percentage values are relative to the size of animation attachment range, not the scrollport. Percentages are based on the size of the range, impacting the insets. Depending on the name, the start position may also change, impacting the location of the range and therefore the location of progress points.

```css live-sample___exit_percent
.animated_element {
  animation-range-start: exit-crossing -20%;
  animation-range-end: exit-crossing 20%;
}
```

```css hidden live-sample___exit_percent
article {
  background-image: none;
}
body .animated_element {
  align-self: start;
}
```

{{EmbedLiveSample("exit_percent", "100%", "400")}}

The animation lasts `40%` of the animation-attachment range. As you scroll, note how the larger the subject, the longer the range.

### Percentages equal to the scrollport

For the start and end percentages to be relative to the scrollport and the subjects, we use the `<timeline-range-name>` keyword `contain` along with the percentage for each of our `animation-range-*` values.

The `contain` range fully _contains_ the animation within the scrollport. It represents the range during which the principal box is either fully contained by, or fully covers, its view progress visibility range within the scrollport. With `contain`, if the subject is the same size or smaller than the scrollport, it can be fully visible, but if the element is the same size as the container, the animation is over `0px`, so happens, but is not visible to the user.

```css live-sample___center
.animated_element {
  animation-range-start: contain 25%;
  animation-range-end: contain 75%;
}
```

```css hidden live-sample___center
article {
  background-image: linear-gradient(
    transparent 25%,
    #ededed 25% 75%,
    transparent 75%
  );
}
body .animated_element {
  align-self: center;
}

.animated_element {
  background-image:
    linear-gradient(black, black), linear-gradient(black, black);
  background-size: 1px 1px;
  background-position:
    center 25%,
    center 75%;
  background-repeat: repeat-x;
}
```

Without needing to know the size of the container or the subjects, we are able to limit our animation to the middle of scrollport.

{{EmbedLiveSample("center", "100%", "310")}}

```html hidden live-sample___svg_contain live-sample___svg_insets2 live-sample___svg_view
<svg class="gradient">
  <title>Striped repeating gradient</title>
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

```css hidden live-sample___svg_contain live-sample___svg_insets2 live-sample___svg_view
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
  fill: #dedede;
}
text {
  font: 40px monospace;
  fill: black;
}
line {
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 7;
}
.gradient {
  height: 1px;
  width: 1px;
  position: absolute;
  top: -100px;
}
```

## See also

- {{cssxref("timeline-range-name")}} data type
- [Keyframe selectors](/en-US/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Scroll-driven animation timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
