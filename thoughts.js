/* ============================================================
   SPECTRUM — YOUR THOUGHTS
   ------------------------------------------------------------
   This is the ONLY file you edit to add a new thought.
   You never need to touch index.html.

   HOW TO ADD A THOUGHT:
   1. Copy the TEMPLATE block at the very bottom of this file.
   2. Paste it just below the "ADD YOUR NEWEST THOUGHT" marker,
      so the latest always sits at the top.
   3. Fill in the fields, save, commit. Live in ~1 minute.

   THE SEVEN SECTION IDs (use one for "section"):
     'not-so-good'  — Violet  · Not So Good
     'the-good'     — Indigo  · The Good
     'music'        — Blue    · Music
     'mountains'    — Green   · Mountains
     'movement'     — Yellow  · Movement
     'movies'       — Orange  · Movies
     'learning'     — Red     · Learning

   FIELD GUIDE:
     id       a unique number as text, e.g. '004'
     section  one of the seven ids above
     title    the headline of your thought
     date     'YYYY-MM-DD'  e.g. '2026-09-18'
     read     estimated minutes to read, a number e.g. 5
     excerpt  one or two teaser sentences (shown on cards)
     body     a LIST of paragraphs and/or media blocks (see below)
     stayed   your closing reflection — the "What stayed with me" line

   ------------------------------------------------------------
   ITALICS
   ------------------------------------------------------------
   Wrap anything in *asterisks* to italicise it. Works in the
   title, excerpt, paragraphs, captions and the "stayed" line.

       'I even watched *Troy* (2004) as a warm-up.'

   Asterisks must come in PAIRS on the same line.
   Do NOT use asterisks for song/film names inside the browser
   tab — those are stripped automatically, so no harm either way.

   ------------------------------------------------------------
   THE BODY: paragraphs AND media blocks
   ------------------------------------------------------------
   Each item in "body" is either:

     a) a plain string in quotes  →  becomes a paragraph
     b) a { block } in braces     →  becomes media

   Place a block anywhere in the list and it appears exactly
   at that point in the article. Comma after each item.

   --- QUOTE (for books, dialogue, lyrics) --------------------

       {
         type: 'quote',
         text: 'The quotation goes here.',
         cite: 'Who said it, and where'     // optional
       },

   Renders indented and italic, with a thin rule on the left.
   'cite' appears small and grey beneath it.

   --- YOUTUBE (embedded, playable) ---------------------------

       {
         type: 'youtube',
         id: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
         caption: 'Optional caption.'       // optional
       },

   Paste the FULL YouTube URL — no need to extract the ID.
   Short youtu.be links and /shorts/ links work too.
   Renders as a responsive 16:9 player.

   --- IMAGE --------------------------------------------------

       {
         type: 'image',
         src: 'media/your-picture.png',
         caption: 'Optional caption.'       // optional
       },

   Upload pictures to the "media" folder in this repo first.
   The filename must match EXACTLY, capitals included.

   --- LINK (a tidy card pointing elsewhere) ------------------

       {
         type: 'link',
         url: 'https://example.com/page',
         title: 'What this link is',        // optional
         label: 'Elsewhere'                 // optional heading
       },

   --- AUDIO / VIDEO (files you upload yourself) --------------

       { type: 'audio', src: 'media/clip.mp3', caption: '…' },
       { type: 'video', src: 'media/clip.mp4', caption: '…' },

   ------------------------------------------------------------
   FIVE RULES THAT PREVENT MOST MISTAKES
   ------------------------------------------------------------
   1. Keep every quote '...' closed.
   2. Keep the comma after each item and each closing brace.
   3. Use curly apostrophes (’) inside single-quoted text,
      e.g. 'don’t' — a straight ' would end the string early.
   4. 'read' is a plain number (5), not text ('5 min').
   5. Edit one thing, commit, check. If the page goes blank,
      your last edit has a typo — GitHub keeps every version,
      so just undo and try again. index.html is never affected.
   ============================================================ */



