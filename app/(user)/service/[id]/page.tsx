import CardDetailComponent from "@/components/card/CardDetailComponent";
import { cache } from "react";


type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any
};
const ENDPOINT = "https://fakestoreapi.com/products/"
// {cache:"no-store"} is when we don't want to cache the data because by default next js is automatically caching
// {next: {revalidate: 10}} when you to reload and cache again every 10 second
const getData = async(id: number) => {
    const res = await fetch(`${ENDPOINT}${id}`,{next: {revalidate: 10}});
    const data = await res.json();
    // console.log(data)
    return data;
}


export default async function detail(props: PropsParams) {
    let data =  await getData(props.params.id)
    console.log(data);
    
    console.log("This is props: ", props)
    console.log(props.searchParams.productName)
	return <div className=' grid place-content-center text-lg my-8'> 
        <CardDetailComponent title={data?.title || "no title"}  description={data?.description || "no desctiption"} image={data?.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" }  /> 
     </div>;
}
