import { useEffect, useState } from "react";

const Copyright = () => {
  let start = new Date();
  let year = start.getFullYear().toString();

  return (
    <footer className="sm:absolute bottom-0 w-full py-6 text-center text-xs">
      © Rachelle DeMan {year} - All Rights Reserved.
    </footer>
  );
};

export default Copyright;
