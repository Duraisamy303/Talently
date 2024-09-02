import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

import BlogData from "../../data/blog/blog.json";
import CourseDetails from "../../data/course-details/courseData.json";
import Separator from "@/components/Common/Separator";

import client1 from "../../public/images/banner/banner-icon-1.jpg";
import client2 from "../../public/images/banner/banner-icon-2.jpg";
import client3 from "../../public/images/banner/banner-icon-3.jpg";
import client4 from "../../public/images/testimonial/client-12.png";
import languageClub from "../../public/images/banner/language-club.png";
import SingleCourseData from "../../data/pages/11-singleCourse.json";

import CategoryFour from "../Category/CategoryFour";
import Counter from "../Counters/Counter";
import AboutTwo from "../Abouts/About-Two";
import CountDownTwo from "../Counters/CountDownTwo";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "../Cards/Card";
import BrandThree from "../Brand/Brand-Three";
import BrandTwo from "../Brand/Brand-Two";
import CategoryOne from "../Category/CategoryOne";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import AdvanceTabFour from "../AdvanceTab/AdvanceTab-Four";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import SingleCourseProp from "../11-single-course/SingleCourseProp";
import TeamEight from "../Team/TeamEight";
import aluminiLogo1 from "../../public/images/alumini/1.png";
import aluminiLogo2 from "../../public/images/alumini/2.png";
import aluminiLogo3 from "../../public/images/alumini/3.png";
import aluminiLogo4 from "../../public/images/alumini/4.png";
import aluminiLogo5 from "../../public/images/alumini/5.png";
import recogLogo1 from "../../public/images/recognize/1.png";
import recogLogo2 from "../../public/images/recognize/2.png";
import recogLogo3 from "../../public/images/recognize/3.png";
import recogLogo4 from "../../public/images/recognize/4.png";

import brandLogo1 from "../../public/images/brand/l-6.png";
import brandLogo2 from "../../public/images/brand/l-10.png";
import brandLogo3 from "../../public/images/brand/l-9.png";
import brandLogo4 from "../../public/images/brand/l-8.png";
import brandLogo5 from "../../public/images/brand/l-7.png";
import brandLogo6 from "../../public/images/brand/l-11.png";
import brandLogo7 from "../../public/images/brand/l-5.png";
import brandLogo8 from "../../public/images/brand/l-12.png";
import brandLogo9 from "../../public/images/brand/l-4.png";
import brandLogo10 from "../../public/images/brand/l-3.png";
import brandLogo11 from "../../public/images/brand/l-1.png";
import brandLogo12 from "../../public/images/brand/l-2.png";

import recognize1 from "../../public/images/recognize/img-1.jpg";
import recognize2 from "../../public/images/recognize/img-2.jpg";
import recognize3 from "../../public/images/recognize/img-3.jpg";

import containerLogo1 from "../../public/images/recognize/logo-1.jpg";
import containerLogo2 from "../../public/images/recognize/logo-3.jpg";
import containerLogo3 from "../../public/images/recognize/logo-2.jpg";
import containerLogo4 from "../../public/images/recognize/logo-5.jpg";
import containerLogo5 from "../../public/images/recognize/logo-4.jpg";
import containerLogo6 from "../../public/images/recognize/logo-6.jpg";
import containerLogo7 from "../../public/images/recognize/logo-9.jpg";
import containerLogo8 from "../../public/images/recognize/logo-7.jpg";
import containerLogo9 from "../../public/images/recognize/logo-8.jpg";

