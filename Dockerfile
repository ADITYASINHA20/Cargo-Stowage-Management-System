# Use ubuntu:22.04 base image
FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && apt-get install -y curl gnupg2 ca-certificates

# Install Node.js (v18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Install Vite globally (for preview)
RUN npm install -g vite

# Expose Vite preview port
EXPOSE 4173

# Start the app
CMD ["vite", "preview", "--host"]
