# Notice
**This repo is currently being beta tested. To find out how to contribute to the beta and give feedback, see our [Yari beta launch](BETA.md) document.**

To contribute to the live MDN Web Docs site, [use the wiki](https://wiki.developer.mozilla.org).

# Contributing to the content of MDN Web Docs

:tada: First of all, thanks for taking the time to contribute to
[MDN Web Docs](https://developer.mozilla.org)! :tada:

The following is a set of guidelines for contributing to the
[content of MDN Web Docs](https://github.com/mdn/content), which is hosted within the
[MDN Organization](https://github.com/mdn) on GitHub.

## Code of Conduct

Everyone participating in this project is expected to follow
[our Code of Conduct](CODE_OF_CONDUCT.md).

## License

When contributing to the content you agree to license your contributions
according to [our license](LICENSE.md).

## Making contributions

A good place to learn about general guidelines for contributing to
[MDN Web Docs](https://developer.mozilla.org) is the
[Guidelines document](https://developer.mozilla.org/en-US/docs/MDN/Guidelines).
For example, you can find out more about MDN's writing-style guidelines via the
[Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide).

### Setup

No matter how you wish to contribute, you'll need
[a GitHub account](https://github.com/join) if you don't have one already.
If you're not familiar with [`git`](https://git-scm.com) and
[`GitHub`](https://github.com), you might find the
[MDN Git and GitHub document](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub)
helpful.

There are several ways forward from this point. It's up to you. Here are some options:
1. Go to https://github.com/mdn/content and just use the [GitHub UI](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/managing-files-on-github). This is the easiest approach if you just want to make a simple change to a single file, like fixing a typo.
1. Install and use the [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-desktop)
1. Install and use the [GitHub CLI](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-cli)
1. [Install `git`](https://git-scm.com/downloads) and use it from the command line. You might find these resources helpful:
    - [Using Git](https://docs.github.com/en/free-pro-team@latest/github/using-git)
    - [`git` cheatsheet](https://training.github.com/)

If you choose an option other than the GitHub UI, you want to install
[Node.js (version >=12)](https://nodejs.org) and [`yarn`](https://classic.yarnpkg.com/en/docs/install).

### Fundamental content concepts

These are some important things to keep in mind about the MDN content.
- **Documents are folders** --  Documents are always
represented by a folder (e.g., [`files/en-us/web/javascript`](files/en-us/web/javascript)), and that folder will contain the content of that specific document as an
`index.html` file (e.g., [`files/en-us/web/javascript/index.html`](files/en-us/web/javascript/index.html)).
- **Documents are hierarchical** - A document folder may contain other folders, where those folders would represent child documents (e.g., [`files/en-us/web/javascript/closures/index.html`](files/en-us/web/javascript/closures/index.html)).
- **Document folders may contain image files** -- A document folder may also contain image files, which are referenced within that document's `index.html` file.
- **All redirects are specified in a single file** -- All of the redirects are specified within [`files/en-us/_redirects.txt`](files/en-us/_redirects.txt), one redirect per line. Each line specifies a `from` and `to` URI separated by whitespace. When you move a document, you'll need to add a redirect to this file specifying that its old URI now redirects to its new URI. If both an `index.html` file and a redirect exist for a document, the document takes precedence and the redirect is ignored.
- **A document's `index.html` starts with "front-matter"** -- Each document's `index.html` file must begin with some YAML called front-matter that defines some important information about the document: `title`, `slug`, and [`tags`](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Howto/Tag) (if any). Here's an example that shows the front-matter from the [JavaScript landing page](files/en-us/web/javascript/index.html):
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

If you just want to make a simple change to a single file, like fixing a typo, the
GitHub UI is the simplest way to do that. For example, if you've found
a typo within the [JavaScript landing page](files/en-us/web/javascript/index.html),
you can sign into GitHub, go to https://github.com/mdn/content, navigate to
`files/en-us/web/javascript/index.html`, and then click on the edit (pencil) button. From there the GitHub UI will take your hand and
[walk you through the rest](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository),
like automatically creating a
[fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
and branch to commit your changes to, as well as helping you reach the ultimate goal, a
[pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests). Your pull-request
represents the work you want to be reviewed, hopefully approved,
and then merged into the `main` branch of this repository.
**See the [pull-request etiquette section](#pull-request-etiquette) for more details.**

If you're not certain of the changes that you want to make, get in touch with us first!
You can [chat with us](https://chat.mozilla.org/#/room/#mdn:mozilla.org) or
[file an issue](https://github.com/mdn/content/issues).

### More substantial changes

If you need to do some work that requires changes to more than one file, like
moving one or more documents, the GitHub UI is not very efficient. You'd have to make
a separate pull-request for every page you want to change. Instead, you're going to
have to use `git` or one of the other `git`-based approaches like the
[GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-desktop).

1. You'll want to create a
[fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
of this repository, so you can freely experiment with branches and changes in your own copy
before submitting your changes as a
[pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
Let's assume your GitHub username is `octocat`. Your fork would be a copy
of this repository but in your own account, so `https://github.com/octocat/content`.

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
local clone as well as your fork (`https://github.com/octocat/content`) up-to-date. For these examples, we'll name
it `mdn`, but you can name it anything you'd like.

    ```sh
    cd ~/repos/mdn/content
    git remote add mdn git@github.com:mdn/content.git
    git remote -v
    ```

1. When you run the `git remote -v` command above, you'll see that you have two remotes:
`mdn` and `origin`. The `origin` remote is the default name that `git` has assigned to your
fork (`https://github.com/octocat/content`).

1. Once you've created your local clone, there's no need to to do that again next time
you want to make a contribution. However, each time before you start a new chunk of work make sure you update your local clone. The following checks-out your local clone's
`main` branch, fetches the latest content from the `main` branch of the `mdn`
repository and merges it into your local `main` branch, and finally checks out
a new branch called `my-work` (you can call it anything you'd like) for
you to work within. When you're ready, you'll push your `my-work` branch to your fork
and use it to make a pull request.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    git checkout -b my-work
    ```

1. Next, you'll want to start the local preview service, so you can see the changes
you'll make as they would look in production. Once started, this local preview
service is available at http://localhost:5000 within your browser.

    ```sh
    # Switch to a separate terminal.
    cd ~/repos/mdn/content
    yarn
    yarn start
    ```

    When you preview a page you can press a button to open its associated document's
    `index.html` file in your preferred editor. For this to work, you need to set an
    environment variable called `EDITOR` before starting the preview server. For example,
    if you prefer VS Code as your editor, you'll want to do something like this:

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
    `yarn start`, you can instead store this in your personal `.env` file.
    It might not exist so you might need to create one. For example:

    ```sh
    echo 'EDITOR=code' >> .env
    yarn start
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
    separate pull-request for each logical chunk.**

1. Once you've made and saved your changes, open a browser, and navigate to the page(s)
you've changed. For example, if you changed `files/en-us/web/javascript/index.html`,
open http://localhost:5000/en-us/docs/web/javascript in your browser.

1. You might have noticed that at the top of each page that you preview, for example
the http://localhost:5000/en-us/docs/web/javascript page, there is a `Show flaws` button.
Click on that button to see if your changes have introduced flaws on the page.

1. Once you're happy with your changes, add and commit them to your branch, and then
push the branch to your fork. Remember, the default name that `git` assigned to the remote
that represents your fork is `origin`.

    ```sh
    cd ~/repos/mdn/content
    git add .
    git commit
    git push -u origin my-work
    ```

1. You're now ready to create a [pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

1. Once you've created your pull-request, sit back, relax, and wait for a review.
**You do not need to request a review. One or more reviewers will be selected for**
**you automatically.** Your pull-request will have to be reviewed and eventually approved before it's merged into the `main` branch, and then later (within 48 hours) published on
[MDN Web Docs](https://developer.mozilla.org). Along the way, you may be asked, not only
to answer questions about your work, but to make changes as well. Don't worry, that's a
common and natural part of the process.
**See the [pull-request etiquette section](#pull-request-etiquette) for more details.**

### Pull-request etiquette

Here are some important rules of etiquette to remember when working with pull-requests.

1. When you submit a pull-request, a number of tests are automatically run. If one or more
of these tests fail, it is your responsibility to try and resolve the underlying issue(s).
If you don't know how to resolve the underlying issue(s), you can ask for help. Your pull-request will not be approved and merged if these tests are failing.

1. If your pull-request has merge conflicts with the `main` branch (GitHub checks for this
automatically and notifies you), it's your responsibility to resolve them. You can do this
by merging the `main` branch into your branch (`git pull mdn main`), and then pushing your
updated branch to your fork (`git push`).

1. Once you've created your pull-request, never use `git rebase` on your branch if you
need to make changes. Any changes should be made as one or more additional commits.

1. If you pack too many unrelated changes into your pull-request, the reviewer has the
right to close it, and request that you submit a separate pull-request for each logical
chunk of changes that belong together.

1. If your pull-request is more than a small change, there should already exist an issue
that explains the need for that change, and you should reference that issue's ID (e.g.
#1234) in your pull-request's description. If an issue does not already exist, please
create one at https://github.com/mdn/content/issues, explaining the motivation for the
change.

1. Do not re-open a pull-request that a reviewer has closed.

### Adding a new document

Adding a new document is relatively straightforward, especially if you can start by copying
the `index.html` of a similar document. There are only a few things to keep in mind:
- Remember that a document is represented by an `index.html` file within its own folder.
- Determine where in the document hierarchy your document belongs. For example, if you're
creating a new CSS document for a new property `foo`, you'll want to create a new folder
`files/en-us/web/css/foo/` and its `files/en-us/web/css/foo/index.html` file.
- Remember that a document's `index.html` file must start with front-matter that defines
the `title`, `slug`, and
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
[pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Moving one or more documents

Moving one or more documents, or an entire tree of documents is easy, because we've created
a special command that takes care of the details for you:

```sh
yarn content move <from-slug> <to-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like to move
(e.g., `Learn/Accessibility`), as well as the slug of its new location (e.g., `Learn/A11y`),
optionally followed by the locale of the existing document (defaults to `en-US`).
If the existing document that you'd like to move has child documents (i.e. it represents
a document tree), the `yarn content move` command will move the entire tree. For example,
let's say you want to move the entire `/en-US/Learn/Accessibility` tree to
`/en-US/Learn/A11y`:

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

1. Perform the move (which will delete and modify existing files, as well as create
new files):

    ```sh
    yarn content move Learn/Accessibility Learn/A11y
    ```

1. Add and commit all of the deleted, created, and modified files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-move
    ```

1. Now you're ready to create your [pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Deleting a document

Deleting one or more documents, or an entire tree of documents is also easy, again because
we've created a special command that takes care of the details for you:

```sh
yarn content delete <document-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like to delete
(e.g., `Learn/Accessibility`), optionally followed by the locale of the existing document
(defaults to `en-US`). If the existing document that you'd like to delete has child
documents (i.e. it represents a document tree), you must also specify the
`-r, --recursive` option, or the command will fail. For example, let's say you want
to delete the entire `/en-US/Learn/Accessibility` tree:

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

1. Now you're ready to create your [pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Adding images

Adding an image to a document is easy as well. All you need to do is add your image
file within the document's folder, and then simply reference the image from within the
document's `index.html` file using an `<img>` element. It's as easy as that. Let's
walk through an example:

1. You should be getting used to this by now, as we've done it several times above.
Make sure you start with a fresh working branch updated with the latest content from
the `main` branch of the `mdn` remote.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-images
    ```

1. Add your image to the document folder. For this example, let's assume we're adding
a new image to the `files/en-us/web/css` document.

    ```sh
    cd ~/repos/mdn/content
    cp /some/path/my-cool-image.png files/en-us/web/css/
    ```

1. Run our `filecheck` command on each image you add. It'll complain if something's wrong.
We'll automatically run this as one of the tests we run when your new pull-request is created,
but why wait to fix any possible issues later?

    ```sh
    yarn filecheck files/en-us/web/css/my-cool-image.png
    ```

1. Use your image within the document. For example, add the following `<img>` element
somehwere inside `files/en-us/web/css/index.html`:

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

1. Now you're ready to create your [pull-request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Updating a browser compatibility table

The browser compatibiliity table shown near the bottom of many of the MDN document pages,
for example on
[the JavaScript Array page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Browser_compatibility),
is generated from the `npm` package created from the https://github.com/mdn/browser-compat-data
repository. If you'd like to make or suggest a change to the content of the browser-compatibility
table on any given MDN document page, you can either use the `Report problems with this data on GitHub` link in the upper-right corner of the table on the page itself to create an issue,
or simply go to https://github.com/mdn/browser-compat-data and
[read more to learn how to contribute](https://github.com/mdn/browser-compat-data/blob/master/docs/contributing.md).

### Adding examples

For a complete description of this topic, see
[the MDN code examples page](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples),
but here's a quick summary of the four types of code example available on MDN:

- [Static examples](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#Static_examples) — plain code blocks, possibly with a screenshot to statically show the
result of such code if it were to be run.
- [Traditional MDN "live samples"](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#Traditional_live_samples) — A macro that takes plain code blocks, dynamically puts
them into a document inside an `<iframe>` element, and embeds it into the page to show the
code running live.
- [GitHub "live samples"](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#GitHub_live_samples) — A macro that takes a document in a GitHub repo inside the [`mdn
organization`](https://github.com/mdn), puts it inside an `<iframe>` element, and embeds
it into the page to show the code running live.
- [Interactive examples](https://developer.mozilla.org/en-US/docs/MDN/Structures/Code_examples#Interactive_examples) — Our system for creating live interactive examples that show the
code running live but also allow you to change code on the fly to see what the effect is.
