---
title: 'Test your skills: WAI-ARIA'
slug: 'Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA'
tags:
  - Accessibility
  - Assessment
  - Beginner
  - Learn
  - WAI-ARIA
  - test your skills
---
<div>{{learnsidebar}}</div>

<p>This aim of this skill test is to assess whether you've understood our <a href="/en-US/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA basics</a> article.</p>

<div class="notecard note">
<p><strong>Note:</strong> You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a> to work on the tasks.<br>
<br>
If you get stuck, then ask us for help — see the {{anch("Assessment or further help")}} section at the bottom of this page.</p>
</div>

<h2 id="WAI-ARIA_1">WAI-ARIA 1</h2>

<p>In our first ARIA task, we present you with a section of non-semantic markup, which is obviously meant to be a list. Assuming you are not able to change the elements used, how can you allow screenreader users to recognize this as a list?</p>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria1.html", '100%', 700)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/blob/master/accessibility/tasks/html-css/aria/aria1-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="WAI-ARIA_2">WAI-ARIA 2</h2>

<p>In our second WAI-ARIA task, we present a simple search form, and we want you to add in a couple of WAI-ARIA features to improve its accessibility:</p>

<ol>
	<li>How can you allow the search form to be called out as a separate landmark on the page by screenreaders, to make it easily findable?</li>
	<li>How can you give the search input a suitable label, without explicitly adding a visible text label to the DOM?</li>
</ol>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/accessibility/tasks/html-css/aria/aria2.html", '100%', 700)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/blob/master/accessibility/tasks/html-css/aria/aria2-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="WAI-ARIA_3">WAI-ARIA 3</h2>

<p>For this final WAI-ARIA task, we return to an example we previously saw in the <a href="/en-US/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility">CSS and JavaScript skill test</a>. As before, we have a simple app that presents a list of animal names. Clicking one of the animal names causes a further description of that animal to appear in a box below the list. Here, we are starting with a mouse- and keyboard-accessible version.  </p>

<p>The problem we have now is that when the DOM changes to show a new description, screenreaders cannot see what has changed. Can you update it so that description changes are announced by the screenreader?</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/blob/master/accessibility/tasks/js/aria/aria-js1-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Assessment_or_further_help">Assessment or further help</h2>

<p>You can practice these examples in the Interactive Editors above.</p>

<p>If you would like your work assessed, or are stuck and want to ask for help:</p>

<ol>
	<li>Put your work into an online shareable editor such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a>. You can write the code yourself, or use the starting point files linked to in the above sections.</li>
	<li>Write a post asking for assessment and/or help at the <a class="external external-icon" href="https://discourse.mozilla.org/c/mdn/learn" rel="noopener">MDN Discourse forum Learning category</a>. Your post should include:
	<ul>
		<li>A descriptive title such as "Assessment wanted for WAI-ARIA 1 skill test".</li>
		<li>Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.</li>
		<li>A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.</li>
		<li>A link to the actual task or assessment page, so we can find the question you want help with.</li>
	</ul>
	</li>
</ol>
