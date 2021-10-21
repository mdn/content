---
title: How to document a CSS property
slug: MDN/Contribute/Howto/Document_a_CSS_property
tags:
  - CSS
  - Guide
  - Howto
  - MDN Meta
---
{{MDNSidebar}}

As the [CSS](/en-US/docs/Web/CSS) standards evolve, new properties are always being added. The MDN [CSS Reference](/en-US/docs/Web/CSS/Reference) needs to be kept up-to-date with these developments. This document gives step-by-step instructions for creating a CSS property reference page.

Each CSS property reference page follows the same structure. This helps readers find information more easily, especially once they are familiar with the standard reference page format.

## Step 1 — Decide which property to document

First, you will need to decide which property to document. You might have noticed that a page is missing, or you might have seen missing content reported in our [issues list](https://github.com/mdn/content/issues). For details about the CSS property you will need to find a relevant specification for it (e.g., a [W3C specification](https://www.w3.org/Style/CSS/), or a bug report for a non-standard property used in rendering engines like Gecko or Blink).

> **Note:** When using a W3C spec, always use the **Editor's Draft** (note the red banner on the left side) and not a published version (e.g. Working Draft). The Editor's Draft is always closer to the final version!

If the implementation and spec diverge, feel free to mention it in the implementation bug: it may be a bug in the implementation (and a follow-up bug will be filed), a delay in the publication of a new spec, or an error in the spec (in which case a spec bug is worth filing).

## Step 2 — Check the database of CSS properties

Several characteristics of a CSS property, such as its syntax or if it can be animated, are mentioned in several pages and are therefore stored in an ad-hoc database. Macros that you'll use on the page need information about the property that is stored there, so start by [checking that this information is there](/en-US/docs/MDN/Contribute/Howto/Update_the_CSS_JSON_DB).

## Step 3 — Creating the CSS property page

Preparations finished! Now we can add the actual CSS property page. The easiest way to create a new CSS property page is to copy the content of an existing page and to edit it to suit the new property. You can find out how to add a new page in our [GitHub README](https://github.com/mdn/content#adding-a-new-document).

When creating a reference page, you'll want to add _Examples_. To do that follow this [tutorial about live samples](/en-US/docs/MDN/Structures/Live_samples). Don't forget that we are in a document explaining one single property: you need to add examples that show how this property is working in isolation, not how the whole specification is used. That means that examples for `list-style-type` should show what the different property values generate, not how to combine it with other properties, pseudo-classes, or pseudo-elements to generate nice effects. Tutorials and guides can be written to show more.

## Step 4 — Getting a review

Once your page is created, submit it as a PR, and a member of our review team will be assigned automatically to review your page.
