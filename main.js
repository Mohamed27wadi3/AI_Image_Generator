//lien de openAI
const api ="sk-None-QDoNR6nGRvkVnx1j1ElQT3BlbkFJxyRgI0ZikQRDRLDW1v0l";

const inp= document.getElementById('inp')
const images = document.querySelector('.images')
//function getImage
const getImage = async () =>{ 
    //make a request to openAI

    const res= await fetch("https://api.openai.com/v1/images/generations",{
        
            method:"POST",
            headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${api}`
            },
            body:JSON.stringify(
                {
                "prompt":inp.value,
                "n":3,
                "size":"256x256"
                }
            )
}  )
// parse response as json
const data = await res.json()
const listImages= data.data;
images.innerHTML=''
listImages.map(photo => {
const container = document.createElement("div")
images.append(container)
const img =document.createElement("img")
container.append(img)
img.src=photo.url

})


}