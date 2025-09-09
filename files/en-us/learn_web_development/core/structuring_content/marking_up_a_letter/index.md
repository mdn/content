---
title: "Challenge: Marking up a letter"
short-title: "Challenge: Letter markup"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

We all learn to write a letter sooner or later; it is also a useful example to test our text formatting skills. In this challenge, we give you a letter to mark up as a test for your HTML text formatting skills and knowledge of the HTML `<head>` contents.

## Starting point

To begin, click the **Play** button in the code sample panel below to open the provided body text in the MDN Playground. You'll follow the instructions in the sections that follow to mark up the text appropriately.

```html-nolint live-sample___start
Dr. Eleanor Gaye
Awesome Science faculty
University of Awesome
Bobtown, CA 99999,
USA
Tel: 123-456-7890
Email: no_reply@example.com

20 January 2016

Miss Eileen Dover
4321 Cliff Top Edge
Dover, CT9 XXX
UK

Re: Eileen Dover university application

Dear Eileen,

Thank you for your recent application to join us at the University of
Awesome's science faculty to study as part of your
PhD (Doctor of Philosophy) next year. I will answer your
questions one by one, in the following sections.

Starting dates

We are happy to accommodate you starting your study with us at any time,
however it would suit us better if you could start at the beginning of a
semester; the start dates for each one are as follows:

First semester: 9 September 2016
Second semester: 15 January 2017
Third semester: 2 May 2017

Please let me know if this is ok, and if so which start date you would
prefer.

Subjects of study

At the Awesome Science Faculty, we have a pretty open-minded research
facility — as long as the subjects fall somewhere in the realm of science
and technology. You seem like an intelligent, dedicated researcher, and
just the kind of person we'd like to have on our team. Saying that, of the
ideas you submitted we were most intrigued by are as follows, in order of
priority:

Turning H2O into wine, and the health benefits of Resveratrol
(C14H12O3.)
Measuring the effect on performance of funk bass players at temperatures
exceeding 30°C (86°F), when the audience size exponentially increases
(effect of 3 × 103 increasing to 3 × 104.)
HTML, Hypertext Markup Language, and CSS,
Cascading Style Sheets, constructs for representing musical scores.

So please can you provide more information on each of these subjects,
including how long you'd expect the research to take, required staff and
other resources, and anything else you think we'd need to know? Thanks.

Exotic dance moves

Yes, you are right! As part of my post-doctorate work, I
did study exotic tribal dances. To answer your question, my
favorite dances are as follows, with definitions:

Polynesian chicken dance
    A little known but very influential dance dating back as far as
    300 BCE, a whole village would
    dance around in a circle like chickens, to encourage their livestock to
    be "fruitful".
Icelandic brownian shuffle
    Before the Icelanders developed fire as a means of getting warm, they
    used to practice this dance, which involved huddling close together in a
    circle on the floor, and shuffling their bodies around in imperceptibly
    tiny, very rapid movements. One of my fellow students used to say that
    he thought this dance inspired modern styles such as Twerking.
Arctic robot dance
    An interesting example of historic misinformation, English explorers in
    the 1960s believed to have discovered a new dance style characterized by
    "robotic", stilted movements, being practiced by inhabitants of Northern
    Alaska and Canada. Later on however it was discovered that they were
    just moving like this because they were really cold.

Yours sincerely,

Dr Eleanor Gaye

University of Awesome motto: Be awesome to each other. --
The memoirs of Bill S Preston, Esq.
```

{{embedlivesample("start", "100%", "200px")}}

## Project brief

For this project, your task is to mark up a letter that needs to be hosted on a university intranet. The letter is a response from a research fellow to a prospective PhD student concerning their application to the university.

### Block/structural semantics

- Add an appropriate HTML structure including doctype, and {{htmlelement("html")}}, {{htmlelement("head")}} and {{htmlelement("body")}} elements.
- In general, the letter should be marked up as an organization of headings and paragraphs, except for the addresses mentioned in the next bullet. There is one top level heading (the "Re:" line) and three second level headings.
- Put the two addresses inside {{htmlelement("address")}} elements. Each line of the address should sit on a new line, but not be in a new paragraph.
- Use an appropriate list type to mark up the semester start dates, study subjects, and exotic dances.

### Inline semantics

- The names of the sender and receiver (and _Tel_ and _Email_) should be marked up with strong importance.
- The four dates in the document should be wrapped in appropriate elements containing machine-readable dates.
- The first address and first date in the letter should have a `class` attribute value of `sender-column` set on them. The CSS you'll add later will cause these to be right aligned, as it should be in the case in a classic letter layout.
- Mark up the following five acronyms/abbreviations in the main text of the letter — "PhD," "HTML," "CSS," "BC," and "Esq." — to provide expansions of each one.
- The six sub/superscripts should be marked up appropriately — in the chemical formulae, and the numbers 103 and 104 (they should be 10 to the power of 3 and 4, respectively).
- Mark up at least two other appropriate words in the text with strong importance/emphasis.
- Mark up the university motto quote and citation with appropriate elements.

### The head of the document

- The character set of the document should be set as `utf-8` using the appropriate `<meta>` tag.
- The author of the letter should be specified in an appropriate `<meta>` tag.
- You should set the language of the document as `en-US`.
- Include the following text inside a document title element: "Awesome science application correspondence".
- The following CSS should be included inside an appropriate element inside the head:

  ```css
  body {
    font: 1.2em / 1.5 system-ui;
  }

  .sender-column {
    text-align: right;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.3em;
  }
  ```

