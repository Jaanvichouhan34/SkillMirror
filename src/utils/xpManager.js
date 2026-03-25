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
  const badges = [...(xp.earnedBadges || [])]
  if (xp.completedLessons.length >= 10 && !badges.includes('curious_mind')) badges.push('curious_mind')
  if (xp.completedLessons.length >= 50 && !badges.includes('dedicated_learner')) badges.push('dedicated_learner')
  if (xp.totalXP >= 1000 && !badges.includes('xp_master')) badges.push('xp_master')
  if (xp.totalXP >= 5000 && !badges.includes('elite_coder')) badges.push('elite_coder')
  const pyLessons = xp.completedLessons.filter(l => l.startsWith('py_'))
  if (pyLessons.length >= 20 && !badges.includes('python_master')) badges.push('python_master')
  return badges
}

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
