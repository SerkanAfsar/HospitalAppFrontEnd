import styles from "./index.module.scss";
import clsx from "clsx";
import Link from "next/link";
export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={clsx("container", styles.wrapper__content)}>
        <div className={styles.wrapper__logo}>Hastane Rehberi</div>
        <nav>
          <ul>
            <li>
              <Link href="#" title="İstanbul Hastaneleri">
                İstanbul Hastaneleri
              </Link>
            </li>
            <li>
              <Link href="#" title="Ankara Hastaneleri">
                Ankara Hastaneleri
              </Link>
            </li>
            <li>
              <Link href="#" title="İzmir Hastaneleri">
                İzmir Hastaneleri
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
