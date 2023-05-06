import React from "react";

function ServiceReq() {
  const reqs = [];

  for (let i = 1; i <= 3; i++) {
    reqs.push({
      id: i,
      title: "Условия сервиса",
      desc: "Задача организации, в особенности же курс на социально-ориентированный национальный проект требует от нас системного анализа модели развития! Таким образом, постоянное информационно-техническое обеспечение нашей деятельности требует от нас анализа системы масштабного изменения ряда параметров! С другой стороны социально-экономическое развитие напрямую зависит от всесторонне сбалансированных нововведений?",
    });
  }

  console.log(reqs)

  return (
    <>
      <div className="main mt-[40px]">
        <div className="flex flex-col gap-[40px]">
          {reqs.map((itm, idx) => {
            return (
                <div className="flex flex-col bg-white w-full px-[30px] py-[15px] shadow-xl rounded-[30px]" key={idx}>
                  <h2 className="text-[20px] text-[#1C1C27] font-[600]">{itm.title}</h2>
                  <p className="pt-[15px] pl-[15px] text-[20px]">{itm.desc}</p>
                </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default ServiceReq;
