---
title: Privileged features
slug: Web/API/Window/open/Privileged_features
---
This page lists the `windowFeatures` parameter of [window.open](/en-US/docs/Web/API/Window/open) function that requires chrome-privilege in Firefox.

> **Warning:** This is not for web content.

The following features require the chrome-privilege.

- `centerscreen`
  - : Centers the window in relation to its parent's size and position.
- `minimizable`
  - : This setting can only apply to dialog windows; `minimizable` requires `dialog=yes`. If `minimizable` is on, the new dialog window will have a minimize system command icon in the titlebar and it will be minimizable. Any non-dialog window is always minimizable and `minimizable=no` will be ignored.
- `chrome`
  - : If on, the page is loaded as window's only content, without any of the browser's interface elements. There will be no context menu defined by default and none of the standard keyboard shortcuts will work. The page is supposed to provide a user interface of its own, usually this feature is used to open XUL documents (standard dialogs like the JavaScript Console are opened this way).
- `dialog`
  - : The `dialog` feature removes all icons (restore, minimize, maximize) from the window's titlebar, leaving only the close button. Mozilla 1.2+ and Netscape 7.1 will render the other menu system commands (in FF 1.0 and in NS 7.0x, the command system menu is not identified with the Firefox/NS 7.0x icon on the left end of the titlebar: that's probably a bug. You can access the command system menu with a right-click on the titlebar). Dialog windows are windows which have no minimize system command icon and no maximize/restore down system command icon on the titlebar nor in correspondent menu item in the command system menu. They are said to be dialog because their normal, usual purpose is to only notify info and to be dismissed, closed. On Mac systems, dialog windows have a different window border and they may get turned into a sheet.
- `modal`

  - : If on, the new window is said to be modal. The user cannot return to the main window until the modal window is closed. A typical modal window is created by the [alert() function](/en-US/docs/Web/API/Window/alert).

    The exact behavior of modal windows depends on the platform and on the Mozilla release version.

    > **Note:** As of {{Gecko("1.9")}}, the Internet Explorer equivalent to this feature is the {{domxref("window.showModalDialog()")}} method. For compatibility reasons, it's now supported in Firefox. Note also that starting in {{Gecko("2.0")}}, you can use {{domxref("window.showModalDialog()")}} without UniversalBrowserWrite privileges.

- `titlebar`

  - : By default, all new secondary windows have a titlebar. If set to _no or 0_, this feature removes the titlebar from the new secondary window.

    Mozilla and Firefox users can force new windows to always render the titlebar by setting `dom.disable_window_open_feature.titlebar` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).

- `alwaysRaised`
  - : If on, the new window will always be displayed on top of other browser windows, regardless of whether it is active or not.
- `alwaysLowered`
  - : If on, the new created window floats below, under its own parent when the parent window is not minimized. alwaysLowered windows are often referred as pop-under windows. The alwaysLowered window can not be on top of the parent but the parent window can be minimized. In NS 6.x, the alwaysLowered window has no minimize system command icon and no restore/maximize system command.
- `alwaysOnTop`
  - : If on, the new window will always be displayed on top of all other windows (browser windows and otherwise), regardless of whether it is active or not. This was added in Firefox 66 (see {{bug(1519893)}}).
- `z-lock`
  - : Same as `alwaysLowered`.
- `close`

  - : When set to _no or 0_, this feature removes the system close command icon and system close menu item. It will only work for dialog windows (`dialog` feature set). `close=no` will override `minimizable=yes`.

    Mozilla and Firefox users can force new windows to always have a close button by setting `dom.disable_window_open_feature.close` to _true_ in [about:config](http://support.mozilla.com/en-US/kb/Editing+configuration+files#about_config) or in their [user.js file](http://support.mozilla.com/en-US/kb/Editing+configuration+files#user_js).
