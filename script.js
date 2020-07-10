const tombol = document.querySelector("button")
const input = document.querySelector("input")
const gambar = document.querySelector("img")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const url1 = "https://www.trigunadharma.ac.id/media/fotoprofile/"
input.oninput = function(){
	let url2 = input.value
	if(url2 === ""){
		alert("anda harus mengisi inputan terlebih dahulu")
	}else{
		
	}
	gambar.src = url1+url2+".jpg"

}
tombol.onclick = ()=>{
	let url2 = input.value
	if(url2 === ""){
		alert("anda harus mengisi inputan terlebih dahulu")
	}else{
		
	}
	gambar.src = url1+url2+".jpg"

}

prev.onclick = function(){
	let url2 = input.value-1
	input.value = url2	
	if(url2 === ""){
		alert("anda harus mengisi inputan terlebih dahulu")
	}else{
		
	}
	gambar.src = url1+url2+".jpg"
}
next.onclick = function(){
	let url2 = input.value*1+1
	input.value = url2
	if(url2 === ""){
		alert("anda harus mengisi inputan terlebih dahulu")
	}else{
		
	}
	gambar.src = url1+url2+".jpg"
}

