import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceFour = () => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceFour.map((data, index) => (
          <div className="container" key={index}>
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2 className="title">{data.sectionTitle}</h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-lg-4 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-12"
                  key={innerIndex}
                >
                  <div className="service-card service-card-5">
                    <div className="inner">
                      <div className="icon">
                        <Image
                          src={item.img}
                          width={60}
                          height={60}
                          alt="Shape Images"
                        />
                      </div>
                      <div className="content">
                        <h6 className="title">
                          <Link href="#">{item.title}</Link>
                        </h6>
                        <p className="description">{item.course}+ Course</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceFour;
