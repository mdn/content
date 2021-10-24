---
title: Work with the Bookmarks API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
tags:
  - Add-ons
  - Beginner
  - Bookmarks
  - Extensions
  - How-to
  - WebExtensions
---
<p>{{AddonSidebar}}</p>

<p>Bookmarks enable users to collect and organize lists of web pages, so they can easily get back to their favorites. Using the Bookmarks API, your extensions can manipulate bookmarks in much the same way users can.</p>

<h2 id="Permissions">Permissions</h2>

<p>To make use of the Bookmarks API, you need to ask for the <code>"bookmarks"</code> permission in your extension’s manifest.json file:</p>

<pre class="brush: json">"permissions": [
  "bookmarks"
],</pre>

<h2 id="Features">Features</h2>

<p>The Bookmarks API lets your extension do the things users can do with bookmarks and includes functions for:</p>

<ul>
 <li>Basic bookmark item manipulation, offering:
  <ul>
   <li>add ({{WebExtAPIRef("bookmarks.create")}}).</li>
   <li>retrieve ({{WebExtAPIRef("bookmarks.get")}}).</li>
   <li>update ({{WebExtAPIRef("bookmarks.update")}}).</li>
   <li>move ({{WebExtAPIRef("bookmarks.move")}}).</li>
   <li>delete ({{WebExtAPIRef("bookmarks.remove")}}).</li>
   <li>search ({{WebExtAPIRef("bookmarks.search")}}).</li>
  </ul>
 </li>
 <li>Obtaining a list of recently added bookmarks ({{WebExtAPIRef("bookmarks.getRecent")}}).</li>
 <li>Bookmark folder tree manipulation to:
  <ul>
   <li>get tree information ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, and {{WebExtAPIRef("bookmarks.getSubTree")}}).</li>
   <li>add branches ({{WebExtAPIRef("bookmarks.create")}}).</li>
   <li>delete nodes ({{WebExtAPIRef("bookmarks.removeTree")}}).</li>
   <li>move nodes ({{WebExtAPIRef("bookmarks.move")}}).</li>
  </ul>
 </li>
 <li>Listening for bookmarks (or bookmark tree folders) events that:
  <ul>
   <li>add ({{WebExtAPIRef("bookmarks.onCreated")}}).</li>
   <li>change ({{WebExtAPIRef("bookmarks.onChanged")}}).</li>
   <li>move ({{WebExtAPIRef("bookmarks.onMoved")}}).</li>
   <li>reorder ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).</li>
   <li>remove ({{WebExtAPIRef("bookmarks.onRemoved")}}).</li>
  </ul>
 </li>
 <li>Listening for bookmark imports, which can be used to suspend other bookmark processing while an import is in progress:
  <ul>
   <li>import started ({{WebExtAPIRef("bookmarks.onImportBegan")}}).</li>
   <li>import finished ({{WebExtAPIRef("bookmarks.onImportEnded")}}).</li>
  </ul>
 </li>
</ul>

<h2 id="Example_walkthrough">Example walkthrough</h2>

<p>To gain an understanding of how to work with the Bookmarks API let’s take a look at the <a href="https://github.com/mdn/webextensions-examples/tree/master/bookmark-it">bookmark-it</a> example. This example adds a toolbar icon ({{WebExtAPIRef("browserAction")}}) which, when clicked, adds or removes the current page from bookmarks. If the page is bookmarked (or removed from bookmarks) in some other way, the icon is updated to show the state of the page’s bookmarking.</p>

<p>This video shows the extension in action:</p>

<p>{{EmbedYouTube("hCDN0FotiFw")}}</p>

<h3 id="manifest.json">manifest.json</h3>

<p>The <a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/manifest.json">manifest.json</a> describes the extension:</p>

<pre class="brush: json">{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/bookmark-it",</pre>

<p>Defines the icons that’ll be used to represent the extension, in places such as the add-on manager.</p>

<pre class="brush: json">  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },</pre>

<p>Requests permissions. <code>"bookmarks"</code> is requested to enable use of the Bookmarks API. <code>"tabs"</code> is requested so that the active tab’s URL and title can be read and used to create or find the page’s bookmark. The need for the Tabs API to access these details means that you’re unlikely to use the Bookmark API without the Tabs API.</p>

<pre class="brush: json">  "permissions": [
    "bookmarks",
    "tabs"
  ],</pre>

<p>Sets up the basic toolbar button details. Most of the button’s features will be set up in code after the page’s bookmark status is known.</p>

<pre class="brush: json">  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },</pre>

<p>Defines the background script that’ll add and remove the page’s bookmark and set the characteristics of the toolbar button.</p>

<pre class="brush: json">  "background": {
    "scripts": ["background.js"]
  }

}</pre>

<h3 id="background.js">background.js</h3>

<p>As with any background script, <a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js">background.js</a> is run as soon as the extension is started. Initially the script calls <code>updateActiveTab()</code> that starts by obtaining the <code>Tabs</code> object for the current tab, using {{WebExtAPIRef("tabs.query")}}, and passing the object to <code>updatetab()</code> with this code:</p>

<pre class="brush: js">  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);</pre>

<p><code>updatetab()</code> first passes the active tab’s URL to <code>isSupportedProtocol()</code>:</p>

<pre class="brush: js">  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {</pre>

<p><code>isSupportedProtocol()</code> determines if the URL displayed in the active tab is one that can be bookmarked. To extract the protocol from the tab’s URL, the extension takes advantage of the <a href="/en-US/docs/Web/API/HTMLAnchorElement">HTMLAnchorElement</a> by adding the tab’s URL to an <code>&lt;a&gt;</code> element and then getting the protocol using the <code>protocol</code> property.</p>

<pre class="brush: js">  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }</pre>

<p>If the protocol is one supported by bookmarks, the extension determines if the tab’s URL is already bookmarked and if it is, calls <code>updateIcon()</code>:</p>

<pre class="brush: js">      var searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) =&gt; {
        currentBookmark = bookmarks[0];
        updateIcon();</pre>

<p><code>updateIcon()</code> sets the toolbar button’s icon and title, depending on whether the URL is bookmarked or not.</p>

<pre class="brush: js">function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark ? {
      19: "icons/star-filled-19.png",
      38: "icons/star-filled-38.png"
    } : {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
    tabId: currentTab.id
  });
}</pre>

<p>With the toolbar button initialized, the extension starts listening for a click on the toolbar button, calling <code>toggleBookmark()</code> when that happens.</p>

<pre class="brush: js">browser.browserAction.onClicked.addListener(toggleBookmark);</pre>

<p><code>toggleBookmark()</code> uses the result from the search made by <code>updateTabs()</code>, which looks for the presence of the URL in a bookmark, to determine whether to remove or add a bookmark for the current URL.</p>

<pre class="brush: js">function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({title: currentTab.title, url: currentTab.url});
  }
}</pre>

<p>To update the toolbar icon, the extension listens for the creation or removal of bookmarks. This approach has the benefit of capturing both the bookmark update made by the extension and any update made by the user outside the extension.</p>

<pre class="brush: js">// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);</pre>

<p>Finally, the extension listens for a change to the active tab’s URL, or the user switching to another tab or window. These actions could change the viewed URL and therefore the status of the extension’s toolbar icon.</p>

<pre class="brush: js">// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);</pre>

<h2 id="Learn_more">Learn more</h2>

<p>If you want to learn more, check out the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks">Bookmarks API reference</a>.</p>
