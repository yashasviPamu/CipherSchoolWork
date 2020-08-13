class Stack{
	constructor{
		this.items=[]
	}
	push(item)
	{
		this.items.push(item);
	}
	pop(item)
	{
		if(this.items.length==0)
		{
			console.log("No elements");
		}
		return this.items.pop();
	}
	print()
	{
		var str="";
		for (var i=0;i<this.items.length;i++)
		{
			str+=this.items[i]+" ";
		}
		return str;
	}
}