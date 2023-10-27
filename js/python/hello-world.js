const hello_file_location = "../python/helloworld.py";
const code_name = "hello-world";

function helloworld() {

    window.addEventListener("hashchange", pyFetchConfig);
    window.addEventListener("DOMContentLoaded", pyFetchConfig);
    function pyFetchConfig() {
        if (location.hash == this.code_name+".html") {
            var math_config = document.getElementById(this.code_name+"-config");
            $("#"+this.code_name+"-config").html(`
                <py-config>
                    [splashscreen]
                        enabled = true
                    [[fetch]]
                    files = ["`+hello_file_location+`"]
                </py-config>
            `);
        }
    }

    const element = (
        <div className="fade show m-3">
            <h6 id="hello-world-script" className="fs-4 ps-0">Hello World Code</h6>

            <div id="hello-world-config"></div>

            <div id="hello-world-code-in-page" className="fs-4 pb-4"></div>

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
        if ( newObject.ok !== true ) {
            document.getElementById("hello_world_script").innerHTML = "Unknown error";
        } else {
            document.getElementById("hello_world_script").innerHTML = printText;
        }
    }
    getText(hello_file_location);

    fetch(hello_file_location)
    .then(response => response.text())
    .then(ab => {

        const msg = _.toString(ab);
        const lines = msg.split('\n');
        const edit_arr_begin = _.tail(lines);
        const edit_arr_end = _.dropRight(edit_arr_begin);

        const getCodeDiv = document.getElementById("hello-world-code-in-page");

        for (let i = 0; i < edit_arr_end.length; i++) {
            const element = edit_arr_end[i];
            
            if (element.startsWith("def ")) {
                getCodeDiv.innerHTML += '<code class="ps-0">' + element + '</code><br>';
            } else {
                getCodeDiv.innerHTML += '<code class="ps-4">' + element + '</code><br>';
            }
            console.log(lines);
        }

    })
    .catch(err => console.log(err));

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

      








  




