const Tweet = (props) => {
    return (
        <div className="Tweet">
            <h2>{props.username}</h2>
            <p>
                {props.name} - {props.date}
            </p>
            <p>{props.message}</p>
        </div>
    );
};
