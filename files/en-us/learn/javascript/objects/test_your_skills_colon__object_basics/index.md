---
title: 'Test your skills: Object basics'
slug: 'Learn/JavaScript/Objects/Test_your_skills:_Object_basics'
tags:
  - Beginner
  - JavaScript
  - Learn
  - Objects
  - test your skills
---
<div>{{learnsidebar}}</div>

<p>The aim of this skill test is to assess whether you've understood our <a href="/en-US/docs/Learn/JavaScript/Objects/Basics">JavaScript object basics</a> article.</p>

<div class="notecard note">
<p><strong>Note:</strong> You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a> to work on the tasks.<br>
 <br>
 If you get stuck, then ask us for help — see the {{anch("Assessment or further help")}} section at the bottom of this page.</p>
</div>

<div class="notecard note">
<p><strong>Note:</strong> In the examples below, if there is an error in your code it will be outputted into the results panel on the page, to help you try to figure out the answer (or into the browser's JavaScript console, in the case of the downloadable version).</p>
</div>

<h2 id="Object_basics_1">Object basics 1</h2>

<p>In this task you are provided with an object literal, and your tasks are to</p>

<ul>
 <li>Store the value of the <code>name</code> property inside the <code>catName</code> variable, using bracket notation.</li>
 <li>Run the <code>greeting()</code> method using dot notation (it will log the greeting to the browser DevTools' console).</li>
 <li>Update the <code>color</code> property value to <code>black</code>.</li>
</ul>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics1.html", '100%', 400)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/object-basics/object-basics1-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Object_basics_2">Object basics 2</h2>

<p>In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required members are:</p>

<ul>
 <li><code>name</code>: A string representing the band name.</li>
 <li><code>nationality</code>: A string representing the country the band comes from.</li>
 <li><code>genre</code>: What type of music the band plays.</li>
 <li><code>members</code>: A number representing the number of members the band has.</li>
 <li><code>formed</code>: A number representing the year the band formed.</li>
 <li><code>split</code>: A number representing the year the band split up, or <code>false</code> if they are still together.</li>
 <li><code>albums</code>: An array representing the albums released by the band. Each array item should be an object containing the following members:
  <ul>
   <li><code>name</code>: A string representing the name of the album.</li>
   <li><code>released</code>: A number representing the year the album was released.</li>
  </ul>
 </li>
</ul>

<p>Include at least two albums in the <code>albums</code> array.   </p>

<p>Once you've done this, you should then write a string to the variable <code>bandInfo</code>, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.</p>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics2.html", '100%', 400)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/object-basics/object-basics2-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Object_basics_3">Object basics 3</h2>

<p>Finally for our object basics assessment, we want you to return to the <code>cat</code> object literal from Task #1. We want you to rewrite the <code>greeting()</code> method so that it logs <code>"Hello, said Bertie the Cymric."</code> to the browser DevTools' console, but in a way that will work across <em>any</em> cat object of the same structure, regardless of its name or breed.</p>

<p>When you are done, write your own object called <code>cat2</code>, which has the same structure, exactly the same <code>greeting()</code> method, but a different <code>name</code>, <code>breed</code>, and <code>color</code>.</p>

<p>Call both <code>greeting()</code> methods to check that they log appropriate greetings to the console.</p>

<p>The code is not very <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a> (each bit of code should only be defined once) — you've got the same method defined twice, for example. Describe how you'd make it more DRY? If you are not sure, then don't worry — this is what we'll be looking at in future articles in the series!</p>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/object-basics/object-basics3.html", '100%', 400)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/object-basics/object-basics3-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Assessment_or_further_help">Assessment or further help</h2>

<p>You can practice these examples in the Interactive Editors above.</p>

<p>If you would like your work assessed, or are stuck and want to ask for help:</p>

<ol>
 <li>Put your work into an online shareable editor such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a>. You can write the code yourself, or use the starting point files linked to in the above sections.</li>
 <li>Write a post asking for assessment and/or help at the <a href="https://discourse.mozilla.org/c/mdn/learn">MDN Discourse forum Learning category</a>. Your post should include:
  <ul>
   <li>A descriptive title such as "Assessment wanted for Object basics 1 skill test".</li>
   <li>Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.</li>
   <li>A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.</li>
   <li>A link to the actual task or assessment page, so we can find the question you want help with.</li>
  </ul>
 </li>
</ol>
