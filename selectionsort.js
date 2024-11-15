async function selection()
{
    console.log("In selection()");

    const ele = document.querySelectorAll(".bar");

    for(let i=0;i<ele.length ;i++)
    {
        console.log("In ith loop");
        //change color of position to swap with the next min
        ele[i].style.background = 'blue';   
        let min_index = i;
        for(let j=i+1;j<ele.length;j++)     //compare in unsorted part
        {
            console.log("In jth loop");

            //change color for the current comparison (in consideration for min_index)
            ele[j].style.background='red';

            await waitforme(delay);

            if((parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)))
            {
                console.log("In if condition height comparision");
                if(min_index !==i)
                {
                    //new min_index is found then change prev min_index colour to normal
                    ele[min_index].style.background='cyan';

                }
                min_index = j;   //update min_index

            }
            else
            {
                //if the current comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';

            }

        }
        await waitforme(delay);

        swap(ele[min_index],ele[i]);
        //change the min element index back to normal as it is swapped 
        ele[min_index].style.background ='cyan';

        //change the sorted elements color to green
        ele[i].style.background ='green';

    }
}

const selectionSortbtn = document.querySelector(".selectionsort");
selectionSortbtn.addEventListener('click',async function(){
    disableSortingbtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await selection();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingbtn();
});