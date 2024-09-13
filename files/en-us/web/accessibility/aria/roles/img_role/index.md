---
title: "ARIA: img role"
slug: Web/Accessibility/ARIA/Roles/img_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#img
---

{{AccessibilitySidebar}}

The ARIA `img` role can be used to identify multiple elements inside page content that should be considered as a single image. These elements could be images, code snippets, text, emojis, or other content that can be combined to deliver information in a visual manner.

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" />
</div>
```

## Description

Any set of content that should be consumed as a single image (which could include images, video, audio, code snippets, emojis, or other content) can be identified using `role="img"`.

You shouldn't count on the alt text of individual images for conveying context to assistive technologies; most screen readers will consider the element with `role="img"` set on it to be like a black box, and not access the individual elements inside it. Therefore, provide a comprehensive overall descriptive alt text for image, either in the surrounding text, or by using an [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute, with `alt` attributes for search engines or sighted users to be written to the page should an image fail:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

If you wish to add a caption or label to your image that is visible on the page, you can do using:

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) when the text is a concise label.
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) when the text is a longer description.

For example:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Text that describes the group of images.</p>
</div>
```

If an image is purely presentational, consider using the [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) role.

### SVG and role="img"

If you are using embedded SVG images in your page, it is a good idea to set `role="img"` on the outer {{SVGElement('svg')}} element and give it a label. This will cause screen readers to just consider it as a single entity and describe it using the label, rather than trying to read out all the child nodes:

```html
<svg role="img" aria-label="Description of your SVG image">
  <!-- contents of the SVG image -->
</svg>
```

### Using role="img" to confer meaning that is obscured or implied

In certain cases, assistive technology users won't be able to get the meaning of content expressed in certain ways, through certain media, or implied in certain ways. This is obvious to fix in the case of images (you can use the `alt` attribute), but in the case of mixed or other certain types of content it is not so obvious, and `role="img"` can come into play.

For example, if you use emojis in your text, the meaning might be obvious to a sighted user, but someone using a screen reader might get confused because the emojis might have either no text representation at all, or the alternative text might be confusing and not match the context it is being used in. For example, take the following code:

```html
<div role="img" aria-label="That cat is so cute">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 and 😂, are entity references for emojis read out as "Cat" and "Face with tears of joy", but this doesn't necessarily make sense — the implied meaning is possibly more like "That cat is so cute", so we include that in an `aria-label` along with `role="img"`.

This seems to work OK across some browser/screen reader combinations, but some of them end up reading the label out twice. Use with caution and test thoroughly.

Another example where this might be suitable is when using {{Glossary("ASCII")}} emoji combinations, like the legendary "Table flip":

```html
<div role="img" aria-label="Table flip">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

If `aria-labelledby` were used, the screen reader would read it. In this case, only the contents of the `aria-label` are announced to screen reader users, hiding the gibberish of the characters without the need for descendant ARIA to hide things, but also hiding potential content that may be part of the image.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in an `img`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `img` element as it is a role that does not support semantic children.

For example, consider the following `img` element, which contains a heading.

```html
<div role="img"><h3>Title of my image</h3></div>
```

Because descendants of `img` are presentational, the following code is equivalent:

```html
<div role="img"><h3 role="presentation">Title of my image</h3></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree).:

```html
<div role="img">Title of my image</div>
```

### Associated WAI-ARIA Roles, States, and Properties

- `aria-label` or `aria-labelledby`
  - : An accessible name is required. For the HTML {{HTMLElement('img')}} element, use the `alt` attribute. For all other elements with the `img` role, use `aria-labelledby` if a visible label is present, otherwise use `aria-label`.

## Examples

```html
<span role="img" aria-label="Rating: 4 out of 5 stars">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>☆</span>
</span>
```

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('img')}} element
- The {{SVGElement('svg')}} element
- The {{HTMLElement('picture')}} element
- The {{HTMLElement('audio')}} element
- The {{HTMLElement('video')}} element
- [ARIA: `presentation` role](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
