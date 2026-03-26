export const getXP = (email) => {
  const data = localStorage.getItem('sm_xp_' + email)
  return data ? JSON.parse(data) : {
    totalXP: 0, level: 1, completedLessons: [],
    earnedBadges: [], weeklyXP: 0
  }
}

export const completeLesson = (email, lessonId) => {
  const xp = getXP(email)
  if (xp.completedLessons.includes(lessonId)) return xp
  xp.completedLessons.push(lessonId)
  xp.totalXP += 15
  xp.level = Math.floor(xp.totalXP / 500) + 1
  xp.earnedBadges = checkBadges(xp)
  localStorage.setItem('sm_xp_' + email, JSON.stringify(xp))
  return xp
}

export const checkBadges = (xp) => {
  const badges = [...(xp.earnedBadges || [])];
  const count = xp.completedLessons.length;
  const totalXP = xp.totalXP;

  const reqs = [
    { id: 'first_step', condition: count >= 1 },
    { id: 'curious_mind', condition: count >= 5 },
    { id: 'dedicated_learner', condition: count >= 15 },
    { id: 'explorer', condition: count >= 30 },
    { id: 'code_starter', condition: totalXP >= 200 },
    { id: 'xp_contender', condition: totalXP >= 500 },
    { id: 'xp_master', condition: totalXP >= 1000 },
    { id: 'elite_coder', condition: totalXP >= 5000 },
    { id: 'on_fire', condition: count >= 10 },
  ];

  const py = xp.completedLessons.filter(l => l.startsWith('py_')).length;
  const js = xp.completedLessons.filter(l => l.startsWith('js_')).length;
  const cpp = xp.completedLessons.filter(l => l.startsWith('cpp_')).length;
  const web = xp.completedLessons.filter(l => l.startsWith('web_')).length;
  const dsa = xp.completedLessons.filter(l => l.startsWith('dsa_')).length;
  const sql = xp.completedLessons.filter(l => l.startsWith('sql_')).length;
  const java = xp.completedLessons.filter(l => l.startsWith('java_')).length;
  const c = xp.completedLessons.filter(l => l.startsWith('c_')).length;

  reqs.push(
    { id: 'python_explorer', condition: py >= 1 },
    { id: 'python_master', condition: py >= 15 },
    { id: 'javascript_builder', condition: js >= 1 },
    { id: 'js_elite', condition: js >= 15 },
    { id: 'cpp_coder', condition: cpp >= 1 },
    { id: 'cpp_pro', condition: cpp >= 15 },
    { id: 'web_apprentice', condition: web >= 1 },
    { id: 'web_wizard', condition: web >= 15 },
    { id: 'dsa_starter', condition: dsa >= 1 },
    { id: 'dsa_champion', condition: dsa >= 30 },
    { id: 'sql_explorer', condition: sql >= 1 },
    { id: 'java_champion', condition: java >= 1 },
    { id: 'c_systems_pro', condition: c >= 1 },
    { id: 'path_finisher', condition: py >= 15 || js >= 15 || cpp >= 15 || web >= 15 || dsa >= 30 },
    // New fun badges based on generic triggers
    { id: 'novice_shield', condition: totalXP >= 50 },
    { id: 'vortex_master', condition: totalXP >= 1500 },
    { id: 'herald_crest', condition: count >= 3 },
    { id: 'soft_glow', condition: totalXP >= 100 },
    { id: 'battle_ready', condition: count >= 1 },
    { id: 'protector', condition: py >= 1 || js >= 1 },
    { id: 'green_leaf', condition: totalXP >= 300 },
    { id: 'blossom', condition: totalXP >= 800 },
    { id: 'comet', condition: count >= 7 },
    { id: 'tornado', condition: count >= 12 },
    { id: 'disc_pro', condition: totalXP >= 2000 },
    { id: 'python_spirit', condition: py >= 5 },
    { id: 'puzzle_solver', condition: dsa >= 5 },
    { id: 'bullseye', condition: totalXP >= 2500 },
    { id: 'coin_collector', condition: totalXP >= 3000 },
    { id: 'evil_eye', condition: totalXP >= 4000 },
    { id: 'crystal_ball', condition: count >= 40 },
    { id: 'disco_ball', condition: totalXP >= 4500 },
    { id: 'hazmat', condition: totalXP >= 5500 },
    { id: 'thought_bubble', condition: totalXP >= 6000 },
    // Batch 3
    { id: 'first_steps', condition: count >= 2 },
    { id: 'web_weaver', condition: count >= 20 },
    { id: 'dragon_lord', condition: totalXP >= 8000 },
    { id: 'maple_leaf', condition: totalXP >= 400 },
    { id: 'planet_x', condition: totalXP >= 10000 },
    { id: 'water_drop', condition: count >= 4 },
    { id: 'bubbles', condition: totalXP >= 150 },
    { id: 'ice_cube', condition: totalXP >= 1200 },
    { id: 'silver_medal', condition: totalXP >= 2000 },
    { id: 'bronze_medal', condition: totalXP >= 500 },
    { id: 'gold_medal', condition: totalXP >= 4000 },
    { id: 'military_medal', condition: count >= 50 },
    { id: 'rosette', condition: count >= 35 },
    { id: 'reminder_ribbon', condition: count >= 8 },
    { id: 'no1_medal', condition: totalXP >= 7000 },
    { id: 'trophy_cup', condition: totalXP >= 9000 },
    { id: 'theater', condition: totalXP >= 4200 },
    { id: 'carousel', condition: count >= 25 },
    { id: 'anchor', condition: count >= 15 },
    { id: 'moai', condition: totalXP >= 3300 },
    { id: 'castle', condition: totalXP >= 7500 },
    { id: 'diamond', condition: totalXP >= 12000 },
    { id: 'hamsa', condition: count >= 11 },
    { id: 'placard', condition: count >= 13 },
    { id: 'infinity', condition: count >= 100 },
    { id: 'pirate_flag', condition: totalXP >= 666 },
  );

  reqs.forEach(r => {
    if (r.condition && !badges.includes(r.id)) {
      badges.push(r.id);
    }
  });

  return badges;
};

export const getLevelName = (level) => {
  const names = ['','Beginner','Explorer','Developer','Coder',
    'Programmer','Engineer','Architect','Expert','Master','Legend']
  return names[Math.min(level, 10)] || 'Legend'
}

export const addXP = (email, amount) => {
  const xp = getXP(email)
  xp.totalXP += amount
  xp.level = Math.floor(xp.totalXP / 500) + 1
  localStorage.setItem('sm_xp_' + email, JSON.stringify(xp))
  return xp
}
