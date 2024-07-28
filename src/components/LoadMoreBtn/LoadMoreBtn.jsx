import css from "./LoadMoreBtn.module.css"
const LoadMoreBtn = ({onClick}) => {
    return <>
    <button type="button" className={css.loadButton} onClick={onClick}>Load more</button>
    </>
}

export default LoadMoreBtn