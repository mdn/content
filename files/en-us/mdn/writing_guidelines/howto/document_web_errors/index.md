---
title: How to document web errors
short-title: Document errors
slug: MDN/Writing_guidelines/Howto/Document_web_errors
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The [JavaScript error reference](/en-US/docs/Web/JavaScript/Reference/Errors) on MDN Web Docs is a project to help web developers with errors occurring in the [Developer Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). For this project, we need to write more error documentation on MDN Web Docs so that we can add more links to the tools where the messages are thrown. This article explains how to document the web errors.

JavaScript errors contain a "Learn more" link that takes you to the JavaScript error reference containing additional advice for fixing issues. To be able to document the web errors, you will need to know or be able to dive into some [JavaScript](/en-US/docs/Web/JavaScript).

## Step 1 – Determine the error to document

- Firefox/Gecko's error messages: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Chrome/v8's error messages: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Step 2 – Check the existing error documentation

- Look at the existing [JavaScript error reference](/en-US/docs/Web/JavaScript/Reference/Errors) and see how errors are documented.
- Depending on which type of error you want to write about, you can take a closer look at these pages.
- You might want to copy the content of an existing page to kick off your new page.

## Step 3 – Create the new error page

- All error pages live under this tree: [/docs/Web/JavaScript/Reference/Errors](/en-US/docs/Web/JavaScript/Reference/Errors)
- To create a new page, see the instructions in our [how to create a page](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) guide.

## Step 4 – Document the error

- Either use a copied structure from one of the existing error documents or start from scratch. Your choice!
- You should have at least:

  - A syntax box containing the message as thrown in different browsers.
  - The error type.
  - A text that explains why this error happened and what its consequences are. Go beyond the thrown message.
  - Examples showcasing the error (there might be more than one!) and an example showing how to fix the code.
  - Pointers to other reference material on MDN Web Docs.

## Step 5 – Get the content reviewed

After you've created the error page, submit it as a pull request. A member of our review team will be assigned automatically to review your page.
