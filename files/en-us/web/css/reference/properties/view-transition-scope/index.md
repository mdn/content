---
title: "`view-transition-scope` CSS property"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
page-type: css-property
browser-compat: css.properties.view-transition-scope
sidebar: cssref
---

The **`view-transition-scope`** [CSS](/en-US/docs/Web/CSS) property enables the discoverability of elements with {{cssxref("view-transition-name")}} values set on them (for the purposes of creating view transition [snapshots](/en-US/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)) to be isolated to a specific element subtree.

## Syntax

```css
/* Keyword values */
view-transition-scope: none;
view-transition-scope: all;

/* Global values */
view-transition-scope: inherit;
view-transition-scope: initial;
view-transition-scope: revert;
view-transition-scope: revert-layer;
view-transition-scope: unset;
```

### Values

- `none`
  - : The initial value. Discoverability of elements to snapshot during a view transition is not limited to a selected element's subtree.
- `all`
  - : Discoverability of all snapshottable elements (with any non-`none` {{cssxref("view-transition-name")}}) during a view transition is limited to a selected element's subtree.

## Description

When a view transition is triggered, as part of [the process](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_process), the browser captures snapshots of elements that have a non-`none` {{cssxref("view-transition-name")}} set on them. These snapshots are then animated via CSS animations. The `view-transition-scope` property allows you to limit the scope inside which the browser will search for elements to snapshot to a particular DOM tree.

When `view-transition-scope: all` is set on an element, it limits the scope of [element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped) to that element and its descendants. The default value, `view-transition-scope: none`, means that no scope limiting will take place.

The `view-transition-scope` property was implemented so that element-scoped view transitions can be made self-contained. Whenever an element-scoped view transition is triggered, the browser automatically sets `view-transition-scope: all` on the transition scope's root element so that elements are only snapshotted and view transition animations applied inside the transition scope.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("view-transition-name")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using the View Transition API](/en-US/docs/Web/API/View_Transition_API/Using) guide
- [Using element-scoped view transitions](/en-US/docs/Web/API/View_Transition_API/Using_element-scoped)
