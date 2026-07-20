const LS_KEY = "hoy-espanol-free-game";

const curriculum = [
  {
    title: "Unit 1: Greetings and introductions",
    focus: "Basic greetings, name, and polite contact.",
    masteryThreshold: 4,
    lessons: [
      {
        title: "Lesson 1: Hola and introductions",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "hola", english: "hello", pronunciation: "OH-lah", tip: "Use this for first contact." },
          { spanish: "adiós", english: "goodbye", pronunciation: "ah-dee-OHS", tip: "Use this when leaving." },
          { spanish: "gracias", english: "thank you", pronunciation: "GRAH-see-as", tip: "This is a core polite word." },
          { spanish: "por favor", english: "please", pronunciation: "por fah-VOR", tip: "Politeness helps in every exam task." }
        ]
      },
      {
        title: "Lesson 2: Name and origin",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "nombre", english: "name", pronunciation: "NOM-breh", tip: "A common A1 personal detail." },
          { spanish: "soy", english: "I am", pronunciation: "soy", tip: "Used to introduce yourself." },
          { spanish: "de", english: "from / of", pronunciation: "deh", tip: "Very short but very useful." },
          { spanish: "tú", english: "you", pronunciation: "too", tip: "A key word for simple questions." }
        ]
      }
    ]
  },
  {
    title: "Unit 2: Family and people",
    focus: "Talk about family, friends, and simple descriptions.",
    masteryThreshold: 4,
    lessons: [
      {
        title: "Lesson 3: Family members",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "madre", english: "mother", pronunciation: "MAH-dreh", tip: "A1 family vocabulary." },
          { spanish: "padre", english: "father", pronunciation: "PAH-dreh", tip: "Easy and important for self-introduction." },
          { spanish: "hermano", english: "brother", pronunciation: "ehr-MAH-noh", tip: "Family words often appear together." },
          { spanish: "amigo", english: "friend", pronunciation: "ah-MEE-go", tip: "A friendly everyday word." }
        ]
      },
      {
        title: "Lesson 4: Describing people",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "alto", english: "tall", pronunciation: "AHL-toh", tip: "A basic description word." },
          { spanish: "bajo", english: "short", pronunciation: "BAH-hoh", tip: "Another common description." },
          { spanish: "joven", english: "young", pronunciation: "HOH-ben", tip: "Useful in simple descriptions." },
          { spanish: "feliz", english: "happy", pronunciation: "feh-LEEZ", tip: "Great for emotions and speaking tasks." }
        ]
      }
    ]
  },
  {
    title: "Unit 3: Daily life and school",
    focus: "Routines, school, days, and times.",
    masteryThreshold: 5,
    lessons: [
      {
        title: "Lesson 5: School words",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "escuela", english: "school", pronunciation: "es-KWEH-lah", tip: "A central A1 topic." },
          { spanish: "clase", english: "class", pronunciation: "KLAH-seh", tip: "Useful for school schedules." },
          { spanish: "libro", english: "book", pronunciation: "LEE-broh", tip: "Common classroom item." },
          { spanish: "profesor", english: "teacher", pronunciation: "proh-feh-SOR", tip: "One of the most practical words." }
        ]
      },
      {
        title: "Lesson 6: Time and routine",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "mañana", english: "morning / tomorrow", pronunciation: "mah-NYAH-nah", tip: "A high-frequency word." },
          { spanish: "hoy", english: "today", pronunciation: "oy", tip: "The app name is your clue." },
          { spanish: "siempre", english: "always", pronunciation: "SYEM-preh", tip: "A routine word in A1 tasks." },
          { spanish: "nunca", english: "never", pronunciation: "NOON-kah", tip: "Useful for basic frequency sentences." }
        ]
      }
    ]
  },
  {
    title: "Unit 4: Food, shopping, and places",
    focus: "Order, buy, and navigate simple everyday situations.",
    masteryThreshold: 5,
    lessons: [
      {
        title: "Lesson 7: Food basics",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "agua", english: "water", pronunciation: "AH-gwah", tip: "Always useful in real life and exams." },
          { spanish: "pan", english: "bread", pronunciation: "pahn", tip: "Short and memorable." },
          { spanish: "fruta", english: "fruit", pronunciation: "FROO-tah", tip: "Food vocabulary is common in A1." },
          { spanish: "cena", english: "dinner", pronunciation: "SEH-nah", tip: "Daily life vocabulary." }
        ]
      },
      {
        title: "Lesson 8: Places and directions",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "casa", english: "house", pronunciation: "KAH-sah", tip: "A cornerstone A1 word." },
          { spanish: "tienda", english: "shop", pronunciation: "tyEN-dah", tip: "Useful for shopping scenarios." },
          { spanish: "calle", english: "street", pronunciation: "KAH-yeh", tip: "Place and direction word." },
          { spanish: "parque", english: "park", pronunciation: "PAR-keh", tip: "Good for location questions." }
        ]
      }
    ]
  },
  {
    title: "Unit 5: DELE A1 exam readiness",
    focus: "Review, listening, speaking, and simple exam tasks.",
    masteryThreshold: 6,
    lessons: [
      {
        title: "Lesson 9: Mixed review",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "rápido", english: "fast", pronunciation: "RAH-pee-doh", tip: "Quick recall builds exam confidence." },
          { spanish: "leer", english: "to read", pronunciation: "leh-EHR", tip: "Good for basic skill language." },
          { spanish: "escribir", english: "to write", pronunciation: "es-kree-BEER", tip: "Core school language." },
          { spanish: "escuchar", english: "to listen", pronunciation: "es-koo-CHAR", tip: "Listening is a DELE A1 skill." }
        ]
      },
      {
        title: "Lesson 10: Final exam prep",
        prompt: "Choose the best English match.",
        words: [
          { spanish: "pregunta", english: "question", pronunciation: "preh-GOON-tah", tip: "This word appears in every test." },
          { spanish: "respuesta", english: "answer", pronunciation: "res-pwes-TAH", tip: "Pair it with pregunta." },
          { spanish: "correcto", english: "correct", pronunciation: "kor-REK-toh", tip: "Confidence word for checking work." },
          { spanish: "prueba", english: "test", pronunciation: "PROO-eh-bah", tip: "The final checkpoint word." }
        ]
      }
    ]
  }
];

