import { useEffect } from "react";
import { CHAT_ENABLED } from "../config/chat";

declare global {
  interface Window {
    VG_CONFIG?: any;
    VG_SCRIPT_LOADED?: boolean;
  }
}

export default function VoiceglowChat() {
  useEffect(() => {
    if (!CHAT_ENABLED) return;
    if (window.VG_SCRIPT_LOADED) return;

    window.VG_CONFIG = {
      ID: "AJQYyISJITg4YitQ",
      region: "na",
      render: "bottom-right",
      stylesheets: [
        "https://cdn.convocore.ai/vg_live_build/styles.css"
      ],
    };

    const script = document.createElement("script");
    script.src = "https://cdn.convocore.ai/vg_live_build/vg_bundle.js";
    script.defer = true;
    script.onload = () => { window.VG_SCRIPT_LOADED = true; };
    document.body.appendChild(script);
  }, []);

  if (!CHAT_ENABLED) return null;

  return <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />;
}