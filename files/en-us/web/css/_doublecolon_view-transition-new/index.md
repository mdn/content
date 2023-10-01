---
title: "::view-transition-new"
slug: Web/CSS/::view-transition-new
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.view-transition-new
---

{{CSSRef}}{{SeeCompatTable}}

The **`::view-transition-new`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the "new" view state of a view transition — a live representation of the new view, after the transition.

During a view transition, `::view-transition-new` is included in the associated pseudo-element tree as explained in [The view transition process](/en-US/docs/Web/API/View_Transitions_API#the_view_transition_process). It is only ever a child of a {{cssxref("::view-transition-image-pair")}}, and never has any children.

It is a replaced element, and therefore can be manipulated with properties such as {{cssxref("object-fit")}} and {{cssxref("object-position")}}. It has natural dimensions equal to the content's size.

The following default styling is included in the UA stylesheet:

```css
@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
}

html::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-name: -ua-view-transition-fade-in;
  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

> **Note:** Additional view transition style sheet styles are also setup to animate `::view-transition-new`. These are dynamically generated during the view transition; see the specification [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) and [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) sections for more details.

## Syntax

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` can be one of the following values:

- `*`
  - : Causes the pseudo-element to match all view transition groups.
- `root`
  - : Causes the pseudo-element to match the default `root` view transition group created by the user agent to contain the view transition for the overall page, meaning any element not assigned to its own specific view transition group via the {{cssxref("view-transition-name")}} property.
- {{cssxref("custom-ident")}}
  - : Causes the pseudo-element to match a specific view transition group created by assigning the given {{cssxref("custom-ident")}} to an element via the {{cssxref("view-transition-name")}} property.

## Examples

```css
figcaption {
  view-transition-name: figure-caption;
}

@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
