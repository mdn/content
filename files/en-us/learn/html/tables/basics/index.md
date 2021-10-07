---
title: HTML table basics
slug: Learn/HTML/Tables/Basics
tags:
  - Article
  - Beginner
  - CodingScripting
  - HTML
  - Learn
  - Tables
  - basics
  - cell
  - col
  - colgroup
  - colspan
  - header
  - row
  - rowspan
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}</div>

<p>This article gets you started with HTML tables, covering the very basics such as rows and cells, headings, making cells span multiple columns and rows, and how to group together all the cells in a column for styling purposes.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>The basics of HTML (see <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introduction to HTML</a>).</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To gain basic familiarity with HTML tables.</td>
  </tr>
 </tbody>
</table>

<h2 id="What_is_a_table">What is a table ?</h2>

<p>A table is a structured set of data made up of rows and columns (<strong>tabular data</strong>). A table allows you to quickly and easily look up values that indicate some kind of connection between different types of data, for example a person and their age, or a day of the week, or the timetable for a local swimming pool.</p>

<p><img alt="A sample table showing names and ages of some people - Chris 38, Dennis 45, Sarah 29, Karen 47." src="numbers-table.png"></p>

<p><img alt="A swimming timetable showing a sample data table" src="swimming-timetable.png"></p>

<p>Tables are very commonly used in human society, and have been for a long time, as evidenced by this US Census document from 1800:</p>

<p><img alt="A very old parchment document; the data is not easily readable, but it clearly shows a data table being used." src="1800-census.jpg"></p>

<p>It is therefore no wonder that the creators of HTML provided a means by which to structure and present tabular data on the web.</p>

<h3 id="How_does_a_table_work">How does a table work?</h3>

<p>The point of a table is that it is rigid. Information is easily interpreted by making visual associations between row and column headers. Look at the table below for example and find a Jovian gas giant with 62 moons. You can find the answer by associating the relevant row and column headers.</p>

<pre class="brush: html hidden">

