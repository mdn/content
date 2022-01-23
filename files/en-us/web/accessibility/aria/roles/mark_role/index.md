---
title: 'ARIA: mark role'
slug: Web/Accessibility/ARIA/Roles/mark_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - annotations
  - mark
  - needscontent
---

{{draft}}

The `mark` role semantically denotes HTML elements containing text that is marked/highlighted for reference purposes. This is semantically equivalent to the HTML {{HTMLElement('mark')}} element. If possible, you should use this element instead.

> **Warning:** The `mark` roll be part of WAI-ARIA 1.3, which is still being drafted.

## Examples

In the following example we have a document section that has been commented. The commented section is marked up using `<span role="mark">`.

```html
<p>The last half of the song is a slow-rising crescendo that peaks at the
<span role="mark" aria-details="thread-1">end of the guitar solo</span>, before fading away sharply.</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>
```

The related comment is marked up using an HTML structure wrapped with a `<div>` containing `role="comment"`.

To associate the comment with the text being commented, we need to wrap the commented text with an element containing the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) attribute, the value of which should be the ID of the comment.


## Best practices

### Prefer HTML

Using the {{HTMLElement('mark')}} element will automatically communicate a node has a role of `mark`. If at all possible, prefer using it instead.

## Specifications

Will be part of WAI-ARIA 1.3, which is still being drafted.



## See also

- HTML {{HTMLElement('mark')}} element
- [ARIA annotations](/en-US/docs/Web/Accessibility/ARIA/Annotations)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
