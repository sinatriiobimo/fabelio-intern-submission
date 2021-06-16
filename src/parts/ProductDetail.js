import React, {useState} from 'react'
import 'helpers/currency';
import {movingPrevArray} from 'helpers/movingPrevArray';

export default function ProductDetail({data}) {
  const [slider, setSlider] = useState(() => data?.image?.[0] || "")

  console.log(data)

    return (
      <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4"></div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {data?.image?.map((item) => {
                return (
                  <div
                    className="px-2"
                    key={item}
                    onClick={() => setSlider(item)}
                  >
                    <div
                      className={[
                        "item",
                        slider === item ? "bg-gray-100 selected" : "",
                      ].join(" ")}
                    >
                      <img
                        src={item}
                        alt={item}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <img
                  src={slider}
                  alt={slider}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <h2 className="text-5xl capitalize font-semibold">{data.productname}</h2>
          <hr className="my-2" />
          <p className="text-3xl">{data.price.currency()}</p>
          <hr className="my-8" />
          <h6 className="text-xl font-semibold mb-4">About the product</h6>
          <div className="flex-1">
            <ul>
              <li className="capitalize"><span className="text-md font-semibold">Colours: </span>{data.colours}</li>
              <li className="capitalize"><span className="text-md font-semibold">Dimension: </span>{data.dimension}</li>
              <li className="capitalize"><span className="text-md font-semibold">Material: </span>{data.material}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}
