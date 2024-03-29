
import { Card } from 'flowbite-react';

type propsType = {
    title: string;
    image: string;
    description: string;
}

export default function CardDetailComponent({title,image,description} : propsType) {
  return (
    <Card className="md:w-[800px] grid sm:grid-cols-2 p-4 grid-cols-1" renderImage={() => (
        <img
          src={image || "defaul Image"}
          className="object-contain w-[300px] h-[300px] overflow-hidden mx-auto self-center"
        />
      )} >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
