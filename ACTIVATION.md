# 🚀 One-Command Activation

## Activate Enhanced Version

Run this command to switch to the enhanced version:

```bash
# Windows PowerShell or Command Prompt
npm run activate:enhanced
```

## Revert to Original

Run this command to switch back to original:

```bash
npm run activate:original
```

---

## Or Manually Activate

### To Activate Enhanced Version:

1. Open `src/main.jsx`
2. Change line 3 from:
   ```jsx
   import App from './App.jsx'
   ```
   to:
   ```jsx
   import App from './AppEnhanced.jsx'
   ```
3. Save and restart dev server

### To Revert to Original:

1. Open `src/main.jsx`
2. Change line 3 back to:
   ```jsx
   import App from './App.jsx'
   ```
3. Save and restart dev server

---

## Quick Test

After activating, check these features:

### ✅ Checklist
- [ ] Custom cursor appears (desktop only)
- [ ] Theme toggle button (top right)
- [ ] Particle background in hero
- [ ] Text scrambles when changing roles
- [ ] Buttons follow mouse slightly
- [ ] Project cards tilt on hover
- [ ] Smooth page animations
- [ ] Scroll progress bar at top

If all work → **Success!** 🎉

If something doesn't work → Check browser console for errors

---

## Performance Check

Open DevTools (F12) and check:
- FPS should be 60
- No console errors
- Smooth animations

---

## Browser Support

### ✅ Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### ⚠️ Limited Support
- IE 11 (not recommended)
- Older mobile browsers

---

## Mobile Testing

Test on mobile:
- Custom cursor should NOT appear
- Touch interactions work smoothly
- Animations are simplified
- Everything is responsive

---

## Troubleshooting

### Cursor not visible?
- Only works on desktop
- Check if animations.css is imported in main.jsx

### Animations laggy?
- Reduce particle count in ParticleBackground.jsx
- Check if GPU acceleration is enabled in browser

### Theme toggle not working?
- Check if ThemeProvider wraps the app
- Clear localStorage and refresh

### 3D effects not showing?
- Check if react-parallax-tilt is installed
- Run: `npm install`

---

## Need Help?

1. Read [QUICKSTART.md](./QUICKSTART.md)
2. Read [ENHANCEMENT_GUIDE.md](./ENHANCEMENT_GUIDE.md)
3. Read [SUMMARY.md](./SUMMARY.md)
4. Check component comments in code

---

**That's it! Enjoy your next-level portfolio!** 🚀✨
