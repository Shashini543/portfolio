type Listener = () => void;

const listeners = new Set<Listener>();

export function getThemeSnapshot(): boolean {
  return document.documentElement.classList.contains("light");
}

export function getServerThemeSnapshot(): boolean {
  return false;
}

export function subscribeTheme(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setTheme(isLight: boolean) {
  document.documentElement.classList.toggle("light", isLight);
  try {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  } catch {
    // localStorage unavailable — theme just won't persist
  }
  listeners.forEach((listener) => listener());
}
