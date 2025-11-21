# Contact Form Setup Instructions

## 1. Setup Resend

1. Go to [https://resend.com](https://resend.com) and sign up
2. Verify your email
3. Go to API Keys section: [https://resend.com/api-keys](https://resend.com/api-keys)
4. Create a new API key
5. Copy the API key

## 2. Setup Vercel Postgres

### Option A: Using Vercel Dashboard (Recommended)
1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on "Storage" tab
3. Click "Create Database"
4. Select "Postgres"
5. Choose "Hobby" (Free) plan
6. Click "Create"
7. Vercel will automatically add environment variables to your project

### Option B: Local Development
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel link` (link your local project to Vercel)
3. Run: `vercel env pull .env.local` (pull environment variables)

## 3. Configure Environment Variables

Edit `.env.local` file:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
```

Replace:
- `re_xxxxxxxxxxxxx` with your actual Resend API key
- `your-email@example.com` with your email address

## 4. Test Locally

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000)
2. Click "Contact Me" button in header
3. Fill out the form and submit
4. Check your email for the message

## 5. Deploy to Vercel

```bash
git add .
git commit -m "Add contact form with Resend and Postgres"
git push
```

Vercel will automatically deploy your changes.

## Important Notes

- **Resend Free Tier**: 3,000 emails/month, 100/day
- **Vercel Postgres Free Tier**: 256 MB storage, 60 hours compute/month
- The database table will be created automatically on first form submission
- For production, verify your domain in Resend to send from your own domain

## Troubleshooting

### Email not sending?
- Check RESEND_API_KEY is correct
- Check CONTACT_EMAIL is set
- Check Resend dashboard for errors

### Database error?
- Make sure Vercel Postgres is connected
- Check environment variables are set in Vercel dashboard
- The table creates automatically on first submission

### Form not opening?
- Check browser console for errors
- Make sure all dependencies are installed: `npm install`
