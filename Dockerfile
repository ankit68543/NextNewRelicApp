# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the entire application code into the working directory
COPY . .

# Set the environment variable for New Relic
ENV NODE_OPTIONS='-r @newrelic/next'
