---
title: "Window: pageswap event"
short-title: pageswap
slug: Web/API/Window/pageswap_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Window.pageswap_event
---

{{APIRef("HTML DOM")}}{{seecompattable}}

The **`pageswap`** event is fired when a document is about to be unloaded due to a navigation.

This is useful in the case of cross-document (MPA) [view transitions](/en-US/docs/Web/API/View_Transitions_API) for manipulating an active transition from the outbound page of a navigation. For example, you might wish to skip the transition, or customize the outbound transition animation via JavaScript.

It also provides access to the navigation type and current and destination document history entries.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pageswap", (event) => {});
onpageswap = (event) => {};
```

## Event type

A {{domxref("PageSwapEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageSwapEvent")}}

## Event properties

- {{domxref("PageSwapEvent.activation")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NavigationActivation")}} object containing the navigation type and current and destination document history entries for a same-origin navigation. If the navigation has a cross-origin URL anywhere in the redirect chain, it returns `null`.
- {{domxref("PageSwapEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ViewTransition")}} object representing the inbound cross-document view transition, if one is active when the event is fired. If this is not the case, it returns `null`.

## Examples

```js
// When going to a detail page, set `profile-name` and `profile-avatar` vt-names
// on the elements that link to that detail page
window.addEventListener("pageswap", async (e) => {
  if (e.viewTransition) {
    const url = new URL(e.activation.entry.url);

    // Only transition to same basePath
    // ~> SKIP!
    if (!url.pathname.startsWith(basePath)) {
      e.viewTransition.skipTransition();
    }

    // Extract name from URL
    const match = profilePagePattern.exec(url);
    const profile = match?.pathname.groups.profile;

    // No name extract = not going to a detail page
    // ~> Don’t tweak VT
    if (!profile) return;

    // Set VT-names on clicked name
    document.querySelector(`#${profile} span`).style.viewTransitionName =
      "profile-name";
    document.querySelector(`#${profile} img`).style.viewTransitionName =
      "profile-avatar";

    // Remove VT-names from currently shown ones when already at a detail page
    // @TODO: Figure out why I had to set to x and y here, instead of just ''
    if (profilePagePattern.test(window.location.href)) {
      document.querySelector(`main h1`).style.viewTransitionName = "x";
      document.querySelector(`main img`).style.viewTransitionName = "y";
    }

    // Restore orig VT names after snapshots have been taken
    // (This to deal with BFCache)
    await e.viewTransition.finished;
    document.querySelector(`#${profile} span`).style.viewTransitionName = "z";
    document.querySelector(`#${profile} img`).style.viewTransitionName = "w";
    if (profilePagePattern.test(window.location.href)) {
      document.querySelector(`main h1`).style.viewTransitionName =
        "profile-name";
      document.querySelector(`main img`).style.viewTransitionName =
        "profile-avatar";
    }
  }
});
```

> **Note:** See [A JavaScript-powered custom cross-document (MPA) transition](/en-US/docs/Web/API/View_Transitions_API/Using#a_javascript-powered_custom_cross-document_mpa_transition) for a more complete example with explanations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the View Transitions API](/en-US/docs/Web/API/View_Transitions_API/Using)
- {{domxref("Window.pagereveal_event", "pagereveal")}} event
