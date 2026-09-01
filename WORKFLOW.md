# Spectrum — Editing Workflow & Growth Guide

A simple, keepable manual for maintaining **spectrum.lifeofakhil.com**.
You only ever edit **`thoughts.js`**. Never touch `index.html`.

---

## PART 1 — The golden rule

> All your writing lives in **`thoughts.js`**.
> Each thought is one block `{ ... },` inside the `THOUGHTS` list.
> Newest thought goes at the **top**. The site sorts by date automatically.

Two ways to edit the file:
- **On GitHub (any device):** repo → click `thoughts.js` → pencil ✏️ → edit → **Commit changes.**
- **On desktop (safer for long writing):** edit in VS Code → upload the file → **Commit.**

Either way, the site rebuilds and goes live in about a minute. Then hard-refresh
(Ctrl+F5, or a private tab) to skip your browser's cache.

---

## PART 2 — Editing a placeholder thought

The site currently has 7 placeholder thoughts (ids `041`–`047`). To turn one into
your real writing, just overwrite the fields. Change the words, keep the structure
(the quotes, colons, commas, and brackets must stay exactly as they are).

**Before (placeholder):**
```js
  {
    id: '045',
    section: 'music',
    title: 'The song that only works at the exact wrong hour',
    date: '2026-08-14',
    read: 4,
    excerpt: 'Some tracks are keyed to a specific loneliness...',
    body: [
      'There is a small category of songs that will not perform on command...',
      'Music is stubbornly contextual like that...'
    ],
    stayed: 'A song is a bookmark you can hear.'
  },
```

**After (your real thought — same skeleton, new words):**
```js
  {
    id: '045',
    section: 'music',
    title: 'Your real title here',
    date: '2026-09-05',
    read: 3,
    excerpt: 'Your one-line teaser here.',
    body: [
      'Your first paragraph.',
      'Your second paragraph.'
    ],
    stayed: 'Your closing reflection.'
  },
```

Tip: replace placeholders one at a time. Commit after each, check the site, then do
the next. Small steps are easy to undo if something looks off.

---

## PART 3 — Adding a brand-new thought (on top)

1. Open `thoughts.js`.
2. Find this marker near the top:
   ```js
   /* ▼▼▼ ADD YOUR NEWEST THOUGHT JUST BELOW THIS LINE ▼▼▼ */
   ```
3. Paste a new block right below it, so the newest sits first.
4. Fill in the fields and **Commit**.

**Copy-paste template:**
```js
  {
    id: '048',
    section: 'mountains',
    title: 'Your title here',
    date: '2026-09-10',
    read: 5,
    excerpt: 'One or two sentences that tease the thought.',
    body: [
      'First paragraph.',
      'Second paragraph.',
      'Add as many as you like — each in quotes, separated by commas.'
    ],
    stayed: 'Your closing reflection.'
  },
```

**Field guide:**

| Field | What to put | Example |
|-------|-------------|---------|
| `id` | Next number, as text in quotes | `'048'` |
| `section` | One of the seven ids (see below) | `'mountains'` |
| `title` | Headline of the thought | `'Above the clouds...'` |
| `date` | `'YYYY-MM-DD'` | `'2026-09-10'` |
| `read` | Estimated minutes, a plain number | `5` |
| `excerpt` | Teaser shown on cards | `'A short hook.'` |
| `body` | List of paragraphs, each in quotes | `[ 'Para 1.', 'Para 2.' ]` |
| `stayed` | The "What stayed with me" line | `'One lasting line.'` |

**The seven section ids:**
`'not-so-good'` · `'the-good'` · `'music'` · `'mountains'` · `'movement'` · `'movies'` · `'learning'`

---

## PART 4 — The five rules that prevent 99% of mistakes

1. **Keep every quote `'...'` closed.** Text goes inside quotes.
2. **Keep the comma** after each block's closing `}` — except it's optional on the very last one.
3. **Don't use a plain apostrophe inside single-quoted text.** Write `don't` as `don\u2019t`
   (a curly ') or escape it as `don\'t`. Curly quotes “ ” ‘ ’ are safest and look nicer.
4. **`read` is a number** (`5`), everything else is text in quotes (`'5 min'` would be wrong).
5. **Edit one thing, commit, check.** If the site looks blank after an edit, your last
   change had a typo — undo it (GitHub keeps every version) and try again.

> Safety net: if `thoughts.js` ever has an error, only your text is affected — the engine
> (`index.html`) is untouched, so nothing is ever permanently broken. Just fix the typo.

---

## PART 5 — Adding multimedia later (future reference — not needed yet)

Your thoughts are currently text-only, which is perfect for now. When a thought genuinely
calls for a picture, audio, video, or a link, here's the approach. Use it **sparingly** —
the site's beauty is its restraint.

### 5.1 Where to store the media
- Create a folder in your repo called **`media`** (Add file → name it `media/photo1.jpg`
  and GitHub makes the folder).
- Upload your image/audio/video there. Keep files small (compress images to < 300 KB,
  clips short) so the site stays fast and lasts cheaply for years.
- Reference them by path, e.g. `media/kashmir.jpg`.

### 5.2 The small change needed in the engine
Right now the engine prints each paragraph as plain text. To allow media, your CS friend
(or a future session with me) makes a **one-time** tweak so paragraphs can contain HTML.
After that, you can drop these snippets straight into a `body` paragraph:

**A photo (with optional caption):**
```js
'<img src="media/kashmir.jpg" alt="Sunrise over the valley" style="width:100%;border-radius:4px">',
'<span style="font-size:14px;color:#6b6b70">Sunrise, Kashmir — March 2027.</span>',
```

**An audio clip:**
```js
'<audio controls src="media/song-clip.mp3" style="width:100%"></audio>',
```

**A short video snippet:**
```js
'<video controls src="media/trail.mp4" style="width:100%;border-radius:4px"></video>',
```

**A YouTube / external video (embed):**
```js
'<iframe src="https://www.youtube.com/embed/VIDEO_ID" style="width:100%;aspect-ratio:16/9;border:0;border-radius:4px" allowfullscreen></iframe>',
```

**A link inside your writing:**
```js
'Read the piece that started this <a href="https://example.com" style="color:#3A78A8">here</a>.',
```

### 5.3 A cleaner long-term option
For lots of media, your friend may suggest hosting large files elsewhere (YouTube for video,
a photo service) and just embedding/linking them — this keeps your repo light. That's a
"when you get there" decision; text + the occasional small image will serve you for a long time.

---

## PART 6 — Keeping it alive (the legacy checklist)

- **Domain:** keep `lifeofakhil.com` renewed on GoDaddy (auto-renew ON).
- **Backups:** keep master copies of `index.html`, `thoughts.js`, `README.md` on your
  computer **and** a cloud drive. With those, the whole site is rebuildable anywhere.
- **Account:** it's under your personal GitHub — access is never tied to any employer.
- **When it grows large:** consider Jekyll (GitHub Pages supports it natively). No rush —
  the current setup is good for years.

---

*Seven colours. Seven perspectives. One observer.*
