#!/bin/bash
# Script to set up WordPress integration dependencies using Bun

echo "🚀 Setting up WordPress integration..."

# Check package.json to avoid duplicate installations
if ! grep -q "\"dompurify\":\|\"jsdom\":\|\"dayjs\":\|\"zod\":\" package.json; then
  echo "Installing missing core dependencies..."
  bun add dompurify jsdom dayjs zod
fi

# Check for development dependencies
if ! grep -q "\"@types/dompurify\":\|\"@types/jsdom\":\" package.json; then
  echo "Installing TypeScript type definitions..."
  bun add -D @types/dompurify @types/jsdom
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
  echo "Creating .env file..."
  cp .env.example .env
  echo "Please update the WP_API_URL in your .env file"
fi

echo "✅ WordPress integration setup completed!"
echo "Next steps:"
echo "1. Update WP_API_URL in your .env file with your WordPress site URL"
echo "2. Run 'bun dev' to start the development server"
echo "3. Visit /blog to see your WordPress content"
