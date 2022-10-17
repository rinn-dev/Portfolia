import CasualContentSection from "@components/CasualContentSection";
import Layout from "@components/Layout";
import React from "react";
import { homepage } from "@constants/homepage";
import { projects } from "@constants/projects";
import RecentWorks from "@components/RecentWorks";

const index = () => {
  return (
    <Layout>
      <div className="w-full relative">
        <CasualContentSection data={homepage.intro} />
        <CasualContentSection data={homepage.about} />
        <RecentWorks projects={projects} />
      </div>
    </Layout>
  );
};

export default index;
