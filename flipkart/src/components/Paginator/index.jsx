export const Paginator = (props) => {
    const { total } = props;
    const pageSize = [];
    for (let i = 1; i <= total / 10; i++) {
        pageSize.push(i);
    };
    const generatePages = () => {
        return (
            pageSize.map((item, index) => {
                return (<li className="page-item active" key={index}>
                    <a className="page-link" href="#">{item}</a>
                </li>)
            })
        )
    }
    return (
        <div>
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#">&laquo;</a>
                </li>
                {generatePages()}
                <li className="page-item">
                    <a className="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    )
}