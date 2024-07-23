---
title: Using CSS containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
page-type: guide
---

{{CSSRef}}

CSS containment improves the performance of web pages by allowing the browser to isolate a subtree of the page from the rest of the page. If the browser knows that a part of the page is independent from the rest of the content, rendering can be optimized and performance improved.

The {{cssxref("contain")}} and {{cssxref("content-visibility")}} properties enable developers to inform user agents whether or not an element should render its contents at all, and whether it should render its contents when it is offscreen. The user agent then applies containment to elements when appropriate, potentially deferring layout and rendering until needed.

This guide describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` for a better user experience.

## Basic example

Web pages often contain multiple sections which are, logically, independent of each other. CSS containment enables them to be treated truly independently from each other when it comes to rendering.

For example, blogs usually contain several articles, each containing a headline and content, as in the markup below.

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

With CSS, we apply the {{cssxref("contain")}} property with a value of `content` to each article. The `content` value is shorthand for `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Logically, each article is independent of the other articles on the page. This information is something that is usually known, and likely quite obvious, to the web developer creating the page.
However, browsers don't know the intent of your content and cannot assume that an article or other section of content will be entirely self-contained.

This property provides a way of explaining this to the browser and giving it explicit permission to make performance optimizations.
It tells the browser that the internal layout of the element is completely separate from the rest of the page, and that everything about the element is painted inside its bounds. Nothing can visibly overflow.

By setting `contain: content` on each `<article>` we have indicated this; we have told the browser that each article is independent. The browser can then use this information to make decisions about how to render each `<article>` of content. For example, it might not render articles that are outside the viewable area.

When additional articles are appended at the end of the page, the browser does not need to recalculate layout or repaint the preceding content; it also doesn't need to touch any area outside of the containing element's subtree. If box model properties are dependent, however, the browser will need to recalculate layout and repaint. For example, if the `<article>` is styled such that its size depends on its contents (e.g. with `height: auto`), then the browser will need to account for its size changing.

## Key concepts and terminology

### `contain` values

There are four types of containment: layout, paint, size, and style. Use the {{cssxref("contain")}} property to specify the type or types you want to apply to an element by including any combination of these types.

#### Layout containment

```css
article {
  contain: layout;
}
```

Layout is normally scoped to the entire document, which means that if you move one element the entire document needs to be treated as if things could have moved anywhere. By using `contain: layout` you can tell the browser it only needs to check this element — everything inside the element is scoped to that element and does not affect the rest of the page, with the containing box establishing an independent [formatting context](/en-US/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts).

In addition:

- {{cssxref("float")}} layout will be performed independently inside the specified element.
- Margins won't collapse across a layout containment boundary.
- The layout container is a [containing block](/en-US/docs/Web/CSS/Containing_block) for `absolute`- and `fixed`-positioned descendants.
- The containing box creates a [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), therefore {{cssxref("z-index")}} can be used.

> **Note:** The `style` and `layout` values of `contain` are automatically applied when using the {{cssxref("container-type")}} and {{cssxref("container-name")}} properties.

#### Paint containment

```css
article {
  contain: paint;
}
```