function buildDeck() {
  return curriculum.flatMap((unit, unitIndex) =>
    unit.lessons.map((lesson, lessonIndex) => ({
      unitIndex,
      lessonIndex,
      unitTitle: unit.title,
      unitFocus: unit.focus,
      masteryThreshold: unit.masteryThreshold,
      lessonTitle: lesson.title,
      prompt: lesson.prompt,
      words: lesson.words
    }))
  );
}

const deck = buildDeck();

const state = {
  mode: "path",
  streak: 1,
  xp: 0,
  coins: 0,
  total: 0,
  correct: 0,
  combo: 0,
  bestCombo: 0,
  current: null,
  lessonIndex: 0,
  lessonStep: 0,
  roundLocked: false,
  timerSeconds: 0,
  timerId: null,
  mistakes: {},
  lessonProgress: {},
  lastVisit: "",
  coachMessages: []
};

const elements = {
  streakCount: document.getElementById("streak-count"),
  xpCount: document.getElementById("xp-count"),
  coinCount: document.getElementById("coin-count"),
  accuracyCount: document.getElementById("accuracy-count"),
  gameTitle: document.getElementById("game-title"),
  modeChip: document.getElementById("mode-chip"),
  questionCount: document.getElementById("question-count"),
  timerLabel: document.getElementById("timer-label"),
  progressFill: document.getElementById("progress-fill"),
  promptWord: document.getElementById("prompt-word"),
  promptClue: document.getElementById("prompt-clue"),
  choicesGrid: document.getElementById("choices-grid"),
  feedbackText: document.getElementById("feedback-text"),
  nextQuestion: document.getElementById("next-question"),
  repeatWord: document.getElementById("repeat-word"),
  speakWord: document.getElementById("speak-word"),
  startPath: document.getElementById("start-path"),
  reviewLesson: document.getElementById("review-lesson"),
  coachSummary: document.getElementById("coach-summary"),
  chatCard: document.getElementById("chat-card"),
  coachForm: document.getElementById("coach-form"),
  coachInput: document.getElementById("coach-input"),
  questTitle: document.getElementById("quest-title"),
  questBody: document.getElementById("quest-body"),
  skillTitle: document.getElementById("skill-title"),
  skillBody: document.getElementById("skill-body"),
  roadmapGrid: document.getElementById("roadmap-grid")
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalize(text) {
  return text.toLowerCase().trim().replace(/[áàäâ]/g, "a").replace(/[éèëê]/g, "e").replace(/[íìïî]/g, "i").replace(/[óòöô]/g, "o").replace(/[úùüû]/g, "u").replace(/[^a-z\s]/g, "");
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    Object.assign(state, saved);
  } catch {
    // ignore invalid storage
  }
  state.lessonIndex = clamp(Number(state.lessonIndex || 0), 0, deck.length - 1);
  state.lessonProgress = state.lessonProgress || {};
  syncDailyStreak();
  state.coachMessages = state.coachMessages?.length
    ? state.coachMessages
    : [
        { role: "coach", text: "Hola, I’m Luna. Start the DELE A1 path and I will guide you lesson by lesson." }
      ];
}

