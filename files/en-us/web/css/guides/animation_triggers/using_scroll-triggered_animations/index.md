---
title: Using CSS scroll-triggered animations
short-title: Scroll-triggered animations
slug: Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
page-type: guide
sidebar: cssref
---

CSS **scroll-triggered animations** provide a declarative mechanism to start, pause, stop, or reverse an element's {{domxref("DocumentTimeline")}}-based [CSS animation](/en-US/docs/Web/CSS/Guides/Animations) when the user scrolls it (or a different element) to a specified offset within a scrollport.

This article covers how to create CSS scroll-triggered animations.

## Scroll-triggered animation concepts

A common UI pattern involves triggering animations on a web page when the user scrolls to a certain place in the content, for example, to pull in additional UI elements or draw the user's attention to certain details.

CSS scroll-triggered animations enable defining scroll-based triggers that start and stop regular time-based [CSS animations](/en-US/docs/Web/CSS/Guides/Animations). You can define trigger positions inside a {{glossary("scroll container")}} so that, when a tracked element reaches those positions within the scrollport, they toggle the play state of an animation applied to that element, or a completely different one.

> [!NOTE]
> Scroll-triggered animations provide an alternative to using JavaScript features — such as frameworks or the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) — to trigger animations on scroll. CSS scroll-triggered animations are more performant and, arguably, simpler to implement.

### Scroll-triggered versus scroll-driven animations

Scroll-triggered animations are similar to [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), but they are different:

- Scroll-triggered animations are regular time-based animations that play when a trigger becomes active; they observe the {{cssxref("animation-delay")}} each time the animation starts, and always complete iterations in the amount of time defined by the {{cssxref("animation-duration")}}, regardless of how fast the user scrolls.
- With scroll-driven animations, the normal time-based animation timeline is replaced by a scroll-based timeline, meaning that the animation progresses forwards and backwards as you scroll towards the start and end of the content, with a faster scrolling speed resulting in a faster animation. Scroll-driven animations ignore the `animation-duration` and `animation-delay` properties.

## Scroll-triggered animation basics

Let's walk through a basic example wherein an image's caption will fade in and out when the image it is captioning is scrolled into and out of view to show you how a scroll-triggered animation works. In this case:

- The {{htmlelement("figcaption")}} element has a {{cssxref("@keyframes")}} animation set on it: a `fade-in` effect. This animation is the _triggered animation_.
- We will specify that the animation should play forwards when the trigger is _activated_, fading the caption in, and play backwards when the trigger is _deactivated_, with the caption fading out. These are the _animation actions_.
- The _animation triggers_ are defined on the `<img>` element. The activation is triggered when the `<img>` starts entering the scrollport and the deactivation occurs when the `<img>` fully exits the viewport, meaning the full viewport is the _timeline range_, the `<img>` is the _tracked element_, and the `<figcaption>` is the _trigger-using element_.
- We'll set an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) as the _trigger source_ by using the [`view()`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) function on the {{htmlelement("img")}} element.

As the content is scrolled up and down, the caption's animation will start as soon as the `<img>` begins to appear inside the scrollport, with the animation reversing when the `<img>` exits the scrollport. This basic example doesn't create the effect we want, but we'll start here and improve it as we learn about more features.

The HTML features several paragraphs of content with a {{htmlelement("figure")}} element included in the middle of them, which contains the `<img>` and `<figcaption>`. For the sake of brevity, we are not showing the full source.

```html
...

<p>...</p>

<figure>
  <img
    src="jungle-coast.jpg"
    alt="A view across some trees towards a rocky coast" />
  <figcaption>A view of the Jungle coast</figcaption>
</figure>

<p>...</p>

...
```

