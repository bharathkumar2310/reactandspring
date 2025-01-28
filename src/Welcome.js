function Welcome(props) {
    return(
        <div>
            <h1> Hello this is Welcome Component</h1>
            <p> Today is {props.today} , time is {props.time}</p>

        </div>
    );
}
export default Welcome;