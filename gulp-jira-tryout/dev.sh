#!/usr/bin/env bash

set -ex

find /home/logic/_workspace/gulp-playlist/gulp-jira-tryout/gulpfile.js |entr -c -s "gulp --ticket MENY-212"