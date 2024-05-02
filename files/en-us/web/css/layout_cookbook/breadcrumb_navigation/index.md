---
title: Breadcrumb navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
page-type: guide
---

{{CSSRef}}

Breadcrumb navigation helps the user to understand their location in the website by providing a {{glossary("breadcrumb")}} trail back to the start page. The items typically display inline, with a separator between each item, indicating the hierarchy between individual pages.

![Links displayed inline with separators](breadcrumb-navigation.png)

## Requirements

Display the hierarchy of the site by displaying inline links, with a separator between the items, indicating the hierarchy between individual pages, with the current page appearing last.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> **Note:** The example above uses a complex selector to insert content before every `li` except the last one. This could also be achieved using a complex selector targeting all `li` elements except the first:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Feel free to choose the solution that you prefer.

## Choices made

To display list items inline, we use [flexbox layout](/en-US/docs/Learn/CSS/CSS_layout/Flexbox), thus demonstrating how a line of CSS can give us our navigation. The separators are added using [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content). You could change these to any separator that you like.

## Accessibility concerns

We used the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attributes to help assistive technology users understand what this navigation is and where the current page is in the structure. See the related links for more information.

Be aware that the arrows `→` added via `content` are exposed to screen readers and braille displays.

## See also

- [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [Providing a Breadcrumb Trail](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Using the `aria-current` attribute](https://tink.uk/using-the-aria-current-attribute/)
