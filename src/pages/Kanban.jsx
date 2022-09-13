import React from "react";
import { Navbar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentMode } =
    useStateContext();
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
            <Header category="App" title="Kanban" />
            <KanbanComponent
              id="kanban"
              dataSource={kanbanData}
              cardSettings={{ contentField: "Summary", headerField: "Id" }}
              keyField="Status"
            >
              <ColumnsDirective>
                {kanbanGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
            </KanbanComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