## Hints and tips

- Use the [W3C HTML validator](https://validator.w3.org/) to validate your HTML. Award yourself bonus points if it validates.
- You don't need to know any CSS to do this assignment. You just need to put the provided CSS inside an HTML element.

## Example

The following live example shows what the letter should look like after being marked up. If you are getting stuck on how to achieve some of this, see the solution below the live example.

{{embedlivesample("finish", "100%", "500px")}}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html live-sample___finish
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="Dr. Eleanor Gaye" />
    <title>Awesome science application correspondence</title>
    <style>
      body {
        font: 1.2em / 1.5 system-ui;
      }

      .sender-column {
        text-align: right;
      }

      h1 {
        font-size: 1.5em;
      }

      h2 {
        font-size: 1.3em;
      }
    </style>
  </head>
  <body>
    <address class="sender-column">
      <strong>Dr. Eleanor Gaye</strong><br />
      Awesome Science faculty<br />
      University of Awesome<br />
      Bobtown, CA 99999,<br />
      USA<br />
      <strong>Tel</strong>: 123-456-7890<br />
      <strong>Email</strong>: no_reply@example.com
    </address>

    <p class="sender-column">
      <time datetime="2016-01-20">20 January 2016</time>
    </p>

    <address>
      <strong>Miss Eileen Dover</strong><br />
      4321 Cliff Top Edge<br />
      Dover, CT9 XXX<br />
      UK
    </address>

    <h1>Re: Eileen Dover university application</h1>

    <p>Dear Eileen,</p>

    <p>
      Thank you for your recent application to join us at the University of
      Awesome's science faculty to study as part of your
      <abbr>PhD</abbr> (Doctor of Philosophy) next year. I will answer your
      questions one by one, in the following sections.
    </p>

    <h2>Starting dates</h2>

    <p>
      We are happy to accommodate you starting your study with us at any time,
      however it would suit us better if you could start at the beginning of a
      semester; the start dates for each one are as follows:
    </p>

    <ul>
      <li>
        First semester: <time datetime="2016-09-09">9 September 2016</time>
      </li>
      <li>
        Second semester: <time datetime="2017-01-15">15 January 2017</time>
      </li>
      <li>Third semester: <time datetime="2017-05-02">2 May 2017</time></li>
    </ul>

    <p>
      Please let me know if this is ok, and if so which start date you would
      prefer.
    </p>

    <h2>Subjects of study</h2>

    <p>
      At the Awesome Science Faculty, we have a pretty open-minded research
      facility — as long as the subjects fall somewhere in the realm of science
      and technology. You seem like an intelligent, dedicated researcher, and
      just the kind of person we'd like to have on our team. Saying that, of the
      ideas you submitted we were most intrigued by are as follows, in order of
      priority:
    </p>

    <ol>
      <li>
        Turning H<sub>2</sub>O into wine, and the health benefits of Resveratrol
        (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>.)
      </li>
      <li>
        Measuring the effect on performance of funk bass players at temperatures
        exceeding 30°C (86°F), when the audience size exponentially increases
        (effect of 3 × 10<sup>3</sup> increasing to 3 × 10<sup>4</sup>.)
      </li>
      <li>
        <abbr>HTML</abbr>, Hypertext Markup Language, and <abbr>CSS</abbr>,
        Cascading Style Sheets, constructs for representing musical scores.
      </li>
    </ol>

    <p>
      So please can you provide more information on each of these subjects,
      including how long you'd expect the research to take, required staff and
      other resources, and anything else you think we'd need to know? Thanks.
    </p>

    <h2>Exotic dance moves</h2>

    <p>
      Yes, you are right! As part of my post-doctorate work, I
      <em>did</em> study exotic tribal dances. To answer your question, my
      favorite dances are as follows, with definitions:
    </p>

    <dl>
      <dt>Polynesian chicken dance</dt>
      <dd>
        A little known but <em>very</em> influential dance dating back as far as
        300 <abbr title="Before Common Era">BCE</abbr>, a whole village would
        dance around in a circle like chickens, to encourage their livestock to
        be "fruitful".
      </dd>
      <dt>Icelandic brownian shuffle</dt>
      <dd>
        Before the Icelanders developed fire as a means of getting warm, they
        used to practice this dance, which involved huddling close together in a
        circle on the floor, and shuffling their bodies around in imperceptibly
        tiny, very rapid movements. One of my fellow students used to say that
        he thought this dance inspired modern styles such as Twerking.
      </dd>
      <dt>Arctic robot dance</dt>
      <dd>
        An interesting example of historic misinformation, English explorers in
        the 1960s believed to have discovered a new dance style characterized by
        "robotic", stilted movements, being practiced by inhabitants of Northern
        Alaska and Canada. Later on however it was discovered that they were
        just moving like this because they were really cold.
      </dd>
    </dl>

    <p>Yours sincerely,</p>

    <p>Dr Eleanor Gaye</p>

    <p>
      University of Awesome motto: <q>Be awesome to each other.</q> --
      <cite
        >The memoirs of Bill S Preston, <abbr title="Esquire">Esq.</abbr></cite
      >
    </p>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}
