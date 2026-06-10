---
title: CSS animation triggers
short-title: Animation triggers
slug: Web/CSS/Guides/Animation_triggers
page-type: css-module
spec-urls: https://drafts.csswg.org/animation-triggers-1/
sidebar: cssref
---

The **CSS animation triggers** module provides functionality for triggering standard time-based [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) that are initiated when a particular timeline trigger occurs.

**Scroll-triggered animations** allow you to control when a regular time-based animation starts, pauses, or stops based on when a trigger activates or deactivates, without using JavaScript. This could, for example, include when a scrolling element enters or leaves a [timeline range](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets).

The source of these ranges is normally [view progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines), enabling an animation to be started when an element enters a scrollport and ended when it leaves the scrollport. Triggers can specify different actions when entering versus exiting the timeline range, allowing control over animation playback.

The animation trigger module also defines **event triggers**. When supported, these will be used to activate timeline-based animations when specific DOM events occur.

## Animation triggers in action

This example demonstrates [scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations). Scroll the box up and down — the appearance of the "bouncer" text will trigger the ball's animation, and its disappearance will trigger the same animation in reverse. Scroll further, and the same process will repeat when the "another bouncer" text appears and then disappears from the scrollport.

```html hidden live-sample___in-action
<section>
  <div>
    <p>scroll down</p>
    <p id="trigger">bouncer</p>
    <p>keep scrolling</p>
    <p>keep scrolling</p>
    <p>keep scrolling</p>
    <p id="trigger2">another bouncer</p>
    <p>scroll up</p>
  </div>
</section>

<span id="ball"><span></span></span>
```

```css hidden live-sample___in-action
#ball,
#ball span {
  animation:
    moveright 2s 1 ease-out both,
    moveright 2s 1 ease-out forwards;
  animation-trigger:
    --t play-forwards play-backwards,
    --t2 play-forwards play-backwards;
}
#ball span {
  animation-name: bounce, bounce;
}

#trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
#trigger2 {
  timeline-trigger-name: --t2;
  timeline-trigger-source: view();
}

html {
  font-family: sans-serif;
  font-size: 1.3rem;
}

* {
  box-sizing: border-box;
}

@layer scroller {
  section {
    border: solid;
    width: 200px;
    height: 250px;
    margin-top: 50px;
    overflow: scroll;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 100% 0;
  }
  #trigger,
  #trigger2 {
    padding: 0;
    color: red;
  }
}

@layer animation-setup {
  #ball {
    position: fixed;
    top: 96vh;
  }
  #ball span {
    background: red;
    border-radius: 50%;
    height: 5vw;
    display: block;
    aspect-ratio: 1/1;
  }

  @keyframes moveright {
    from {
      transform: translatex(0);
    }
    to {
      transform: translatex(90vw);
    }
  }

  @keyframes bounce {
    9%,
    24%,
    35%,
    44%,
    51%,
    58%,
    63%,
    68%,
    72%,
    76%,
    to {
      transform: translatey(0);
      animation-timing-function: ease-out;
    }
    from,
    17%,
    30%,
    40%,
    48%,
    55%,
    61%,
    66%,
    70%,
    74% {
      animation-timing-function: ease-in;
    }
    0% {
      transform: translatey(-96vh);
    }
    17% {
      transform: translatey(-57.6vh);
    }
    30% {
      transform: translatey(-34.56vh);
    }
    40% {
      transform: translatey(-20.74vh);
    }
    48% {
      transform: translatey(-12.44vh);
    }
    55% {
      transform: translatey(-7.46vh);
    }
    61% {
      transform: translatey(-4.48vh);
    }
    66% {
      transform: translatey(-2.69vh);
    }
    70% {
      transform: translatey(-1.61vh);
    }
    74% {
      transform: translatey(-0.97vh);
    }
  }
}
```

```css hidden live-sample___in-action
@supports not (timeline-trigger-source: view()) {
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

{{embedlivesample("in-action", "100%", 400)}}

Both trigger elements have a {{cssxref("timeline-trigger-name")}} and {{cssxref("timeline-trigger-source")}}, defining the text blocks as named scroll-view animation triggers. The bouncing ball has the bouncing {{cssxref("animation")}} set on it twice, plus an {{cssxref("animation-trigger")}} property that references both trigger names and specifies animation actions to perform whenever an animation is activated by a trigger coming into view and deactivated when the trigger exits the scrollport.

## Reference

### Properties

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}} shorthand
- {{cssxref("timeline-trigger-activation-range")}} shorthand
  - {{cssxref("timeline-trigger-activation-range-end")}}
  - {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-active-range")}} shorthand
  - {{cssxref("timeline-trigger-active-range-end")}}
  - {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("trigger-scope")}}

The CSS animation triggers module also introduces the `event-trigger`, `event-trigger-name`, and `event-trigger-source` properties. Currently, no browsers support these features.

### Data types and values

- {{cssxref("&lt;animation-action>")}}

## Guides

- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
  - : A guide to implementing CSS scroll-triggered animations.
- [Timeline range names](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
  - : The {{cssxref("timeline-range-name")}} data type: Understanding the various timeline range names.
- [Understanding timeline insets](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets)
  - : Understanding the animation attachment range syntax used to inset scroll-driven and scroll-triggered animations.

## Related concepts

- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
  - {{cssxref("animation-timeline")}}
  - {{cssxref("@keyframes")}} at-rule
  - [`<keyframe-selector>`](/en-US/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
  - {{cssxref("animation-range")}} shorthand
    - {{cssxref("animation-range-end")}}
    - {{cssxref("animation-range-start")}}
  - {{cssxref("scroll-timeline")}} shorthand
    - {{cssxref("scroll-timeline-axis")}}
    - {{cssxref("scroll-timeline-name")}}
  - {{cssxref("timeline-scope")}}
  - {{cssxref("view-timeline")}} shorthand
    - {{cssxref("view-timeline-axis")}}
    - {{cssxref("view-timeline-inset")}}
    - {{cssxref("view-timeline-name")}}

## Specifications

{{Specifications}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/Guides/Animations/Using)
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS scroll-triggered animations are coming!](https://developer.chrome.com/blog/scroll-triggered-animations) on developer.chrome.com (2025)
