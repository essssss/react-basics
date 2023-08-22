const App = () => (
    <div>
        <Tweet
            username="user1"
            name="john"
            date="08/20/23"
            message="I just called to say 'I love you!'"
        />
        <Tweet
            username="user2"
            name="jose"
            date="08/21/23"
            message="Where is my mind? Way out in the water see it swimming."
        />
        <Tweet
            username="user3"
            name="justin"
            date="08/22/23"
            message="Oh, these flocking birds won't quit!"
        />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
