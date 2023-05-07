import { MdCreateNewFolder, MdFeaturedPlayList } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Admin.module.scss";

const AdminMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className={styles["admin-aside"]}>
      <ul>
        <li
          onClick={() => navigate("/admin/dashboard")}
          className={
            pathname.includes("dashboard") ? styles["active-menu"] : ""
          }
        >
          <AiOutlineDashboard /> Dashboard
        </li>

        <li
          onClick={() => navigate("/admin/products")}
          className={pathname.includes("products") ? styles["active-menu"] : ""}
        >
          <MdFeaturedPlayList /> Products
        </li>

        <li
          onClick={() => navigate("/admin/add-product")}
          className={pathname.includes("add") ? styles["active-menu"] : ""}
        >
          <MdCreateNewFolder /> Add Product
        </li>
      </ul>
    </aside>
  );
};

export default AdminMenu;
