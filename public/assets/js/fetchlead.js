function fetchData() {
  fetch("/lead")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      var table = document
        .getElementById("tablelead")
        .getElementsByTagName("tbody")[0];
      data.forEach((element, i) => {
        var row = table.insertRow(0);
        var cell = [6];
        for (let index = 0; index < cell.length; index++) {
          cell[index] = row.insertCell(index);
        }

        var div = [3];
        for (let i = 0; i < 3; i++) {
          div[i] = document.createElement("div");
        }

        div[0].className = "d-flex align-items-center";
        div[1].className = "icon-shape icon-md rounded-1";
        div[2].className = "ms-3 lh-1";

        const imag = document.createElement("img");
        imag.src = "../assets/images/icon/comments.png";
        imag.className = "commint";
        imag.id = "comment";
        div[1].appendChild(imag);

        const label = document.createElement("label");
        label.textContent = element.fullname;
        div[2].appendChild(label);

        div[2].appendChild(label);
        div[0].append(div[1], div[2]);
        cell[0].appendChild(div[0]);
      });
    });
}

// function fetchprofile(params) {
//     const rawResponse = await fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({params})
//       });
//       const content = await rawResponse.json();
    
//       console.log(content);
// }

function fetch_statistic() {
  fetch("/statistic")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.rows);
    }).catch(error =>{console.log(error);})
    
}
fetchData();
fetch_statistic();