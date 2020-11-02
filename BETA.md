# Yari beta launch

As of November 2, 2020, The [Yari](https://hacks.mozilla.org/2020/10/mdn-web-docs-evolves-lowdown-on-the-upcoming-new-platform/) beta is open. This page tells you how you can get involved, and what kind of feedback we're looking for, and where you can put it.

## The state of the beta

When Yari launches, the content will no longer be held in a MySQL database and be edited via a wiki edit system. Instead, it will be held in this GitHub repository — the one you are currently reading — and edited using pull requests.

In the beta phase (November 2 – December 14), we are accepting contributions to the content in GitHub, but the actual live version of the content being shown on [https://developer.mozilla.org](https://developer.mozilla.org) will still come from the MySQL database.

We will update the copy of the content in the repo to be in sync with the wiki each day, however it won't work the other round. When you make a legitimate change to the content repo and it gets accepted, you'll also have to go in and make that change on the wiki if you want to see it live.

On December 14th, we will sync the content in the content repo with the content in the wiki, and the live content on MDN will start to come from the content repo. Exciting times!

## Basic contributions

You'll find most of the information you need to edit Yari in this very repo's main [README file](README.md). Go there, have a read of the [setup instructions](README.md#setup), fork the repo, and try making some changes.

If you want to find some legitimate changes to make while testing the beta, have a look at our [user-submitted documentation issues](https://github.com/mdn/sprints/issues), or think about a page you know of that could do with a better explanation or example!

## Tooling

To begin with, we are keeping the Yari tooling basic, with the intention of improving what's on offer as we get more feedback from. As you'll find out from reading through the README, there are already a few fundamental CLI commands available, such as start (to create a live preview of what your document will look like when rendered on MDN), create (to add a new page), move (to move an existing page), etc.

## Give us feedback!

We are really grateful for any feedback you can give us to help improve on the new MDN Web Docs platform. We are especially interested in information such as:

* What do you really like or not like about it?
* What tools do you think are missing?
* What are you _not_ able to do that you think you _should_ be able to do?

If you want to file a bug or an issue with the new Yari platform, the best place to do so is in [this repo's issues](./issues).

If you want to talk to us about the new platform synchronously, the best place to go is the MDN Web Docs room on Mozilla's Element/Matrix server — read the [Mozilla Matrix page](https://wiki.mozilla.org/Matrix) for instructions. 

If you'd prefer to send us an email, drop us a message at [mdn-admins@mozilla.org](mailto:mdn-admins@mozilla.org). 

We will try to get back to you concerning your feedback as soon as possible, hopefully in a few days. Please bear with us — we are a small team and we anticipate quite a lot of feedback!
