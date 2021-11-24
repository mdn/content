---
title: How to create and edit pages
slug: MDN/Contribute/Howto/Create_and_edit_pages
tags:
  - Beginner
  - Guide
  - Howto
  - Intro
  - MDN Meta
---
{{MDNSidebar}}

This article introduces new contributors to the process of editing existing pages and creating new ones.

## Editing an existing page

To edit a page, you need to find the page source in our [content](https://github.com/mdn/content) repo. The easiest way to find it is to navigate to the page you want to edit, go to the bottom of the page, and click on the "Source on GitHub" link.

Once you've found the source to edit, go to our README and work through our [Making contributions](https://github.com/mdn/content#making-contributions) guide.

### Preview changes

If you are editing the page locally, to see what your changes look like you can go to the content repo folder, execute the CLI command `yarn start`, go to `localhost:5000` in your browser, and navigate to page and view it. Enter the title in the search box to find it easily. The previewed page will update in the browser live as you edit the source.

### Tags

You can add or remove tags, which describe the page's content and purpose, in the "tags" list at the top of the page source. See [How to properly tag pages](/en-US/docs/MDN/Contribute/Howto/Tag), for information on which tags to apply.

### Attach files

To attach a file to your article, you just need to include it in the same directory as the article's `index.html` file, and include it in your page, typically via an `<a>` element.

## Creating a new page

To create a new page, see our [Adding a new document](https://github.com/mdn/content#adding-a-new-document) instructions.

## See also

- [MDN style guide](/en-US/docs/MDN/Guidelines/Writing_style_guide)
