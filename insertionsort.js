async function insertion()                     //insertion function
{
    console.log("In insertion()");

    const ele = document.querySelectorAll(".bar");            //select all elements

    ele[0].style.background='green';                      //initial sorted part 

    for(let i=1;i<ele.length;i++)                   //loop for checking current element with previous sorted part
    {
        console.log("In ith loop");
        ele[i].style.background='blue';              //currently checked element 

        let current = ele[i].style.height;            //current element 

        let j=i-1;                               //last element of sorted array

        await waitforme(delay);
        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(current)))        //condition to find out correct position of current element
        {
            console.log("In while loop");
            ele[j].style.background='blue';                                     //blue for currently compared elelment
            ele[j+1].style.height=ele[j].style.height;                          //updating value with previous element
            j--;                                                          


            await waitforme(delay);

            for(let k=i;k>=0;k--)
            {
                ele[k].style.background='green';                                 //for sorted part
            }
        }

        ele[j+1].style.height=current;                                          //storing value of current appropriate position

        ele[i].style.background='green';                                       //adding current position in sorted part

    }
}

const inSortbtn = document.querySelector(".insertionsort");
inSortbtn.addEventListener('click',async function(){
    disableSortingbtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await insertion();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingbtn();
});