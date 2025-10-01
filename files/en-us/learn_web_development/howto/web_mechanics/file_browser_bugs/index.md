---
title: When and how to file bugs with browsers
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
page-type: learn-faq
sidebar: learn-how-to
---

Browsers are software, and like any software, they can have bugs. Sometimes, you may find that the website you're developing doesn't behave as expected, or as indicated by documentation, such as MDN or the specifications. This could indicate either a bug in your code, a bug in the documentation (let's hope not!), or a bug in the browser you're using to test your website. In this article, we'll discuss how to figure out which it is and how to file a bug if it turns out to be a problem in the browser.

## Whose bug is it?

Before filing a browser bug, you should confirm that it's actually a bug in the browser. The problem could come from one of four places: your code, the documentation, the browser, or the specification. It's important to rule out the other possibilities before reporting a bug to the browser. Generally, specifications are the most credible source of all; browsers and documentation both follow specifications, but can still have mistakes. As for your code...well, it's always good to re-check for typos and logic errors before assuming it's a browser bug.

### Creating a test case

The first step in identifying the source of the problem is to create a minimal test case that reproduces the bug. It should be small and standalone, preferably a single HTML file with embedded CSS and JavaScript, without external dependencies or unrelated code. This is useful for two reasons:

- It minimizes the possibility that the problem is caused by your own code or an external dependency.
- You need to provide one anyway if you want to discuss it with anyone—for example, when filing a bug.

For example, the following would be a good test case for a bug related to the {{cssxref(":autofill")}} pseudo-class. Note how we've stripped it down to the bare minimum, which means foregoing best practices like including the doctype, `<head>` and `<body>` tags, or labels for inputs. That's fine because the relevant code is still there.

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

The simplest way to test whether the problem is a browser bug is to open your test case in [multiple browsers](/en-US/docs/Learn_web_development/Extensions/Testing/Introduction). If you experience divergent behavior across browsers, it's more likely to be a browser bug.

> [!NOTE]
> There are other steps you can take to isolate the problem, such as testing in a private window, disabling extensions, or clearing the cache. You should try those as well before reporting the bug.

### Checking implementation status

Start by trusting the documentation and investigating the browser(s) whose behavior doesn't match it. Not all unexpected behaviors are bugs. Sometimes browsers may implement a feature or behavior that's not yet been merged into the specification, which, as a result, is less likely to be documented. Another possibility is that a feature is described in the specification but not yet implemented in any browser, which also means it may not be documented.

At this point, you should check more sources to determine the implementation story. Here are some places to look:

- **MDN's browser compatibility tables**: In the "Browser compatibility" section of our reference pages (for example, check [this section](/en-US/docs/Web/CSS/basic-shape/shape#browser_compatibility) on the `shape()` CSS function page), you will find information about which browsers support a feature and to what extent. This may indicate that a feature is not implemented in your target browser, or that it's only partially implemented (that is, it has known bugs or limitations).
- **Specification repositories**: Standards bodies such as [WHATWG](https://github.com/whatwg) (for DOM, HTML, fetch, and more), [CSSWG](https://github.com/w3c/csswg-drafts) (for CSS), and [TC39](https://github.com/tc39) (for JavaScript) all work publicly on GitHub. You can check if a specification was recently changed, or if there's an open issue about the feature you're testing.
- **Community forums**: The [MDN community](/en-US/docs/MDN/Community/Communication_channels) is a great place to start, as are other web development forums. These are good places to ask questions about whether browsers haven't implemented something yet, or if there's a known bug.
- **Issue tracker for the browser you're testing**: If you find that an issue related to your problem has already been filed, that confirms the bug is real, and there's nothing else you need to do. In fact, we'll cover issue trackers next.

Of course, even if all browsers behave the same way, there could still be a bug in all of them, or maybe only a single browser is implementing the intended behavior. Documentation may be out-of-date or incorrect. To be sure, you should regard the specification as the source of truth (except for the rare case of browsers implementing things ahead of the specification). On every MDN reference page, you can find links to the relevant specifications in the "Specifications" section (see this [example](/en-US/docs/Web/CSS/basic-shape/shape#specifications)). Read the specification to check what the behavior should be. Sometimes specifications can be difficult to understand, since they're intended for browser engineers, but try your best.

If it turns out that all browsers and the spec are consistent but MDN is wrong, consider [contributing](/en-US/docs/MDN/Community/Getting_started)!

## Browser bug trackers

Each browser has its own bug tracker where you can search for existing bugs and file new ones. The interface and process may feel slightly unfamiliar at first, but there are usually instructions. The following table lists the bug trackers for the major browsers:

| Browser         | Bug tracker                                           |
| --------------- | ----------------------------------------------------- |
| Apple Safari    | [WebKit Bugzilla](https://webkit.org/reporting-bugs/) |
| Google Chrome   | [Chromium Issues](https://issues.chromium.org/issues) |
| Mozilla Firefox | [Mozilla Bugzilla](https://bugzilla.mozilla.org/)     |
| Opera           | [Opera Bug Wizard](https://bugs.opera.com/wizard/)    |

Search for existing bug reports before filing a new one. If you find an existing bug report that matches your issue, you can add a comment with your findings (for example, if you found a workaround, or if you have more information about the bug). However, don't add comments such as "I found this bug too", because they don't really add any value. If you can't find an existing bug, you can file a new one—someone will tell you if it's a duplicate.

When filing a new bug, make sure to include your minimal test case and any other information that the report form asks for—such as browser version, expected vs. actual results, and screenshots. Some bug trackers may also ask you to select a component or category for the bug, such as rendering or networking. The browser developers use these labels to organize work. If you're unsure what to choose, take your best guess–someone will re-assign it if needed.

## Filing bugs for non-browser software

If the bug is related to non-browser software that may integrate with the browser, you need to file the bug with the relevant software vendor. The following table lists some assistive technologies and where to file bugs for them:

| Software                                                                             | Where to file                                                                          |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [Freedom Scientific JAWS](https://www.freedomscientific.com/products/software/jaws/) | [JAWS technical support form](https://support.freedomscientific.com/Forms/TechSupport) |
| [Non Visual Desktop Access (NVDA)](https://www.nvaccess.org/)                        | [File NVDA bugs](https://github.com/nvaccess/nvda)                                     |
