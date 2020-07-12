

const Carta = (props) => {
    return (
        <div className={props.theme} style={{ maxWidth: '30rem' }}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}
export default Carta