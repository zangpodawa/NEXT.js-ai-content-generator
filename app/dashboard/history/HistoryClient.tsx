// app/dashboard/history/HistoryClient.tsx (Client Component)

"use client";

import React from "react";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../_components/TemplateListSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HISTORY } from "./page";

interface HistoryClientProps {
  historyList: HISTORY[];
}

const HistoryClient: React.FC<HistoryClientProps> = ({ historyList }) => {
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find((item) => item);
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated prompt</p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {historyList.map((item: HISTORY, index: number) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex gap-2 items-center">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon}
                width={25}
                height={25}
                alt="image"
              />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3">{item?.aiResponse}</h2>
            <h2>{item?.createdAt}</h2>
            <h2>{item?.aiResponse.length}</h2>
            <h2>
              <Button
                variant="ghost"
                className="text-primary"
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              >
                Copy
              </Button>
            </h2>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default HistoryClient;
