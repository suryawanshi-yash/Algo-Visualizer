
// to swap values in array by .style.height feature
function  swap(el1,el2)
{

    console.log('In swap()');
    let temp=el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=temp;
}

//Disable Sorting button while another sorting is in process
function disableSortingbtn()
{
    document.querySelector('.bubblesort').disabled=true;
    document.querySelector('.mergesort').disabled=true;
    document.querySelector('.insertionsort').disabled=true;
    document.querySelector('.quicksort').disabled=true;
    document.querySelector('.selectionsort').disabled=true;

}

//Disable Sorting button while another sorting is in process
function enableSortingbtn()
{
    document.querySelector('.bubblesort').disabled=false;
    document.querySelector('.mergesort').disabled=false;
    document.querySelector('.insertionsort').disabled=false;
    document.querySelector('.quicksort').disabled=false;
    document.querySelector('.selectionsort').disabled=false;

}

//Disable Array size slider while another sorting is in process
function disableSizeSlider()
{
    document.querySelector('#arr_sz').disabled=true;
}

//Enable array size slider when sorting is completed
function enableSizeSlider()
{
    document.querySelector('#arr_sz').disabled=false;
}

//Disable New array button while another sorting is in process
function disableNewArrayBtn()
{
    document.querySelector('.newarray').disabled=true;
}

//Enable new array button when sorting is completed
function enableNewArrayBtn()
{
    document.querySelector('.newarray').disabled=false;
}

//used asyn function so that we can see animation of sorting,take input in milisec
function waitforme(milisec)
{
    return new Promise(resolve => {
        setTimeout(() => {resolve('')},milisec);
        
    })
}

//seleting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

//Event listener to update the bars on the ui
//this function is called when we provide new array size as input
arraySize.addEventListener('input',function(){
    console.log(arraySize.value,typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay=260;//Default input for waitfrome function

//Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

//Event listener to update delay time
delayElement.addEventListener('input',function()
{
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//Creating array to store randomly generated array
let array = [];

//Call to display bars right when we visit site
createNewArray();

//To create new array using input as size of array

function createNewArray(noOfBars = 60)
{
    deleteChild();     //calling helper function to delete old bars from dom

    //creating an array of random numbers
    array = [];
    for(let i=0 ; i<noOfBars ;i++){
        array.push(Math.floor(Math.random()*250)+1);     //taking random values using Math package
    }
    console.log(array);

     //select the div #bars element
    const bars = document.querySelector("#bars");

    //create multiple element div using loop and adding clas 'bar flex-item barNo{i}'
    for(let i=0;i<noOfBars;i++) {

   const bar = document.createElement("div");//create outer div in dom
    
    //object.style.height is used to give height to block element or element having fixed or absolute position
    bar.style.height = `${array[i]*2}px`; //use `` to pass value as reference
    
   
    bar.classList.add('bar');//adding class to html for each bar
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    
    bars.appendChild(bar);//to add each bar in div bars


    }
}

//Helper function to delete all the previous bars so that new can be added
function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

//Selecting newarrray button from dom and adding eventlistener
const newArray = document.querySelector(".newarray");
newArray.addEventListener('click',function(){
    console.log("From newArray" + arraySize.value);
    console.log("From newArray" + delay);
    enableSortingbtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

