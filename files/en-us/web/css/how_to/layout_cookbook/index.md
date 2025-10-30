---
title: CSS layout cookbook
short-title: Layout cookbook
slug: Web/CSS/How_to/Layout_cookbook
page-type: landing-page
sidebar: cssref
---

The CSS layout cookbook aims to bring together recipes for common layout patterns, things you might need to implement in your own sites. In addition to providing code you can use as a starting point in your projects, these recipes highlight the different ways layout specifications can be used, and the choices you can make as a developer.

> [!NOTE]
> If you are new to CSS layout then you might first like to take a look at our [CSS layout learning module](/en-US/docs/Learn_web_development/Core/CSS_layout), as this will give you the basic grounding you need to make use of the recipes here.

## The Recipes

| Recipe                                | Description                                                                                              | Layout Methods                                                                         |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Media objects][media-objects]        | A two-column box with an image on one side and descriptive text on the other, e.g., a social media post. | [CSS grid][css-grid], {{cssxref("float")}} fallback, {{cssxref("fit-content")}} sizing |
| [Columns][columns]                    | When to choose multi-column layout, flexbox or grid for your columns.                                    | [CSS grid][css-grid], [Multicol][multicol], [Flexbox][flexbox]                         |
| [Center an element][center]           | How to center an item horizontally and vertically.                                                       | [Flexbox][flexbox], [Box Alignment][box-alignment]                                     |
| [Sticky footers][sticky-footers]      | Creating a footer which sits at the bottom of the container or viewport when the content is shorter.     | [CSS grid][css-grid], [Flexbox][flexbox]                                               |
| [Split navigation][split-navigation]  | A navigation pattern where some links are visually separated from the others.                            | [Flexbox][flexbox], {{cssxref("margin")}}                                              |
| [Breadcrumb navigation][breadcrumb]   | Creating a list of links to allow the visitor to navigate back up through the page hierarchy.            | [Flexbox][flexbox]                                                                     |
| [List group with badges][list-badges] | A list of items with a badge to display a count.                                                         | [Flexbox][flexbox], [Box Alignment][box-alignment]                                     |
| [Pagination][pagination]              | Links to pages of content (such as search results).                                                      | [Flexbox][flexbox], [Box Alignment][box-alignment]                                     |
| [Card][card]                          | A card component, which displays in a grid of cards.                                                     | [Grid Layout][css-grid]                                                                |
| [Grid wrapper][grid-wrapper]          | For aligning grid content within a central wrapper, while also allowing items to break out.              | [CSS grid][css-grid]                                                                   |

[media-objects]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Media_objects
[columns]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts
[center]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element
[sticky-footers]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Sticky_footers
[split-navigation]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Split_navigation
[breadcrumb]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
[list-badges]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/List_group_with_badges
[pagination]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Pagination
[card]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Card
[grid-wrapper]: /en-US/docs/Web/CSS/How_to/Layout_cookbook/Grid_wrapper
[css-grid]: /en-US/docs/Web/CSS/CSS_grid_layout
[multicol]: /en-US/docs/Web/CSS/CSS_multicol_layout
[flexbox]: /en-US/docs/Web/CSS/CSS_flexible_box_layout
[box-alignment]: /en-US/docs/Web/CSS/CSS_box_alignment

## Contribute a Recipe

As with all of MDN we would love you to contribute a recipe in the same format as the ones shown above. See the [guide for adding Layout Cookbook recipes](/en-US/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) for a template and guidelines for writing your own example.
