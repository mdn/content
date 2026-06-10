---
title: Using CSS scroll-triggered animations
short-title: Scroll-triggered animations
slug: Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
page-type: guide
sidebar: cssref
---

**CSS scroll-triggered animations** provide a declarative mechanism to trigger (for example, start, pause, or stop) {{domxref("DocumentTimeline")}}-based [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) when the user scrolls an element to a specified offset inside a scrollport.

This article covers how to use CSS scroll-triggered animations.

## Scroll-triggered animation concepts

A very common UI pattern involves triggering animations on a web page when the user scrolls to a certain place in the content, for example to pull in additional UI elements or draw the user's attention to certain details.

CSS scroll-triggered animations enable defining scroll-based triggers that start and stop [CSS animations](/en-US/docs/Web/CSS/Guides/Animations). For example, you can define trigger positions inside a {{glossary("scroll container")}} so that, when a tracked element reaches those positions within the scrollport, it toggles the play state of an animation applied to that element, or a completely different one.

> [!NOTE]
> Scroll-triggered animations provide an alternative to using JavaScript features such as the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) or frameworks to create scroll triggers. CSS scroll-triggered animations are more performant and, arguably, simpler to implement.

## Scroll-triggered animation basics

Let's walk through a basic example to show you how a scroll-triggered animation works. In this case:

- The trigger is the default [timeline range](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets) of an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function), set up on an {{htmlelement("img")}} element using a [`view()`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) function. In this case, the default timeline range equates to `cover`.
- A {{htmlelement("figcaption")}} element has a {{cssxref("@keyframes")}} animation set on it: a fade-in effect. We set the `<figcaption>` element's animation trigger to the trigger set on the `<img>` element, and we specify that we want the animation to play forwards when the trigger is activated (the `<img>` enters the timeline range), and play in reverse when the trigger is deactivated (the `<img>` leaves the timeline range).
- The result is that, as the page content is scrolled up and down, the `<figcaption>` will fade into view when the `<img>` starts to appear inside the scrollport, and fade out again once the `<img>` has left the scrollport. This is a basic example, and doesn't create the effect we want, but we'll start here and then improve it as we learn about more features later in the guide.

This example features several paragraphs of content with a {{htmlelement("figure")}} element included in the middle of them, which contains the `<img>` and `<figcaption>`. For the sake of brevity, we are not showing the full HTML source.

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

The following two rulesets provide everything you need to set up a scroll-triggered animation.

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

The first ruleset applies the animation properties to the {{htmlelement("figcaption")}} element:

