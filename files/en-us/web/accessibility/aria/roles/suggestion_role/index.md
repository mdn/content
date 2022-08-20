---
title: 'ARIA: suggestion role'
slug: Web/Accessibility/ARIA/Roles/suggestion_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - annotations
  - suggestion
---
The `suggestion` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) semantically denotes a single proposed change to an editable document. This should be used on an element that wraps an element with an `insertion` role, and one with a `deletion` role.

## Examples

When you've got a content change that involves an insertion _and_ a deletion, there is no way for a screen reader user to work out if the two are related or not. This is the job of `role="suggestion"`, which should be set on an element wrapping both of them like so:

```html
<p>Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple Tyrannosaurus Rex called Tiny</span>
  </span>.
</p>
```

We could even provide an information box saying who made the suggestion and when, and associate it with the suggestion via [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details):

```html
<p>Freida's pet is a
  <span role="suggestion" aria-details="comment-source">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple Tyrannosaurus Rex called Tiny</span>
  </span>.
</p>

<div id="comment-source">Suggested by Chris, <time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></div>
```

Browsers tend to provide a default black strikethrough for deletions, and a black underline for insertions, but you'll probably want to use

## Accessibility concerns

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

## Best practices

### Prefer HTML

Using the [`<ins>`](/en-US/docs/Web/HTML/Element/ins) and [`<del>`](/en-US/docs/Web/HTML/Element/del) element will automatically communicate a section has a role of `insertion` or `deletion`. If at all possible, prefer using the HTML elements.

## Specifications

Will be part of WAI-ARIA 1.3, which is still being drafted.

## See also

- [ARIA annotations](/en-US/docs/Web/Accessibility/ARIA/Annotations)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
