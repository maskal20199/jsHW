//--------------------------//Выводим все четные числа в новый массив 
let arr = [14, 62, 73, 66, 142, 15, 137, 45, 845, 922, 984];
let arr2 = [];
for ( i = 0; i < arr.length; i++)
{
	if ((arr[i] % 2) === 0)
	{
		arr2.push(arr[i]);
		
	}
}
console.log (arr2);
//--------------------------// Выводим все исла под четными индексами
let arr3 = [14, 62, 73, 66, 142, 15, 137, 45, 845, 922, 984];
let arr4 = [];
for ( i = 0; i < arr3.length; i++)
{
	if (i % 2 === 0)
	{
		arr4.push(arr3[i]);
		
	}
}
console.log (arr4);
//------------------------//Числа фибоначчи

function fib(n,m) {
	const arrFib=[];
	let a = 1;
	let b = 1;
	for (let i = 3; i <= m; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}
let arrFib = fib(0,10);
console.log(arrFib);
