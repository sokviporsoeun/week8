function Time() {
    let date = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    return(
        <h2>
            {date}
        </h2>
    );
}

export default Time;