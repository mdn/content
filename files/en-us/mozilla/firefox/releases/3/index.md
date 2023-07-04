---
title: Firefox 3 for developers
slug: Mozilla/Firefox/Releases/3
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

If you're a developer trying to get a handle on all the new features in Firefox 3, this is the perfect place to start. This article provides a list of the new articles covering features added to Firefox 3. While it doesn't necessarily cover every little change, it will help you learn about the major improvements.

## New developer features in Firefox 3

### For website and application developers

- [Updating web applications for Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Provides information about changes you may need to make to your website or web application to take advantage of new features in Firefox 3.
- [Online and offline events](/en-US/docs/Web/API/Navigator/onLine)
  - : Firefox 3 supports WHATWG online and offline events, which let applications and extensions detect whether or not there's an active Internet connection, as well as to detect when the connection goes up and down.
- [Web-based protocol handlers](/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers)
  - : You can now register web applications as protocol handlers using the `navigator.registerProtocolHandler()` method.
- [Drawing text using a canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : You can now draw text in a canvas using a non-standardized API supported by Firefox 3.
- [Transform support for canvas](/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox now supports the `transform()` and `setTransform()` methods on canvases.
- [Using microformats](/en-US/docs/Web/HTML/microformats)
  - : Firefox now has APIs for working with microformats.
- [Drag and drop events](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 supports new events that are sent to the source node for a drag operation when the drag begins and ends.
- [Focus management in HTML](/en-US/docs/Web/API/Document/hasFocus)
  - : The new HTML 5 `activeElement` and `hasFocus` attributes are supported.
- Offline resources in Firefox
  - : Firefox now lets web applications request that resources be cached to allow the application to be used while offline.
- [CSS improvements in Firefox 3](/en-US/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 features a number of improvements in its CSS support.
- [DOM improvements in Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 offers a number of new features in Firefox 3's DOM implementation, including support for several Internet Explorer extensions to the DOM.
- [JavaScript 1.8 support](/en-US/docs/New_in_JavaScript_1.8)
  - : Firefox 3 offers JavaScript 1.8.
- [EXSLT support](/en-US/docs/Web/EXSLT)
  - : Firefox 3 provides support for a substantial subset of the [EXSLT](/en-US/docs/Web/EXSLT) extensions to [XSLT](/en-US/docs/Web/XSLT).
- [SVG improvements in Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : SVG support in Firefox 3 has been upgraded significantly, with support for over two dozen new filters, several new elements and attributes, and other improvements.
- [Animated PNG graphics](/en-US/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 supports the animated PNG (APNG) image format.

### For XUL and extension developers

#### Notable changes and improvements

- [Updating extensions for Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Provides a guide to the things you'll need to do to update your extension to work with Firefox 3.
- [XUL improvements in Firefox 3](/en-US/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 offers a number of new XUL elements, including new sliding scales, the date and time pickers, and spin buttons.
- [Templates in Firefox 3](/en-US/docs/Templates_in_Firefox_3)
  - : Templates have been significantly improved in Firefox 3. The key improvement allows the use of custom query processors to allow data sources other than RDF to be used.
- [Securing updates](/en-US/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : In order to provide a more secure add-on upgrade path for users, add-ons are now required to provide a secure method for obtaining updates before they can be installed. Add-ons hosted at [AMO](https://addons.mozilla.org) automatically provide this. Any add-ons installed that do not provide a secure update method when the user upgrades to Firefox 3 will be automatically disabled. Firefox will however continue to check for updates to the extension over the insecure path and attempt to install any update offered (installation will fail if the update also fails to provide a secure update method).
- [Places migration guide](/en-US/docs/Places_Developer_Guide)
  - : An article about how to update an existing extension to use the Places API.
- [Download Manager improvements in Firefox 3](/en-US/docs/Download_Manager_improvements_in_Firefox_3)
  - : The Firefox 3 Download Manager features new and improved APIs, including support for multiple progress listeners.
- Using nsILoginManager
  - : The Password Manager has been replaced by the new Login Manager.
- [Embedding XBL bindings](/en-US/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : You can now use the `data:` URL scheme from chrome code to embed XBL bindings directly instead of having them in separate XML files.
- [Localizing extension descriptions](/en-US/docs/Localizing_extension_descriptions)
  - : Firefox 3 offers a new method for localizing add-on metadata. This lets the localized details be available as soon as the add-on has been downloaded, as well as when the add-on is disabled.
- [Localization and Plurals](/en-US/docs/Localization_and_Plurals)
  - : Firefox 3 adds the new PluralForm module, which provides tools to aid in correctly pluralizing words in multiple localizations.
- [Theme changes in Firefox 3](/en-US/docs/Theme_changes_in_Firefox_3)
  - : Notes and information of use to people who want to create themes for Firefox 3.

#### New components and functionality

- [FUEL Library](/en-US/docs/Toolkit_API/FUEL)
  - : FUEL is about making it easier for extension developers to be productive, by minimizing some of the XPCOM formality and adding some "modern" JavaScript ideas.
- [Places](/en-US/docs/Places)
  - : The history and bookmarks APIs have been completely replaced by the new [Places](/en-US/docs/Places) API.
- [Idle service](/en-US/docs/nsIIdleService)
  - : Firefox 3 offers the new `nsIIdleService` interface, which lets extensions determine how long it's been since the user last pressed a key or moved their mouse.
- [ZIP writer](/en-US/docs/nsIZipWriter)
  - : The new `nsIZipWriter` interface lets extensions create ZIP archives.
- [Full page zoom](/en-US/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 improves the user experience by offering full page zoom in addition to text-only zoom.
- [Interfacing with the XPCOM cycle collector](/en-US/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM code can now take advantage of the cycle collector, which helps ensure that unused memory gets released instead of leaking.
- [The Thread Manager](/en-US/docs/The_Thread_Manager)
  - : Firefox 3 provides the new `nsIThreadManager` interface, along with new interfaces for threads and thread events, which provides a convenient way to create and manage threads in your code.
- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 now offers a new shared code module mechanism that lets you easily create modules in JavaScript that can be loaded by extensions and applications for use, much like shared libraries.
- [The `nsIJSON` interface](/en-US/docs/nsIJSON)
  - : Firefox 3 offers the new `nsIJSON` interface, which offers high-performance encoding and decoding of [JSON](/en-US/docs/Glossary/JSON) strings.
- The `nsIParentalControlsService` interface
  - : Firefox 3 now supports the Microsoft Windows Vista parental controls feature, and allows code to interact with it.
- [Using content preferences](/en-US/docs/Using_content_preferences)
  - : Firefox 3 includes a new service for getting and setting arbitrary site-specific preferences that extensions as well as core code can use to keep track of their users' preferences for individual sites.
- [Plug-in Monitoring](/en-US/docs/Monitoring_plugins)
  - : A new component of the plugin system is now available to measure how long it takes plugins (e.g., Macromedia Flash) to execute their calls.

#### Fixed bugs

- [Notable bugs fixed in Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : This article provides information about bugs that have been fixed in Firefox 3.

## New features for end users

### User experience

- **Easier password management.** An information bar at the top of the browser window now appears to allow you to save passwords after a successful login.
- **Simplified add-on installation.** You can now install extensions from third-party download sites in fewer clicks, thanks to the removal of the add-on download site whitelist.
- **New Download Manager.** The download manager makes it easier to locate your downloaded files.
- **Resumable downloads.** You can now resume downloads after restarting the browser or resetting your network connection.
- **Full page zoom.** From the View menu and using keyboard shortcuts, you can now zoom in and out on the content of entire pages — this scales not just the text but the layout and images as well.
- **Tab scrolling and quickmenu.** Tabs are easier to locate with the new tab scrolling and tab quickmenu features.
- **Save what you were doing.** Firefox 3 prompts you to see if you'd like to save your current tabs when you exit Firefox.
- **Optimized Open in Tabs behavior.** Opening a folder of bookmarks in tabs now appends the new tabs instead of replacing the existing ones.
- **Easier to resize location and search bars.** You can now easily resize the location and search bars using a simple resize handle between them.
- **Text selection improvements.** You can now select multiple ranges of text using the Control (Command on Macintosh) key. Double-clicking and dragging now selects in "word-by-word" mode. Triple-clicking selects an entire paragraph.
- **Find toolbar.** The Find toolbar now opens with the current selection.
- **Plugin management.** Users can now disable individual plugins in the Add-on Manager.
- **Integration with Windows Vista.** Firefox's menus now display using Vista's native theme.
- **Integration with Mac OS X.** Firefox now supports [Growl](https://growl.github.io/growl/) for notifications of completed downloads and available updates.
- **Star button.** The new star button in the location bar lets you quickly add a new bookmark with a single click. A second click lets you file and tag your new bookmark.
- **Tags.** You can now associate keywords with your bookmarks to easily sort them by topic.
- **Location bar and auto-complete.** Type the title or tag of a page in the location bar to quickly find the site you were looking for in your history and bookmarks. Favicons, bookmark, and tag indicators help you see where the results are coming from.
- **Smart Bookmarks folder.** Firefox's new Smart Bookmarks folder offers quick access to your recently bookmarked and tagged places, as well as pages you visit frequently.
- **Bookmarks and History Organizer.** The new unified bookmarks and history organizer lets you easily search your history and bookmarks with multiple views and smart folders for saving your frequent searches.
- **Web-based protocol handlers.** Web applications, such as your favorite web mail provider, can now be used instead of desktop applications for handling `mailto:` links from other sites. Similar support is provided for other protocols as well. (Note that web applications do have to register themselves with Firefox before this will work.)
- **Easy to use Download Actions.** A new Applications preferences pane provides an improved user interface for configuring handlers for various file types and protocol schemes.
- **Improved look and feel.** Graphics and font handling have been improved to make websites look better on your screen, including sharper text rendering and better support for fonts with ligatures and complex scripts. In addition, Mac and Linux (Gnome) users will find that Firefox feels more like a native application for their platform than ever, with a new, native, look and feel.
- **Color management support.** By setting the `gfx.color_management.enabled` preference in `about:config`, you can ask Firefox to use the color profiles embedded in images to adjust the colors to match your computer's display.
- **Offline support.** Web applications can take advantage of new features to support being used even when you don't have an Internet connection.

### Security and privacy

- **One-click site information.** Want to know more about the site you're visiting? Click the site's icon in the location bar to see who owns it. Identify information is prominently displayed and easier than ever to understand.
- **Malware protection.** Firefox 3 warns you if you arrive at a website that is known to install viruses, spyware, trojans, or other dangerous software (known as malware).
- **Web forgery protection enhanced.** Now when you visit a page that's suspected of being a forgery, you're shown a special page instead of the contents of the page with a warning.
- **Easier to understand SSL errors.** The errors presented when an invalid SSL certificate is encountered have been clarified to make it easier to understand what the problem is.
- **Out-of-date add-on protection.** Firefox 3 now automatically checks add-on and plugin versions and disables older, insecure versions.
- **Secure add-on updates.** Add-on update security has been improved by disallowing add-ons that use an insecure update mechanism.
- **Anti-virus integration.** Firefox 3 now informs anti-virus software when executable files are downloaded.
- **Windows Vista parental controls support.** Firefox 3 supports the Vista system-wide parental control setting for disabling file downloads.

### Performance

- **Reliability.** Firefox 3 now stores bookmarks, history, cookies, and preferences in a transactionally secure database format. This means your data is protected against loss even if your system crashes.
- **Speed.** Firefox 3 has gotten a performance boost by completely replacing the part of the software that handles drawing to your screen, as well as to how page layout work is handled.
- **Memory use reduced.** Firefox 3 is more memory efficient than ever, with over 300 memory "leak" bugs fixed and new features to help automatically locate and dispose of leaked memory blocks.

## See also

{{Firefox_for_developers('2')}}
