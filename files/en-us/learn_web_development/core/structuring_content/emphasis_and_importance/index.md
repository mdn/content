---
title: Emphasis and importance
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

The previous article looked at why semantics are important in HTML, and focused on headings and paragraphs. This article continues on the theme of semantics, looking at HTML elements that apply emphasis and importance to text (parallel to italics and bold text in print media).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic HTML familiarity, as covered in
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML Syntax</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The meaning of emphasis and importance, and the basic elements that apply them in HTML, such as <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code>.</li>
          <li>Identify presentational markup that should no longer be used at all (e.g., <code>&lt;big&gt;</code> and <code>&lt;font&gt;</code>); it is deprecated.</li>
          <li>Identify presentational markup that has been repurposed to have new semantic meaning (e.g., <code>&lt;i&gt;</code> and <code>&lt;b&gt;</code>).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What are emphasis and importance?

In human language, we often emphasize certain words to alter the meaning of a sentence, and we often want to mark certain words as important or different in some way. HTML provides various semantic elements to allow us to mark up textual content with such effects, and in this section, we'll look at a few of the most common ones.

### Emphasis

When we want to add emphasis in spoken language, we _stress_ certain words, subtly altering the meaning of what we are saying. Similarly, in written language we tend to stress words by putting them in italics. For example, the following two sentences have different meanings.

> I am glad you weren't late.
>
> I am _glad_ you weren't _late_.

The first sentence sounds genuinely relieved that the person wasn't late. In contrast, the second one, with both the words "glad" and "late" in italics, sounds sarcastic or passive-aggressive, expressing annoyance that the person arrived a bit late.

In HTML we use the {{htmlelement("em")}} (emphasis) element to mark up such instances. As well as making the document more interesting to read, these are recognized by screen readers, which can be configured to speak them in a different tone of voice. Browsers style this as italic by default, but you shouldn't use this tag purely to get italic styling. To do that, you'd use a {{htmlelement("span")}} element and some CSS, or perhaps an {{htmlelement("i")}} element (see below).

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Strong importance

To emphasize important words, we tend to stress them in spoken language and **bold** them in written language. For example:

> This liquid is **highly toxic**.
>
> I am counting on you. **Do not** be late!

In HTML we use the {{htmlelement("strong")}} (strong importance) element to mark up such instances. As well as making the document more useful, again these are recognized by screen readers, which can be configured to speak them in a different tone of voice. Browsers style this as bold text by default, but you shouldn't use this tag purely to get bold styling. To do that, you'd use a {{htmlelement("span")}} element and some CSS, or perhaps a {{htmlelement("b")}} element (see below).

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

You can nest strong and emphasis inside one another if desired:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

## Let's play with emphasis and importance

In this section, we want you to play with emphasis and importance:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. In the main heading give the word "Emphasis" emphasis, and the word "importance" strong importance.
3. In the first paragraph, give the coffee machine name strong importance, and emphasize the adjectives used to describe the coffee.
4. In the second paragraph, give the temprature description ("cold") and the action you should take ("wrap up warm to avoid falling ill") strong importance. Give "falling ill" some extra markup so it is both emphasized and important.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the code block.

```css hidden live-sample___emphasis_importance
h1 {
  font-weight: normal;
}
```

```html live-sample___emphasis_importance
<h1>Emphasis and importance</h1>

<p>
  My new coffee machine is called The Percolator 2000. It produces the most
  sublime and wonderful brew.
</p>

<p>
  In the dead of winter, it will be cold. You should wrap up warm to avoid
  falling ill.
</p>
```

{{ EmbedLiveSample('emphasis_importance', "100%", 160) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html
<h1><em>Emphasis</em> and <strong>importance</strong></h1>

<p>
  My new coffee machine is called <strong>The Percolator 2000</strong>. It
  produces the most <em>sublime</em> and <em>wonderful</em> brew.
</p>

<p>
  In the dead of winter, it will be <strong>cold</strong>. You should
  <strong>wrap up warm to avoid <em>falling ill</em></strong
  >.
</p>
```

</details>

## Italic, bold, underline…

The elements we've discussed so far have clear-cut associated semantics. The situation with {{htmlelement("b")}}, {{htmlelement("i")}}, and {{htmlelement("u")}} is somewhat more complicated. They came about so people could write bold, italics, or underlined text in an era when CSS was still supported poorly or not at all. Elements like this, which only affect presentation and not semantics, are known as **presentational elements** and should no longer be used because, as we've seen before, semantics is so important to accessibility, SEO, etc.

HTML5 redefined `<b>`, `<i>`, and `<u>` with new, somewhat confusing, semantic roles.

Here's the best rule you can remember: It's only appropriate to use `<b>`, `<i>`, or `<u>` to convey a meaning traditionally conveyed with bold, italics, or underline when there isn't a more suitable element; and there usually is. Consider whether `<strong>`, `<em>`, `<mark>`, or `<span>` might be more appropriate.

Always keep an accessibility mindset. The concept of italics isn't very helpful to people using screen readers, or to people using a writing system other than the Latin alphabet.

- {{HTMLElement('i')}} is used to convey a meaning traditionally conveyed by italic: foreign words, taxonomic designation, technical terms, a thought…
- {{HTMLElement('b')}} is used to convey a meaning traditionally conveyed by bold: keywords, product names, lead sentence…
- {{HTMLElement('u')}} is used to convey a meaning traditionally conveyed by underline: proper name, misspelling…

> [!NOTE]
> People strongly associate underlining with hyperlinks. Therefore, on the web, it's best to only underline links. Use the `<u>` element when it's semantically appropriate, but consider using CSS to change the default underline to something more appropriate on the web. The example below illustrates how it can be done.

<!-- cSpell:ignore spel -->

```html
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>) is the most common
  hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>Someday I'll learn how to <u class="spelling-error">spel</u> better.</p>

<!-- term being defined when used in a definition -->
<dl>
  <dt>Semantic HTML</dt>
  <dd>
    Use the elements based on their <b>semantic</b> meaning, not their
    appearance.
  </dd>
</dl>
```

{{EmbedLiveSample('Italic, bold, underline…','100%','270')}}

## Summary

We are done looking at emphasis and importance for the moment. Let's move on to looking at how we represent lists in HTML.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