&lt;table&gt;
 &lt;caption&gt;Data about the planets of our solar system (Planetary facts taken from &lt;a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/"&gt;Nasa's Planetary Fact Sheet - Metric&lt;/a&gt;.&lt;/caption&gt;
 &lt;thead&gt;
  &lt;tr&gt;
   &lt;td colspan="2"&gt;&lt;/td&gt;
   &lt;th scope="col"&gt;Name&lt;/th&gt;
   &lt;th scope="col"&gt;Mass (10&lt;sup&gt;24&lt;/sup&gt;kg)&lt;/th&gt;
   &lt;th scope="col"&gt;Diameter (km)&lt;/th&gt;
   &lt;th scope="col"&gt;Density (kg/m&lt;sup&gt;3&lt;/sup&gt;)&lt;/th&gt;
   &lt;th scope="col"&gt;Gravity (m/s&lt;sup&gt;2&lt;/sup&gt;)&lt;/th&gt;
   &lt;th scope="col"&gt;Length of day (hours)&lt;/th&gt;
   &lt;th scope="col"&gt;Distance from Sun (10&lt;sup&gt;6&lt;/sup&gt;km)&lt;/th&gt;
   &lt;th scope="col"&gt;Mean temperature (°C)&lt;/th&gt;
   &lt;th scope="col"&gt;Number of moons&lt;/th&gt;
   &lt;th scope="col"&gt;Notes&lt;/th&gt;
  &lt;/tr&gt;
 &lt;/thead&gt;
 &lt;tbody&gt;
  &lt;tr&gt;
   &lt;th colspan="2" rowspan="4" scope="rowgroup"&gt;Terrestial planets&lt;/th&gt;
   &lt;th scope="row"&gt;Mercury&lt;/th&gt;
   &lt;td&gt;0.330&lt;/td&gt;
   &lt;td&gt;4,879&lt;/td&gt;
   &lt;td&gt;5427&lt;/td&gt;
   &lt;td&gt;3.7&lt;/td&gt;
   &lt;td&gt;4222.6&lt;/td&gt;
   &lt;td&gt;57.9&lt;/td&gt;
   &lt;td&gt;167&lt;/td&gt;
   &lt;td&gt;0&lt;/td&gt;
   &lt;td&gt;Closest to the Sun&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th scope="row"&gt;Venus&lt;/th&gt;
   &lt;td&gt;4.87&lt;/td&gt;
   &lt;td&gt;12,104&lt;/td&gt;
   &lt;td&gt;5243&lt;/td&gt;
   &lt;td&gt;8.9&lt;/td&gt;
   &lt;td&gt;2802.0&lt;/td&gt;
   &lt;td&gt;108.2&lt;/td&gt;
   &lt;td&gt;464&lt;/td&gt;
   &lt;td&gt;0&lt;/td&gt;
   &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th scope="row"&gt;Earth&lt;/th&gt;
   &lt;td&gt;5.97&lt;/td&gt;
   &lt;td&gt;12,756&lt;/td&gt;
   &lt;td&gt;5514&lt;/td&gt;
   &lt;td&gt;9.8&lt;/td&gt;
   &lt;td&gt;24.0&lt;/td&gt;
   &lt;td&gt;149.6&lt;/td&gt;
   &lt;td&gt;15&lt;/td&gt;
   &lt;td&gt;1&lt;/td&gt;
   &lt;td&gt;Our world&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th scope="row"&gt;Mars&lt;/th&gt;
   &lt;td&gt;0.642&lt;/td&gt;
   &lt;td&gt;6,792&lt;/td&gt;
   &lt;td&gt;3933&lt;/td&gt;
   &lt;td&gt;3.7&lt;/td&gt;
   &lt;td&gt;24.7&lt;/td&gt;
   &lt;td&gt;227.9&lt;/td&gt;
   &lt;td&gt;-65&lt;/td&gt;
   &lt;td&gt;2&lt;/td&gt;
   &lt;td&gt;The red planet&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th rowspan="4" scope="rowgroup"&gt;Jovian planets&lt;/th&gt;
   &lt;th rowspan="2" scope="rowgroup"&gt;Gas giants&lt;/th&gt;
   &lt;th scope="row"&gt;Jupiter&lt;/th&gt;
   &lt;td&gt;1898&lt;/td&gt;
   &lt;td&gt;142,984&lt;/td&gt;
   &lt;td&gt;1326&lt;/td&gt;
   &lt;td&gt;23.1&lt;/td&gt;
   &lt;td&gt;9.9&lt;/td&gt;
   &lt;td&gt;778.6&lt;/td&gt;
   &lt;td&gt;-110&lt;/td&gt;
   &lt;td&gt;67&lt;/td&gt;
   &lt;td&gt;The largest planet&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th scope="row"&gt;Saturn&lt;/th&gt;
   &lt;td&gt;568&lt;/td&gt;
   &lt;td&gt;120,536&lt;/td&gt;
   &lt;td&gt;687&lt;/td&gt;
   &lt;td&gt;9.0&lt;/td&gt;
   &lt;td&gt;10.7&lt;/td&gt;
   &lt;td&gt;1433.5&lt;/td&gt;
   &lt;td&gt;-140&lt;/td&gt;
   &lt;td&gt;62&lt;/td&gt;
   &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th rowspan="2" scope="rowgroup"&gt;Ice giants&lt;/th&gt;
   &lt;th scope="row"&gt;Uranus&lt;/th&gt;
   &lt;td&gt;86.8&lt;/td&gt;
   &lt;td&gt;51,118&lt;/td&gt;
   &lt;td&gt;1271&lt;/td&gt;
   &lt;td&gt;8.7&lt;/td&gt;
   &lt;td&gt;17.2&lt;/td&gt;
   &lt;td&gt;2872.5&lt;/td&gt;
   &lt;td&gt;-195&lt;/td&gt;
   &lt;td&gt;27&lt;/td&gt;
   &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th scope="row"&gt;Neptune&lt;/th&gt;
   &lt;td&gt;102&lt;/td&gt;
   &lt;td&gt;49,528&lt;/td&gt;
   &lt;td&gt;1638&lt;/td&gt;
   &lt;td&gt;11.0&lt;/td&gt;
   &lt;td&gt;16.1&lt;/td&gt;
   &lt;td&gt;4495.1&lt;/td&gt;
   &lt;td&gt;-200&lt;/td&gt;
   &lt;td&gt;14&lt;/td&gt;
   &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
   &lt;th colspan="2" scope="rowgroup"&gt;Dwarf planets&lt;/th&gt;
   &lt;th scope="row"&gt;Pluto&lt;/th&gt;
   &lt;td&gt;0.0146&lt;/td&gt;
   &lt;td&gt;2,370&lt;/td&gt;
   &lt;td&gt;2095&lt;/td&gt;
   &lt;td&gt;0.7&lt;/td&gt;
   &lt;td&gt;153.3&lt;/td&gt;
   &lt;td&gt;5906.4&lt;/td&gt;
   &lt;td&gt;-225&lt;/td&gt;
   &lt;td&gt;5&lt;/td&gt;
   &lt;td&gt;Declassified as a planet in 2006, but this &lt;a href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"&gt;remains controversial&lt;/a&gt;.&lt;/td&gt;
  &lt;/tr&gt;
 &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">
table {
  border-collapse: collapse;
  border: 2px solid black;
}

th, td {
  padding: 5px;
  border: 1px solid black;
}
</pre>

{{EmbedLiveSample("How_does_a_table_work", 100, 460)}}

<p>When implemented correctly, HTML tables are handled well by accessibility tools such as screen readers, so a successful HTML table should enhance the experience of sighted and visually impaired users alike.</p>

<h3 id="Table_styling">Table styling</h3>

<p>You can also have a <a href="https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html">look at the live example</a> on GitHub! One thing you'll notice is that the table does look a bit more readable there — this is because the table you see above on this page has minimal styling, whereas the GitHub version has more significant CSS applied.</p>

<p>Be under no illusion; for tables to be effective on the web, you need to provide some styling information with <a href="/en-US/docs/Learn/CSS">CSS</a>, as well as good solid structure with HTML. In this module we are focusing on the HTML part; to find out about the CSS part you should visit our <a href="/en-US/docs/Learn/CSS/Building_blocks/Styling_tables">Styling tables</a> article after you've finished here.</p>

<p>We won't focus on CSS in this module, but we have provided a minimal CSS stylesheet for you to use that will make your tables more readable than the default you get without any styling. You can find the <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css">stylesheet here</a>, and you can also find an <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html">HTML template</a> that applies the stylesheet — these together will give you a good starting point for experimenting with HTML tables.</p>

<h3 id="When_should_you_NOT_use_HTML_tables">When should you NOT use HTML tables?</h3>

<p>HTML tables should be used for tabular data — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc. You can find more details and an example at <a href="/en-US/docs/Learn/Accessibility/HTML#page_layouts">Page Layouts</a> in our <a href="/en-US/docs/Learn/Accessibility">Accessibility Learning Module</a>. This was commonly used because CSS support across browsers used to be terrible; table layouts are much less common nowadays, but you might still see them in some corners of the web.</p>

<p>In short, using tables for layout rather than <a href="/en-US/docs/Learn/CSS/CSS_layout">CSS layout techniques</a> is a bad idea. The main reasons are as follows:</p>

<ol>
 <li><strong>Layout tables reduce accessibility for visually impaired users</strong>: <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screenreaders">Screenreaders</a>, used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screenreaders' output will be confusing to their users.</li>
 <li><strong>Tables produce tag soup</strong>: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.</li>
 <li><strong>Tables are not automatically responsive</strong>: When you use proper layout containers (such as {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, or {{htmlelement("div")}}), their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.</li>
</ol>

<h2 id="Active_learning_Creating_your_first_table">Active learning: Creating your first table</h2>

<p>We've talked table theory enough, so, let's dive into a practical example and build up a simple table.</p>

<ol>
 <li>First of all, make a local copy of <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html">blank-template.html</a> and <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css">minimal-table.css</a> in a new directory on your local machine.</li>
 <li>The content of every table is enclosed by these two tags : <strong><code><a href="/en-US/docs/Web/HTML/Element/table">&lt;table&gt;&lt;/table&gt;</a></code></strong>. Add these inside the body of your HTML.</li>
 <li>The smallest container inside a table is a table cell, which is created by a <strong><code><a href="/en-US/docs/Web/HTML/Element/td">&lt;td&gt;</a></code></strong> element ('td' stands for 'table data'). Add the following inside your table tags:
  <pre class="brush: html">&lt;td&gt;Hi, I'm your first cell.&lt;/td&gt;</pre>
 </li>
 <li>If we want a row of four cells, we need to copy these tags three times. Update the contents of your table to look like so:
  <pre class="brush: html">&lt;td&gt;Hi, I'm your first cell.&lt;/td&gt;
&lt;td&gt;I'm your second cell.&lt;/td&gt;
&lt;td&gt;I'm your third cell.&lt;/td&gt;
&lt;td&gt;I'm your fourth cell.&lt;/td&gt;</pre>
 </li>
</ol>

<p>As you will see, the cells are not placed underneath each other, rather they are automatically aligned with each other on the same row. Each <code>&lt;td&gt;</code> element creates a single cell and together they make up the first row. Every cell we add makes the row grow longer.</p>

<p>To stop this row from growing and start placing subsequent cells on a second row, we need to use the <strong><code><a href="/en-US/docs/Web/HTML/Element/tr">&lt;tr&gt;</a></code></strong> element ('tr' stands for 'table row'). Let's investigate this now.</p>

<ol>
 <li>Place the four cells you've already created inside <code>&lt;tr&gt;</code> tags, like so:

  <pre class="brush: html">&lt;tr&gt;
  &lt;td&gt;Hi, I'm your first cell.&lt;/td&gt;
  &lt;td&gt;I'm your second cell.&lt;/td&gt;
  &lt;td&gt;I'm your third cell.&lt;/td&gt;
  &lt;td&gt;I'm your fourth cell.&lt;/td&gt;
&lt;/tr&gt;</pre>
 </li>
 <li>Now you've made one row, have a go at making one or two more — each row needs to be wrapped in an additional <code>&lt;tr&gt;</code> element, with each cell contained in a <code>&lt;td&gt;</code>.</li>
</ol>

<h3>Result</h3>

<p>This should result in a table that looks something like the following:</p>

<pre class="brush: html hidden">
&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;Hi, I'm your first cell.&lt;/td&gt;
    &lt;td&gt;I'm your second cell.&lt;/td&gt;
    &lt;td&gt;I'm your third cell.&lt;/td&gt;
    &lt;td&gt;I'm your fourth cell.&lt;/td&gt;
  &lt;/tr&gt;

  &lt;tr&gt;
    &lt;td&gt;Second row, first cell.&lt;/td&gt;
    &lt;td&gt;Cell 2.&lt;/td&gt;
    &lt;td&gt;Cell 3.&lt;/td&gt;
    &lt;td&gt;Cell 4.&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">
  table {
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid black;
    padding: 10px 20px;
  }
</pre>

{{EmbedLiveSample("Result")}}

<div class="note">
<p><strong>Note:</strong> You can also find this on GitHub as <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html">simple-table.html</a> (<a href="https://mdn.github.io/learning-area/html/tables/basic/simple-table.html">see it live also</a>).</p>
</div>

<h2 id="Adding_headers_with_th_elements">Adding headers with &lt;th&gt; elements</h2>

<p>Now let's turn our attention to table headers — special cells that go at the start of a row or column and define the type of data that row or column contains (as an example, see the "Person" and "Age" cells in the first example shown in this article). To illustrate why they are useful, have a look at the following table example. First the source code:</p>

<pre class="brush: html">&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;&amp;nbsp;&lt;/td&gt;
    &lt;td&gt;Knocky&lt;/td&gt;
    &lt;td&gt;Flor&lt;/td&gt;
    &lt;td&gt;Ella&lt;/td&gt;
    &lt;td&gt;Juan&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Breed&lt;/td&gt;
    &lt;td&gt;Jack Russell&lt;/td&gt;
    &lt;td&gt;Poodle&lt;/td&gt;
    &lt;td&gt;Streetdog&lt;/td&gt;
    &lt;td&gt;Cocker Spaniel&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Age&lt;/td&gt;
    &lt;td&gt;16&lt;/td&gt;
    &lt;td&gt;9&lt;/td&gt;
    &lt;td&gt;10&lt;/td&gt;
    &lt;td&gt;5&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Owner&lt;/td&gt;
    &lt;td&gt;Mother-in-law&lt;/td&gt;
    &lt;td&gt;Me&lt;/td&gt;
    &lt;td&gt;Me&lt;/td&gt;
    &lt;td&gt;Sister-in-law&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Eating Habits&lt;/td&gt;
    &lt;td&gt;Eats everyone's leftovers&lt;/td&gt;
    &lt;td&gt;Nibbles at food&lt;/td&gt;
    &lt;td&gt;Hearty eater&lt;/td&gt;
    &lt;td&gt;Will eat till he explodes&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<pre class="brush: css hidden">
  table {
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid black;
    padding: 10px 20px;
  }
</pre>

<p>Now the actual rendered table:</p>

{{EmbedLiveSample("Adding_headers_with_th_elements", "", "250")}}

<p>The problem here is that, while you can kind of make out what's going on, it is not as easy to cross reference data as it could be. If the column and row headings stood out in some way, it would be much better.</p>

<h3 id="Active_learning_table_headers">Active learning: table headers</h3>

<p>Let's have a go at improving this table.</p>

<ol>
 <li>First, make a local copy of our <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html">dogs-table.html</a> and <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css">minimal-table.css</a> files in a new directory on your local machine. The HTML contains the same Dogs example as you saw above.</li>
 <li>To recognize the table headers as headers, both visually and semantically, you can use the <strong><code><a href="/en-US/docs/Web/HTML/Element/th">&lt;th&gt;</a></code></strong> element ('th' stands for 'table header'). This works in exactly the same way as a <code>&lt;td&gt;</code>, except that it denotes a header, not a normal cell. Go into your HTML, and change all the <code>&lt;td&gt;</code> elements surrounding the table headers into <code>&lt;th&gt;</code> elements.</li>
 <li>Save your HTML and load it in a browser, and you should see that the headers now look like headers.</li>
</ol>

<div class="note">
<p><strong>Note:</strong> You can find our finished example at <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html">dogs-table-fixed.html</a> on GitHub (<a href="https://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html">see it live also</a>).</p>
</div>

<h3 id="Why_are_headers_useful">Why are headers useful?</h3>

<p>We have already partially answered this question — it is easier to find the data you are looking for when the headers clearly stand out, and the design just generally looks better.</p>

<div class="note">
<p><strong>Note:</strong> Table headings come with some default styling — they are bold and centered even if you don't add your own styling to the table, to help them stand out.</p>
</div>

<p>Tables headers also have an added benefit — along with the <code>scope</code> attribute (which we'll learn about in the next article), they allow you to make tables more accessible by associating each header with all the data in the same row or column. Screenreaders are then able to read out a whole row or column of data at once, which is pretty useful.</p>

<h2 id="Allowing_cells_to_span_multiple_rows_and_columns">Allowing cells to span multiple rows and columns</h2>

<p>Sometimes we want cells to span multiple rows or columns. Take the following simple example, which shows the names of common animals. In some cases, we want to show the names of the males and females next to the animal name. Sometimes we don't, and in such cases we just want the animal name to span the whole table.</p>

<p>The initial markup looks like this:</p>

<pre class="brush: html">&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Animals&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th&gt;Hippopotamus&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th&gt;Horse&lt;/th&gt;
    &lt;td&gt;Mare&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Stallion&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th&gt;Crocodile&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th&gt;Chicken&lt;/th&gt;
    &lt;td&gt;Hen&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Rooster&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<pre class="brush: css hidden">
  table {
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid black;
    padding: 10px 20px;
  }
</pre>

<p>But the output doesn't give us quite what we want:</p>

{{EmbedLiveSample("Allowing_cells_to_span_multiple_rows_and_columns", "", "350")}}

<p>We need a way to get "Animals", "Hippopotamus", and "Crocodile" to span across two columns, and "Horse" and "Chicken" to span downwards over two rows. Fortunately, table headers and cells have the <code>colspan</code> and <code>rowspan</code> attributes, which allow us to do just those things. Both accept a unitless number value, which equals the number of rows or columns you want spanned. For example, <code>colspan="2"</code> makes a cell span two columns.</p>

<p>Let's use <code>colspan</code> and <code>rowspan</code> to improve this table.</p>

<ol>
 <li>First, make a local copy of our <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html">animals-table.html</a> and <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css">minimal-table.css</a> files in a new directory on your local machine. The HTML contains the same animals example as you saw above.</li>
 <li>Next, use <code>colspan</code> to make "Animals", "Hippopotamus", and "Crocodile" span across two columns.</li>
 <li>Finally, use <code>rowspan</code> to make "Horse" and "Chicken" span across two rows.</li>
 <li>Save and open your code in a browser to see the improvement.</li>
</ol>

<div class="note">
<p><strong>Note:</strong> You can find our finished example at <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html">animals-table-fixed.html</a> on GitHub (<a href="https://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html">see it live also</a>).</p>
</div>

<h2 id="Providing_common_styling_to_columns">Providing common styling to columns</h2>

<h3 id="Styling_without_col">Styling without &lt;col&gt;</h3>

<p>There is one last feature we'll tell you about in this article before we move on. HTML has a method of defining styling information for an entire column of data all in one place — the <strong><code><a href="/en-US/docs/Web/HTML/Element/col">&lt;col&gt;</a></code></strong> and <strong><code><a href="/en-US/docs/Web/HTML/Element/colgroup">&lt;colgroup&gt;</a></code></strong> elements. These exist because it can be a bit annoying and inefficient having to specify styling on columns — you generally have to specify your styling information on <em>every</em> <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> in the column, or use a complex selector such as {{cssxref(":nth-child")}}.</p>

<div class="note">
<p><strong>Note:</strong> Styling columns like this is <a href="https://www.w3.org/TR/CSS22/tables.html#columns">limited to a few properties</a>: <code><a href="/en-US/docs/Web/CSS/border">border</a></code>, <code><a href="/en-US/docs/Web/CSS/background">background</a></code>, <code><a href="/en-US/docs/Web/CSS/width">width</a></code>, and <code><a href="/en-US/docs/Web/CSS/visibility">visibility</a></code>. To set other properties you'll have to either style every <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> in the column, or use a complex selector such as {{cssxref(":nth-child")}}.</p>
</div>

<p>Take the following simple example:</p>

<pre class="brush: html">&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Data 1&lt;/th&gt;
    &lt;th style="background-color: yellow"&gt;Data 2&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Calcutta&lt;/td&gt;
    &lt;td style="background-color: yellow"&gt;Orange&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Robots&lt;/td&gt;
    &lt;td style="background-color: yellow"&gt;Jazz&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<pre class="brush: css hidden">
  table {
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid black;
    padding: 10px 20px;
  }
</pre>

<p>Which gives us the following result:</p>

{{EmbedLiveSample("Styling_without_col", "", "200")}}

<p>This isn't ideal, as we have to repeat the styling information across all three cells in the column (we'd probably have a <code>class</code> set on all three in a real project and specify the styling in a separate stylesheet).</p>

<h3 id="Styling_with_col">Styling with &lt;col&gt;</h3>

<p>Instead of doing this, we can specify the information once, on a <code>&lt;col&gt;</code> element. <code>&lt;col&gt;</code> elements are  specified inside a <code>&lt;colgroup&gt;</code> container just below the opening <code>&lt;table&gt;</code> tag. We could create the same effect as we see above by specifying our table as follows:</p>

<pre class="brush: html">&lt;table&gt;
  &lt;colgroup&gt;
    &lt;col&gt;
    &lt;col style="background-color: yellow"&gt;
  &lt;/colgroup&gt;
  &lt;tr&gt;
    &lt;th&gt;Data 1&lt;/th&gt;
    &lt;th&gt;Data 2&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Calcutta&lt;/td&gt;
    &lt;td&gt;Orange&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Robots&lt;/td&gt;
    &lt;td&gt;Jazz&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<p>Effectively we are defining two "style columns", one specifying styling information for each column. We are not styling the first column, but we still have to include a blank <code>&lt;col&gt;</code> element — if we didn't, the styling would just be applied to the first column.</p>

<p>If we wanted to apply the styling information to both columns, we could just include one <code>&lt;col&gt;</code> element with a span attribute on it, like this:</p>

<pre class="brush: html">&lt;colgroup&gt;
  &lt;col style="background-color: yellow" span="2"&gt;
&lt;/colgroup&gt;</pre>

<p>Just like <code>colspan</code> and <code>rowspan</code>, <code>span</code> takes a unitless number value that specifies the number of columns you want the styling to apply to.</p>

<h3 id="Active_learning_colgroup_and_col">Active learning: colgroup and col</h3>

<p>Now it's time to have a go yourself.</p>

<p>Below you can see the timetable of a languages teacher. On Friday she has a new class teaching Dutch all day, but she also teaches German for a few periods on Tuesday and Thursdays. She wants to highlight the columns containing the days she is teaching.</p>

<p>{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}</p>

<p>Recreate the table by following the steps below.</p>

<ol>
 <li>First, make a local copy of our <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html">timetable.html</a> file in a new directory on your local machine. The HTML contains the same table you saw above, minus the column styling information.</li>
 <li>Add a <code>&lt;colgroup&gt;</code> element at the top of the table, just underneath the <code>&lt;table&gt;</code> tag, in which you can add your <code>&lt;col&gt;</code> elements (see the remaining steps below).</li>
 <li>The first two columns need to be left unstyled.</li>
 <li>Add a background color to the third column. The value for your <code>style</code> attribute is <code>background-color:#97DB9A;</code></li>
 <li>Set a separate width on the fourth column. The value for your <code>style</code> attribute is <code>width: 42px;</code></li>
 <li>Add a background color to the fifth column. The value for your <code>style</code> attribute is <code>background-color: #97DB9A;</code></li>
 <li>Add a different background color plus a border to the sixth column, to signify that this is a special day and she's teaching a new class. The values for your <code>style</code> attribute are <code>background-color:#DCC48E; border:4px solid #C1437A;</code></li>
 <li>The last two days are free days, so just set them to no background color but a set width; the value for the <code>style</code> attribute is <code>width: 42px;</code></li>
</ol>

<p>See how you get on with the example. If you get stuck, or want to check your work, you can find our version on GitHub as <a href="https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html">timetable-fixed.html</a> (<a href="https://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html">see it live also</a>).</p>

<h2 id="Summary">Summary</h2>

<p>That just about wraps up the basics of HTML Tables. In the next article we will look at some slightly more advanced table features, and start to think how accessible they are for visually impaired people.</p>

<div>{{NextMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}</div>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><strong>HTML table basics</strong></li>
 <li><a href="/en-US/docs/Learn/HTML/Tables/Advanced">HTML table advanced features and accessibility</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Tables/Structuring_planet_data">Structuring planet data</a></li>
</ul>
