<div style="width:100%; height: auto; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <img src="/public/assets/images/logo-text.png">
    <h2>Live Link : <a href="https://modifymate.vercel.app/">https://modifymate.vercel.app/</a> </h2>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Contact](#contact)

## Introduction

Welcome to **ModifyMate** – your ultimate AI-powered image editing companion. Built to cater to all your image editing needs, ModifyMate offers a seamless experience to restore, enhance, and transform your photos with just a few clicks. Our state-of-the-art tools ensure that your images look their best, every time.

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img style="border: 1px red solid; padding: 4px; width: 40%; height: auto;" src="/public/screenShots/pic (9).png">
  <img style="border: 1px red solid; padding: 4px; width: 40%; height: auto;" src="/public/screenShots/pic (4).png">
  <img style="border: 1px red solid; padding: 4px; width: 40%; height: auto;" src="/public/screenShots/pic (5).png">
  <img style="border: 1px red solid; padding: 4px; width: 40%; height: auto;" src="/public/screenShots/pic (6).png">
  <img style="border: 1px red solid; padding: 4px; width: 40%; height: auto;" src="/public/screenShots/pic (1).png">
</div>

### 🔋Features

👉 **Authentication and Authorization**: Secure user access with registration, login, and route protection.

👉 **Community Image Showcase**: Explore user transformations with easy navigation using pagination

👉 **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately

👉 **Image Restoration**: Revive old or damaged images effortlessly

👉 **Image Recoloring**: Customize images by replacing objects with desired colors easily

👉 **Image Generative Fill**: Fill in missing areas of images seamlessly

👉 **Object Removal**: Clean up images by removing unwanted objects with precision

👉 **Background Removal**: Extract objects from backgrounds with ease

👉 **Download Transformed Images**: Save and share AI-transformed images conveniently

👉 **Transformed Image Details**: View details of transformations for each image

👉 **Transformation Management**: Control over deletion and updates of transformations

👉 **Credits System**: Earn or purchase credits for image transformations

👉 **Profile Page**: Access transformed images and credit information personally

👉 **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use

👉 **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

and many more, including code architecture and reusability

### ⚙️ Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## Installation

Follow these steps to get a local copy up and running:

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/imaginify.git
cd imaginify
```

**Installation**

Install the project dependencies using npm:

```bash
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Contact

Md Zahin Uddin
Software Engineer
Samsung Research & Development Institute Bangladesh
E-mail: zahinuddin5@gmail.com
LinkedIn: [https://www.linkedin.com/in/zahinuddin/](https://www.linkedin.com/in/zahinuddin/)
