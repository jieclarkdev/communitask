import React from "react";
import { CategorySidebar } from "./_components";

function layout({ children }) {
  return (
    <div>
      <div className="mt-5 mx-4  grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          {/* Side Navigation  */}
          <CategorySidebar />
        </div>
        <div className="md:col-span-3"> {children}</div>
      </div>
    </div>
  );
}

export default layout;
