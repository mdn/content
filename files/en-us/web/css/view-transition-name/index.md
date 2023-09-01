---
title: view-transition-name
slug: Web/CSS/view-transition-name
page-type: css-property
status:
  - experimental
browser-compat: css.properties.view-transition-name
---

{{CSSRef}}{{SeeCompatTable}}

The **`view-transition-name`** [CSS](/en-US/docs/Web/CSS) property provides the selected element with a distinct identifying name (a {{cssxref("custom-ident")}}) and causes it to participate in a separate [view transition](/en-US/docs/Web/API/View_Transitions_API) from the root view transition — or no view transition if the `none` value is specified.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-name: header;
view-transition-name: figure-caption;

/* Keyword value */
view-transition-name: none;
```

### Values

- {{cssxref("custom-ident")}}
  - : A distinct identifying name that causes the selected element to participate in a separate [view transition](/en-US/docs/Web/API/View_Transitions_API) from the root view transition. The identifier must be unique. If two rendered elements have the same `view-transition-name` at the same time, {{domxref("ViewTransition.ready")}} will reject and the transition will be skipped.
- `none`
  - : The selected element will not participate in a view transition.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

```css
figcaption {
  view-transition-name: figure-caption;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
