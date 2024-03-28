---
title: "Window: pagereveal event"
short-title: pagereveal
slug: Web/API/Window/pagereveal_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Window.pagereveal_event
---

{{APIRef("HTML DOM")}}{{seecompattable}}

The **`pagereveal`** event is fired when a document is first rendered, either when loading a fresh document from the network or activating a document (either from [bfcache](https://web.dev/articles/bfcache) or [prerender](/en-US/docs/Glossary/Prerender)).

This is useful in the case of cross-document (MPA) [view transitions](/en-US/docs/Web/API/View_Transitions_API) for manipulating an active transition from the inbound page of a navigation. For example, you might wish to skip the transition, or customize the inbound transition animation via JavaScript.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pagereveal", (event) => {});
onpagereveal = (event) => {};
```

## Event type

A {{domxref("PageRevealEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PageRevealEvent")}}

## Event properties

- {{domxref("PageRevealEvent.viewTransition")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ViewTransition")}} object representing the inbound cross-document view transition, if one is active when the event is fired. If this is not the case, it returns `null`.

## Examples

```js
// When going from a detail page to the homepage, set `profile-name` and `profile-avatar` vt-names
// on the list item for the profile that was viewed on the detail page.
window.addEventListener("pagereveal", async (e) => {
  if (!navigation.activation.from) return;

  if (e.viewTransition) {
    const fromURL = new URL(navigation.activation.from.url);
    const currentURL = new URL(navigation.activation.entry.url);

    // Only transition to/from same basePath
    // ~> SKIP!
    if (!fromURL.pathname.startsWith(basePath)) {
      e.viewTransition.skipTransition();
    }

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (profilePagePattern.test(fromURL) && homePagePattern.test(currentURL)) {
      const match = profilePagePattern.exec(fromURL);
      const profile = match?.pathname.groups.profile;

      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "profile-name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "profile-avatar";

      // Clean up after snapshots have been taken
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName = "";
      document.querySelector(`#${profile} img`).style.viewTransitionName = "";
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
- {{domxref("Window.pageswap_event", "pageswap")}} event
