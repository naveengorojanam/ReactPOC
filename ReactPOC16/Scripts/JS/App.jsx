function App() {
    //const [temp, setTemp] = React.useState("hello");
    return (
        <div>
            <h1>React functional component</h1>
            <button onClick={() => { window.alert('button clicked'); }}>click for alert</button>
        </div>
        )
}

React.render(<App />, document.getElementById("reactdiv"));