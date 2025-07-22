---
title: "Test your skills: HTML accessibility"
short-title: HTML
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to help you assess whether you've understood our [HTML: A good basis for accessibility](/en-US/docs/Learn_web_development/Core/Accessibility/HTML) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## HTML accessibility 1

In this task we will test your understanding of semantic HTML, and why it is good for accessibility. The given text is an information panel with action buttons, but the HTML is really bad.

To complete the task, update the markup to use appropriate semantic HTML. You don't need to worry too much about recreating the _exact_ same look and text sizing, as long as the semantics are good.

<!-- Code shared across examples -->

```css hidden live-sample___html-ally-1 live-sample___html-ally-2 live-sample___html-ally-3 live-sample___html-ally-4
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

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___html-ally-1
<font size="7">Need help?</font> <br /><br />
If you have any problems with our products, our support center can offer you all
the help you need, whether you want:
<br /><br />
1. Advice choosing a new product
<br />
2. Tech support on an existing product
<br />
3. Refund and cancellation assistance
<br /><br />
<font size="5">Contact us now</font>
<br /><br />
Our help center contains live chat, email addresses, and phone numbers.
<br /><br />
<div class="button">Find Contact Details</div>
<br />
<font size="5">Find out answers</font>
<br /><br />
Our Forums section contains a large knowledge base of searchable previously
asked questions, and you can always ask a new question if you can't find the
answer you're looking for.
<br /><br />
<div class="button">Access Forums</div>
```

```css live-sample___html-ally-1
.button {
  color: white;
  background-color: blue;
  border-radius: 10px;
  width: 170px;
  padding: 10px;
  text-align: center;
}
```

{{ EmbedLiveSample("html-ally-1", "100%", 400) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<h2>Need help?</h2>

<p>
  If you have any problems with our products, our support center can offer you
  all the help you need, whether you want:
</p>

<ul>
  <li>Advice choosing a new product</li>
  <li>Tech support on an existing product</li>
  <li>Refund and cancellation assistance</li>
</ul>

<h3>Contact us now</h3>

<p>Our help center contains live chat, email addresses, and phone numbers.</p>

<button>Find Contact Details</button>

<h3>Find out answers</h3>

<p>
  Our Forums section contains a large knowledge base of searchable previously
  asked questions, and you can always ask a new question if you can't find the
  answer you're looking for.
</p>

<button>Access forums</button>
```

Bonus points for:

- Just using `<button>`, not `<button class="button">` (repeating semantics is unnecessary), and updating the CSS selector to make sure the button still picks up the styles.
- Using an unordered list, not an ordered list — the list of items doesn't really need to be in any order.

</details>

## HTML accessibility 2

In the second task, you have a form containing three input fields.

To complete the task:

1. Semantically associate the inputs with their labels.
2. Assume that these inputs will be part of a larger form, and wrap them in an element that associates them all together as a single related group.
3. Give the group a description/title that summarizes all of the information as personal data.

```html live-sample___html-ally-2
<form>
  <ul>
    <li>
      Name
      <input type="text" name="name" />
    </li>
    <li>
      Age
      <input type="number" name="age" />
    </li>
    <li>
      Email address
      <input type="email" name="email" />
    </li>
  </ul>
</form>
```

```css live-sample___html-ally-2
form {
  width: 400px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
```

{{ EmbedLiveSample("html-ally-2", "100%", 200) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<form>
  <fieldset>
    <legend>Personal data</legend>
    <ul>
      <li>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
      </li>
      <li>
        <label for="age">Age</label>
        <input type="number" name="age" id="age" />
      </li>
      <li>
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## HTML accessibility 3

In this task you are required to turn all the information links in the paragraph into good, accessible links.

- The first two links just go to regular web pages.
- The third link goes to a PDF, and it's large — 8MB.
- The fourth link goes to a Word document, so the user will need some kind of application installed that can handle that.

To complete the task, update the links appropriately based on the above descriptions.

```html-nolint live-sample___html-ally-3
<p>
  For more information about our activities, check out our fundraising page
  (<a href="/fundraising" target="_blank">click here</a>), education page
  (<a href="/education" target="_blank">click here</a>), sponsorship pack
  (<a href="/resources/sponsorship.pdf" target="_blank">click here</a>),
   and assessment sheets
  (<a href="/resources/assessments.docx" target="_blank">click here</a>).
</p>
```

> [!NOTE]
> The links in the starting code have the `target="_blank"` attribute set on them, so that when you click on them, they try to open the linked pages in a new tab rather than the same tab. This is not strictly best practice, but we've done it here so that the pages don't open in the MDN Playground output `<iframe>`, getting rid of your example code in the process!

{{ EmbedLiveSample("html-ally-3", "100%", 140) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<p>
  For more information about our activities, check out our
  <a href="/fundraising" target="_blank">fundraising page</a>,
  <a href="/education" target="_blank">education page</a>,
  <a href="/resources/sponsorship.pdf" target="_blank"
    >sponsorship pack (PDF, 8MB)</a
  >, and
  <a href="/resources/assessments.docx" target="_blank"
    >assessment sheets (Word document)</a
  >.
</p>
```

</details>

## HTML accessibility 4

In our final HTML accessibility task, you are given an image gallery, which has some accessibility problems. Can you fix them?

- The header image has an accessibility issue, and so do the gallery images.
- You could take the header image further and implement it using CSS for arguably better accessibility. How would you create such a solution?

Update the code to fix the problems described above.

```html live-sample___html-ally-4
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="A star that I use to decorate my page" />
  <h1>Groovy images</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg" />
</main>
```

```css live-sample___html-ally-4
body {
  width: 400px;
  margin: 0 auto;
}

main img {
  display: block;
  width: 250px;
  margin: 20px auto;
  box-shadow: 5px 5px 0 black;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

{{ EmbedLiveSample("html-ally-4", "100%", 400) }}

<details>
<summary>Click here to show the solution</summary>

The accessibility issues are:

1. The header image is decorative, so doesn't need alt text. The best solution if you are going to use decorative HTML images is to put `alt=""`, so a screen reader will just read out nothing — rather than a description, or the image file name. It is not part of the content.
2. The gallery images need alt text, and they are part of the content.

The updated HTML could look something like this:

```html
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="" />
  <h1>Groovy images</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg"
    alt="a hot air balloon covered in a blue and while checked pattern" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg"
    alt="A cross-section of the middle of a pink grapefruit" />
</main>
```

It would be arguably better to implement the background header image using CSS background images. To do so, you would remove the first `<img>` element from the markup, and add a rule to the CSS like this:

```css
h1 {
  background: url(https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png)
    no-repeat left;
  padding-left: 50px;
}
```

</details>

&nbsp;
