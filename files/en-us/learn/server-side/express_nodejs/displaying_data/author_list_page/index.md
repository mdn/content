---
title: Author list page and Genre list page challenge
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
tags:
  - Express
  - Node
  - displaying data
  - server-side
---
<p>The author list page needs to display a list of all authors in the database, with each author name linked to its associated author detail page. The date of birth and date of death should be listed after the name on the same line.</p>

<h2 id="Controller">Controller</h2>

<p>The author list controller function needs to get a list of all <code>Author</code> instances, and then pass these to the template for rendering.</p>

<p>Open <strong>/controllers/authorController.js</strong>. Find the exported <code>author_list()</code> controller method near the top of the file and replace it with the following code.</p>

<pre class="brush: js">// Display list of all Authors.
exports.author_list = function(req, res, next) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });

};</pre>

<p>The method uses the model's <code>find()</code>, <code>sort()</code> and <code>exec()</code> functions to return all <code>Author</code> objects sorted by <code>family_name</code> in alphabetic order. The callback passed to the <code>exec()</code> method is called with any errors (or <code>null</code>) as the first parameter, or a list of all authors on success. If there is an error it calls the next middleware function with the error value, and if not it renders the <strong>author_list</strong>(.pug) template, passing the page <code>title</code> and the list of authors (<code>author_list</code>).</p>

<h2 id="View">View</h2>

<p>Create <strong>/views/author_list.pug</strong> and replace its content with the text below.</p>

<pre class="brush: js">extends layout

block content
  h1= title

  ul
    each author in author_list
      li
        a(href=author.url) #{author.name}
        |  (#{author.date_of_birth} - #{author.date_of_death})

    else
      li There are no authors.</pre>

<p>Run the application and open your browser to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>. Then select the <em>All authors</em> link. If everything is set up correctly, the page should look something like the following screenshot.</p>

<p><img alt="Author List Page - Express Local Library site" src="locallibary_express_author_list.png"></p>

<div class="notecard note">
<p><strong>Note:</strong> The appearance of the author <em>lifespan</em> dates is ugly! You can improve this using the <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment">same approach</a> as we used for the <code>BookInstance</code> list (adding the virtual property for the lifespan to the <code>Author</code> model).<br>
 <br>
 However, as the author may not be dead or may have missing birth/death data, in this case we need to ignore missing dates or references to nonexistent properties. One way to deal with this is to return either a formatted date, or a blank string, depending on whether the property is defined. For example:</p>

<p><code>return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';</code></p>
</div>

<h2 id="Genre_list_page—challenge!">Genre list page—challenge!</h2>

<p>In this section you should implement your own genre list page. The page should display a list of all genres in the database, with each genre linked to its associated detail page. A screenshot of the expected result is shown below.</p>

<p><img alt="Genre List - Express Local Library site" src="locallibary_express_genre_list.png"></p>

<p>The genre list controller function needs to get a list of all <code>Genre</code> instances, and then pass these to the template for rendering.</p>

<ol>
 <li>You will need to edit <code>genre_list()</code> in <strong>/controllers/genreController.js</strong>. </li>
 <li>The implementation is almost exactly the same as the <code>author_list()</code> controller.
  <ul>
   <li>Sort the results by name, in ascending order.</li>
  </ul>
 </li>
 <li>The template to be rendered should be named <strong>genre_list.pug</strong>.</li>
 <li>The template to be rendered should be passed the variables <code>title</code> ('Genre List') and <code>genre_list</code> (the list of genres returned from your <code>Genre.find()</code> callback).</li>
 <li>The view should match the screenshot/requirements above (this should have a very similar structure/format to the Author list view, except for the fact that genres do not have dates).</li>
</ol>

<h2 id="Next_steps">Next steps</h2>

<p>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</p>

<p>Proceed to the next subarticle of part 5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page">Genre detail page</a>.</p>
