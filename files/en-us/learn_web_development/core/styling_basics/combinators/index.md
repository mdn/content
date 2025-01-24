---
title: Combinators
slug: Learn_web_development/Core/Styling_basics/Combinators
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

The final selectors we will look at are called combinators. Combinators are used to combine other selectors in a way that allows us to select elements based on their location in the DOM relative to other elements (for example, child or sibling).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML syntax</a
        >), <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Basic CSS selectors<a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The basic concept of combinators.</li>
          <li>Descendant and child combinators.</li>
          <li>Next- and subsequent-sibling combinators.</li>
          <li>Nesting.</li>
          <li>Combining combinators with selectors.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Descendant combinator

The **descendant combinator** — typically represented by a single space (<code> </code>) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc.) element matching the first selector. Selectors that utilize a descendant combinator are called _descendant selectors_.

```css
body article p {
}
```

In the example below, we are matching only the `<p>` element which is inside an element with a class of `.box`.

```html live-sample___descendant
<div class="box"><p>Text in .box</p></div>
<p>Text not in .box</p>
```

```css live-sample___descendant
.box p {
  color: red;
}
```

{{EmbedLiveSample("descendant")}}

## Child combinator

The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. Descendant elements further down the hierarchy don't match. For example, to select only `<p>` elements that are direct children of `<article>` elements:

```css
article > p
```

In this next example, we have an ordered list ({{htmlelement("ol")}}) nested inside an unordered list ({{htmlelement("ul")}}). The child combinator selects only those `<li>` elements which are direct children of a `<ul>`, and styles them with a top border.

If you remove the `>` that designates this as a child combinator, you end up with a descendant selector and all `<li>` elements will get a red border.

```html live-sample___child
<ul>
  <li>Unordered item</li>
  <li>
    Unordered item
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </li>
</ul>
```

```css live-sample___child
ul > li {
  border-top: 5px solid red;
}
```

{{EmbedLiveSample("child")}}

## Next-sibling combinator

The **next-sibling combinator** (`+`) is placed between two CSS selectors. It matches only those elements matched by the second selector that come right after the element matched by the first selector. For example, to select all `<img>` elements that are immediately preceded by a `<p>` element:

```css
p + img
```

A common use case is to do something with a paragraph that follows a heading, as in the example below. In that example, we are looking for any paragraph which shares a parent element with an `<h1>`, and immediately follows that `<h1>`.

If you insert some other element such as a `<h2>` in between the `<h1>` and the `<p>`, you will find that the paragraph is no longer matched by the selector and so does not get the background and foreground color applied when the element is adjacent.

```html live-sample___adjacent
<article>
  <h1>A heading</h1>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___adjacent
body {
  font-family: sans-serif;
}

h1 + p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

## Subsequent-sibling combinator

If you want to select siblings of an element even if they are not directly adjacent, then you can use the **subsequent-sibling combinator** (`~`). To select all `<img>` elements that come _anywhere_ after `<p>` elements, we'd do this:

```css
p ~ img
```

In the example below we are selecting all `<p>` elements that come after the `<h1>`, and even though there is a `<div>` in the document as well, the `<p>` that comes after it is selected.

```html live-sample___general
<article>
  <h1>A heading</h1>
  <p>I am a paragraph.</p>
  <div>I am a div</div>
  <p>I am another paragraph.</p>
</article>
```

```css live-sample___general
body {
  font-family: sans-serif;
}

h1 ~ p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## Creating complex selectors with nesting

The [CSS nesting module](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) allows you to write nested rules that use combinators to create [complex selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

```css
p {
  ~ img {
  }
}
/* This is parsed by the browser as */
p ~ img {
}
```

The [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector) can also be used to create complex selectors:

```css
p {
  & img {
  }
}
/* This is parsed by the browser as */
p img {
}
```

Here's an example demonstrating complex selectors:

```html live-sample___nesting
<article>
  <h1>A heading</h1>
  <p>I am a paragraph.</p>
  <div>I am a div</div>
  <p>I am another paragraph.</p>
</article>
```

```css live-sample___nesting
body {
  font-family: sans-serif;
}

h1 {
  & ~ p {
    /* this is parsed by the browser as h1 ~ p */
    font-weight: bold;
    background-color: #333;
    color: #fff;
    padding: 0.5em;
  }
}
```

{{EmbedLiveSample("nesting", "", "220px")}}

> [!NOTE]
> In the example above, the `&` nesting selector is not required, but adding it helps to explicitly show that CSS nesting is being used.

## Combining combinators with selectors

You can combine any of the selectors that we discovered in previous lessons with combinators in order to select part of your document. For example, to select list items with a `class` of `a` which are direct children of a `<ul>`, try the following:

```css
ul > li[class="a"] {
}
```

Take care, however, when creating big lists of selectors that select very specific parts of your document. It will be hard to reuse the CSS rules since you have made the selector very specific to the location of that element in the markup.

It is often better to create a simple class and apply that to the element in question. That said, your knowledge of combinators will be very useful if you need to style something in your document and are unable to access the HTML, perhaps due to it being generated by a {{Glossary("CMS")}}.

## Test your skills!

You've reached the end of our set of lessons about selectors, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors/Selectors_Tasks).

## Summary

That's it for selectors, for now. Next, we'll move on to another important part of CSS — the box model.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
