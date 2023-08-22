export const Paginator = (props) => {
    const { total } = props;
    const pageSize = [];
    for (let i = 1; i <= total / 10; i++) {
        pageSize.push(i);
    };
    const generatePages = () => {
        return (
            pageSize.map((item, index) => {
                return (<li class="page-item active" key={index}>
                    <a class="page-link" href="#">{item}</a>
                </li>)
            })
        )
    }
    return (
        <div>
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>
                {generatePages()}
                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    )
}