function saveState() {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      mode: state.mode,
      streak: state.streak,
      xp: state.xp,
      coins: state.coins,
      total: state.total,
      correct: state.correct,
      combo: state.combo,
      bestCombo: state.bestCombo,
      mistakes: state.mistakes,
      lessonProgress: state.lessonProgress,
      lastVisit: state.lastVisit,
      coachMessages: state.coachMessages.slice(-10)
    })
  );
}

function syncDailyStreak() {
  const today = new Date().toDateString();
  if (!state.lastVisit) {
    state.lastVisit = today;
    return;
  }

  if (state.lastVisit === today) {
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (state.lastVisit === yesterday.toDateString()) {
    state.streak = Math.max(1, Number(state.streak || 0) + 1);
  } else {
    state.streak = 1;
  }
  state.lastVisit = today;
}

function getAccuracy() {
  if (!state.total) {
    return 0;
  }
  return Math.round((state.correct / state.total) * 100);
}

function getCurrentLesson() {
  return deck[state.lessonIndex] || deck[0];
}

function getCurrentWord() {
  return state.current || getCurrentLesson().words[0];
}

function buildChoices(correctWord, lessonWords) {
  const wrongChoices = shuffle(lessonWords.filter((word) => word.english !== correctWord.english))
    .slice(0, 3)
    .map((word) => word.english);
  return shuffle([correctWord.english, ...wrongChoices]);
}

function setNewQuestion() {
  const lesson = getCurrentLesson();
  const pool = lesson.words.filter((word) => !state.current || word.english !== state.current.english);
  state.current = shuffle(pool.length ? pool : lesson.words)[0];
  state.roundLocked = false;
  state.lessonStep += 1;
  elements.promptWord.textContent = state.current.spanish;
  elements.promptClue.textContent = lesson.prompt;
  elements.choicesGrid.innerHTML = "";

  buildChoices(state.current, lesson.words).forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.dataset.choice = choice;
    button.innerHTML = `<strong>${choice}</strong><br><span>Tap to answer</span>`;
    button.addEventListener("click", () => handleChoice(choice, button));
    elements.choicesGrid.appendChild(button);
  });

  updateRoundHeader();
  updateCoachPanel();
  speakCurrentWord(false);
}

function updateRoundHeader() {
  const lesson = getCurrentLesson();
  const totalLessons = deck.length;
  const lessonNumber = state.lessonIndex + 1;
  const lessonThreshold = lesson.masteryThreshold;
  elements.questionCount.textContent = `${lesson.lessonTitle}`;
  elements.modeChip.textContent = `Lesson ${lessonNumber} of ${totalLessons}`;
  const progress = ((state.lessonIndex * 100) + clamp((state.lessonProgress[lesson.lessonTitle] || 0) / lessonThreshold * 100, 0, 100)) / totalLessons;
  elements.progressFill.style.width = `${clamp(progress, 4, 100)}%`;
  elements.gameTitle.textContent = lesson.unitTitle;
}

