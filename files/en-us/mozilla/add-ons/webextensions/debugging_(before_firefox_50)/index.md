---
title: Debugging (before Firefox 50)
slug: Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)
tags:
  - Debugging
  - Firefox
  - Guide
  - Mozilla
  - Deprecated
  - WebExtensions
---
{{AddonSidebar}}

> **Note:** This article explains how you can debug extensions using WebExtension APIs on versions of Firefox earlier than version 50.
>
> If you're using Firefox 50 or later, see the [main article on debugging extensions](https://extensionworkshop.com/documentation/develop/debugging/).

This article explains how you can use the built-in Firefox developer tools to debug extensions developed with WebExtension APIs. If you're trying to debug an add-on developed with the Add-on SDK, please see the guide to the [Add-on Debugger](/en-US/docs/Mozilla/Add-ons/Add-on_Debugger).

## A simple example: notify-link-clicks-i18n

To show how to connect the debugging tools, we'll use a simple example extension called "notify-link-clicks-i18n". The code is in the [Extensions examples repository on GitHub](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n).

The extension consists of:

- a background script, "background-script.js"
- a content script, "content-script.js", that is injected into all pages.

The content script listens for clicks on links in the page: when a click on a link happens, the content script sends a message to the background script containing the link's href.

When the background script receives the message, it displays a notification containing the href.

Here's "content-script.js":

```js
/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("content script sending message");
  chrome.runtime.sendMessage({"url": target.href});
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener("click", notifyExtension);
```

Here's "background-script.js":

```js
/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {
  console.log("background script received message");
  var title = chrome.i18n.getMessage("notificationTitle");
  var content = chrome.i18n.getMessage("notificationContent", message.url);
  chrome.notifications.create({
    "type": "basic",
    "iconUrl": chrome.extension.getURL("icons/link-48.png"),
    "title": title,
    "message": content
  });
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
chrome.runtime.onMessage.addListener(notify);
```

