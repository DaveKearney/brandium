#!/bin/bash

# Brandium setup script

echo "🚀 Setting up Brandium development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d. -f1 | tr -d 'v')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or later is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create necessary directories if they don't exist
mkdir -p public/assets

# Check if the installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Set up git hooks if git is installed
if command -v git &> /dev/null; then
    echo "🔧 Setting up git hooks..."
    
    # Create .git/hooks directory if it doesn't exist
    mkdir -p .git/hooks
    
    # Create pre-commit hook
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

# Run linting before commit
echo "Running linting check..."
npm run lint

# Check if linting passed
if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix the issues before committing."
    exit 1
fi

echo "✅ Linting passed"
exit 0
EOF
    
    # Make the hook executable
    chmod +x .git/hooks/pre-commit
    
    echo "✅ Git hooks set up successfully"
fi

# Start the development server
echo "🌐 Starting the development server..."
echo "✨ Brandium setup complete! The development server will start now."
echo "📝 Access the application at http://localhost:3000"
npm run dev