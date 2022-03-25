# AWS & EBS CLIs Related

## Installation

* AWS:
  You can download AWS CLI setup application via AWS official website.

* EBS:
  AWS recommends that you download EBS via thier setup/script. You might need first to download python via pyenv package manager along side with git(SCM), virtualenv via pipx.
  Remember that these are the recommended. You can just download each dependency as you wish.

* Configuration:
  You will need to provide `AWS ACCESS KEY ID` and `AWS SECRET ACCESS KEY` to these CLIs.

## Commands

* Init:
  `eb init application-name --region select-region --platform select-platform`

* Create:
  `eb create --sample environtment-Name`

* Use:
  make sure you are using the same environment: `eb use environment-name`.

* Deploy to EBS:
  You might need to execute `eb use environment-name`. Then `eb deploy`
  Don't forget to add Deploy PATH to .elasticbeanstalk/config.yml
  AWS DOCS

* Deploy to S3:
  `aws s3 cp --recursive --acl public-read ./www s3://you-bucket-name/`

* Environment Variable:
  `eb setenv key=value`.