function updateTimerLabel() {
  const lesson = getCurrentLesson();
  const mastered = state.lessonProgress[lesson.lessonTitle] || 0;
  elements.timerLabel.textContent = `${mastered}/${lesson.masteryThreshold} mastery`;
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  clearTimer();
  state.timerSeconds = 12;
  updateTimerLabel();
  state.timerId = window.setInterval(() => {
    state.timerSeconds -= 1;
    updateTimerLabel();
    if (state.timerSeconds <= 0) {
      clearTimer();
      if (!state.roundLocked) {
        handleChoice("", null, true);
      }
    }
  }, 1000);
}

function handleChoice(choice, button, expired = false) {
  if (state.roundLocked) {
    return;
  }
  state.roundLocked = true;
  state.total += 1;
  const correct = choice === state.current.english;
  const lesson = getCurrentLesson();
  const lessonTitle = lesson.lessonTitle;

  if (correct) {
    state.correct += 1;
    state.combo += 1;
    state.bestCombo = Math.max(state.bestCombo, state.combo);
    state.xp += 15;
    state.coins += state.combo >= 3 ? 2 : 1;
    state.lessonProgress[lessonTitle] = (state.lessonProgress[lessonTitle] || 0) + 1;
    elements.feedbackText.textContent = `Correct! ${state.current.spanish} means ${state.current.english}. +15 XP.`;
    if (button) {
      button.classList.add("correct");
    }
  } else {
    state.combo = 0;
    state.mistakes[state.current.english] = (state.mistakes[state.current.english] || 0) + 1;
    elements.feedbackText.textContent = expired
      ? `Time! ${state.current.spanish} means ${state.current.english}. Slow it down and try the next one.`
      : `Not quite. ${state.current.spanish} means ${state.current.english}.`;
    if (button) {
      button.classList.add("wrong");
    }
    highlightCorrectChoice();
  }

  const answeredWord = getCurrentWord();
  pushCoachMessage(
    "coach",
    correct
      ? `Nice. ${answeredWord.spanish} is locked in. Keep the streak alive.`
      : `Tiny hint: ${answeredWord.tip}`
  );
  renderStats();
  updateCoachPanel();
  saveState();
  setTimeout(() => nextRound(correct), 650);
}

function highlightCorrectChoice() {
  const correctChoice = Array.from(elements.choicesGrid.children).find(
    (child) => child.dataset.choice === state.current.english
  );
  if (correctChoice) {
    correctChoice.classList.add("correct");
  }
}

function nextRound(correct) {
  if (!state.roundLocked) {
    return;
  }
  state.roundLocked = false;
  const lesson = getCurrentLesson();
  const mastered = state.lessonProgress[lesson.lessonTitle] || 0;
  if (mastered >= lesson.masteryThreshold) {
    advanceLesson();
    return;
  }
  if (!correct && mastered < 2) {
    elements.feedbackText.textContent = "Review this lesson once more before moving on.";
  }
  setNewQuestion();
}

function advanceLesson() {
  if (state.lessonIndex < deck.length - 1) {
    state.lessonIndex += 1;
    state.lessonStep = 0;
    state.current = null;
    elements.feedbackText.textContent = `Lesson complete. Moving to ${getCurrentLesson().lessonTitle}.`;
    updateRoundHeader();
    updateCoachPanel();
    saveState();
    setNewQuestion();
  } else {
    elements.feedbackText.textContent = "You reached the final DELE A1 review lesson. Replay the path anytime to strengthen weak areas.";
    updateCoachPanel();
    saveState();
  }
}

function renderStats() {
  elements.streakCount.textContent = String(state.streak);
  elements.xpCount.textContent = String(state.xp);
  elements.coinCount.textContent = String(state.coins);
  elements.accuracyCount.textContent = `${getAccuracy()}%`;
}

function renderQuest() {
  const lesson = getCurrentLesson();
  elements.questTitle.textContent = lesson.unitTitle;
  elements.questBody.textContent = lesson.unitFocus;
}

