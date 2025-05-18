#!/usr/bin/env bash

set -e
npm run build
cd dist
touch .nojekyll
if [ ! -d .git ]; then
  git init
fi
if ! git remote | grep -q 'deploy'; then
  git remote add deploy git@github.com:thymezy/thymezy.github.io.git
fi
git add -A
git commit -m "Deploy to GitHub Pages"
git push deploy HEAD:gh-pages --force
echo "Successfully deployed to GitHub Pages"