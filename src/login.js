export function login(username, password) {
  if (!username || !password) {
    return { ok: false, message: "Введіть логін і пароль" };
  }
  return { ok: true, message: `Вітаємо, ${username}!` };
}
