import smoothScrollTo from "../utils/smoothScrollTo"
import styles from "./item.module.css"
import { FiTag } from "react-icons/fi";

export const Sidebar= ()=>{



    return (
        <div className={styles.sidebox}>
          <FiTag aria-hidden="true" style={{ width: "70px", height: "40px" }} />
          <h1>KFC MENU</h1>
          <h3><button type="button" onClick={() => smoothScrollTo("chicken")}>CHICKEN BUCKETS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("launch")}>NEW LAUNCH</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("rolls")}>CHICKEN ROLLS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("biryani")}>BIRYANI BUCKETS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("box")}>BOX MEALS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("burger")}>BURGERS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("stayhome")}>STAY HOME SPECIALS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("snacks")}>SNACKS</button></h3>
          <h3><button type="button" onClick={() => smoothScrollTo("beverage")}>BEVERAGES</button></h3>
        </div>
    )
}