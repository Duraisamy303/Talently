import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";

const BrandThree = (props) => {
  const {data}=props
  return (
    <div className="container">
      {data &&
       data?.map((data, index) => (
          <div className="row align-items-center" key={index}>
            <div className="col-lg-12">
              <div className="section-title text-center mb--40">
               <h4 className="rbt-card-title w-600">{data.title}</h4>
              </div>
              <ul className="brand-list brand-style-2 justify-content-center justify-content-lg-between">
                {data.logo.map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <Link href="#">
                      <Image
                        src={item}
                        width={item.width}
                        height={item.height}
                        priority={true}
                        alt="Brand Image"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BrandThree;
