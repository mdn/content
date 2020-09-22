# MDN Content

## THIS IS NOT *YET* THE SOURCE OF TRUTH FOR [MDN](https://developer.mozilla.org).

## For now, the source of truth is still the centralized MySQL database behind [wiki.developer.mozilla.org](https://wiki.developer.mozilla.org)
--

MDN Content is all the source documents for
[MDN Web Docs](https://developer.mozilla.org).

To make edits you use [Yari](https://github.com/mdn/content) to preview your
edits locally.

## Quickstart

To run the previewing service, you need [git](https://git-scm.com/),
[Node](https://nodejs.org)
(version >=12) and [Yarn 1](https://classic.yarnpkg.com/en/docs/install).

Run these commands in your bash:

    git clone https://github.com/mdn/content.git mdn/content
    cd mdn/content
    yarn
    yarn start
    open http://localhost:5000

## Upkeep

When you start a new piece of work, always remember to first run:

    git pull origin main
    yarn
    yarn start

This will upgrade everything to the latest and greatest. From this,
you create your `git` topic branches, which is what you'll push to your
fork and make pull requests from.

## Setting your editor

When you preview pages you can press a button to open the source file
in your preferred editor. For this to work, you need to have set an
environment variable called `EDITOR`. Suppose you prefer VS Code as your
editor to edit content. Type this:

    export EDITOR=code
    yarn start

Note, this is how you do it on terminals with `bash` (macOS and Linux)
and you have to do it differently on Windows.

Now, when you're previewing a page and press the "Edit in your editor"
button, it will open the same as running:

    code files/en-us/web/the/page/you/used/index.html

Instead of having to type `export EDITOR=code` every time before you type
`yarn start` you can store this in your personal `.env` file. It might
not exist so you might need to create one. For example:

    echo 'EDITOR=code' >> .env
    yarn start

Now, it should be set like that even after you've close and started a new
terminal window.
