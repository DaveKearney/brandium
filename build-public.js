const fs = require('fs');
const { execSync } = require('child_process');

// Temporarily rename dashboard directory
try {
  console.log('Moving dashboard directory...');
  if (fs.existsSync('./src/app/dashboard')) {
    fs.renameSync('./src/app/dashboard', './src/app/_dashboard');
  }
  
  if (fs.existsSync('./Spec/brandium-prototype v6')) {
    fs.renameSync('./Spec/brandium-prototype v6', './Spec/_brandium-prototype v6');
  }

  // Run the build
  console.log('Building...');
  execSync('next build', { stdio: 'inherit' });
  
  // Create .nojekyll file to disable Jekyll processing
  fs.writeFileSync('./out/.nojekyll', '');
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
} finally {
  // Restore dashboard directory
  console.log('Restoring directories...');
  if (fs.existsSync('./src/app/_dashboard')) {
    fs.renameSync('./src/app/_dashboard', './src/app/dashboard');
  }
  
  if (fs.existsSync('./Spec/_brandium-prototype v6')) {
    fs.renameSync('./Spec/_brandium-prototype v6', './Spec/brandium-prototype v6');
  }
}