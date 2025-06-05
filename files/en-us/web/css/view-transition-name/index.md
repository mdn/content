---
title: view-transition-name
slug: Web/CSS/view-transition-name
page-type: css-property
browser-compat: css.properties.view-transition-name
---

{{CSSRef}}

The **`view-transition-name`** [CSS](/en-US/docs/Web/CSS) property specifies the [view transition](/en-US/docs/Web/API/View_Transition_API) snapshot group that selected elements will participate in, which enables an element to be animated separately from the rest of the page during a view transition.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-name: header;
view-transition-name: figure-caption;

/* Keyword value */
view-transition-name: none;
view-transition-name: match-element;

/* Global values */
view-transition-name: inherit;
view-transition-name: initial;
view-transition-name: revert;
view-transition-name: revert-layer;
view-transition-name: unset;
```

### Values

- {{cssxref("custom-ident")}}
  - : An identifying name that causes the selected element to participate in a separate snapshot from the root snapshot. The `<custom-ident>` cannot be `auto`, `match-element`, `none`, or a [CSS-wide keyword](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords) value.
- `match-element`
  - : The selected element is automatically given a unique identifying name. This name enables the element to be snapshotted separately from all other elements on the page and is not visible to the web document.
- `none`
  - : The selected element will not participate in a separate snapshot, unless it has a parent element with a `view-transition-name` set, in which case it will be snapshotted as part of that element.

## Description

By default, when a view transition is applied to a web app, all changes to the UI that occur during that transition are snapshotted and animated together. This is the default — or `root` — snapshot (see [The view transition pseudo-element tree](/en-US/docs/Web/API/View_Transition_API/Using#the_view_transition_pseudo-element_tree)). By default, this animation is a smooth cross-fade, which can be seen in action in the [View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/).

If you want certain elements to be animated differently from the `root` snapshot during the view transition, you can do so by giving them a different `view-transition-name`, for example:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

You can then specify which animations you want for the before and after snapshots using the relevant view transition pseudo-elements — {{cssxref("::view-transition-old()")}} and {{cssxref("::view-transition-new()")}}. For example:

```css
::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

If you don't want an element to be snapshotted separately, you can specify a `view-transition-name` value of `none`:

```css
.dont-animate-me {
  view-transition-name: none;
}
```

### Specifying `view-transition-name` values automatically

Sometimes you will want to animate multiple UI elements separately in a view transition. This is often the case when you have a list of elements on a page and want to rearrange them in some way:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  ...
</ul>
```

The `view-transition-name` `<custom-ident>` must be unique for each rendered element taking part in the view transition. If two rendered elements have the same `view-transition-name` at the same time, {{domxref("ViewTransition.ready")}} will reject and the transition will be skipped. Giving each one a unique name can be inconvenient, especially as the number of elements gets larger:

```css
li:nth-child(1) { view-transition-name: item1; }
li:nth-child(2) { view-transition-name: item2; }
li:nth-child(3) { view-transition-name: item3; }
li:nth-child(4) { view-transition-name: item4; }
...
```

To get around this problem, you can use the `match-element` value, which causes the browser to give each selected element a unique internal `view-transition-name`:

```css
li {
  view-transition-name: match-element;
}
```

Because `match-element` assigns automatic `view-transition-name` values based on element identity, it can only be used for same-document view transitions. The auto-generated internal identifiers are not transferrable across different elements or documents.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `view-transition-name` usage

This example comes from the [View Transitions SPA demo](https://mdn.github.io/dom-examples/view-transitions/spa/), which is a basic image gallery. The [Basic SPA view transition](/en-US/docs/Web/API/View_Transition_API/Using#basic_spa_view_transition) provides a more detailed explanation of how this demo works.

Most of the UI changes are animated using the `root` transition snapshot. However, the `<figcaption>` is given a `view-transition-name` of `figure-caption` to allow it to be animated differently from the rest of the page:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

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

We create a custom CSS animation and apply it to the `::view-transition-old(figure-caption)` and `::view-transition-new(figure-caption)` pseudo-elements. We also apply other styles to keep them both in the same place and to stop the default styling from interfering with our custom animations.

### Using the `match-element` value

Our [View Transitions match-element demo](https://mdn.github.io/dom-examples/view-transitions/match-element/) contains a list of content items in a sidebar with a large main content space beside it. The headings inside the list items can be clicked to cause them to animate into the main content space and show all their content.

#### HTML

The markup features a {{htmlelement("main")}} element, which contains an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul) and an {{htmlelement("article")}} element. Each child {{htmlelement("li")}} element inside the list contains text content, which includes an {{htmlelement("a")}} element inside a [heading](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements).

```html
<main class="match-element-applied">
  <ul>
    <li>
      <h2><a href="#">One</a></h2>

      ...
    </li>
    <li>...</li>

    ...
  </ul>
  <article></article>
