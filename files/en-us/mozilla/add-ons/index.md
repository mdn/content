---
title: Add-ons
slug: Mozilla/Add-ons
tags:
  - Add-ons
  - Extension
  - Extensions
  - Landing
  - Mozilla
---
<p>{{AddonSidebarMain}}</p>

<p><span class="seoSummary">Add-ons allow developers to extend and modify the functionality of Firefox.</span> They are written using standard Web technologies - JavaScript, HTML, and CSS - plus some dedicated JavaScript APIs.</p>

<p>Among other things, an add-on could:</p>

<ul>
 <li>Change the appearance or content of particular websites</li>
 <li>Modify the Firefox user interface</li>
 <li>Add new features to Firefox</li>
</ul>

<p>There are several types of add-ons, but the most common type are extensions.</p>

<h2 id="Developing_extensions">Developing extensions</h2>

<p>In the past, there were several toolsets for developing Firefox extensions, but as of November 2017, extensions must be built using <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions">WebExtensions APIs</a>. Other toolsets, such as overlay add-ons, bootstrapped add-ons, and the Add-on SDK, are no longer supported.</p>

<p>Extensions written using WebExtensions APIs for Firefox are designed to be cross-browser compatible. In most cases, it will run in Chrome, Edge, and Opera with few if any changes. They are also fully compatible with multiprocess Firefox. You can see <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">the APIs currently supported in Firefox and other browsers</a>.</p>

<h3 id="Extension_Workshop">Extension Workshop</h3>

<p>The <a href="https://extensionworkshop.com">Firefox Extension Workshop </a>can help you develop extensions for Firefox and give your users simple, yet powerful ways to customize their browsing experience. You’ll find:</p>

<ul>
 <li><a href="https://extensionworkshop.com/#about">Overview of the Firefox extension features</a></li>
 <li><a href="https://extensionworkshop.com/documentation/develop/">Tools and processes for developing and testing</a></li>
 <li><a href="https://extensionworkshop.com/documentation/publish/">How to publish your extension on addons.mozilla.org or distribute it yourself</a></li>
 <li><a href="https://extensionworkshop.com/documentation/manage/">How to manage your published extension</a></li>
 <li><a href="https://extensionworkshop.com/documentation/enterprise/">An enterprise guide for developing and using extensions</a></li>
 <li><a href="https://extensionworkshop.com/documentation/themes/">How to develop themes for Firefox</a></li>
 <li><a href="https://extensionworkshop.com/community/">Firefox developer communities</a></li>
</ul>

<h3 id="Extensions_for_Firefox_for_Android">Extensions for Firefox for Android</h3>

<p>In 2020, Mozilla will release a new Firefox for Android experience. This new, high-performance browser for Android has been rebuilt from the ground up using GeckoView, Mozilla’s mobile browser engine. We are currently building support for the WebExtensions API on GeckoView.</p>

<h3 id="Migrate_an_existing_extension">Migrate an existing extension</h3>

<p>If you maintain a legacy extension, such as an XUL overlay, bootstrapped, or Add-on SDK-based extension, you can still port it to use WebExtension APIs.  There are some <a href="https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/">porting resources on Firefox Extension Workshop</a>, our site for Firefox-specific development resources.</p>

<p>For more information about transition support, please visit our <a href="//wiki.mozilla.org/Add-ons/developer/communication">wiki page.</a></p>

<h2 id="Publishing_add-ons">Publishing add-ons</h2>

<p><a href="https://addons.mozilla.org">Addons.mozilla.org</a>, commonly known as "AMO," is Mozilla's official site for developers to list add-ons, and for users to discover them. By uploading your add-on to AMO, you can participate in our community of users and creators and find an audience for your add-on.</p>

<p>You are not required to list your add-on on AMO, but your add-on must be signed by Mozilla else users will not be able to install it.</p>

<p>For an overview for the process of publishing your add-on see <a href="https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/">Signing and distributing your add-on</a>.</p>

<h2 id="Other_types_of_add-ons">Other types of add-ons</h2>

<p>In addition to extensions, there are a few other add-on types that allow users to customize Firefox. Those add-ons include:</p>

<ul>
 <li>
  <p><a href="/en-US/docs/Mozilla/Creating_a_spell_check_dictionary_add-on">User dictionaries</a> let you spell-check in different languages.</p>
 </li>
 <li>
  <p><a href="https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack">Language packs</a> let you have more languages available for the user interface of Firefox. </p>
 </li>
</ul>

<h2 id="Contact_us">Contact us</h2>

<p>Check out the <a href="/en-US/docs/Mozilla/Add-ons/Contact_us">contact us</a> page for details on how to get help, keep up to date with add-ons news, and give us feedback.</p>
