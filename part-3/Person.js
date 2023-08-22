const Person = (props) => {
    let msg;
    if (props.age >= 18) {
        msg = "Please go vote!";
    } else {
        msg = "you must be 18!";
    }
    return (
        <div>
            <h2>
                {props.name}, {props.age}
            </h2>
            <h3>{msg}</h3>
            <ul>
                {props.hobbies.map((i) => (
                    <li>{i}</li>
                ))}
            </ul>
        </div>
    );
};
