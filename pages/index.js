import CasualContentSection from "@components/CasualContentSection";
import Layout from "@components/Layout";
import React from "react";
import { homepage } from "@constants/homepage";

const index = () => {
  return (
    <Layout>
      <div className="w-full relative">
        <CasualContentSection data={homepage.intro} />
        <CasualContentSection data={homepage.about} />
      </div>
    </Layout>
  );
};

export default index;
