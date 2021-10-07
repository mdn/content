---
title: 'Test your skills: sizing'
slug: Learn/CSS/Building_blocks/Sizing_tasks
tags:
  - Beginner
  - CSS
  - Example
---
<div>{{LearnSidebar}}</div>

<p>The aim of this task is to help you check your understanding of some of the values and units that we looked at in the lesson on <a href="/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Sizing items in CSS</a>.</p>

<div class="notecard note">
<p><strong>Note:</strong> You can try out solutions in the interactive editors below, however, it may be helpful to download the code and use an online tool such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a> to work on the tasks.<br>
 <br>
 If you get stuck, then ask us for help — see the {{anch("Assessment or further help")}} section at the bottom of this page.</p>
</div>

<h2 id="Task_One">Task One</h2>

<p>In this task, you have two boxes. The first should be sized so that the height will be at least 100 pixels tall, even if there is less content than would cause it to grow to that height, however, the content should not overflow if there is more content than fits in 100 pixels. Test this box by removing the content from the HTML to make sure you still get a 100 pixel tall box even with no content.</p>

<p>The second box should be fixed at 100 pixels tall, so that content will overflow if there is too much.</p>

<p><img alt="Two boxes one with overflowing content" src="mdn-sizing-height-min-height.png"></p>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/height-min-height.html", '100%', 1000)}}</p>

<div class="callout">
<p>For assessment or further work purposes, <a href="https://github.com/mdn/css-examples/blob/master/learn/tasks/sizing/height-min-height-download.html">download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Task_Two">Task Two</h2>

<p>This task has a box, which contains another box. Your task is to make the inner box 60% of the width of the outer box. The value of the {{cssxref("box-sizing")}} property is set to {{cssxref("border-box")}}, which means that the total width includes any padding and border. You should also give the inner box padding of 10% using the width (or inline size) as the size from which that percentage is calculated.</p>

<p><img alt="A box with another box nested inside" src="mdn-sizing-percentages.png"></p>

<p>Try updating the live code below to recreate the example as displayed in the image:</p>

<p>{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/percentages.html", '100%', 800)}}</p>

<div class="callout">
<p>For assessment or further work purposes, <a href="https://github.com/mdn/css-examples/blob/master/learn/tasks/sizing/percentages-download.html">download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Task_Three">Task Three</h2>

<p>This task has two images in boxes. One image is smaller than the box, the other is larger and breaking out of the box. If you imagine that the box is responsive and therefore could grow and shrink, which property would you apply to the image so that the large image shrinks down into the box but the small image does not stretch.</p>

<p><img alt="Two boxes with images in" src="mdn-sizing-max-width.png"></p>

<p>Try updating the live code below to recreate the example as displayed in the image:</p>

<p>{{EmbedGHLiveSample("css-examples/learn/tasks/sizing/max-width.html", '100%', 1200)}}</p>

<div class="callout">
<p>For assessment or further work purposes, <a href="https://github.com/mdn/css-examples/blob/master/learn/tasks/sizing/max-width-download.html">download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Assessment_or_further_help">Assessment or further help</h2>

<p>You can practice these examples in the Interactive Editors mentioned above.</p>

<p>If you would like your work assessed, or are stuck and want to ask for help:</p>

<ol>
 <li>Put your work into an online shareable editor such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a>. You can write the code yourself, or use the starting point files linked to in the above sections.</li>
 <li>Write a post asking for assessment and/or help at the <a class="external external-icon" href="https://discourse.mozilla.org/c/mdn/learn" rel="noopener">MDN Discourse forum Learning category</a>. Your post should include:
  <ul>
   <li>A descriptive title such as "Assessment wanted for sizing skill test 1".</li>
   <li>Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.</li>
   <li>A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.</li>
   <li>A link to the actual task or assessment page, so we can find the question you want help with.</li>
  </ul>
 </li>
</ol>
