---
title: "`@view-transition` CSS at-rule"
short-title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
page-type: css-at-rule
browser-compat: css.at-rules.view-transition
sidebar: cssref
---

The **`@view-transition`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) opts the current and destination documents in to a [view transition](/en-US/docs/Web/API/View_Transition_API) during a cross-document navigation.
It can also set the [types](/en-US/docs/Web/API/View_Transition_API/Using_types) of the view transition.

For a cross-document view transition to work, the current and destination documents of the navigation need to be on the same origin.

## Syntax

```css-nolint
@view-transition {
  navigation: auto | none;
  types: none | <custom-ident>+;
}
```

### Descriptors

- `navigation`
  - : A keyword specifying the effect this at-rule will have on the document's view transition behavior. Possible values are:
    - `auto`
      - : The document will undergo a view transition when taking part in a navigation, provided the navigation is [same-origin](/en-US/docs/Web/Security/Defenses/Same-origin_policy), without cross-origin redirects, and its {{domxref("NavigateEvent.navigationType", "navigationType")}} is `traverse`, `push`, or `replace`.
        A `push` or `replace` navigation must be started from the page, for example when the user clicks a link or submits a form, or when a script navigates to a new URL.
        It can't be started from the browser UI, for example by typing in the address bar or selecting a bookmark.
    - `none`
      - : The document will not undergo a view transition.
        This is the default value.

- `types`
  - : Specifies the view transition [types](/en-US/docs/Web/API/View_Transition_API/Using_types) to set on the active view transition for the document that contains the rule.
    To use the same types on both sides of the navigation, declare them in both the current and destination documents.
    Possible values are:
    - `<custom-ident>+`
      - : One or more space-separated {{cssxref("&lt;custom-ident>")}} values representing the types to set.
        In addition to the [usual restrictions](/en-US/docs/Web/CSS/Reference/Values/custom-ident#forbidden_values), the `<custom-ident>` values can't be `none` or start with `-ua-` (a prefix reserved for the browser).
    - `none`
      - : No types are set.
        This is the default value.

## Formal syntax

{{csssyntax}}

## Examples

### Transitioning page view

The following code snippets show key concepts used in a page transition demo.
The demo uses a cross-document view transition: a 0.4-second animation that runs when you navigate between two pages of a site.
For the full demo, see the [View transitions multi-page app demo](https://mdn.github.io/dom-examples/view-transitions/mpa/).

To opt both documents in to the view transition, include the `@view-transition` at-rule in the CSS of the current and destination documents:

```css
@view-transition {
  navigation: auto;
}
```

We also use the {{cssxref("@keyframes")}} at-rule to define two animations.
The {{cssxref("animation")}} shorthand property applies them to the snapshots of the outbound page ({{cssxref("::view-transition-old()")}}) and the inbound page ({{cssxref("::view-transition-new()")}}).

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

### Using view transition types

Our [multi-page app (MPA) transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)) demonstrates how to use `types` via `@view-transition`:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

See [Using types with cross-document view transitions via `@view-transition`](/en-US/docs/Web/API/View_Transition_API/Using_types#using_types_with_cross-document_view_transitions_via_view-transition) for a walkthrough of the referenced example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{domxref("CSSViewTransitionRule")}}
- {{domxref("Window.pageswap_event", "pageswap")}} event
- {{domxref("Window.pagereveal_event", "pagereveal")}} event
- [CSS at-rule functions](/en-US/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Using view transition types](/en-US/docs/Web/API/View_Transition_API/Using_types)
- [At-rules](/en-US/docs/Web/CSS/Guides/Syntax/At-rules)
