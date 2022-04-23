function App() {
    return (
        <>
            <label htmlFor="bar">bar</label>
            <input
                type="text"
                id="bar"
                onClick={() => {
                    console.log("click");
                }}
            ></input>
        </>
    );
}

export default App;
