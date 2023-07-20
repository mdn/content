---
title: Practical positioning examples
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
page-type: guide
---

{{LearnSidebar}}

This article shows how to build some real-world examples to illustrate what kinds of things you can do with positioning.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of How CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">Introduction to CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To get an idea of the practicalities of positioning</td>
    </tr>
  </tbody>
</table>

## A tabbed info-box

The first example we'll look at is a classic tabbed info box — a very common feature used when you want to pack a lot of information into a small area. This includes information-heavy apps like strategy/war games, mobile versions of websites where the screen is narrow and space is limited, and compact information boxes where you might want to make lots of information available without having it fill the whole UI. Our simple example will look like this once we are finished:

![Tab 1 is selected. 'Tab 2' and 'Tab 3' are the other two tabs. Only the contents of the selected tab are visible. When a tab is selected, it's text-color changes from black to white and it's background-color changes from orange-red to saddle-brown.](tabbed-info-box.png)

> **Note:** You can see the finished example running live at [info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) ([source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html)). Check it out to get an idea of what you will be building in this section of the article.

You might be thinking "why not just create the separate tabs as separate webpages, and just have the tabs clicking through to the separate pages to create the effect?" This code would be simpler, yes, but then each separate "page" view would actually be a newly-loaded webpage, which would make it harder to save information across views, and integrate this feature into a larger UI design. In addition, so-called "single page apps" are becoming very popular — especially for mobile web UIs — because having everything served as a single file cuts down on the number of HTTP requests required to view all the content, thereby improving performance.

> **Note:** Some web developers take things even further, only having one page of information loaded at once, and dynamically changing the information shown using a JavaScript feature such as [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest). At this point in your learning however we want to keep things as simple as possible. There is some JavaScript later on, but only a tiny bit.

To start with, we'd like you to make a local copy of the starting HTML file — [info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box-start.html). Save this somewhere sensible on your local computer, and open it up in your text editor. Let's look at the HTML contained within the body:

```html
<section class="info-box">
  <ul>
    <li><a href="#" class="active">Tab 1</a></li>
    <li><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
  </ul>
  <div class="panels">
    <article class="active-panel">
      <h2>The first tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum
        et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius
        libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt
        metus. Donec ultrices, urna maximus consequat aliquet, dui neque
        eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor
        urna. Nulla facilisi.
      </p>
    </article>
    <article>
      <h2>The second tab</h2>

      <p>
        This tab hasn't got any Lorem Ipsum in it. But the content isn't very
        exciting all the same.
      </p>
    </article>
    <article>
      <h2>The third tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an
        ordered list: how exciting!
      </p>

      <ol>
        <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
        <li>Aliquam ut porttitor urna.</li>
        <li>Nulla facilisi</li>
      </ol>
    </article>
  </div>
</section>
```

So here we've got a {{htmlelement("section")}} element with a `class` of `info-box`, which contains a {{htmlelement("ul")}} and a {{htmlelement("div")}}. The unordered list contains three list items with links inside, which will become the actual tabs to click on for displaying our content panels. The `div` contains three {{htmlelement("article")}} elements, which will make up the content panels that correspond to each tab. Each panel contains some sample content.

The idea here is that we will style the tabs to look like a standard horizontal navigation menu, and style the panels to sit on top of one another using absolute positioning. We'll also give you a bit of JavaScript to include on your page to display the corresponding panel when a tab is pressed, and style the tab itself. You won't need to understand the JavaScript itself at this stage, but you should think about learning some basic [JavaScript](/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) as soon as possible — the more complex your UI features become, the more likely it is that you'll need some JavaScript to implement your desired functionality.

### General setup

To begin with, add the following between your opening and closing {{HTMLElement("style")}} tags:

