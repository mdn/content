---
title: Breadcrumb navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
page-type: guide
browser-compat: css.properties.flex
---

{{CSSRef}}

Breadcrumb navigation helps the user to understand their location in the website by providing a breadcrumb trail back to the start page.

![Links displayed inline with separators](breadcrumb-navigation.png)

## Requirements

The items typically display inline with a separator to indicate a hierarchy between individual pages.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> **Note:** The example above uses two selectors to insert content before every `li` except the first one. This could also be achieved using one selector only:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> This solution uses a more complicated selector, but requires fewer rules. Feel free to choose the solution that you prefer.

## Choices made

This pattern is laid out using a simple flex layout demonstrating how a line of CSS can give us our navigation. The separators are added using CSS Generated Content. You could change these to any separator that you like.

## Accessibility concerns

I have used the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attributes to help users understand what this navigation is and where the current page is in the structure. See the related links for more information.

Beware that the arrows `→` added via `content` are also exposed to screen readers or braille displays.

## Browser compatibility

{{Compat}}

## See also

- [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [Providing a Breadcrumb Trail](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Using the aria-current attribute](https://tink.uk/using-the-aria-current-attribute/)
