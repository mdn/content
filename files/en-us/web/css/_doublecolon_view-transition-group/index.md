---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
page-type: css-pseudo-element
status:
  - experimental
browser-compat: css.selectors.view-transition-group
---

{{CSSRef}}{{SeeCompatTable}}

The **`::view-transition-group`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a single view transition group.

During a view transition, `::view-transition-group` is included in the associated pseudo-element tree as explained in [The view transition process](/en-US/docs/Web/API/View_Transitions_API#the_view_transition_process). It is only ever a child of {{cssxref("::view-transition")}}, and has a {{cssxref("::view-transition-image-pair")}} as a child.

`::view-transition-group` is given the following default styling in the UA stylesheet:

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

By default, selected elements initially mirror the size and position of the {{cssxref("::view-transition-old")}} pseudo-element representing the "old" view state, or the {{cssxref("::view-transition-new")}} pseudo-element representing the "new" view state if there isn't an "old" view state.

If there's both an "old" and "new" view state, styles in the view transition style sheet animate this pseudo-element's {{cssxref("width")}} and {{cssxref("height")}} from the size of the "old" view state's border box to that of the "new" view state's border box.

> **Note:** View transition style sheet styles are dynamically generated during the view transition; see the specification [setup transition pseudo-elements](https://w3c.github.io/csswg-drafts/css-view-transitions-1/#setup-transition-pseudo-elements) and [update pseudo-element styles](https://w3c.github.io/csswg-drafts/css-view-transitions-1/#update-pseudo-element-styles) sections for more details.

In addition, the element's transform is animated from the "old" view state's screen space transform to the new view state's screen space transform. This style is generated dynamically since the values of animated properties are determined at the time that the transition begins.

## Syntax

```css-nolint
::view-transition-group(<pt-name-selector>) {
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
view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
