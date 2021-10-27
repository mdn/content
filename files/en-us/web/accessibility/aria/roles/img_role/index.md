---
title: 'ARIA: img role'
slug: Web/Accessibility/ARIA/Roles/Img_role
tags:
  - ARIA
  - ARIA Img
  - ARIA Role
  - Accessibility
  - Reference
  - document structure role
  - Role
  - figure
---
The ARIA `img` role can be used to identify multiple elements inside page content that should be considered as a single image. These elements could be images, code snippets, text, emojis, or other content that can be combined to deliver information in a visual manner.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="">
  <img src="graphic2.png">
</div>
```

## Description

Any set of content that should be consumed as a single image (which could include images, video, audio, code snippets, emojis, or other content) can be identified using `role="img"`.

You shouldn't count on the alt text of individual images for conveying context to assistive technologies; most screenreaders will consider the element with `role="img"` set on it to be like a black box, and not access the individual elements inside it.  Therefore, provide a comprehensive overall descriptive alt text for image, either in the surrounding text, or by using an `aria-label` attribute, with optional alt attributes for search engines or sighted users to be written to the page should an image fail:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="">
  <img src="graphic2.png">
</div>
```

If you wish to add a caption or label to your image that is visible on the page, you can do using:

- `aria-labelledby` when the text is a concise label.
- `aria-describedby` when the text is a longer description.

For example:

```html
<div role="img" aria-labelledby="image-1">
  ...
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

If an image is purely presentational, consider using the [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/Presentation_role) role.

### SVG and role="img"

If you are using embedded SVG images in your page, it is a good idea to set `role="img"` on the outer {{HTMLElement('svg')}} element and give it a label. This will cause screen readers to just consider it as a single entity and describe it using the label, rather than trying to read out all the child nodes:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Using role="img" to confer meaning that is obscured or implied

In certain cases, assistive technology users won't be able to get the meaning of content expressed in certain ways, through certain media, or implied in certain ways. This is obvious to fix in the case of images (you can use the `alt` attribute), but in the case of mixed or other certain types of content it is not so obvious, and `role="img"` can come into play.

For example, if you use emojis in your text, the meaning might be obvious to a sighted user, but someone using a screenreader might get confused because the emojis might have either no text representation at all, or the alternative text might be confusing and not match the context it is being used in. For example, take the following code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>
    &#x1F408; &#x1F602;
  </p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 and 😂,  are entity references for emojis read out as "Cat" and "Face with tears of joy", but this doesn't necessarily make sense — the implied meaning is possibly more like "That cat is so cute", so we include that in an `aria-label` along with `role="img"`.

This seems to work OK across some browser/screenreader combinations, but some of them end up reading the label out twice. Use with caution and test thoroughly.

Another example where this might be suitable is when using ASCII emoji combinations, like the legendary "Table flip":

```html
<div role="img" aria-label="Table flip">
  <p>
    (╯°□°）╯︵ ┻━┻
  </p>
</div>
```
If `aria-labelledby` were used, the screen reader would read it. In this case, only the contents of the `aria-label` are announced to screen reader users, hiding the jibberish of the characters without the need for descendant ARIA to hide things, but also hiding potential content that may be part of the image.

### Associated WAI-ARIA Roles, States, and Properties

- `aria-label` or `aria-labelledby`
  - : An accessible name is required. For the HTML {{HTMLElement('img')}} element, use the `alt` attribute. For all other elements with the `img` role, use `aria-labelledby` if a visible label is present, otherwise use `aria-label`.

## Examples

````html
<span role="img" aria-label="Rating: 4 out of 5 stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>☆</span>
</span>
````


## Specifications

| Specification                                | Status                   |
| -------------------------------------------- | ------------------------ |
| {{SpecName("ARIA","#img","img")}} | {{Spec2('ARIA')}} |



## See also

- The {{HTMLElement('img')}} element
- The {{HTMLElement('svg')}} element
- The {{HTMLElement('picture')}} element
- The {{HTMLElement('audio')}} element
- The {{HTMLElement('video')}} element
- [ARIA: `presentation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
