---
title: view-transition-class
slug: Web/CSS/view-transition-class
page-type: css-property
status:
  - experimental
browser-compat: css.properties.view-transition-class
---

{{CSSRef}}

The **`view-transition-class`** [CSS](/en-US/docs/Web/CSS) property provides the selected elements with an identifying class (a {{cssxref("custom-ident")}}) and provides an additional method of styling the view transitions for those elements.

> [!NOTE]
> Each individual element still needs its own unique {{cssxref("view-transition-name")}}. In browsers that don't support `view-transition-class`, you would also need to have a custom `::view-transition-group` for each element. Support for determining the `view-transition-name` automatically is being discussed in the [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) spec.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-class: card;

/* Keyword value */
view-transition-class: none;
```

### Values

- {{cssxref("custom-ident")}}
  - : An identifying name that causes the selected element to participate in a separate [view transition](/en-US/docs/Web/API/View_Transition_API) from the root view transition. The identifier must be unique. If two rendered elements have the same `view-transition-name` at the same time, {{domxref("ViewTransition.ready")}} will reject and the transition will be skipped.
- `none`
  - : No class would apply to the named view transition pseudo-elements generated for this element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

```css
::view-transition-group(.card) {
  animation-duration: 3s;
}

.card {
  view-transition-class: card;
}

.card#card1 {
  view-transition-name: card1;
}

.card#card2 {
  view-transition-name: card2;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("view-transition-name")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
