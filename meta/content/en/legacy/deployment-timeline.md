---
title: "When will my change show up on the production MDN site?"
linkTitle: "Deployment timeline"
weight: 4
---

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
