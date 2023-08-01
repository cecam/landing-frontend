'use client'

import { useContext } from "react";
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";

import supabase from "@/utils/supabaseClient";

import UserContext from "@/contexts/userContext";
import Form from '@/components/SocialMedia/Form';
import Box from '@/components/SocialMedia/Box';
import withAuth from '@/HOC/auth';
import { useState } from "react";

const AdminPage = () => {
  const { user } = useContext(UserContext);
  const [images, setImages] = useState<ImageListType[]>([]);

  console.log('user', user)

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[]);
  };

  const uploadProfileImage = async() => {
    if(images.length === 0) return

    const image: ImageType = images[ 0 ]
    if(image.file) {
      const { data, error } = await supabase.storage.from('public').upload(`${user}/${image.file.name}`, image.file, {upsert: true})
    }
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div className="max-h-[480px] grid grid-col place-items-center gap-3 p-5">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={1}
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            <div className="bg-gray-300 w-full rounded-lg flex items-center justify-center min-h-[200px]">
              {imageList.length === 0 && (
                <button
                  className={`text-2xl ${isDragging ? "text-red-500" : "text-gray-500"} border-2 border-dashed border-gray-500 rounded-lg p-5 min-h-[200px] w-full flex items-center justify-center`}
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
              )}
              {imageList.map((image, index) => (
                <div key={index} className="flex flex-col justify-evenly p-3">
                  <img src={image.dataURL} alt="uplead image" className="max-h-[180px] w-auto rounded-full mb-3"/>
                  <div className="flex w-full gap-5">
                    <button
                      className="border border-gray-500 text-gray-500 rounded-md p-2 w-full hover:outline-dashed hover:border-gray-700 hover:text-gray-700 transition-all duration-150"
                      onClick={() => onImageUpdate(index)}>Update</button>
                    <button 
                      className="border border-red-500 text-red-500 rounded-md p-2 w-full hover:outline-dashed hover:border-red-700 hover:text-red-700 transition-all duration-150"
                      onClick={() => onImageRemove(index)}>Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        
        <button
          onClick={uploadProfileImage}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#333] hover:bg-[#444] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#333] transition-all duration-150"
        >Guardar foto de perfil</button>

        <h1 className="text-3xl font-bold text-[#333]">Celso Cárdenas</h1>
        <p className=" text-lg tracking-wide text-center text-[#4e4e4e]">Hola soy Cecam, la leyenda del código y distraído profesional</p>
      </div>

      <div>

        <Form />
        <Box />
        
      </div>
    </section>
  )
}

export default withAuth(AdminPage)
