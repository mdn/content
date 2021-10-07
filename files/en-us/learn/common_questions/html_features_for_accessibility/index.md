---
title: What HTML features promote accessibility?
slug: Learn/Common_questions/HTML_features_for_accessibility
tags:
  - Accessibility
  - Beginner
  - HTML
  - Learn
  - NeedsContent
---
<p>{{draft}}</p>

<p>The following content describes specific features of HTML that can be used to make a web page more accessible to people with different disabilities.</p>

<h2 id="Tabbing">Tabbing</h2>

<p>Users who do not or cannot use pointing devices can <kbd>Tab</kbd> through links and, as such, links should be in a logical tabbing order. The <code>tabindex</code> attribute allows you to define this order. If the HTML is linear, as it should be, a logical tabbing order should automatically fall into place.</p>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;&lt;a href="here.html" tabindex="1"&gt;Here&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="there.html" tabindex="3"&gt;There&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="anywhere.html" tabindex="2"&gt;Anywhere&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>In this example (which is used purely as a demonstration—do not do this), tabbing would jump from “Here” to “Anywhere” to “There”.</p>

<h2 id="Link_Titles">Link Titles</h2>

<p>If you have a link that isn’t self-descriptive, or the link destination could benefit from being explained in more detail, you can add information to a link using the <code>title</code> attribute.</p>

<pre class="brush: html">&lt;p&gt;I'm really bad at writing link text. &lt;a href="inept.html" title="Why I'm rubbish at writing link text: An explanation and an apology."&gt;Click here&lt;/a&gt; to find out more.&lt;/p&gt;</pre>

<h2 id="Access_Keys">Access Keys</h2>

<p><em>Access keys</em> provide easier navigation by assigning a <em>keyboard shortcut</em> to a link, which will usually gain focus when the user presses <kbd>Alt</kbd> or <kbd>Ctrl</kbd> + the access key. The exact key combination varies by platform.</p>

<pre class="brush: html">&lt;a href="somepage.html" accesskey="s"&gt;Some page&lt;/a&gt;</pre>

<h2 id="Skip_Links">Skip Links</h2>

<p>To aid tabbing, you can supply links that allow users to jump over chunks of your web page. You might want to allow someone to jump over a plethora of navigation links, for example, so they can just read a page’s main content rather than cycle through all of the links.</p>

<pre class="brush: html">&lt;header&gt;
  &lt;h1&gt;The Heading&lt;/h1&gt;
  &lt;a href="#content"&gt;Skip to content&lt;/a&gt;
&lt;/header&gt;

&lt;nav&gt;
  &lt;!-- navigation stuff --&gt;
&lt;/nav&gt;

&lt;section id="content"&gt;
  &lt;!--your content --&gt;
&lt;/section&gt;</pre>
