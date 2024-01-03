import { Row, Container, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  done,
  greenCheck,
  redCar,
  yellowCar,
  yellowCheck,
  question,
  redCheck,
  bag,
} from "../assets";
import { useSelector } from "react-redux";
import { fetchData } from "../redux/fetchSlice";
import { dataHandlingAr } from "../constants";
import { useEffect, useState } from "react";

const modifyDate = (date) => {
  const numDate = date?.substring(0, 10);
  const time = date?.substring(11, 16);
  const days = [
    "الأحد",
    "الأثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const d = new Date(numDate);
  const dayName = days[d.getDay()];
  return time + " at " + numDate + "  " + dayName;
};

const TrackBar = (success) => {
  const [htmlCurr, setHtmlCurr] = useState({});
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dataHandlingAr.map((currentOrderStatus) =>
      currentOrderStatus.state === data?.data?.CurrentStatus?.state
        ? setHtmlCurr(currentOrderStatus)
        : console.log(htmlCurr)
    );
  }, [data]);
  {
    if (data.success) {
      return (
        <div className="font-Cairo lg:p-20 lg:mg-30">
          <div className="font-light flex flex-row-reverse text-end w-[80] pr-[10%] border  pb-10 pt-5">
            <section className="grow p-0 ">
              رقم الشحنة {data?.data?.TrackingNumber}
              <span
                className={`block font-bold pt-2 text-md lg:text-lg ${
                  htmlCurr.color === "yellow"
                    ? "text-yellow-500"
                    : htmlCurr.color === "red"
                    ? "text-red-600"
                    : "text-green-500"
                }`}
              >
                {htmlCurr.textState}
              </span>
            </section>
            <section className="grow">
              اخر تحديث
              <span className="block font-bold pt-2 text-sm lg:text-xl">
                {modifyDate(data?.data?.CurrentStatus?.timestamp)}
              </span>
            </section>
            <section className="grow">
              اسم التاجر
              <span className="block font-bold pt-2 text-sm lg:text-xl">
                {data?.data?.provider}
              </span>
            </section>
            <section className="grow p-0">
              موعد التسليم خلال
              <span className="block font-bold pt-2 text-sm lg:text-xl">
                {modifyDate(data?.data?.PromisedDate)}
              </span>
            </section>
          </div>

          {/*  Progress Bar */}
          <div className="flex flex-col space-y-8 border border-gray-300 pb-5">
            <div
              className={`relative mt-10 ml-[10%] w-[80%] p-0 h-5 border rounded-2xl ${
                htmlCurr.color === "yellow"
                  ? "bg-yellow-500"
                  : htmlCurr.color === "red"
                  ? "bg-red-600"
                  : "bg-green-800"
              }`}
            >
              <img
                className="absolute mg-0 p-0 right-0 w-6 h-6"
                src={
                  htmlCurr.icon1 == "greenCheck"
                    ? greenCheck
                    : htmlCurr.icon1 == "redCheck"
                    ? redCheck
                    : yellowCheck
                }
                alt="pic"
              />
              <img
                className="absolute mg-0 p-0 right-[30%] w-6 h-6"
                src={
                  htmlCurr.icon2 === "greenCheck"
                    ? greenCheck
                    : htmlCurr.icon2 === "redCheck"
                    ? redCheck
                    : yellowCheck
                }
                alt="pic"
              />
              <img
                className={`absolute mg-0 p-0 right-[60%] z-20 ${
                  !htmlCurr.all ? "w-12 h-12" : "w-6 h-6"
                }}`}
                src={
                  htmlCurr.icon3 === "greenCheck"
                    ? greenCheck
                    : htmlCurr.icon3 === "redCar"
                    ? redCar
                    : yellowCar
                }
                alt="pic"
              />
              <img
                className={`absolute mg-0 p-0 left-[0%] w-6 h-6 z-20 ${
                  !htmlCurr.all ? "w-12 h-12" : "w-6 h-6"
                } rounded-lg`}
                src={htmlCurr.icon4 == "greenCheck" ? greenCheck : bag}
                alt="pic"
              />
              {!htmlCurr.all ? (
                <div className="absolute lg:w-[37%] w-[33%] ml-5  h-5 border rounded-2xl bg-slate-200"></div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-row-reverse text-right w-[80%] ml-[10%] font-Cairo font-bold">
              <section className="grow">{htmlCurr.detail1}</section>
              <section className="grow">{htmlCurr.detail2}</section>
              <section className="grow">
                {htmlCurr.detail3}
                {!htmlCurr.all ? (
                  <span
                    className={`block ${
                      htmlCurr.color === "yellow"
                        ? "text-yellow-500"
                        : htmlCurr.color === "red"
                        ? "text-red-600"
                        : "text-green-500"
                    }`}
                  >
                    {htmlCurr.detail5}
                  </span>
                ) : (
                  ""
                )}
              </section>
              <section className="grow p-0 ">{htmlCurr.detail4}</section>
            </div>
          </div>

          {/* Last Section */}
          <div className="font-Cairo flex flex-row-reverse w-full mt-8">
            <div className="w-[70%] text-right font-semibold text-lg">
              تفاصيل الشحنة
              <table className=" w-full rtl:text-right end-0 table-fixed mt-4 lg:text-lg text-xs">
                <thead className="bg-gray-100">
                  <tr>
                    <th className=" font-extralight">التفاصيل</th>
                    <th className="font-extralight">الوقت</th>
                    <th className="font-extralight">التاريخ</th>
                    <th className="font-extralight p-4">الفرع</th>
                  </tr>
                </thead>
                <tbody className="p-4">
                  <tr className="border border-slate-100 p-2">
                    <td className="pt-2">{htmlCurr.detail1}</td>
                    <td>12:30</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                  </tr>
                  <tr className="border border-slate-100 p-2">
                    <td className="pt-2">{htmlCurr.detail2}</td>
                    <td>12:30</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                  </tr>
                  <tr className="border border-slate-100 p-2">
                    <td className="pt-2">
                      {htmlCurr.detail3}
                      {!htmlCurr.all ? (
                        <span
                          className={`block ${
                            htmlCurr.color === "yellow"
                              ? "text-yellow-500"
                              : htmlCurr.color === "red"
                              ? "text-red-600"
                              : "text-green-500"
                          }`}
                        >
                          {htmlCurr.detail5}
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>12:30</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                  </tr>
                  <tr
                    className={`border border-slate-100 p-2 ${
                      !htmlCurr.all ? "hidden" : ""
                    } `}
                  >
                    <td className="pt-2">{htmlCurr.detail4}</td>
                    <td>12:30</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div dir="rtl" className=" font-Cairo font-semibold text-lg  ">
              عنوان التسليم
              <div
                dir="rtl"
                className=" bg-slate-50 p-4 mt-4 m-2 text-lg border border-gray-200 font-light"
              >
                امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17
                بلوك33...Cairo
              </div>
              <div className="flex flex-row border border-gray-200 mr-2">
                <img src={question} className="w-22" />
                <span className="pt-[15%]">
                  هل يوجد مشكلة في شحنتك؟ّ
                  <button className="bg-red-600 w-[80%] rounded-lg text-white p-2 mt-2">
                    {" "}
                    ابلاغ عن مشكلة
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (data.error) return <h1>Sorry Can't Reach Data Now!</h1>;
  }
};
export default TrackBar;
