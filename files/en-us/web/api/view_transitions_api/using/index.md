---
title: Using the View Transitions API
slug: Web/API/View_Transitions_API/Using
page-type: guide
status:
  - experimental
---

{{DefaultAPISidebar("View Transitions API")}}

This article explains the theory behind how the [View Transitions API](/en-US/docs/Web/API/View_Transitions_API) works, how to create view transitions and customize the transition animations, and how to manipulate active view transitions. This covers view transitions for both DOM state updates in a single-page app (SPA), and navigating between documents in a multi-page app (MPA).

## The view transition process

Let's walk through the process by which a view transition works:

1. A view transition is triggered. How this is done depends on the type of view transition:
   - In the case of same-document transitions (SPAs), a view transition is triggered by passing the function that would trigger the view change DOM update as a callback to the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} method.
   - In the case of cross-document transitions (MPAs), a view transition is triggered by initiating navigation to a new document. Both the current and destination documents of the navigation need to opt-in to the view transition by including a {{cssxref("@view-transition")}} at rule in their CSS with a `navigation` descriptor of `auto`.
     > **Note:** An active view transition has an associated {{domxref("ViewTransition")}} instance (for example, returned by `startViewTransition()` in the case of same-document (SPA) transitions). The `ViewTransition` object includes several promises, allowing you to run code in response to different parts of the view transition process being reached. See [Controlling view transitions with JavaScript](#controlling_view_transitions_with_javascript) for mroe information.
2. The API takes a screenshot of the current (old page) view.
3. The view change occurs:
   - In the case of same-document transitions (SPAs), the callback passed to `startViewTransition()` is invoked, which causes the DOM to change.
     > **Note:** When the callback has run successfully, the {{domxref("ViewTransition.updateCallbackDone")}} promise fulfills, allowing you to respond to the DOM updating.
   - In the case of cross-document transitions (MPAs), the navigation occurs between the current and destination documents.
4. The API captures the new view as a live representation.
   > **Note:** At this point, the view transition is about to run, and the {{domxref("ViewTransition.ready")}} promise fulfills, allowing you to respond by running a custom JavaScript animation instead of the default, for example.
5. The old page view animates "out", while the new view animates "in". By default, the old view animates from {{cssxref("opacity")}} 1 to 0 and the new view animates from `opacity` 0 to 1, which creates a cross-fade.
6. When the transition animation has reached its end state, the {{domxref("ViewTransition.finished")}} promise fulfills, allowing you to respond.

### The view transition pseudo-element tree

To handle creating the outbound and inbound transition animations, the API constructs a pseudo-element tree with the following structure:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

The most interesting parts of this structure are as follows:

- {{cssxref("::view-transition")}} is the root of view transitions overlay, which contains all view transitions and sits over the top of all other page content.
- {{cssxref("::view-transition-old")}} targets the screenshot of the old page view, and {{cssxref("::view-transition-new")}} targets the live representation of the new page view. Both of these render as replaced content, in the same manner as an {{htmlelement("img")}} or {{htmlelement("video")}}, meaning that they can be styled with handy properties like {{cssxref("object-fit")}} and {{cssxref("object-position")}}.
- The `root` argument specifies the default grouping for the view transition — that the view transition animation will apply to all DOM elements that change when the view is updated. It is possible to use target different DOM elements with different custom view transition animations — see [Different transitions for different elements](#different_transitions_for_different_elements).

> **Note:** As you'll see later, to customize the outbound and inbound animations you need to target the {{cssxref("::view-transition-old")}} and {{cssxref("::view-transition-new")}} pseudo-elements with your animations, respectively.

- In the case of same-document transitions (SPAs), the pseudo-element tree is made available in the document.
- In the case of cross-document transitions (MPAs), the pseudo-element tree is made available in both the current and destination documents.

## Creating a basic view transition

This section illustates how to create a basic view transition, in both the SPA and MPA case.

### Basic SPA view transition

As an example, an SPA may include functionality to fetch new content and update the DOM in response to an event of some kind, such as a navigation link being clicked or an update being pushed from the server. In our [View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/) we've simplified this to a `displayNewImage()` function that shows a new full-size image based on the thumbnail that was clicked. We've encapsulated this inside an `updateView()` function that only calls the View Transition API if the browser supports it:

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

This code is enough to handle the transition between displayed images. Supporting browsers will show the change from old to new images and captions as a smooth cross-fade (the default view transition). It will still work in non-supporting browsers but without the nice animation.

### Basic MPA view transition

When creating a cross-document (MPA) view transition, the process is even simpler than for SPAs — no JavaScript is required, as the view update is triggered by a document navigation rather than a JavaScript-initiated DOM change. To enable a basic MPA view transition, you need to specify a {{cssxref("@view-transition")}} at rule in the CSS for both the current and destination documents to opt them in, like so:

```css
@view-transition {
  navigation: auto;
}
```

Our [View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) shows this at-rule in action, and additionally demonstrates how to [customize the outbound and inbound animations](#customizing_your_animations) of the view transition.

> **Note:** Currently MPA view transitions can only be created between same-origin documents, but this restriction may be relaxed in future implementations.

## Customizing your animations

The View Transitions pseudo-elements have default [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) applied (which are detailed in their [reference pages](/en-US/docs/Web/API/View_Transitions_API#pseudo-elements)).

Most appearence transitions are given a default smooth cross-fade animation, as mentioned above. There are some exceptions:

- `height` and `width` transitions have a smooth scaling animation applied.
- `position` and `transform` transitions have a smooth movement animation applied.

You can modify the default animations in any way you want using regular CSS — target the "from" animation with {{cssxref("::view-transition-old")}}, and the "to" animation with {{cssxref("::view-transition-new")}}.

For example, to change the speed of both:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

In the case of cross-document (MPA) transitions, the CSS needs to be included in the current _and_ destination documents. You might think that you can just target `::view-transition-old(root)` in the current document and `::view-transition-new(root)` in the destination document but this results in some strange behavior, plus you'll probably want to navigate in the other direction at some point, in which case the old current document will become the new destination document, and the old destination document will become the new current document.

Our [View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) includes the above CSS, but takes the customization a step further, defining custom animations and applying them to the `::view-transition-old(root)` and `::view-transition-new(root)` pseudo-elements. The result is that the default cross-fade transition is swapped out for a "swipe up" transition when navigation occurs:

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

## Different transitions for different elements

By default, all of the different elements that change during the view update are transitioned using the same animation. If you want some elements to animate differently from the default `root` animation, you can separate them out using the {{cssxref("view-transition-name")}} property. For example, in our [View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/) the {{htmlelement("figcaption")}} elements are given a `view-transition-name` of `figure-caption` to separate them from the rest of the page in terms of view transitions:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

With this CSS applied, the generated pseudo-element tree will now look like this:

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

The existence of the second set of pseudo-elements allows separate view transition styling to be applied just to the `<figcaption>`. The different old and new view captures are handled separately from one another.

> **Note:** The value of `view-transition-name` can be anything you want except for `none` — the `none` value specifically means that the element will not participate in a view transition.
>
> `view-transition-name` values must also be unique. If two rendered elements have the same `view-transition-name` at the same time, {{domxref("ViewTransition.ready")}} will reject and the transition will be skipped.

The following code applies a custom animation just to the `<figcaption>`:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Here we've created a custom CSS animation and applied it to the `::view-transition-old(figure-caption)` and `::view-transition-new(figure-caption)` pseudo-elements. We've also added a number of other styles to both to keep them in the same place and stop the default styling from interfering with our custom animations.

### Taking advantage of the default animation styles

Note that we also discovered another transition option that is simpler and produced a nicer result than the above. Our final `<figcaption>` view transition ended up looking like this:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: 100%;
}
```

This works because, by default, `::view-transition-group` transitions `width` and `height` between the old and new views with a smooth scale. We just needed to set a fixed `height` on both states to make it work.

> **Note:** [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) contains several other customization examples.

## Controlling view transitions with JavaScript

A view transition has an associated {{domxref("ViewTransition")}} object instance, which contains several promise members allowing you to run JavaScript in response to different states of the transition being reached. For example, {{domxref("ViewTransition.ready")}} fulfills once the pseudo-element tree is created and the animation is about to start, whereas {{domxref("ViewTransition.finished")}} fulfills once the animation is finished, and the new page view is visible and interactive to the user.

The `ViewTransition` can be accessed like so:

1. In the case of same-document (SPA) transitions, the {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} method returns the `ViewTransition` associated with the transition.
2. In the case of cross-document (MPA) transitions:

- A {{domxref("Window.pageswap_event", "pageswap")}} event is fired when a document is about to be unloaded due to a navigation. Its event object ({{domxref("PageSwapEvent")}}) provides access to the `ViewTransition` via the {{domxref("PageSwapEvent.viewTransition")}} property, as well as a {{domxref("NavigationActivation")}} containing the navigation type and current and destination document history entries.
- A {{domxref("Window.pagereveal_event", "pagereveal")}} event is fired when a document is first rendered, either when loading a fresh document from the network or activating a document (either from [bfcache](https://web.dev/articles/bfcache) or [prerender](/en-US/docs/Glossary/Prerender)). Its event object ({{domxref("PageRevealEvent")}}) provides access to the `ViewTransition` via the {{domxref("PageRevealEvent.viewTransition")}} property.

Let's have a look at some example code to show how these features could be used.

### A JavaScript-powered custom same-document (SPA) transition

The following JavaScript could be used to create a circular reveal view transition emanating from the position of the user's cursor on click, with animation provided by the {{domxref("Web Animations API", "Web Animations API", "", "nocode")}}.

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don’t support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root’s new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

This animation also requires the following CSS, to turn off the default CSS animation and stop the old and new view states from blending in any way (the new state "wipes" right over the top of the old state, rather than transitioning in):

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

### A JavaScript-powered custom cross-document (MPA) transition

To achieve the same circular reveal view transition during a cross-document navigation, multiple steps are required:

1. Opt both pages in to cross-document view transitions using the {{cssxref("@view-transition")}} at rule, the same as we saw earlier:

   ```css
   @view-transition {
     navigation: auto;
   }
   ```

2. Store the mouse click location on the current page in [web storage](/en-US/docs/Web/API/Web_Storage_API) so that it can be retrieved by the destination page:

   ```js
   addEventListener("click", (event) => {
     sessionStorage.setItem("lastClickX", event.clientX);
     sessionStorage.setItem("lastClickY", event.clientY);
   });
   ```

3. Intercept the `ViewTransition` in the new document via the `pagereveal` event and use it to create the custom animation:

   ```js
   // This would run both on initial load and on reactivation from BFCache.
   addEventListener("pagereveal", async (event) => {
     if (!event.viewTransition) return;

     const x = sessionStorage.getItem("lastClickX") ?? innerWidth / 2;
     const y = sessionStorage.getItem("lastClickY") ?? innerHeight / 2;

     const endRadius = Math.hypot(
       Math.max(x, innerWidth - x),
       Math.max(y, innerHeight - y),
     );

     await event.viewTransition.ready;

     // Animate the new document's view
     document.documentElement.animate(
       {
         clipPath: [
           `circle(0 at ${x}px ${y}px)`,
           `circle(${endRadius}px at ${x}px ${y}px)`,
         ],
       },
       {
         duration: 500,
         easing: "ease-in",
         pseudoElement: "::view-transition-new(root)",
       },
     );
   });
   ```