```css
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

This is just some general setup to set a sans-serif font on our page, use the `border-box` {{cssxref("box-sizing")}} model, and get rid of the default {{htmlelement("body")}} margin.

Next, add the following just below your previous CSS:

```css
.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}
```

This sets a specific width and height on the content, and centers it on the screen using the old `margin: 0 auto` trick. Previously in the course we advised against setting a fixed height on content containers if at all possible; it is OK in this circumstance because we have fixed content in our tabs. It also looks a bit jarring to have different tabs at different heights.

### Styling our tabs

Now we want to style tabs to look like tabs — basically, these are a horizontal navigation menu, but instead of loading different web pages when they are clicked on like we've seen previously in the course, they cause different panels to be displayed on the same page. First, add the following rule at the bottom of your CSS to remove the default {{cssxref("padding-left")}} and {{cssxref("margin-top")}} from the unordered list:

```css
.info-box ul {
  padding-left: 0;
  margin-top: 0;
}
```

> **Note:** We are using descendant selectors with `.info-box` at the start of the chain throughout this example — this is so that we can insert this feature into a page with other content already on it, without fear of interfering with the styles applied to other parts of the page.

Next, we'll style the horizontal tabs — the list items are all floated left to make them sit in a line together, their {{cssxref("list-style-type")}} is set to `none` to get rid of the bullets, and their {{cssxref("width")}} is set to `150px` so they will comfortably fit across the info-box. The {{htmlelement("a")}} elements are set to {{cssxref("display")}} inline-block so they will sit in a line but still be stylable, and they are styled appropriately for tab buttons, using a variety of other properties.

Add the following CSS:

```css
.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}
```

Finally for this section we'll set some styles on the link states. First, we'll set the `:focus` and `:hover` states of the tabs to look different when they are focused/hovered, providing users with some visual feedback. Secondly, we'll set a rule that puts the same styling on one of the tabs when a `class` of `active` is present on it. We will set this using JavaScript when a tab is clicked on. Place the following CSS below your other styles:

```css
.info-box li a:focus,
.info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}
```

### Styling the panels

The next job is to style our panels. Let's get going!

First, of all, add the following rule to style the `.panels` {{htmlelement("div")}} container. Here we set a fixed {{cssxref("height")}} to make sure the panels fit snugly inside the info-box, {{cssxref("position")}} `relative` to set the {{htmlelement("div")}} as the positioning context, so you can then place positioned child elements relative to it and not the initial viewport, and finally we {{cssxref("clear")}} the float set in the CSS above so that it doesn't interfere with the remainder of the layout.

```css
.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}
```

Finally for this section, we will style the individual {{htmlelement("article")}} elements that comprise our panels. The first rule we'll add will absolutely {{cssxref("position")}} the panels, and make them all sit flush to the {{cssxref("top")}} and {{cssxref("left")}} of their {{htmlelement("div")}} container — this part is absolutely key to this whole layout feature, as it makes the panels sit on top of one another. The rule also gives the panels the same set height as the container, and gives the content some padding, a text {{cssxref("color")}}, and a {{cssxref("background-color")}}.

The second rule we'll add here makes it so that a panel with a `class` of `active-panel` set on it will have a {{cssxref("z-index")}} of 1 applied to it, which will make it sit above the other panels (positioned elements have a `z-index` of 0 by default, which would put them below). Again, we'll add this class using JavaScript at the appropriate time.

```css
.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}
```

### Adding our JavaScript

The final step to getting this feature working is to add some JavaScript. Put the following block of code, exactly as written in between your opening and closing {{htmlelement("script")}} tags (you'll find these below the HTML content):

```js
const tabs = document.querySelectorAll(".info-box li a");
const panels = document.querySelectorAll(".info-box article");

