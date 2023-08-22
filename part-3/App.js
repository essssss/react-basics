const App = () => (
    <div>
        <Person
            name="John"
            age="25"
            hobbies={["singing", "dancing", "exercise"]}
        />
        <Person
            name="Sylvia"
            age="15"
            hobbies={["softball", "bird-watching", "dancing"]}
        />
        <Person
            name="Kinsey"
            age="30"
            hobbies={["TV", "wine tasting", "golf"]}
        />
    </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