1. We apply an {{cssxref("animation")}} to the `<figcaption>`. By itself, without triggers, this would cause the `<figcaption>` to fade into view as soon as the page loads.
2. To delay the start of the animation until the {{htmlelement("img")}} element is scrolled into view, we set an {{cssxref("animation-trigger")}} value on the `<figcaption>` defining which element will provide the triggers, and what those triggers are. This includes:
   - A {{cssxref("dashed-ident")}}, `--t`, which is the name of the trigger. As you will see later, this is equal to the value of the {{cssxref("timeline-trigger-name")}} property set on the `<img>` element.
   - Two {{cssxref("&lt;animation-action>")}} values, which specify how the animation should behave when the trigger is **activated** (enters the [activation range](#adjusting_the_trigger_activation_range)) and **deactivated** (exits the activation range, or [active range](#setting_a_custom_active_range) if one is set), respectively. When the trigger is activated, we set the `<figcaption>` element's animation to play forwards. When the trigger is deactivated, we set the `<figcaption>` element's animation to play backwards.

```css live-sample___basic-scroll-triggered live-sample___adjust-range live-sample___set-active-range
figcaption {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-forwards play-backwards;
}
```

The second ruleset sets up the triggers for the preceding animation on the `<img>` element:

1. We set the `<img>` element's `timeline-trigger-name` property to a value of `--t` to give it an identifying name for triggers created on it. This is the same dashed identifier as the trigger name referenced in the `<figcaption>` element's `animation-trigger` property value.
2. We create the type of animation trigger using the {{cssxref("timeline-trigger-source")}} property. Specifying the [`view()`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) function means our trigger type is an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).
3. As a result, the `<img>` element scrolling into and out of view in the block direction will trigger elements that select `--t` as their animation trigger: in this case, the `<figcaption>` element.

```css live-sample___basic-scroll-triggered
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

> [!NOTE]
> It is possible for the tracked element to be the same element as the animated element; see [Creating the trigger on the same element](#creating_the_trigger_on_the_same_element), later on.

The example renders like so:

{{embedlivesample("basic-scroll-triggered", "100%", 500)}}

Note how the caption starts to fade in as soon as any part of the image becomes visible in the scrollport, whether you are moving it in from the bottom or the top. It doesn't fade out again until the entire image has moved out of the scrollport, so by default, you won't see this. If you scroll the image into view again, the caption will fade in again.

The {{domxref("ViewTimeline")}} created by the `view()` function tracks the position of the `<img>` element (which is called the **subject** or the **tracked element** for this purpose) across the block-axis of the nearest parent scroller.

The triggers are activated and deactivated when the tracked element is scrolled to the start and end of the timeline range respectively, causing the `<figcaption>` to animate. By default, the animation range start is the point when the tracked element starts to enter the scrollport, and the animation range end is the point when the tracked element completely exits the scrollport. These are the activation and deactivation points, respectively.

### Scroll-triggered versus scroll-driven animations

Scroll-triggered animations are similar to [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations), but they are different:

- As demonstrated earlier, scroll-triggered animations are regular time-based animations that play when a trigger becomes active; they always complete in the same amount of time, regardless of how fast the user scrolls.
- With scroll-driven animations, the normal time-based animation timeline is replaced by a scroll-based timeline, meaning that the animation progresses forwards and backwards as you scroll towards the start and end of the content, with a faster scrolling speed resulting in a faster animation.

## Different types of trigger source

The `timeline-trigger-source` can be specified using various different values, most commonly:

- A [`view()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/view) function referencing an [anonymous view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) trigger. This is created on the nearest scrolling ancestor of the element that creates the trigger. As shown earlier, this allows you to create functionality whereby an element will start animating when it (or another element) reaches a certain scroll offset in the scrollport, and stop animating (or some other action) when it (or another element) reaches a different scroll offset. For example:
  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  ```
- A [`scroll()`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) function referencing an [anonymous scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) trigger. This can be created on the root element or the nearest scroller of the element that creates the trigger. This allows you to create functionality whereby an element will start animating when it (or another element) reaches an absolute scroll offset (for example, it scrolls upwards by `600px`), and stop animating (or some other action) when it (or another element) reaches a different offset. For example:
  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: scroll();
  timeline-trigger-activation-range: 600px;
  ```
  > [!NOTE]
  > See the [`timeline-trigger-source` `scroll()` example](/en-US/docs/Web/CSS/Reference/Properties/timeline-trigger-source#basic_scroll_progress_timeline_source_usage).
- A {{cssxref("dashed-ident")}} referencing a [named view progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) or [named scroll progress timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines). This involves setting a {{cssxref("view-timeline-name")}} or {{cssxref("scroll-timeline-name")}} on the element that creates the trigger, and then referring to that name in the value of the `timeline-trigger-source` property, for example:
  ```css
  view-timeline-name: --my-timeline;
  timeline-trigger-source: --my-timeline;
  ```

Scroll progress timelines are arguably not as useful for scroll-triggered animations as view progress timelines. You are more likely to want an animation to start at a scroll offset relative to the scrollport, not after an arbitrary amount of scrolling, where the animation may well be triggered offscreen on smaller screens.

## Creating the trigger on the same element

As we said earlier on, it is possible for the trigger to be created on the animated element — you might want to animate an element when it scrolls to a certain position in the scrollport. Let's demonstrate this with a modified version of the previous example in which the trigger is created on the {{htmlelement("figcaption")}} element (not the {{htmlelement("img")}} element), and the animated element is also the {{htmlelement("figcaption")}}.

The HTML is identical to the previous example. The CSS differs only in where the scroll-triggered animation properties are set.

This time, the {{cssxref("animation")}}, {{cssxref("animation-trigger")}}, {{cssxref("timeline-trigger-name")}}, and {{cssxref("timeline-trigger-source")}} properties are all set on the `<figcaption>` element — it will animate when it appears in the scrollport.

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

In this case, the `<figcaption>` fades into view when it starts to appear in the scrollport.

## Adjusting the trigger activation range

In the previous couple of examples, the trigger is activated (fade-in starts) when the tracked element starts to enter the scrollport from either edge, and the trigger is deactivated (fade-out starts) when the tracked element has completely left the scrollport at either edge — hence the fade out never being visible.

This is because the default activation range and active range when using a `view()` `timeline-trigger-source()` is the {{cssxref("timeline-range-name")}} `cover` value — the trigger activates as soon as the start edge of the tracked element enters the end edge of the scrollport, and deactivates when the end edge of the tracked element has exited the start edge of the scrollport.

We can change the start and end offsets of the activation range using the {{cssxref("timeline-trigger-activation-range-start")}} and {{cssxref("timeline-trigger-activation-range-end")}} properties, respectively, or the {{cssxref("timeline-trigger-activation-range")}} shorthand to set both values in a single declaration. Each these properties can take as values:

- A {{cssxref("length-percentage")}} value to specify a different point along the default range.
- A different `timeline-range-name` keyword to specify a different range.
- A `timeline-range-name` and a `<length-percentage>` to specify a certain point along a different range.

So for example, the following will cause the trigger to activate within a range between the end of the `entry` range (when the tracked element's end edge crosses the scrollport's end edge) and `70%` of the way through the `exit` range (slightly before the subject's end edge crosses the scrollport's start edge). Because the active range is the same as the activation range by default, the trigger will deactivate when the tracked element leaves that range.

```css
timeline-trigger-activation-range: entry 100% exit 70%;
```

Let's apply this to our first example so you can see what the effect is. Our `img` ruleset is updated to the following:

```css live-sample___adjust-range
img {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: entry 100% exit 70%;
}
```

The updated rendering looks like this:

{{embedlivesample("adjust-range", "100%", 500)}}

The animation of the `<figcaption>` is now a bit more useful — it only starts to fade into view when the `<img>` has completely entered the scrollport at its end edge, and it starts to fade out when `70%` of the `<img>` has exited the scrollport at its start edge.

## Setting a custom active range

By default, the active range is the same as the activation range. However, it is possible to set a different active range using the {{cssxref("timeline-trigger-active-range-start")}} and {{cssxref("timeline-trigger-active-range-end")}} properties, or the {{cssxref("timeline-trigger-active-range")}} shorthand to set both values in a single declaration.

You might want to do this, for example, if you have an animation that activates only within a small range, but once activated, you want the finished state of the animation to stay applied over a larger range. Only when the tracked element moves out of the active range does the trigger become inactive; after that, you can activate it again by moving the subject back into the activation range.

Let's look at an example that is similar to our previous examples, but different, to demonstrate the effect of the active range. In this example, the HTML is the same, except that we've got two identical `<figure>` elements with classes of `.one` and `.two`, contained within a wrapper `<div>`, which we've placed next to one another using flexbox.

```html
<div class="figure-wrapper">
  <figure class="one">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
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
      A beautiful butterfly seen in the Jungle near Cairns
    </figcaption>
  </figure>

  <figure class="two">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg"
      alt="A butterfly with red, white, and gold wing sections, sitting in a leaf" />
    <figcaption>
      A beautiful butterfly seen in the Jungle near Cairns
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

Our scroll-triggered animation CSS is slightly different too. We apply the same `animation` to both `<figcaption>` elements as in previous examples, but we reference two different `timeline-trigger-name` values in the their `animation-trigger` property values.

```css live-sample___set-active-range
figcaption {
  animation: fade-in 0.4s ease-in both;
}

.one figcaption {
  animation-trigger: --t play-forwards play-backwards;
}

.two figcaption {
  animation-trigger: --t2 play-forwards play-backwards;
}
```

Next, we set the same `timeline-trigger-source` and `timeline-trigger-activation-range` on both `<img>` elements. We then set two different `timeline-trigger-name` values on the two `<img>` elements — the same ones referenced in the previous code block, which means that each `<img>`'s created trigger acts as the trigger for the animation on its corresponding `<figcaption>`.

The `timeline-trigger-activation-range` of `contain 40% contain 60%` means that the trigger activates—and thus the animation starts playing—when the tracked element reaches a narrow range in the middle of the scrollport. However, we additionally set a `timeline-trigger-active-range` range of `entry 50% exit 100%` on the second `<img>`. This means that, once faded in, the second `<figcaption>` will only fade out again when it has completely left the scrollport.

```css live-sample___set-active-range
img {
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 40% contain 60%;
}

.one img {
  timeline-trigger-name: --t;
}

.two img {
  timeline-trigger-name: --t2;
  timeline-trigger-active-range: entry 50% exit 100%;
}
```

> [!WARNING]
> Because of the way the active range works, the `timeline-trigger-active-range` should always be set to a larger range than the `timeline-trigger-activation-range`. If set to a smaller range, it will have no effect.

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

Scroll the images into view, and then scroll them carefully up and down. Note how both captions fade into view at a point roughly one third up the embedded page. The first caption fades out again slightly further up, whereas the second one doesn't fade out until it has been moved completely out of the scrollport. This is because both `<img>` triggers have the same activation range, but only the second one has the much larger active range applied to it.

## The timeline-trigger shorthand

So far, we've written all of our scroll-triggered animation CSS out as a mixture of shorthand and longhand properties. This is cumbersome and wordy, but it helps you to understand each of the values we've set and what they do. However, now you've understood them, let's look at the shortest possible equivalent, which you'll probably write in all your code going forward.

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

## Adjusting the animation's action

Examine the following `animation-trigger` declaration, which is used in several of the previous examples:

```css
animation-trigger: --t play-forwards play-backwards;
```

The {{cssxref("animation-action")}} values `play-forwards` and `play-backwards` specify that the animation plays forwards when the trigger activates, and backwards when the trigger deactivates. If we set the following `animation` declaration on the same element:

```css
animation: fade-in 1s ease-in both;
```

The animation only happens once when the trigger is activated, and once in reverse when it is deactivated: we didn't specify an {{cssxref("animation-iteration-count")}} in our `animation` shorthand, therefore the default value, `1`, is used.

There are other `animation-action` values that can be set to produce different effects. For example:

- `play-once` causes the animation to play only once. Once finished, it won't play again on subsequent activations/deactivations.
- `play` causes the animation to play, in whatever direction it was previously playing in. In contrast, `play-forwards` and `play-backwards` ensure that the animation plays forwards or backwards, respectively, adjusting the animation's direction of play if required.
- `pause` causes the animation to pause. For example, you could set an animation's iteration count to `infinite`, and set the corresponding `animation-trigger` to `--t play pause`: This would cause the animation to play when the trigger is activated, and pause when it deactivates.
- `reset` has the same effect as `pause`, except that additionally it sets the animation progress back to `0`.

Some of these values are designed to be used together. For example, `play-forwards play-backwards` is very common when you want a UI element to "animate in" when it appears on-screen and then "animate out" again when it goes off-screen, whereas `play pause` is common for animating an element as it appears, then pausing the animation as it starts to go off-screen.

Let's look at a brief example — we'll take our first example and change it so that our `<figure>` fades in once when has completely entered the scrollport, and doesn't animate again until the page is reloaded.

We set the `animation-trigger` property's `animation-action` to `play-once` so that the animation only plays once when the `<figure>` first enters the activation range. We've also set the `timeline-trigger-activation-range` to `contain` so that the animation only plays when the `<figure>` is completely on-screen — it only plays once, so we don't want you to miss it.

```css live-sample___play-once
figure {
  animation: fade-in 1s ease-in both;
  animation-trigger: --t play-once;

  timeline-trigger: --t view() contain;
}
```

This example renders like so:

{{embedlivesample("play-once", "100%", 500)}}

When you first scroll the `<figure>` on-screen, it will fade in. However, from that point on, it will stay at `100%` opacity regardless of how many times you scroll it up and down the scrollport. You can only get it to fade in again after refreshing the page (or reloading the embedded example's `<iframe>`).

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
