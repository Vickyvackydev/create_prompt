"use client";
import "@styles/globals.css";

import Nav from "@component/nav";
import Provider from "@component/Provider";
export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts.",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