for (let i = 0; i < tabs.length; i++) {
  setTabHandler(tabs[i], i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = () => {
    for (const tab of tabs) {
      tab.className = "";
    }

    tab.className = "active";

    for (const panel of panels) {
      panel.className = "";
    }

    panels[tabPos].className = "active-panel";
  };
}
```

This code does the following:

- First we save a reference to all the tabs and all the panels in two variables called `tabs` and `panels`, so we can easily do things to them later on.
- Then we use a `for` loop to cycle through all the tabs and run a function called `setTabHandler()` on each one, which sets up the functionality that should occur when each one is clicked on. When run, the function is passed a reference to the particular tab it is being run for, and an index number `i` that identifies the tab's position in the `tabs` array.
- In the `setTabHandler()` function, the tab has an `onclick` event handler set on it, so that when the tab is clicked, the following occurs:

  - A `for` loop is used to cycle through all the tabs and remove any classes that are present on them.
  - A `class` of `active` is set on the tab that was clicked on — remember from earlier that this class has an associated rule in the CSS that sets the same {{cssxref("color")}} and {{cssxref("background-color")}} on the tab as the panels are styled with.
  - A `for` loop is used to cycle through all the panels and remove any classes that are present on them.
  - A class of `active-panel` is set on the panel that corresponds to the tab that was clicked on — remember from earlier that this class has an associated rule in the CSS that sets its {{cssxref("z-index")}} to 1, making it appear over the top of the other panels.

That's it for the first example. Keep your code open, as we'll be adding to it in the second one.

## A fixed position tabbed info-box

In our second example, we will take our first example — our info-box — and add it into the context of a full web page. But not only that — we'll give it fixed position so that it stays in the same position in the browser window. When the main content scrolls, the info-box will stay in the same position on the screen. Our finished example will look like this:

![Info-box is a container with 3 tabs with the first tab selected and only the contents of the first tab are displayed. It is given a fixed position. The info-box is positioned at the top left corner of the window with a width of 452 pixels. A container of fake content occupies the rest right half of the window; the fake content container is taller than the window and is scrollable. When the page is scrolled, the right-hand side container moves while the info-box stays fixed in the same position on the screen. ](fixed-info-box.png)

> **Note:** You can see the finished example running live at [fixed-info-box.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html) ([source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/fixed-info-box.html)). Check it out to get an idea of what you will be building in this section of the article.

As a starting point, you can use your completed example from the first section of the article, or make a local copy of [info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html) from our GitHub repo.

### HTML additions

First of all, we need some additional HTML to represent the website main content. Add the following {{htmlelement("section")}} just below your opening {{htmlelement("body")}} tag, just before the existing section:

```html
<section class="fake-content">
  <h1>Fake content</h1>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
</section>
```

> **Note:** You can feel free to change the fake content for some real content if you like.

### Changes to the existing CSS

Next we need to make some small changes to the existing CSS, to get the info-box placed and positioned. Change your `.info-box` rule to get rid of `margin: 0 auto;` (we no longer want the info-box centered), add {{cssxref("position")}}`: fixed;`, and stick it to the {{cssxref("top")}} of the browser viewport.

It should now look like this:

```css
.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}
```

### Styling the main content

The only thing left for this example is to provide the main content with some styling. Add the following rule underneath the rest of your CSS:

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}
```

To start with, we give the content the same {{cssxref("background-color")}}, {{cssxref("color")}}, and {{cssxref("padding")}} as the info-box panels. We then give it a large {{cssxref("margin-left")}} to move it over to the right, making space for the info-box to sit in, so it is not overlapping anything else.

This marks the end of the second example; we hope you'll find the third just as interesting.

## A sliding hidden panel

The final example we'll present here is a panel that slides on and off the screen at the press of an icon — as mentioned earlier, this is popular for situations like mobile layouts, where the available screen spaces is small, so you don't want to use up most of it by showing a menu or info panel instead of the useful content.

Our finished example will look like this:

![A blank screen on the left 60% of the screen with a 40% width panel displaying information on the right. A 'question mark' icon is in the top-right corner. The panel slides on and off the screen at the press of this 'question mark' icon.](hidden-sliding-panel.png)

> **Note:** You can see the finished example running live at [hidden-info-panel.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html) ([source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)). Check it out to get an idea of what you will be building in this section of the article.

As a starting point, make a local copy of [hidden-info-panel-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html) from our GitHub repo. This doesn't follow on from the previous example, so a fresh start file is required. Let's have a look at the HTML in the file:

```html-nolint
<label for="toggle">❔</label>
<input type="checkbox" id="toggle" />
<aside>

…

</aside>
```

To start with here we've got a {{htmlelement("label")}} element and an {{htmlelement("input")}} element — `<label>` elements are normally used to associate a text label with a form element for accessibility purposes (allowing a screen user to see what description goes with what form element). Here it is associated with the `<input>` checkbox using the `for` and `id` attributes.

