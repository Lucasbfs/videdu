import React, { useState } from "react";
import styles from "./Menu.module.css";
function Menu() {
  return (
    <div className={`pt-2 h-5/6 w-1/4 ${styles["menu-bg"]}`}>
      <ul className="py-4">
        <button className="w-full block text-left">
          <li className={`pl-4 py-3 ${styles["menu-list"]}`}>Subscriptions</li>
        </button>
        <button className="w-full block text-left">
          <li className={`pl-4 py-3 ${styles["menu-list"]}`}>Manage Account</li>
        </button>
        <button className="w-full block text-left">
          <li className={`pl-4 py-3 ${styles["menu-list"]}`}>Upload Videos</li>
        </button>
        <button className="w-full block text-left">
          <li className={`pl-4 py-3 ${styles["menu-list"]}`}>Manage Videos</li>
        </button>
        <button className="w-full block text-left">
          <li className={`pl-4 py-3 ${styles["menu-list"]}`}>Logout</li>
        </button>
        <button className="w-full block text-left">
          <li className={`pl-4 py-3 ${styles["menu-list"]}`}>Settings</li>
        </button>
      </ul>
    </div>
  );
}

export default Menu;
