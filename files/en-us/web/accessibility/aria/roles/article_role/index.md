---
title: 'ARIA: article role'
slug: Web/Accessibility/ARIA/Roles/article_role
tags:
  - ARIA
  - ARIA Role
  - ARIA article role
  - Article
  - Article role
  - document structure role
  - Reference
spec-urls:
  - https://w3c.github.io/aria/#article
  - https://w3c.github.io/aria-practices/#feed
---
The `article` role indicates a section of a page that could easily stand on its own on a page, in a document, or on a website. It is usually set on related content items such as comments, forum posts, newspaper articles or other items grouped together on one page.

```html
<div role="article">
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</div>
<div role="article"> … </div>
```

This example shows two articles side by side on one page that could be structured similarly and are related.

> **Note:** Instead of a `<div>` with an `article` role, use the {{HTMLElement('article')}} element. **Always use native element if available**

Don't use `role="article"`. Instead use the `<article>` element.

```html
<article>
  <h2>Heading of the segment</h2>
  <p>Paragraph for the segment.</p>
  <p>Another paragraph.</p>
  Controls to interact with the article, share it, etc.
</article>
<article> … </article>
```

## Description

The `article` [document structure role](/en-US/docs/Web/Accessibility/ARIA/Roles#document_structure_roles) denotes a section of a document, page, or site that, if it were standing on its own, could be viewed as a complete document, page or site. The aim of a set of article sections is to indicate their relationship to one another.

Articles are not considered a navigational landmark, but many assistive technologies that support landmarks also support a means to navigate among articles. They may also support indication of nesting relationships within articles.

Articles can be nested, indicating that a nested article directly relates to the one it is nested in, but not necessarily to the ones outside the nesting hierarchy. Reference the examples for specific use cases.

If an article is part of a feed, it can have the [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) and [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) attributes set to indicate which position within the feed this particular article represents.

Inside an `application` or other widget that causes screen readers and other assistive technologies to be in pass-through mode, an article can be used to indicate that these should switch back to treating the enclosed content as regular web content.

Instead of including the `article` role on a non-semantic element, the {{HTMLElement('article')}} element should be used. User agents translate this to the appropriate accessibility information just like the `article` role. Using the {{HTMLElement('article')}} element also helps search engines better discover the structure of a page. Examples of appropriate uses of the `role="article"`, or preferably `<article>`, include blog posts, forum posts, a comment to a forum or blog post, a comment to a comment to a forum or blog post, any an item in a social media feed.

### Associated WAI-ARIA roles, states, and properties

- [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : In the context of a feed, indicates the position of this particular article within that feed, based on a count starting at 1.
- [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : In the context of a feed, indicates how many article items there are within that feed.

### Keyboard interactions

This role does not support any specific keyboard interaction.

### Required JavaScript features

- Event handlers
  - : This role does not require any event handlers to be present.
- Changing attribute values
  - : When constructing a feed, set the `aria-posinset` and `aria-setsize` attributes on each article role to the appropriate values, bearing in mind that `aria-posinset` is 1-based.

> **Note:** **Always use native element if available.** Instead of a `<div>` with the `article` role, the `<article>` element should be used.

## Examples

- The [restaurant recommendations feed display](https://www.w3.org/WAI/ARIA/apg/example-index/feed/feedDisplay.html) along with its separate [documentation](https://www.w3.org/TR/wai-aria-practices-1.1/examples/feed/feed.html) from the WAI-ARIA 1.1 authoring practices feed design pattern

## Specifications

{{Specifications}}

## Precedence order

This role corresponds to the {{HTMLElement('article')}} element in HTML, and that element should be used instead, if possible. This role does not require any specific roles to be present among its children. It is the only role allowed as a direct child of an element with the [`feed`](/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) role.

## See also

- [ARIA: using the `article` role](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`feed` role](/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`section` role](/en-US/docs/Web/Accessibility/ARIA/Roles/section_role)
- The {{HTMLElement('article')}} element
- {{Glossary("RSS")}} glossary definition

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
