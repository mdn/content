---
title: 'ARIA: mark role'
slug: Web/Accessibility/ARIA/Roles/mark_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - annotations
  - mark
---

The `mark` role denotes content which is marked or highlighted for reference or notation purposes, due to the content's relevance in the enclosing context.

## Description

The `mark` role semantically denotes HTML elements containing text that is marked/highlighted for reference purposes. This is semantically equivalent to the HTML {{HTMLElement('mark')}} element. If possible, you should use this element instead.

Example uses for `mark` are the exact same as the `<mark>` element. They include highlighting text in a quotation which is of special interest but is not marked in the original source material, comparable to using a highlighter pen to mark passages of a print article and indicating portions of the content that are relevant to the user's current activity, such as highlighting text matches found by a search feature.

Don't use `mark` for purely decorative styling such as syntax highlighting.

The `mark` element should not be given an accessible name; both [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attributes are prohibited on `mark`.

## Examples

In the following example we have a document section that has been commented. The commented section is marked up using `<span role="mark">`.

```html
<p>The last half of the song is a slow-rising crescendo that peaks at the
<span role="mark" aria-details="thread-1">end of the guitar solo</span>, before fading away sharply.</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2022-03-30T19:29">March 30 2022, 19:29</time></p>
</div>
```

The related comment is marked up using an HTML structure wrapped with a {{HTMLElement('div')}} containing [`role="comment"`](/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role).

To associate the comment with the text being commented, we need to wrap the commented text with an element containing the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) attribute, the value of which should be the ID of the comment.

## Best practices

### Prefer HTML

Using the {{HTMLElement('mark')}} element will automatically communicate a node has a role of `mark`. If at all possible, prefer using it instead.

## Specifications

Will be part of [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark), which is still being drafted.

## See also

- HTML {{HTMLElement('mark')}} element
- [ARIA annotations](/en-US/docs/Web/Accessibility/ARIA/Annotations)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
