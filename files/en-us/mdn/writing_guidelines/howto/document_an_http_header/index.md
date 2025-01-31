---
title: How to document an HTTP header
short-title: Document an HTTP header
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

The [HTTP headers reference](/en-US/docs/Web/HTTP/Headers) documents the header section of request and response messages in the Hypertext Transfer Protocol ([HTTP](/en-US/docs/Web/HTTP)).
This article explains how to create a new reference page for an HTTP header.

## Step 1 – Determine the HTTP header to document

- There are many HTTP headers defined in various IETF standards.
- IANA maintains a [registry of HTTP header fields](https://www.iana.org/assignments/http-fields/http-fields.xhtml) and Wikipedia lists the [known header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), but not all are relevant to web developers or are part of an official standard.
- If there are any **red links** on the current [HTTP headers reference overview page](/en-US/docs/Web/HTTP/Headers), these headers are a good choice to document.
- If in doubt, [ask the MDN Web Docs team](/en-US/docs/MDN/Community/Communication_channels) whether or not it makes sense to write about the header you have chosen.

## Step 2 – Check the existing HTTP header pages

- Existing HTTP headers are documented [here](/en-US/docs/Web/HTTP/Headers).
- There are different header categories: {{Glossary("Request header")}}, {{Glossary("Response header")}}, and {{Glossary("Representation header")}}.
- Find the category of the header you are about to document (note that some headers can be both request and response headers, depending on the context).
- Go to an existing header reference page that has the same category.

## Step 3 – Create the HTTP header page

- All header pages live under this tree: [`files/en-us/web/http/headers`](https://github.com/mdn/content/tree/main/files/en-us/web/http/headers)
- To create a new page, see the instructions in our [how to create a page](/en-US/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) guide.

## Step 4 – Write the content

- Either start from our [template HTTP header page](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page) or use a copied structure from one of the existing HTTP header documents that you found in step 2. It's your choice.
- Write about the new HTTP header.
- Make sure you have these sections:

  - Introductory text where the first sentence mentions the header name (bold) and summarizes its purpose.
  - Information box containing at least the header type and if the header is a {{Glossary("Forbidden header name")}}.
  - A syntax box containing all possible directives/parameters/values of the HTTP header.
  - A section that explains these directives/values.
  - An example section that contains a practical use case for this header or shows where and how it occurs usually.
  - A specification section listing relevant RFC standard documents.
  - A "See also" section listing relevant resources.

## Step 5 – Add browser compatibility information

- If you have looked at other HTTP header pages, you will see that there is a `\{{Compat}}` macro that will fill in a browser table for you.
- The compatibility table page is generated from structured data. If you'd like to contribute to the data, please check out the instructions at <https://github.com/mdn/browser-compat-data/blob/main/README.md> and send us a pull request.

## Step 6 – Update the HTTP headers list

Make sure your header is listed in an appropriate category on the [HTTP headers reference overview page](/en-US/docs/Web/HTTP/Headers).

## Step 7 – Get the content reviewed

After you've created the header page, submit it as a pull request. A member of our review team will be assigned automatically to review your page.
