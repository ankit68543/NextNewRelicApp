# Step 1: Run the install service
echo "Running npm install..."
docker-compose run --rm install

# Step 2: Start the web service
echo "Starting the web service..."
docker-compose up web