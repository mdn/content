---
title: 'ARIA: figure role'
slug: Web/Accessibility/ARIA/Roles/figure_role
tags:
  - ARIA
  - ARIA Role
  - ARIA figure
  - Accessibility
  - Reference
  - Role
  - document structure role
  - figure
spec-urls:
  - https://w3c.github.io/aria/#figure
  - https://w3c.github.io/aria-practices/#describing_with_captions
---
The ARIA `figure` role can be used to identify a figure inside page content where appropriate semantics do not already exist. A figure is generally considered to be one or more images, code snippets, or other content that puts across information in a different way to a regular flow of text.

## Description

A `figure` is a perceivable section of content that typically contains a graphical document, images, code snippets, or example text. The parts of a figure MAY be user-navigable. Any content that should be grouped together and consumed as a figure (which could include images, video, audio, code snippets, or other content) can be identified as a figure using `role="figure"`.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png"
      alt="put image description here">
  <p id="caption">Figure 1: The caption</p>
</div>
```

In the above example, we have a figure that consists of two separate content items — an image and a caption. This is wrapped by a {{htmlelement("div")}} element that identifies the content as a figure using `role="figure"`.

For HTML, use the {{HTMLElement('figure')}} and {{HTMLElement('figcaption')}} elements. The figcaption will serve as the accessible name for the figure.  When not using HTML, or when retrofitting legacy HTML, use the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) on the figure, pointing to the figure's caption.
If there is no visible caption, [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) can be used.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Use `aria-labelledby` when the text is a concise label.
- Use [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) when the text is a longer description.
- Use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) when there is no visible figure caption.

This can be done semantically, without ARIA, with HTML's {{HTMLElement('figure')}} element along with {{HTMLElement('figcaption')}}.

```html
<figure>
  <img src="image.png"
      alt="put image description here">
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> **Note:** If at all possible in your work, you should use the appropriate semantic HTML elements to mark up a figure and its caption — {{htmlelement("figure")}} and {{htmlelement("figcaption")}}.

### Associated WAI-ARIA roles, states, and properties

- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : The id of an element containing reference text serving as a caption.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : The id of an element containing text serving as a label.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : If there is no element containing text that could serve as a label, you can add the label directly as a value on the `aria-label` on the element with the `figure` role or on the `<figure>` element.

### Keyboard interactions

No role specific keyboard interactions.

### Required JavaScript features

No role specific JavaScript requirements. If you don't have control over the HTML semantics, you can improve the accessibility of HTML by adding these roles and properties with JavaScript.

## Examples

We could extend the initial example on the page to also identify a paragraph that provides a descriptive label for the figure by referencing its ID in `aria-labelledby`:

```html
    <div role="figure" aria-labelledby="figure-1">
      <img src="diagram.png"
           alt="diagram showing the four layers of awesome and their relative priority order —
                music, cats, nature, and ice cream">
      <pre>`
        let awesome = ['music', 'cats', 'nature', 'ice cream'];
      `</pre>
      <p id="figure-1">Figure 1: The four layers of awesome.</p>
    </div>
```

## Best practices

Only use `role="figure"` if you have to — for example if you don't have control over your HTML but are able to improve accessibility dynamically after the fact with JavaScript.

If at all possible, you should use the appropriate semantic HTML elements to mark up a figure and its caption — {{htmlelement("figure")}} and {{htmlelement("figcaption")}}. For example, our above example should be rewritten as follows:

```html
<figure>
  <img src="diagram.png"
       alt="diagram showing the four layers of awesome and their relative priority order —
       music, cats, nature, and ice cream">
  <pre>`
    let awesome = ['music', 'cats', 'nature', 'ice cream'];
  `</pre>
  <figcaption>Figure 1: The four layers of awesome.</figcaption>
</figure>
```

## Specifications

{{Specifications}}

## See also

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML `<figure>` element](/en-US/docs/Web/HTML/Element/figure)
- [HTML `<figcaption>` element](/en-US/docs/Web/HTML/Element/figcaption)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
