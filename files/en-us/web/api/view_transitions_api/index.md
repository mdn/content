---
title: View Transitions API
slug: Web/API/View_Transitions_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Document.startViewTransition
---

{{SeeCompatTable}}{{DefaultAPISidebar("View Transitions API")}}

The **View Transitions API** provides a mechanism for easily creating animated transitions between different website views. This includes animating between DOM states in a single-page app (SPA), and animating the navigation between documents in a multi-page app (MPA).

## Concepts and usage

View transitions are a popular design choice for reducing users' cognitive load, helping them stay in context, and reducing perceived loading latency as they move between states or views of an application.

However, creating view transitions on the web has historically been difficult:

- Transitions between states in single-page apps (SPAs) tend to involve writing significant CSS and JavaScript to:
  - Handle the loading and positioning of the old and new content.
  - Animate the old and new states to create the transition.
  - Stop accidental user interactions with the old content from causing problems.
  - Remove the old content once the transition is complete.
    Accessibility issues like loss of reading position, focus confusion, and strange live region announcement behavior can also result from having the new and old content both present in the DOM at once.
- Cross-document view transitions (i.e. across navigations between different pages in MPAs) have historically been impossible.

The View Transitions API provides an easy way of handling the required view changes and transition animations for both the above use cases.

Creating a view transition that uses the browser's default transition animations is very quick to do, and there are features that allow you to both customize the transition animation and manipulate the view transition itself (for example specify circumstances under which the animation is skipped), for both SPA and MPA view transitions.

See [Using the View Transitions API](/en-US/docs/Web/API/View_Transitions_API/Using) for more information.

## Interfaces

- {{domxref("NavigationActivation")}}
  - : Represents a cross-document navigation; contains the navigation type and current and destination document history entries.
- {{domxref("PageRevealEvent")}}
  - : The event object for the {{domxref("Window.pagereveal_event", "pagereveal")}} event. During a cross-document navigation, it allows you to manipulate the related view transition (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _to_, if a view transition was triggered by the navigation.
- {{domxref("PageSwapEvent")}}
  - : The event object for the {{domxref("Window.pageswap_event", "pageswap")}} event. During a cross-document navigation, it allows you to manipulate the related view transition (providing access to the relevant {{domxref("ViewTransition")}} object) from the document being navigated _from_, if a view transition was triggered by the navigation. It also provides access to information on the navigation type and current and destination documents.
- {{domxref("ViewTransition")}}
  - : Represents a view transition, and provides functionality to react to the transition reaching different states (e.g. ready to run the animation, or animation finished) or skip the transition altogether.

## Extensions to other interfaces

- {{domxref("Document.startViewTransition()")}}
  - : Starts a new view transition and returns a {{domxref("ViewTransition")}} object to represent it.
    The {{domxref("Window")}} {{domxref("Window.pagereveal_event", "pagereveal")}} event
  - : Fired when a document is first rendered, either when loading a fresh document from the network or activating a document (either from [bfcache](https://web.dev/articles/bfcache) or [prerender](/en-US/docs/Glossary/Prerender)).
    The {{domxref("Window")}} {{domxref("Window.pageswap_event", "pageswap")}} event
  - : Fired when a document is about to be unloaded due to a navigation.

## HTML additions

- [`<link rel="expect">`](/en-US/docs/Web/HTML/Attributes/rel#expect)
  - : Identifies the most critical content in the associated document for the user's initial view of the page. Document rendering will be blocked until the critical content has been parsed, ensuring a consistent first paint — and therefore, view transition — across all supporting browsers.

## CSS additions

### At-rules

- {{cssxref("@view-transition")}}
  - : Used to opt in the current and destination documents to undergoing a view transition, in the case of a cross-document navigation.

### Properties

- {{cssxref("view-transition-name")}}
  - : Provides the selected element with a separate identifying name and causes it to participate in a separate view transition from the root view transition — or no view transition if the `none` value is specified.

### Pseudo-elements

- {{cssxref("::view-transition")}}
  - : The root of the view transitions overlay, which contains all view transitions and sits over the top of all other page content.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : The root of a single view transition.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : The container for a view transition's old and new views — before and after the transition.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : A static screenshot of the old view, before the transition.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : A live representation of the new view, after the transition.

## Examples

- [Basic View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/): A basic image gallery demo with separate transitions between old and new images, and old and new captions.
- [Basic View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/): A sample two-page site that demonstrates usage of cross-document (MPA) view transitions, providing a smooth transition when the two pages are navigated between.
- [HTTP 203 playlist](https://http203-playlist.netlify.app/): A video player demo app that features a number of different SPA view transitions, many of which are explained in [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/)
