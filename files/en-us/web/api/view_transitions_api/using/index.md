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
   - In the case of cross-document transitions (MPAs), a view transition is triggered by initiating navigation to a new document. Both the current and destination documents of the navigation need to be on the same origin, and opt-in to the view transition by including a {{cssxref("@view-transition")}} at rule in their CSS with a `navigation` descriptor of `auto`.
     > **Note:** An active view transition has an associated {{domxref("ViewTransition")}} instance (for example, returned by `startViewTransition()` in the case of same-document (SPA) transitions). The `ViewTransition` object includes several promises, allowing you to run code in response to different parts of the view transition process being reached. See [Controlling view transitions with JavaScript](#controlling_view_transitions_with_javascript) for more information.
2. On the current (old page) view, the API captures snapshots of elements that have a {{cssxref("view-transition-name")}} declared on them.
3. The view change occurs:

   - In the case of same-document transitions (SPAs), the callback passed to `startViewTransition()` is invoked, which causes the DOM to change.

     When the callback has run successfully, the {{domxref("ViewTransition.updateCallbackDone")}} promise fulfills, allowing you to respond to the DOM updating.

   - In the case of cross-document transitions (MPAs), the navigation occurs between the current and destination documents.

4. The API captures snapshots from the new view as a live representation.

   At this point, the view transition is about to run, and the {{domxref("ViewTransition.ready")}} promise fulfills, allowing you to respond by running a custom JavaScript animation instead of the default, for example.

5. The old page snapshots animate "out", while the new view snapshots animate "in". By default, the old view snapshots animate from {{cssxref("opacity")}} 1 to 0, and the new view snapshots animate from `opacity` 0 to 1, which creates a cross-fade.
6. When the transition animations have reached their end states, the {{domxref("ViewTransition.finished")}} promise fulfills, allowing you to respond.

> **Note:**
> If the document's [page visibility state](/en-US/docs/Web/API/Page_Visibility_API) is `hidden` (for example if the document is obscured by a window, the browser is minimized, or another browser tab is active) during a {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} call, the view transition is skipped entirely.

### The view transition pseudo-element tree

To handle creating the outbound and inbound transition animations, the API constructs a pseudo-element tree with the following structure:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> **Note:** a {{cssxref("::view-transition-group")}} subtree is created for every captured `view-transition-name`.

In the case of same-document transitions (SPAs), the pseudo-element tree is made available in the document. In the case of cross-document transitions (MPAs), the pseudo-element tree is made available in the destination document only.

The most interesting parts of the tree structure are as follows:

- {{cssxref("::view-transition")}} is the root of view transitions overlay, which contains all view transition snapshot groups and sits over the top of all other page content.
- A {{cssxref("::view-transition-group")}} acts as a container for each view transition snapshot group. The `root` argument specifies the default snapshot group — the view transition animation will apply to the snapshot whose `view-transition-name` is `root`. By default, this is the {{cssxref(":root")}} element, because the default browser styles define this:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Be aware however that page authors can change this by unsetting the above, and setting `view-transition-name: root` on a different element.

- {{cssxref("::view-transition-old")}} targets the static snapshot of the old page element, and {{cssxref("::view-transition-new")}} targets the live snapshot of the new page element. Both of these render as replaced content, in the same manner as an {{htmlelement("img")}} or {{htmlelement("video")}}, meaning that they can be styled with handy properties like {{cssxref("object-fit")}} and {{cssxref("object-position")}}.

> **Note:** It is possible to target different DOM elements with different custom view transition animations by setting a different {{cssxref("view-transition-name")}} on each one. In such cases, a `::view-transition-group` is created for each one. See [Different animations for different elements](#different_animations_for_different_elements) for an example.

> **Note:** As you'll see later, to customize the outbound and inbound animations you need to target the {{cssxref("::view-transition-old")}} and {{cssxref("::view-transition-new")}} pseudo-elements with your animations, respectively.

## Creating a basic view transition

This section illustrates how to create a basic view transition, in both the SPA and MPA case.

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

When creating a cross-document (MPA) view transition, the process is even simpler than for SPAs. No JavaScript is required, as the view update is triggered by a cross-document, same-origin navigation rather than a JavaScript-initiated DOM change. To enable a basic MPA view transition, you need to specify a {{cssxref("@view-transition")}} at-rule in the CSS for both the current and destination documents to opt them in, like so:

```css
@view-transition {
  navigation: auto;
}
```

Our [View Transitions MPA demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) shows this at-rule in action, and additionally demonstrates how to [customize the outbound and inbound animations](#customizing_your_animations) of the view transition.

> **Note:** Currently MPA view transitions can only be created between same-origin documents, but this restriction may be relaxed in future implementations.

## Customizing your animations

The View Transitions pseudo-elements have default [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) applied (which are detailed in their [reference pages](/en-US/docs/Web/API/View_Transitions_API#pseudo-elements)).

Most appearance transitions are given a default smooth cross-fade animation, as mentioned above. There are some exceptions:

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

It is recommended that you target the `::view-transition-group()` with such styles in cases where you want to apply them to `::view-transition-old()` and `::view-transition-new()`. Because of the pseudo-element hierarchy and default user-agent styling, the styles will be inherited by both. For example:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> **Note:** This is also a good option for safeguarding your code — `::view-transition-group()` also animates and you could end up with different durations for the `group`/`image-pair` pseudo-elements versus the `old` and `new` pseudo-elements.

In the case of cross-document (MPA) transitions, the pseudo-elements need to be included in the destination document only for the view transition to work. If you want to use the view transition in both directions, you'll need to include it in both, of course.

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

## Different animations for different elements

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

::view-transition-group(figure-caption) {
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

> **Note:** You can use `*` as the identifier in a pseudo-element to target all snapshot pseudo-elements, regardless of what name they have. For example:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Taking advantage of the default animation styles

Note that we also discovered another transition option that is simpler and produced a nicer result than the above. Our final `<figcaption>` view transition ended up looking like this:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
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

   - A {{domxref("Window.pageswap_event", "pageswap")}} event is fired when a document is about to be unloaded due to a navigation. Its event object ({{domxref("PageSwapEvent")}}) provides access to the `ViewTransition` via the {{domxref("PageSwapEvent.viewTransition")}} property, as well as a {{domxref("NavigationActivation")}} via {{domxref("PageSwapEvent.activation")}} containing the navigation type and current and destination document history entries.
     > **Note:** If the navigation has a cross-origin URL anywhere in the redirect chain, the `activation` property returns `null`.
   - A {{domxref("Window.pagereveal_event", "pagereveal")}} event is fired when a document is first rendered, either when loading a fresh document from the network or activating a document (either from [back/forward cache](/en-US/docs/Glossary/bfcache) (bfcache) or [prerender](/en-US/docs/Glossary/Prerender)). Its event object ({{domxref("PageRevealEvent")}}) provides access to the `ViewTransition` via the {{domxref("PageRevealEvent.viewTransition")}} property.

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

The [List of Chrome DevRel team members](https://view-transitions.netlify.app/profiles/mpa/) demo provides a basic set of team profile pages, and demonstrates how to use the {{domxref("Window.pageswap_event", "pageswap")}} and {{domxref("Window.pagereveal_event", "pagereveal")}} events to customize the outgoing and inbound animations of a cross-document view transition based on the "from" and "to" URLs.

The {{domxref("Window.pageswap_event", "pageswap")}} event listener looks as follows. This sets view transition names on the elements on the outbound page that link to the profile pages. When navigating from the home page to a profile page, custom animations are provided _only_ for the linked element that is clicked in each case.

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> **Note:** We remove the `view-transition-name` values after snapshots have been taken in each case. If we left them set, they would persist in the page state saved in the [bfcache](/en-US/docs/Glossary/bfcache) upon navigation. If the back button was then pressed, the `pagereveal` event handler of the page being navigated back to would then attempt to set the same `view-transition-name` values on different elements. If multiple elements have the same `view-transition-name` set, the view transition is skipped.

The {{domxref("Window.pagereveal_event", "pagereveal")}} event listener looks as follows. This works in a similar way to the `pageswap` event listener, although bear in mind that here we are customizing the "to" animation, for page elements on the new page.

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## Stabilizing page state to make cross-document transitions consistent

Before running a cross-document transition, you ideally want to wait until the state of the page stabilizes, relying on [render blocking](/en-US/docs/Glossary/Render_blocking) to ensure that:

1. Critical styles are loaded and applied.
2. Critical scripts are loaded and run.
3. The HTML visible for the user's initial view of the page has been parsed, so it renders consistently.

Styles are render blocked by default, and scripts can be render blocked using the [`blocking="render"`](/en-US/docs/Web/HTML/Element/script#blocking) attribute.

To ensure that your initial HTML has been parsed and will always render consistently before the transition animation runs, you can use [`<link rel="expect">`](/en-US/docs/Web/HTML/Attributes/rel#expect). In this element, you include the following attributes:

- `rel="expect"` to indicate that you want to use this `<link>` element to render block some HTML on the page.
- `href="#element-id"` to indicate the ID of the elment you want to render block.
- `blocking="render"` to render block the specified HTML.

Let's explore what this looks like with a simple example HTML document:

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async href="layout.js" blocking="render"></script>

    <!-- Use rel="expect" and blocking="render" to ensure the
         #lead-content element is visible and fully parsed before
         activating the transition -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Page title</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">The first section</section>
      <section>The second section</section>
    </div>
  </body>
</html>
```

The result is that document rendering is blocked until the lead content `<div>` has been parsed, ensuring a consistent view transition.

You can also specify a [`media`](/en-US/docs/Web/HTML/Element/link#media) attribute on `<link rel="expect">` elements. For example, you might want to block rendering on a smaller amount of content when loading the page on a narrow-screen device, than on a wide-screen device. This makes sense — on a mobile, less content will be visible when the page first loads than in the case of a desktop.

This could be achieved with the following HTML:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
