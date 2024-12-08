# Facebook Page Viewer

A Next.js application that allows users to view detailed Facebook page profiles including stories, posts, and engagement metrics.

![image](https://github.com/user-attachments/assets/82023d6f-6ecf-456c-af50-08693a8e2454)

[graphql](https://my-app.sanjeev-19kr.workers.dev/graphql)

[frontend](https://met-adata-frontend-git-main-sanjeevs9s-projects.vercel.app/)

### Getting Started

Follow these steps to get the project up and running locally:
```
## 1. Clone the repository:

git clone https://github.com/yourusername/tiktok-profile-viewer.git
cd tiktok-profile-viewer

## 2. Install dependencies:
You can use either npm or yarn to install the required dependencies:


npm install




## 3. Run the development server:
To start the development server, use one of the following commands:


npm run dev




## 4. View the application:
Open your browser and go to http://localhost:3000 to see the result.

```
### Environment Variables

Create a `.env.local` file with the following variables:
NEXTAUTH_SECRET=your_secret_here
FACEBOOK_CLIENT_ID=your_facebook_app_id
FACEBOOK_CLIENT_SECRET=your_facebook_app_secret
NEXT_PUBLIC_GRAPHQL_API_URL= your backend in graphql


## Project Structure
Here's an overview of the project's structure:

```
Copy code
├── app/
│ ├── api/
│ │ └── auth/
│ │ └── config.ts # Auth configuration
│ ├── facebook/
│ │ └── [id]/
│ │ └── page.tsx # Dynamic page viewer
│ └── page.tsx # Home page
├── lib/
│ ├── types.ts # TypeScript definitions
│ └── functions.ts # Utility functions
├── components/ # Reusable components
└── public/ # Static assets
```


## Deployment

This application can be deployed on any platform that supports Next.js applications, such as:

- Vercel (Recommended)
- Netlify
- AWS Amplify

For the easiest deployment experience, we recommend using Vercel:

1. Push your code to a GitHub repository.
2. Import your project to Vercel.
3. Add your environment variables.
4. Deploy!

## Contributing

We welcome contributions to improve this project. To contribute:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m 'Add some amazing feature'`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.



