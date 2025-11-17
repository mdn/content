---
title: HTML table basics
short-title: Table basics
slug: Learn_web_development/Core/Structuring_content/HTML_table_basics
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}

This article gets you started with HTML tables, covering the very basics such as rows, cells, headings, making cells span multiple columns and rows, and how to group together all the cells in a column for styling purposes.

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
          <li>What tables are for — structuring tabular data.</li>
          <li>What tables are not for — layout, or <em>anything else</em>.</li>
          <li>Basic table syntax — <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, and <code>&lt;td&gt;</code>.</li>
          <li>Defining table headers with <code>&lt;th&gt;</code>.</li>
          <li>Spanning multiple columns and rows with <code>colspan</code> and <code>rowspan</code>.</li>
          <li>Grouping columns with <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What is a table?

A table is a structured set of data made up of rows and columns (**tabular data**). A table allows you to quickly and easily look up values that indicate some kind of connection between different types of data, for example a person and their age, or a day of the week, or the timetable for a local swimming pool.

![A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![A swimming timetable showing a sample data table](swimming-timetable.png)

Tables are very commonly used in human society, and have been for a long time, as evidenced by this US Census document from 1800:

![A very old parchment document; the data is not easily readable, but it clearly shows a data table being used.](1800-census.jpg)

It is therefore no wonder that the creators of HTML provided a means by which to structure and present tabular data on the web.

### How does a table work?

The point of a table is that it is rigid. Information is easily interpreted by making visual associations between row and column headers. Look at the table below for example and find a Jovian gas giant with 62 moons. You can find the answer by associating the relevant row and column headers.

```html hidden
<table>
  <caption>
    Data about the planets of our solar system (Source:
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Name</th>
      <th scope="col">Mass (10<sup>24</sup>kg)</th>
      <th scope="col">Diameter (km)</th>
      <th scope="col">Density (kg/m<sup>3</sup>)</th>
      <th scope="col">Gravity (m/s<sup>2</sup>)</th>
      <th scope="col">Length of day (hours)</th>
      <th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
      <th scope="col">Mean temperature (°C)</th>
      <th scope="col">Number of moons</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">Terrestrial planets</th>
      <th scope="row">Mercury</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>Closest to the Sun</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Earth</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Our world</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>The red planet</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Jovian planets</th>
      <th rowspan="2" scope="rowgroup">Gas giants</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>The largest planet</td>
    </tr>
    <tr>
      <th scope="row">Saturn</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Ice giants</th>
      <th scope="row">Uranus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Dwarf planets</th>
      <th scope="row">Pluto</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Declassified as a planet in 2006, but this
        <a
          href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >remains controversial</a
        >.
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

{{EmbedLiveSample("How_does_a_table_work", 100, 560)}}

When implemented correctly, HTML tables are handled well by accessibility tools such as screen readers, so a successful HTML table should enhance the experience of sighted and visually impaired users alike.

### Table styling

You can also have a [look at the live planets data example](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) on GitHub! One thing you'll notice is that the table does look a bit more readable there — this is because the table you see above on this page has minimal styling, whereas the GitHub version has more significant CSS applied.

Be under no illusion; for tables to be effective on the web, you need to provide some styling information with [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics), as well as good solid structure with HTML. In this lesson we are focusing on the HTML part; you'll find out about styling tables later on, in our [Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables) lesson.

We won't focus on CSS in this module, but we have provided a minimal CSS stylesheet for you to use that will make your tables more readable than the default you get without any styling. You can find the [stylesheet here](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css), and you can also find an [HTML template](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) that applies the stylesheet — these together will give you a good starting point for experimenting with HTML tables.

### When should you avoid HTML tables?

HTML tables should be used for tabular data (information that's easy to work with in rows and columns) — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, for example one row to contain a page header, a row to contain each content column, one row to contain the footer, etc. This technique was used in the past because CSS support across browsers used to be a lot more limited. Modern browsers have solid CSS support so table-based layouts are no longer needed. Table layouts are now extremely rare, but you might still see them in some corners of the web.

In short, using tables for layout rather than [CSS layout techniques](/en-US/docs/Learn_web_development/Core/CSS_layout) is a bad idea. The main reasons are as follows:

1. **Layout tables reduce accessibility for visually impaired users**: [screen readers](/en-US/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers), used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screen readers' output will be confusing to their users.
2. **Tables produce tag soup**: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.
3. **Tables are not automatically responsive**: When you use proper layout containers (such as {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, or {{htmlelement("div")}}), their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.

## Creating your first table

We've talked table theory enough, so, let's dive into a practical example and get you to build up a simple table.

1. First of all, make a copy of [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) in a new directory on your local machine. The HTML template already contains a `<link>` element to apply the CSS to the HTML, so you don't need to worry about that.
2. The content of every table is enclosed by these two tags: **[`<table></table>`](/en-US/docs/Web/HTML/Reference/Elements/table)**. Add these inside the body of your HTML.
3. The smallest container inside a table is a table cell, which is created with a **[`<td>`](/en-US/docs/Web/HTML/Reference/Elements/td)** element ("td" stands for "table data"). Add the following inside your table tags:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. If we want a row of four cells, we need to copy these tags three times. Update the contents of your table to look like so:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

As you will see, the cells are not placed underneath each other, rather they are automatically aligned with each other on the same row. Each `<td>` element creates a single cell and together they make up the first row. Every cell we add makes the row grow longer.

To stop this row from growing and start placing subsequent cells on a second row, we need to use the **[`<tr>`](/en-US/docs/Web/HTML/Reference/Elements/tr)** element ('tr' stands for 'table row'). Let's investigate this now.

1. Place the four cells you've already created inside `<tr>` tags, like so:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Now you've made one row, have a go at making one or two more — each row needs to be wrapped in an additional `<tr>` element, with each cell contained in a `<td>`.

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<table>
  <tr>
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
  </tr>

  <tr>
    <td>Second row, first cell.</td>
    <td>Cell 2.</td>
    <td>Cell 3.</td>
    <td>Cell 4.</td>
  </tr>
</table>
```

You can also find this code on GitHub at [simple-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/simple-table.html) ([see it running live also](https://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

</details>

## Adding headers with \<th> elements

Now let's turn our attention to table headers — special cells that go at the start of a row or column and define the type of data that row or column contains (as an example, see the "Person" and "Age" cells in the first example shown in this article). To illustrate why they are useful, have a look at the following table example. First the source code:

```html live-sample___table-headers
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

```css hidden live-sample___table-headers
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

Now the actual rendered table:

{{EmbedLiveSample("table-headers", "", "250")}}

The problem here is that, while you can kind of make out what's going on, it is not as easy to cross reference data as it could be. If the column and row headings stood out in some way, it would be much better.

### Adding headers to the dogs table

Now we'd like you to have a go at improving the dogs table example by adding some headers.

1. First, make a local copy of our [dogs-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) files in a new directory on your local machine.
2. To recognize the table headers as headers, both visually and semantically, you can use the **[`<th>`](/en-US/docs/Web/HTML/Reference/Elements/th)** element ("th" stands for "table header"). This works in exactly the same way as a `<td>`, except that it denotes a header, not a normal cell. Go into your HTML, and change all the `<td>` elements surrounding the table headers into `<th>` elements.
3. Save your HTML and load it in a browser, and you should see that the headers now look like headers.

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <th>Knocky</th>
    <th>Flor</th>
    <th>Ella</th>
    <th>Juan</th>
  </tr>
  <tr>
    <th>Breed</th>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <th>Owner</th>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <th>Eating Habits</th>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

You can also find this code on GitHub at [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/dogs-table-fixed.html) ([see it running live also](https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

</details>

### Why are headers useful?

We have already partially answered this question — it is easier to find the data you are looking for when the headers clearly stand out, and the design just generally looks better.

> [!NOTE]
> Table headings come with some default styling — they are bold and centered even if you don't add your own styling to the table, to help them stand out.

Tables headers also have an added benefit — along with the `scope` attribute (which we'll learn about in the next article), they allow you to make tables more accessible by associating each header with all the data in the same row or column. Screen readers are then able to read out a whole row or column of data at once, which is pretty useful.

## Allowing cells to span multiple rows and columns

Sometimes we want cells to span multiple rows or columns. Take the following simple example, which shows the names of common animals. In some cases, we want to show the names of the males and females next to the animal name. Sometimes we don't, and in such cases we just want the animal name to span the whole table.

The initial markup looks like this:

```html live-sample___multiple-rows-columns
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

```css hidden live-sample___multiple-rows-columns
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid black;
  padding: 10px 20px;
}
```

But the output doesn't give us quite what we want:

{{EmbedLiveSample("multiple-rows-columns", "", "350")}}

### Fixing the layout with `rowspan` and `colspan`

We need a way to get "Animals", "Hippopotamus", and "Crocodile" to span across two columns, and "Horse" and "Chicken" to span downwards over two rows. Fortunately, table headers and cells have the `colspan` and `rowspan` attributes, which allow us to do just those things. Both accept a unitless number value, which equals the number of rows or columns you want spanned. For example, `colspan="2"` makes a cell span two columns.

Let's use `colspan` and `rowspan` to improve this table.

1. First, make a local copy of our [animals-table.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) files in a new directory on your local machine. The HTML contains the same animals example as you saw above.
2. Next, use `colspan` to make "Animals", "Hippopotamus", and "Crocodile" span across two columns.
3. Finally, use `rowspan` to make "Horse" and "Chicken" span across two rows.
4. Save and open your code in a browser to see the improvement.

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look something like this:

```html
<table>
  <tr>
    <th colspan="2">Animals</th>
  </tr>
  <tr>
    <th colspan="2">Hippopotamus</th>
  </tr>
  <tr>
    <th rowspan="2">Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th colspan="2">Crocodile</th>
  </tr>
  <tr>
    <th rowspan="2">Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

You can also find this code on GitHub at [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/main/html/tables/basic/animals-table-fixed.html) ([see it running live also](https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

</details>

## Grouping columns with `<colgroup>` and `<col>`

There is a way to target entire table columns as a single entity, for example when applying styles to a table (which you'll learn about later, in [Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)). As you get more experience with creating HTML tables, you'll find that applying a background color, for example, to every cell in a single column is harder than you might think. The {{htmlelement("colgroup")}} and {{htmlelement("col")}} elements provide a solution to this problem.

The `<colgroup>` element should be included as a child of the table, just after the opening `<table>` element. Inside the `<colgroup>` element you can include one or more `<col>` elements, which represent groups of columns. The `<col>` element can include a `span` attribute that indicates the number of columns in that group. It can also include global attributes such as `style` (if you want to target the group with inline styles) or `class` (if you want to target that group with CSS or JavaScript using a class name). The `<col>` elements represent the table columns from the start of the columns, for example from the left hand side of a table written in a left-to-right language such as English.

Let's have a look at an example to show what we mean. The following table shows a school timetable:

```html live-sample___colgroup-col
<h1>School language timetable</h1>

<table>
  <colgroup>
    <col span="2" />
    <col class="column-background" />
    <col class="column-fixed-width" />
    <col class="column-background" />
    <col class="column-background-border" />
    <col span="2" class="column-fixed-width" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Mon</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>1st period</th>
    <td>English</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2nd period</th>
    <td>English</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3rd period</th>
    <td>&nbsp;</td>
    <td>German</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4th period</th>
    <td>&nbsp;</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>English</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

In this table, there are eight columns. Let's look at the `<colgroup>` and `<col>` structure more closely to show how it affects them:

```html
<colgroup>
  <col span="2" />
  <col class="column-background" />
  <col class="column-fixed-width" />
  <col class="column-background" />
  <col class="column-background-border" />
  <col span="2" class="column-fixed-width" />
</colgroup>
```

Looking at the `<col>` elements:

- The first one has `span="2"` set on it, so it represents the first _and_ second columns from the left of the table. We are not targeting these columns with any styles, but we need to include it so that we can target subsequent columns.
- The second and fourth ones don't have a `span` attribute set, so they will represent a single column — the third and fifth columns in these cases. They have a `class` of `column-background` applied.
- The third one doesn't have a `span` attribute set, and has a `class` of `column-fixed-width` applied. It represents the fourth column.
- The fifth one doesn't have a `span` attribute set, and has a `class` of `column-background-border` applied. It represents the sixth column.
- The sixth one has `span="2"` set on it, and has a `class` of `column-fixed-width` applied. It represents the seventh and eighth columns.

We have hidden most of the CSS for this example, but we are showing you the rules that apply styles to the `<col>` elements with the `column-background`, `column-fixed-width`, and `column-background-border` classes set on them:

```css hidden live-sample___colgroup-col
html {
  font-family: sans-serif;
}

body {
  margin: 0 20px;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200 200 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190 190 190);
  padding: 10px 20px;
}

td {
  text-align: center;
}
```

```css live-sample___colgroup-col
.column-background {
  background-color: #97db9a;
}

.column-fixed-width {
  width: 40px;
}

.column-background-border {
  background-color: #dcc48e;
  border: 4px solid #c1437a;
}
```

- The `<col>` elements with a `column-background` class have a solid background color set on them.
- The `<col>` elements with a `column-fixed-width` class have a narrow fixed width set on them.
- The `<col>` element with a `column-background-border` class has a solid background color and a thick border set on it.

You don't need to worry about how the CSS works for now; you'll learn about it in detail later on in our [CSS styling basics](/en-US/docs/Learn_web_development/Core/Styling_basics) module.

Let's look at how the above code renders:

{{embedlivesample("colgroup-col", "100%", 400)}}

Notice how the different columns receive the styles specified in the classes.

> [!NOTE]
> Even though `<colgroup>` and `<col>` mainly facilitate styling, they are an HTML feature, therefore we've covered them here rather than in our CSS modules. Is it also fair to say that they are a _limited_ feature — as shown on the [`<colgroup>` reference page](/en-US/docs/Web/HTML/Reference/Elements/colgroup#usage_notes), only a limited subset of styles can be applied to a `<col>` element, and most of the other settings that were historically available have been deprecated (removed, or flagged for removal).

## Summary

That wraps up the basics of HTML tables. In the next article, we'll look at some further features that can be used to make HTML tables more accessible to visually impaired people.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content")}}
