---
title: "Test your skills: Links"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills:_Links
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you understand how to [implement links in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, we want you to help fill in the links on our Whales information page:

- The first link should be linked to a page called `whales.html`, which is in the same directory as the current page.
- We'd also like you to give it a tooltip when moused over that tells the user that the page includes information on Blue Whales and Sperm Whales.
- The second link should be turned into a link you can click to open up an email in the user's default mail application, with the recipient set as "whales\@example.com".
- You'll get a bonus point if you also set it so that the subject line of the email is automatically filled in as "Question about Whales".

> [!NOTE]
> The two links in the example have the `target="_blank"` attribute set on them. This is not strictly best practice, but we've done it here so that the links don't open in the embedded `<iframe>`, getting rid of your example code in the process!

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/links/links1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links1-download.html) to work in your own editor or in an online editor.

## Task 2

In this task, we want you to fill in the four links so that they link to the appropriate places:

- The first link should link to an image called `blue-whale.jpg`, which is located in a directory called `blue` inside the current directory.
- The second link should link to an image called `narwhal.jpg`, which is located in a directory called `narwhal`, which is located one directory level above the current directory.
- The third link should link to the UK Google Image search. The base URL is `https://www.google.co.uk`, and the image search is located in a subdirectory called `imghp`.
- The fourth link should link to the paragraph at the very bottom of the current page. It has an ID of `bottom`.

> [!NOTE]
> The first three links in the example have the `target="_blank"` attribute set on them, so that when you click on them, they open the linked page in a new tab. This is not strictly best practice, but we've done it here so that the pages don't open in the embedded `<iframe>`, getting rid of your example code in the process!

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/links/links2.html", '100%', 800)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links2-download.html) to work in your own editor or in an online editor.

## Task 3

The following links link to an info page about Narwhals, a support email address, and a PDF factfile that is 4MB in size. In this task, we want you to:

- Take the existing paragraphs with poorly-written link text, and rewrite them so that they have good link text.
- Add a warning to any links that need a warning added.

> [!NOTE]
> The first and third links in the example have the `target="_blank"` attribute set on them, so that when you click on them, they open the linked page in a new tab. This is not strictly best practice, but we've done it here so that the pages don't open in the embedded `<iframe>`, getting rid of your example code in the process!

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/tasks/links/links3.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links3-download.html) to work in your own editor or in an online editor.
