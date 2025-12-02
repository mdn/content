---
title: Using view transition types
slug: Web/API/View_Transition_API/Types
page-type: guide
---

{{DefaultAPISidebar("View Transition API")}}

View transition types provide a mechanism by which different **types** can be specified for active view transitions. CSS can then be used to apply different animations to DOM elements when their content updates, depending on the transition type specified. For example, you might want to apply different animations to an {{htmlelement("img")}} element in an image gallery app as the displayed image changes depending on whether you are moving forward or backward in the sequence, deleting an image, or adding an image into the sequence.

This article show how to use types along with single-page app (SPA) navigations and cross-document (MPA) navigations.

## Examples

We'll demonstrate what you need to know about view transition types by walking through code contained in the following three examples:

- [SPA transition types gallery](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) ([source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)): An SPA image gallery that uses transition types to apply different transition animations when the images are moved between using the prev button, next button, and by clicking directly on an image.
- [MPA transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)): A story app with a chapter on each page. Demonstrates how to apply view transition animations across pages selectively with a transition type.
- [MPA multiple transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)): Builds on the previous example by demonstrating how to apply different view transition animations across pages selectively with different transition types. The transition type is determined on the fly with JavaScript during the navigation.

We won't explain how all the code works, just the bits relevant to view tranasition types. We've provided comments in the code to explain what each part is doing.

## Using types with SPA view transitions

To apply different types to SPA view transitions, we pass the type names into the {{domxref("Document.startViewTransition()")}} method call that kicks off the transition. The method can accept an object as a parameter containing an `update` callback function that handles the DOM updates you want to animate, and a `types` array containing strings representing the type names.

Let's look at an example from our [SPA transition types gallery](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/):

```js
document.startViewTransition({
  update: () => {
    displayedImage.src = `${baseURL}${images[newId].filename}`;
    displayedImage.alt = images[newId].alt;
    displayedImage.setAttribute("data-id", newId);
    caption.textContent = images[newId].alt;
  },
  types: ["backwards"],
});
```

When the "Previous" button is pressed, this code is run — the callback function updates the displayed image to display the previous image in the sequence (including updating its alt text, `data-id` representing the sequence number, and caption), and the `types` array specifies that the view transition should be run with a type of `backwards`.

> [!NOTE]
> The types set on the view transition in the `types` array can be accessed via the {{domxref("ViewTransition.types", "types")}} property of the {{domxref("ViewTransition")}} object returned by the `startViewTransition()` method. The `types` property is a {{domxref("ViewTransitionTypeSet")}}. This is a [Set-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), which means you can modify the types applied to a view transition on the fly using methods available on it such as `clear()`, `add()`, and `delete()`.

### Applying custom animations in CSS

Over in the CSS, we can customize styles for the active transition using the {{cssxref(":active-view-transition")}} and {{cssxref(":active-view-transition-type()")}} pseudo-classes. Respectively, these allow you to create selectors that match when any view transition is active, or only when a view transition with a certain type is active.

First of all, we define a bunch of styles that are applied when a view transition is active, regardless of its type, selected using `:active-view-transition`. In this nested block, we apply a {{cssxref("view-transition-name")}} value of `none` to the document {{cssxref(":root")}} to turn view transitions off for most of the document. We then apply `view-transition-name` values of `image` and `caption` to the {{htmlelement("img")}} and {{htmlelement("figcaption")}} elements respectively, so changes to their DOM state are captured in separate snapshots and they can be animated independantly.

Finally, we use the {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}} pseudo-elements to apply specific animations to the `caption` outgoing and incoming view. We want these animations to be applied to the `<figcaption>` regardless of the specified type.

```css
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  .displayed-img {
    view-transition-name: image;
  }
  figcaption {
    view-transition-name: caption;
  }

  &::view-transition-old(caption) {
    animation-name: fade-out;
  }
  &::view-transition-new(caption) {
    animation-name: fade-in;
    animation-delay: 0.6s;
  }
}
```

The next stage is to apply different animations to the `image` outgoing and incoming views, depending on whether the `type` of the active view transition is `forwards` (the "Next" button was pressed), `backwards` (the "Previous" button was pressed), or `upwards` (a thumbnail image was clicked). This is done using three nested `:active-view-transition-type()` rulesets, each applying different {{cssxref("animation-name")}} values to the `::view-transition-old()` and `::view-transition-new()` pseudo-elements for each separate type:

```css
html:active-view-transition-type(forwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-left;
  }
}

html:active-view-transition-type(upwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-top;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-top;
    animation-delay: 0.6s;
  }
}
```

In the case of the `::view-transition-new(image)` animation for the `upwards` type, we've also included an {{cssxref("animation-delay")}} value of `0.6s` to stop the new content sliding in from the top of the screen until the old content has finished sliding out. It looks strange if the two overlap, in this case.

Further down the stylesheet, we set the {{cssxref("animation-duration")}} of all animations in all groups to `0.6s`, which explains why the delay set earlier was `0.6s`:

```css
::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

> [!NOTE]
> For brevity, we've not shown all of the {{cssxref("@keyframes")}} definition code for the animations referenced above. You can find these in the [source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types).

## Using types with cross-document view transitions via `@view-transition`

To apply different types to cross-document view transitions, you can set them in the [`types`](/en-US/docs/Web/CSS/Reference/At-rules/@view-transition#types) descriptor of the {{cssxref("@view-transition")}} at-rule, which contains one or more types separated by commas.

For example, in our [MPA transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/), the `@view-transition` at-rule in the shared stylesheet looks like this:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Over in the CSS, we can customize the animations applied to the active view transition based on its type in the same way as we did in the SPA example:

```css
html:active-view-transition-type(slide) {
  :root {
    view-transition-name: none;
  }
  section {
    view-transition-name: chapter;
  }
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-right;
  }
}
```

Here we apply several styles when the active view transition has a `type` of `slide` using the `:active-view-transition-type(slide)` selector. We apply a `view-transition-name` of `none` to the `:root` element to stop any snapshot capture, and then override it with a `view-transition-name` of `chapter` set on the page `<section>` element — this is the only part of the documents we want to apply a view transition to.

Next, we use `::view-transition-old(chapter)` and `::view-transition-new(chapter)` to apply custom animations to the `<section>` as its content transitions between pages.

## Applying different cross-document types using `pageswap` and `pagereveal` events

The above works OK, but it's not ideal — when a new page is navigated to, the old page content always disappears to the left, and the new page content always appears from the right. This animation is fine when you are moving to a later chapter, but (at least, for users of left-to-right languages like English) it feels counter-intuitive when moving to an earlier chapter. For later-to-earlier chapter movements, it would be better to reverse the animation direction.

To apply different types to the active view transition based on different navigation types, we need to manipulate the {{domxref("ViewTransition.types", "types")}} property of the corresponding `ViewTransition` object. This is available:

- in the {{domxref("PageSwapEvent.viewTransition")}} event object property of the {{domxref("Window.pageswap_event", "pageswap")}} event in the case of the outgoing page.
- in the {{domxref("PageRevealEvent.viewTransition")}} event object property of the {{domxref("Window.pagereveal_event", "pagereveal")}} event in the case of the incoming page.

The [MPA multiple transition types example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) demonstrates how to use this technique. This is similar to the previous example, but with some notable differences, which we'll explain below.

### Determining the animation type via JavaScript

Let's look at the shared JavaScript file. First of all, we define a custom function, `determineTransitionType()`, which looks at the URL of the outgoing page and incoming page and from those determines whether the navigation type is `backwards` (moving to an earlier chapter) or `forwards` (moving to a later chapter).

The chapter pages are named sequentially (`index.html`, then `index2.html`, `index3.html`, etc.), therefore, we compare the number contained in the filenames to see whether the navigation is `backwards` (outgoing page number is higher than incoming page number) or forwards (outgoing page number is lower than incoming page number).

Note how we've also included an `else` condition at the end that returns a type of `no-type` if neither of the two conditions are true. This can happen for example when the site first loads, or if the user reloads the page. In this case, we won't apply a type to the view transition.

The code you use to determine the type to apply will depend on your project. You can find detailed comments explaining how the below code works in our [source code](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types).

```js
const determineTransitionType = (oldNavigationEntry, newNavigationEntry) => {
  const currentURL = oldNavigationEntry.url;
  const destinationURL = newNavigationEntry.url;

  function determinePageIndex(url) {
    const array = url.split("/");
    const slug = array[array.length - 1];
    if (slug.indexOf("html") === -1) {
      return 0;
    } else {
      const pageIndex = slug.replace("index", "").replace(".html", "");
      if (pageIndex === "") {
        return 0;
      } else {
        return parseInt(pageIndex);
      }
    }
  }

  const currentPageIndex = determinePageIndex(currentURL);
  const destinationPageIndex = determinePageIndex(destinationURL);

  if (currentPageIndex > destinationPageIndex) {
    return "backwards";
  } else if (currentPageIndex < destinationPageIndex) {
    return "forwards";
  } else {
    return "no-type";
  }
};
```

Next, we use a {{domxref("Window.pageswap_event", "pageswap")}} event listener to set the transition type for the outgoing page. Inside the event handler function, we grab the old and new navigation entries from the event object's {{domxref("PageSwapEvent.activation", "activation")}} property, pass these to the `determineTransitionType()` function to determine the type, then assign the type to the view transition using the {{domxref("ViewTransition.types")}} property's `add()` method.

```js
window.addEventListener("pageswap", async (e) => {
  const transitionType = determineTransitionType(
    e.activation.from,
    e.activation.entry,
  );

  console.log(`pageSwap: ${transitionType}`);
  e.viewTransition.types.add(transitionType);
});
```

Finally, we use a {{domxref("Window.pagereveal_event", "pagereveal")}} event listener to set the transition type for the incoming page. Inside the event handler function, we grab the old and new navigation entries from the {{domxref("Navigation.activation")}} property and pass these to the `determineTransitionType()` function to determine the type. We assign the type to the view transition using the {{domxref("ViewTransition.types")}} property's `add()` method, unless the type is `no-type`, in which case we skip that step.

```js
window.addEventListener("pagereveal", async (e) => {
  const transitionType = determineTransitionType(
    navigation.activation.from,
    navigation.activation.entry,
  );

  console.log(`pageReveal: ${transitionType}`);
  if (transitionType !== "no-type") {
    e.viewTransition.types.add(transitionType);
  }
});
```

### Applying custom animations in CSS

Now we've got an appropriate type set on the active view transition depending on the navigation type, we can set different animations for each type over in our CSS, in the same way as we saw in previous examples:

```css
html:active-view-transition {
  nav {
    view-transition-name: none;
  }
  section {
    view-transition-name: chapter;
  }
}

html:active-view-transition-type(forwards) {
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-left;
  }
}
```

Note also that we have removed the `types` descriptor from the `@view-transition` at-rule in the shared CSS. We need the `navigation` descriptor to enable cross-document view transitions, but we are handling types in our JavaScript, so we don't need to set them here.

```css
@view-transition {
  navigation: auto;
}
```

## See also

- [View transition API](/en-US/docs/Web/API/View_Transition_API)
- [Handle multiple view transition styles with view transition types (SPA)](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types) on developer.chrome.com (2024)
- [View transition types in cross-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document#view-transition-types) on developer.chrome.com (2024)