```html hidden live-sample___basic-scroll-triggered live-sample___different-trigger live-sample___adjust-range live-sample___play-once
<h1>Information about Cairns</h1>

<p>
  The countryside surrounding Cairns, located in eastern Australia, is a
  breathtakingly beautiful region characterized by diverse landscapes, lush
  greenery, and unique natural wonders.
</p>

<p>
  Nestled between the Great Dividing Range and the sparkling Coral Sea, this
  area offers a stunning blend of tropical rainforests, pristine beaches, and
  majestic mountain ranges.
</p>

<p>
  As you venture away from the city, you'll be greeted by the verdant
  rainforests of the Wet Tropics World Heritage Area. Towering ancient trees,
  vibrant ferns, and cascading waterfalls create a serene and magical
  atmosphere.
</p>
<p>
  Exploring the lush undergrowth, you may encounter unique wildlife such as
  colourful birds, tree-dwelling mammals, and rare reptiles. The sounds of
  chirping birds and rushing water add to the symphony of nature, providing an
  immersive experience in this captivating wilderness.
</p>

<p>
  Traveling further, you'll discover the Atherton Tablelands, a plateau renowned
  for its fertile farmlands, rolling hills, and picturesque lakes. This
  agricultural heartland is dotted with quaint rural towns and farms producing
  an array of fresh produce.
</p>
<p>
  Fields of sugar cane, banana plantations, and dairy farms stretch as far as
  the eye can see, creating a patchwork of vibrant green hues against the
  backdrop of distant mountains. The region is also famous for its waterfalls,
  such as Millaa Millaa Falls, where crystal-clear water tumbles down verdant
  cliffs, offering a refreshing retreat.
</p>

<figure>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
    alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
  <figcaption>A beautiful butterfly seen in the Jungle near Cairns</figcaption>
</figure>

<p>
  No visit to the countryside surrounding Cairns is complete without exploring
  the stunning beaches that line the Coral Sea. From Palm Cove to Mission Beach,
  the coastline is adorned with golden sands, swaying palm trees, and azure
  waters. These idyllic beaches provide the perfect setting for relaxation,
  swimming, and water sports.
</p>
<p>
  Snorkeling enthusiasts can also discover the wonders of the Great Barrier
  Reef, a UNESCO World Heritage Site, which lies just off the coast. This
  vibrant underwater ecosystem teems with an incredible diversity of marine
  life, including colorful coral formations, tropical fish, and sea turtles.
</p>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>
<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walsh's Pyramid near Gordonvale.
</p>
```

We'll start by defining {{cssxref("@keyframes")}} for the `fade-in` animation we'll apply to our `<figcaption>`.

```css live-sample___basic-scroll-triggered live-sample___different-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

```css hidden live-sample___basic-scroll-triggered live-sample___different-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

figure {
  display: block;
  margin: 0 auto;
  max-width: 60%;
  position: relative;
}

img {
  max-width: 100%;
  border: 3px solid black;
}

h1 {
  font-size: 3rem;
}

p {
  line-height: 1.5;
}

figcaption {
  font-size: 1rem;
  padding: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  border: 3px solid black;
  background: white;
}
```

The first ruleset applies the animation and an animation trigger, along with the animation actions to the {{htmlelement("figcaption")}} element:

1. We use the {{cssxref("animation")}} shorthand to apply the `fade-in` animation to `<figcaption>`. By itself, without triggers, this would cause the `<figcaption>` to fade into view as soon as the page loads.
2. We use the {{cssxref("animation-trigger")}} property to define which element will provide the triggers, and what those trigger's actions will be. This results in the start of the animation being delayed until the {{htmlelement("img")}} element is scrolled into view. The `animation-trigger` property value components include:
   - A {{cssxref("dashed-ident")}}, `--t`, which is the identifier set as the value of the {{cssxref("timeline-trigger-name")}} property on the triggering element.
   - Two {{cssxref("&lt;animation-action>")}} values, which specify how the animation should behave when the trigger is activated and deactivated. When the trigger is activated, we set the `<figcaption>` element's animation to play forwards. When the trigger is deactivated, we set the `<figcaption>` element's animation to play backwards.

```css live-sample___basic-scroll-triggered live-sample___adjust-range live-sample___set-active-range
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
}
```

The second ruleset creates the animation trigger:

1. We use the `timeline-trigger-name` property to give the `<img>` element an identifying name for triggers created on it. This is the same dashed identifier as the trigger name referenced in the `<figcaption>` element's `animation-trigger` property value.
2. We use the {{cssxref("timeline-trigger-source")}} property to create the animation trigger type. Specifying the [`view()`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) function means our trigger type is an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function), which has a default [activation range](#adjusting_the_trigger_activation_range) of `cover` and a [timeline range](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) also equating to `cover`.

```css live-sample___basic-scroll-triggered
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

The {{domxref("ViewTimeline")}} created by the `view()` function tracks the position of the `<img>` element across the block-axis of the nearest parent scroller. The element that is tracked, in this case the `<img>`, is the **subject** or the **tracked element**.

The triggers are activated and deactivated when the tracked element is scrolled to the start and end of the timeline range respectively, in the block direction, causing the `<figcaption>` animation to play forwards and play backwards. This is the **activation range**. By default, the activation range is from the point when the tracked element starts to enter the scrollport to the point when the tracked element completely exits the scrollport.

The example renders like so:

{{embedlivesample("basic-scroll-triggered", "100%", 500)}}

