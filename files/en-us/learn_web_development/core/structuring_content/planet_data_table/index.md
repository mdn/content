---
title: "Challenge: Structuring a planet data table"
short-title: "Challenge: Planet data table"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In this challenge, we provide you with some data on the planets in our solar system. Your job is to structure it into an accessible HTML table.

## Starting point

1. Create a new folder in an appropriate location on your computer called `planet-data-table` (or open an online editor and take the required steps to create a new project).
2. Save the following HTML listing inside a file inside your folder called `index.html` (or paste it into your online editor's HTML pane).

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Planet data table</title>
       <link href="minimal-table.css" rel="stylesheet" type="text/css" />
     </head>
     <body>
       <h1>Planet data table</h1>
     </body>
   </html>
   ```

3. Save the following CSS listing inside a file inside your folder called `style.css` (or paste it into your online editor's CSS pane).

   ```css live-sample___planet-data-table
   html {
     font-family: sans-serif;
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

   th {
     background-color: rgb(235 235 235);
   }

   td {
     text-align: center;
   }

   tr:nth-child(even) td {
     background-color: rgb(250 250 250);
   }

   tr:nth-child(odd) td {
     background-color: rgb(245 245 245);
   }

   caption {
     padding: 10px;
   }

   .column-border {
     border: 2px solid black;
   }
   ```

4. Keep the following data handy; you'll need to turn this into an HTML data table inside your HTML.

   ```plain
   Rows

   Terrestrial planets

   Mercury 0.330 4,879 5427 3.7 4222.6 57.9 167 0 Closest to the Sun
   Venus 4.87 12,104 5243 8.9 2802.0 108.2 464 0
   Earth 5.97 12,756 5514 9.8 24.0 149.6 15 1 Our world
   Mars 0.642 6,792 3933 3.7 24.7 227.9 -65 2 The red planet

   Jovian planets

   Gas giants

   Jupiter 1898 142,984 1326 23.1 9.9 778.6 -110 67 The largest planet
   Saturn 568 120,536 687 9.0 10.7 1433.5 -140 62

   Ice giants

   Uranus 86.8 51,118 1271 8.7 17.2 2872.5 -195 27
   Neptune 102 49,528 1638 11.0 16.1 4495.1 -200 14

   Dwarf planets*

   Pluto 0.0146 2,370 2095 0.7 153.3 5906.4 -225 5 Declassified as a planet in 2006, but this <a href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">remains controversial</a>.

   Columns

   Name
   Mass (10<sup>24</sup>kg)
   Diameter (km)
   Density (kg/m<sup>3</sup>)
   Gravity (m/s<sup>2</sup>)
   Length of day (hours)
   Distance from Sun (10<sup>6</sup>km)
   Mean temperature (°C)
   Number of moons
   Notes

   Caption

   Data about the planets of our solar system (Planetary facts taken from <a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/">Nasa's Planetary Fact Sheet - Metric</a>).
   ```

## Project brief

You are working at a school; currently your students are studying the planets of our solar system, and you want to provide them with an easy-to-follow set of data to look up facts and figures about the planets. An HTML data table would be ideal — you need to take the raw data you have available and turn it into a table, following the steps below.

All the data you need is contained in the data listing provided above. If you have trouble visualizing the data, look at the live example below, or try drawing a diagram.

1. Start the table off by giving it an outer container, a table header, and a table body. You don't need a table footer for this example.
2. Add the provided caption to your table.
3. Add a row to the table header containing all the column headers.
4. Create all the content rows inside the table body, remembering to make all the row headings into headings semantically.
5. Ensure all the content is placed into the right cells — in the raw data, each row of planet data is shown next to its associated planet.
6. Add attributes to make the row and column headers unambiguously associated with the rows, columns, or row groups that they act as headings for.
7. Add a black [border](/en-US/docs/Web/CSS/Reference/Properties/border) just around the column that contains all the planet name row headers. Do this using a suitable `<colgroup>`/`<col>` structure and the `.column-border` class style provided in the CSS.

## Hints and tips

- The first cell of the header row needs to be blank, and span two columns.
- The group row headings (e.g., _Jovian planets_) that sit to the left of the planet name row headings (e.g., _Saturn_) are a little tricky to sort out — you need to make sure each one spans the correct number of rows and columns.
- One way of associating headers with their rows/columns is a lot easier than the other way.

## Example

The table should look like the following after being marked up correctly. If you are getting stuck on how to achieve some of this, see the solution below the live example.

{{embedlivesample("planet-data-table", "100%", 650)}}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html live-sample___planet-data-table
<h1>Planet data table</h1>

<table>
  <caption>
    Data about the planets of our solar system (Planetary facts taken from
    <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Nasa's Planetary Fact Sheet - Metric</a
    >).
  </caption>
  <colgroup>
    <col span="2" />
    <col class="column-border" />
    <col span="9" />
  </colgroup>
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
      <th rowspan="4" colspan="2" scope="rowgroup">Terrestrial planets</th>
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
      <th colspan="2" scope="row">Dwarf planets</th>
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

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
