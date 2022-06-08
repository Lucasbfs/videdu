import styles from "./Header.module.css";
import { FiUser, FiMenu } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { Fragment, useState } from "react";
import logo from "../../assets/logo/videdu_logo.svg";
import Menu from "../Menu";
function NavHeader() {
  // const [isMobile, setIsMobile] = useState(styles.isMobile);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);

  return (
    <Fragment>
      <nav className={`flex ${isMenuOpen ? styles.backdrop : ""}`}>
        <div className="ml-10 mt-2 flex-none">
          <button onClick={onMenuClick}>
            <FiMenu stroke="white" size="30px" />
          </button>
          {isMenuOpen && <Menu />}
        </div>

        <div className={`ml-72 flex-1 ${isMenuOpen ? styles.visibility : ""}`}>
          <div className={`inline ${isMenuOpen ? styles.visibility : ""}`}>
            {/* <button>
              <img className={styles.logo} src={logo} alt="logo" />
            </button> */}
          </div>
          <input className="" placeholder="What do you want to learn today?" />
          <button className={styles["search-btn"]}>
            <BiSearchAlt2 size="30px" />
          </button>
        </div>

        {/* {!isMobile && ( */}
        <div className={`mt-2 mr-10 ${isMenuOpen ? styles.visibility : ""}`}>
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
