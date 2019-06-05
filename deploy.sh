#!/usr/bin/env sh
# https://vuepress.vuejs.org/guide/deploy.html#github-pages

# abort on errors
set -e

# build
sudo vuepress build docs

# navigate into the build output directory
cd docs

# Push changes
git add -A
git commit -m 'deploy'
git push -f git@github.com:kayoku/powerapi-doc.git master:gh-pages

cd -
