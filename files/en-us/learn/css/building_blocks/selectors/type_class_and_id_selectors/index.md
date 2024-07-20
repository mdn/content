---
title: Type, class, and ID selectors
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

In this lesson, we examine some of the simplest selectors, which you will probably use most frequently in your work.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basic software installed</a
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
        To learn about the different CSS selectors we can use to apply CSS to a
        document.
      </td>
    </tr>
  </tbody>
</table>

## Type selectors

A **type selector** is sometimes referred to as a _tag name selector_ or _element selector_ because it selects an HTML tag/element in your document. Type selectors are not case-sensitive. In the example below, we have used the `span`, `em` and `strong` selectors.

**Try adding a CSS rule to select the `<h1>` element and change its color to blue.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## The universal selector

The universal selector is indicated by an asterisk (`*`). It selects everything in the document. If `*` is chained using a [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), it selects everything inside that ancestor element. For example, `p *` selects all the nested elements in the `<p>` element.

In the following example, we use the universal selector to remove the margins on all elements. Instead of the browser's default styling, which spaces out headings and paragraphs with margins, everything is close together.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

This kind of behavior can sometimes be seen in "reset stylesheets", which strip out all of the browser styling. Since the universal selector makes global changes, we use it for very specific situations, such as the one described below.

### Using the universal selector to make your selectors easier to read

One use of the universal selector is to make selectors easier to read and more obvious in terms of what they are doing. For example, if we wanted to select any descendant elements of an `<article>` element that are the first child of their parent, including direct children, and make them bold, we could use the {{cssxref(":first-child")}} pseudo-class. We will learn more about this in the lesson on [pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), as a descendant selector along with the `<article>` element selector:

```css
article :first-child {
  font-weight: bold;
}
```

However, this selector could be confused with `article:first-child`, which will select any `<article>` element that is the first child of another element.

To avoid this confusion, we can add the universal selector to the `:first-child` pseudo-class, so it is more obvious what the selector is doing. It is selecting _any_ element which is the first-child of an `<article>` element, or the first-child of any descendant element of `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Although both do the same thing, the readability is significantly improved.

## Class selectors

The case-sensitive class selector starts with a dot (`.`) character. It will select everything in the document with that class applied to it. In the live example below we have created a class called `highlight`, and have applied it to several places in my document. All of the elements that have the class applied are highlighted.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Targeting classes on particular elements

You can create a selector that will target specific elements with the class applied. In this next example, we will highlight a `<span>` with a class of `highlight` differently to an `<h1>` heading with a class of `highlight`. We do this by using the type selector for the element we want to target, with the class appended using a dot, with no white space in between.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

This approach reduces the scope of a rule. The rule will only apply to that particular element and class combination. You would need to add another selector if you decided the rule should apply to other elements too.

### Target an element if it has more than one class applied

You can apply multiple classes to an element and target them individually, or only select the element when all of the classes in the selector are present. This can be helpful when building up components that can be combined in different ways on your site.

In the example below, we have a `<div>` that contains a note. The grey border is applied when the box has a class of `notebox`. If it also has a class of `warning` or `danger`, we change the {{cssxref("border-color")}}.

We can tell the browser that we only want to match the element if it has two classes applied by chaining them together with no white space between them. You'll see that the last `<div>` doesn't get any styling applied, as it only has the `danger` class; it needs `notebox` as well to get anything applied.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID selectors

The case-sensitive ID selector begins with a `#` rather than a dot character, but is used in the same way as a class selector. However, an ID can be used only once per page, and elements can only have a single `id` value applied to them. It can select an element that has the `id` set on it, and you can precede the ID with a type selector to only target the element if both the element and ID match. You can see both of these uses in the following example:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **Warning:** Using the same ID multiple times in a document may appear to work for styling purposes, but don't do this. It results in invalid code, and will cause strange behavior in many places.

> **Note:** The ID selector has high {{cssxref("specificity")}}. This means styles applied based on matching an ID selector will overrule styles applied based on other selector, including class and type selectors. Because an ID can only occur once on a page and because of the high specificity of ID selectors, it is preferable to add a class to an element instead of an ID. If using the ID is the only way to target the element — perhaps because you do not have access to the markup and cannot edit it — consider using the ID within an [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors), such as `p[id="header"]`. [Learn specificity](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

## Summary

That wraps up Type, class, and ID selectors. We'll continue exploring selectors by looking at [attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
