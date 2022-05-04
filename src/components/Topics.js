import React,{useEffect} from 'react'

const Topics = ({text,image}) => {

    // useEffect(() =>)
  return (
    <div className="w-full flex pt-5 ">
                    <button className="w-1/3 mr-5 rounded-md  border-2 border-white relative text-center hover:border-red-600 hover:text-lg hover:animate-bounce">
                      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {text}
                      </div>
                      <img
                        className="w-full opacity-4.5"
                        src={image}
                        alt="hamver"
                      />
                    </button>
                  </div>
  )
}

export default Topics