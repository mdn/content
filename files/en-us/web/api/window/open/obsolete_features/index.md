---
title: Obsolete features
slug: Web/API/Window/open/Obsolete_features
---
This page lists the obsolete `windowFeatures` parameter of [window.open](/en-US/docs/Web/API/Window/open) function.

- `directories` {{deprecated_inline}}
  - : Obsolete synonym of personalbar. In IE, it rendered the Links bar. Supported in Gecko up to 1.9.2 and in IE up to 6.
- `fullscreen`
  - : This feature no longer works in MSIE 6 SP2 the way it worked in MSIE 5.x. The Windows taskbar, as well as the titlebar and the status bar of the window are not visible, nor accessible when fullscreen is enabled in MSIE 5.x.
    `fullscreen` always upsets users with large monitor screen or with dual monitor screen. Forcing `fullscreen` onto other users is also extremely unpopular and is considered an outright rude attempt to impose web author's viewing preferences onto users.
    `fullscreen` does not really work in MSIE 6 SP2.
- `personalbar` {{deprecated_inline}}
  - : If this feature is on, then the new secondary window renders the Personal Toolbar in Netscape 6.x, Netscape 7.x and Mozilla browser. It renders the Bookmarks Toolbar in Firefox. In addition to the Personal Toolbar, Mozilla browser will render the Site Navigation Bar if such toolbar is visible, present in the parent window.
    Mozilla and Firefox users can force new windows to always render the Personal Toolbar/Bookmarks toolbar by setting `dom.disable_window_open_feature.personalbar` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).
- `outerWidth` {{deprecated_inline}} (only in Firefox; obsolete from Firefox 80)
  - : Specifies the width of the whole browser window, in pixels. This
    `outerWidth` value includes the window vertical scrollbar (if present) and
    left and right window resizing borders.
- `outerHeight` {{deprecated_inline}} (only in Firefox; obsolete from Firefox 80)
  - : Specifies the height of the whole browser window, in pixels. This
    `outerHeight` value includes any and all present toolbars, the window horizontal
    scrollbar (if present), and top and bottom window-resizing borders. The minimal required
    value is 100.

