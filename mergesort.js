async function merge(ele , l, mid ,r)
{
    console.log("In merge()",`l=${l}, mid=${mid} ,r=${r} `);

    let n1= mid-l+1;                 //size of temporary left array
    let n2=r-mid;                           //size of temporary right array

    console.log(`n1=${n1} , n2=${n2}`);
    let left= new Array(n1);            //declaring temp left array
    let right = new Array(n2);       //declaring temp right array

    for(let i=0; i<n1;i++)
    {
        await waitforme(delay);
        console.log("In merge left loop");
        console.log(ele[l+i].style.height + 'at' +(l+i));

        ele[l+i].style.background = 'orange';               //element on left of mid
        left[i]=ele[l+i].style.height;               //storing in temp left array
    }
    for(let i=0; i<n2;i++)
    {
        await waitforme(delay);
        console.log("In merge right loop");
        console.log(ele[mid+1+i].style.height + 'at' +(mid+1+i));

        ele[mid+1+i].style.background = 'yellow';               //elements on right of mid
        right[i]=ele[mid+1+i].style.height;         //storing in temp right array
    }

    await waitforme(delay);
    let i=0, j=0 ,k=l;
    while(i<n1 && j<n2)                // while loop for comparison between temporary arrays
    {
        await waitforme(delay);
        console.log("In merge while loop");
        console.log(parseInt(left[i]),parseInt(right[j]));
        

        if(parseInt(left[i]) <= parseInt(right[j]))               // if element in temp right array is greater than ele in left array
        {
               console.log("In merge while loop if");
               if((n1+n2)===ele.length)                      
               {
                ele[k].style.background = 'green';       //for final array merging
               }
               else
               {
                ele[k].style.background = 'lightgreen';          //for merging of subarray
               }

               ele[k].style.height =left[i];            //storing value of temp array after comparison in final array
               i++;
               k++;
        }
        else
        {
            console.log("In merge while loop else");
            if((n1+n2)===ele.length)
            {
             ele[k].style.background = 'green';
            }
            else
            {
             ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height =right[j];
            j++;
            k++;

        }
    }
    while(i<n1)                     //for storing element remained after comarison from left temp array
    {
        await waitforme(delay);
        console.log("In while if n1 is left");
        if((n1+n2)===ele.length)
        {
         ele[k].style.background = 'green';
        }
        else
        {
         ele[k].style.background = 'lightgreen';
        }

        ele[k].style.height =left[i];
        i++;
        k++;
    }

    while(j<n2)                        //for storing element remained after comarison from right temp array
    {
        await waitforme(delay);
        console.log("In while if n2 is left");
        if((n1+n2)===ele.length)
        {
         ele[k].style.background = 'green';
        }
        else
        {
         ele[k].style.background = 'lightgreen';
        }

        ele[k].style.height =right[j];
        j++;
        k++;
    }

}

async function mergeSort(ele , l,r)
{
    console.log("In mergeSort()");

    if(l>=r)                                             //return if 1 element left 
    {
        console.log(`return cause just 1 element l=${l} , r=${r}`);
        return;
    }

    const m = l+Math.floor((r-l)/2);                     // calculating mid index
    console.log(`left=${l} mid=${m} right=${r}`,typeof(m));

    await mergeSort(ele,l,m);
    await mergeSort(ele,m+1,r);
    await merge(ele,l,m,r);
}


const mergeSortbtn = document.querySelector(".mergesort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingbtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingbtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
