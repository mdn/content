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
- A page in the [CSS layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook) section of the site, which should include the following components:

  1. Introduction
  2. Requirements
  3. Recipe
  4. Decisions
  5. Useful fallbacks or alternative methods (when relevant)
  6. Accessibility concerns
  7. Browser compatibility (only for CSS properties not fully supported)
  8. Additional resources

## Steps to publish a recipe

To create a recipe and add it to the CSS Layout Cookbook, follow these steps:

1. [Build a pattern](#1._build_a_pattern)
2. [Create a live example](#2._create_a_live_example)
3. [Create a downloadable version](#3._create_a_downloadable_version)
4. [Open a pull request](#4._open_a_pull_request_with_your_example)
5. [Add your content to MDN](#5._create_your_page)

### 1. Build a pattern

Before turning your example into a recipe, start by creating your pattern as a basic HTML page. Think about what you are trying to demonstrate and keep it as simple as possible. Use descriptive words like "container" or "item" if adding class names.

Ensure that you've tested the HTML and CSS across multiple browsers, viewport sizes, and devices. Also ensure that any CSS styling follows accessibility guidelines. While it's okay to use CSS properties with limited support, be sure to include browser support information when creating the page, particularly in the browser compatibility section. In some cases, creating a second version of your example with fallback support can be helpful.

### 2. Create a live example

The live examples on cookbook pages, such as for [centering an element](/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element), and elsewhere on MDN allow readers to play with the code and change relevant parts without being overwhelmed with all of the code. Your recipe will be demonstrated by way of one or more examples.

Fork the [CSS Examples repo](https://github.com/mdn/css-examples) and then take a look in the `css-cookbook` folder. There is a [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html) file. Copy this file and use it as a starting point. Save this in the `css-cookbook` directory with a name that makes sense for your pattern. The template contains comments to guide you in adding various parts at the appropriate places.

The important parts of this template are as follows:

- There is a stylesheet for the editor panels with some basic body styling and a JavaScript file for the editor functionality. Leave these files as they are.

- The `<head>` contains two style blocks. The first style block is for elements that readers do not need to change to play with the example. The second style block contains items that readers might want to play with. We typically add all our CSS to the first block, then choose the rules to move to the second block. The rules in the second block should be those that are fundamental to the pattern, perhaps those where a reader can change a CSS value and see the pattern update.

- You need to add the HTML for your component twice: first inside the section with the class `preview`, and then inside the `<textarea>` with the class `playable-html`.

- The editable CSS from the second `<head>` block must also be copied into the `playable-css` section.

A simple working example is [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), which is embedded on the page [Center an element](/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element). You can use this to see how to add the various bits correctly.

If you've forked the repo and have our CSS and JavaScript files with your example, opening your live example in a browser should display everything working exactly as it would appear on an MDN page.

#### Useful tips

- Do not indent the CSS and HTML inside the text areas; instead, align the code with the start of the lines. This will look better when it is rendered.
- If any images are required, put them in the directory with the examples. You are welcome to use any images already present.
- You can adjust the height of the text areas by changing the height in the inline styles.

### 3. Create a downloadable version

As the examples include all of our live example code, we want to provide readers with just the code they need for their example, omitting any unnecessary items. Create a copy of your live example, and add `--download` to its name. For example, the download version of `center.html` is `center--download.html`. This file will be similar to your initial example. It should be a basic version of your pattern as a single HTML page.

It can be handy to include the body CSS rules from our included stylesheet. Take a look at [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) as a guide; these rules are provided as a starting point.

### 4. Open a pull request with your example

Open a pull request (PR) on the [CSS Examples repo](https://github.com/mdn/css-examples/pulls). This allows us to help you with any changes to the example that may be needed before you create your page. Plus, the example will need to be live to be included. This is why it makes sense to first create the code examples and then the explanatory guide. In your PR, explain the pattern and what you are demonstrating. See our [guidelines for opening a pull request](/en-US/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Create your page

After your example PR is merged, open a pull request to create a new page in the [Layout Cookbook directory](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook).
Use our [template for Cookbook pages](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
The template explains the requirements of each section, and you can refer to other cookbook examples for more help.

Remember to add a link to your new recipe on the main [Layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook) page.

If you have any questions or want someone to take a look at your page, get in touch via any of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## See also

- [Cookbook page template](/en-US/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples repo](https://github.com/mdn/css-examples)
