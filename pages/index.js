import CasualContentSection from "@components/CasualContentSection";
import Layout from "@components/Layout";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full">
        <CasualContentSection />
        <CasualContentSection isReversed />
        <CasualContentSection />
      </div>
    </Layout>
  );
};

export default index;
