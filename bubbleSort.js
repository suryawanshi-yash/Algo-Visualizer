async function bubble()
{
    console.log("In bubble()");

    const ele = document.querySelectorAll(".bar");

    for(let i=0; i<ele.length-1 ;i++){             //i is for no of iteration
        console.log("In ith loop");
        for(let j=0;j<ele.length-1-i;j++){          //for traversing through unsorted array
            console.log("In jth loop");
            ele[j].style.background = 'blue';            //elements which are currently checking
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
            console.log("In if condition");
            await waitforme(delay);                //while swapping for time delay for visualization
            swap(ele[j],ele[j+1]);
            }
            ele[j].style.background = 'cyan';            //elements which are currently checked
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-i-1].style.background='green';     ////elment added in sorted part after every iteration
    }
    ele[0].style.background='green';                     //at last for 1st element
}

const bubSortbtn = document.querySelector(".bubblesort");
bubSortbtn.addEventListener('click',async function(){
    disableSortingbtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await bubble();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingbtn();
});