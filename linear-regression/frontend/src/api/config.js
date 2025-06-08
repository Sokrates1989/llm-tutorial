const API_BASE_URL = window._env_?.VITE_BACKEND_URL || "http://localhost:8001";

export async function apiFetch(path, { method = "GET", body, token } = {}) {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const result = await response.json();
    return { status: response.status, result };
  } catch (error) {
    console.error("❌ API Error:", error);
    return { status: 0, result: { error: "Network error" } };
  }
}
