---
title: "@view-transition"
slug: Web/CSS/@view-transition
page-type: css-at-rule
browser-compat: css.at-rules.view-transition
---

{{CSSRef}}

The **`@view-transition`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to opt in the current and destination documents to undergo a [view transition](/en-US/docs/Web/API/View_Transitions_API), in the case of a cross-document navigation.

For a cross-document view transition to work, the current and destination documents of the navigation also need to be on the same origin.

## Syntax

```css
@view-transition {
  navigation: auto;
}
```

### Descriptors

- `navigation`

  - : Specifies the effect this at-rule will have on the document's view transition behavior. Possible values are:

    - `auto`: The document will undergo a view transition when taking part in a navigation, provided the navigation is same-origin, without cross-origin redirects, and its {{domxref("NavigateEvent.navigationType", "navigationType")}} is `traverse`, `push`, or `replace`. In the case of `push` or `replace`, the navigation must be initiated by a user interacting with the page content, not by a browser UI feature.

    - `none`: The document will not undergo a view transition.

## Formal syntax

{{csssyntax}}

## Examples

### Transitioning page view

The following code snippets show key concepts used in a page transition demo.
The demo uses cross-document view-transitions; a half second transition that occurs when navigating between two pages of a site.
For the full demo, see the [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

The `@view-transition` at-rule is specified in the CSS for both your current and destination documents of a navigation to opt them both in to the view transition:

```css
@view-transition {
  navigation: auto;
}
```

In addition to the `@view-transition` at-rule, we define two {{cssxref("@keyframe")}} animations and use the {{cssxref("animation")}} shorthand property to apply those keyframe animations to the elements in the outbound ({{cssxref("::view-transition-old()")}}) and inbound ({{cssxref("::view-transition-new()")}}) pages that we want to animate.

```css
/* Create a custom animation */
@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Apply the custom animation to the old and new page states */
::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

See this [transitions multi-page app](https://mdn.github.io/dom-examples/view-transitions/mpa/) demo live.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::view-transition", "::view-transition")}}
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
- [CSS at-rules](/en-US/docs/Web/CSS/At-rule)
- [CSS at-rule functions](/en-US/docs/Web/CSS/At-rule-functions)
