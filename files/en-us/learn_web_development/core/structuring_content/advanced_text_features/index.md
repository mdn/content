---
title: Advanced text features
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

There are many other elements in HTML for defining text semantics, which we didn't get to in the [Emphasis and importance](/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) article. The elements described in this article are less known, but still useful to know about (and this is still not a complete list by any means). Here you'll learn about marking up quotations, computer code and other related text, subscript and superscript, contact information, and more.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic HTML familiarity, as covered in
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML Syntax</a
        >. Text-level semantics such as <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >headings and paragraphs</a
        > and <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Lists"
          >lists</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Quotations.</li>
          <li>Abbreviations and acronyms.</li>
          <li>Addresses.</li>
          <li>Times and dates.</li>
          <li>Superscript and subscript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Quotations

HTML contains features available for marking up quotations; which element you use depends on whether you are marking up a block or inline quotation.

### Blockquotes

If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere else, you should wrap it inside a {{htmlelement("blockquote")}} element to signify this, and include a URL pointing to the source of the quote inside a [`cite`](/en-US/docs/Web/HTML/Reference/Elements/blockquote#cite) attribute. For example, the following markup is taken from the MDN `<blockquote>` element page:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

To turn this into a block quote, we would just do this:

```html
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Browser default styling will render this as an indented paragraph, as an indicator that it is a quote; the paragraph above the quotation is there to demonstrate that.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline quotations

Inline quotations work in exactly the same way, except that they use the {{htmlelement("q")}} element. For example, the below bit of markup contains a quotation from the MDN `<q>` page:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Browser default styling will render this as normal text put in quotes to indicate a quotation, like so:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Citations

The content of the [`cite`](/en-US/docs/Web/HTML/Reference/Elements/blockquote#cite) attribute sounds useful, but unfortunately browsers, screen readers, etc. don't really do much with it. There is no way to get the browser to display the contents of `cite`, without writing your own solution using JavaScript or CSS. If you want to make the source of the quotation available on the page you need to make it available in the text via a link or some other appropriate way.

There is a {{htmlelement("cite")}} element, but this is meant to contain the title of the resource being quoted, e.g., the name of the book. There is no reason, however, why you couldn't link the text inside `<cite>` to the quote source in some way:

```html-nolint
<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/en-US/docs/Web/HTML/Reference/Elements/q"><cite>MDN q page</cite></a>.
</p>
```

Citations are styled in italic font by default.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Who said that? Blockquote practice

Time for another task! In this example we'd like you to:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Turn the middle paragraph into a blockquote, which includes a `cite` attribute.
3. Turn "The Need To Eliminate Negative Self Talk" in the third paragraph into an inline quote, and include a `cite` attribute.
4. Wrap the title of each source in `<cite>` tags and turn each one into a link to that source.

The citation sources you need are:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` for the Confucius quote
- `http://example.com/affirmationsforpositivethinking` for "The Need To Eliminate Negative Self Talk".

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the code block.

```html live-sample___advanced-text-1
<p>Hello and welcome to my motivation page. As Confucius' quotes site says:</p>
<p>It does not matter how slowly you go as long as you do not stop.</p>
<p>
  I also love the concept of positive thinking, and The Need To Eliminate
  Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)
</p>
```

{{ EmbedLiveSample('advanced-text-1', "100%", 200) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html
<p>
  Hello and welcome to my motivation page. As
  <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"
    ><cite>Confucius' quotes site</cite></a
  >
  says:
</p>

<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">
  <p>It does not matter how slowly you go as long as you do not stop.</p>
</blockquote>

<p>
  I also love the concept of positive thinking, and
  <q cite="http://example.com/affirmationsforpositivethinking"
    >The Need To Eliminate Negative Self Talk</q
  >
  (as mentioned in
  <a href="http://example.com/affirmationsforpositivethinking"
    ><cite>Affirmations for Positive Thinking</cite></a
  >.)
</p>
```

</details>

## Abbreviations

Another fairly common element you'll meet when looking around the Web is {{htmlelement("abbr")}} — this is used to wrap around an abbreviation or acronym. When including either, provide a full expansion of the term in plain text on first use, along with the `<abbr>` to mark up the abbreviation. This provides a hint to user agents on how to announce/display the content while informing all users what the abbreviation means.

If providing the expansion in addition to the abbreviation makes little sense, and the abbreviation or acronym is a fairly shortened term, provide the full expansion of the term as the value of the [`title`](/en-US/docs/Web/HTML/Reference/Global_attributes/title) attribute:

### Abbreviation example

Let's look at an example.

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

These are rendered as follows:

{{EmbedLiveSample('Abbreviation_example', '100%', '90')}}

> [!NOTE]
> Earlier versions of html also included support for the {{htmlelement("acronym")}} element, but it was removed from the HTML spec in favor of using `<abbr>` to represent both abbreviations and acronyms. `<acronym>` should not be used.

### Let's mark up an abbreviation

For this learning task, we'd like you to mark up an abbreviation.

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Mark up the included abbreviations using appropriate HTML. Feel free also to replace it with one of your own, and try marking that up instead.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the code block.

```html-nolint live-sample___advanced-text-2
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like the following code snippet:

```html
<p>
  <abbr>NASA</abbr> (the National Aeronautics and Space Administration) sure
  does some exciting work.
</p>

<p>The new user interface design <abbr title="Looks good to me">LGTM</abbr>!</p>
```

- Arguably, NASA should be expanded in text on first mention, as it is a useful bit of information for everyone to have available in the text.
- Acronyms like "LGTM", on the other hand, are purely written to save space and time so it wouldn't make sense to also write it out, hence putting the expansion in the `title` attribute. In a real application, you probably wouldn't do this by hand — you'd get some kind of script to add it automatically for known terms.

</details>

## Marking up contact details

HTML has an element for marking up contact details — {{htmlelement("address")}}. This wraps around your contact details, for example:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

It could also include more complex markup, and other forms of contact information, for example:

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

Note that something like this would also be OK, if the linked page contained the contact information:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> The {{htmlelement("address")}} element should only be used to provide contact information for the document contained by the nearest {{htmlelement("article")}} or {{htmlelement("body")}} element. It would be correct to use it in the footer of a site to include the contact information of the entire site, or inside an article for the contact details of the author, but not to mark up a list of addresses unrelated to the content of that page.

## Superscript and subscript

You will occasionally need to use superscript and subscript when marking up items like dates, chemical formulae, and mathematical equations so they have the correct meaning. The {{htmlelement("sup")}} and {{htmlelement("sub")}} elements handle this job. For example:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

The output of this code looks like so:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Representing computer code

There are a number of elements available for marking up computer code using HTML:

- {{htmlelement("code")}}: For marking up generic pieces of computer code.
- {{htmlelement("pre")}}: For retaining whitespace (generally code blocks) — if you use indentation or excess whitespace inside your text, browsers will ignore it and you will not see it on your rendered page. If you wrap the text in `<pre></pre>` tags however, your whitespace will be rendered identically to how you see it in your text editor.
- {{htmlelement("var")}}: For specifically marking up variable names.
- {{htmlelement("kbd")}}: For marking up keyboard (and other types of) input entered into the computer.
- {{htmlelement("samp")}}: For marking up the output of a computer program.

Let's look at examples of these elements and how they're used to represent computer code.
If you want to see the full file, take a look at the [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) sample file.
You can download the file and open it in your browser to see for yourself, but here is a snippet of the code:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

The above code will look like so:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Marking up times and dates

HTML also provides the {{htmlelement("time")}} element for marking up times and dates in a machine-readable format. For example:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Why is this useful? Well, there are many different ways that humans write down dates. The above date could be written as:

<!-- markdownlint-disable MD033 -->

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- The 20th of next month
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- And so on.

<!-- markdownlint-enable MD033 -->

But these different forms cannot be easily recognized by computers — what if you wanted to automatically grab the dates of all events in a page and insert them into a calendar? The {{htmlelement("time")}} element allows you to attach an unambiguous, machine-readable time/date for this purpose.

The basic example above just provides a simple machine readable date, but there are many other options that are possible, for example:

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Advanced HTML text](/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text).

## Summary

That marks the end of our study of less-common HTML text semantics. What you have seen during this course is not an exhaustive list of HTML text elements — we wanted to try to cover the essentials, and some of the more common ones you will see in the wild. Next up, we'll look at links, one of the most important features of the web.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
