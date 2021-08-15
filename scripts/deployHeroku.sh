#!/usr/bin/env bash

heroku login &&
git add . &&
git commit -am "deploy heroku" &&
heroku git:remote -a react-typescript-spending &&
git push heroku master