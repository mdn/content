---
title: How to document an HTTP header
slug: MDN/Contribute/Howto/Document_an_HTTP_header
tags:
  - Howto
  - MDN
  - Meta
---
<div>{{MDNSidebar}}</div>

<p>The MDN <a href="/en-US/docs/Web/HTTP/Headers">HTTP header reference</a> documents HTTP header fields are components of the header section of request and response messages in the Hypertext Transfer Protocol (<a href="/en-US/docs/Web/HTTP">HTTP</a>). They define the operating parameters of an HTTP transaction. This page explains how to create a new MDN reference page for an HTTP header.</p>

<h2 id="Prerequisites">Prerequisites</h2>

<ul>
 <li>You will need an <a href="/en-US/docs/MDN/Contribute/Getting_started#step_1_create_an_account_on_mdn">MDN account</a>.</li>
 <li>You will need to know or be able to dive into some <a href="/en-US/docs/Web/HTTP">HTTP</a>.</li>
</ul>

<h2 id="Step_1_–_find_an_HTTP_header_to_document">Step 1 – find an HTTP header to document</h2>

<ul>
 <li>There are many HTTP headers defined in various IETF standards.</li>
 <li>IANA maintains a <a href="https://www.iana.org/assignments/message-headers/message-headers.xhtml">registry of headers</a> and Wikipedia lists <a href="https://en.wikipedia.org/wiki/List_of_HTTP_header_fields">known header fields</a>, but not all are relevant to web developers or part of an official standard.</li>
 <li>If there are <strong>red links</strong> on the current <a href="/en-US/docs/Web/HTTP/Headers">MDN header reference overview page</a>, these headers are a good choice to document.</li>
 <li>If in doubt, <a href="/en-US/docs/MDN/Contribute/Getting_started#step_4_ask_for_help">ask an MDN contributor</a> if you are unsure whether or not it makes sense to write about the header you have chosen.</li>
</ul>

<h2 id="Step_2_–_look_at_existing_header_reference_pages">Step 2 – look at existing header reference pages</h2>

<ul>
 <li>Existing HTTP headers are documented <a href="/en-US/docs/Web/HTTP/Headers">here</a>.</li>
 <li>There are different header categories: {{Glossary("Request header")}}, {{Glossary("Response header")}},  and {{Glossary("Representation header")}}.</li>
 <li>Find the category of the header you are about to document (note that some headers can be both request and response headers, depending on context).</li>
 <li>Go to an existing header reference page that has the same category.</li>
</ul>

<h2 id="Step_3_–_create_a_new_page">Step 3 – create a new page</h2>

<ul>
 <li>All header pages live under this tree: <a href="/en-US/docs/Web/HTTP/Headers">/docs/Web/HTTP/Headers/</a></li>
 <li>To create a new page, see the instructions in our <a href="https://github.com/mdn/content#adding-a-new-document">GitHub README</a>.</li>
</ul>

<h2 id="Step_4_–_write_content">Step 4 – write content</h2>

<ul>
 <li>Either start from our <a href="/en-US/docs/MDN/Structures/Page_types#http_header_reference_page">template HTTP header page</a> or use a copied structure from one of the existing HTTP header documents that you found in step 2. It's your choice.</li>
 <li>Write about your new HTTP header.</li>
 <li>Make sure you have these sections:
  <ul>
   <li>Introductory text where the first sentence mentions the header name (bold) and summarizes its purpose.</li>
   <li>Information box containing at least the header type and if the header is a {{Glossary("Forbidden header name")}}.</li>
   <li>A syntax box containing all possible directives/parameters/values of the HTTP header.</li>
   <li>A section that explains these directives/values.</li>
   <li>An example section that contains a practical use case for this header or shows where and how it occurs usually.</li>
   <li>A specification section listing relevant RFC standard documents.</li>
   <li>A "See also" section listing relevant resources.</li>
  </ul>
 </li>
</ul>

<h2 id="Step_4a_–_add_tags_to_the_page">Step 4a –  add tags to the page</h2>

<p>All HTTP header pages should at least have these tags: "HTTP", "Header", "Reference".</p>

<h2 id="Step_5_–_add_browser_compatibility_information">Step 5 – add browser compatibility information</h2>

<ul>
 <li>If you have looked at other HTTP header pages, you will see that there is a \{{compat}} macro that will fill in a browser table for you.</li>
 <li>The compatibility table page is generated from structured data. If you’d like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data/README.md">https://github.com/mdn/browser-compat-data/README.md</a> and send us a pull request.</li>
</ul>

<h2 id="Step_6_–_add_the_header_to_the_HTTP_header_list">Step 6 – add the header to the HTTP header list</h2>

<ul>
 <li>Make sure your header is listed in an appropriate category on the <a href="/en-US/docs/Web/HTTP/Headers">HTTP header reference overview page</a>.</li>
</ul>

<h2 id="Step_7_–_get_a_review">Step 7 – get a review</h2>

<p>Once your page is created, submit it as a PR, and a member of our review team will be assigned automatically to review your page.</p>
