---
title: Code editors
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Previously, we told you to install a code editor, as you'll need one to work through this pathway. In this article we look at code editors in more detail, giving you an idea of what they can do for you.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic familiarity with your computer operating system.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>What code editors are available and what is suitable for your purposes.</li>
          <li>What a basic code editor can do.</li>
          <li>What code editor extensions can do and how to install one.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What code editors are available?

Before starting to code, you may have had some experience working on text documents in a program like Microsoft Word. You might also be wondering whether you can work with code in these same programs. Unfortunately, the answer is "not really":

- Programs like Microsoft Word are **Binary file** editors; their files contain a non-text format that can only be understood by those programs. Website source code, on the other hand, is stored as plain text.
- Word _can_ open and edit plain text files, but it doesn't handle them very well. It doesn't have a feature set designed for working with code — it is for writing documents such as letters and reports. You need a program that is designed to cleanly handle and output plain text, and work with code.

You probably already have a plain text editor on your computer. By default, Windows includes [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) and macOS comes with [TextEdit](https://en.wikipedia.org/wiki/TextEdit). Linux distros vary; the Ubuntu 22.04 LTS release comes with [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) by default. Default OS plain text editors can be OK, but they also have a limited feature set.

You are better off with a fully-fledged code editor like [Visual Studio Code](https://code.visualstudio.com/) (multiplatform, free), [Sublime Text](https://www.sublimetext.com/) (multiplatform, not free), or [Notepad++](https://notepad-plus-plus.org/) (Windows, free).

We would recommend Visual Studio Code (VS Code), as it is the editor we mostly use. If you do not already have VS Code (or another code editor) installed, you should [install it before proceeding](https://code.visualstudio.com/).

> [!NOTE]
> Integrated Development Environments (IDEs) such as [NetBeans](https://netbeans.apache.org/front/main/index.html) (multiplatform, free), and [WebStorm](https://www.jetbrains.com/webstorm/) (multiplatform, not free) tend to have more features than simple code editors but tend to be more complex than what you need at this stage in your learning journey.

## Basic code editor functionality

In this section, we'll look at some of the most significant functionality that you will find in code editors, describing how they can help you with your coding work.

> [!NOTE]
> The sections below only scratch the surface of what a code editor can do. For a more complete feature list, see the [Visual Studio Code documentation](https://code.visualstudio.com/docs) (or search the web for your chosen code editor's documentation if you are using something different).

> [!NOTE]
> If you are a keyboard-only user, be aware that VS Code has a powerful set of keyboard shortcuts. See the VS Code [Default keyboard shortcuts reference](https://code.visualstudio.com/docs/reference/default-keybindings).

### Opening and editing files

This may seem like an obvious point, but installing a code editor is useful because it will give you a single app that will open all code files you may want to use through your development work. There is nothing more annoying than double-clicking a file on your computer and having it open in a random, unrelated app, or having your operating system tell you it doesn't recognize that file.

This should all happen automatically when installing VS Code, but if you still have problems with certain file types, you can manually set them to open via that app. This can vary depending on your operating system, so to find out, go to your favorite search engine and search for "choose what application opens a file type &lt;OS-name-and-number>" — for example, "choose what application opens a file type windows 11" if you are on Windows 11.

You can find a lot more information about opening and editing files and folders in our next article.

### Syntax highlighting

Code editors like VS Code provide syntax highlighting — that is, recognized code features have different parts shown in different colors. This makes code much easier to read than coloring it all in one color. Let's use the following JavaScript function as an example:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

You don't need to understand what this code is doing for now, but you can already see what syntax highlighting looks like above. Yes, we also provide syntax highlighting on MDN!

Let's try an exercise in VS Code:

1. Copy the above code example to your clipboard (MDN code blocks have a copy icon in the top-right corner that you can press to do this).
2. Open VS Code and create a new file by choosing _File_ > _New File..._
3. Inside the new file, click the _Select a language_ text, then choose _JavaScript_ from the drop-down menu that opens up.
4. Paste the code into the new file to see what VS Code's JavaScript syntax highlighting looks like.

VS Code provides other syntax features too. For example:

- You'll see a thin vertical line traveling down from the `function` keyword to the closing curly brace (`}`) — these lines are used to mark different [indentation](https://en.wikipedia.org/wiki/Indentation_style) levels in code, making it easier to identify where blocks begin and end.
- Also try moving the flashing text cursor over the opening or closing curly brace (`{` or `}`) — you'll see both of them highlighted. This also helps identify the start and end of blocks, and is useful when are trying to find where you are missing a character when you have a more complicated structure with lots of nested blocks. This highlighting also works with other delimiters such as parentheses (`(` and `)`) and square brackets (`[` and `]`).

### Code completion/suggestion

When you type code into a code editor, it will often be able to suggest what you should type next, and fill in some boilerplate for you (which means standard code that will always be the same).

Try this out now in VS Code:

1. Go back to the JavaScript file you created in the previous section.
2. Go to the bottom of the file and press <kbd>Enter</kbd>/<kbd>Return</kbd> a couple of times to make sure you are on a new line.
3. Start typing in "function" — a list of options should appear in a list to the right of your text.
4. Select the _function_ option with _Function Statement_ written to the right of it. It will fill in the following code for you:

   ```js-nolint
   function name(params) {

   }
   ```

5. Click inside the function, on the blank line between the two curly braces. Start typing in "document" and you'll again be given a list of options. Select the first one. This is a reference to the {{domxref("Document")}} object (again, don't worry about what this means for now).
6. Right after `document`, type a dot (`.`) — you will again get a list of options, this time containing all of the properties and methods available on the `document` object!

That's enough for now. Let's move on.

### Debugging help

Code editors can't automatically fix all of your code problems, but they can certainly help you to find typos and other simple errors. Let's look at a couple of examples.

1. Go back to your JavaScript file and delete all the code you currently have in there. Replace it with the following:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. The little cross icon to the right of the above code listing is MDN's way of indicating a bad code example, and quite rightly — there are three errors in the above code! Have a look at VS Code's highlighting to see if you can spot how it has highlighted the errors, then we'll walk through and fix them together.
3. The first error is that we've used `name` on the first line, but `Name` on the second line to refer to the same variable. This is a problem because JavaScript is case sensitive and therefore regards these as two different names. VS Code has highlighted this in two different ways — by coloring `name` dark gray to indicate that the value is declared but never used (often a good indication that you've made a typo somewhere), and by putting three dots underneath `Name` to indicate that it has a suggestion for you on how to improve the code (in this case by asking if you meant to write `name`). To fix this error, change `Name` to `name`.
   > [!NOTE]
   > You can hover over each of the indicated highlights with the mouse pointer to get more information.
4. The second error is in the sixth line, where we write `"Chris`. In JavaScript, a piece of text (known as a **string**) must be wrapped in two quote marks, but the second one is missing. VS Code has highlighted this by underlining the text where the error is first noticed (it might not be the exact place where the error actually is) with a squiggly red line, much like the one used in Microsoft Word to highlight spelling mistakes. To fix this, update `"Chris` to `"Chris"`.
5. On the last line, a small bit of red squiggly underline remains near the end, even after we've fixed the previous error. This is because of the third error — in JavaScript, an opening bracket always needs an accompanying closing bracket. Fix this by updating `(helloChris` to `(helloChris)`.

### Search and replace

Every worthwhile code editor has a robust search and replace function. This is useful for example if you find out that an error is occurring in a specific function and you want to find it in your code, or if you decide to change the name of a variable and need to make sure it gets changed in all places that reference it.

The concept of search and replace should be fairly familiar to you if you've used a computer previously, but let's explore it quickly for completeness:

1. Go back to your JavaScript file in VS Code and open the find and replace panel in find mode by choosing _Edit_ > _Find_ from the menu.
2. Type `createGreeting` into the _Find_ box — you'll see that both instances are highlighted, and you can move between them with the up and down arrows in the panel. The current actively highlighted instance has the brighter highlight.
3. Now open the find and replace panel in replace mode by choosing _Edit_ > _Replace_ from the menu, or by clicking the arrow to the left of the _Find_ box.
4. Type `sayHello` into the _Replace_ box that should now be visible.
5. You can now replace all instances of `createGreeting` in the code with `sayHello` using the two buttons to the right of the _Replace_ box. The left button moves to the next instance of the search string with one click and replaces it with a second click. The right button replaces all instances with a single click.

VS Code has many powerful find and replace features — see [Find and replace](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

## Enhancing your code editor with extensions

Most code editors have an extension or plugin system to allow you to add functionality to the program that is not available to it by default. These can do a variety of tasks, such as:

- Enable code completing, linting, or debugging functionality for languages not supported by default, or provide additional functionality for those that are.
- Allow you to use the functionality of other tools from right inside the code editor, such as version control tools or local testing servers.
- Provide additional user interface or code highlighting themes/color schemes.
- Suggest code snippets to fulfill requirements. These can be generated from static templates, or via AI tools. Using AI to generate code snippets has many of the same advantages and caveats as using it to generate search results (see [Searching for information > Using AI](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) for more information).

VS Code extensions are managed via the Extensions Marketplace panel in VS Code, accessed via the _View_ > _Extensions_ menu. Let's explore it now.

1. Open the Extensions Marketplace panel.
2. In the _Search..._ box at the top of the panel, type in "JavaScript" to see what JavaScript-related extensions are available. Try clicking on a few of the search results that appear to see the kinds of things they do. Don't install any of them for now.
3. Instead, let's install an extension that is easy to understand and will be useful for pretty much any code file you work on in this set of modules. Type "Prettier" into the _Search..._ box and click the _Prettier - code formatter_ result. When the [Prettier](https://prettier.io/) extension is installed, it can be used to format your code each time you save a file, making your code much easier to read as a result.
4. Click the _Install_ button on the _Extension_ tab. Close the tab when installation is finished.
5. To get Prettier to work, you need to update a couple of settings. Open the VS Code Settings tab (_Code_ > _Settings..._ > _Settings_ on macOS, _File_ > _Preferences_ > _Settings_ on Windows).
6. In the _Search settings_ box at the top, type "formatter" to filter the settings list and just show the ones that contain "formatter".
7. Find the _Editor: Default Formatter_ option, and select the _Prettier - Code formatter_ option from the associated drop-down.
8. Find the _Editor: Format On Save_ option and enable it by clicking its checkbox.
9. Close the _Settings_ tab.

That's all the setup done; let's see Prettier in action.

1. Go back to your JavaScript file's tab and save it (_File_ > _Save_). The file needs to be saved for Prettier to work. Call it `test.js`. The location you save it in doesn't really matter.
2. Replace the current contents with the following code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Save the file again; at this point, Prettier should reformat the code nicely, like this:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
