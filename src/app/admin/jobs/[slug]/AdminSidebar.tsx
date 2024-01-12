"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import { Job } from "@prisma/client";
import { FC } from "react";
import { useFormState } from "react-dom";
import { approveSubmission, deleteJob } from "../../actions";

interface AdminSidebarProps {
  job: Job;
}

const AdminSidebar: FC<AdminSidebarProps> = ({ job }) => {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <span className="text-center font-semibold text-green-500">
          Approved
        </span>
      ) : (
        <ApproveButton jobId={job.id} />
      )}
      <DeleteButton jobId={job.id} />
    </aside>
  );
};

function ApproveButton({ jobId }: { jobId: number }) {
  const [formState, formAction] = useFormState(approveSubmission, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600">
        Approve
      </FormSubmitButton>
      {formState?.error && (
        <span className="text-sm text-red-500">{formState.error}</span>
      )}
    </form>
  );
}

function DeleteButton({ jobId }: { jobId: number }) {
  const [formState, formAction] = useFormState(deleteJob, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitButton>
      {formState?.error && (
        <span className="text-sm text-red-500">{formState.error}</span>
      )}
    </form>
  );
}

export default AdminSidebar;
