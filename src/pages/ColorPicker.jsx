import React from "react";
import { Navbar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";
const ColorPicker = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentMode } =
    useStateContext();
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFraction1
          activeMenu={activeMenu}
          onClick={() => setThemeSettings(true)}
        />
        {themeSettings && <ThemeSettings />}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg w-full min-h-screen ${
            activeMenu ? "md:ml-0" : "flex-2"
          }`}
        >
          <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Color Picker" />
            <div className="text-center">
              <div id="preview" />
              <div className="flex justify-center items-center gap-20 flex-wrap">
                <div>
                  <p className="text-2xl font-semibold mt-2 mb-4">
                    Inline Pallete
                  </p>
                  <ColorPickerComponent
                    id="inline-pallete"
                    mode="Palette"
                    modeSwitcher={false}
                    inline
                    showButtons={false}
                    change={change}
                  />
                </div>
                <div>
                  <p className="text-2xl font-semibold mt-2 mb-4">
                    Inline Picker
                  </p>
                  <ColorPickerComponent
                    id="inline-pallete"
                    mode="Picker"
                    modeSwitcher={false}
                    inline
                    showButtons={false}
                    change={change}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
