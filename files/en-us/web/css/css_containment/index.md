---
title: CSS containment
slug: Web/CSS/CSS_containment
page-type: css-module
browser-compat:
  - css.properties.contain
  - css.properties.content-visibility
---

{{CSSRef}}

The aim of the **CSS containment** module is to improve performance of web pages by allowing the browser to isolate a subtree of the page from the rest of the page.
If the browser knows that a part of the page is independent, rendering can be optimized and performance improved.

In addition, it lets developers indicate whether or not an element should render its contents at all, and whether it should render its contents when it is offscreen.
This allows the user agent to apply containment on elements when appropriate, and potentially defer layout and rendering until it is actually needed.

The specification defines the CSS properties {{cssxref("contain")}} and {{cssxref("content-visibility")}}.
This document describes the basic aims of the specification.
For details on CSS container queries, see [CSS Container Queries](/en-US/docs/Web/CSS/CSS_Container_Queries).

## Basic example

Many webpages contain several sections which are independent of each other. For example a listing of article headlines and content, as in the markup below.

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <p>More content here.</p>
</article>
```

Each article has the {{cssxref("contain")}} property with a value of `content` applied in the CSS.

```css
article {
  contain: content;
}
```

Each article is independent of the other articles on the page, and so they have been given `contain: content` to indicate to the browser that this is the case. The browser can then use this information to make decisions about how to render the content. For example, it might not render articles that are outside the viewable area.

If we give each `<article>` the `contain` property with a value of `content`, when new elements are inserted the browser does not need to recalculate layout or repaint any area outside of the containing element's subtree.
If the `<article>` is styled such that its size depends on its contents (e.g. with `height: auto`), then the browser may need to account for its size changing.

We have told it by way of the `contain` property that each article is independent.

The `content` value is shorthand for `contain: layout paint style`.
It tells the browser that the internal layout of the element is totally separate from the rest of the page, and that everything about the element is painted inside its bounds. Nothing can visibly overflow.

This information is something that is usually known, and in fact quite obvious, to the web developer creating the page.
However browsers cannot guess at your intent and cannot assume that an article will be entirely self-contained.
Therefore this property gives you a nice way to explain to the browser this fact, and allow it to make performance optimizations based on that knowledge.

## Key concepts and terminology

### `contain` values

The values for the {{cssxref("contain")}} property indicate the type of containment that you want to apply to that element.

#### Layout containment

```css
article {
  contain: layout;
}
```

Layout is normally scoped to the entire document, which means that if you move one element the entire document needs to be treated as if things could have moved anywhere. By using `contain: layout` you can tell the browser it only needs to check this element — everything inside the element is scoped to that element and does not affect the rest of the page, and the containing box establishes an independent formatting context.

In addition:

- `float` layout will be performed independently.
- Margins won't collapse across a layout containment boundary
- The layout container will be a containing block for `absolute`/`fixed` position descendants.
- The containing box creates a stacking context, therefore {{cssxref("z-index")}} can be used.

#### Paint containment

```css
article {
  contain: paint;
}
```

Paint containment essentially clips the box to the padding edge of the principal box. There can be no visible overflow. The same things are true for `paint` containment as `layout` containment (see above).

Another advantage is that if the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box.

#### Size containment

```css
article {
  contain: size;
}
```

Size containment does not offer much in the way of performance optimizations when used on its own. However, it means that the size of the element's children cannot affect the size of the element itself — its size is computed as if it had no children.

If you turn on `contain: size` you need to also specify the size of the element you have applied this to using [`contain-intrinsic-size`](/en-US/docs/Web/CSS/contain-intrinsic-size) (or the equivalent longhand properties).
It will end up being zero-sized in most cases, if you don't manually give it a size.

#### Style containment

```css
article {
  contain: style;
}
```

Despite the name, style containment does not provide scoped styles such as you would get with the [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).
The main use case is to prevent situations where a [CSS Counter](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) could be changed in an element, which could then affect the rest of the tree.

Using `contain: style` would ensure that the {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties created new counters scoped to that subtree only.

#### Special values

There are two special values of contain:

- `content`
- `strict`

We encountered the first in the example above. Using `contain: content` turns on `layout`, `paint`, and `style` containment. The specification describes this value as being "reasonably safe to apply widely". It does not apply `size` containment, so you would not be at risk of a box ending up zero-sized due to a reliance on the size of its children.

To gain as much containment as possible use `contain: strict`, which behaves the same as `contain: size layout paint style`:

```css
contain: strict;
```

### `content-visibility`

{{cssxref("content-visibility")}} controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

Its possible values are:

- `visible`: The default behavior — an element's contents are laid out and rendered as normal.
- `hidden`: The element skips its contents. The skipped contents must not be accessible to user agent features such as find-in-page, tab-order navigation, etc., nor be selectable or focusable.
- `auto`: The element turns on layout containment, style containment, and paint containment. If the element is not relevant to the user, it also skips its contents. Unlike `hidden`, the skipped contents must still be available as normal to user-agent features such as find-in-page, tab order navigation, etc., and must be focusable and selectable as normal.

### Relevant to the user

The specification refers to the concept of [relevant to the user](https://drafts.csswg.org/css-contain/#relevant-to-the-user). An element that is relevant to the user should be rendered, as it is visible, and/or being interacted with by the user.

To be precise, an element is relevant to the user if any of the following are true:

- The element appears in the viewport, or a user-agent-defined margin around the viewport (50% of the viewport dimensions, to give the app time to prepare for when the element visibility changes).
- The element or its contents receive focus.
- The element or its contents are selected, for example by dragging over the text with the mouse cursor or by some other highlight operation.
- The element or its contents are placed in the [top layer](https://drafts.csswg.org/css-position-4/#top-layer).

### Skips its contents

The specification refers to the concept of [skips its contents](https://drafts.csswg.org/css-contain/#skips-its-contents). This means that the element referred to is not relevant to the user and will not be rendered to improve performance.

To be precise, when an element skips its contents:

- It has layout, style, paint, and size containment turned on.
- Its contents are not painted, as if {{cssxref("visibility", "visibility: hidden")}} was set on it.
- Its contents do not receive pointer events, as if {{cssxref("pointer-events", "pointer-events: none")}} was set on it.

## Reference

### CSS Properties

- {{cssxref("contain")}}
- {{cssxref("content-visibility")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An Introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
- The {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event
