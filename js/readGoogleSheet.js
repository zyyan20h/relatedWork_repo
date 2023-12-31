var url = "https://docs.google.com/spreadsheets/d/1yaZWr2U66JCPy5NssvbX-qGEgytAyVl8ftS4V2UGxPs/edit?usp=sharing";
const rawData = gooss.data(
    {
        id: {
            url: url,
            index: 0
        },
    },

    function callback(err, data) {
        if (err) { return alert(err); }
        else {
            console.log(data);
            console.log(data.id.length);
            gooss.template(data);
        }
        //document.getElementById("Container").innerHTML = JSON.stringify(data, null, 2);
    }
);

