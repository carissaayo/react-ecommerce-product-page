import {links} from "../util";
import "./SideBar.css";
const SideBar = ({setOpenSidebar,openSidebar}) => {
    return (
      <div className={openSidebar ? "sidebar__main-con open-sidebar" : "sidebar__main-con"}>
        <button
          className="sidebar__button"
          onClick={() => setOpenSidebar(false)}
        >
          <img src="/images/icon-close.svg" alt="" />
        </button>
        <ul>
          {links.map((link) => {
            const { name, id } = link;
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    );
};
 
export default SideBar;