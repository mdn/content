---
title: Styling links
slug: Learn/CSS/Styling_text/Styling_links
tags:
  - Article
  - Beginner
  - CSS
  - Focus
  - Guide
  - Learn
  - Links
  - Pseudo-class
  - hover
  - hyperlinks
  - menus
  - tabs
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

When styling [links](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), it's important to understand how to make use of pseudo-classes to style their states effectively. It's also important to know how to style links for use in common interface features whose content varies, such as navigation menus and tabs. We'll look at both these topics in this article.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), CSS basics (study
        <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a>),
        <a href="/en-US/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS text and font fundamentals</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn how to style link states, and how to use links effectively in
        common UI features like navigation menus.
      </td>
    </tr>
  </tbody>
</table>

## Let's look at some links

We looked at how links are implemented in your HTML according to best practices in [Creating hyperlinks](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). In this article we'll build on this knowledge, showing you the best practices for styling them.

### Link states

The first thing to understand is the concept of link states — different states that links can exist in. These can be styled using different [pseudo-classes](/en-US/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes):

- **Link**: A link that has a destination (i.e., not just a named anchor), styled using the {{cssxref(":link")}} pseudo class.
- **Visited**: A link that has already been visited (exists in the browser's history), styled using the {{cssxref(":visited")}} pseudo class.
- **Hover**: A link that is hovered over by a user's mouse pointer, styled using the {{cssxref(":hover")}} pseudo class.
- **Focus**: A link that is focused (e.g., moved to by a keyboard user using the

  <kbd>Tab</kbd>

  key or something similar, or programmatically focused using {{domxref("HTMLElement.focus()")}}) — this is styled using the {{cssxref(":focus")}} pseudo class.

- **Active**: A link that is activated (e.g., clicked on), styled using the {{cssxref(":active")}} pseudo class.

### Default styles

The following example illustrates what a link will behave like by default (the CSS is enlarging and centering the text to make it stand out more.)

```html
<p><a href="#">A simple link</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Default_styles', '100%', 120) }}

> **Note:** All the links in the examples on this page are fake links — a `#` (hash/pound sign) is put in place of the real URL. This is because if the real links were included, clicking on them would break the examples (you'd end up with an error or a page loaded in the embedded example that you couldn't get back from.) `#` just links to the current page.

You'll notice a few things as you explore the default styles:

- Links are underlined.
- Unvisited links are blue.
- Visited links are purple.
- Hovering a link makes the mouse pointer change to a little hand icon.
- Focused links have an outline around them — you should be able to focus on the links on this page with the keyboard by pressing the tab key (On Mac, you'll need to use

  <kbd>option</kbd>

  \+

  <kbd>tab</kbd>

  , or enable the [Full Keyboard Access: All controls](https://support.apple.com/guide/mac-help/use-your-keyboard-like-a-mouse-mchlp1399/) option by pressing

  <kbd>Ctrl</kbd>

  \+

  <kbd>F7</kbd>

  .)

- Active links are red. Try holding down the mouse button on the link as you click it.

Interestingly enough, these default styles are nearly the same as they were back in the early days of browsers in the mid-1990s. This is because users know and have come to expect this behavior — if links were styled differently, it would confuse a lot of people. This doesn't mean that you shouldn't style links at all. It just means that you shouldn't stray too far from the expected behavior. You should at least:

- Use underlining for links, but not for other things. If you don't want to underline links, at least highlight them in some other way.
- Make them react in some way when hovered/focused, and in a slightly different way when activated.

The default styles can be turned off/changed using the following CSS properties:

- {{cssxref("color")}} for the text color.
- {{cssxref("cursor")}} for the mouse pointer style — you shouldn't turn this off unless you've got a very good reason.
- {{cssxref("outline")}} for the text outline. An outline is similar to a border. The only difference is that a border takes up space in the box and an outline doesn't; it just sits over the top of the background. The outline is a useful accessibility aid, so should not be removed without adding another method of indicating the focused link.

> **Note:** You are not just limited to the above properties to style your links — you are free to use any properties you like.

### Styling some links

Now that we've looked at the default states in some detail, let's look at a typical set of link styles.

To start off with, we'll write out our empty rulesets:

```css
a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
```

This order is important because link styles build on one another. For example, the styles in the first rule will apply to all the subsequent ones. When a link is activated, it's usually also hovered over. If you put these in the wrong order, and you're changing the same properties in each ruleset, things won't work as you expect. To remember the order, you could try using a mnemonic like **L**o**V**e **F**ears **HA**te.

Now let's add some more information to get this styled properly:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}
```

We'll also provide some sample HTML to apply the CSS to:

```html
<p>There are several browsers available, such as <a href="#">Mozilla
Firefox</a>, <a href="#">Google Chrome</a>, and
<a href="#">Microsoft Edge</a>.</p>
```

Putting the two together gives us this result:

{{ EmbedLiveSample('Styling_some_links', '100%', 150) }}

So what did we do here? This certainly looks different to the default styling, but it still provides a familiar enough experience for users to know what's going on:

- The first two rules are not that interesting to this discussion.
- The third rule uses the `a` selector to get rid of the default text underline and focus outline (which varies across browsers anyway), and adds a tiny amount of padding to each link — all of this will become clear later on.
- Next, we use the `a:link` and `a:visited` selectors to set a couple of color variations on unvisited and visited links, so they are distinct.
- The next two rules use `a:focus` and `a:hover` to set focused and hovered links to have different background colors, plus an underline to make the link stand out even more. Two points to note here are:

  - The underline has been created using {{cssxref("border-bottom")}}, not {{cssxref("text-decoration")}} — some people prefer this because the former has better styling options than the latter. It's also drawn a bit lower so it doesn't cut across the descenders of the word being underlined (e.g., the tails on g and y).
  - The {{cssxref("border-bottom")}} value has been set as `1px solid`, with no color specified. Doing this makes the border adopt the same color as the element's text, which is useful in cases like this where the text is a different color in each case.

- Finally, `a:active` is used to give the links an inverted color scheme while they are being activated, to make it clear something important is happening!

### Active learning: Style your own links

In this active learning session, we'd like you to take our empty set of rules and add your own declarations to make the links look really cool. Use your imagination, go wild. We are sure you can come up with something cooler and just as functional as our example above.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to insert the example we showed above.

```html hidden
<div class="body-wrapper" style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea id="code" class="html-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"><p>There are several browsers available, such as <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a>, and
<a href="#">Microsoft Edge</a>.</p></textarea>

  <h2>CSS Input</h2>
  <textarea id="code" class="css-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}</textarea>

  <h2>Output</h2>
  <div class="output" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input id="reset" type="button" value="Reset" style="margin: 10px 10px 0 0;">
    <input id="solution" type="button" value="Show solution" style="margin: 10px 0 0 10px;">
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = 'p {\n  font-size: 1.2rem;\n  font-family: sans-serif;\n  line-height: 1.4;\n}\n\na {\n  outline: none;\n  text-decoration: none;\n  padding: 2px 1px 0;\n}\n\na:link {\n  color: #265301;\n}\n\na:visited {\n  color: #437A16;\n}\n\na:focus {\n  border-bottom: 1px solid;\n  background: #BAE498;\n}\n\na:hover {\n  border-bottom: 1px solid;\n  background: #CDFEAA;\n}\n\na:active {\n  background: #265301;\n  color: #CDFEAA;\n}';
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active_learning_Style_your_own_links', 700, 800) }}

## Including icons on links

A common practice is to include icons on links to provide more of an indicator as to what kind of content the link points to. Let's look at a really simple example that adds an icon to external links (links that lead to other sites.) Such an icon usually looks like a little arrow pointing out of a box. For this example, we'll use [this great example from icons8.com](https://icons8.com/web-app/741/external-link).

Let's look at some HTML and CSS that will give us the effect we want. First, some simple HTML to style:

```html
<p>For more information on the weather, visit our <a href="#">weather page</a>,
look at <a href="#">weather on Wikipedia</a>, or check
out <a href="#">weather on Extreme Science</a>.</p>
```

Next, the CSS:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus, a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href*="#"] {
  background: url('external-link-52.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample('Including_icons_on_links', '100%', 150) }}

So what's going on here? We'll skip over most of the CSS, as it's just the same information you've looked at before. The last rule, however, is interesting: we're inserting a custom background image on external links in a similar manner to how we handled [custom bullets on list items](/en-US/docs/Learn/CSS/Styling_text/Styling_lists#using_a_custom_bullet_image) in the last article. This time, however, we're using the {{cssxref("background")}} shorthand instead of the individual properties. We set the path to the image we want to insert, specify `no-repeat` so we only get one copy inserted, and then specify the position as 100% of the way to the right of the text content, and 0 pixels from the top.

We also use {{cssxref("background-size")}} to specify the size we want the background image to be shown at. It's useful to have a larger icon and then resize it like this as needed for responsive web design purposes. This does, however, only work with IE 9 and later. So if you need to support older browsers, you'll just have to resize the image and insert it as is.

Finally, we set some {{cssxref("padding-right")}} on the links to make space for the background image to appear in, so we aren't overlapping it with the text.

A final word: how did we select just external links? Well, if you are writing your [HTML links](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) properly, you should only be using absolute URLs for external links — it is more efficient to use relative links to link to other parts of your own site (as with the first link). The text "http" should therefore only appear in external links (like the second and third ones), and we can select this with an [attribute selector](/en-US/docs/Learn/CSS/Building_blocks/Selectors#attribute_selectors): `a[href*="http"]` selects {{htmlelement("a")}} elements, but only if they have an {{htmlattrxref("href","a")}} attribute with a value that contains "http" somewhere inside it.

So that's it. Try revisiting the active learning section above and trying this new technique out!

> **Note:** The `href` values look strange — we've used dummy links here that don't really go anywhere. The reason for this is that if we used real links, you would be able to load an external site in the `<iframe>` the live example is embedded in, thereby losing the example.

> **Note:** Don't worry if you are not familiar with [backgrounds](/en-US/docs/Learn/CSS/Building_blocks) and [responsive web design](/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) yet; these are explained in other places.

## Styling links as buttons

The tools you've explored so far in this article can also be used in other ways. For example, states like hover can be used to style many different elements, not just links — you might want to style the hover state of paragraphs, list items, or other things.

In addition, links are quite commonly styled to look and behave like buttons in certain circumstances. A website navigation menu is usually marked up as a list containing links, and this can be easily styled to look like a set of control buttons or tabs that provide the user with access to other parts of the site. Let's explore how.

First, some HTML:

```html
<ul>
  <li><a href="#">Home</a></li><li><a href="#">Pizza</a></li><li><a href="#">Music</a></li><li><a href="#">Wombats</a></li><li><a href="#">Finland</a></li>
</ul>
```

And now our CSS:

```css
body,html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}

li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: 19.5%;
  margin-right: 0.625%;
  text-align: center;
  line-height: 3;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link, a:visited, a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

This gives us the following result:

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 100) }}

Let's explain what's going on here, focusing on the most interesting parts:

- Our second rule removes the default {{cssxref("padding")}} from the {{htmlelement("ul")}} element, and sets its width to span 100% of the outer container (the {{htmlelement("body")}}, in this case).
- {{htmlelement("li")}} elements are normally block by default (see [types of CSS boxes](/en-US/docs/Learn/CSS/Building_blocks/The_box_model#types_of_css_boxes) for a refresher), meaning that they will sit on their own lines. In this case, we are creating a horizontal list of links, so in the third rule we set the {{cssxref("display")}} property to inline, which causes the list items to sit on the same line as one another. They now behave like inline elements.
- The fourth rule — which styles the {{htmlelement("a")}} element — is the most complicated here. Let's go through it step by step:

  - As in previous examples, we start by turning off the default {{cssxref("text-decoration")}} and {{cssxref("outline")}} — we don't want those spoiling our look.
  - Next, we set the {{cssxref("display")}} to `inline-block`. {{htmlelement("a")}} elements are inline by default and, while we don't want them to spill onto their own lines like a value of `block` would achieve, we do want to be able to size them. `inline-block` allows us to do this.
  - Now onto the sizing! We want to fill up the whole width of the {{htmlelement("ul")}} and leave a little margin between each button (but not a gap at the right hand edge). We also have 5 buttons whose sizes should all be the same. To do this, we set the {{cssxref("width")}} to 19.5% and the {{cssxref("margin-right")}} to 0.625%. You'll notice that all this width adds up to 100.625%, which would make the last button overflow the `<ul>` and fall down to the next line. However, we take it back down to 100% using the next rule, which selects only the last `<a>` in the list and removes the margin from it. Done!
  - The last three declarations are pretty simple and are mainly just for cosmetic purposes. We center the text inside each link, set the {{cssxref("line-height")}} to 3 to give the buttons some height (which also has the advantage of centering the text vertically), and set the text color to black.

> **Note:** You may have noticed that the list items in the HTML are all put on the same line as each other. This is done because spaces/line breaks in between inline block elements create spaces on the page, just like the spaces in between words; however, such spaces would break our horizontal navigation menu layout. So we've removed them. You can find more information about this problem (and solutions) at [Fighting the space between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/).

## Test your skills!

You've reached the end of this article, and already did some skill testing in our Active Learning sections, but can you remember the most important information going forward? You can find an assessment to verify that you've retained this information at the end of the module — see [Typesetting a community school homepage](/en-US/docs/Learn/CSS/Styling_text/Typesetting_a_homepage).

This assessment tests all the knowledge discussed in this module, so you might want to read the next article before moving on to it.

## Summary

We hope this article has provided you with all you'll need to know about links — for now! The final article in our Styling text module details how to use custom fonts on your websites (or web fonts, as they are better known).

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

## In this module

- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- [Styling lists](/en-US/docs/Learn/CSS/Styling_text/Styling_lists)
- **Styling links**
- [Web fonts](/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
- [Typesetting a community school homepage](/en-US/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)
