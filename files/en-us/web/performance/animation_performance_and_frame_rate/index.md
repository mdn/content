---
title: Animation performance and frame rate
slug: Web/Performance/Animation_performance_and_frame_rate
tags:
  - CSS animation
  - Developer Tools
  - Web Performance
---
{{draft}}

Animation on the web can be done via {{domxref('SVGAnimationElement', 'SVG')}}, {{domxref('window.requestAnimationFrame','JavaScript')}}, including {{htmlelement('canvas')}} and {{domxref('WebGL_API', 'WebGL')}}, CSS {{cssxref('animation')}}, {{htmlelement('video')}}, animated gifs and even animated PNGs and other image types. The performance cost of animating a CSS property can vary from one property to another, and animating expensive CSS properties can result in {{glossary('jank')}} as the browser struggles to hit a smooth {{glossary('frame rate')}}.

For animated media, such as video and animated gifs, the main performance concern is file size - downloading the file size fast enough to not negatively impact performance is the greatest issue. Code based animations, be it CSS, SVG, \<canvas>, webGL or other JavaScript animations, can cause performance issues even if the bandwidth footprint is small. These animations can consume CPU and/or cause jank.

While performance is sensitive to the particular system and its load, performance tools can help you understand the work the browser's doing to render your site, and help you prevent and diagnose problems when they occur.

Users expect all interface interactions to be smooth and all user interfaces to be responsive. Animation can help make a site feel faster and responsive, but animations can also make a site feel slower and janky if not done correctly. Responsive user interfaces have a frame rate of [60 frames per second (fps)](/en-US/docs/Tools/Performance/Frame_rate). While it is not always possible to maintain 60fps, it is important to maintain a high and steady frame rate for all animations. Let's take a look at how we can use browser tools to inspect the frame rate. We'll also discuss some tips to create and maintain a fast and steady frame rate.

The developer tool's [frame rate](/en-US/docs/Tools/Performance/Frame_rate) and [waterfall](/en-US/docs/Tools/Performance/Waterfall) charts provide insight into the work the browser is performing to animate code. Using these tools you can measure an application's animation frame rate, and diagnose performance bottlenecks if any are found.

With [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) you specify a number of [keyframes](/en-US/docs/Web/CSS/@keyframes), each of which uses CSS to define the appearance of the element at a particular stage of the animation. The browser creates the animation as a transition from each keyframe to the next.

Compared with animating elements using JavaScript, CSS animations can be easier to create. They can also give better performance, as they give the browser more control over when to render frames, and to drop frames if necessary.

However, the performance cost of modifying a CSS property can vary from one property to another. It's commonly accepted that 60 frames per second is the rate at which animations will appear smooth. For a rate of 60 frames per second, the browser has 16.7 milliseconds to execute scripts, recalculate styles and layout if needed, and repaint the area being updated. Slow scripts and animating expensive CSS properties can result in [jank](/en-US/docs/Glossary/Jank) as the browser struggles to hit a smooth frame rate.

## The rendering waterfall

The process a browser uses to paint changes to a page when an element is animating CSS properties can be described as a waterfall consisting of the following steps:

![](css-rendering-waterfall.png)

1.  **Recalculate Style**: when a property for an element changes, the browser must recalculate computed styles.
2.  **Layout**: next, the browser uses the computed styles to figure out the position and geometry for the elements. This operation is labeled "layout" but is also sometimes called "reflow".
3.  **Paint**: finally, the browser needs to repaint the elements to the screen. One last step is not shown in this sequence: the page may be split into layers, which are painted independently and then combined in a process called "Composition".

The process a browser uses to paint updated changes to a canvas element is different. In the \<canvas> scenario, the page layout is not changing. Rather, the page is being repainted, repeatedly, based on JavaScript canvas API functions.  When a canvas is animating a drawing, the canvas animation can be described as a waterfall consisting of the following steps:

These sequenced need to fit into a single frame, since the screen isn't updated until it is complete.

## CSS property cost

