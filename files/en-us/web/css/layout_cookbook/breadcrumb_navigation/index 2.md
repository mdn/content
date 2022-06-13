---
title: Breadcrumb Navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
tags:
  - CSS
  - Guide
  - Layout
  - Navigation
  - cookbook
  - flexbox
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
> [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/breadcrumb-navigation--download.html)

> **Note:** The example above uses two selectors to insert content before every `li` except the first one. This could also be achieved using one selector only:
>
>     .breadcrumb li:not(:first-child)::before {
>       content: "→";
>     }
>
> This solution uses a more complex selector, but requires less rules. Feel free to choose the solution that you prefer.

## Choices made

This pattern is laid out using a simple flex layout demonstrating how a line of CSS can give us our navigation. The separators are added using CSS Generated Content. You could change these to any separator that you like.

## Accessibility concerns

I have used the `aria-label` and `aria-current` attributes to help users understand what this navigation is and where the current page is in the structure. See the related links for more information.

## Browser compatibility

The various layout methods have different browser support. See the charts below for details on basic support for the properties used.

#### Flexbox

{{Compat("css.properties.flex")}}

## See also

- [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Providing a Breadcrumb Trail](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Using the aria-current attribute](https://tink.uk/using-the-aria-current-attribute/)