function renderSkillBoost() {
  const weakestWord = Object.entries(state.mistakes).sort((a, b) => b[1] - a[1])[0]?.[0];
  if (weakestWord) {
    elements.skillTitle.textContent = `Review ${weakestWord}`;
    elements.skillBody.textContent = `Luna noticed this word needs extra reps. We recycle it inside the path.`;
  } else {
    elements.skillTitle.textContent = "Listening and speaking";
    elements.skillBody.textContent = "Use the speaker button to hear the word and build oral recall.";
  }
}

function buildCoachSummary() {
  const accuracy = getAccuracy();
  const weakestWord = Object.entries(state.mistakes).sort((a, b) => b[1] - a[1])[0]?.[0];
  const firstLine = accuracy >= 85
    ? "You are in passing territory. Keep the path moving and protect your strong areas."
    : accuracy >= 60
      ? "Solid progress. Luna can sharpen the rough edges before the exam-style reviews."
      : "You are in build mode. That is good news because the coach can target the misses.";
  const secondLine = weakestWord
    ? `Hot spot: ${weakestWord}. We should revisit it with a memory trick.`
    : "No weak spots yet. Keep exploring and unlock more words.";
  const thirdLine = state.bestCombo
    ? `Best combo: ${state.bestCombo}. Repeated recall helps DELE A1 exam readiness.`
    : "Build a combo of 3 correct answers to start bonus rewards.";

  elements.coachSummary.innerHTML = `
    <strong>${firstLine}</strong>
    <span>${secondLine}</span>
    <span>${thirdLine}</span>
  `;
}

