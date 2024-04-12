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

### Basic usage

```css
@view-transition {
  navigation: auto;
}
```

You need to specify the above `@view-transition` at-rule in the CSS for both the current and destination documents of a navigation to opt them in to the view transition.

> **Note:** Our [View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) shows this at-rule in action, and additionally demonstrates how to customize the outbound and inbound animations of the view transition.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)
