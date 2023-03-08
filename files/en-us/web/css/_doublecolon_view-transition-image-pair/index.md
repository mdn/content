---
title: "::view-transition-image-pair"
slug: Web/CSS/::view-transition-image-pair
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.view-transition-image-pair
---

{{CSSRef}}{{SeeCompatTable}}

The **`::view-transition-image-pair`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a container for a [view transition's](/en-US/docs/Web/API/View_Transitions_API) "old" and "new" view states — before and after the transition.

During a view transition, `::view-transition-image-pair` is included in the associated pseudo-element tree as explained in [The view transition process](/en-US/docs/Web/API/View_Transitions_API#the_view_transition_process). It is only ever a child of a {{cssxref("::view-transition-group")}}. In terms of children, it can have a {{cssxref("::view-transition-new")}} or a {{cssxref("::view-transition-old")}}, or both.

`::view-transition-image-pair` is given the following default styling in the UA stylesheet:

```css
html::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

During a view transition, `::view-transition-image-pair` has {{cssxref("isolation", "isolation: isolate")}} set on it in the view transition style sheet so that its children can be blended with non-normal blend modes without affecting other visual outputs.

## Syntax

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
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
::view-transition-image-pair(root) {
  isolation: auto;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
