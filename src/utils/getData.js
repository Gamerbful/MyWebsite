
// fetch local json file!
async function getData(key) {
    let data = await fetch('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            return res.json()
        })
    if (!data[key]) return;
    return data[key];
}


export default getData;