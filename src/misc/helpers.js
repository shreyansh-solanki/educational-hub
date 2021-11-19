export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(' ');

  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }
  return splitName[0];
}

export async function getUserUpdates(userId, keyToUpdate, value, db) {
  const updates = {};
  updates[`/profiles/${userId}/${keyToUpdate}`] = value;

  return updates;
}
