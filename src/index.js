function dogs() {
        fetch('http://localhost:3000/pups')
        .then(res => res.json())
        .then(data => data.forEach(pup => dogInfo(pup)))
    }
    
    function dogInfo(pup) {
            const div = document.querySelector('#dog-bar')
            const span = document.createElement('span')
            div.appendChild(span)
            span.textContent = pup.name
            
            span.addEventListener('click', () => {
            const img = document.createElement('img')
            const h2 = document.createElement('h2')
            const button = document.createElement('button')
            button.addEventListener('click', (e) => {
                
                if (e.target.innerText === "Good Dog!") {
                    e.target.innerText = "Bad Dog!"
                } else if (e.target.innerText === "Bad Dog!") {
                    e.target.innerText = "Good Dog!"
                }
                
            })
            
            const dogDiv = document.querySelector('#dog-info')
            dogDiv.append(img, h2, button)

            img.src = pup.image
            h2.textContent = pup.name
            
            if (pup.isGoodDog === true) {
                return button.textContent ="Good Dog!"
            } else if (pup.isGoodDog === false) {
                return button.textContent ="Bad Dog!"
            }

            })
    }

    dogs();
         
            
        









