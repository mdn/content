---
title: How to document a CSS property
short-title: Document a CSS property
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

As the [CSS](/en-US/docs/Web/CSS) standards evolve, new properties are always being added. The [CSS Reference](/en-US/docs/Web/CSS/Reference) on MDN Web Docs needs to be kept up-to-date with these developments. This article provides step-by-step instructions for creating a CSS property reference page.

Each CSS property reference page follows the same structure. This helps readers find information more easily, especially after they are familiar with the standard reference page format.

## Step 1 — Determine the property to document

First, you will need to find out the CSS property you want to document. You might have noticed that a page is missing, or you might have seen missing content reported in our [issues list](https://github.com/mdn/content/issues). For details about the CSS property, you will need to find a relevant specification for it (e.g., a [W3C specification](https://www.w3.org/Style/CSS/), or a bug report for a non-standard property used in rendering engines like Gecko or Blink).

> [!NOTE]
> When using a W3C specification, always use the **Editor's Draft** (note the red banner on the left side) and not a published version (e.g., Working Draft). The Editor's Draft is always closer to the final version!

If the implementation and specification diverge, feel free to mention it in the implementation bug. One of the following situations are possible:

- It may be a bug in the implementation (and a follow-up bug will be filed).
- It may be because of a delay in the publication of a new specification.
- It may be an error in the specification (in which case, a specification bug is worth filing).

## Step 2 — Check the database of CSS properties

Several characteristics of a CSS property, such as its syntax or if it can be animated, are mentioned in several pages and are therefore, stored in an ad hoc database. Macros that you'll use on the page need information about the property that is stored there, so start by [checking that this information is there](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Step 3 — Create the CSS property page

Preparations finished! Now we can add the actual CSS property page. The easiest way to create a new CSS property page is to copy the content of an existing CSS property page and edit it for the new property. To create a new page, see the instructions in our [how to create a page](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) guide.

When creating a reference page, you'll want to add _Examples_. To do that, follow this [tutorial about live samples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Remember that the property page you're creating is for a single property, so the examples you add will need to show how this property works in isolation, not how the whole specification is used. Therefore, examples for the `list-style-type` property should show the results using different values for the property, not how to combine it with other properties, pseudo-classes, or pseudo-elements to generate nice effects. Tutorials and guides can be written to show more.

## Step 4 — Get the content reviewed

After you've created the property page, submit it as a pull request. A member of our review team will be assigned automatically to review your page.
