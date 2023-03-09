import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="/about" prefetch={true}>
            about
          </Link>
        </li>
        <li>
          <Link href="/" prefetch={true}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" prefetch={true}>
            products
          </Link>
        </li>
      </ul>
    </div>
  )
}