> **Note:** We've put a special question mark character into our HTML to act as our info icon — this represents the button that will be pressed to show/hide the panel.

Here we are going to use these elements for a slightly different purpose — another useful side effect of `<label>` elements is that you can click a checkbox's label to check the checkbox, as well as just the checkbox itself. This has led to the well-known [checkbox hack](https://css-tricks.com/the-checkbox-hack/), which provides a JavaScript-free way of controlling an element by toggling a button. The element we'll be controlling is the {{htmlelement("aside")}} element that follows the other two (we've left its contents out of the above code listing for brevity).

In the below sections we'll explain how this all works.

### Styling the form elements

First let's deal with the form elements — add the following CSS in between your {{htmlelement("style")}} tags:

```css
label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

The first rule styles the `<label>`; here we've:

- Set a large {{cssxref("font-size")}} to make the icon nice and big.
- Set {{cssxref("position")}} `absolute` on it, and used {{cssxref("top")}} and {{cssxref("right")}} to position it nicely in the top-right corner.
- Set a {{cssxref("z-index")}} of 1 on it — this is so that when the info panel is styled and shown, it doesn't cover up the icon; instead the icon will sit on top of it so it can be pressed again to hide the info pane.
- Used the {{cssxref("cursor")}} property to change the mouse cursor when it is hovering over the icon to a hand pointer (like the one you see when links are hovered over), as an extra visual clue to users that the icon does something interesting.

The second rule sets {{cssxref("position")}} `absolute` on the actual checkbox `<input>` element, and hides it off the top of the screen. We don't actually want to see this on our UI.

### Styling the panel

Now it's time to style the actual sliding panel itself. Add the following rule to the bottom of your CSS:

```css
aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}
```

There's a lot going on here — let's discuss it bit by bit:

- First, we set some simple {{cssxref("background-color")}} and {{cssxref("color")}} on the info box.
- Next, we set a fixed {{cssxref("width")}} on the panel, and make its {{cssxref("height")}} the entire height of the browser viewport.
- We also include some horizontal {{cssxref("padding")}} to space it out a bit.
- Next we set {{cssxref("position")}}`: fixed;` on the panel so it will always appear in the same place, even if the page has content to scroll. We glue it to the {{cssxref("top")}} of the viewport, and set it so that by default it is offscreen to the {{cssxref("right")}}.
- Finally, we set a {{cssxref("transition")}} on the element. Transitions are an interesting feature that allow you to make changes between states happen smoothly, rather than just going "on", "off" abruptly. In this case we are intending to make the panel slide smoothly onscreen when the checkbox is checked. (Or to put it another way, when the question mark icon is clicked — remember, clicking the `<label>` will check the associated checkbox! We told you it was a hack.) You will learn a lot more about…

### Setting the checked state

There is one final bit of CSS to add — put the following at the bottom of your CSS:

```css
input[type="checkbox"]:checked + aside {
  right: 0px;
}
```

The selector is pretty complex here — we are selecting the `<aside>` element adjacent to the `<input>` element, but only when it is checked (note the use of the {{cssxref(":checked")}} pseudo-class to achieve this). When this is the case, we are setting the {{cssxref("right")}} property of the `<aside>` to `0px`, which causes the panel to appear on the screen again (smoothly due to the transition). Clicking the label again unchecks the checkbox, which hides the panel again.

So there you have it — a rather clever JavaScript-free way to create a toggling button effect. This will work in IE9 and above (the smooth transition will work in IE10 and above.) This effect does have some concerns — this is a bit of an abuse of form elements, as they weren't intended for this purpose. In addition, the effect is not great in terms of accessibility; the label is not focusable by default, and the non-semantic use of the form elements could cause issues with screen readers. JavaScript and a link or button might be more appropriate, but it is still fun to experiment with.

## Summary

So that rounds off our look at positioning — by now, you should have an idea of how the basic mechanics work, as well as understanding how to start applying these to build some interesting UI features. Don't worry if you didn't get this all immediately — positioning is a fairly advanced topic, and you can always work through the articles again to aid your understanding.
