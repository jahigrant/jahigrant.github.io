function math() {

    window.addEventListener("hashchange", pyFetchConfig);
    window.addEventListener("DOMContentLoaded", pyFetchConfig);
    function pyFetchConfig() {
        if (location.hash == "math.html") {
            var math_config = document.getElementById("math-config");
            $("#math-config").html(`
                <py-config>
                    [splashscreen]
                        enabled = false
                    packages = [
                        "datetime"
                    ]
                    plugins = [
                        "https://pyscript.net/latest/plugins/python/py_tutor.py"
                    ]

                    [[fetch]]
                    files = ["../python/math.py"]
                </py-config>
            `);
        }
    }

    const element = (
        <div className="fade show">
            <h6 id="math-script" className="fs-4">Math Code</h6>

            <div id="math-config"></div>

            <div className="row pb-0 mb-0 fs-4 fade show">
                <code>
                    def math_script():
                </code>
            </div>
            <div className="row pb-0 mb-0 fs-4 fade show ms-4">
                <code>
                    print(int(50) * int(50) % int(45) * 5000)
                </code>
            </div>
            <div className="row pb-0 mb-0 pb-2 mb-2 fs-4 fade show ms-4">
                <code>
                    print('=========================')
                </code>
            </div>

            <div className="btn-group pb-4" role="group" aria-label="math script">
                <button type="button"  className="btn btn-primary rounded-0 fs-4" py-click="math_script()" id="math-manual">
                    <span className="px-2">Run code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg> 
                </button>
            </div>

            <div id="math_script"></div>

            <py-terminal></py-terminal>     

        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('math_component')
    );

}




math();

$(document).ready(() => {

async function getText(file) {
    let newObject = await fetch(file);
    let printText = await newObject.text();
    if ( newObject.ok !== true ) {
        console.log("not newObject not newObject not newObject ", newObject);
        document.getElementById("math_script").innerHTML = "Unknown error";
    } else {
        console.log("newObject newObject newObject ", newObject);
        document.getElementById("math_script").innerHTML = printText;
    }
}
getText("../python/math.py");

    var btn = document.getElementById("math-manual");
    btn.addEventListener("click", function() {
        $(".py-terminal-docked").remove();
        $(".py-terminal").html("");
        $(".py-terminal").addClass("fs-4");
    });
    btn.removeEventListener("click", function() {});

    var menutabs = document.getElementById("tabs-nav");
    menutabs.addEventListener("click", function() {
        $(".py-terminal-docked").remove();
        $(".py-terminal").html("");
        $(".py-terminal").addClass("fs-4");
    });
    menutabs.removeEventListener("click", function() {});

});      




  




