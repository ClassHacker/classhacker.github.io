import "./Footer.scss";

export function Footer() {
    return (
    <footer className="footer">
      <p>
        &copy; 2023 ClassHacker
      </p>
      <p>
        <a className="highlight-link" href="https://github.com/ClassHacker/classhacker.github.io" target="_blank" rel="noreferrer">
          Published
        </a>
        &#160;with&#160;
        <a className="highlight-link" href="https://pages.github.com/" target="_blank" rel="noreferrer">
          GitHub Pages
        </a>
      </p>
    </footer>
    )
}