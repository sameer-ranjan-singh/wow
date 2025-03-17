# Use a Node.js base image for building the application
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight Nginx image for serving the static files
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional, see step 3)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (or your preferred port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]