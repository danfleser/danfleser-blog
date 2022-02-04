import { useEffect } from "react";
import Link from "next/link";
import { NO_RESULTS_ID } from "../../utils/helpers";

const toggleDarkMode = () => {
  localStorage.theme = localStorage.theme === "light" ? "dark" : "light";

  document.documentElement.classList = localStorage.theme;
};

export default function Header() {
  let input;
  const resetPosts = () => {
    // revert back posts
    document.querySelectorAll("[data-name]").forEach((p) => {
      p.style.display = "block";
    });

    // hide no results card
    document.getElementById(NO_RESULTS_ID).style.display = "none";
  };
  const filterPosts = (term) => {
    resetPosts();
    if (term) {
      // hide unmatched posts
      const docs = document.querySelectorAll("[data-name]");
      let count = docs.length;
      docs.forEach((p) => {
        if (!p.dataset.name.toLowerCase().includes(term)) {
          p.style.display = "none";
          count--;
        }
      });

      // show no results card
      if (!count) {
        document.getElementById(NO_RESULTS_ID).style.display = "block";
      }
    }
  };

  const searchPost = () => input && filterPosts(input.value);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    input = document.querySelector('input[type="search"]');
    input.addEventListener("search", searchPost);
  });

  return (
    <header className="app-header">
      <div className="app-container">
        <div className="content">
          <Link href="/" passHref>
            <h2 className="logo">Dev blog</h2>
          </Link>

          <div className="content">
            <div className="search">
              <input type="search" placeholder="Search..." />
              <button onClick={searchPost}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="darkMode" onClick={toggleDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
