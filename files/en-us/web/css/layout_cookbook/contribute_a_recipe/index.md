---
title: Contribute a recipe
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
page-type: guide
---

{{CSSRef}}

If you would like to contribute an example for the Layout Cookbook, then this page explains the steps to take to have your example published.

## What makes a good recipe?

**The simplest possible version of any useful web design pattern**. Each line of CSS that you include should be there to help demonstrate the pattern, so leave out anything there purely to make the example look pretty. The idea is that someone can take the pattern and use it in a site with their own styles.

A recipe consists of:

- A live example, stored in the [CSS Examples GitHub repo](https://github.com/mdn/css-examples).
- A downloadable version of that example, also stored in the CSS Examples repo.
- A page in the [CSS layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook) section of the site that includes:

  1. Introduction
  2. Requirements
  3. The recipe
  4. The choices made
  5. Any useful fallbacks or alternative methods, when relevant
  6. Accessibility concerns
  7. Browser compatibility (only if using CSS properties that aren't fully supported)
  8. Additional resources

## Steps to publish a recipe

To create a recipe and add it to the CSS Layout Cookbook, follow these steps:

1. [Build your pattern](#1-build-your-pattern)
2. [Create a live example](#2-creating-a-live-example)
3. [Create a downloadable version](#3-create-a-downloadable-version)
4. [Make a Pull Request](#4-make-a-pull-request-with-your-example)
5. [Add your content to MDN](#5-create-your-page)

### 1. Build your pattern

Before turning your example into a recipe, start by creating your pattern as a basic HTML page. Think about what you are trying to demonstrate and keep it as simple as possible. Use descriptive words like "container" or "item" if adding class names.

Ensure that the HTML and CSS are valid and tested in multiple browsers of different sizes. It's okay to use CSS properties that are not supported everywhere. Just make sure to include browser support information when creating the page, and make sure to include the features in the browser compatibility section. In some cases, it might be helpful to create a second version of your example, which includes fallback support.

### 2. Creating a live example

The live examples that you can see on cookbook pages and elsewhere on MDN allow visitors to play with the code and change relevant parts without being overwhelmed with all of the code needed. Your recipe will be demonstrated by way of one or more examples.

Fork the [CSS Examples repo](https://github.com/mdn/css-examples) and then take a look in the `css-cookbook` folder. There is a [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html) file. Copy this file and use it as a starting point. Save this in the `css-cookbook` directory with a name that makes sense for your pattern. The template is commented to help you add the various parts to the right place.

The important parts of this are as follows:

1. There is a stylesheet for the editor panels with some basic body styling and a JavaScript file for the editor functionality. Leave these files as they are.

2. There are two style blocks in the `<head>`. The first style block is for things the reader does not need to change to play with the example. The second style block contains the items readers might want to play with. We typically add all of our CSS from the example into the first block, then choose which sets of rules to move to the second block. The rules in the second block should be those that are fundamental to the pattern, perhaps those where a user could make a change to a CSS value and see the pattern update.

3. You need to add the HTML for your component twice. First, inside the section with a class of `preview`, then inside the `<textarea>` with the class `playable-html`.

4. Your editable CSS, from the second block in the head, must also be copied into the `playable-css` section.

A simple working example is [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), which is embedded on the page [Center an element](/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element). You can use this to see how to add the various bits correctly.

If you have forked the repo and therefore have our CSS and JavaScript files alongside your example, when you open up your live example in a browser, you should see everything working exactly as it will when included in a page.

#### Useful tips

1. Do not indent the CSS and HTML inside the textareas; instead, bump the code up against the start of the lines. This will look better when it is rendered.
2. If any images are required, put them into the directory with the examples. You are welcome to use any of the images already there.
3. You can adjust the height of the textareas by changing the height in the inline styles.

### 3. Create a downloadable version

As the examples include all of our live example code, we want to offer visitors the code for their example without anything they don't need. Make a copy of your live example with `--download` appended. For example, `center.html`, has a download version named `center--download.html`. This file will be similar to your initial example. It should be a basic version of your pattern as a single HTML page.

It can be handy to include the body CSS rules that are in our included stylesheet. Take a look at [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html); these are included as a starting point.

### 4. Make a Pull Request with your example

Make a [PR](/en-US/docs/MDN/Community/Pull_requests#open_a_pull_request) on the [CSS Examples repo](https://github.com/mdn/css-examples). This way, we can help you with any changes to the example that may be needed before you create your page. Plus, the example will need to be live to be included. This is why it makes sense to create the code examples first, before the explanatory guide. In your PR, explain the pattern and what you are demonstrating.

### 5. Create your page

Once your example is merged, you can [open a pull request](/en-US/docs/MDN/Community/Pull_requests#open_a_pull_request) to create a new page in the [Layout Cookbook directory](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook).
There is [a template for Cookbook pages](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1) that you should use.
The template explains what should be part of each section, and you can refer to other cookbook examples for more help.

Also, add a link to the new recipe in the top-level [Layout Cookbook page](/en-us/web/css/layout_cookbook/).

If you have any questions or want someone to take a look at your page, get in touch via any [communication channel](/en-US/docs/MDN/Community/Communication_channels).

## See also

- [Cookbook page template](/en-US/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples repo](https://github.com/mdn/css-examples)