function renderChat() {
  elements.chatCard.innerHTML = "";
  state.coachMessages.slice(-8).forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-message ${message.role}`;
    bubble.textContent = message.text;
    elements.chatCard.appendChild(bubble);
  });
}

function updateCoachPanel() {
  buildCoachSummary();
  renderQuest();
  renderSkillBoost();
  renderChat();
}

function renderRoadmap() {
  if (!elements.roadmapGrid) {
    return;
  }

  elements.roadmapGrid.innerHTML = "";
  curriculum.forEach((unit, unitIndex) => {
    const unitCard = document.createElement("article");
    unitCard.className = `roadmap-unit ${unitIndex === getCurrentLesson().unitIndex ? "active" : ""}`;

    const heading = document.createElement("h3");
    heading.textContent = unit.title;

    const focus = document.createElement("p");
    focus.textContent = unit.focus;

    const chips = document.createElement("div");
    unit.lessons.forEach((lesson, lessonIndex) => {
      const progress = state.lessonProgress[lesson.title] || 0;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `lesson-chip ${progress >= unit.masteryThreshold ? "done" : ""} ${getCurrentLesson().lessonTitle === lesson.title ? "current" : ""}`;
      button.textContent = `${lessonIndex + 1}. ${lesson.title.replace(/^Lesson \d+: /, "")}`;
      button.title = `${progress}/${unit.masteryThreshold} mastery`;
      button.addEventListener("click", () => jumpToLesson(unitIndex, lessonIndex));
      chips.appendChild(button);
    });

    const summary = document.createElement("ul");
    summary.innerHTML = [
      `<li>Mastery checkpoint: ${unit.masteryThreshold} correct answers per lesson</li>`,
      `<li>Focus: ${unit.focus}</li>`,
      `<li>Current unit status: ${unitIndex < getCurrentLesson().unitIndex ? "completed or behind" : unitIndex === getCurrentLesson().unitIndex ? "active" : "up next"}</li>`
    ].join("");

    unitCard.append(heading, focus, chips, summary);
    elements.roadmapGrid.appendChild(unitCard);
  });
}

function jumpToLesson(unitIndex, lessonIndex) {
  const offset = curriculum.slice(0, unitIndex).reduce((count, unit) => count + unit.lessons.length, 0);
  state.lessonIndex = offset + lessonIndex;
  state.current = null;
  state.roundLocked = false;
  elements.feedbackText.textContent = `Jumped to ${getCurrentLesson().lessonTitle}.`;
  updateRoundHeader();
  updateCoachPanel();
  renderRoadmap();
  saveState();
  setNewQuestion();
}

function pushCoachMessage(role, text) {
  state.coachMessages.push({ role, text });
  state.coachMessages = state.coachMessages.slice(-10);
  renderChat();
  saveState();
}

function speakCurrentWord(announce = true) {
  const word = getCurrentWord();
  if (!word) {
    return;
  }
  if (announce) {
    pushCoachMessage("coach", `Say it out loud: ${word.spanish}. Pronunciation: ${word.pronunciation}.`);
  }
  if (!window.speechSynthesis) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word.spanish);
  utterance.lang = "es-ES";
  utterance.rate = 0.9;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

function startMode(mode) {
  state.mode = mode;
  state.questionIndex = 0;
  state.sprintRemaining = state.sprintTotal;
  state.combo = 0;
  state.roundLocked = false;
  elements.feedbackText.textContent = mode === "sprint"
    ? "Sprint mode is on. Answer quickly before the timer runs out."
    : "Adventure mode is on. Learn at your own pace and build your streak.";
  saveState();
  setNewQuestion();
}

function askCoach(event) {
  event.preventDefault();
  const query = elements.coachInput.value.trim();
  if (!query) {
    return;
  }
  pushCoachMessage("user", query);
  elements.coachInput.value = "";
  const activeWord = getCurrentWord();
  const lower = normalize(query);
  const answerParts = [];

  if (lower.includes("hint") || lower.includes("help")) {
    answerParts.push(`Hint: ${activeWord.spanish} connects to ${activeWord.tip.toLowerCase()}`);
  }
  if (lower.includes("pronounce") || lower.includes("say") || lower.includes("voice")) {
    answerParts.push(`Say it like this: ${activeWord.pronunciation}. Tap Hear Spanish for audio.`);
  }
  if (lower.includes("memory") || lower.includes("remember") || lower.includes("mnemonic")) {
    answerParts.push(`Memory trick: ${activeWord.tip}`);
  }
  if (answerParts.length === 0) {
    answerParts.push(
      `I’m tracking your current word: ${activeWord.spanish} = ${activeWord.english}. Try the clue, the speaker, or ask for a mnemonic.`
    );
  }

  pushCoachMessage("coach", answerParts.join(" "));
}

function wireEvents() {
  elements.nextQuestion.addEventListener("click", () => {
    if (!state.roundLocked) {
      const lesson = getCurrentLesson();
      const mastered = state.lessonProgress[lesson.lessonTitle] || 0;
      if (mastered >= lesson.masteryThreshold) {
        advanceLesson();
      } else {
        elements.feedbackText.textContent = "Answer the current lesson card first to move ahead.";
      }
      return;
    }
    nextRound(true);
  });
  elements.repeatWord.addEventListener("click", () => {
    elements.feedbackText.textContent = `Repeat after Luna: ${getCurrentWord().spanish}.`;
    speakCurrentWord(true);
  });
  elements.speakWord.addEventListener("click", () => speakCurrentWord(true));
  elements.startPath.addEventListener("click", () => restartPath());
  elements.reviewLesson.addEventListener("click", () => reviewCurrentLesson());
  elements.coachForm.addEventListener("submit", askCoach);
}

function restartPath() {
  state.mode = "path";
  state.lessonIndex = 0;
  state.lessonStep = 0;
  state.current = null;
  state.roundLocked = false;
  elements.feedbackText.textContent = "The DELE A1 path restarted from Unit 1.";
  updateRoundHeader();
  updateCoachPanel();
  renderRoadmap();
  saveState();
  setNewQuestion();
}

function reviewCurrentLesson() {
  state.current = null;
  state.roundLocked = false;
  elements.feedbackText.textContent = "Reviewing the current lesson with fresh practice.";
  updateRoundHeader();
  renderRoadmap();
  setNewQuestion();
}

function init() {
  loadState();
  wireEvents();
  renderStats();
  updateCoachPanel();
  renderRoadmap();
  setNewQuestion();
  saveState();
}

init();