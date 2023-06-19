#!/bin/sh

echo "Creating database"
npx sequelize-cli db:create

echo "Applying database migrations"
npx sequelize-cli db:migrate

if [ ! -f ".seeded" ]; then
  echo "Seeding data..."
  npx sequelize-cli db:seed:all
  touch .seeded
fi

echo "Starting app..."
npm run start:prod
