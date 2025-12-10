---
title: Anatomy of an extension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
page-type: guide
sidebar: addonsidebar
---

An extension consists of a collection of files, packaged for distribution and installation. This article describes the files that may be present in an extension.

## manifest.json

This file is the only one that must be present in every extension. It contains basic metadata, such as its name, version, and required permissions.

The manifest can also contain pointers to several other file types:

- [Background scripts](#background_scripts_2)
  - : Scripts that respond to browser events.
- Icons
  - : For the extension and any buttons it might define.
- [Sidebars, popups, and options pages](#sidebars_popups_and_options_pages_2)
  - : HTML documents that provide content for various user interface components.
- [Content scripts](#content_scripts_2)
  - : JavaScript included with your extension, which your extension injects into web pages.
- [Web-accessible resources](#web_accessible_resources)
  - : Packaged content made accessible to web pages and content scripts.

![The components of a web extension. The manifest.json must be present in all extensions. It provides pointers to background pages, content scripts, browser actions, page actions, options pages, and web accessible resources. Background pages are written in HTML and JavaScript. Content scripts are written in JavaScript and CSS. The user clicks an icon to trigger browser actions and page actions, which can display a popup consisting of HTML, CSS, and JavaScript. Options pages consist of HTML, CSS, and JavaScript.](webextension-anatomy.png)

See the [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) reference page for all the details.

Along with those listed in the manifest, an extension can include additional [Extension pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) and supporting files.

## Background scripts

Extensions often need to respond to events that occur in the browser independently of the lifetime of any particular web page or browser window. That is what background scripts are for.

Background scripts can be persistent or non-persistent.

- Persistent background scripts load as soon as the extension loads and stay loaded until the extension is disabled or uninstalled. Only Manifest V2 extensions can use persistent background scripts.
- Non-persistent background scripts load when needed to respond to an event and unload when they become idle. Manifest V3 extensions use non-persistent background scripts, and Manifest V2 extensions can use this behavior.

You can use any of the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API) in the script, if you've requested the necessary [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

See the [background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) article to learn more.

## Sidebars, popups, and options pages

Your extension can include user interface components defined using an HTML document:

- [Sidebar](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
  - : A pane displayed at the left of the browser window, next to the web page.
- [Popup](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  - : A dialog displayed when the user clicks on a [toolbar button](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) or [address bar button](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Options](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  - : A page shown when the user accesses your add-on's preferences in the browser's native add-ons manager.

For each of these components, you create an HTML file and point to it using a specific property in [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json). The HTML file can include CSS and JavaScript files, just like a standard web page.

All of these are [Extension pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). Unlike a normal web page, your extension's JavaScript can use the same privileged WebExtension APIs as your background script.

## Extension pages

You can also include HTML documents in your extension that are not attached to some predefined user interface component. Unlike the documents you might provide for sidebars, popups, or options pages, these don't have an entry in `manifest.json`. However, they do also get access to all the same privileged WebExtension APIs as your background script.

You'd typically load a page like this using {{WebExtAPIRef("windows.create()")}} or {{WebExtAPIRef("tabs.create()")}}.

See [Extension pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) to learn more.

## Content scripts

Use content scripts to access and manipulate web pages. Content scripts are loaded into web pages and run in the context of that particular page.

Content scripts are extension-provided scripts that run in the context of a web page; this differs from scripts loaded by the page itself, including those provided in {{HTMLElement("script")}} elements within the page.

Content scripts can access and manipulate the page's DOM, like any other scripts loaded by the page. However, unlike normal page scripts, content scripts can:

- Use a small subset of the [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API).
- [Exchange messages with their background scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts), which a
  content script can use to request the background script to do something using a WebExtension API.

Content scripts cannot directly access normal page scripts, but can exchange messages with them using the standard [`window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) API.

Your extension can also inject CSS into web pages using the mechanism used to inject content scripts.

See the [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) article to learn more.

## Web accessible resources

Web accessible resources are resources—such as images, HTML, CSS, and JavaScript—that you include in the extension and want to make accessible to content scripts and page scripts. Resources made web-accessible can be referenced by page scripts and content scripts using a special URI scheme.

For example, if a content script wants to insert images into web pages, you can include them in the extension and make them web-accessible. Then the content script could create and append [`img`](/en-US/docs/Web/HTML/Reference/Elements/img) tags which reference the images via the `src` attribute.

To learn more, see the documentation for the [`"web_accessible_resources"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) `manifest.json` key.
