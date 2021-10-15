---
title: How to document an HTTP header
slug: MDN/Contribute/Howto/Document_an_HTTP_header
tags:
  - Howto
  - MDN
  - Meta
---
{{MDNSidebar}}

The MDN [HTTP header reference](/en-US/docs/Web/HTTP/Headers) documents HTTP header fields are components of the header section of request and response messages in the Hypertext Transfer Protocol ([HTTP](/en-US/docs/Web/HTTP)). They define the operating parameters of an HTTP transaction. This page explains how to create a new MDN reference page for an HTTP header.

## Prerequisites

- You will need an [MDN account](/en-US/docs/MDN/Contribute/Getting_started#step_1_create_an_account_on_mdn).
- You will need to know or be able to dive into some [HTTP](/en-US/docs/Web/HTTP).

## Step 1 – find an HTTP header to document

- There are many HTTP headers defined in various IETF standards.
- IANA maintains a [registry of headers](https://www.iana.org/assignments/message-headers/message-headers.xhtml) and Wikipedia lists [known header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), but not all are relevant to web developers or part of an official standard.
- If there are **red links** on the current [MDN header reference overview page](/en-US/docs/Web/HTTP/Headers), these headers are a good choice to document.
- If in doubt, [ask an MDN contributor](/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help) if you are unsure whether or not it makes sense to write about the header you have chosen.

## Step 2 – look at existing header reference pages

- Existing HTTP headers are documented [here](/en-US/docs/Web/HTTP/Headers).
- There are different header categories: {{Glossary("Request header")}}, {{Glossary("Response header")}}, and {{Glossary("Representation header")}}.
- Find the category of the header you are about to document (note that some headers can be both request and response headers, depending on context).
- Go to an existing header reference page that has the same category.

## Step 3 – create a new page

- All header pages live under this tree: [/docs/Web/HTTP/Headers/](/en-US/docs/Web/HTTP/Headers)
- To create a new page, see the instructions in our [GitHub README](https://github.com/mdn/content#adding-a-new-document).

## Step 4 – write content

- Either start from our [template HTTP header page](/en-US/docs/MDN/Structures/Page_types#http_header_reference_page) or use a copied structure from one of the existing HTTP header documents that you found in step 2. It's your choice.
- Write about your new HTTP header.
- Make sure you have these sections:

  - Introductory text where the first sentence mentions the header name (bold) and summarizes its purpose.
  - Information box containing at least the header type and if the header is a {{Glossary("Forbidden header name")}}.
  - A syntax box containing all possible directives/parameters/values of the HTTP header.
  - A section that explains these directives/values.
  - An example section that contains a practical use case for this header or shows where and how it occurs usually.
  - A specification section listing relevant RFC standard documents.
  - A "See also" section listing relevant resources.

## Step 4a –  add tags to the page

All HTTP header pages should at least have these tags: "HTTP", "Header", "Reference".

## Step 5 – add browser compatibility information

- If you have looked at other HTTP header pages, you will see that there is a \\{{compat}} macro that will fill in a browser table for you.
- The compatibility table page is generated from structured data. If you’d like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data/README.md> and send us a pull request.

## Step 6 – add the header to the HTTP header list

- Make sure your header is listed in an appropriate category on the [HTTP header reference overview page](/en-US/docs/Web/HTTP/Headers).

## Step 7 – get a review

Once your page is created, submit it as a PR, and a member of our review team will be assigned automatically to review your page.
