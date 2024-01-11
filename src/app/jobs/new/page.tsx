import { Metadata } from "next";
import { FC } from "react";
import NewJobForm from "./NewJobForm";

interface newJobPageProps {}

export const metadata: Metadata = {
  title: "Post a new job",
};

const NewJobPage: FC<newJobPageProps> = () => {
  return <NewJobForm />;
};

export default NewJobPage;
