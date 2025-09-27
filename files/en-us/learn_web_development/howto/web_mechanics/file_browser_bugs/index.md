---
title: How to file bugs with browsers
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
page-type: learn-faq
sidebar: learn-how-to
---

Browsers are software, and software has bugs. Sometimes you may find that your code doesn't behave the way you expected (or the way documentation indicates), and that could either be a bug in your code, a bug in the documentation (let's hope not!), or a bug in the browser you're using. We'll discuss how to figure out which it is, and how to file a bug if it turns out to be a browser bug.

## Whose bug is it?

Before filing a browser bug, you should make sure that the bug is real. It could be in one of four places: your code, the documentation, the browser, or the specification. Generally, the specification is the most credible source of all; browsers and documentation both follow the spec and can be wrong. As for your code...well, the quality depends on you.

### Creating a test case

The first step is to extract a minimal test case that reproduces the bug. It should be small and standalone, preferably a single HTML file with embedded CSS and JavaScript, without external dependencies or unrelated code. This is useful for two reasons:

1. It minimizes the possibility that the problem is caused by your own code or an external dependency.
2. You need to provide one anyway if you want to discuss it with anyone—for example, when filing a bug.

For example, the following would be a good test case for a bug related to the {{cssxref(":autofill")}} pseudo-class. Note how we've stripped it down to the bare minimum, which means foregoing best practices like including the doctype, `<head>` and `<body>` tags, labels for inputs, etc. But that's okay, because the relevant code is still there.

```html
<style>
  :autofill {
    border: 3px solid darkorange;
  }
</style>
<input id="name" name="name" type="text" autocomplete="name" />
<input id="email" name="email" type="email" autocomplete="email" />
```

### Testing your code

You can either save your HTML code locally and [serve it through a testing server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or you can use an online service like [JSFiddle](https://jsfiddle.net/) or [CodePen](https://codepen.io/) to create a live demo.

The simplest way to test if the problem is a browser bug is to open the test case in [multiple browsers](/en-US/docs/Learn_web_development/Extensions/Testing/Introduction). If you experience divergent behavior between browsers, it's more likely to be a browser bug.

> [!NOTE]
> There are other practices related to isolating reproduction, like testing in a private window, disabling extensions, clearing caches, etc. You should also try those before reporting the bug.

### Checking implementation status

Start by trusting the documentation you read and investigating the browser(s) whose behavior doesn't conform to the docs. Not all unexpected behaviors are bugs. Browsers may implement a feature or behavior that's not yet merged into the spec, which, as a result, is less likely to be documented. Alternatively, the feature might be available in the spec but not yet implemented in the browser.

At this point, you should check more sources to determine the implementation story. Here are some places to look:

- MDN's browser compatibility tables. In the "Browser compatibility" section of our reference pages, you will find information about which browsers support a feature and to what extent. This may indicate that a feature is not implemented in your target browser, or that it's only partially implemented (that is, it has known bugs or limitations).
- The specification repo. [WHATWG](https://github.com/whatwg) (who standardize DOM, HTML, fetch, and more), [CSSWG](https://github.com/w3c/csswg-drafts) (who standardize CSS), [TC39](https://github.com/tc39) (who standardize JavaScript), and most other standard bodies work publicly on GitHub, so you can check if the spec was recently changed, or if there's an open issue about the feature you're testing.
- Community forums. The [MDN community](/en-US/docs/MDN/Community/Communication_channels) is a great place to start, or you can find other web-related forums. These are good places to ask questions about whether browsers haven't implemented something yet, or if there's a known bug.
- The issue tracker for the browser you're testing. If you find that an issue related to your problem has already been filed, that means the bug is real, but there's nothing else you need to do. We'll get to that next.

Of course, even if all browsers behave the same way, it could still be a bug in all of them, or maybe only a single browser is implementing the intended behavior. Documentation may be out-of-date or incorrect. To be sure, you should regard the specification as the source of truth (except for the rare case of browsers implementing things ahead of the spec). On every MDN reference page, you can find links to the relevant specifications in the "Specifications" section. Read the spec to see what the behavior should be. Sometimes specifications are hard to read, but try your best.

If it turns out that all browsers and the spec are consistent but MDN is wrong, consider [contributing](/en-US/docs/MDN/Community/Getting_started)!

## Browser bug trackers

Each browser has its own bug tracker where you can search for existing bugs and file new ones. The interface and process may be slightly unfamiliar at first, but there are usually instructions. The table below lists the bug trackers for the major browsers.

| Browser         | Bug tracker                                           |
| --------------- | ----------------------------------------------------- |
| Apple Safari    | [WebKit Bugzilla](https://webkit.org/reporting-bugs/) |
| Google Chrome   | [Chromium Issues](https://issues.chromium.org/issues) |
| Mozilla Firefox | [Mozilla Bugzilla](https://bugzilla.mozilla.org/)     |
| Opera           | [Opera Bug Wizard](https://bugs.opera.com/wizard/)    |

Search for existing bug reports before filing a new one. If you find an existing bug report that matches your issue, you can add a comment with your findings (for example, if you found a workaround, or if you have more information about the bug). However, don't add comments such as "I found this bug too", because they don't really add any value. If you can't find an existing bug, you can file a new one—someone will tell you if it's a duplicate.

When filing a new bug, make sure to include your minimal test case and any other information that the report form asks for—like browser version, expected and actual results, etc. Some bug trackers may also ask you to select a component or category for the bug. If you are unsure what to choose, take your best guess. Someone will re-assign it if needed.

## Filing bugs for assistive technologies

If the bug is related to non-browser software, such as a screen reader, you need to file the bug with the relevant software vendor. The table below lists some of the most popular assistive technologies and where to file bugs for them.

| Software                                                                             | Where to file                                                                          |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [Freedom Scientific JAWS](https://www.freedomscientific.com/products/software/jaws/) | [JAWS technical support form](https://support.freedomscientific.com/Forms/TechSupport) |
| [Non Visual Desktop Access (NVDA)](https://www.nvaccess.org/)                        | [File NVDA bugs](https://github.com/nvaccess/nvda)                                     |