var THOUGHTS = [

  /* ▼▼▼ ADD YOUR NEWEST THOUGHT JUST BELOW THIS LINE ▼▼▼ */
{
  id: '004',
  section: 'not-so-good',
  title: 'The Arithmetic of Mercy',
  date: '2026-09-21',
  read: 7,
  excerpt: 'A villain who was right about the problem and catastrophically wrong about the answer. Thanos, Malthus, and the arithmetic that justified the corpses.',
  body: [
    'Almost a decade ago, Marvel Studios made a film in which the villain won. He decimated the heroes and carried out an almost irreversible mass killing on a universal scale — the Snap, and the five years of absence that followed it, the Blip.',

    'At first glance he appears to be the ultimate cosmic tyrant. Physically unstoppable, ruthlessly intelligent, willing to erase half of all life. Yet what separates him from most blockbuster villains is that he does not consider himself evil at all. He genuinely believes he is performing a necessary act of mercy.',

    'The name is Thanos.',

    'The comic creator Jim Starlin drew on the Freudian idea of the death drive in creating him, with a nod to Thanatos from Greek mythology. Marvel then adjusted his motivation for the screen, moving him away from the comics’ version — a being courting Mistress Death — toward something colder and more argued.',

    'And that adjustment is what makes him interesting. Thanos is the modern test case for a particular kind of villain: one who is right about the diagnosis and catastrophically wrong about the cure.',

    'Unlike villains who want wealth, revenge or power, Thanos believes he is sacrificing for a greater good. He loses allies, family, and ultimately the one person he appears to love, and carries on regardless, because he values the mission above his own happiness. That willingness to suffer for the cause is what makes him disturbingly convincing.',

    'Nowhere more than in the scene where he sacrifices his foster daughter Gamora to obtain one of the six Infinity Stones. Can you imagine a tyrant weeping — not as performance, but from something that looks genuinely like grief? That single layer gives the character a texture most antagonists never earn.',

    'The other frightening thing about him is his certainty. He is not impulsive, not driven by rage. He is calm, patient and methodical. He listens to his opponents and often treats them with a measure of respect.',

    {
      type: 'quote',
      text: 'You have my respect, Stark. When I’m done, half of humanity will still be alive. I hope they remember you.',
      cite: 'Thanos, to Tony Stark — *Avengers: Infinity War*'
    },

    {
      type: 'quote',
      text: 'I know what it’s like to lose. To feel so desperately that you’re right, yet to fail nonetheless. Dread it. Run from it. Destiny arrives all the same. And now it’s here. Or should I say, I am.',
      cite: 'Thanos, to the Asgardians — *Avengers: Infinity War*'
    },

    'And yet no argument can move him, because he has already decided that he alone understands the truth. His greatest flaw is arrogance disguised as wisdom. He assumes that because he can perceive a problem, he is entitled to decide the fate of everyone else. That is the belief that turns a visionary into a dictator.',

    'His conviction is simple: resources are finite, populations grow unchecked, and suffering is therefore inevitable unless someone intervenes. The tragedy is not that he lacks compassion. It is that his compassion curdles into absolute certainty. He never doubts himself. Every atrocity becomes justified so long as it serves his vision of balance.',

    'Which is not a new idea at all. It is an old and discredited one, first set out by Thomas Malthus in 1798 — and Thanos echoes it almost word for word.',

    {
      type: 'quote',
      text: 'It’s a simple calculus. This universe is finite, its resources, finite. If life is left unchecked, life will cease to exist.',
      cite: 'Thanos — *Avengers: Infinity War*'
    },

    'He even has his own case study. Titan, his home planet, where he says unchecked growth led to collapse and the near extinction of his species. He proposed the cull. He was refused. He watched the world end anyway, and never forgot being right.',

    'What unsettles me is that he is not even original in this. Huxley’s *Brave New World* gives us a World State that regulates human numbers through mass in-vitro production, with women conditioned to wear contraceptive Malthusian belts. Dan Brown’s *Inferno* gives us Bertrand Zobrist, a geneticist so consumed by the same anxiety that he engineers a pathogen to sterilise a third of humanity.',

    'History is worse, because it actually happened. Scholars have traced Hitler’s doctrine of *Lebensraum* to a twisted Malthusian logic — the belief that a nation’s population is capped by its territory, and that the answer is conquest and the elimination of surplus people. And during the Irish Potato Famine and the famines of British-ruled India, colonial administrators influenced by Malthusian economics delayed or restricted relief, treating mass death as a natural, self-correcting check on populations that had supposedly grown too fast.',

    'That is the company Thanos keeps. Every one of them believed the arithmetic justified the corpses.',

    {
      type: 'image',
      src: 'media/Thanos_Case_For.png',
      caption: 'The arithmetic that convinced him.'
    },

    'The trouble is that Malthus was wrong, and we have had two centuries to find out why.',

    'He assumed people only consume. They also invent. Every additional person is another mind capable of finding a better yield, a cleaner fuel, a way to feed more from less — which is precisely why the famines he predicted for the twentieth century did not arrive on schedule. And populations do not, in fact, grow without limit. Demographic transition theory describes what actually happens as societies become wealthier and better educated: birth rates fall on their own, without anyone being culled. Much of the world is already there.',

    'So Thanos did not merely halve the demand. He halved the solution.',

    'And then there is the gauntlet, which undoes him completely. It grants total command over reality, matter and energy. He was, in economic terms, holding infinite abundance in his hand. Doubling the universe’s resources was available to him. So was limitless clean energy. So was simply making scarcity optional.',

    'He chose slaughter instead. Not because it was necessary, but because he could not imagine anything else. A man with unlimited power and a failure of imagination is a more frightening thing than a monster.',

    {
      type: 'image',
      src: 'media/Thanos_Argument_Collapses.png',
      caption: 'The two things the arithmetic left out.'
    },

    'Thanos is a paradox: a compassionate extremist, a visionary tyrant, a would-be saviour who becomes the greatest destroyer in his universe’s history. His power does not come from the stones alone. It comes from an unwavering belief that he is right.',

    'In a universe full of monsters, he is terrifying precisely because he is not driven by hatred. He is driven by conviction.',

    'Which leaves the harder question, and I do not have a tidy answer for it. How do you deal with a real-life Thanos — someone of genuine intelligence and genuine compassion, utterly convinced, and utterly wrong? You cannot argue him down, because he has already accounted for your argument. You cannot appeal to his conscience, because his conscience is what brought him here.',

    'Perhaps that is the only real lesson available. The dangerous people are rarely the ones who know they are the villain.',

    'Then again, the Avengers did eventually find an answer. It took them five years, most of a decade of films, and a great deal of help.',

    'So — tune in, and look for solutions, as the fans catch a recap of *Avengers: Endgame Encore* from this weekend.'
  ],
  stayed: 'He was right that there was a problem. Everything terrible he did followed from being certain he was also right about the answer.'
},
   
{
  id: '003',
  section: 'learning',
  title: 'Rosy-Fingered Dawn — Reading the *Odyssey* After Watching It',
  date: '2026-09-18',
  read: 7,
  excerpt: 'A friend gifted me Butler’s translation after I enjoyed Nolan’s film. Seven things stood out — and one of them explains why this story refuses to die.',
  body: [
    'A friend gifted me Samuel Butler’s translation of the *Odyssey* on learning that I had enjoyed the Nolan-esque adaptation on screen. I started reading it right away.',

    'The prosaic translation made it easier going than I expected. Butler renders in prose what Homer sang in verse, and that single decision turns an epic poem into something closer to a novel — a thing you can actually finish rather than merely admire. The only real friction came from the references to the various gods, which Homer assumes his reader already knows. I did not, always. I looked them up as I went.',

    'Seven things stood out during and after the reading.',

    'Homer uses a phrase that translates to *Child of Morning, rosy-fingered Dawn* every single time a new day appears. Classic personification, and it put a smile on my face each time I ran into it. Because in a long-drawn homecoming, a new day could mean a new challenge or another turn in the story. The Child of Morning was a signpost for newer courses.',

    '*Hecatomb* was another word I kept meeting, and I had to dig to find out what it meant. The epic is set in a period where divine agency was believed to manifest, and the human need to seek favours meant carrying out sacrificial offerings. A hecatomb was the communal event that ritualised the practice. Throughout the length of the story, the pantheon influences events both small and large — and Athena, called Minerva in my translation, is the steady advocate of Odysseus.',

    'Odysseus is a charming and shrewd storyteller first, and an adept fighter second. In that order. In the many episodes where he is forced to conceal his identity, he spins tales and histories that make anyone believe him. The fighting we already know about. The lying is the part that surprised me.',

    'The epic is non-linear by structure, which made it a test of patience and memory. One character I had not expected to find so interesting is Nausicaa, who helps Odysseus at an hour of dire need. She and the people of her kingdom are instrumental in getting him to the shores of Ithaca after his long stay with Calypso. Grounded as the whole episode is, it is something I wish Nolan had included, even briefly. That is a wish I only developed after the reading.',

    'The journey is fraught with danger, but by Homeric design the homecoming is no different. The character who foretells and foreshadows what might lie in wait for Odysseus at home is Agamemnon — the very man who led the Trojan war that made Odysseus leave Ithaca in the first place.',

    'Then there is an exchange in the land of the dead that I keep returning to.',

    {
      type: 'quote',
      text: 'My poor Ulysses, noble son of Laertes, are you too leading the same sorry kind of life that I did when I was above ground? I was son of Jove, but I went through an infinity of suffering, for I became bondsman to one who was far beneath me…',
      cite: 'Hercules, to Odysseus, in the land of the dead'
    },

    'A hero understanding and acknowledging what toll it really takes to live a heroic life. Not the glory. The cost.',

    'And to finish on a lighter note — the face that launched a thousand ships is, by the time Telemachus visits Sparta seeking news of his father, quite contentedly playing host under Zeus’s law of *Xenia* alongside Menelaus. Seriously? A long war was initiated on Helen’s account, whether one reads it as elopement or abduction, and life simply goes on as normal.',

    'What kept me trudging through the epic was what Homer knew about human nature.',

    'He wrote a man who comes home and does not recognise his own life. Who weeps hearing his own war sung by a stranger. Who lies compulsively even when the truth would serve him better. That is not primitive storytelling. That is observation we would now call psychological — and precisely why Nolan could pursue the psychological angle as far as he did. The material was already there.',

    'Which brings me to why it has survived two thousand seven hundred years.',

    'Perhaps because the psychological observations are still true about humans, despite the noise. Fashions in gods and heroes may come and go. Accuracy about people is not going out of fashion.',

    'If you would like a brisk way in before committing to the whole epic, this is where I would point you.',

    {
      type: 'youtube',
      id: 'https://youtu.be/MS4jk5kavy4?si=g_Bj27Lviacp_pxQ',
      caption: 'Crash Course Literature on the *Odyssey* — a channel I keep returning to.'
    }
  ],
  stayed: 'Homer did not need psychology to describe a mind at war with itself. He only needed to watch people closely, and write down what he saw.'
},
   
{
  id: '002',
  section: 'movies',
  title: 'We All Knew How It Ends — Nolan’s *The Odyssey*',
  date: '2026-09-16',
  read: 5,
  excerpt: 'A two thousand seven hundred year old story with no twist left to spoil. And still, for three hours, I could not look away.',
  body: [
    'I went in knowing the whole story. I even watched *Troy* (2004) as a warm-up. I suppose almost everyone knows it. A man leaves for war, wins it by hiding soldiers inside a wooden horse — giving us the phrase Trojan horse — and then takes twenty years to travel home. His wife waits. His son grows up without him. He returns and reclaims what is his. A troubled homecoming. Or Nostos.',

    'Two thousand seven hundred years old. No twist left to spoil. Only the ever-relevant themes of *Nostos*, of *Xenia* — shall we say the Greek equivalent of our *Athithi Devo Bhava*? — and of a relentless determination to withstand adversity. Whether mythical or real. Mystical or grounded. Even in a time of apparent magic, as Nolan’s intertitle puts it.',

    'And yet, for three full hours, I sat there spellbound.',

    'I have always been a fan of Nolan’s storytelling, and most of his films age well. I watched this one in 4DX in Bengaluru, before attending and singing at a friend’s wedding. The splurge was worth it. The storms and the seas came alive in synchronised seat movements, with occasional flashes of lightning, air blasts and mist sprays when the scenes demanded them.',

    'That is the strange thing about the oldest stories. Suspense was never really the point. We do not return to them to find out what happens. We return to find out *how it feels* when it happens, and whether it feels different to us now than it did the last time.',

    'Nolan seems to understand this. The film does not open with Odysseus at all. It opens with a bard standing on a table in a banquet hall, telling a story to a room full of people. A story about a story. A meta-story set up. Before we meet the hero, we meet the act of telling.',

    'The film is a slow burner, and its length befits the length of the epic. The mythological and supernatural portions are trimmed for narrative economy, but what each of them leaves you with felt like an adult version of something I once read in a children’s retelling, *The Adventures of Ulysses*. Ulysses being Odysseus himself, in his Latin form.',

    'Given *Oppenheimer*, I expected Nolan to offer a humanist interpretation. He does. Yet the film still leaves room for enough monsters to stay true to the source material, and to the myriad meanings that writers have drawn from it across the centuries. The effect surprised me at moments.',

    'Two scenes in particular stayed with me.',

    'The first is when Odysseus remembers the fall of Troy with a tinge of survivor’s guilt and something close to war-induced PTSD. The Trojan Horse is framed as the ultimate violation of Zeus’s law of *Xenia*. He himself admits that his own homecoming mirrors it. If he could destroy another man’s home, why would he not fear the same being done to his — by the suitors who have taken up residence in it? That is Nolan’s invention, and it is a fine one.',

    'The second is Athena appearing as an apparition of guilt. I would rate this brilliant as a storytelling device. In the epic, Athena pulls most of the strings and bends circumstances in Odysseus’s favour. Here she becomes a figment of the guilt he carries home from Troy — one that lingers until he can forgive himself for what was never entirely within his control.',

    {
      type: 'image',
      src: 'media/Odyssey_Nolan_Trials.png',
      caption: 'Every monster, read inward.'
    },

    'Which made me think about how much of this is true outside the cinema too, whether the matter at hand is revenge or simply healing a wound.',

    'We reread books we have already finished. We rewatch films whose endings we can recite. We ask our parents for the same stories we have heard a hundred times.',

    'Not because we forgot.',

    'Because the story is not the information. The story is also the experience of being inside it again — another chance to unravel a dimension we missed the last time.',

    'In Thought #001 I wrote that beauty often arrives before understanding. This felt like the other half of the same idea. Understanding everything in advance does not reduce the beauty either.',

    'A story you already know can still take you somewhere. Somewhere you meet another version of yourself — the one that wishes you had taken a different path or made a different decision. Another verse in the song of the Sirens.'
  ],
  stayed: 'Twenty years to travel a distance that should have taken weeks. Perhaps the journey was never the obstacle. Perhaps it was the point.'
},
   
{
  id: '001',
  section: 'music',
  title: 'Seven Songs. From Star Singer Malayalam.',
  date: '2026-09-05',
  read: 4,
  excerpt: 'Seven songs from the Star Singer Malayalam Grand Finale reminded me that beauty often arrives before understanding.',
  body: [
    'Some people say reality shows are scripted for dramatic effect. Notwithstanding that, the brilliance of timeless compositions sung by talented contestants is always a pleasure to watch, both as a musician and as a general music lover. Because music is far bigger than the drama that surrounds it, if at all.',

    'Watching the Star Singer Malayalam Grand Finale last week gave me at least seven songs, each carrying a classical foundation that stretched far beyond my own understanding. Some of them were already familiar to me. Some were not. What caught my attention was not the competition itself, but the way music revealed itself in layers.',

    'For listeners with deep musical training, these songs can open doors into ragas, traditions, structures and nuances that can be appreciated at a much deeper level. Behind each performance was a musical lineage far older and richer than the few minutes heard on stage.',

    'Yet none of that felt like a barrier.',

    'One could still enjoy the songs. My parents, for instance, are not as musically trained as I am, yet they enjoyed them just as much. And that is important, not just in music but in art in general, whether performed on stage or created on canvas.',

    'There is a tendency to assume that appreciating something requires understanding everything about it. Music quietly disagrees.',

    'Knowledge undoubtedly deepens the experience. But beauty often arrives before understanding.',
     
     {   
      type: 'image',
      src: 'media/Songs_05-09-26.png',
      caption: 'Seven songs. Seven classical roots.'
     },
     
    'A listener doesn’t need to know Megh Malhar to enjoy *Garaj Garaj*. One doesn’t need to recognise Kalyani to be moved by *Devanganangal*. One may not even know that there exists a Carnatic ragam called Gowrimanohari and still not miss the beauty in *Paattum Naane*.',

    'Complex, yet beautiful.',

    'The more I thought about it, the more this seemed true beyond music.',

    'A mountain remains beautiful even if one cannot explain its geology. A film can move us before we understand how a storytelling device was conceived by a director. A book can change us before we fully grasp why.',

    'Appreciation comes first.',

    'Understanding may follow later, if one chooses to pursue it with heart.',

    'Another thought resonated with me.',

    'Malayalam audiences have always seemed remarkably willing to embrace good music irrespective of language or origin. The very list of songs mentioned here is a testament to that. Listening comes before labels.',

    'Why should we restrict ourselves to a single genre or language of music?',

    'The world is vast, and its musical traditions are even more so.',

    'Perhaps that openness is one reason why so many different musical traditions continue to find a home on a platform like Star Singer Malayalam.'
  ],
  stayed: 'Great music doesn’t need to announce its complexity. Sometimes, it simply sounds beautiful. Beauty often precedes deeper understanding.'
},


  /* ▲▲▲ ADD YOUR NEWEST THOUGHT JUST ABOVE THIS LINE ▲▲▲ */

  {
    id: '047',
    section: 'not-so-good',
    title: 'Why the best villains sometimes make more sense than the heroes',
    date: '2026-08-28',
    read: 7,
    excerpt: 'A hero who never doubts is just a schedule. A villain who is right about the diagnosis and wrong about the cure is a mirror.',
    body: [
      'The most durable antagonists are rarely evil for its own sake. They begin with a grievance we quietly recognise — an unfairness, a broken system, a promise the world failed to keep.',
      'What makes them dangerous is not that they are wrong about the wound. It is that they are wrong about the cure. They mistake demolition for repair.',
      'Sitting with that discomfort is useful. It forces a harder question than "who is good?" — it asks, "at what point did a reasonable person choose an unreasonable answer?"'
    ],
    stayed: 'The line between a critic and a villain is often just patience.'
  },
  {
    id: '046',
    section: 'the-good',
    title: 'Quiet courage is the kind that never trends',
    date: '2026-08-21',
    read: 5,
    excerpt: 'We celebrate the loud, decisive kind of bravery. The rarer sort just shows up again tomorrow.',
    body: [
      'Admiration usually goes to the dramatic gesture — the speech, the sacrifice, the single defining moment.',
      'But the people I keep coming back to are steadier than that. They are kind when no one is counting. They keep a promise that stopped being convenient months ago.',
      'Character, it turns out, is less an event than a habit. It compounds silently, and you only notice the interest years later.'
    ],
    stayed: 'Reliability is an underrated form of love.'
  },
  {
    id: '044',
    section: 'mountains',
    title: 'Above the treeline the noise finally runs out',
    date: '2026-07-30',
    read: 6,
    excerpt: 'Altitude has a way of shrinking the arguments you carried up with you.',
    body: [
      'Somewhere past the last stunted trees the wind takes over and the mental chatter thins to almost nothing.',
      'Perspective is not a metaphor up there; it is literal. The valley you fretted about is a fold in green, the town a scattering of roofs. The problems did not solve themselves — they simply resized.',
      'I go to the mountains not to escape my life but to see its actual proportions.'
    ],
    stayed: 'Scale is the cheapest therapy there is.'
  },
  {
    id: '043',
    section: 'movement',
    title: 'The mile where the thinking finally starts',
    date: '2026-07-18',
    read: 4,
    excerpt: 'The first few kilometres are just negotiation. The clarity is further out than that.',
    body: [
      'Every run begins as an argument with myself. The legs file complaints, the mind lists reasons to stop.',
      'Then, somewhere around the fourth kilometre, the noise settles and something else takes over — a steady, wordless rhythm where problems untangle on their own.',
      'I do not run to think. But the best thinking I do all week happens by accident, at a heart rate I did not plan.'
    ],
    stayed: 'Motion is a solvent for stuck thoughts.'
  }

];


/* ============================================================
   TEMPLATE — copy, paste at the TOP under the marker, fill in.
   Delete any block you don't need. Keep the trailing comma.
   ------------------------------------------------------------

  {
    id: '004',
    section: 'music',
    title: 'Your title here',
    date: '2026-10-01',
    read: 5,
    excerpt: 'One or two sentences that tease the thought.',
    body: [
      'Your first paragraph.',

      {
        type: 'quote',
        text: 'Something worth quoting.',
        cite: 'Source'
      },

      'Another paragraph.',

      {
        type: 'youtube',
        id: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
        caption: 'Optional caption.'
      },

      'A closing paragraph.'
    ],
    stayed: 'Your closing reflection.'
  },

   ============================================================ */
