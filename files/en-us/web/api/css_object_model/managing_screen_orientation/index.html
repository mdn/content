---
title: Managing screen orientation
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
tags:
  - API
  - Advanced
  - CSSOM View
  - Guide
  - Screen Orientation
---
<p>{{DefaultAPISidebar("Screen Orientation API")}}{{SeeCompatTable}}</p>

<p>Screen orientation is something slightly different than <a href="/en-US/docs/Web/API/Detecting_device_orientation">device orientation</a>. Even if a device doesn't have the capacity to detect its own orientation, a screen always has one. And if a device is able to know its orientation, it's good to have the ability to control the screen orientation in order to preserve or adapt the interface of a web application.</p>

<p>There are several ways to handle screen orientation, both with CSS and JavaScript. The first is the <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#orientation">orientation media query</a>. This lets content adjust its layout using CSS, based on whether the browser window is in landscape mode (that is, its width is greater than its height) or portrait mode (its height is greater than its width).</p>

<p>The second way is the JavaScript Screen orientation API that can be used to get the current orientation of the screen itself and eventually lock it.</p>

<h2 id="Adjusting_layout_based_on_the_orientation">Adjusting layout based on the orientation</h2>

<p>One of the most common cases for orientation changes is when you want to revise the layout of your content based on the orientation of the device. For example, perhaps you want a button bar to stretch along the longest dimension of the device's display. By using a media query, you can do this easily and automatically.</p>

<p>Let's have an example with the following HTML code</p>

<pre class="brush: html">&lt;ul id="toolbar"&gt;
  &lt;li&gt;A&lt;/li&gt;
  &lt;li&gt;B&lt;/li&gt;
  &lt;li&gt;C&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut interdum tristique dapibus. Nullam quis malesuada est.&lt;/p&gt;
</pre>

<p>CSS relies on the orientation media query to handle specific styles based on the screen orientation</p>

<pre class="brush: css">/* First let's define some common styles */

html, body {
  width : 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font   : 1em sans-serif;
  margin : 0;
  padding: .5em;
}

ul {
  list-style: none;

  font   : 1em monospace;
  margin : 0;
  padding: .5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin : 0;
  padding: 0.5em;
  background: white;
}
</pre>

<p>Once we have some common styles we can start defining a special case for the orientation</p>

<pre class="brush: css">/* For portrait, we want the tool bar on top */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* For landscape, we want the tool bar stick on the left */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: .5em;
  }
}
</pre>

<p>And here's the result</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Portrait</th>
   <th scope="col">Landscape</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <div>{{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }}</div>
   </td>
   <td>
    <div>{{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }}</div>
   </td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Note:</strong> The orientation media query actually applies based on the orientation of the browser window (or iframe) not the orientation of the device.</p>
</div>

<h2 id="Locking_the_screen_orientation">Locking the screen orientation</h2>

<div class="warning">
<p><strong>Warning:</strong> This API is experimental and currently available on <a href="/en-US/docs/Mozilla/Firefox_OS">Firefox OS</a> and <a href="/en-US/docs/Mozilla/Firefox_for_Android">Firefox for Android</a> with a <code>moz</code> prefix, and for Internet Explorer on Windows 8.1 and above  with a <code>ms</code> prefix.</p>
</div>

<p>Some devices (mainly mobile devices) can dynamically change the orientation of the screen based on their own orientation, ensuring that the user will always be able to read what's on the screen. While this behavior is perfectly suited for text content, there is some content that can be negatively affected by such a change. For example, games based on the orientation of the device could be messed up by such a change of the orientation.</p>

<p>The Screen Orientation API is made to prevent or handle such a change.</p>

<h3 id="Listening_orientation_change">Listening orientation change</h3>

<p>The {{event("orientationchange")}} event is triggered each time the device change the orientation of the screen and the orientation itself can be read with the {{domxref("Screen.orientation")}} property.</p>

<pre class="brush: js">screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});
</pre>

<h3 id="Preventing_orientation_change">Preventing orientation change</h3>

<p>Any web application can lock the screen to suits its own needs. The screen is locked using the {{domxref("Screen.lockOrientation()")}} method and unlocked using the {{domxref("Screen.unlockOrientation()")}}.</p>

<p>The {{domxref("Screen.lockOrientation()")}} accepts a string (or series of strings) to define the kind of lock to apply. Accepted values are: <code>portrait-primary</code>, <code>portrait-secondary</code>, <code>landscape-primary</code>, <code>landscape-secondary</code>, <code>portrait</code>, <code>landscape</code> (See {{domxref("Screen.lockOrientation")}}  to know more about each of those values).</p>

<pre class="brush: js">screen.lockOrientation('landscape');</pre>

<div class="note">
<p><strong>Note:</strong> A screen lock is web application dependent. If application A is locked to <code>landscape</code> and application B is locked to <code>portrait</code>, switching from application A to B or B to A will not fire an {{event("orientationchange")}} event because both applications will keep the orientation they had.</p>

<p>However, locking the orientation can fire an {{event("orientationchange")}} event if the orientation had to be changed to satisfy the lock requirements.</p>
</div>

<h2 id="Firefox_OS_and_Android_Orientation_lock_using_the_manifest">Firefox OS and Android: Orientation lock using the manifest</h2>

<p>For a Firefox OS and Firefox Android (soon to work on Firefox desktop too) specific way to lock orientation, you can set the <a href="/en-US/docs/Web/Apps/Build/Manifest#orientation">orientation</a> field in app's your manifest file, for example:</p>

<pre class="brush: json">"orientation": "portrait"</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("Screen.orientation")}}</li>
 <li>{{domxref("Screen.lockOrientation()")}}</li>
 <li>{{domxref("Screen.unlockOrientation()")}}</li>
 <li>{{domxref("Screen.onorientationchange")}}</li>
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#orientation">The orientation media query</a></li>
 <li><a href="http://hacks.mozilla.org/2009/06/media-queries/">A short introduction to media queries in Firefox 3.5</a></li>
</ul>