</main>
```

#### CSS

We use [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) to lay out the list and the `<article>` side-by-side, and to cause the list items to all take up an equal amount of space in the left-hand column. The list has a fixed width, while the `<article>` takes up the rest of the available horizontal space.

```css
main {
  height: calc(100% - 80px);
  display: flex;
  gap: 10px;
  position: relative;
}

ul {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

article {
  flex: 1;
}

li {
  flex: 1;
}
```

We also define a rule that selects elements with the `active-item` class. When this class is applied to an element, the rule causes it to be positioned exactly over the top of the `<article>` element. This class will be applied to the list items via JavaScript when their links are clicked, which will initiate a view transition.

```css
.active-item {
  position: absolute;
  z-index: 1;
  translate: 310px;
  width: calc(100% - 310px);
  height: 100%;
}
```

By default, all the rendered elements involved in the view transition will be animated together, in one cross-fade. However, in this case, we don't want this — we want to give each list item an individual movement animation. We can achieve this by applying `view-transition-name: match-element` to the list items:

```css
.match-element-applied li {
  view-transition-name: match-element;
}
```

The `match-element-applied` class is applied to the `<main>` element. You can remove this class by unchecking the checkbox in the bottom-right corner of the UI. This allows you to compare the singular cross-fade animation you get without `view-transition-name: match-element` to the individual movement animations you get when it is applied.

We also apply a specific {{cssxref("animation-duration")}} to all view transition groups (signified by the `*` identifier) using the {{cssxref("::view-transition-group()")}} pseudo-element, and give all the old and new snapshots a {{cssxref("height")}} of `100%` to work around differences in their aspect ratios and make the animations look smoother:

```css
::view-transition-group(*) {
  animation-duration: 0.5s;
}

html::view-transition-old(*),
html::view-transition-new(*) {
  height: 100%;
}
```

#### JavaScript

The demo's JavaScript applies the `active-item` class to the list items when their links are clicked; this is achieved via the `updateActiveItem()` function:

```js
function updateActiveItem(event) {
  // A reference to the list item containing the link that was clicked
  const clickedElem = event.target.parentElement.parentElement;

  // Set the active-item class on the list item
  clickedElem.className = "active-item";

  // Keep track of the previous item that was clicked, if any.
  // Remove the active-item class from the previous item so that only
  // one list item is placed over the <article> at any one time
  if (prevElem === clickedElem) {
    prevElem.className = "";
    prevElem = undefined;
  } else if (prevElem) {
    prevElem.className = "";
    prevElem = clickedElem;
  } else {
    prevElem = clickedElem;
  }
}

mainElem.addEventListener("click", (event) => {
  // Don't do anything unless a link is clicked inside the <main> element
  if (event.target.tagName !== "A") {
    return;
  }

  // Run updateActiveItem() on its own if view transitions are not supported
  if (!document.startViewTransition) {
    updateActiveItem(event);
  } else {
    // Run updateActiveItem() via startViewTransition()
    const transition = document.startViewTransition(() =>
      updateActiveItem(event),
    );
  }
});
```

Running the `updateActiveItem()` function via the `startViewTransition()` function causes the UI changes to be animated smoothly.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("view-transition-class")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
