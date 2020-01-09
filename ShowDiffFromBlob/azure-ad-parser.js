exports.getUsers = (json) => {
  return JSON.parse(json).value
}
existsUser = (user, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == user.id) {
      return true
    }
  }
  return false
}
exports.diffUsers = (prev, current) => {
  // added
  let added = []
  let removed = []
  if (prev !== undefined) {
    for (let i = 0; i < prev.length; i++) {
      if (!existsUser(prev[i], current)) {
        removed.push(prev[i].userPrincipalName)
      }
    }
  }
  for (let i = 0; i < current.length; i++) {
    if (prev === undefined || !existsUser(current[i], prev)) {
      added.push(current[i].userPrincipalName)
    }
  }
  return {
    added: added,
    removed: removed
  }
}