---
title: How to file bugs with browsers
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
page-type: learn-faq
sidebar: learn-how-to
---

Browsers are software, and software has bugs. Sometimes you may find that your code doesn't behave the way you expected (or the way documentation indicates), and that could either be a bug in your code, a bug in the documentation (let's hope not!), or a bug in the browser you're using. We'll discuss how to figure out which it is, and how to file a bug if it turns out to be a browser bug.

## Whose bug is it?

Before filing a bug to the browser, you should make sure that the bug is real. It could be in one of four places: your code, the documentation, the browser, or the specification. Generally, the specification is the most credible source of all; browsers and documentation both follow the spec and can be wrong; your code... well, the quality depends on you.

The first step is to extract a minimal test case that reproduces the bug. It should be small and standalone, preferably a single HTML file with embedded CSS and JavaScript, without external dependencies or unrelated code. This is useful for two reasons: it minimizes the possibility that the problem is in your own code, and you need to provide one anyway if you want to discuss it with anyone, including filing a bug. For example, the following would be a good test case for a bug related to the {{cssxref(":autofill")}} pseudo-class. Note how we stripped it down to the bare minimum, which means foregoing some best practices like the doctype, `<head>` and `<body>` tags, labels for inputs, etc. But that's okay, because the relevant code is still there.

```html
<style>
  :autofill {
    border: 3px solid darkorange;
  }
</style>
<input id="name" name="name" type="text" autocomplete="name" />
<input id="email" name="email" type="email" autocomplete="email" />
```

You can either save this HTML code locally and open it using the `file://` protocol, or you can use an online service like [JSFiddle](https://jsfiddle.net/) or [CodePen](https://codepen.io/) to create a live demo. Now, the simplest way to test if it's a browser bug is to open the test case in [multiple browsers](/en-US/docs/Learn_web_development/Extensions/Testing/Introduction). Preferably use three browsers (Chromium-based, Firefox, and Safari), so if the other two behave the same way (and align with the docs), you can be pretty sure that the third one has a bug.

> [!NOTE]
> There are other practices related to isolating reproduction, like testing in a private window, disabling extensions, clearing caches, etc. You should also try those before reporting the bug.

Of course, even if all three browsers behave the same way, it could still be a bug in all of them; or, two browsers may have the same bug, while the third one is correct. To be sure, you need to read the specification. Documentation may be out of date or incorrect, but the specification is the source of truth. On every MDN reference page, you can find links to the relevant specifications in the "Specifications" section. Sometimes specifications are hard to read, but try your best—if it turns out that all browsers and the spec are consistent but MDN is wrong, consider [contributing](/en-US/docs/MDN/Community/Getting_started)!

Let's say you found a divergence between the browsers and the spec. This isn't necessarily a bug. Browsers may implement something that's not merged into the spec yet, or they may have not yet implemented a new part of the spec. At this point, you need to check more sources to see what the implementation story is. Here are some places to look:

- MDN's browser compatibility table. In the "Browser compatibility" section, you may find information about which browsers support a feature and to what extent. This may indicate that a feature is not implemented in your target browser, or that it's only partially implemented (i.e., it has known bugs or limitations).
- The specification repo. WHATWG, CSSWG, TC39, and most other standard bodies work publicly on GitHub, so you can check if the spec was recently changed, or if there's an open issue about the feature you're testing.
- Community forums. The [MDN community](/en-US/docs/MDN/Community/Communication_channels) is a great place to start, or you can find other web-related forums, where you can ask about whether browsers haven't implemented something yet, or if there's a known bug.
- The issue tracker for the browser you're testing. If you find something related, that means the bug is real, but there's nothing you need to do in the end. We'll get to that next.

## Browser bug trackers

Each browser has its own bug tracker, where you can search for existing bugs and file new ones. The interface and process may be slightly unfamiliar at first, but there are usually instructions. The table below lists the bug trackers for the major browsers.

| Browser         | Bug tracker                                           |
| --------------- | ----------------------------------------------------- |
| Apple Safari    | [WebKit Bugzilla](https://webkit.org/reporting-bugs/) |
| Google Chrome   | [Chromium Issues](https://issues.chromium.org/issues) |
| Mozilla Firefox | [Mozilla Bugzilla](https://bugzilla.mozilla.org/)     |
| Opera           | [Opera Bug Wizard](https://bugs.opera.com/wizard/)    |

Remember to search for existing bugs before filing a new one. If you find an existing bug that matches your issue, you can add a comment with your findings (for example, if you found a workaround, or if you have more information about the bug); but don't add comments that don't really add value. If you can't find an existing bug, you can file a new one—someone would tell you if it's a duplicate. When filing a new bug, make sure to include your minimal test case, and any other information that the report form asks for, like browser version, expected and actual results, etc. Some bug trackers may also ask you to select a component or area for the bug; just do your best. Someone will re-assign it if needed.

## Filing bugs for assistive technologies

If the bug is related to a non-browser software, such as a screen reader, you need to file the bug with the relevant software vendor. The table below lists some of the most popular assistive technologies and where to file bugs for them.

| Software                                                                             | Where to file                                                                          |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [Freedom Scientific JAWS](https://www.freedomscientific.com/products/software/jaws/) | [JAWS technical support form](https://support.freedomscientific.com/Forms/TechSupport) |
| [Non Visual Desktop Access (NVDA)](https://www.nvaccess.org/)                        | [File NVDA bugs](https://github.com/nvaccess/nvda)                                     |
