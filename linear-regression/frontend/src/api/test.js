// src/api/test.js
import { apiFetch } from "./config";

async function checkBackend() {
  const { status, result } = await apiFetch("/test/test");
  return { status, message: result.message || "Unknown error" };
}

export default {
  checkBackend,
};
