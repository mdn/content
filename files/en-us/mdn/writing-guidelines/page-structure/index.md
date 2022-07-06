---
title: Page structure
slug: MDN/Writing_guidelines/Page_structure
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

This section of MDN Web Docs writing guidelines contains all the information on _how_ our pages are structured: The different types of pages we have, what is included in them, how we use markdown, code example guidelines and more.

To find out more about _how to contribute_ (which happens through GitHub) please refer to our [community guidelines]().

> **Note:** All the way through this section we assume you have read the contribution guidelines and are familiar with the mdn/content repository and how to use git and GitHub.

MDN Web Docs content is primarily held in the mdn/content repository and each page is written in a markdown format with frontmatter information at the top.

Some content is held in other repositories; primarily code examples (such as interactive examples at the top of pages). Anything related to the platform (the website itself and _not_ the articles) is held within the mdn/yari repository.

If you're looking for the place to update the browser compatibility tables, that data is held with mdn/browser-compat-data repository.

## Editing an existing page

To edit a page, you need to find the page source in our [content](https://github.com/mdn/content) repo. The easiest way to find it is to navigate to the page you want to edit, go to the bottom of the page, and click on the "Source on GitHub" link.

For creating, moving, and removing content, please refer to [Creating, moving and deleting pages](/en-US/docs/MDN/Writing_guidelines/Creating_moving_archiving)

### Preview changes

If you are editing the page locally, to see what your changes look like you can go to the content repo folder, execute the CLI command `yarn start`, go to `localhost:5042` in your browser, and navigate to page and view it. Enter the title in the search box to find it easily. The previewed page will update in the browser as you edit the source.

### Tags

You can add or remove tags, which describe the page's content and purpose, in the "tags" list at the top of the page source. See [How to properly tag pages](/en-US/docs/MDN/Contribute/Howto/Tag), for information on which tags to apply.

### Attach files

To attach a file to your article, you just need to include it in the same directory as the article's `index.html` file, and include it in your page, typically via an `<a>` element.


## In this section



## See also

- [MDN style guide](/en-US/docs/MDN/Guidelines/Writing_style_guide)
