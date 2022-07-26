---
title: Getting started with CSS
slug: Learn/CSS/First_steps/Getting_started
tags:
  - Beginner
  - CSS
  - Classes
  - Elements
  - Example
  - Learn
  - Selectors
  - Syntax
  - state
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

In this article, we will take a HTML document and apply CSS to it, learning some practical things about the language along the way.

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
        >, and HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand the basics of linking a CSS document to an HTML file, and
        be able to do simple text formatting with CSS.
      </td>
    </tr>
  </tbody>
</table>

## Creating an HTML document

Our starting point is an HTML document. You can copy the code from below and save it as `index.html` in a folder on your computer.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Getting started with CSS</title>
</head>

<body>

    <h1>I am a level one heading</h1>

    <p>This is a paragraph of text. In the text is a <span>span element</span>
and also a <a href="https://example.com">link</a>.</p>

    <p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

    <ul>
        <li>Item <span>one</span></li>
        <li>Item two</li>
        <li>Item <em>three</em></li>
    </ul>

</body>

</html>
```

> **Note:** If you are reading this on a device or environment where you can't easily create files, then don't worry — you can write example code in our interactive editor right here in the page.

## Adding CSS to our document

First, tell the HTML document that we have some CSS rules we want it to use. There are three options to apply CSS to an HTML document, which will be part of the next lesson.

For now, we will use the most common way — linking CSS from the head of your document.

1. Create a file in the same folder as your HTML document and save it as `styles.css`. The `.css` extension shows that this is a CSS file.

2. To link `styles.css` to `index.html`, add the following line inside the {{htmlelement("head")}} of the HTML document:

    ```html
    <link rel="stylesheet" href="styles.css">
    ```

    This {{htmlelement("link")}} element, with the `rel` and `href` attributes, tells the browser that we have a stylesheet and provides the location of that stylesheet. 
    
3. To test that the CSS works, use your editor and add the following to your rule to the `styles.css` file:

    ```css
    h1 {
      color: red;
    }
    ```

4. Save your HTML and CSS files and reload the page in a web browser. 

The level one heading at the top of the document is now red. Congratulations — you have successfully applied CSS to an HTML document.

To continue with this tutorial, you can continue to work in the local `styles.css` file or you can use our interactive editor. 

## Styling HTML elements

By making our heading red, we have already demonstrated that we can target and style an HTML element. We do this by targeting an _element selector_ — this is a selector that directly matches an HTML element name. To target all paragraphs in the document, you would use the selector `p`. To turn all paragraphs green, you would use:

```css
p {
  color: green;
}
```

You can target multiple selectors at the same time by separating the selectors with a comma. If you want all paragraphs and all list items to be green, your rule would look like this:

```css
p, li {
    color: green;
}
```

Try this out in the interactive editor below (edit the code boxes) or in your local CSS document.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Changing the default behavior of elements

When we look at a simple HTML document (like our example), we can see how the browser is making the HTML code readable. Headings are large and bold and our list has bullets. This happens because all modern browsers apply their own internal stylesheets with default styles to any page.

To change the default styles, you can choose the HTML element that you want to change and apply a CSS rule to it. A good example is `<ul>`, an unordered list. It has list bullets but you can remove them like so:

```css
li {
  list-style-type: none;
}
```

Try adding this to your CSS now.

The [`list-style-type`](/en-US/docs/Web/CSS/list-style-type) property also supports other values, for example `square` to change the list bullets. The linked page contains an interactive example to try some different values and explains all allowable values. 

## Adding a class

So far, we have styled elements based on their HTML element names. The CSS styles all elements of that type in your document. Often, you want to select a subset of the elements without changing the others. 

The most common way to do this is to add a class to your HTML element and target that class.

1. In your HTML document, add a [class attribute](/en-US/docs/Web/HTML/Global_attributes/class) to the second list item:

    ```html
    <ul>
      <li>Item one</li>
      <li class="special">Item two</li>
      <li>Item <em>three</em></li>
    </ul>
    ```

2. In your CSS, target the class of `special` by creating a selector that starts with a full stop character:

    ```css
    .special {
      color: orange;
      font-weight: bold;
    }
    ```

3. Save and refresh to see what the result is.

You can apply the class of `special` to any element on your page that you want to have the same look as this list item. For example, you might want the `<span>` in the paragraph to also be orange and bold. Try adding a `class` of `special` to it, then reload your page and see what happens.

### Adding a selector along with a class

Sometimes you will see rules with a selector that lists the HTML element selector along with the class:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

This syntax means "target any `li` element that has a class of special". If you were to do this, then you would no longer be able to apply the class to a `<span>` or another element by adding the class to it; you would have to add that element to the list of selectors:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Some classes can be applied to many elements. You don't want to have to edit your CSS every time something new needs to adopt that style. Therefore, you can bypass the element and refer to the class — unless some special rules only apply to one element and you want to make sure they don't apply to other elements.

## Styling things based on their location in a document

Sometimes, you will want something to look different based on where it is in the document. There are [some selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) that can help you but we will look at just two of them.

- **descendant combinator**: In our document, there are two `<em>` elements — one inside a paragraph and the other inside a list item. To select only an `<em>` that is nested inside an `<li>` element, you can put a space between the two selectors. This selector will select any `<em>` element that is inside (a descendant of) an `<li>`.

    Add the following rule to your stylesheet:

    ```css
    li em {
      color: rebeccapurple;
    }
    ```
    
    In your example document, only the `<em>` in the third list item should now be purple.

- **adjacent sibling combinator**: In your document, you can style a paragraph that comes after the heading by putting a `+` between the selectors. This selector will style a paragraph when it comes directly after another element at the same hierarchy level in the HTML.

    Try adding this rule to your stylesheet as well:

    ```css
    h1 + p {
      font-size: 200%;
    }
    ```

The live example below includes the two rules above. Try adding a rule to make a span red if it is inside a paragraph. You will know if you have it right because the span in the first paragraph will be red, but the one in the first list item will not change color.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **Note:** As you can see, CSS gives us several ways to target elements, and we've only scratched the surface so far! We will be taking a proper look at all of these selectors and many more in our [Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) articles later on in the course.

## Styling things based on state

You can also style things based on their state, for example links. The [`<a>`](/en-US/docs/Web/HTML/Element/a) (anchor) element has different states depending on whether it is unvisited, visited, being hovered over, focused via the keyboard, or in the process of being clicked (activated). You can use CSS to target these different states — the CSS below styles unvisited links pink and visited links green.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

You can also change the way the link looks when the user hovers over it. This rule removes the underline:

```css
a:hover {
  text-decoration: none;
}
```

The live example below includes the two rules above. You can play with different values for the various states of a link. The pink color is quite light and hard to read — why not change that to a better color? Can you make the links bold?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 1000)}}

## Accessibility concerns

In the previous section, we have removed the underline on our link on hover. You could remove the underline from all states of a link. In a real site, you want to ensure that visitors know that a link is a link. Leaving the underline in place can be an important clue for people to realize that some text inside a paragraph can be clicked on — this is the behavior they are used to. 

As with everything in CSS, there is the potential to make the document less accessible with your changes — we will aim to highlight potential pitfalls in appropriate places.

> **Note:** you will often see mention of [accessibility](/en-US/docs/Learn/Accessibility) in these lessons and across MDN. When we talk about accessibility we are referring to the requirement for our webpages to be understandable and usable by everyone.
>
> Your visitor may well be on a computer with a mouse or trackpad, or a smartphone. Or they might be using a screenreader, which reads out the content of the document, or they may need to use much larger text, or be navigating the site using the keyboard only.
>
> A plain HTML document is generally accessible to everyone — as you start to style that document it is important that you don't make it less accessible.

## Combining selectors and combinators

You can also combine multiple selectors and combinators together. For example:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }
```

You can combine multiple types together, too. Try adding the following into your code:

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

In the original HTML we provided, the only element styled is `<span class="special">`. The example above will style any element with a class of `special`, which is inside a `<p>`, which comes just after an `<h1>`, which is inside a `<body>`. Phew! Don't worry if this seems complicated at the moment — you'll soon start to get the hang of it as you write more CSS.

## Summary

In this article, we have taken a look at how you can style a document using CSS. We will be developing this knowledge as we move through the rest of the lessons. However, you now already know enough to style text, apply CSS based on different ways of targeting elements in the document, and look up properties and values in the MDN documentation.

In the next lesson, we'll be taking a look at [how CSS is structured](/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured).

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

## In this module

- [What is CSS?](/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
- [Getting started with CSS](/en-US/docs/Learn/CSS/First_steps/Getting_started)
- [How CSS is structured](/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)
- [How CSS works](/en-US/docs/Learn/CSS/First_steps/How_CSS_works)
- [Styling a biography page](/en-US/docs/Learn/CSS/First_steps/Styling_a_biography_page)