import com_1 from "../../public/images/companies/10.png";
import com_2 from "../../public/images/companies/9.png";
import com_3 from "../../public/images/companies/8.png";
import com_4 from "../../public/images/companies/7.png";
import com_5 from "../../public/images/companies/6.png";
import com_6 from "../../public/images/companies/5.png";
import com_7 from "../../public/images/companies/4.png";
import com_8 from "../../public/images/companies/3.png";
import com_9 from "../../public/images/companies/2.png";
import com_10 from "../../public/images/companies/1.png";
import com_11 from "../../public/images/companies/11.png";
import com_12 from "../../public/images/companies/13.png";
import com_13 from "../../public/images/companies/16.png";
import com_14 from "../../public/images/companies/47.png";
import com_15 from "../../public/images/companies/44.png";
import com_16 from "../../public/images/companies/31.png";
import com_17 from "../../public/images/companies/46.png";
import com_18 from "../../public/images/companies/43.png";
import com_19 from "../../public/images/companies/41.png";
import com_20 from "../../public/images/companies/34.png";
import com_21 from "../../public/images/companies/37.png";
import com_22 from "../../public/images/companies/42.png";
import com_23 from "../../public/images/companies/30.png";
import com_24 from "../../public/images/companies/39.png";
import com_25 from "../../public/images/companies/45.png";
import com_26 from "../../public/images/companies/40.png";
import com_27 from "../../public/images/companies/38.png";
import com_28 from "../../public/images/companies/33.png";
import com_29 from "../../public/images/companies/29.png";
import com_30 from "../../public/images/companies/35.png";
import com_31 from "../../public/images/companies/36.png";
import com_32 from "../../public/images/companies/27.png";
import com_33 from "../../public/images/companies/32.png";
import com_34 from "../../public/images/companies/26.png";
import com_35 from "../../public/images/companies/24.png";
import com_36 from "../../public/images/companies/28.png";
import com_37 from "../../public/images/companies/23.png";
import com_38 from "../../public/images/companies/25.png";
import com_39 from "../../public/images/companies/22.png";
import com_40 from "../../public/images/companies/21.png";
import com_41 from "../../public/images/companies/20.png";
import com_42 from "../../public/images/companies/19.png";
import com_43 from "../../public/images/companies/15.png";
import com_44 from "../../public/images/companies/17.png";
import com_45 from "../../public/images/companies/18.png";
import com_46 from "../../public/images/companies/14.png";
import com_47 from "../../public/images/companies/12.png";

import aca_1 from "../../public/images/scroll/log-1.png";
import aca_2 from "../../public/images/scroll/log-2.png";
import aca_3 from "../../public/images/scroll/log-3.png";
import aca_4 from "../../public/images/scroll/log-4.png";

