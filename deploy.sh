#/bin/bash

aws s3 cp . s3://fd04.com --recursive --acl public-read --exclude ".git/*"