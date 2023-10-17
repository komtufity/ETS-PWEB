const cardEl = document.getElementById("card-template");
const bioEl = document.getElementById("bio");

fetch(`http://159.223.51.203/api/bio`).then(res => res.json()).then(data => {
    console.log(data)

    let otherCard = ''
    data.forEach((biodata, idx) => {
        otherCard +=
        `
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                ${biodata.name}</div>
                            <div class="h6 mb-0 text-gray-800">${biodata.id}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ` 
    });
    cardEl.innerHTML = otherCard;
})


