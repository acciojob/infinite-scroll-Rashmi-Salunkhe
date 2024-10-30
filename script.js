const list = document.getElementById("infi-list");

function listItems(val){

	for(let i =0;i<val;i++){
		const items = document.createElement("li");
		items.innerText = `Item ${list.children.length +1}`;
		list.appendChild(items);
	}
}

listItems(10);

list.addEventListener("scroll", function(){
	if(this.clientHeight+ this.scrollTop >= this.scrollHeight){
		listItems(2);
	}
});
