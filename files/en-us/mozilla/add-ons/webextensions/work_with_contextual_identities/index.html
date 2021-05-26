---
title: Work with contextual identities
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
tags:
  - Add-ons
  - Beginner
  - Contextual identities
  - Extensions
  - How-to
  - WebExtensions
---
<p>{{AddonSidebar}}</p>

<p>Many people need or want to interact with the web using multiple personas. They may have accounts for web-based work and personal email. They might sign out of their social media accounts before accessing online shopping, to ensure that any tracking scripts on the shopping sites can't pick up their social media activity. To address these requirements, users often end up working with a standard and private browser window or two different browsers.</p>

<p>To address this need, Firefox includes a feature known as contextual identities, container tabs or account containers. This feature enables the creation of a cookie container for each of the identities the user wants to use in their browser. Tabs can be associated with one of these identities, keeping cookies separate from those of other identities in the browser. The practical upshot of this is that, for example, a user could have a personal and work identity. They can then use the personal identity in one tab, where they sign into their personal web mail, and the work identity in another tab, where they sign into their work web mail.</p>

<p>For more background on this feature, see:</p>

<ul>
 <li><a href="https://blog.mozilla.org/firefox/introducing-firefox-multi-account-containers/">Put your multiple online personalities in Firefox Multi-Account Containers</a></li>
 <li><a href="https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers">Security/Contextual Identity Project/Containers</a></li>
 <li><a href="https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&amp;as=u&amp;redirectslug=containers-experiment&amp;utm_source=inproduct">Firefox support article on containers</a></li>
</ul>

<h2 id="APIs_for_working_with_contextual_identities">APIs for working with contextual identities</h2>

<p>To use the contextual identity features in extensions, you’ll work with two APIs:</p>

<ul>
 <li>{{WebExtAPIRef("contextualIdentities")}} which enable an extension to add, query, update, and delete contextual identities.</li>
 <li>{{WebExtAPIRef("tabs")}} or more specifically {{WebExtAPIRef("tabs.create")}} which enables you to create a tab that uses a contextual identity’s container (cookies store).</li>
</ul>

<h2 id="Permissions">Permissions</h2>

<p>To use the {{WebExtAPIRef("contextualIdentities")}} API you need to include the "contextualIdentities" <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> in your <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> file. You don't need the "tabs" permission to use {{WebExtAPIRef("tabs.create")}} however; you do need the "cookies" permission to specify the cookie container you want the tab to use.</p>

<h2 id="Example_walkthrough">Example walkthrough</h2>

<p>The example extension <a href="https://github.com/mdn/webextensions-examples/tree/master/contextual-identities">contextual-identities</a> provides a toolbar button with a popup that lists the identities in the browser. For each identity, the extension provides options to create a new tab using it’s cookies container or remove all of the identity’s tabs.</p>

<p>Here is a short video of the extension in action:</p>

<p>{{EmbedYouTube("SgLCS7_ppas")}}</p>

<h3 id="manifest.json">manifest.json</h3>

<p>The main features of the <a href="https://github.com/mdn/webextensions-examples/blob/master/contextual-identities/manifest.json">manifest.json</a> file are:</p>

