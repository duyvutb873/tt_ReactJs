import React, { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext.tsx";

const Settings: React.FC = () => {
  const settingsContext = useContext(SettingsContext);

  if (!settingsContext) {
    throw new Error("Settings must be used within a SettingsProvider");
  }

  const { settings, updateSettings } = settingsContext;

  const toggleNotifications = () => {
    updateSettings({ notifications: !settings.notifications });
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSettings({ language: e.target.value });
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Language:
          <select value={settings.language} onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Notifications:
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={toggleNotifications}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
