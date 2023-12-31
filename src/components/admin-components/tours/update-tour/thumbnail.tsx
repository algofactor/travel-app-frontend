// @flow strict

import { Button, CircularProgress } from '@mui/material';
import Image from 'next/legacy/image';
import { MdCloudUpload } from 'react-icons/md';
import { TourInputType } from '../../../../types/input-type';

interface PropsType {
  uploadThumbnail: any;
  uploadLocation: any;
  uploading: boolean;
  inputData: TourInputType;
  setInputData: any;
}

function UpdateTourThumbnail({
  inputData,
  setInputData,
  uploading,
  uploadThumbnail,
  uploadLocation }: PropsType) {

  return (
    <div className='grid w-full py-5 md:py-8 grid-cols-1 md:grid-cols-2 gap-4 mx-12'>
      <div className="">
        {
          inputData.thumbnail ?
            <div className="w-full relative">
              <Image
                height={340}
                width={560}
                src={inputData.thumbnail}
                className="rounded-lg"
                alt="airport transport"
                layout="responsive"
                priority
              />
              <Button
                onClick={() => setInputData({ ...inputData, thumbnail: '' })}
                className="absolute min-w-fit shadow py-0 px-[5px] text-sm
                     -top-1 -right-1 bg-red-600 text-white rounded-full">X</Button>
            </div>
            :
            <div
              className="border-2 border-[#0000004d] border-dashed flex items-center
           justify-center w-full min-h-[340px] relative bg-[#f1f1f1]  rounded-lg">
              {
                uploading ?
                  <div className="w-24 h-24"><CircularProgress /></div> :
                  <div className="flex items-center justify-center flex-col py-8">
                    <MdCloudUpload className="text-2xl" />
                    <p>(560 x 340)</p>
                    <p className="my-2">
                      Choose a <span className="text-[#6f7531] font-bold">Thumbnail</span> to upload.
                    </p>
                  </div>
              }
              <input
                type="file"
                className="block border-none absolute top-0 left-0 
                right-0 bottom-0 opacity-0"
                accept=".png, .jpg, .jpeg"
                onChange={uploadThumbnail}
              />
            </div>
        }
      </div>
      <div className="">
        {
          inputData.locationImg ?
            <div className="w-[340px]  relative">
              <Image
                height={340}
                width={340}
                src={inputData.locationImg}
                className="rounded-lg"
                alt="airport transport"
                layout="responsive"
                priority
              />
              <Button
                onClick={() => setInputData({ ...inputData, locationImg: '' })}
                className="absolute min-w-fit shadow py-0 px-[5px] text-sm
                     -top-1 -right-1 bg-red-600 text-white rounded-full">X</Button>
            </div>
            :
            <div
              className="border-2 border-[#0000004d] border-dashed flex items-center
           justify-center w-[340px] min-h-[340px] relative bg-[#f1f1f1]  rounded-lg">
              {
                uploading ?
                  <div className="w-24 h-24"><CircularProgress /></div> :
                  <div className="flex items-center justify-center flex-col py-8">
                    <MdCloudUpload className="text-2xl" />
                    <p>(432 x 432)</p>
                    <p className="my-2">
                      Choose a <span className="text-[#6f7531] font-bold">Location Img</span> to upload.
                    </p>
                  </div>
              }
              <input
                type="file"
                className="block border-none absolute top-0 left-0 
                right-0 bottom-0 opacity-0"
                accept=".png, .jpg, .jpeg"
                onChange={uploadLocation}
              />
            </div>
        }
      </div>
    </div>
  );
};

export default UpdateTourThumbnail;