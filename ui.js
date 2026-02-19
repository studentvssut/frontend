import { state } from "./state.js";

export function renderUI() {

  document.getElementById("rounds").textContent  = state.stats.rounds;
  document.getElementById("success").textContent = state.stats.success;
  document.getElementById("failed").textContent  = state.stats.failed;
  document.getElementById("total").textContent   = state.stats.success + state.stats.failed;

  // Status
  const running = state.settings?.is_running;
  document.getElementById("statusState").textContent = running ? "🟢 RUNNING" : "⏸ PAUSED";
  document.getElementById("liveBadge").style.display   = running ? "inline-block" : "none";
  document.getElementById("pausedBadge").style.display = running ? "none" : "inline-block";

  // Logs
  document.getElementById("logPanel").innerHTML = state.logs.map(l => `
    <div class="log-entry">
      <span class="log-time">${new Date(l.created_at).toLocaleTimeString()}</span>
      <span class="${l.status === "success" ? "log-ok" : "log-fail"}">${l.message}</span>
    </div>
  `).join("");
}
