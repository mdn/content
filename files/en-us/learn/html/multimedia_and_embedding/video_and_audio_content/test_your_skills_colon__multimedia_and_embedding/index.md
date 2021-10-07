---
title: 'Test your skills: Multimedia and embedding'
slug: >-
  Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
tags:
  - Beginner
  - Embedding
  - HTML
  - Learn
  - Multimedia
  - test your skills
---
<div>{{learnsidebar}}</div>

<p>The aim of this skill test is to assess whether you've understood our <a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">Video and audio content</a> and <a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies">From object to iframe — other embedding technologies</a> articles.</p>

<div class="notecard note">
<p><strong>Note:</strong> You can try out solutions in the interactive editors below, however it may be helpful to download the code and use an online tool such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a> to work on the tasks.<br>
<br>
If you get stuck, then ask us for help — see the {{anch("Assessment or further help")}} section at the bottom of this page.</p>
</div>

<h2 id="Multimedia_and_embedding_1">Multimedia and embedding 1</h2>

<p>In this task we want you to embed a simple audio file onto the page. You need to:</p>

<ul>
	<li>Add the path to the audio file to an appropriate attribute to embed it on the page. The audio is called <code>audio.mp3</code>, and it is in a folder inside the current folder called <code>media</code>.</li>
	<li>Add an attribute to make browsers display some default controls.</li>
	<li>Add some appropriate fallback text for browsers that don't support <code>&lt;audio&gt;</code>.</li>
</ul>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Multimedia_and_embedding_2">Multimedia and embedding 2</h2>

<p>In this task we want you to mark up a slightly more complex video player, with multiple sources, subtitles, and other features besides. You need to:</p>

<ul>
	<li>Add an attribute to make browsers display some default controls.</li>
	<li>Add some appropriate fallback text for browsers that don't support <code>&lt;video&gt;</code>.</li>
	<li>Add multiple sources, containing the paths to the video files. The files are called <code>video.mp4</code> and <code>video.webm</code>, and are in a folder inside the current folder called <code>media</code>.</li>
	<li>Let the browser know in advance what video formats the sources point to, so it can make an informed choice of which one to download ahead of time.</li>
	<li>Give the <code>&lt;video&gt;</code> a width and height equal to its intrinsic size (320 by 240 pixels).</li>
	<li>Make the video muted by default.</li>
	<li>Display the text tracks contained in the <code>media</code> folder, in a file called <code>subtitles_en.vtt</code>, when the video is playing. You must explicitly set the type as subtitles, and the subtitle language to English.</li>
	<li>Make sure the readers can identify the subtitle language when they use the default controls.</li>
</ul>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Multimedia_and_embedding_3">Multimedia and embedding 3</h2>

<p>For this final task you have two tasks to do:</p>

<ul>
	<li>Embed a PDF into the page. The PDF is called <code>mypdf.pdf</code>, and is contained in the <code>media</code> folder.</li>
	<li>Go to a sharing site like YouTube or Google Maps, and embed a video or other media item into the page.</li>
</ul>

<p>Try updating the live code below to recreate the finished example:</p>

<p>{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}</p>

<div class="callout">
<p><a href="https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html">Download the starting point for this task</a> to work in your own editor or in an online editor.</p>
</div>

<h2 id="Assessment_or_further_help">Assessment or further help</h2>

<p>You can practice these examples in the Interactive Editors above.</p>

<p>If you would like your work assessed, or are stuck and want to ask for help:</p>

<ol>
	<li>Put your work into an online shareable editor such as <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, or <a href="https://glitch.com/">Glitch</a>. You can write the code yourself, or use the starting point files linked to in the above sections.</li>
	<li>Write a post asking for assessment and/or help at the <a class="external external-icon" href="https://discourse.mozilla.org/c/mdn/learn" rel="noopener">MDN Discourse forum Learning category</a>. Your post should include:
	<ul>
		<li>A descriptive title such as "Assessment wanted for HTML image basics 1 skill test".</li>
		<li>Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.</li>
		<li>A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.</li>
		<li>A link to the actual task or assessment page, so we can find the question you want help with.</li>
	</ul>
	</li>
</ol>
