---
title: Contribute a recipe
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
page-type: guide
---

{{CSSRef}}

If you would like to contribute an example for the Layout Cookbook, then this page explains the steps to take to have your example published.

## What makes a good recipe?

**The simplest possible version of any useful web design pattern**. Each line of CSS that you include should be there to help demonstrate the pattern, so leave out anything there purely to make the example look pretty. The idea is that someone can take the pattern and use it in a site with their own styles.

## Steps to publish a recipe

A recipe consists of:

1. A live example, stored in the [CSS Examples GitHub repo](https://github.com/mdn/css-examples).
2. A downloadable version of that example, also stored in the CSS Examples repo.
3. A page in the [CSS layout cookbook](/en-US/docs/Web/CSS/Layout_cookbook) section of the site that includes:

   1. Requirements
   2. The recipe
   3. The choices made
   4. Any useful fallbacks or alternative methods
   5. Any accessibility concerns
   6. Browser compatibility
   7. Additional resources

### 1. Build your pattern

Before turning your example into a recipe, start by creating your pattern as a simple HTML page. Think about what you are trying to demonstrate and keep it as simple as possible. Avoid using specific CSS conventions (such as BEM) as not everyone will be familiar with these, and they can make things look more complex than they need to be.

Ensure that the HTML and CSS is valid, and test in more than one browser. If you are using CSS properties that are not supported everywhere, that's fine! You can include browser support information when creating the page. In some cases it might be helpful to create a second version of your example, which includes fallback support.

### 2. Creating a live example

The live examples that you can see on cookbook pages and elsewhere on MDN allow visitors to play with the code and change relevant parts without being overwhelmed with all of the code needed. You recipe will be demonstrated by way of one or more examples.

Fork the [CSS Examples repo](https://github.com/mdn/css-examples) and then take a look in the `css-cookbook` folder. There is a [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html) file you can copy as a starting point. Save this in the css-cookbook directory with a name that makes sense for your pattern. The template is commented to help you add the various parts to the right place.

The important parts of this are as follows.

There is a stylesheet for styles for the editor panels, and some basic body styling, and a JavaScript file included for the editor functionality. Leave these files as they are.

There are two style blocks in the head. The first are for things that a visitor to the page does not need to change to play with the example. The second is for any of the items they might want to play with in the live example. We typically add all of our CSS from like example in the first block, then choose which sets of rules we need to move down to the second block. The rules in the second block should be those that are fundamental to the pattern, perhaps those where a user could make a change to a CSS value and see the pattern update.

You need to add the HTML for your component twice. First inside the section with a class of preview, then inside the textarea `playable-html`.

Your editable CSS, from the second block in the head, also needs to be copied into the `playable-css` section.

A simple working example is [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), which is embedded on the page [Center an element](/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element). You can use this to see how to add the various bits correctly.

If you have forked the repo and therefore have our CSS and JavaScript files alongside your example, if you open up your live example in the browser you should see everything working exactly as it will when included in a page.

#### Useful tips

1. Do not indent the CSS and HTML inside the textareas; instead bump it up against the start of the lines. This will look better when it is rendered.
2. If you have any required images, pop them into the directory with the examples. Or you are welcome to use any already there.
3. You can adjust the height of the textareas by changing the height in the inline styles.

### 3. Create a downloadable version

As the examples include all of our live example code, we want to offer visitors a simple example without all of that included. Make a copy of your live example with --download appended. For example, center.html, has a download version named `center--download.html`. This file will be similar to your initial example. It should be a basic version of your pattern as a single HTML page. It can be handy to include the body CSS rules that are in our included stylesheet, if you take a look at [cookbook-template--download.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html), these are included as a starting point.

### 4. Make a Pull Request with your example

Make a PR on the [CSS Examples repo](https://github.com/mdn/css-examples). This way we can help you with any changes to the example that may be needed before you create your page, plus the example will need to be live to be included some it makes sense to create it first. Include in your PR an explanation of the pattern and what you are demonstrating.

### 5. Create your page

Once your example is merged you can [open a pull request](/en-US/docs/MDN/Community/Pull_requests#open_a_pull_request) to create a new page for it in the [Layout Cookbook directory](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook).
There is [a template for Cookbook pages](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1) that you should use.
The template explains what should be part of each section, and you can refer to other cookbook examples for more help.

If you need to ask any questions, or want someone to take a look at your page, get in touch with us on any of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## See also

- [Cookbook page template](/en-US/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples repo](https://github.com/mdn/css-examples)
