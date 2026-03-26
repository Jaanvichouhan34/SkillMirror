// Progress Manager - persists user progress to localStorage per email

export const getProgress = (email) => {
  const data = localStorage.getItem('sm_progress_' + email);
  return data ? JSON.parse(data) : {
    dsa:      { currentLevel: 1, unlockedLevels: [1], scores: {} },
    ml:       { currentLevel: 1, unlockedLevels: [1], scores: {} },
    webdev:   { currentLevel: 1, unlockedLevels: [1], scores: {} },
    dbms:     { currentLevel: 1, unlockedLevels: [1], scores: {} },
    os:       { currentLevel: 1, unlockedLevels: [1], scores: {} },
    networks: { currentLevel: 1, unlockedLevels: [1], scores: {} },
    streak: 0,
    lastActiveDate: null,
    totalAssessments: 0
  };
};

export const saveProgress = (email, progress) => {
  localStorage.setItem('sm_progress_' + email, JSON.stringify(progress));
};

export const updateStreak = (email) => {
  const progress = getProgress(email);
  const today = new Date().toDateString();
  const last = progress.lastActiveDate;
  if (last === today) return progress;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (last === yesterday) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }
  progress.lastActiveDate = today;
  saveProgress(email, progress);
  return progress;
};

export const submitLevelResult = (email, domain, level, score, total) => {
  const progress = getProgress(email);
  const percent = (score / total) * 100;
  const passed = percent >= 80;
  progress[domain].scores[level] = { score, total, percent, passed, date: new Date().toISOString() };
  if (passed && level < 10) {
    const nextLevel = level + 1;
    if (!progress[domain].unlockedLevels.includes(nextLevel)) {
      progress[domain].unlockedLevels.push(nextLevel);
    }
    progress[domain].currentLevel = nextLevel;
  }
  progress.totalAssessments += 1;
  const updated = updateStreak(email);
  saveProgress(email, { ...progress, streak: updated.streak, lastActiveDate: updated.lastActiveDate });
  return { passed, percent };
};
