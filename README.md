# Ballet Polaroid Wall 🎀

A standalone, balletcore-style 100-item bucket list and polaroid memory wall.

## Live demo / GitHub Pages

This project is ready for GitHub Pages:
1. Create a public GitHub repository (for example `ballet-polaroid-wall`).
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then Save.
6. After GitHub Pages finishes publishing, open the URL shown there.

The same `index.html` is the online demo. Visitors can use it directly; each visitor's records remain in their own browser.

## Embed in another website

After publishing, add an iframe where you want the wall to appear:

```html
<iframe
  src="https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/"
  title="Ballet Polaroid Wall"
  style="width:100%;min-height:900px;border:0;border-radius:24px;overflow:hidden"
  loading="lazy"
></iframe>
```

For a more deeply integrated installation, copy `index.html`, `styles.css`, and `bucket-list.js` into the target site and adjust the container styles as needed.

## Local data & privacy

- Progress is saved in the visitor's browser `localStorage`.
- Uploaded photos are compressed in the browser and stored in IndexedDB.
- Photos are **not uploaded to GitHub or any server**.
- Browser storage is specific to the site's origin and browser. Different browsers/devices do not automatically share records.
- Clearing browser site data may erase local records. Users should keep their own backups if they need long-term preservation.

## Customize the list

Edit `BUCKET_TASKS` near the top of `bucket-list.js`. Keep each item as `[category, task text]`. The default list contains 100 items.

## Files

- `index.html` — standalone demo page
- `styles.css` — Balletcore UI
- `bucket-list.js` — tasks, photo handling, filters, and local persistence

## Browser support

Use a modern browser with JavaScript, localStorage, and IndexedDB enabled. For best results, publish over HTTPS (GitHub Pages does this automatically).
