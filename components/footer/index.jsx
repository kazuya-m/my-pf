import styles from '../footer/index.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={`logo`} />
      </a>
      <img src="/skills/nextjs.svg" alt="Next.js Logo" className={`logo`} />
      <img src="/skills/react.svg" alt="React Logo" className={`logo`} />
      <img src="/skills/javascript.svg" alt="JavaScript Logo" className={`logo`} />
      <img src="/skills/html.svg" alt="HTML Logo" className={`logo`} />
      <img src="/skills/css.svg" alt="CSS Logo" className={`logo`} />
      <img src="/skills/github.svg" alt="GitHub Logo" className={`logo`} />
    </footer>
  )
}