function helloworld() {

    window.addEventListener("hashchange", pyFetchConfig);
    window.addEventListener("DOMContentLoaded", pyFetchConfig);
    function pyFetchConfig() {
        if (location.hash == "hello-world.html") {
            var math_config = document.getElementById("hello-world-config");
            $("#hello-world-config").html(`
                <py-config>
                    [splashscreen]
                        enabled = true
                    [[fetch]]
                    files = ["../python/hello_world.py"]
                </py-config>
            `);
        }
    }

    const element = (
        <div className="fade show">
            <h6 id="hello-world-script" className="fs-4">Hello World Code</h6>

            <div id="hello-world-config"></div>

            <div id="code-in-page"></div>

            <div className="row pb-0 mb-0 fs-4 fade show">
                <code>
                    def hello_world_script():
                </code>
            </div>    
            <div className="row pb-0 mb-0 fs-4 fade show ms-4">
                <code>
                    print("Hello World")
                </code>
            </div>
            <div className="row pt-0 mt-0 pb-2 mb-2 fs-4 fade show ms-4">
                <code>
                    print('=========================')
                </code>
            </div>

            <div className="btn-group pb-4" role="group" aria-label="hello world script">
                <button type="button"  className="btn btn-primary rounded-0 fs-4" py-click="hello_world_script()" id="hello-world-manual">
                    <span className="px-2">Run code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg> 
                </button>
            </div>            

            <div id="hello_world_script"></div>

            <py-terminal></py-terminal>

        </div>
    );

    ReactDOM.render(
        element,    
        document.getElementById('hello_world_component')
    );

}


helloworld();

$(document).ready(() => {
async function getText(file) {
    let newObject = await fetch(file);
    let printText = await newObject.text();
    console.log("object object object object object object object object ", newObject);
    if ( newObject.ok !== true ) {
        console.log("not newObject not newObject not newObject ", newObject);
        document.getElementById("hello_world_script").innerHTML = "Unknown error";
    } else {
        console.log("newObject newObject newObject ", newObject);
        document.getElementById("hello_world_script").innerHTML = printText;
    }
}
getText("../python/helloworld.py");

    var btn = document.getElementById("hello-world-manual");
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

      








  




