import React from "react";

export default function About() {
  return (
    <section style={{ padding: 16 }}>
      <h2>About the Movie Directory</h2>
      <p>
        This app demonstrates how to use React Router v6, including nested
        routes, layout routes that render shared UI, and the use of{" "}
        <code>useOutletContext</code> to pass data between parent and child
        routes.
      </p>
    </section>
  );
}
