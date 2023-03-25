import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function Nav() {

    return (
<>
<div className={styles.navcont}>
<Link className={styles.nav} href='/'> HOME </Link>
<Link className={styles.nav} href='/about'> ABOUT </Link>
<Link className={styles.nav} href='/contact'> CONTACT </Link>
</div>

</>
    )
}