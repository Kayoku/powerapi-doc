# README

## Details

First, follow the [vuepress installation with local dependency](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project), then you can read the [vuepress deploying for github pages](https://vuepress.vuejs.org/guide/deploy.html#github-pages) for more details.

## Update the repo

Update the following line in `deploy.sh` with the good github repository `git push -f https://github.com/{GITHUB_USERNAME}/{GITHUB_REPOSITORY} master:gh-pages`

Then execute `./deploy.sh` for update online documentation. You also need to configure the github repository and publish github-page in gh-pages branch.
