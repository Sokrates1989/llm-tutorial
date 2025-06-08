// src/api/test.js
import { apiFetch } from "./config";

export async function checkBackend() {
  const { status, result } = await apiFetch("/test/test");
  return { status, message: result.message || "Unknown error" };
}