<ul>
 <li>the permissions request:
  <pre class="brush: json">  "permissions": [
      "contextualIdentities",
      "cookies"
  ],</pre>
 </li>
 <li>specification of the toolbar button (browseAction) that provides access to the extension’s features:
  <pre class="brush: json">  "browser_action": {
    "browser_style": true,
    "default_title": "Contextual Identities",
    "default_popup": "context.html",
    "default_icon": {
      "128": "identity.svg"
    }</pre>
 </li>
</ul>

<h2 id="context.html">context.html</h2>

<p>A popup on the toolbar button provides the extension’s user interface. <a href="https://github.com/mdn/webextensions-examples/blob/master/contextual-identities/context.html">context.html</a> implements this popup, but it’s just a shell into which the context.js script writes the list of contextual identities and their related options.</p>

<pre class="brush: html">  &lt;body&gt;
    &lt;div class="panel"&gt;
      &lt;div id="identity-list"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;script src="context.js"&gt;&lt;/script&gt;
  &lt;/body&gt;</pre>

<h2 id="context.js">context.js</h2>

<p>All the features of the extension are implemented through <a href="https://github.com/mdn/webextensions-examples/blob/master/contextual-identities/context.js">context.js</a>, which is invoked whenever the toolbar popup is displayed.</p>

<p>The script first gets the 'identity-list' div from context.html.</p>

<pre class="brush: json">var div = document.getElementById('identity-list');</pre>

<p>It then checks whether the contextual identities feature is turned on in the browser. If it's not on, information on how to activate it is added to the popup.</p>

<pre class="brush: json">if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {</pre>

<p>Firefox installs with the contextual identity feature turned off, it’s turned on when an extension using the contextualIdentities API is installed. However, it's still possible for the user to turn the feature off, using an option on the preferences page (about:preferences), hence the need for the check.</p>

<p>The script now uses contextualIdentities.query to determine whether there are any contextual identities defined in the browser. If there are none, a message is added to the popup and the script stops.</p>

<pre class="brush: json">  browser.contextualIdentities.query({})
    .then((identities) =&gt; {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }</pre>

<p>If there are contextual identities present—Firefox comes with four default identities—the script loops through each one adding its name, styled in its chosen color, to the &lt;div&gt; element. The function <code>createOptions()</code> then adds the options to “create” or “close all” to the &lt;div&gt; before it’s added to the popup.</p>

<pre class="brush: json">     for (let identity of identities) {
       let row = document.createElement('div');
       let span = document.createElement('span');
       span.className = 'identity';
       span.innerText = identity.name;
       span.style = `color: ${identity.color}`;
       console.log(identity);
       row.appendChild(span);
       createOptions(row, identity);
       div.appendChild(row);
     }
  });
}

function createOptions(node, identity) {
  for (let option of ['Create', 'Close All']) {
    let a = document.createElement('a');
    a.href = '#';
    a.innerText = option;
    a.dataset.action = option.toLowerCase().replace(' ', '-');
    a.dataset.identity = identity.cookieStoreId;
    a.addEventListener('click', eventHandler);
    node.appendChild(a);
  }
}</pre>

<p>The script now waits for the user to select an option in the popup.</p>

<pre class="brush: js">function eventHandler(event) {</pre>

<p>If the user clicks the option to create a tab for an identity, one is opened using tabs.create by passing the identity’s cookie store ID.</p>

<pre class="brush: json">  if (event.target.dataset.action == 'create') {
    browser.tabs.create({
      url: 'about:blank',
      cookieStoreId: event.target.dataset.identity
    });
  }</pre>

<p>If the user selects the option to close all tabs for the identity, the script performs a tabs.query for all tabs that are using the identity’s cookie store. The script then passes this list of tabs to <code>tabs.remove</code>.</p>

<pre class="brush: json">  if (event.target.dataset.action == 'close-all') {
    browser.tabs.query({
      cookieStoreId: event.target.dataset.identity
    }).then((tabs) =&gt; {
      browser.tabs.remove(tabs.map((i) =&gt; i.id));
    });
  }
  event.preventDefault();
}</pre>

<h2 id="Learn_more">Learn more</h2>

<p>If you want to learn more about the contextualIdentities API, check out:</p>

<ul>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities">contextualIdentities API reference</a>.</li>
 <li><a href="https://github.com/mozilla/multi-account-containers/#readme">Multi-Account Containers</a> extension source code. This is code for the <a href="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/">Firefox Multi-Account Containers</a> extension. This extension provides users with enhanced functionality for contextual identities, such as the ability to long-click the new tab button and then select the identity to use in the new tab. It really showcases the capabilities offered by contextual identities and is well worth a look.</li>
</ul>
