---
title: ::view-transition-group
slug: Web/CSS/::view-transition-group
page-type: css-pseudo-element
browser-compat: css.selectors.view-transition-group
---

{{CSSRef}}

The **`::view-transition-group`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents a single view transition snapshot group.

During a view transition, `::view-transition-group` is included in the associated pseudo-element tree as explained in [The view transition pseudo-element tree](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree). It is only ever a child of {{cssxref("::view-transition")}}, and has a {{cssxref("::view-transition-image-pair")}} as a child.

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

> [!NOTE]
> View transition styles are dynamically generated during the view transition; see the specification [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) and [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) sections for more details.

In addition, the element's transform is animated from the "old" view state's screen space transform to the new view state's screen space transform. This style is generated dynamically since the values of animated properties are determined at the time that the transition begins.

## Syntax

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

The accepted values are as follows:

- `*`
  - : The [universal selector (`*`)](/en-US/docs/Web/CSS/Universal_selectors); selects all view transition groups on a page.
- `root`
  - : The {{cssxref("view-transition-name")}} applied to {{cssxref(":root")}}. Causes the pseudo-element to match the default `root` view transition snapshot group created by the user agent to contain the view transition for the overall page. This group includes any element not assigned to its own specific view transition snapshot group via the `view-transition-name` property.
- `<pt-name-selector>`
  - : The {{cssxref("custom-ident")}} set as the value of the {{cssxref("view-transition-name")}} property.
- `<pt-class-selector>`
  - : The {{cssxref("custom-ident")}} set as the value of the {{cssxref("view-transition-class")}} property preceded by a period (`.`).

If using the parameter is the universal selector, the {{cssxref("specificity")}} of the named view transition pseudo-element selector is zero. Otherwise, the [specificity](/en-US/docs/Web/CSS/Specificity#type_column) is equal to a [type selector](/en-US/docs/Web/CSS/Type_selectors).

## Examples

```css
::view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}

::view-transition-group(.card) {
  animation-duration: 1s;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
