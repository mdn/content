---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
page-type: css-property
browser-compat: css.properties.timeline-scope
sidebar: cssref
---

The **`timeline-scope`** [CSS](/en-US/docs/Web/CSS) property modifies the scope of a named animation timeline.

## Syntax

```css
/* Keyword values */
timeline-scope: all;
timeline-scope: none;

/* Custom name values */
timeline-scope: --custom_name_for_timeline;
timeline-scope: --timeline_name_one, --timeline_name_two;

/* Global values */
timeline-scope: inherit;
timeline-scope: initial;
timeline-scope: revert;
timeline-scope: revert-layer;
timeline-scope: unset;
```

### Values

Allowed values for `timeline-scope` are:

- `none`
  - : There is no change in timeline scope. This is the default.
- `all`
  - : The names of all timelines defined by descendants are in scope for this element and its descendants.
- `<dashed-ident>`
  - : Specifies the name of an existing named timeline (i.e., declared using {{cssxref("scroll-timeline-name")}} or {{cssxref("view-timeline-name")}}) defined on a descendant element. This increases the timeline scope to the current element and to any of its descendants.

## Description

The `timeline-scope` property modifies the scope of a named animation timeline. By default, a [named timeline](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (i.e., declared using {{cssxref("scroll-timeline-name")}} or {{cssxref("view-timeline-name")}}) can only be set as the controlling timeline of a direct descendant element (i.e., by setting {{cssxref("animation-timeline")}} on it with the timeline name as its value). This is the default "scope" for the timeline.

The value of the `timeline-scope` is the name of a timeline defined on a descendant element; this changes the scope of the timeline to include the targeted element and its descendants. In other words, that element on which the `timeline-scope` property is defined, and all of its descendant elements, can be controlled using that timeline.

If no timeline (or more than one timeline) exists with the name given for the `timeline-scope` value, an inactive timeline with the specified name is created. The `timeline-scope` property only works with named timelines, and therefore can not be used in conjunction with anonymous timelines created using the {{cssxref("animation-timeline/view", "view()")}} or {{cssxref("animation-timeline/scroll", "scroll()")}} animation timeline functions.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

In this example, we animated an element in response to the scrolling of another element by increasing the timeline scope with the `timeline-scope` property.

### HTML

The HTML includes an element to animate and an element to scroll:

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

A scroll timeline named `--my-scroller` is defined using the {{cssxref("scroll-timeline-name")}} property on a scrolling element. This scroll timeline name is used in two other places: it is applied as the {{cssxref("animation-timeline")}} on the element we want to animate, and as `timeline-scope` on an ancestor of both the scroller and the animated element, increasing the scope.

We set the `<body>`'s height to `100vh`, and lay its two child elements out as two equal columns using flexbox. To increase the timeline scope from the `<div class="scroller">` element to the whole `<body>`, we set `timeline-scope: --my-scroller` on it. By doing so, the `--my-scroller` timeline can be set as the controlling timeline for an animation set on the `<body>` or any element nested inside it.

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  timeline-scope: --my-scroller;
}

.content,
.scroller {
  flex: 1;
}
```

We set `--my-scroller` as the {{cssxref("scroll-timeline-name")}} on the scrolling element that should provide the scroll progress timeline for our animated element. We add {{cssxref("overflow")}} to enable scrolling, adding a background color to make its boundary visible. We set a large {{cssxref("height")}} on the contents of our scrolling element so the element actually scrolls.

```css
.scroller {
  overflow: scroll;
  scroll-timeline-name: --my-scroller;
  background: deeppink;
}

.long-element {
  height: 2000px;
}
```

Next, we give the animated element some rudimentary styles and apply an animation to it using the {{cssxref("animation")}} shorthand property. We set the {{cssxref("animation-timeline")}} to the named scroll timeline: `--my-scroller`. To reiterate, animating the element based on the scroll progress of it's cousin element is only possible because we set `timeline-scope` on a mutual ancestor; the animated element is **not** a descendant of the scrolling element.

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
}

.animation {
  animation: rotate-appear 1ms linear;
  animation-timeline: --my-scroller;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    translate: 0;
  }

  to {
    rotate: 720deg;
    translate: 100%;
  }
}
```

```css hidden
@layer supports {
  @supports not (timeline-scope: none) {
    body::before {
      content: "Your browser does not support the 'timeline-scope' property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem;
    }
  }
}
```

### Result

Scroll the vertical bar on the pink area to see the square animate.

{{EmbedLiveSample("Examples", "100%", "320px")}}

The key point to note here is that the animated element is not a descendant of the scrolling element — to make this work, we increase the scope of the `--my-scroller` timeline by setting `timeline-scope: --my-scroller` on the {{htmlelement("body")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
