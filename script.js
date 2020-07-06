const tombol = document.querySelector("button")
const input = document.querySelector("input")
const gambar = document.querySelector("img")
console.log(tombol)
const url1 = "https://www.trigunadharma.ac.id/media/fotoprofile/"
tombol.onclick = ()=>{
	let url2 = input.value
	console.log(url2)
	if(url2 === ""){
		alert("anda harus mengisi inputan terlebih dahulu")
	}else{
		
	}
	gambar.src = url1+url2+".jpg"

}

