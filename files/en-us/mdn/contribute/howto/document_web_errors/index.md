---
title: How to document web errors
slug: MDN/Contribute/Howto/Document_web_errors
tags:
  - Howto
  - MDN
  - Meta
---
{{MDNSidebar}}

The MDN [JavaScript error reference](/en-US/docs/Web/JavaScript/Reference/Errors) is a project aiming to help web developers with errors occurring in the [Developer Console](/en-US/docs/Tools/Web_Console). You can see this feature in action in Firefox — JavaScript errors contain a "Learn more" link that takes you to the JavaScript error reference containing additional advice for fixing issues.

In order to help this project, we need to write more error documentation on MDN so that we can add more links to the tools where the messages are thrown.

## Prerequisites

- You will need an [MDN account](/en-US/docs/MDN/Contribute/Getting_started#step_1_create_an_account_on_mdn).
- You will need to know or able to dive into some [JavaScript](/en-US/docs/Web/JavaScript).

## Step 1 – find an error to document

- Firefox/Gecko's error messages: <https://dxr.mozilla.org/mozilla-central/source/js/src/js.msg>
- Edge/Chakra's error messages: <https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h>
- Chrome/v8's error messages: <https://github.com/v8/v8/blob/master/src/messages.h#L75>

## Step 2 – look at existing error docs

- Look at the existing [JavaScript error reference](/en-US/docs/Web/JavaScript/Reference/Errors) and see how errors are documented.
- Depending on which type of error you want to write about, you can take a closer look at these pages.
- You might want to copy the content of an existing page to kick off your new page.

## Step 3 – create a new page

- All error pages live under this tree: [/docs/Web/JavaScript/Reference/Errors](/en-US/docs/Web/JavaScript/Reference/Errors)
- To create a new page, see the instructions in our [GitHub README](https://github.com/mdn/content#adding-a-new-document).

## Step 4 – write some content

- Either use a copied structure from one of the existing error documents or start from scratch. Your choice!
- You should have at least:

  - A syntax box containing the message as thrown in different browsers.
  - The error type.
  - A text that explains why this error happened, what its consequences are. Go beyond the thrown message.
  - Examples showcasing the error (there might be more than one!) and an example showing how to fix the code.
  - Pointers to other reference material on MDN.

## Step 5 – get a review

Once your page is created, submit it as a PR, and a member of our review team will be assigned automatically to review your page.
