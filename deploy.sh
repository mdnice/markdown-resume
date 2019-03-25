#!/usr/bin/env sh

set -e

yarn build
cd build

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:mdresume/mdresume.github.io.git master:master

cd -