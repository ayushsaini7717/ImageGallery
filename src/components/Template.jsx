import React from "react"
const Template=({image})=>{
    return <>
        <div className="overflow-hidden rounded">
            <img src={`${image.webformatURL}`}></img>
            <div className="px-4 py-3">
                <div className="text-lg text-purple-600 font-medium">
                    photo by pixabay
                </div>
                <div className="flex gap-1">
                    <div className="font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                    </div>
                    <div>
                     {`${image.views}`}
                    </div>
                </div>
                <div className="flex gap-1">
                    <div className="font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    </div>
                    <div>{`${image.downloads}`}</div>
                </div>
                <div className="flex gap-1">
                <div className="font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</div>
                <div>{`${image.likes}`}</div>
                </div>
                <div className="py-2 bg-gray-500 rounded active:opacity-70 duration-600 text-white flex justify-center font-bold">
                    <a href={`${image.largeImageURL}`}>Preview</a>
                </div>
            </div>
        </div>
    </>
}

export default Template;