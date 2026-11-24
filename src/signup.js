export function signup(username, password) {
  if (password.length < 6) {
    return { ok: false, message: "Пароль має містити щонайменше 6 символів" };
  }
  return { ok: true, message: `Користувача ${username} зареєстровано` };
}