If you want to follow along, clone the [webextensions-examples](https://github.com/mdn/webextensions-examples) repository, then [package and install](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox) "notify-link-clicks-i18n".

## The Browser Toolbox

We'll use the Browser Toolbox to debug the extension.

### Prerequisites

Before you can use the Browser Toolbox, you have to get set up.

- open the Firefox Developer Tools
- open the [Settings](/en-US/docs/Tools/Settings) for the tools
- under Advanced settings, make sure that the following two settings are checked:

  - _Enable browser chrome and add-on debugging toolboxes_
  - _Enable remote debugging_

{{EmbedYouTube("LJAM2vXJ790")}}

### Opening the Browser Toolbox

Next, we'll open the Browser Toolbox.

- open the Web Developer menu in Firefox, and select the "Browser Toolbox" (note: _not_ "Browser Console").
- you'll be presented with a warning dialog: click OK.

The Browser Toolbox will then open in a new window. The main Firefox window will be switched into the foreground, so you'll have to click on the Browser Toolbox to bring it back in front:

{{EmbedYouTube("fZ492zAAy3o")}}

In Firefox, a "Toolbox" is the name for a separate window containing a set of tools in a tabbed interface, like this:

![](browser-toolbox.png)The above toolbox contains five tools, which you can switch between using the tabs at the top of the window: "Inspector", "Console", "Debugger", "Style Editor", and "Scratchpad". We'll be using only two of these tools: "Console" and "Debugger".

### Viewing log output

We can use the Console to see log output: this includes messages from:

- background scripts
- scripts running in popups
- content scripts.

It includes messages your code logs using the [Console API](/en-US/docs/Web/API/console) as well as any error messages logged by the JavaScript engine as it executes your code.

Let's try it with the example above: select the Console tab in the Browser Toolbox, open a web page, and click a link to see messages logged from the content script and the background script:

{{EmbedYouTube("Qpx0n8gP3Qw")}}

One problem here is that the console shows you messages from the entire browser, so there can be a lot of noise. Read about [how to filter log messages](/en-US/docs/Tools/Web_Console/Console_messages#filtering_and_searching) for help with this.

### Debugging JavaScript

With the Browser Toolbox you can use the JavaScript Debugger to set breakpoints in background scripts and scripts running in browser or page action popups.

Background scripts are always available in the debugger if the extension is installed and enabled. Popup scripts only become visible when the popup is opened. If you need to access popup scripts as soon as they load, try adding a [`debugger`](/en-US/docs/Web/JavaScript/Reference/Statements/debugger) ; statement at the start of the script.

To use the JavaScript Debugger, select the Debugger tab in the Browser Toolbox. This will list every source file in the entire browser, so the next job is to find your extension's code: do this by [clicking in the Search box and typing the name of the source](/en-US/docs/Tools/Debugger/How_to/Search).

Once you've found your source, you can set breakpoints, step through code, and do [everything else you'd expect to be able to do in a debugger](/en-US/docs/Tools/Debugger).

{{EmbedYouTube("3edeJiG38ZA")}}

### JavaScript command line interpreter

The Console includes a [command line interpreter](/en-US/docs/Tools/Web_Console/The_command_line_interpreter) that you can use to interrogate and manipulate the state of a running program. This feature is commonly used when the Console is attached to a web page, but is generally hard to use with the Browser Toolbox, because the scope of that console is the entire browser rather than the specific extension you're trying to debug.

However, there's a trick that can help you with that: while the Debugger is paused at a breakpoint, the scope of the Console is the scope at the point in the program in which the Debugger is paused. So if you have hit a breakpoint in your extension's code, you can interact directly with your extension: you can call extension functions, reassign variable values, and so on.

This feature is especially useful in combination with another feature: the [split console](/en-US/docs/Tools/Web_Console/Split_console). This enables you to split the toolbox in half: one half contains the Console, and the other half contains a different tool (in this case, the JavaScript Debugger):

{{EmbedYouTube("xprf58qOtLY")}}

### Debugging content scripts

One big limitation of the Browser Toolbox is this: if you are developing with [multiprocess Firefox](/en-US/docs/Mozilla/Firefox/Multiprocess_Firefox), you can't use the Browser Toolbox to attach the JavaScript Debugger to content scripts.

In multiprocess Firefox, the browser is split into (at least) two processes: one to run the browser's own UI and system code, and one (or more) _content processes_, which run scripts loaded from web pages. The Browser Toolbox attaches to the first of these processes: but content scripts run in content processes, so they just don't appear in the Browser Toolbox's source listing.

To debug content scripts in multiprocess Firefox, you'll need to use the Browser Content Toolbox. The Browser Content Toolbox is just like the Browser Toolbox, except that it attaches the developer tools to the browser's content process, so content scripts are visible.

Note that content scripts won't appear in the source listing until they are loaded. If you need to access them as soon as they load, try adding a [`debugger;`](/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement at the start of your script.

> **Note:** You only need, and can only access, the Browser Content Toolbox if you are developing against multiprocess Firefox.

> **Warning:** Enabling worker debugging in Toolbox Options will disable Browser Content Toolbox debugging, [Bug 1236892](https://bugzilla.mozilla.org/show_bug.cgi?id=1236892) should address this.

{{EmbedYouTube("xAt3Q0PgJP4")}}

### Debugging popups

Starting in Firefox 47, you can use the Browser Toolbox to debug the content of popups. This is a three-step process:

- disable autohide for panels
- open the popup
- select the document containing the popup

{{EmbedYouTube("EEU4NeAS1s4")}}

#### Disable autohide

The problem with debugging panels in general is that they are hidden when you click outside them. So the first step is to disable this behavior. In the Browser Toolbox, click the icon that looks like four little squares:

![](disable-autohide.png)Now, when you open a panel in Firefox, it will stay open until you press Escape.

> **Note:** This change applies to [built-in browser popups](/en-US/docs/Tools/Browser_Toolbox#debugging_popups), like the Hamburger menu, as well as extension popups.
>
> Also note that the change is persistent, even across browser restarts. We're working on addressing this in [bug 1251658](https://bugzilla.mozilla.org/show_bug.cgi?id=1251658), but until then you may prefer to re-enable autohide by clicking the button again before you close the Browser Toolbox.
>
> Internally, this button just toggles the `ui.popup.disable_autohide` preference, which you can toggle manually using about:config.

#### Open the popup

Next, open the popup. You can then switch back to the Browser Toolbox, and the panel will stay open.

#### Select the popup's frame

The popup is loaded into its own frame. So next, select your popup's document with the Browser Toolbox's [frame selection button](/en-US/docs/Tools/Browser_Toolbox#targeting_a_document):![](frame-selection.png)The document will be called something like

    moz-extension://<some-uuid>/path/to/your-popup.html

{{EmbedYouTube("9jdHDCKIN-U")}}

Now the scope of the toolbox is the popup. In the Inspector, you can examine and modify the popup's HTML and CSS. In the Debugger, you can search for any scripts loaded into the popup, and set breakpoints in them.

## What about the Add-on Debugger?

The [Add-on Debugger](/en-US/docs/Mozilla/Add-ons/Add-on_Debugger) is intended to be the future of add-on debugging in Firefox.

Its big advantage over the Browser Toolbox is that it only shows you your extension's files, so it's much easier to find your code. However, at the moment you can't see console messages from your extension in the Add-on Debugger, so the Browser Toolbox is more functional.