Paint containment essentially clips the box to the padding edge of the [principal box](/en-US/docs/Web/CSS/Visual_formatting_model#the_principal_box). There can be no visible overflow. The same additional notes are true for `paint` containment as `layout` containment (see above).

Another advantage is that if the element with containment applied is offscreen, the browser does not need to paint its child elements — these are also offscreen as they are contained completely by that box.

#### Size containment

```css
article {
  contain: size;
}
```

Size containment does not offer much in the way of performance optimizations when used on its own. However, size containment means that the size of the size-contained element's children cannot affect the size of the element itself — its size is computed as if it had no children.

If you set `contain: size` on an element, you need to specify the size of the element using {{cssxref("contain-intrinsic-size")}}, or the longhand properties {{cssxref("contain-intrinsic-width")}} and {{cssxref("contain-intrinsic-height")}}, in that order. If no size is set, the element risks being zero-sized in most cases.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### Style containment

```css
article {
  contain: style;
}
```

Despite the name, style containment does not provide scoped styles such as you would get with the [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) or {{cssxref("@scope")}}.
The main use case for the `style` value is to prevent situations where a [CSS counter](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) could be changed in an element, which could then affect the rest of the tree.

Using `contain: style` ensures the {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties create new counters scoped to that subtree only.

You can include more than one containment type by including multiple space-separated values, such as `contain: layout paint` or by using one of the two [special values](#special_values).

#### Special values

There are two special values of `contain` that are shorthand for the first three or all four of the containment types:

- `content`
- `strict`

We encountered the first in the example above. Using `contain: content` turns on `layout`, `paint`, and `style` containment. As it omits `size`, it is a safe value to apply widely.

The `contain: strict` declaration, which behaves the same as the declaration `contain: size layout paint style` (which includes four space-separated values), provides the most containment. It is riskier to use as it applies `size` containment; the risk exists that a box could end up zero-sized due to a reliance on the size of its children.

To remove this risk, always set a size when using `strict`:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

The above is the same as:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

When you have a lot of content that would benefit from heavy containment that will often be offscreen — for example if all your blog posts are viewable on the blog home pages as an infinitely scrollable blog — `content-visibility: auto` can be used to apply all of the containments at once.

The {{cssxref("content-visibility")}} property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. It enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

Its possible values are:

- `visible`: The default behavior — an element's contents are laid out and rendered as normal.
- `hidden`: The element [skips its contents](#skips_its_contents). The skipped contents will not be accessible to user agent features such as find-in-page, tab-order navigation, etc., nor be selectable or focusable.
- `auto`: The element turns on layout containment, style containment, and paint containment, as if `contain: content` was set. If the element is not [relevant to the user](#relevant_to_the_user), it also skips its contents. Unlike `hidden`, the skipped content is still available for user interactions, remaining focusable, selectable, in regular tab order, and available to in-content search.

### Relevant to the user

User-agents have a concept of content being [relevant to the user](https://drafts.csswg.org/css-contain/#relevant-to-the-user). An element becomes "relevant to the user" if any of the following are true:

- The element appears in the viewport, or a user-agent-defined margin around the viewport (50% of the viewport dimensions, to give the app time to prepare for when the element visibility changes).
- The element or its contents receive focus.
- The element or its contents are selected, for example by dragging over the text with the mouse cursor or by some other highlight operation.
- The element or its contents are placed in the {{glossary("top layer")}}.

When `content-visibility: auto` is set, and the browser determines that content is relevant to the user, the browser will render that content.

### Skips its contents

When you set `content-visibility: hidden` on an element, you are telling the browser that it is not relevant to the user, and therefore its [contents should be skipped](https://drafts.csswg.org/css-contain/#skips-its-contents) and not rendered. This helps to improve performance.

The browser will also skip an element's contents when `content-visibility: auto` is set on it, and the browser determines that its content is _not_ relevant to the user.

When an element skips its contents:

- It has layout, style, paint, and size containment turned on.
- Its contents are not painted, as if {{cssxref("visibility", "visibility: hidden")}} was set on it.
- Its contents do not receive pointer events, as if {{cssxref("pointer-events", "pointer-events: none")}} was set on it.

This happens in both the cases mentioned above, but with `content-visibility: auto` the content can be searched, receive focus, and otherwise move from not relevant to relevant. This is not the case for `content-visibility: hidden`.

> **Note:** To animate the transition from `content-visibility: hidden` to a visible value, you will need to set {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} and {{cssxref("@starting-style")}} styles. See [transitioning `display` and `content-visibility`](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility) to learn more.

## See also

- [CSS containment module](/en-US/docs/Web/CSS/CSS_containment)
- [Learn: CSS performance optimization](/en-US/docs/Learn/Performance/CSS)
- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [An Introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) via Igalia.com (2019)
- The {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event
