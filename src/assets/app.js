
function deleteHandleCompany(e) {
    const Id = `${e.target.id}`
    console.log(Id);
    fetch(`/admin/companies/${Id}`,{
        method: 'DELETE'
    })
    .then(res =>res)
    .then(data => {
        if(data.status == 200) {
            window.location.reload()
        }
    })
    .catch(err => console.error(err));

}

function deleteHandleComplex(e) {
    const Id = `${e.target.id}`
    fetch(`/admin/complexes/${Id}`,{
        method: 'DELETE'
    })
    .then(res =>res)
    .then(data => {
        if(data.status == 200) {
            window.location.reload()
        }
    })
    .catch(err => console.error(err));

}



function deleteHandleRooms(e) {
    const Id = `${e.target.id}`
    fetch(`/admin/rooms/${Id}`,{
        method: 'DELETE'
    })
    .then(res =>res)
    .then(data => {
        if(data.status == 200) {
            window.location.reload()
        }
    })
    .catch(err => console.error(err));

}

function deleteHandleBank(e) {
    const Id = `${e.target.id}`
    fetch(`/admin/banks/${Id}`,{
        method: 'DELETE'
    })
    .then(res =>res)
    .then(data => {
        if(data.status == 200) {
            window.location.reload()
        }
    })
    .catch(err => console.error(err));
}
// }
// function idHandleBank(e) {
//     const Id = `${e.target.id}`
//     fetch(`/client/${Id}`,{
//         method: 'POST'
//     })
//     .then(res =>res)
//     .then(data => {
//         if(data.status == 200) {
//             window.location.reload()
//         }
//     })
//     .catch(err => console.error(err));

// }

function changeFunc() {
    const selectCompany = document.getElementById("companies");
    const selectedCompany = selectCompany.options[selectCompany.selectedIndex].value;
    fetch(`/client`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({comp_name : selectedCompany})
    })
    .then(res =>res)
    .then(data => {
        if(data.status == 200) {
        }
    })
    .catch(err => console.error(err));

    console.log(selectedCompany);
}