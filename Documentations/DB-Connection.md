# Connect to DB

1. After creating RDS, take the provided `endpiont` and write the connection string as following: `postgres://username:password@the-link-you-copied-fron-RDS:5432/dbname`.
1. Then navigate to: `udagram-api/src/sequelize.ts` then add new `sequelize` or delete the old one as shown in the screenshot.
