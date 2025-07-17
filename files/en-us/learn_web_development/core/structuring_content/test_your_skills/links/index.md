---
title: "Test your skills: Links"
short-title: Links
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to assess whether you understand how to [implement links in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links).

> [!NOTE]
> You can try solutions in the MDN Playground or in an online editor such as [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, we want you to help fill in the links on our Whales information page. To complete the task:

- The first link should be linked to a page called `whales.html`, which is in the same directory as the current page.
- We'd also like you to give it a tooltip when moused over that tells the user that the page includes information on Blue Whales and Sperm Whales.
- The second link should be turned into a link you can click to open up an email in the user's default mail application, with the recipient set as "whales\@example.com".
- Bonus points if you also set it so that the subject line of the email is automatically filled in as "Question about Whales".

> [!NOTE]
> The links in the starting code have the `target="_blank"` attribute set on them, so that when you click on them, they open the linked page in a new tab. This is not strictly best practice, but we've done it here so that the pages don't open in the MDN Playground output `<iframe>`, getting rid of your example code in the process!

To get started, you can click **"Play"** in the code block below to edit the example in the MDN Playground, or [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links1-download.html) and work locally in your own editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution at the bottom of the section.

```html live-sample___links-1
<h1>Information on Whales</h1>

<p>
  For more information on our conservation activities and which Whales we study,
  see our <a target="_blank">Whales page</a>.
</p>

<p>
  If you want to ask our team more questions, feel free to
  <a target="_blank">email us</a>.
</p>
```

```css hidden live-sample___links-1
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

{{ EmbedLiveSample('links-1', "100%", 170) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html-nolint
<h1>Information on Whales</h1>

<p>
  For more information on our conservation activities and which Whales we study,
  see our <a target="_blank" href="whales.html" title="Includes information on Blue Whales and Sperm Whales">
  Whales page</a>.
</p>

<p>
  If you want to ask our team more questions, feel free to
  <a target="_blank" href="mailto:whales@example.com?subject=Question%20about%20Whales">
  email us</a>.
</p>
```

</details>

## Task 2

In this task, we want you to fill in the four links so that they link to the appropriate places. To complete the task:

- The first link should link to an image called `blue-whale.jpg`, which is located in a directory called `blue` inside the current directory.
- The second link should link to an image called `narwhal.jpg`, which is located in a directory called `narwhal`, which is located one directory level above the current directory.
- The third link should link to the UK Google Image search. The base URL is `https://www.google.co.uk`, and the image search is located in a subdirectory called `imghp`.
- The fourth link should link to the paragraph at the very bottom of the current page. It has an ID of `bottom`.

> [!NOTE]
> The first three links in the example have the `target="_blank"` attribute set on them, so that when you click on them, they open the linked page in a new tab. This is not strictly best practice, but we've done it here so that the pages don't open in the MDN Playground output `<iframe>`, getting rid of your example code in the process!

To get started, you can click **"Play"** in the code block below to edit the example in the MDN Playground, or [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links2-download.html) and work locally in your own editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution at the bottom of the section.

```html live-sample___links-2
<h1>List path tests</h1>

<ul>
  <li><a target="_blank">Link me to the blue whale image</a></li>
  <li><a target="_blank">Link me to the narwhal image</a></li>
  <li><a target="_blank">Link me to Google image search</a></li>
  <li><a>Link me to the paragraph at the bottom of the page</a></li>
</ul>

<div></div>

<p id="bottom">The bottom of the page!</p>
```

```css hidden live-sample___links-2
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

li {
  color: gray;
  margin: 0.5em 0;
}

div {
  height: 600px;
}
```

{{ EmbedLiveSample('links-2', "100%", 200) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html-nolint
<h1>List path tests</h1>

<ul>
  <li><a target="_blank" href="blue/blue-whale.jpg">
    Link me to the blue whale image
  </a></li>
  <li><a target="_blank" href="../narwhal/narwhal.jpg">
    Link me to the narwhal image
  </a></li>
  <li><a target="_blank" href="https://www.google.co.uk/imghp">
    Link me to Google image search
  </a></li>
  <li><a href="#bottom">
    Link me to the paragraph at the bottom of the page
  </a></li>
</ul>

<div></div>

<p id="bottom">The bottom of the page!</p>
```

</details>

## Task 3

The following links link to an info page about Narwhals, a support email address, and a PDF factfile that is 4MB in size. In this task, we want you to:

- Take the existing paragraphs with poorly-written link text, and rewrite them so that they have good link text.
- Add a warning to any links that need a warning added.

> [!NOTE]
> The first and third links in the example have the `target="_blank"` attribute set on them, so that when you click on them, they open the linked page in a new tab. This is not strictly best practice, but we've done it here so that the pages don't open in the MDN Playground output `<iframe>`, getting rid of your example code in the process!

To get started, you can click **"Play"** in the code block below to edit the example in the MDN Playground, or [download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/tasks/links/links3-download.html) and work locally in your own editor.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution at the bottom of the section.

```html live-sample___links-3
<p>
  We do lots of work with Narwhals. To find out more about this work,
  <a href="narwhals.html" target="_blank">click here</a>.
</p>

<p>
  You can email our support team if you have any more questions —
  <a href="mailto:whales@example.com">click here</a> to do so.
</p>

<p>
  You can also <a href="factfile.pdf" target="_blank">click here</a> to download
  our factfile, which contains lots more information, including an FAQ.
</p>
```

```css hidden live-sample___links-3
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

{{ EmbedLiveSample('links-3', "100%", 200) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html-nolint
<p>
  We do lots of work with Narwhals. <a href="narwhals.html" target="_blank">Find out more about this work</a>.
</p>

<p>
  You can <a href="mailto:whales@example.com">email our support team</a> if you have any more questions.
</p>

<p>
  You can also <a href="factfile.pdf" target="_blank">download
  our factfile</a> (PDF, 4MB), which contains lots more information, including an FAQ.
</p>
```

</details>
