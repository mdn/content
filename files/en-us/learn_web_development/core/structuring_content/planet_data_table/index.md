---
title: "Challenge: Structuring a planet data table"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
page-type: learn-module-assessment
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In this challenge, we provide you with some data on the planets in our solar system. Your job is to structure it into an accessible HTML table.

## Starting point

To start the assessment, make local copies of [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css), and [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in a new directory in your local computer.

> [!NOTE]
> You can try solutions in your code editor or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Project brief

You are working at a school; currently your students are studying the planets of our solar system, and you want to provide them with an easy-to-follow set of data to look up facts and figures about the planets. An HTML data table would be ideal — you need to take the raw data you have available and turn it into a table, following the steps below.

### Steps to complete

The following steps describe what you need to do to complete the table example. All the data you'll need is contained in the `planets-data.txt` file. If you have trouble visualizing the data, look at the live example below, or try drawing a diagram.

1. Open your copy of `blank-template.html`, and start the table off by giving it an outer container, a table header, and a table body. You don't need a table footer for this example.
2. Add the provided caption to your table.
3. Add a row to the table header containing all the column headers.
4. Create all the content rows inside the table body, remembering to make all the row headings into headings semantically.
5. Ensure all the content is placed into the right cells — in the raw data, each row of planet data is shown next to its associated planet.
6. Add attributes to make the row and column headers unambiguously associated with the rows, columns, or row groups that they act as headings for.
7. Add a black [border](/en-US/docs/Web/CSS/border) just around the column that contains all the planet name row headers.

## Hints and tips

- The first cell of the header row needs to be blank, and span two columns.
- The group row headings (e.g. _Jovian planets_) that sit to the left of the planet name row headings (e.g. _Saturn_) are a little tricky to sort out — you need to make sure each one spans the correct number of rows and columns.
- One way of associating headers with their rows/columns is a lot easier than the other way.

## Example

The finished table should look like this:

![Complex table has a caption above it. The top row cells are column headers. There are three columns of headers. The first two columns have merged cells, with the third column being individual headers for each row. All the text is centered. The headers and every other row have a slight background color.](assessment-table.png)

You can also [see the example live here](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (no looking at the source code — don't cheat!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
