---
title: 'ARIA: comment role'
slug: Web/Accessibility/ARIA/Roles/comment_role
tags:
  - ARIA
  - ARIA Role
  - Comment
  - Reference
  - annotations
---
The `comment` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) semantically denotes a comment/reaction to some content on the page, or to a previous comment.

> **Note:** The comment role is proposed in WAI-ARIA 1.3 ([Most recent ARIA draft](https://w3c.github.io/aria/)), which is still being drafted.

## Examples

In the following example we have a document section that has been commented. The commented section is marked up using `<span role="mark">`.

The related comment is marked up using an HTML structure wrapped with a `<div>` containing `role="comment"`.

```html
<p>The last half of the song is a slow-rising crescendo that peaks at the
<span role="mark" aria-details="thread-1">end of the guitar solo</span>, before fading away sharply.</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>
```

To associate the comment with the text being commented, we need to wrap the commented text with an element containing the [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) attribute, the value of which should be the ID of the comment.

### Multiple comments

Since `aria-details` can now accept multiple IDs, we can associate multiple comments with the same annotation, like so:

```html
<p>The last half of the song is a slow-rising crescendo that peaks at the
<mark aria-details="thread-1 thread-2">end of the guitar solo</mark>, before fading away sharply.</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>

<div role="comment" id="thread-2" data-author="chris">
  <h3>Marcus said</h3>
  <p class="comment-text">The guitar solo could do with a touch more chorus,
    and a slightly lower volume.</p>
  <p><time datetime="2019-03-29T15:35">March 29 2019, 15:35</time></p>
</div>
```

### Nested comments

Nested comments are also possible with ARIA annotations — nest the comments inside one another, like so:

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2021-03-30T19:29">March 30 2021, 19:29</time></p>

  <div role="comment" data-author="marcus">
    <h3>Marcus replied</h3>
    <p class="comment-text">I don't know about that.
      I think the cowbell could distract from the solo.</p>
    <p><time datetime="2021-03-30T21:02">March 30 2021, 21:02</time></p>
  </div>
</div>
```

## Accessibility concerns

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

## Specifications

Will be part of WAI-ARIA 1.3, which is still being drafted.

## See also

- [ARIA annotations](/en-US/docs/Web/Accessibility/ARIA/Annotations)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
