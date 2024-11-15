async function arr_partition(ele ,l,r)
{
    console.log("In partition()");
    let i=l-1;

    //color pivot element
    ele[r].style.background='red';
    // let pivot=ele[r].style.height;

    for(let j=l;j <=r-1;j++)
    {
        console.log("In partition for j");

        //color of current element
        ele[j].style.background='yellow';

        await waitforme(delay);

        if(parseInt(ele[j].style.height)< parseInt(ele[r].style.height))
        {
            console.log("In partition for j if");

            i++;                         
            swap(ele[i],ele[j]);                   //to take ele less than pivote to left side

            ele[i].style.background='blue';       //after swap to make swapped ele brown which is less than pivot
            if(i!=j)
            {
                ele[j].style.height='blue';      //to make both swapped ele brown
            }
            await waitforme(delay);

        }
        else
        {

            ele[j].style.background='rgb(242, 47, 164)';   //if not less than pivote ele
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i],ele[r]);   //to swap pivot to with its correct position

    console.log(`i=${i}`,typeof(i));

    ele[r].style.background='rgb(242, 47, 164)';
    ele[i].style.background='green'; //ele at correct position in sorted array


    await waitforme(delay);

    for(let k=0; k<ele.length;k++)
    {
        if(ele[k].style.background !='green')
              ele[k].style.background='cyan';  //to make remaining ele cyan for next iteration
    }

    return i;
}




async function quickSort(ele , l ,r)
{
    console.log("In quicksort()", `l=${l} r=${r}` ,typeof(l), typeof(r));
    if(l < r)
    {
        let pivot_index = await arr_partition(ele, l, r);    //to get index of pivot element
        await quickSort(ele, l, pivot_index - 1);      //iterating recursively left partition from pivot element
        await quickSort(ele, pivot_index + 1, r);       //iterating recursively right partition from pivot element
    }
    else{
        if(l>=0 && r>=0 && l<ele.length && r<ele.length)   //to green to all sorted element
        {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
            
        }
    }

}


const quickSortbtn = document.querySelector(".quicksort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingbtn();
    enableSizeSlider();
    enableNewArrayBtn();
});