import styles from "./Header.module.css";
import { FiUser, FiMenu } from "react-icons/fi";
import { Fragment, useState } from "react";

function NavHeader() {
  // const [isMobile, setIsMobile] = useState(styles.isMobile);

  return (
    <Fragment>
      <nav className="flex items-center">
        <div className="ml-10 flex-1">
          <button>
            <FiMenu stroke="white" size="30px" />
          </button>
        </div>

        <div className="flex-auto">
          <input className="" value="What do you want to learn today?" />
        </div>

        {/* {!isMobile && ( */}
        <div className="mr-10">
          <button>
            <FiUser color="white" size="30px" />
          </button>
        </div>
        {/* )} */}
      </nav>
    </Fragment>
  );
}

export default NavHeader;
