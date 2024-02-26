        const text = document.querySelector(".sec-text");
        const Load = () =>{
            setTimeout(()=>{
                text.textContent = "Web Developer";
            },0);
            setTimeout(()=>{
                text.textContent = "MERN Developer";
            },4000);
            setTimeout(()=>{
                text.textContent = "Front-end Developer";
            },8000);
        }
        Load();
        setInterval(Load,12000);
        var tablinks = document.querySelector(".tab-links");
        var tabcontents = document.querySelector(".tab-contents");
        var tabcontents = document.querySelector(".active-link");
        var tabcontents = document.querySelector(".active-tab");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove(".active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove(".active-tab");
            }
            event.currentTarget.classList.add(".active-link")
            document.getElementById(tabname).classList.add(".active-tab")
        }

        var sidemenu = document.getElementById("#sidemenu");
        function openmenu(){
            sidemenu.style.right="0";
        }
        function closemenu(){
            sidemenu.style.right="-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbz-6RIrezbIGXcCdodL3dFebU2MWHEhPaXCSEyel97-K2ORZFhr6ZOKo2JLABnIIDyeOw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
    
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Prasad Will get back to you hold on!"; 
                setTimeout(function(){
                    msg.innerHTML = "";
                }, 1000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
