import CardDetailComponent from "@/components/card/CardDetailComponent";
import { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";


type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  } 

const ENDPOINT = "https://fakestoreapi.com/products/"
// {cache:"no-store"} is when we don't want to cache the data because by default next js is automatically caching
// {next: {revalidate: 10}} when you to reload and cache again every 10 second
const getData = async(id: string) => {
    const res = await fetch(`${ENDPOINT}${id}`,{next: {revalidate: 10}});
    const data = await res.json();
    // console.log(data)
    return data;
}

//generateMetadata generate dynamic
export async function generateMetadata(
    { params, searchParams }: Props,
    // ResolvingMetadata for get metadata from parent
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        images: product.image,
      },
    }
  }

export default async function detail(props: Props) {
    let data =  await getData(props.params.id)
    console.log(data);
    
    console.log("This is props: ", props)
    console.log(props.searchParams.productName)
	return(
    <main className='h-screen flex justify-center flex-col items-center text-lg  pt-16 space-y-4'> 
        <section className='space-y-2'>
          <h1 className='xl:text-5xl text-3xl text-center font-semibold text-gray-800 text-red-100'>Ready to Make it Yours?</h1>
          <p className='text-lg text-center px-16  '>Need personalized recommendations? Visit us or <a href="/contact" className="underline ">contact us</a> today!</p>
        </section>
        <CardDetailComponent title={data?.title || "no title"}  description={data?.description || "no desctiption"} image={data?.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" }  /> 
     </main>
  );

    
}
