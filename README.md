# Contributing to the content of MDN Web Docs

:tada: First of all, thanks for taking the time to contribute to
[MDN Web Docs](https://developer.mozilla.org)! :tada:

The following is a set of guidelines for contributing to the
[content of MDN Web Docs](https://github.com/mdn/content), which is
hosted within the [MDN Organization](https://github.com/mdn) on GitHub.

> **Note:** Just want to find a task and jump in?
  See [Getting started on MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Getting_started)
  for an overview of how to join, and [Contributing to MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute)
  for a filtered list of tasks.

<!-- You can quickly regenerate this TOC by running:
  npx markdown-toc@1.2.0 --bullets='-' --no-firsth1 README.md -->

- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Making contributions](#making-contributions)
  - [Setup](#setup)
  - [Fundamental concepts](#fundamental-concepts)
  - [Simple changes](#simple-changes)
  - [More substantial changes](#more-substantial-changes)
  - [Pull request etiquette](#pull-request-etiquette)
  - [Adding a new document](#adding-a-new-document)
  - [Moving one or more documents](#moving-one-or-more-documents)
  - [Deleting a document](#deleting-a-document)
  - [Adding images](#adding-images)
  - [Updating a browser compatibility table](#updating-a-browser-compatibility-table)
  - [Adding code examples](#adding-code-examples)
  - [Archiving and unarchiving pages](#archiving-and-unarchiving-pages)
  - [Making a change that depends on a macro update](#making-a-change-that-depends-on-a-macro-update)
- [Frequently asked questions (FAQ)](#frequently-asked-questions-faq)
  - [When will my change show up on the production MDN site?](#when-will-my-change-show-up-on-the-production-mdn-site)
  - [Can I copy content from other places to put on MDN?](#can-i-copy-content-from-other-sources-to-put-on-MDN)

## Code of Conduct

Everyone participating in this project is expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

When contributing to the content you agree to license your contributions
according to [our license](LICENSE.md).

## Making contributions

A good place to learn about general guidelines for contributing to
[MDN Web Docs](https://developer.mozilla.org) is the
[Guidelines document](https://developer.mozilla.org/en-US/docs/MDN/Guidelines).
For example, you can find out more about MDN's writing-style guidelines via the
[Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide).

### Prerequisite knowledge

We expect contributors to MDN to have a certain amount of prerequisite knowledge
before they start working on the content. If you are new to the following
topics, we'd advise you to look at the provided links to help you get up to
speed:

- Web technologies: If you are new to HTML, CSS, JavaScript, etc., check out our
  [Learn web development](https://developer.mozilla.org/en-US/docs/Learn) tutorials.
- Open source: If you've never contributed to an open source project before,
  have a read of [Basic etiquette for open source projects](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Open_source_etiquette).
- Git and GitHub: If you are unfamiliar with these tools, [GitHub for complete
  beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners)
  will get you started.
- MDN's repo structures: If you are not sure what repos to edit to make changes
  to the different parts of MDN's content,
  [Where is everything on MDN?](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Where_is_everything)
  will point you towards the correct places.

### Setup

No matter how you wish to contribute, you'll need
[a GitHub account](https://github.com/join) if you don't have one already.
If you're not familiar with [`git`](https://git-scm.com) and
[`GitHub`](https://github.com), you might find the
[MDN Git and GitHub document](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub)
helpful.

There are several ways forward from this point. It's up to you.
Here are some options:

1. Go to <https://github.com/mdn/content> and just use the
[GitHub UI](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/managing-files-on-github).
This is the easiest approach if you just want to make a simple change to
a single file, like fixing a typo.
1. Install and use the [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-desktop)
1. Install and use the [GitHub CLI](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-cli)
1. [Install `git`](https://git-scm.com/downloads) and use it from the
command line. You might find these resources helpful:
    - [Using Git](https://docs.github.com/en/free-pro-team@latest/github/using-git)
    - [`git` cheatsheet](https://training.github.com/)

If you choose an option other than the GitHub UI, you want to install
[Node.js (version >=12.11)](https://nodejs.org) and [`yarn`](https://classic.yarnpkg.com/en/docs/install).

### Fundamental concepts

These are some important things to keep in mind about the MDN content.

- **Documents are folders** --  Documents are always
represented by a folder (e.g., [`files/en-us/web/javascript`](files/en-us/web/javascript)),
and that folder will contain the content of that specific document as an
`index.html` file (e.g., [`files/en-us/web/javascript/index.html`](files/en-us/web/javascript/index.html)).
- **Documents are hierarchical** - A document folder may contain other folders,
where those folders would represent child documents (e.g., [`files/en-us/web/javascript/closures/index.html`](files/en-us/web/javascript/closures/index.html)).
- **Document folders may contain image files** -- A document folder may also
contain image files, which are referenced within that document's
`index.html` file.
- **All redirects are specified in a single file** -- All of the redirects
are specified within [`files/en-us/_redirects.txt`](files/en-us/_redirects.txt),
one redirect per line. Each line specifies a `from` and `to` URI
separated by whitespace. When you move a document, you'll need to add a
redirect to this file specifying that its old URI now redirects to its new URI.
Both of these tasks are done using the `yarn content move` tool — see
[Moving one or more documents](#moving-one-or-more-documents).
**Don't edit the `_redirects.txt` file manually!**
If both an `index.html` file and a redirect exist for a document, the
document takes precedence and the redirect is ignored.
- **A document's `index.html` starts with "front-matter"** -- Each
document's `index.html` file must begin with some [YAML](https://en.wikipedia.org/wiki/YAML)
called front-matter that defines some important information about the
document: `title`, `slug`, and [`tags`](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Howto/Tag)
(if any). Here's an example that shows the front-matter from the
[JavaScript landing page](files/en-us/web/javascript/index.html):

    ```yaml
    ---
    title: JavaScript
    slug: Web/JavaScript
    tags:
      - JavaScript
      - Landing
      - Landing page
      - Learn
      - 'l10n:priority'
    ---
    ```

### Simple changes

If you just want to make a simple change to a single file, like fixing a typo,
the GitHub UI is the simplest way to do that. For example, if you've found
a typo within the [JavaScript landing page](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
you can sign into GitHub, go to <https://github.com/mdn/content>,
navigate to the source file `files/en-us/web/javascript/index.html`,
and then click on the edit (pencil) button.

> **Tip:** Click the **Source on GitHub** link in the footer of any MDN page
  to jump to its source file on GitHub.

From there the GitHub UI will take your hand and
[walk you through the rest](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository),
like automatically creating a
[fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
and branch to commit your changes to, as well as helping you reach the
ultimate goal, a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
Your pull request represents the work you want to be reviewed,
hopefully approved, and then merged into the `main` branch of this repository.

> **Note:** See the [pull request etiquette section](#pull-request-etiquette)
  for more details on creating and handling pull requests successfully.

If you're not certain of the changes that you want to make, get in touch
with us first!
You can [chat with us](https://chat.mozilla.org/#/room/#mdn:mozilla.org) or
[file an issue](https://github.com/mdn/content/issues).

### More substantial changes

If you need to do some work that requires changes to more than one file, like
moving one or more documents, the GitHub UI is not very efficient.
You'd have to make a separate pull request for every page you want to change.
Instead, you're going to have to use `git` or one of the other
`git`-based approaches like the
[GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-desktop).

1. You'll want to create a
[fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
of this repository, so you can freely experiment with branches and
changes in your own copy before submitting your changes as a
[pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
Let's assume your GitHub username is `octocat`. Your fork would be a copy
of this repository but in your own account, so
`https://github.com/octocat/content`.

1. Once you've created your fork on GitHub, you'll want to clone it locally.
For example, assuming again that your GitHub username is `octocat`, you
would do something like the following:

    ```sh
    cd ~/repos
    git clone git@github.com:octocat/content.git mdn/content
    ```

1. You'll also want to create a
[`remote`](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
to the main repository
([https://github.com/mdn/content](https://github.com/mdn/content)),
which you'll use to keep your
local clone as well as your fork (`https://github.com/octocat/content`)
up-to-date. For these examples, we'll name
it `mdn`, but you can name it anything you'd like.

    ```sh
    cd ~/repos/mdn/content
    git remote add mdn git@github.com:mdn/content.git
    git remote -v
    ```

1. When you run the `git remote -v` command above, you'll see that you have
two remotes: `mdn` and `origin`. The `origin` remote is the default name
that `git` has assigned to your fork (`https://github.com/octocat/content`).

1. Once you've created your local clone, there's no need to do that
again next time you want to make a contribution. However, each time before
you start a new chunk of work make sure you update your local clone.
The following checks-out your local clone's `main` branch, fetches the
latest content from the `main` branch of the `mdn` repository and merges
it into your local `main` branch, and finally checks out a new branch
called `my-work` (you can call it anything you'd like) for you to work within.
When you're ready, you'll push your `my-work` branch to your fork
and use it to make a pull request.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    git checkout -b my-work
    ```

1. Next, you'll want to start the local preview service, so you can see
the changes you'll make as they would look in production. Once started,
this local preview service is available at `http://localhost:5000`
within your browser.

    ```sh
    # Switch to a separate terminal.
    cd ~/repos/mdn/content
    yarn
    yarn start
    ```

    When you preview a page you can press a button to open its associated
    document's `index.html` file in your preferred editor. For this to work,
    you need to set an environment variable called `EDITOR` before starting
    the preview server. For example, if you prefer VS Code as your editor,
    you'll want to do something like this:

    ```sh
    export EDITOR=code
    yarn start
    ```

    Note, this is how you do it on terminals with `bash` (macOS and Linux). You
    have to do it differently on Windows.

    Now, when you're previewing a page and press the `Edit in your editor`
    button, it will open the same as running:

    ```sh
    code files/en-us/.../index.html
    ```

    Instead of having to type `export EDITOR=code` every time prior to
    `yarn start`, you can instead store this setting in your personal `.env` file
    (this goes inside the root of your local `content` directory). If the `.env`
    file doesn't already exist, you can create one and include the above setting
    in it. Alternatively, running the following line will add the setting to the
    `.env` file automatically, creating the file if it doesn't already exist:

    ```sh
    echo 'EDITOR=code' >> .env
    ```

    Now, it should be set like that even after you've closed and started a new
    terminal window.

1. Make your desired changes to one or more `index.html` files using
your preferred code editor. **When thinking about your desired changes, it's
important to keep the following in mind:**
    - **Make sure you've read the
    [MDN guidelines](https://developer.mozilla.org/en-US/docs/MDN/Guidelines),
    including the
    [Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide).**
    - **Large chunks of work can be difficult to review, so try to group your
    changes into the smallest logical chunks that make sense, and create a
    separate pull request for each logical chunk.**

1. Once you've made and saved your changes, open a browser, and navigate
to the page(s) you've changed. For example, if you changed
`files/en-us/web/javascript/index.html`, open
`http://localhost:5000/en-us/docs/web/javascript` in your browser.

1. You might have noticed that at the top of each page that you preview,
for example the `http://localhost:5000/en-us/docs/web/javascript` page,
there is a `Show flaws` button. Click on that button to see if your
changes have introduced flaws on the page. You can also fix flaws on a
particular page by running the command:

    ```sh
    yarn content flaws <slug>
    ```

1. Once you're happy with your changes, add and commit them to your branch,
and then push the branch to your fork. Remember, the default name that
`git` assigned to the remote that represents your fork is `origin`.

    ```sh
    cd ~/repos/mdn/content
    git add .
    git commit
    git push -u origin my-work
    ```

1. You're now ready to create a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

1. Once you've created your pull request, sit back, relax, and wait for
a review.
**You do not need to request a review. One or more reviewers will be selected for**
**you automatically.**
Your pull request will have to be reviewed and eventually approved before
it's merged into the `main` branch, and then later (within 48 hours)
published on [MDN Web Docs](https://developer.mozilla.org). Along the way,
you may be asked, not only
to answer questions about your work, but to make changes as well. Don't
worry, that's a common and natural part of the process.
**See the [pull request etiquette section](#pull-request-etiquette) for more details**
**on creating and handling pull requests successfully.**

### Pull request etiquette

Here are some important rules of etiquette to remember when working
with pull requests.

1. When you submit a pull request, a number of tests are automatically run
as GitHub Actions (see [.github/workflows](.github/workflows)). If
one or more of these tests fail, it is your responsibility to try and
resolve the underlying issue(s). If you don't know how to resolve the
underlying issue(s), you can ask for help. Your pull request will not be
approved and merged if these tests are failing.

1. If your pull request has merge conflicts with the `main` branch (GitHub
checks for this automatically and notifies you), you are responsible for
resolving them. You can do this by merging the `main` branch into your
branch (`git pull mdn main`), and then pushing the updated branch to
your fork (`git push`).

1. Once you've created your pull request, never use `git rebase` on your
branch if you need to make changes. Any changes should be made as
additional commits.

1. Each pull request should contain a single logical change, or related set
of changes that make sense to submit together. If a pull request becomes
too large or contains too many unrelated changes, it becomes too difficult
to review, and may begin to look suspicious (it is easier to hide malicious
changes in a large pull request). In such cases, the reviewer has the right
to close your pull request, and ask that you submit a separate pull request
for each logical set of changes that belong together.

1. If your pull request contains any kind of significant complexity
(it contains technical changes, and isn't just a typo fix, grammatical
improvement, or formatting/structural change), please describe why you're
making the change and anything else we need to know about it.
   - If the pull request is simple (it is really clear what has been
     changed and why, and the change is obviously a good thing), you can do
     this in your pull request's description.
   - If the pull request is complex (the changes and the reasoning behind
     them need a bit more explanation), then the requestor should file an
     issue describing the intended change first, and seek discussion/approval
     as needed. When the time is right to submit the PR, they should
     reference the issue (or an existing issue that describes the motivation
     for the change) in the PR. You can reference an existing issue
     using `#` followed by the issue's ID, for example `#1234`.

1. Do not re-open a pull request that a reviewer has closed.

### Adding a new document

Adding a new document is relatively straightforward, especially if you can
start by copying the `index.html` of a similar document. There are only a
few things to keep in mind:

- Remember that a document is represented by an `index.html` file within its
  own folder.
- Determine where in the document hierarchy your document belongs. For
  example, if you're
  creating a new CSS document for a new property `foo`, you'll want to create
  a new folder
  `files/en-us/web/css/foo/` and its `files/en-us/web/css/foo/index.html` file.
- Remember that a document's `index.html` file must start with front-matter
  that defines the `title`, `slug`, and
  [`tags`](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Howto/Tag)
  (if any) for the document. You might find it helpful to refer
  to the front-matter within a similar document's `index.html`.

As we outlined above, the step-by-step process in general would be:

1. Start a fresh, up-to-date branch to work within:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-add
    ```

1. Create one or more new document folders, each with their own `index.html` file.

1. Add and commit your new files, as well as push your new branch to your fork:

    ```sh
    git add files/en-us/folder/you/created
    git commit
    git push -u origin my-add
    ```

1. And finally create your
[pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Moving one or more documents

Moving one or more documents, or an entire tree of documents is easy,
because we've created a special command that takes care of the details for you:

```sh
yarn content move <from-slug> <to-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to move (e.g., `Learn/Accessibility`), as well as the slug of its new
location (e.g., `Learn/A11y`), optionally followed by the locale of the
existing document (defaults to `en-US`).
If the existing document that you'd like to move has child documents (i.e.
it represents a document tree), the `yarn content move` command will move
the entire tree. For example, let's say you want to move the entire
`/en-US/Learn/Accessibility` tree to `/en-US/Learn/A11y`:

1. First, as we've outlined above, you'll start a fresh branch to work within:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-move
    ```

1. Perform the move (which will delete and modify existing files, as well
as create new files):

    ```sh
    yarn content move Learn/Accessibility Learn/A11y
    ```

1. Add and commit all of the deleted, created, and modified files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-move
    ```

1. Now you're ready to create your [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

**Important: `yarn content move` automatically adds the necessary redirect
information to the `_redirects.txt` file so that the old location will redirect
to the new one. Don't edit the `_redirects.txt` file manually!
mistakes can easily creep in if you do. If you need to add a redirect without
moving a file, talk to us about it.**

### Deleting a document

Deleting one or more documents, or an entire tree of documents is also easy,
again because we've created a special command that takes care of the
details for you:

```sh
yarn content delete <document-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to delete (e.g., `Learn/Accessibility`), optionally followed by the locale
of the existing document (defaults to `en-US`). If the existing document
that you'd like to delete has child documents (i.e. it represents a
document tree), you must also specify the `-r, --recursive` option, or
the command will fail.

**Important: you need to use the `delete` command to delete MDN documents. Don't
just delete their directories from the repo, as `delete` also handles other
necessary changes such as updating the `_wikihistory.json` file.**

For example, let's say you want to delete the
entire `/en-US/Learn/Accessibility` tree:

1. First, as we've outlined above, you'll start a fresh branch to work within:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-delete
    ```

1. Perform the delete:

    ```sh
    yarn content delete Learn/Accessibility --recursive
    ```

1. Add and commit all of the deleted files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-delete
    ```

1. Now you're ready to create your [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Adding images

Adding an image to a document is easy as well. All you need to do is add
your image file within the document's folder, and then reference the image
from within the document's `index.html` file using an `<img>` element.
It's as easy as that. Let's walk through an example:

1. You should be getting used to this by now, as we've done it several
times above. Make sure you start with a fresh working branch updated with
the latest content from the `main` branch of the `mdn` remote.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-images
    ```

1. Add your image to the document folder. For this example, let's assume
we're adding a new image to the `files/en-us/web/css` document.

    ```sh
    cd ~/repos/mdn/content
    cp /some/path/my-cool-image.png files/en-us/web/css/
    ```

1. Run the `filecheck` command on each image you add. It'll complain if
something's wrong (see also the [Compressing images](#compressing-images)
section below).
We'll automatically run this as one of the tests we run when your new pull
request is created, but why wait to fix any possible issues later?

    ```sh
    yarn filecheck files/en-us/web/css/my-cool-image.png
    ```

1. Use your image within the document. For example, add the following `<img>` element
somewhere inside `files/en-us/web/css/index.html`:

    ```html
    <img src="my-cool-image.png" alt="My cool image">
    ```

1. Add and commit all of the deleted, created, and modified files, as well as
push your branch to your fork:

    ```sh
    git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
    git commit
    git push -u origin my-images
    ```

1. Now you're ready to create your
   [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

#### Compressing images

When you add images to MDN, you should make sure that they are compressed
as much as possible without degrading quality, to save on download size
for our readers. In fact, if you don't do this our CI process will fail
and the build results will warn you that some of your images are too big.

The best way to compress them is by using the built-in compression tool.
You can compress an image appropriately by using the `filecheck` command
with the `--save-compression` option — this compresses the specified image
as much as possible, and saves the result over the top of the original.

For example:

```sh
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

### Updating a browser compatibility table

The browser compatibility table shown near the bottom of many of the
MDN document pages, for example on
[the JavaScript Array page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Browser_compatibility),
is generated from the `npm` package created from the <https://github.com/mdn/browser-compat-data>
repository. If you'd like to make or suggest a change to the content of
the browser compatibility table on any given MDN document page, you can either
use the `Report problems with this data on GitHub` link in the upper-right
corner of the table on the page itself to create an issue, or go to
<https://github.com/mdn/browser-compat-data> and
[read more to learn how to contribute](https://github.com/mdn/browser-compat-data/blob/master/docs/contributing.md).

### Adding code examples

There are a lot of code examples on MDN, and you'll probably want to add
some as you contribute content to the project. There are four types of
code example used on MDN:

- [Static examples](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#Static_examples)
  — plain code blocks, possibly with a screenshot to statically show the
  result of such code if it were to be run.
- [Traditional MDN "live samples"](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#Traditional_live_samples)
  — A macro that takes plain code blocks, dynamically puts
  them into a document inside an `<iframe>` element, and embeds it into the
  page to show the code running live.
- [GitHub "live samples"](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#GitHub_live_samples)
  — A macro that takes a document in a GitHub repo inside the [mdn organization](https://github.com/mdn),
  puts it inside an `<iframe>` element, and embeds
  it into the page to show the code running live.
- [Interactive examples](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#Interactive_examples)
  — Our system for creating live interactive examples that show the
  code running live but also allow you to change code on the fly to see what
  the effect is.

For a complete description of this topic, see
[the MDN code examples page](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples).

Also make sure that your code examples follow the
[MDN code example guidelines](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines).

### Archiving and unarchiving pages

Pages with the banner "This is an archived page. It's not actively maintained."
at the top are archived pages — they are archived because either they are
obsolete or out-of-date, or they are not in scope for MDN contributors to
actively work on.

If you find a page that is marked archived and you think it shouldn't be,
you can follow the below steps to unarchive it:

- Submit an issue to check why the page is archived and if it should be
  unarchived.
- Find the source code location of the archived page. Archived pages live in
  the [Archived content](https://github.com/mdn/archived-content/) repo,
  the structure of which is the same as this repo (except that there are
  also locale directories present other than `en-US`). As an example:
  - Take the archived [Mobile developer challenge](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Mobile_developer_challenge)
    page, which is at the URL `https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Mobile_developer_challenge`.
  - This page's source code is at [https://github.com/mdn/archived-content/blob/main/files/en-us/mozilla/mobile/mobile_developer_challenge/index.html](https://github.com/mdn/archived-content/blob/main/files/en-us/mozilla/mobile/mobile_developer_challenge/index.html).
- To unarchive the page, you need to open a pull request to move the page's
directory into the appropriate place inside this repo, and update the
page's meta data (like `slug`) if needed.

> **Note:** To archive a currently-non-archived page, you need to follow the
above procedure, but move the page in question the opposite way between repos.

**Note:** You can have an archived page with non-archived pages below it in the
hierarchy, and vice-versa. To achieve this you need to have the same directory
structure in both the `content` and `archive-content` repos. Whether a page
is non-archived or archived depends on which repo its `index.html` file is
in. As an example, compare the [archived-content mozilla directory](https://github.com/mdn/archived-content/tree/main/files/en-us/mozilla)
with the [content mozilla directory](https://github.com/mdn/content/tree/main/files/en-us/mozilla).
Both locations represent the same directory structure, but the
`index.html` file appears in the latter, therefore the page is not archived.

### Making a change that depends on a macro update

KumaScript macros are still used on MDN pages, even in the new platform.
These are the function names surrounded by handlebars-style double curly
braces that you'll see in the source code on occasion, for example
`{{domxref}}` Eventually we have to replace them with something else,
but they are here for now. They live in <https://github.com/mdn/yari/tree/main/kumascript/macros>.

Sometimes you'll want to make a change to the content that relies on a
macro change. Take [https://github.com/mdn/content/pull/187](https://github.com/mdn/content/pull/187).
Florian wanted to add documentation for a new WebGL extension to MDN, but
this change relied on the new feature's spec being added to
<https://github.com/mdn/yari/blob/main/kumascript/macros/SpecData.json>.
If not, the specification table on the new page would not render properly
because the data it relies on would not be there.

In such situations:

1. Make the required PR to <https://github.com/mdn/yari/tree/main/kumascript/macros>
   first, and get that merged.
2. Add the content to this repo.

## Frequently asked questions (FAQ)

### When will my change show up on the production MDN site

After your pull request is merged, it may take up to 48 hours before the
change goes live on the production <https://developer.mozilla.org/> site,
but it will usually be quicker.

- The complete build runs every 24h at around 7PM US/Eastern time, and is
  then deployed.
- Once deployment has occurred, it can take up to 24 hours for the
  associated CDN caches to replace their previously-cached content with
  the updates.

You can use <https://whatsdeployed.io/s/DLi/mdn/content> to see if your change
has been deployed to the production site.
And use <https://whatsdeployed.io/s/16d/mdn/translated-content> for changes
to the <https://github.com/mdn/translated-content> repo.

### Can I copy content from other sources to put on MDN

In general, we do not approve of copying content from other sources and putting
it on MDN. MDN should be made up of original content wherever possible. If we
receive a pull request and discover that it contains plagiarised content,
we will close it and request that the submitter resubmit the change with
the content rewritten into their own words.

If someone wants to donate an article to MDN that they previously published on
their blog or it makes sense to copy a complex reference sheet to MDN there may
be justification for republishing it. In these cases you should discuss your
plan with the MDN team first:

1. Include a comment on the relevant repo issue that explains your intention — say
what you would like to copy (include the URL) and explain why you think this
is appropriate.
1. If the content is published under a closed license:
   - If you hold the rights to the content, state this, and say that you are
happy to republish it on MDN.
   - If you do not hold the rights to the content, include the author/publisher
   on the issue if possible, or include details of how they could be contacted
   so we can ask them for permission to republish the content.
1. If the content is published under an open license, say what it is, and link
to the license so we can check whether it is compatible with [MDN's license](https://developer.mozilla.org/en-US/docs/MDN/About#using_mdn_web_docs_content).
1. @-mention chrisdavidmills on the issue, so he can review the request.

Be warned that unless there is a good reason to republish the content, we will
probably say "no". The MDN writing team's decision is final.
