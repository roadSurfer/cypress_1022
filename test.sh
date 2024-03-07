#!/usr/bin/env bash

export npm_config_cache=.npm
export CYPRESS_CACHE_FOLDER=cache/Cypress

cd /test

if [[ $1 == "-i" ]]; then
  echo "NPM installs etc"
  rm -rf node_modules package-lock.json
  npm install
  npm ci
  npx cypress cache prune
else
  echo "NPM etc skipped"
fi

echo "Running Cypress"
echo "Start: "$(date +'%H:%M:%S')
echo "  Expected end: " $(date -d "+ 3 minutes" +'%H:%M:%S')
npx cypress cache list
npx cypress run --browser chrome --spec cypress/e2e/loop.cy.js
echo "Ended: "$(date +'%H:%M:%S')
