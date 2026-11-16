---
title: Lists
slug: Learn_web_development/Core/Structuring_content/Lists
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content")}}

Now let's turn our attention to lists. Lists are everywhere in life—from your shopping list to the list of directions you subconsciously follow to get to your house every day, to the lists of instructions you are following in these tutorials! It may not surprise you that HTML has a convenient set of elements that allows us to define different types of list. On the web, we have three types of lists: unordered, ordered, and description lists. This lesson shows you how to use the different types.

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
          <li>The HTML structure for the three types of lists — unordered, ordered, and description.</li>
          <li>The correct usage for each list type.</li>
          <li>The broader use cases of lists, such as navigation menus.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Unordered lists

Unordered lists are used to mark up lists of items for which the order of the items doesn't matter. Let's take a grocery shopping list as an example:

```plain
milk
eggs
bread
hummus
```

In this example, the items can be in any order. To create this list in HTML, we first wrap the whole list in a {{htmlelement("ul")}} (unordered list) element.
Then, we wrap each item in a {{htmlelement("li")}} (list item) element:

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

### Marking up an unordered list

To give you some practice, we want you to have a go at marking up the previous list yourself:

1. Click **"Play"** in the rendered code output below to edit the example in the MDN Playground.
2. Turn the individual text items into an unordered list.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get stuck, refer back to the previous code snippet.

```html hidden live-sample___lists_1
milk eggs bread hummus
```

{{ EmbedLiveSample('lists_1', "100%", 60) }}

## Ordered

Ordered lists are lists in which the order of the items _does_ matter. Let's take a set of directions as an example:

```plain
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

The markup structure is the same as for unordered lists, except that you have to wrap the list items in an {{htmlelement("ol")}} element, rather than `<ul>`:

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

### Marking up an ordered list

Practice time again! In the same way as the previous task, we want you to have a go at marking up the previous ordered list yourself.

1. Click **"Play"** in the rendered code output below to edit the example in the MDN Playground.
2. Turn the individual text items into an ordered list.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get stuck, refer back to the previous code snippet.

```html hidden live-sample___lists_2
Drive to the end of the road Turn right Go straight across the first two
roundabouts Turn left at the third roundabout The school is on your right, 300
meters up the road
```

{{ EmbedLiveSample('lists_2', "100%", 60) }}

## Marking up our recipe page

Now for a real challenge! At this point in the article, you have all the information you need to mark up a slightly more complex section of content. We want you to mark up the instructions for our favorite hummus recipe.

You can choose to either:

- Save a local copy of our [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) starting file and do the work in your code editor.
- Click **"Play"** in the rendered code output below to edit the example in the MDN Playground.

The instructions you need to follow are:

1. Mark up the main page title using an `<h1>` element, and the three subtitles using `<h2>` elements.
2. There are five lines of text that make sense to be marked up with `<p>` elements. Do this now.
3. Mark up the list of ingredients as an unordered list.
4. Mark up the list of instructions as an ordered list.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the code output.

```html-nolint live-sample___lists_3
Quick hummus recipe

This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.

Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.

Ingredients

1 can (400g) of chick peas (garbanzo beans)
175g of tahini
6 sundried tomatoes
Half a red pepper
A pinch of cayenne pepper
1 clove of garlic
A dash of olive oil

Instructions

Remove the skin from the garlic, and chop coarsely
Remove all the seeds and stalk from the pepper, and chop coarsely
Add all the ingredients into a food processor
Process all the ingredients into a paste
If you want a coarse "chunky" hummus, process it for a short time
If you want a smooth hummus, process it for a longer time

For a different flavor, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.

Storage

Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.

Hummus is suitable for freezing; you should thaw it and use it within a couple of months.
```

{{ EmbedLiveSample('lists_3', "100%", 260) }}

<details>
<summary>Click here to show the solution</summary>

You can find an example of the correct HTML for this example at [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) in our GitHub repo.

</details>

## Nesting lists

It is perfectly OK to nest one list inside another one. You might want to have some sub-bullets sitting below a top-level bullet. Let's take the second list from our recipe example:

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.</li>
  <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
  <li>If you want a smooth hummus, process it for a longer time.</li>
</ol>
```

Since the last two bullets are very closely related to the one before them (they read like sub-instructions or choices that fit below that bullet), it might make sense to nest them inside their own unordered list and put that list inside the current fourth bullet. This would look like so:

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>
```

Try going back to the previous task and updating the second list like this.

## Description lists

The purpose of description lists is to mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers. Let's look at an example of a set of terms and definitions:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Description lists use a different wrapper than the other list types — {{htmlelement("dl")}}; in addition each term is wrapped in a {{htmlelement("dt")}} (description term) element, and each description is wrapped in a {{htmlelement("dd")}} (description definition) element.

### Description list example

Let's finish marking up our example:

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
</dl>
```

The browser default styles will display description lists with the descriptions indented somewhat from the terms.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Multiple descriptions for one term

Note that it is permitted to have a single term with multiple descriptions, for example:

```html
<dl>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
  <dd>
    In writing, a section of content that is related to the current topic, but
    doesn't fit directly into the main flow of content so is presented nearby
    (often in a box off to the side.)
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### Marking up a set of definitions

It's time to try your hand at marking up a description list:

1. Click **"Play"** in the code block below to edit the example in the MDN Playground.
2. Use suitable elements to mark up the three terms and four descriptions in the content. Bear in mind that the third term has two descriptions.

If you make a mistake, you can clear your work using the _Reset_ button in the MDN Playground. If you get really stuck, you can view the solution below the code block.

```html-nolint live-sample___lists_4
Love
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.
```

{{ EmbedLiveSample('lists_4', "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html
<dl>
  <dt>Love</dt>
  <dd>The glue that binds the world together.</dd>
  <dt>Eggs</dt>
  <dd>The glue that binds the cake together.</dd>
  <dt>Coffee</dt>
  <dd>The drink that gets the world running in the morning.</dd>
  <dd>A light brown color.</dd>
</dl>
```

</details>

## Summary

That's it for lists. Next we'll give you some tests that you can use to check how well you've understood and retained the information we've provided on HTML text basics.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content")}}
