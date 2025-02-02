#!/usr/bin/env zsh

rm -rf ~/git-stuff/quartz/content/
cp -r ~/other/shared/Documents/OBSIDIAN/content/ ~/git-stuff/quartz/
npx quartz sync