const LanguageAcademy = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  const data = [
    {
      logo: "/images/banner/banner-img-1.jpg",
      discount: "-40% Off",
      lession: 12,
      students: 50,
      title: "Quisque",
      content: "",
      rating: 5,
      review: 15,
      desc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    },
    {
      logo: "/images/banner/banner-img-2.jpg",
      discount: "-40% Off",
      lession: 12,
      students: 50,
      title: "Consequat",
      content: "",
      rating: 5,
      review: 15,
      desc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    },
  ];

  const alumini = [
    {
      title: "Alumini Insights, Your Competitve Edge",
      logo: [
        aluminiLogo1,
        aluminiLogo2,
        aluminiLogo3,
        aluminiLogo4,
        aluminiLogo5,
   
      ],
    },
  ];

  const recognize = [
    {
      title: "Recognized for Excellence",
      logo: [recogLogo1, recogLogo2, recogLogo3, recogLogo4],
    },
  ];

  const shipping = {
    counterOne: [
      {
        body: [
          {
            text: "Universities & Colleges on Board",
            num: 700,
            top: true,
          },
          {
            text: "Companies Hired with Us",
            num: 2600,
            top: false,
          },
          {
            text: "Freshers Ready to Deploy",
            num: 4500,
            top: true,
          },
          {
            text: "TPO Connects across India ",
            num: 5000,
            top: false,
          },
        ],
      },
    ],
  };

  const brand = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
    brandLogo9,
    brandLogo10,
    brandLogo11,
    brandLogo12,
  ];

  const courseData = {
    container1: {
      img: recognize1,
      title: `Turpis lectus risus odio ${"\n"}maximus,tortor ligula mi.`,
      desc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      imgs: [
        containerLogo1,
        containerLogo2,
        containerLogo3,
        containerLogo4,
        containerLogo5,
        containerLogo6,
        containerLogo7,
        containerLogo8,
        containerLogo9,
      ],
    },
    container2: {
      img: recognize2,
      title: `Awards`,
      desc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    },
    container3: {
      img: recognize3,
      title: `Vestibulum hendrerit`,
      desc: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      subContent: [
        {
          text: "Ecommerce Website",
        },
        {
          text: "Travel Agency",
        },
        {
          text: "Shopping Cart",
        },
        {
          text: "News Portal",
        },
        {
          text: "Education Management",
        },
      ],
    },
  };
  const companies = [
    com_1,
    com_2,
    com_3,
    com_4,
    com_5,
    com_6,
    com_7,
    com_8,
    com_9,
    com_10,
    com_11,
    com_12,
    com_13,
    com_14,
    com_15,
    com_16,
    com_17,
    com_18,
    com_19,
    com_20,
    com_21,
    com_22,
    com_23,
    com_24,
    com_25,
    com_26,
    com_27,
    com_28,
    com_29,
    com_30,
    com_31,
    com_32,
    com_33,
    com_34,
    com_35,
    com_36,
    com_37,
    com_38,
    com_39,
    com_40,
    com_41,
    com_42,
    com_43,
    com_44,
    com_45,
    com_46,
    com_47,
  ];

  const academic = [aca_1, aca_2, aca_3, aca_4];
  return (
    <>
      <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-primary-opacity">
                        MORBI CONSEQUAT
                      </span>
                    </div>
                    <h3 className="title">
                      Unleash Your
                      <br />
                      <span className="theme-gradient">Curiosity ,</span>
                      Unleash
                      <br />
                      <span> Your Potential</span>
                    </h3>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          tabIndex="0"
                        >
                          <Image
                            src={client1}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Mark"
                          tabIndex="0"
                        >
                          <Image
                            src={client2}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Jordan"
                          tabIndex="0"
                        >
                          <Image
                            src={client3}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 3000+ Students
                          </h5>
                          <p className="subtitle">
                            Have a new ideas every week.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-button-group justify-content-start mt--30">
                      <Link
                        className="rbt-btn btn-gradient rbt-switch-btn"
                        href="#"
                      >
                        <span data-text="Sign Up Now">Sign Up Now</span>
                      </Link>
                      <Link
                        className="rbt-btn btn-border rbt-switch-btn"
                        href="#"
                      >
                        <span data-text="Find Courses">Find Courses</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="row g-5">
                  <Card
                    col="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                    mt=""
                    start={0}
                    end={2}
                    isDesc={false}
                    isUser={false}
                    data={data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <CategoryFour />
          </div>
        </div>
      </div> */}
      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <BrandThree data={alumini} />
            </div>
          </div>
        </div>
      </div>
      <Separator />

      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <BrandThree data={recognize} />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-counterup-area rbt-section-gapBottom bg-gradient-5  ">
        <div className="container">
          <div className="row mb--60 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity mt--60">
                  PHASELLUS AUGUE
                </span>
                <div>
                  <h2 className="title">Shaping Careers and Connecting </h2>
                  <h2 className="title">Top Talent Since 2010</h2>
                </div>
                <p className="description has-medium-font-size mt--20 mb--0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
            </div>
          </div>
          <Counter head={false} data={shipping} />
        </div>
      </div>

      <div className="rbt-counterup-area rbt-section-gapBottom  ">
        <div className="container">
          <div className="row mb--60 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity mt--60">
                  ALIQUAM VEL
                </span>
                <h2 className="title">Our Brands</h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
              </div>
            </div>
          </div>
          <div className="row  mt--30 rbt-brand-area bg-color-white ">
            <CategoryOne data={brand} />
          </div>
        </div>
      </div>
      {/* [#37A282] */}
      <div className="rbt-course-banner-area bg-color-green">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity-new mt--60">
                    VULPUTATE
                  </span>
                  <h2 className="title color-white">
                  Recogniions and Accreditations
                  </h2>
                  {/* <p className="description has-medium-font-size mt--20 mb--0">
                    Language Academic?
                  </p> */}
                  <Link
                    className="rbt-btn hover-icon-reverse btn-border color-white-off mt--30 mb--30"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Know More</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="row g-5">
                  <SingleCourseProp
                    courseData={SingleCourseData.certificate}
                    image={true}
                    data={courseData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-grey rbt-section-gap-own">
        <div className="row  ">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity ">duis lectus</span>
              <h2 className="title">Our Academic Partners</h2>
              {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
            </div>
          </div>
        </div>
        <TeamEight head={false} data={academic} />
      </div>
      <div>
        <div className="container">
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  VEHICULA LABORTIS
                </span>
                <h2 className="title">2500+ Companies Hire our</h2>
                <h2 className="title"> Pre-trained Candidates </h2>

                <p className="description has-medium-font-size mt--20 mb--0">
                  Master Python by building 100 projects in 100 days. Learn data
                  science, automation, build websites, games and apps
                </p>
              </div>
            </div>
          </div>
          <BrandTwo data={companies} />
        </div>
      </div>

      <div className="rbt-call-to-action-area  bg-gradient-16 rbt-section-gap-own">
        <CallToActionSix />
      </div>
    </>
  );
};

export default LanguageAcademy;
