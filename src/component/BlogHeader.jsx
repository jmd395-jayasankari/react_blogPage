import React from 'react'
import { AppWindowMac, CirclePlus } from 'lucide-react'; 

const BlogHeader = () => {
  return (
    <div className="m-2 flex w-full bg-red-200">
    <div className="gap-2 w-full p-4 text-xl  flex justify-start">
      <AppWindowMac /> <h4 className="m-0 text-left ">BlogList</h4>
    </div>

    <div className="m-2 p-4 bg-red-200 flex justify-">
  <h4 className="text-right">Home</h4>
  </div>
<div className="m-2 p-4 bg-red-200 flex justify-end">
<CirclePlus /> <h4 className="text-right">AddBlog</h4>
  
</div>

    </div>
  )
}

export default BlogHeader
