
import style from '../Pagination/Pagination.module.css'

const Pagination = ({ currentPage, LAST_PAGE, handleClick }) => {
    const MAX_VISIBLE_PAGES = 20;
    let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    let endPage = Math.min(LAST_PAGE, startPage + MAX_VISIBLE_PAGES - 1);
  
    // Ajustar el inicio y el final si el número total de páginas es menor que MAX_VISIBLE_PAGES
    if (endPage - startPage < MAX_VISIBLE_PAGES - 1) {
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
    }
  
    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  
    return LAST_PAGE > 1 ? (
      <div className={style.pagination_container}>
        <button
          className={style.pagination_button}
          name="first"
          disabled={currentPage === 1}
          onClick={handleClick}
        >
          ◀◀
        </button>
        <button
          className={style.pagination_button}
          name="prev"
          disabled={currentPage === 1}
          onClick={handleClick}
        >
          ◀
        </button>
        {pages.map((page) => (
          <button
            key={page}
            name={page}
            disabled={page === currentPage}
            onClick={handleClick}
            className={style.pagination_button}
          >
            {page}
          </button>
        ))}
        <button
          className={style.pagination_button}
          name="next"
          disabled={currentPage === LAST_PAGE}
          onClick={handleClick}
        >
          ▶
        </button>
        <button
          className={style.pagination_button}
          name="last"
          disabled={currentPage === LAST_PAGE}
          onClick={handleClick}
        >
          ▶▶
        </button>
      </div>
    ) : null;
  };
  
  export default Pagination;
  