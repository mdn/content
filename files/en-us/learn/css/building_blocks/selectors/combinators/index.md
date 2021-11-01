---
title: Combinators
slug: Learn/CSS/Building_blocks/Selectors/Combinators
tags:
  - CSS
  - Selectors
  - combinators
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

The final selectors we will look at are called combinators, because they combine other selectors in a way that gives them a useful relationship to each other and the location of content in the document.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn about the different combinator selectors that can be used in
        CSS.
      </td>
    </tr>
  </tbody>
</table>

## Descendant combinator

The **descendant combinator** — typically represented by a single space (` `) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector. Selectors that utilize a descendant combinator are called *descendant selectors*.

```css
body article p
```

In the example below, we are matching only the `<p>` element which is inside an element with a class of `.box`.

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## Child combinator

The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. Descendent elements further down the hierarchy don't match. For example, to select only `<p>` elements that are direct children of `<article>` elements:

```css
article > p
```

In this next example, we have an unordered list, nested inside of which is an ordered list. I am using the child combinator to select only the `<li>` elements which are a direct child of a `<ul>`, and have given them a top border.

If you remove the `>` that designates this as a child combinator, you end up with a descendant selector and all `<li>` elements will get a red border.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## Adjacent sibling combinator

The adjacent sibling selector (`+`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the next sibling element of the first selector. For example, to select all `<img>` elements that are immediately preceded by a `<p>` element:

```css
p + img
```

A common use case is to do something with a paragraph that follows a heading, as in the example below. In that example, we are looking for any paragraph which shares a parent element with an `<h1>`, and immediately follows that `<h1>`.

If you insert some other element such as a `<h2>` in between the `<h1>` and the `<p>`, you will find that the paragraph is no longer matched by the selector and so does not get the background and foreground color applied when the element is adjacent.

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## General sibling combinator

If you want to select siblings of an element even if they are not directly adjacent, then you can use the general sibling combinator (`~`). To select all `<img>` elements that come _anywhere_ after `<p>` elements, we'd do this:

```css
p ~ img
```

In the example below we are selecting all `<p>` elements that come after the `<h1>`, and even though there is a `<div>` in the document as well, the `<p>` that comes after it is selected.

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## Using combinators

You can combine any of the selectors that we discovered in previous lessons with combinators in order to pick out part of your document. For example, if we want to select list items with a class of "a", which are direct children of a `<ul>`, I could use the following.

```css
ul > li[class="a"]  {  }
```

Take care, however, when creating big lists of selectors that select very specific parts of your document. It will be hard to reuse the CSS rules since you have made the selector very specific to the location of that element in the markup.

It is often better to create a simple class and apply that to the element in question. That said, your knowledge of combinators will be very useful if you need to get to something in your document and are unable to access the HTML, perhaps due to it being generated by a CMS.

## Test your skills!

We have covered a lot in this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Moving on

This is the last section in our lessons on selectors. Next we will move on to another important part of CSS — the [CSS Box Model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

## In this module

1.  [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)

    - [Type, class, and ID selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
4.  [Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Values and units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, media, and form elements](/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Debugging CSS](/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizing your CSS](/en-US/docs/Learn/CSS/Building_blocks/Organizing)
