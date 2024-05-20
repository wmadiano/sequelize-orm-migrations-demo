# Use the official Node.js image based on Alpine
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install necessary dependencies
RUN apk add --no-cache bash

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure sequelize-cli is installed globally
RUN npm install -g sequelize-cli

# Set the environment variable
ENV NODE_ENV=development

# Run migrations and seed data
CMD npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all


# Build the Docker image
# docker build -t sequelize-orm-migrations-demo .

# Run the Docker container
# docker run sequelize-orm-migrations-demo