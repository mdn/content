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
<div>{{MDNSidebar}}</div>

<p>This article introduces new contributors to the process of editing existing pages and creating new ones.</p>

<h2 id="Editing_an_existing_page">Editing an existing page</h2>

<p>To edit a page, you need to find the page source in our <a href="https://github.com/mdn/content">content</a> repo. The easiest way to find it is to navigate to the page you want to edit, go to the bottom of the page, and click on the "Source on GitHub" link.</p>

<p>Once you've found the source to edit, go to our README and work through our <a href="https://github.com/mdn/content#making-contributions">Making contributions</a> guide.</p>

<h3 id="Preview_changes">Preview changes</h3>

<p>If you are editing the page locally, to see what your changes look like you can go to the content repo folder, execute the CLI command <code>yarn start</code>, go to <code>localhost:5000</code> in your browser, and navigate to page and view it. Enter the title in the search box to find it easily. The previewed page will update in the browser live as you edit the source.</p>

<h3 id="Tags">Tags</h3>

<p>You can add or remove tags, which describe the page's content and purpose, in the "tags" list at the top of the page source. See <a href="/en-US/docs/MDN/Contribute/Howto/Tag">How to properly tag pages</a>, for information on which tags to apply.</p>

<h3 id="Attach_files">Attach files</h3>

<p>To attach a file to your article, you just need to include it in the same directory as the article's <code>index.html</code> file, and include it in your page, typically via an <code>&lt;a&gt;</code> element.</p>

<h2 id="Creating_a_new_page">Creating a new page</h2>

<p>To create a new page, see our <a href="https://github.com/mdn/content#adding-a-new-document">Adding a new document</a> instructions.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/MDN/Guidelines/Writing_style_guide">MDN style guide</a></li>
</ul>
