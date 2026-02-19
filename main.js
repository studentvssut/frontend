import { loadAll, subscribeRealtime, saveSettings, setRunning } from "./api.js";

window.saveSettings = async function () {
  const payload = {
    source_channel: document.getElementById("sourceInput").value,
    message_id: document.getElementById("msgIdInput").value,
    interval_seconds: parseInt(document.getElementById("intervalInput").value)
  };

  await saveSettings(payload);
  alert("✅ Settings saved");
};

window.togglePause = async function () {
  const isPaused = document.getElementById("pausedBadge").style.display !== "none";
  await setRunning(isPaused);
};

await loadAll();
subscribeRealtime();
