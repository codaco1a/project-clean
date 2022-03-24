# ZIP Issue

## Problem

If you are on linux or mac you're all good.
If you are using windows then `udagram-api` build script won't work with you.

## Solution

Download 7-zip and search for a way to add it to your system environment variables.
Then add new script as following: `npm run clean && tsc && cp -rf src/config www/config && cp .npmrc www/.npmrc && cp package.json www/package.json && cd www && 7z a Archive.zip . && cd ..`.
