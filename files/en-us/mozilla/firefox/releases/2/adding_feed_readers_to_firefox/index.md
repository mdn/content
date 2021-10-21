---
title: Adding feed readers to Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
tags:
  - Configuration management
---
<div>{{FirefoxSidebar}}</div>

<p>Starting with Firefox 2, Firefox has support for selecting different RSS or Atom feed readers to use when you try to read a feed. This article provides information about how to add support for additional readers not supported by default.</p>

<h2 id="Adding_a_new_web-based_feed_reader">Adding a new web-based feed reader</h2>

<h3 id="Adding_a_feed_reader_from_a_web_application">Adding a feed reader from a web application</h3>

<p>Support for adding feed readers from the web was removed from the HTML5 spec, and Firefox support is scheduled for removal in Firefox 62. {{Deprecated_Inline}}</p>

<p>In older versions, JavaScript code on the web can add a feed reader easily, using the {{domxref("window.navigator.registerContentHandler", "navigator.registerContentHandler()")}} function, like this:</p>

<pre class="brush: js">navigator.registerContentHandler("application/vnd.mozilla.maybe.feed",
                                 "https://www.example.com/?feed-feed=%s",
                                 "My Feed Reader");
</pre>

<p>Note that web content is limited to adding handler URLs which have the same origin as the page performing the call.</p>

<h3 id="Adding_a_new_feed_reader_manually">Adding a new feed reader manually</h3>

<p>Support for adding new feed readers was removed in Firefox 63. {{deprecated_inline}}.</p>

<p>Prior to Firefox 63, to add support for a new web-based feed reader, you would need to add three new preferences:</p>

<dl>
 <dt><code>browser.contentHandlers.types.<em>number</em>.title</code></dt>
 <dd>The name of the feed reader.</dd>
 <dt><code>browser.contentHandlers.types.<em>number</em>.type</code></dt>
 <dd>For a feed reader, this should be "application/vnd.mozilla.maybe.feed".</dd>
 <dt><code>browser.contentHandlers.types.<em>number</em>.uri</code></dt>
 <dd>The URI of the feed reader. Use "%s" where the URL of the feed should be inserted.</dd>
</dl>

<p><code><em>number</em></code> should be replaced with the next highest unique number that hasn't already been used. For example, if you want to add a new feed reader called "Easy Reader", and there are already defined content handlers with numbers 0 through 4, you should use a <code><em>number</em></code> of 5, like this:</p>

<ul>
 <li><code>browser.contentHandlers.types.5.title</code>: Easy Reader</li>
 <li><code>browser.contentHandlers.types.5.type</code>: application/vnd.mozilla.maybe.feed</li>
 <li><code>browser.contentHandlers.types.5.uri</code>: http://www.theeasyreaderurl.com?feed=%s</li>
</ul>

<p>You can add these preferences by hand, by visiting <code>about:config</code>.</p>

<h3 id="Adding_a_new_feed_reader_application">Adding a new feed reader application</h3>

<p>The easiest way to do this is to use the provided user interface, by using the Feeds panel in the Preferences (or Options, depending on your platform) window.</p>

<h3 id="See_also">See also</h3>

<ul>
 <li>{{ domxref("window.navigator.registerContentHandler()") }}</li>
</ul>