Note how the caption starts to fade in as soon as any part of the image becomes visible in the scrollport, whether you are moving it in from the bottom or the top. It doesn't fade out again until the entire image has moved out of the scrollport, so you won't be able to see the fading out effect; if you scroll the image back into view, the caption will fade in again.

## Creating the trigger on the trigger-using element

It is possible for the tracked element to also be the trigger-using element by defining the trigger to be created on the trigger-using element itself. Let's modify the previous example to create the trigger on our trigger-using {{htmlelement("figcaption")}} element rather than the {{htmlelement("img")}} element.

The HTML is identical to the previous example. The CSS differs only in where the scroll-triggered animation `timeline-trigger-*` properties are set.

This time, the {{cssxref("animation")}}, {{cssxref("animation-trigger")}}, {{cssxref("timeline-trigger-name")}}, and {{cssxref("timeline-trigger-source")}} properties are all set on the `<figcaption>` element — it will animate when it appears in the scrollport. In the previous example, the `<figcaption>` was the trigger-using element and the `<img>` was the tracked element. Now the caption has both roles.

```css live-sample___different-trigger
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

The updated rendering looks like this:

{{embedlivesample("different-trigger", "100%", 500)}}

In this case, the `<figcaption>` fades into view when it, rather than the image, first enters into the scrollport.

## Adjusting the animation's action

In the previous examples, the animations played forward when it was activated and backwards when it was deactivated. This behavior was defined by the second and third space-separated values of the `animation-trigger` property declaration:

```css
animation-trigger: --t play-forwards play-backwards;
```

The {{cssxref("animation-action")}} values `play-forwards` specifies that the animation plays forwards. The `play-backwards` specifies that the animation plays backwards. The first `<animation-action>` in the property value is the action that occurs on trigger activation. The second value, `play-backwards`, is the action that is applied when the trigger deactivates.

We set `animation: fade-in 1s ease-in both`. We didn't specify an {{cssxref("animation-iteration-count")}} in our `animation` shorthand, therefore the default value, `1`. This is why the animation only iterated once when the trigger was activated, and one iteration, in reverse, when it was deactivated. With these values, every time the trigger is activated or deactivated, the animation plays through all of their iterations in the same direction or opposite direction, respectively, as set by the {{cssxref("animation-direction")}} property.

There are other `animation-action` values that can be set to produce different effects. For example:

- `play-once`
  - : Te animation plays only once. Once finished, it won't play again on subsequent activations/deactivations.
- `play`
  - : The animation plays, in whatever direction it was previously playing in. This is different from `play-forwards` and `play-backwards`, which specify that the animation plays in the same direction or opposition direction as set by the {{cssxref("animation-direction")}} property.
- `pause`
  - The animation, if not complete, pauses. For example, if an animation's iteration count is `infinite` and `animation-trigger: --t play pause` is set, once the trigger is activated, the animation will play infinitely, pausing when the trigger is deactivate, and resuming where it left off when re-activated.
- `reset`
  - This has the same effect as `pause`, except that it also sets the animation progress to `0`.

Some of these values are designed to be used together. For example, `play-forwards play-backwards` is very common when you want a UI element to "animate in" when it appears on-screen and then "animate out" when it goes off-screen, whereas `play pause` is common for animating an element as it appears, then pausing the animation as it starts to go off-screen.

Let's look at a brief example — we'll take our first example and change it so that our `<figure>` fades in once when has completely entered the scrollport, and doesn't animate again until the page is reloaded.

We set the `animation-trigger` property's `animation-action` to `play-once` so that the animation only plays once when the `<figure>` first enters the activation range. We've also set the `timeline-trigger-activation-range` to `contain` so that the animation only plays when the `<figure>` is completely on-screen — it only plays once, so we don't want you to miss it.

```css live-sample___play-once
figure {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-once;
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

This example renders like so:

{{embedlivesample("play-once", "100%", 500)}}

When you first scroll the `<figure>` on-screen, it will fade in. However, from that point on, it will stay at `100%` opacity regardless of how many times you scroll it up and down the scrollport. You can only get it to fade in again after refreshing the page (or reloading the embedded example's `<iframe>`).

## Adjusting the trigger activation range

In the previous examples, the trigger activates (`fade-in` starts) as soon as the start edge of the tracked element enters the end edge of the scrollport, and deactivates (fade-out starts, playing `fade-in` backwards) when the end edge of the tracked element has exited the start edge of the scrollport. As a result, the fade-out is never visible.

This is because the default activation range {{cssxref("timeline-range-name")}} when using a `view()` as the `timeline-trigger-source()` is `cover`.

We can change the active range and even offset the start and end of the selected activation range using the {{cssxref("timeline-trigger-activation-range-start")}} and {{cssxref("timeline-trigger-activation-range-end")}} properties, respectively, or the {{cssxref("timeline-trigger-activation-range")}} shorthand to set both values in a single declaration. Each these properties can take as values:

- A {{cssxref("length-percentage")}} value to specify a specific point from the start the default range.
- A {{cssxref("timeline-range-name")}} keyword specifying a named range.
- Both a `timeline-range-name` and a `<length-percentage>` to set a specific point from the start a specified range.

Percentages are relative to the length of the `<timeline-range-name>`, which resolves to `cover` for our [view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines). Had we set [`scroll()`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) as our {{cssxref("timeline-trigger-source")}}, the default `<timeline-range-name>` would have resolved to `scroll`. See [Timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) to learn about the `<timeline-range-name>` values.

The following example will cause the trigger to activate near the end of the `entry` range, just before the tracked element's end edge crosses the scrollport's end edge, when `90%` of the subject has entered the scrollport and `10%` is still out of view, and at the start of the `exit` range, when `10%` of the subject's end edge crosses the scrollport's start edge.

```css
timeline-trigger-activation-range: entry 90% exit 10%;
```

Let's apply this to our first example so you can see what the effect is. Our `img` ruleset is updated to the following:

```css live-sample___adjust-range
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 90% exit 10%;
}
```

The updated rendering looks like this:

{{embedlivesample("adjust-range", "100%", 500)}}

The animation of the `<figcaption>` is now a bit more useful; only starts to fade into view when the `<img>` has mostly entered the scrollport at its end edge, and it starts to fade out when `10%` of the `<img>` has exited the scrollport at its start edge.

## Setting a custom active range

The **active range** is the range within which a trigger will remain activated once activation has occurred. By default, the active range is the same as the activation range, with deactivation occurring when the tracked element leaves the activation range.

It is possible to set an active range that is different from the activation range with the {{cssxref("timeline-trigger-active-range-start")}} and {{cssxref("timeline-trigger-active-range-end")}} properties, or the {{cssxref("timeline-trigger-active-range")}} shorthand to set both values in a single declaration.

You might want to do this to extend the time an animation has to complete. For example, if you have an animation that activates only within a small range, but once activated, you want the finished state of the animation to stay applied over a larger range. Only when the tracked element moves out of the active range does the trigger become inactive; after that, you can activate it again by moving the subject back into the activation range.

Let's expand our previous examples to demonstrate the effect of the active range. The HTML is this same, except we've included two sibling `<figure>` elements placed next to one another using flexbox. In each case, the `<img>` will be the tracked element for its sibling trigger-using `<figcaption>`.

```html
<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      1. A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      2. A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>
</div>
```

```html hidden live-sample___set-active-range
<h1>Information about Cairns</h1>

<p>
  The countryside surrounding Cairns, located in eastern Australia, is a
  breathtakingly beautiful region characterized by diverse landscapes, lush
  greenery, and unique natural wonders.
</p>

<p>
  Nestled between the Great Dividing Range and the sparkling Coral Sea, this
  area offers a stunning blend of tropical rainforests, pristine beaches, and
  majestic mountain ranges.
</p>

<p>
  As you venture away from the city, you'll be greeted by the verdant
  rainforests of the Wet Tropics World Heritage Area. Towering ancient trees,
  vibrant ferns, and cascading waterfalls create a serene and magical
  atmosphere.
</p>
<p>
  Exploring the lush undergrowth, you may encounter unique wildlife such as
  colourful birds, tree-dwelling mammals, and rare reptiles. The sounds of
  chirping birds and rushing water add to the symphony of nature, providing an
  immersive experience in this captivating wilderness.
</p>

<p>
  Traveling further, you'll discover the Atherton Tablelands, a plateau renowned
  for its fertile farmlands, rolling hills, and picturesque lakes. This
  agricultural heartland is dotted with quaint rural towns and farms producing
  an array of fresh produce.
</p>
<p>
  Fields of sugar cane, banana plantations, and dairy farms stretch as far as
  the eye can see, creating a patchwork of vibrant green hues against the
  backdrop of distant mountains. The region is also famous for its waterfalls,
  such as Millaa Millaa Falls, where crystal-clear water tumbles down verdant
  cliffs, offering a refreshing retreat.
</p>

<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      1. A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      2. A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>
</div>

<p>
  No visit to the countryside surrounding Cairns is complete without exploring
  the stunning beaches that line the Coral Sea. From Palm Cove to Mission Beach,
  the coastline is adorned with golden sands, swaying palm trees, and azure
  waters. These idyllic beaches provide the perfect setting for relaxation,
  swimming, and water sports.
</p>
<p>
  Snorkeling enthusiasts can also discover the wonders of the Great Barrier
  Reef, a UNESCO World Heritage Site, which lies just off the coast. This
  vibrant underwater ecosystem teems with an incredible diversity of marine
  life, including colorful coral formations, tropical fish, and sea turtles.
</p>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>
<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walsh's Pyramid near Gordonvale.
</p>
```

We apply the same `animation` to both `<figcaption>` elements as in previous examples, but their `animation-trigger` property values reference two different `timeline-trigger-name` values.

```css live-sample___set-active-range
figcaption {
  animation: fade-in 0.4s ease-in both;
}

.one figcaption {
  animation-trigger: --t1 play-forwards play-backwards;
}

.two figcaption {
  animation-trigger: --t2 play-forwards play-backwards;
}
```

Next, we set the same `timeline-trigger-source` and `timeline-trigger-activation-range` on both `<img>` elements. We then set a `timeline-trigger-name` on each `<img>` element; these are the names referenced in the previous code block, which means that each `<img>`'s created trigger acts as the trigger for the animation on its own sibling `<figcaption>`.

The `timeline-trigger-activation-range: contain 40% contain 60%` declaration means that the trigger activates—and thus the animation starts playing—when the tracked element reaches a narrow range, the middle 20% of the scrollport, and deactivates when the subject exits that narrow range. We also set a `timeline-trigger-active-range` range of `entry 50% exit 100%` on the second `<img>`. This means that, once faded in, the second `<figcaption>` will only fade out again when the second `<img>` has completely left the scrollport.

```css live-sample___set-active-range
img {
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 40% contain 60%;
}

.one img {
  timeline-trigger-name: --t1;
}

.two img {
  timeline-trigger-name: --t2;
  timeline-trigger-active-range: entry 50% exit 100%;
}
```

Because of the way the active range works, the `timeline-trigger-active-range` should always be set to a larger range than the `timeline-trigger-activation-range`. If set to a smaller range, it will have no effect.

```css hidden live-sample___set-active-range
.figure-wrapper {
  display: flex;
  gap: 20px;
}

figcaption {
  left: 5px;
  right: -1px;
  bottom: 10px;
}
```

This example renders like so:

{{embedlivesample("set-active-range", "100%", 500)}}

Scroll the images into view, and then scroll them carefully up and down. Note how both captions fade into view at a point roughly one third up the embedded page. The first caption fades out again slightly further up, whereas the second one doesn't fade out until it has been moved completely out of the scrollport. This is because both `<img>` triggers have the same activation range, but the second `<img>` has a much larger active range applied to it.

## The timeline-trigger shorthand

So far, we've written all our scroll-triggered animation CSS out as a mixture of shorthand and longhand properties in order to best explain each of the properties and their values. However, this is cumbersome and wordy. Now you've understood the concepts, we can use the {{cssxref("timeline-trigger")}} shorthand to create the shortest possible equivalent. You'll likely opt for this shorthand in your future projects.

Taking these declarations as an example:

```css
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 25% contain 75%;
  timeline-trigger-active-range: entry 0% exit 100%;
}
```

We can rewrite these using the following shorthand:

```css
img {
  timeline-trigger: --t view() contain 25% contain 75% / entry 0% exit 100%;
}
```

The order is important! Always include a forward slash between the activation-range and the active range. Like all shorthand properties, all omitted components get reset to their initial default values.

## Trigger scope

When an animated element has an `animation-trigger` set on it, the browser determines what its trigger is as follows:

1. It walks up the animated element's ancestor tree until it finds an ancestor with a `timeline-trigger-name` set that is the same as the name referenced in its `animation-trigger` property value. If the animated element is also the element that creates the trigger, it will be found instantly.
2. If it can't find a suitable trigger created by an ancestor element, it will use the _last_ element in the HTML source order with that `timeline-trigger-name` value.
3. If it can't find an element anywhere in the DOM with that `timeline-trigger-name` value, the animated element won't be scroll-triggered; it will be animated on page load.

Having multiple triggers with the same `timeline-trigger-name` can be problematic. For example, if a document contains multiple repeated components, each containing a scroll-triggered animation where the animated element and tracked element are different elements, all of the animated elements will have their animations controlled by the last component's trigger. This is likely not the desired behavior. You could fix this by using a different `timeline-trigger-name` in each component, but this is inconvenient.

The {{cssxref("trigger-scope")}} property can fix this problem by limiting the visibility, or "scope", of a `timeline-trigger-name` value to a specific subtree. The result is that each animated element can only have its animation triggered by a trigger created within the same scoped subtree.

- `trigger-scope: all` sets the scope so that _any_ `timeline-trigger-name` values set in the subtree can only be associated with animated elements in the same subtree.
- `trigger-scope: --t1, --t2` sets the scope so that the specified `timeline-trigger-name` values, when set in the subtree, can only be associated with animated elements in the same subtree.
- `trigger-scope: none` is the default value; it specifies that no trigger scoping is set.

Let's look at an example that demonstrates the utility of setting `trigger-scope`.

In the markup for this example, we have three {{htmlelement("section")}} elements representing repeated components, each one containing an animated {{htmlelement("div")}} and another `<div>` to create its trigger. We also have a {{htmlelement("form")}} element containing a [checkbox](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox), which can be used to apply `trigger-scope` to the `<section>` elements when checked. It is initially unchecked, meaning no scoping is applied.

```html
<section id="one">
  <div class="animated"></div>
  ...
  <div class="trigger">First animation trigger</div>
  ...
</section>
<section id="two">...</section>
<section id="three">...</section>

<form>
  <label for="trigger-scope">
    Set <code>trigger-scope</code> on containers
  </label>
  <input id="trigger-scope" type="checkbox" />
</form>
```

```html hidden live-sample___trigger-scope
<section id="one">
  <div class="animated"></div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>

  <div class="trigger">First animation trigger</div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>
</section>
<section id="two">
  <div class="animated"></div>
  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>

  <div class="trigger">Second animation trigger</div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>
</section>
<section id="three">
  <div class="animated"></div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>

  <div class="trigger">Third animation trigger</div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>
</section>
<form>
  <label for="trigger-scope"
    >Set <code>trigger-scope</code> on containers</label
  >
  <input id="trigger-scope" type="checkbox" />
</form>
```

```css hidden live-sample___trigger-scope
body {
  width: 60%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
}

p {
  font-size: 1.3rem;
  line-height: 1.5;
}

section {
  background: #eee;
  padding: 10px 20px;
  margin-top: 20px;
}

.animated {
  width: 50px;
  height: 50px;
  background: red;
  border: 5px solid black;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
  padding: 5px;
  border: 2px solid black;
  background: white;
}
```

We begin our styling by giving each `.animated` `<div>` a {{cssxref("position")}} of `fixed`, and positioning them near the top of the scrollport. We do this so it is easy to see their animated state at all times. We also give each animated element the same `animation-trigger` value — their animations will all be triggered by a trigger with `timeline-trigger-name: --t`, and the animation will play when its trigger activates and then reset when it deactivates.

```css live-sample___trigger-scope
.animated {
  position: fixed;
  top: 10px;
  animation-trigger: --t play reset;
}
```

Each `.animated` `<div>` is then given a different `animation`, and a different {{cssxref("left")}} value so that they are not positioned on top of one another.

```css live-sample___trigger-scope
#one .animated {
  animation: fade-in 1s infinite alternate ease-in both;
  left: 10px;
}

#two .animated {
  animation: color-cycle 1s infinite alternate linear both;
  left: 110px;
}

#three .animated {
  animation: move-up-down 2s infinite linear both;
  left: 210px;
}
```

Next, we create triggers on our `.trigger` `<div>` elements by giving them a {{cssxref("timeline-trigger")}} value that references the same name value, `--t`, as the `.animated` `<div>` elements' `animation-trigger` properties. We also set some rudimentary styles to make them stand out from the rest of the text.

```css live-sample___trigger-scope
.trigger {
  timeline-trigger: --t view() contain;
  padding: 10px;
  border: 2px solid black;
  background: black;
  color: white;
}
```

We then define a `.scoped` class style, which sets a `trigger-scope` value of `all`. This `class` will be set on the three `<section>` elements when the checkbox is checked, and removed again when the checkbox is unchecked.

```css live-sample___trigger-scope
.scoped {
  trigger-scope: all;
}
```

Finally, we define the {{cssxref("@keyframes")}} referenced in the `animation` properties set earlier.

```css live-sample___trigger-scope
@keyframes fade-in {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes color-cycle {
  from {
    background: red;
  }

  to {
    background: blue;
  }
}

@keyframes move-up-down {
  25% {
    translate: 0 -10px;
  }

  75% {
    translate: 0 10px;
  }
}
```

```js hidden live-sample___trigger-scope
const sections = document.querySelectorAll("section");
const checkbox = document.querySelector("input");

checkbox.addEventListener("change", () => {
  sections.forEach((section) => {
    section.classList.toggle("scoped");
  });
});
```

The example renders like this:

{{embedlivesample("trigger-scope", "100%", 500)}}

Try scrolling through the example content without checking the checkbox. You should see that none of the red squares (the `.animated` `<div>` elements) animate until the third `.trigger` `<div>` is visible in the scrollport, at which point all of the red squares will start to animate — they are all using the last trigger created in the DOM as their trigger.

Now try scrolling up to the top of the content, checking the checkbox to apply `trigger-scope: all` to all of the `<section>` elements, and scrolling through the content again. This time you will only see one red square animate at a time — each one animates when the tracked element located inside the same `<section>` is visible in the scrollport.

## Multiple scroll-triggered animations

The {{cssxref("animation-trigger")}} property works in exactly the same way as the {{cssxref("animation")}} shorthand property and the other animation longhand properties with regards to setting [multiple values](/en-US/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values). If multiple `animation-name` values are set, but only a single `animation-trigger` value is set, the `animation-trigger` will apply to all the animations. If two `animation-trigger` values are set, they will cycle between the animations until all of them have an `animation-trigger` value set. And so on.

Let's look at an example that shows how you can use multiple animation triggers to progressively animate an element — applying further animations when new triggers are activated as the page scrolls.

The HTML for this example is similar to the HTML for previous examples except that we have included a {{htmlelement("section")}} element at the top containing some further content, and some empty {{htmlelement("div")}} elements interspersed throughout our main content that will have triggers created on them to trigger our animations.

```html
<section>
  <h2>Hello! This is my content!</h2>

  <p>
    The countryside surrounding Cairns, located in eastern Australia, is a
    breathtakingly beautiful region characterized by diverse landscapes, lush
    greenery, and unique natural wonders.
  </p>
</section>

<h1>Information about Cairns</h1>

<p>...</p>

<div id="one"></div>

...

<div id="two"></div>

...

<div id="three"></div>

...
```

```html hidden live-sample___multiple-triggers
<section>
  <h2>Hello! This is my content!</h2>

  <p>
    The countryside surrounding Cairns, located in eastern Australia, is a
    breathtakingly beautiful region characterized by diverse landscapes, lush
    greenery, and unique natural wonders.
  </p>
</section>

<h1>Information about Cairns</h1>

<p>
  The countryside surrounding Cairns, located in eastern Australia, is a
  breathtakingly beautiful region characterized by diverse landscapes, lush
  greenery, and unique natural wonders.
</p>

<p>
  Nestled between the Great Dividing Range and the sparkling Coral Sea, this
  area offers a stunning blend of tropical rainforests, pristine beaches, and
  majestic mountain ranges.
</p>

<p>
  As you venture away from the city, you'll be greeted by the verdant
  rainforests of the Wet Tropics World Heritage Area. Towering ancient trees,
  vibrant ferns, and cascading waterfalls create a serene and magical
  atmosphere.
</p>
<p>
  Exploring the lush undergrowth, you may encounter unique wildlife such as
  colourful birds, tree-dwelling mammals, and rare reptiles. The sounds of
  chirping birds and rushing water add to the symphony of nature, providing an
  immersive experience in this captivating wilderness.
</p>

<p>
  Traveling further, you'll discover the Atherton Tablelands, a plateau renowned
  for its fertile farmlands, rolling hills, and picturesque lakes. This
  agricultural heartland is dotted with quaint rural towns and farms producing
  an array of fresh produce.
</p>

<div id="one"></div>

<p>
  Fields of sugar cane, banana plantations, and dairy farms stretch as far as
  the eye can see, creating a patchwork of vibrant green hues against the
  backdrop of distant mountains. The region is also famous for its waterfalls,
  such as Millaa Millaa Falls, where crystal-clear water tumbles down verdant
  cliffs, offering a refreshing retreat.
</p>

<p>
  No visit to the countryside surrounding Cairns is complete without exploring
  the stunning beaches that line the Coral Sea. From Palm Cove to Mission Beach,
  the coastline is adorned with golden sands, swaying palm trees, and azure
  waters. These idyllic beaches provide the perfect setting for relaxation,
  swimming, and water sports.
</p>

<p>
  Snorkeling enthusiasts can also discover the wonders of the Great Barrier
  Reef, a UNESCO World Heritage Site, which lies just off the coast. This
  vibrant underwater ecosystem teems with an incredible diversity of marine
  life, including colorful coral formations, tropical fish, and sea turtles.
</p>

<div id="two"></div>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>

<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walsh's Pyramid near Gordonvale.
</p>

<p>
  Lastly, the surrounding countryside is home to an impressive array of national
  parks and mountains. Barron Gorge National Park, for instance, showcases
  rugged terrain, deep gorges, and thundering waterfalls.
</p>

<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walsh's Pyramid near Gordonvale.
</p>

<div id="three"></div>

<p>
  You can embark on hiking trails that lead to breathtaking viewpoints, offering
  panoramic vistas of the surrounding rainforest-clad mountains and valleys.
  Further west, the towering peaks of the Great Dividing Range present
  opportunities for adventurous hiking and exploring scenic vistas, including
  the iconic Walsh's Pyramid near Gordonvale.
</p>
```

In our CSS, we start by styling our `<section>` element, giving it a {{cssxref("position")}} of `fixed` and positioning it near the top-left of the scrollport. We then set three {{cssxref("animation")}} values, which will make the `<section>` slide in from the right of the screen, then reveal its contents, then slide down the screen and change its dimensions. Finally, we set an `animation-trigger` for each one of the animations so that they will be triggered by different triggers being activated.

We want the finished state of each animation to apply throughout, after it is reached, therefore it is important to set appropriate {{cssxref("animation-fill-mode")}} values and `<animation-action>` values on the animation triggers to achieve this. We had to set an `animation-fill-mode` of `forwards` rather than `both` on the last animation to avoid its keyframes being applied before the animation activates. Otherwise, its {{cssxref("@keyframes")}} styles would be applied on page load, which is not what we want.

```css hidden live-sample___multiple-triggers
body {
  overflow-x: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

section {
  background: red;
  color: #fff0;
  border: 10px solid black;
  padding: 10px;
  width: 400px;
  height: 50px;
}

section p {
  font-size: 1.2rem;
}
```

```css live-sample___multiple-triggers
section {
  position: fixed;
  left: 1em;
  top: 1em;
  animation:
    slide-from-right 1s both,
    reveal 1s both,
    slide-down 1s forwards;
  animation-trigger:
    --t play-forwards play-backwards,
    --t2 play-forwards play-backwards,
    --t3 play-forwards play-backwards;
}
```

Next, we create triggers on the `<div>` elements, setting their {{cssxref("timeline-trigger-name")}} equal to the identifiers specified in the `<section>` elements' `animation-trigger` property values. This means that as the user scrolls, when each tracked `<div>` enters the scrollport, a different animation will be activated. In this case, our tracked elements are invisible — they don't contain any useful content and are only here to create the triggers.

```css live-sample___multiple-triggers
#one {
  timeline-trigger: --t view();
}

#two {
  timeline-trigger: --t2 view();
}

#three {
  timeline-trigger: --t3 view();
}
```

At this point, we give the first and second `<div>` elements a `position` value of `sticky`. This is so that they are always kept on-screen when they scroll to the top of the scrollport, and therefore, the animations they have triggered are never deactivated. Depending on your use case, you might not need to do this — you can achieve a similar effect by instead setting `<animation-action>` values of `play-forwards pause` on your animation triggers, so that the animations pause at their end states when the tracked elements scroll off-screen at the top of the scrollport. However, the animations then behave oddly when you scroll backwards through the sequence.

```css live-sample___multiple-triggers
#one,
#two {
  position: sticky;
  top: 10px;
}
```

Finally, we define the animation {{cssxref("@keyframes")}} referenced in the `<section>` element's `animation` property earlier on.

```css live-sample___multiple-triggers
@keyframes slide-from-right {
  from {
    translate: 400%;
  }
  to {
    translate: 1em;
  }
}

@keyframes reveal {
  from {
    color: #fff0;
    height: 50px;
  }
  to {
    color: #ffff;
    height: 240px;
  }
}

@keyframes slide-down {
  from {
    top: 1em;
    background: red;
    width: 400px;
    height: 240px;
  }
  to {
    top: 48%;
    background: blue;
    width: 600px;
    height: 200px;
  }
}
```

```css hidden live-sample___basic-scroll-triggered live-sample___different-trigger live-sample___adjust-range live-sample___set-active-range live-sample___play-once live-sample___trigger-scope live-sample___multiple-triggers
@supports not (timeline-trigger-name: --t) {
  body::before {
    content: "Your browser does not support scroll-triggered animations.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

This example renders as follows:

{{embedlivesample("multiple-triggers", "100%", 500)}}

Try carefully scrolling the example, and note how each animation is applied to the `<section>` when each `<div>` is scrolled to.

## See also

- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [Using the Web Animations API](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [CSS scroll-triggered animations are coming!](https://developer.chrome.com/blog/scroll-triggered-animations) on developer.chrome.com (2025)
