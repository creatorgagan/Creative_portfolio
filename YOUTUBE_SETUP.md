# YouTube Playlist Integration - Setup Guide

## Overview
Your portfolio website is now configured to display videos from your YouTube playlist. The portfolio will automatically pull videos from your playlist URL and display them in the gallery.

**Your Playlist:** https://youtube.com/playlist?list=PLcIf6CDZreeVNLjlZ2ja4jRFR5FYKI8Rj

---

## Step-by-Step Setup

### Step 1: Get a YouTube API Key

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account (same one as YouTube)

2. **Create a New Project:**
   - Click on the project dropdown at the top
   - Click "NEW PROJECT"
   - Name it: "My Portfolio"
   - Click "CREATE"
   - Wait for the project to be created

3. **Enable YouTube Data API v3:**
   - In the top search bar, search for "YouTube Data API v3"
   - Click on it
   - Click the "ENABLE" button
   - Wait for it to complete

4. **Create an API Key:**
   - In the left sidebar, click "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key shown in the dialog

5. **Add Key to .env File:**
   - Open `.env` in the project root
   - Find the line: `VITE_YOUTUBE_API_KEY=your_api_key_here`
   - Replace `your_api_key_here` with your actual API key
   - **DO NOT share this key publicly**

---

### Step 2: Verify Configuration

Your `.env` file should now look like:
```env
VITE_YOUTUBE_API_KEY=AIzaSyC...your_full_key...
VITE_YOUTUBE_PLAYLIST_ID=PLcIf6CDZreeVNLjlZ2ja4jRFR5FYKI8Rj
```

---

### Step 3: Restart Dev Server

```bash
npm run dev
```

The website will now:
1. Load your YouTube playlist on startup
2. Display all videos from your playlist
3. Show video thumbnails, titles, and descriptions
4. Link directly to YouTube for viewing

---

## What Happens

### Before API Configuration:
- Portfolio shows 10 fallback sample videos (wedding, fashion, etc.)
- Videos are hardcoded in `sampleVideos.ts`
- No connection to your actual YouTube content

### After API Configuration:
- Portfolio loads your actual YouTube playlist
- Shows all videos you've uploaded to the playlist
- Updates automatically when you add new videos to playlist
- Displays real view counts and descriptions (via API)
- Links directly to your YouTube videos

---

## Troubleshooting

### Issue: "YouTube API key not configured"
**Solution:** Check your `.env` file:
- File exists in project root (not in src/)
- `VITE_YOUTUBE_API_KEY` is set to your actual key
- No extra spaces or quotes around the key

### Issue: "Failed to fetch YouTube playlist"
**Possible causes:**
1. API key is incorrect - re-copy from Google Cloud Console
2. YouTube Data API not enabled - go back and enable it
3. Playlist ID is wrong - verify it matches your playlist URL
4. API quota exceeded - Google gives 10,000 free requests per day

### Issue: Videos still showing fallback samples
**Solution:**
1. Clear browser cache (Ctrl+Shift+Del)
2. Stop dev server (Ctrl+C)
3. Run: `npm run dev`
4. Wait 5-10 seconds for videos to load
5. Check browser console (F12) for error messages

---

## File Locations

| File | Purpose |
|------|---------|
| `.env` | Your YouTube API credentials (DO NOT commit to Git) |
| `src/data/sampleVideos.ts` | Video loading logic and fallback data |
| `src/App.tsx` | Calls `loadPlaylistVideos()` on startup |
| `.gitignore` | Already configured to exclude `.env` file |

---

## Security Notes

⚠️ **IMPORTANT:**
- Never share your API key
- `.env` is in `.gitignore` - won't be committed to Git
- API key is safe on your local machine only
- For production, use environment-specific secrets (e.g., GitHub Secrets)

---

## API Quota

Google provides:
- **10,000 free requests per day** for YouTube Data API
- Each playlist load = ~1 request
- Reloading page multiple times = multiple requests
- Usually won't hit limit with normal usage

---

## Next Steps

1. ✅ Get YouTube API key
2. ✅ Add key to `.env` file
3. ✅ Restart dev server
4. ✅ Visit http://localhost:3000
5. ✅ See your actual portfolio videos!

---

## Support

For issues with:
- **Google Cloud Console:** https://cloud.google.com/docs
- **YouTube API:** https://developers.google.com/youtube/v3
- **Your Playlist:** Check playlist privacy settings (must be public or unlisted for API access)

---

**Status:** Configuration ready - awaiting API key  
**Your Playlist ID:** `PLcIf6CDZreeVNLjlZ2ja4jRFR5FYKI8Rj`  
**Expected:** Videos will load automatically once API key is added
