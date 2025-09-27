import { useEffect } from "react";

declare global {
  interface Window {
    VG_CONFIG?: any;
    VG_SCRIPT_LOADED?: boolean;
  }
}

export default function VoiceglowChat() {
  useEffect(() => {
    if (window.VG_SCRIPT_LOADED) return;

    window.VG_CONFIG = {
      ID: "AJQYyISJITg4YitQ",   // Your Agent ID
      region: "na",            // Your account region
      render: "bottom-right",  // popup launcher
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
      ],
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    script.onload = () => { window.VG_SCRIPT_LOADED = true; };
    document.body.appendChild(script);
  }, []);

  // Required container for Voiceglow popup
  return <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />;
}