In the context of the rendering waterfall, some properties are more expensive than others:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Property type</th>
      <th scope="col">Cost</th>
      <th scope="col">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Properties that affect an element's <em>geometry</em> or
        <em>position</em> trigger a style recalculation, a layout and a repaint.
      </td>
      <td>
        <img alt="" src="recalculate-style.png" />
        <img alt="" src="layout.png" /> <img alt="" src="paint.png" />
      </td>
      <td>
        <p>
          <code><a href="/en-US/docs/Web/CSS/left">left</a></code
          ><br /><code
            ><a href="/en-US/docs/Web/CSS/max-width">max-width</a></code
          ><br /><code
            ><a href="/en-US/docs/Web/CSS/border-width">border-width</a></code
          ><br /><code
            ><a href="/en-US/docs/Web/CSS/margin-left">margin-left</a></code
          ><br /><code
            ><a href="/en-US/docs/Web/CSS/font-size">font-size</a></code
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          Properties that don't affect geometry or position, but are not
          rendered in their own layer, do not trigger a layout.
        </p>
      </td>
      <td>
        <img alt="" src="recalculate-style.png" />
        <img alt="" src="layout-faint.png" /> <img alt="" src="paint.png" />
      </td>
      <td>
        <p>
          <code><a href="/en-US/docs/Web/CSS/color">color</a></code>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Properties that are rendered in their own layer don't even trigger a
        repaint, because the update is handled in composition.
      </td>
      <td>
        <img alt="" src="recalculate-style.png" />
        <img alt="" src="layout-faint.png" />
        <img alt="" src="paint-faint.png" />
      </td>
      <td>
        <code><a href="/en-US/docs/Web/CSS/transform">transform</a></code
        ><br /><code><a href="/en-US/docs/Web/CSS/opacity">opacity</a></code>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** The [CSS Triggers](http://csstriggers.com/) website shows how much of the waterfall is triggered for each CSS property, with information for most CSS properties by browser engine.

## An example: margin versus transform

In this section we'll see how the [Waterfall](/en-US/docs/Tools/Performance/Waterfall) can highlight the difference between animating using [`margin`](/en-US/docs/Web/CSS/margin) and animating using [`transform`](/en-US/docs/Web/CSS/transform).

The intention of this scenario isn't to convince you that animating using `margin` is always a bad idea. It's to demonstrate how the tools can give you insight into the work the browser is doing to render your site, and how you can apply that insight to diagnose and fix performance problems.

If you want to play along, the demo website is [here](https://mdn.github.io/performance-scenarios/animation-transform-margin/index.html). It looks like this:

![](css-animations-demo.png)It has two controls: a button to start/stop the animation, and a radio group to choose to animate using `margin`, or to animate using `transform`.

There are a number of elements, and we've added a [`linear-gradient`](</en-US/docs/Web/CSS/linear-gradient()>) background and a [`box-shadow`](/en-US/docs/Web/CSS/box-shadow) to each element, because they are both relatively expensive effects to paint.

There's also a video version of this walkthrough:

{{EmbedYouTube("Tvu6_j8Qzfk")}}

### Animating using margin

Leaving the "Use margin" option set, start the animation, open the Performance tool, and make a recording. You'll only need to record a few seconds.

Open up the first recording. Exactly what you'll see depends a lot on your machine and system load, but it will be something like this:

![](margin-recording.png)

This is showing three distinct views: (a) an overview of the Waterfall, (b) the frame rate, and (c) the timeline details.

#### Waterfall overview

![](margin-timeline-overview.png)

This is showing a compressed view of the [Waterfall](/en-US/docs/Tools/Performance/Waterfall). The predominance of green is telling us that [we're spending a lot of time painting](/en-US/docs/Tools/Performance/Waterfall#timeline-color-coding).

#### Frame rate

![](margin-frame-rate.png)

This is showing [frame rate](/en-US/docs/Tools/Performance/Frame_rate). Average frame rate here is 46.67fps, well below the target of 60fps. Worse, though, is that the frame rate is very jagged, with lots of dips into the twenties and teens. It's unlikely you'll see a smooth animation here, especially when you add in user interaction.

#### Waterfall

The rest of the recording shows the Waterfall view. If you scroll through this, you'll see a pattern like this:

![](margin-timeline.png)

This is showing us the [rendering waterfall](/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties#the_css_rendering_waterfall). In each animation frame, we recalculate styles for every element, then perform a single layout, then a repaint.

You can see that paint especially is hurting performance here. In the screenshot above we've highlighted a paint operation, and the box on the right tells us it took 13.11ms. With only 16.7ms in our total budget, it's not surprising we are missing a consistently high frame rate.

You can experiment with this: try removing the box shadow [using the Page Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS), and see how that affects paint time. But next, we'll see how using [`transform`](/en-US/docs/Web/CSS/transform) instead of [`margin`](/en-US/docs/Web/CSS/margin) eliminates those expensive paints entirely.

### Animating using transform

Now switch the radio button in the web page to "Use transform", and make a new recording. It will look something like this:

![](transform-recording.png)

#### Waterfall overview

![](transform-timeline-overview.png)

Compared with [the version that uses margin](/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties#waterfall_overview), we're seeing a lot less green and a lot more pink, which[ could be either layout or style recalculation](/en-US/docs/Tools/Performance/Waterfall#timeline-color-coding).

#### Frame rate

![](transform-frame-rate.png)

Compared with [the version that uses margin](/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties#frame_rate), this is looking pretty good. We're averaging nearly 60fps, and apart from one dip near the start, we're getting a consistently high frame rate.

#### Waterfall

The timeline view shows the reason for the improved frame rate. Compared with [the version that uses margin](/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties#waterfall), we're not spending any time in layout or (more importantly in this case) in paint:

![](transform-timeline.png)

In this case, using `transform` significantly improved the site's performance, and the performance tools were able to show how and why it did.
