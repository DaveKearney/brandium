# Deployment Guide

This document provides step-by-step instructions for deploying Brandium to different environments.

## GitHub Pages Deployment

GitHub Pages deployment is automated using GitHub Actions. When you push to the `main` branch, the application will be automatically built and deployed to GitHub Pages.

### Manual Deployment

If you need to deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Export static files:
   ```bash
   npm run export
   ```

3. Deploy the `out` directory to GitHub Pages.

## AWS Deployment Options

### Option 1: AWS Amplify (Recommended)

AWS Amplify provides a simple way to deploy and host web applications with continuous deployment.

1. Install the AWS Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Configure Amplify:
   ```bash
   amplify configure
   ```

3. Initialize Amplify in your project:
   ```bash
   amplify init
   ```

4. Add hosting:
   ```bash
   amplify add hosting
   ```

5. Deploy:
   ```bash
   amplify publish
   ```

### Option 2: AWS S3 + CloudFront

For a more customized setup with CDN capabilities:

1. Build your application:
   ```bash
   npm run build && npm run export
   ```

2. Create an S3 bucket for your website:
   ```bash
   aws s3 mb s3://your-bucket-name --region your-region
   ```

3. Configure the bucket for static website hosting:
   ```bash
   aws s3 website s3://your-bucket-name --index-document index.html --error-document 404.html
   ```

4. Upload your build:
   ```bash
   aws s3 sync out s3://your-bucket-name --acl public-read
   ```

5. Create a CloudFront distribution pointing to your S3 bucket.

### Option 3: AWS Elastic Beanstalk

For a more traditional web server approach:

1. Install the EB CLI:
   ```bash
   pip install awsebcli
   ```

2. Initialize the EB environment:
   ```bash
   eb init
   ```

3. Create an environment:
   ```bash
   eb create
   ```

4. Deploy:
   ```bash
   eb deploy
   ```

## Environment Variables

For production deployments, you may need to set the following environment variables:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain.com
```

## SSL Configuration

Ensure all production deployments use HTTPS:

- GitHub Pages: HTTPS is enabled by default
- AWS Amplify: HTTPS is enabled by default
- S3 + CloudFront: Configure SSL certificate in AWS Certificate Manager
- Elastic Beanstalk: Configure SSL using `.ebextensions`

## Monitoring and Logging

- Set up AWS CloudWatch for monitoring and logging
- Configure alerts for application errors and performance issues
- Set up regular health checks

## Continuous Integration/Continuous Deployment (CI/CD)

The repository is already configured with GitHub Actions for CI/CD. To set up AWS deployment in the CI/CD pipeline:

1. Store AWS credentials as GitHub secrets
2. Update the `.github/workflows/github-pages.yml` file to include AWS deployment steps
3. Configure branch protection rules to ensure code quality before deployment

## Troubleshooting

If you encounter deployment issues:

1. Check application logs
2. Verify environment variables
3. Ensure all AWS permissions are correctly configured
4. Review build scripts and configurations