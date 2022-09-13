import React from "react";
import { Navbar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const EditTeachers = () => {
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
          <div className="m-2 md:m-10 p-2 md:pd-10 bg-white rounded-3xl">
            <Header category="Page" title="Teachers" />
            <GridComponent
              dataSource={employeesData}
              allowPaging
              allowSorting
              toolbar={["Search"]}
              width="auto"
            >
              <ColumnsDirective>
                {employeesGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
              <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeachers;
