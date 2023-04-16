import { useEffect, useState } from "react";


export default function CategoriesComponent() {

    const urlList = "http://localhost:8080/category/list";
    let [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        let isSubscribed = true;

        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch(urlList);
            // convert the data to json
            const json = await data.json();

            // set state with the result if `isSubscribed` is true
            if (isSubscribed) {
                setCategoryList(json);
            }
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);

        // cancel any future `setData`
        return () => isSubscribed = false;
    }, [urlList])

    console.log(categoryList)
    return (
        <>
            <div>
                {categoryList.map(cat =>
                    <div>
                        <a href={`/products/${cat.categoryId}`}>{cat.categoryName}</a>
                    </div>)}
            </div>
        </>
    )


}

