---
title: "ARIA: feed role"
slug: Web/Accessibility/ARIA/Roles/feed_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#feed
---

{{AccessibilitySidebar}}

A `feed` is a dynamic scrollable `list` of `articles` in which articles are added to or removed from either end of the list as the user scrolls. A `feed` enables screen readers to use the browse mode reading cursor to both read and scroll through a stream of rich content that may continue scrolling infinitely by loading more content as the user reads.

```html
<section role="feed" aria-busy="false">
  …
  <article aria-posinset="427" aria-setsize="-1">…</article>
  <article aria-posinset="428" aria-setsize="-1">…</article>
  <article aria-posinset="429" aria-setsize="-1">…</article>
  …
</section>
```

## Description

A `feed` is a type of [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role), the containing role for scrollable [`articles`](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role) where scrolling may cause articles to be added to the top or end of the list. The role enables assistive technology to use the browse mode reading cursor to both read and scroll through a stream of rich content that may continue scrolling infinitely by loading more content as the user reads. Examples include an RSS feed, news feeds, social media feeds like Facebook, Instagram or Mastodon, or even a list of related products on an e-commerce page. These streams can be limited or infinite, loading more content as the user scrolls. Implementing the `feed` pattern allows a screen reader to reliably read and trigger the loading of feed content while in reading mode.

Unlike the document structure elements that represent static HTML elements, the `feed` role requires specific interactions and implementation of keyboard navigation. The `feed` is a container element whose children are {{HTMLElement('article')}}s or have role `article`. Each article within a feed should be focusable, with tabindex of 0 or -1. An article should be scrolled into view when it, or a descendant element, receives focus. If the addition of articles occupies the main browser thread, make sure to set `aria-busy="true"` on the feed itself, and make sure to set it back to `false` when processing ends, or the user may not see the updates.

If the number of articles is known, set [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) on the articles themselves. However, if the total number is extremely large, indefinite, or changes often, set `aria-setsize="-1"` to indicate that the size of the feed is not known.

Another feature of the feed pattern is skim reading: Articles within a feed can contain both an accessible name with the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and a description with an `aria-describedby`, suggesting to screen readers which elements to speak after the label when navigating by article. By identifying the elements inside an article that provide the title and the primary content, assistive technologies can provide functions that enable users to jump from article to article and efficiently discern which articles they want to read.

The feed pattern enables reliable assistive technology reading mode interaction by establishing the following interoperability agreement between the web page and assistive technologies:

In the context of a feed, the web page code is responsible for:

- Appropriate visual scrolling of the content based on which article contains DOM focus.
- Loading or removing feed articles based on which article contains DOM focus.

### Keyboard interactions

Supporting the following, or a similar, interface is recommended when focus is inside the feed:

- <kbd>Page Down</kbd>: Move focus to next article.
- <kbd>Page Up</kbd>: Move focus to previous article.
- <kbd>Control + End</kbd>: Move focus to the first focusable element after the feed.
- <kbd>Control + Home</kbd>: Move focus to the first focusable element before the feed.

If a feed is nested within a feed, such as a comments feed within a feed of blog posts, the convention is to tab into the nested feed with the <kbd>Tab</kbd> key and to provide another key, such as <kbd>Alt + Page Down</kbd>, to navigate from an 'outer' article to the first item in that article's nested feed. Navigate between the nested feed and main feed with <kbd>Control + End</kbd>, moving focus from the inner feed to the next article in the outer feed.

### <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> roles, states, and properties

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : If the feed has no visible title, the `feed` element has a label specified with `aria-label`. If it does, see `aria-labelledby`.

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : If the feed has a visible title, the `feed` element has `aria-labelledby` referring to the element containing the title. If not, add an `aria-label`.

- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

  - : When busy, such as when articles are being added or removed from the `feed`, set `aria-busy="true"` during the update operation. Make sure it's reset to `false` when the operation is complete or the changes may not become visible.

- article
  - : Each section of content in a feed should be contained in an `<article>` or element with role [`article`](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role). Each `article` should have an `aria-labelledby` referring to the article title or other child that can serve as a distinguishing label. Each article should preferably have `aria-describedby` referring to one or more elements inside the article that serve as the primary content of the article. Each `article` element has [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) set to a value that represents its position in the feed and an [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) set to a value that represents either the total number of articles that have been loaded or the total number in the feed, depending on which value is more helpful to users. If the total number in the feed is not known, set `aria-setsize="-1"`.

### Required JavaScript features

None, except as required by any attributes. For example, setting [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) to `true` during the update operation if needed, and then to `false` upon completion.

Note: It is the author's responsibility to apply the "above" keyboard behavior.

## Examples

[Example Implementation of Feed Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Best practices

To ensure good user experience, avoid inserting or removing articles in the middle of a `feed`, load new articles before the user has reached the end of the feed, and provide keyboard commands for moving focus among articles so that keyboard users can navigate through your feed. See [Keyboard interactions](#keyboard_interactions).

## Specifications

{{Specifications}}

## See also

- The HTML {{HTMLElement('article')}} element
- The {{HTMLElement('ul')}} unordered list element
- [ARIA: `article` role](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
