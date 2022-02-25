console.log('script')

const app = {
    base_url: 'http://localhost:5000',
    init: function () {
        document.querySelector('form')
            .addEventListener('submit', async (event) => {
                event.preventDefault();
                console.log('dans submit')
                const formData = new FormData(event.target);
                console.log('formData:')
                for(var pair of formData.entries()) {
                    console.log(pair[0]+ ', '+ pair[1]);
                 }
                const response = await fetch(`${app.base_url}/sendMail`, {
                    method: 'POST',
                    body: formData
                });
                
                const reponsejson = await response.json();
                console.log('response:', response)
                console.log('reponsejson:', reponsejson)
                // console.log(envoistatus)

            })
    }
}
app.init()