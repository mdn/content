---
title: 'ARIA: figure role'
slug: Web/Accessibility/ARIA/Roles/Figure_Role
tags:
  - ARIA
  - ARIA Role
  - ARIA figure
  - Accessibility
  - Reference
  - Role
  - figure
---
The ARIA `figure` role can be used to identify a figure inside page content where appropriate semantics do not already exist. A figure is generally considered to be one or more images, code snippets, or other content that puts across information in a different way to a regular flow of text.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png"
      alt="full alternative image description">
  <p id="caption">Figure 1: The caption</p>
</div>
```

In the above example, we have a figure that consists of two separate content items — an image and a caption. This is wrapped by a {{htmlelement("div")}} element that identifies the content as a figure using `role="figure"`.

Instead of using ARIA to create a figure, consider using the native, semantic [HTML \<figure> element](/en-US/docs/Web/HTML/Element/figure). along with the [\<figcaption> element](/en-US/docs/Web/HTML/Element/figcaption).  See {{anch("Best practices")}} below.

## Description

Any content that should be grouped together and consumed as a figure (which could include images, video, audio, code snippets, or other content) can be identified as a figure using `role="figure"`.

There are no hard and fast rules about how you should write your figure content. You should make sure that it is accessible just like any other content. For example, make sure it is perceivable by users of assistive technology, navigable by keyboard as well as mouse, and so on.

You can add a caption or label to your figure in a number of ways. You could add an ID to an element containing content that describes the figure, and then reference that ID inside an appropriate attribute on the figure to associate the figure with the label:

```html
<div role="figure" aria-labelledby="figure-1">
  ...
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Use `aria-labelledby` when the text is a concise label.
- Use `aria-describedby` when the text is a longer description.

Again, this can be done semantically, without ARIA, with HTML's [`<figure>`](/en-US/docs/Web/HTML/Element/figure) and [`<figcaption>`](/en-US/docs/Web/HTML/Element/figcaption) elements

```html
<figure>
  ...
  <figcaption>Text that describes the figure.</figcaption>
</figure>
```

If you don't want the label to be visible on the screen, but still want to provide a descriptive label for assistive technology users, you can use the `aria-label` attribute on the figure container:

```html
<div role="figure" aria-label="Text that describes the figure.">
  ...
</div>
```

You can use the aria-label with \<figure> as well:

```html
<figure aria-label="Text that describes the figure.">
  ...
</figure>
```

Generally, you should reference the figure from the main text, but the figure need not be displayed at the same location as the referencing element.

<div class="note"><p><strong>Note</strong>:<span class="ILfuVd yZ8quc"> If at all possible in your work, you should use the appropriate semantic HTML elements to mark up a figure and its caption — {{htmlelement("figure")}} and {{htmlelement("figcaption")}}. See {{anch("Best practices")}} for a full example.</span></p></div>

### Associated WAI-ARIA roles, states, and properties

- aria-describedby
  - : The id of an element containing reference text serving as a caption.
- aria-labelledby
  - : The id of an element containing text serving as a label.
- aria-label
  - : If there is no element containing text that could serve as a label, you can add the label directly as a value on the aria-label on the element with the `figure` role or on the `<figure>` element.

### Keyboard interactions

No role specific keyboard interactions.

### Required JavaScript features

No role specific JavaScript requirements. If you don't have control over the HTML semantics, you can improve the accessibility of HTML by adding these roles and properties with JavaScript.

## Examples

We could extend the initial example on the page to also identify a paragraph that provides a descriptive label for the figure by referencing its ID in `aria-labelledby`:

    <div role="figure" aria-labelledby="figure-1">
      <img src="diagram.png"
           alt="diagram showing the four layers of awesome and their relative priority order —
                music, cats, nature, and ice cream">
      <pre>`
        let awesome = ['music', 'cats', 'nature', 'ice cream'];
      `</pre>
      <p id="figure-1">Figure 1: The four layers of awesome.</p>
    </div>

## Best practices

Only use `role="figure"` if you have to — for example if you don't have control over your HTML but are able to improve accessibility dynamically after the fact with JavaScript.

If at all possible, you<span class="ILfuVd yZ8quc"> should use the appropriate semantic HTML elements to mark up a figure and its caption — {{htmlelement("figure")}} and {{htmlelement("figcaption")}}. For example, our above example should be rewritten as follows:</span>

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

| Specification                                        | Status                   |
| ---------------------------------------------------- | ------------------------ |
| {{SpecName("ARIA","#figure","figure")}} | {{Spec2('ARIA')}} |



## See also

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML \<figure> element](/en-US/docs/Web/HTML/Element/figure)
- [HTML \<figcaption> element](/en-US/docs/Web/HTML/Element/figcaption)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
